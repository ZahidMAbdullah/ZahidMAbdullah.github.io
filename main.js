/* ============================================================================
   main.js — renders the lists in index.html from data/site.js.
   Nothing here needs editing to add content; edit data/site.js instead.
   ========================================================================== */

(function () {
  "use strict";

  /* --- Language ---------------------------------------------------------- */
  // English by default; index.html sets data-lang="ja" before first paint when
  // the visitor asked for Japanese (?lang=ja, or their last choice).
  var lang = document.documentElement.getAttribute("data-lang") === "ja" ? "ja" : "en";

  // Interface words the lists need. Content itself comes from site.js.
  var UI = {
    en: {
      email: "Email", abstract: "Abstract", present: "present",
      university: "university", personal: "personal",
      langButton: "Switch to Japanese"
    },
    ja: {
      email: "メール", abstract: "概要", present: "現在",
      university: "大学", personal: "個人",
      langButton: "英語に切り替え"
    }
  };

  // Link labels from site.js that read better translated on the Japanese page.
  var LINK_LABELS_JA = {
    "Conference": "学会サイト",
    "Poster": "ポスター",
    "Website": "ウェブサイト"
  };

  // A field in the current language: `description_ja` on the Japanese page if
  // it exists, otherwise the English `description`.
  function tr(item, key) {
    if (lang === "ja" && item[key + "_ja"]) return item[key + "_ja"];
    return item[key];
  }

  function linkLabel(label) {
    return (lang === "ja" && LINK_LABELS_JA[label]) || label;
  }

  function $(id) { return document.getElementById(id); }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // Escapes text that came from data and is not meant to contain markup.
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isExternal(url) {
    return /^https?:\/\//i.test(url);
  }

  function anchor(label, url, className) {
    var a = el("a", className || null, esc(label));
    a.href = url;
    if (isExternal(url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  // Wraps a link or button as [label]; the brackets are plain text, outside the link.
  function appendBracketed(container, node) {
    var wrap = el("span", "bracket");
    wrap.appendChild(document.createTextNode("["));
    wrap.appendChild(node);
    wrap.appendChild(document.createTextNode("]"));
    container.appendChild(wrap);
  }

  function appendLinks(container, links) {
    (links || []).forEach(function (link) {
      appendBracketed(container, anchor(linkLabel(link.label), link.url));
    });
  }

  /* --- Theme ------------------------------------------------------------- */
  function initTheme() {
    var toggle = $("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme");

      if (!current) {
        // No explicit choice yet — flip away from whatever the OS is doing.
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        current = prefersDark ? "dark" : "light";
      }

      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
    });
  }

  /* --- Navigation fade --------------------------------------------------- */
  // On narrow screens the nav links scroll sideways; fade the right edge only
  // while some links are still out of view.
  function updateNavFade() {
    var nav = document.querySelector(".site-nav nav");
    if (!nav) return;
    var more = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 2;
    nav.classList.toggle("has-more", more);
  }

  function initNavFade() {
    var nav = document.querySelector(".site-nav nav");
    if (!nav) return;
    nav.addEventListener("scroll", updateNavFade);
    window.addEventListener("resize", updateNavFade);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateNavFade);
    updateNavFade();
  }

  /* --- Language switch --------------------------------------------------- */
  function applyLanguage() {
    var root = document.documentElement;
    if (lang === "ja") {
      root.setAttribute("data-lang", "ja");
    } else {
      root.removeAttribute("data-lang");
    }
    root.lang = lang;

    var toggle = $("lang-toggle");
    if (toggle) toggle.setAttribute("aria-label", UI[lang].langButton);
  }

  function initLanguage() {
    var toggle = $("lang-toggle");
    applyLanguage();
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      lang = lang === "ja" ? "en" : "ja";
      try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }

      // Drop a ?lang= in the address so a reload keeps the new choice.
      if (/[?&]lang=/.test(location.search) && window.history && history.replaceState) {
        history.replaceState(null, "", location.pathname + location.hash);
      }

      applyLanguage();
      renderAll();
      updateNavFade();
    });
  }

  /* --- Profile links ----------------------------------------------------- */
  function renderProfileLinks() {
    var row = $("profile-links");
    if (!row) return;
    row.innerHTML = "";

    var links = [];
    if (SITE.email)    links.push({ label: UI[lang].email, url: "mailto:" + SITE.email });
    if (SITE.cv)       links.push({ label: "CV", url: SITE.cv });
    if (SITE.scholar)  links.push({ label: "Google Scholar", url: SITE.scholar });
    if (SITE.github)   links.push({ label: "GitHub", url: SITE.github });
    if (SITE.linkedin) links.push({ label: "LinkedIn", url: SITE.linkedin });
    if (SITE.orcid)    links.push({ label: "ORCID", url: SITE.orcid });

    // The separator is its own element so it is not part of either link.
    links.forEach(function (link, index) {
      if (index > 0) row.appendChild(el("span", "sep", "/"));
      row.appendChild(anchor(link.label, link.url));
    });
  }

  function renderContactEmail() {
    var node = $("contact-email");
    if (!node || !SITE.email) return;
    node.innerHTML = "";

    var open = lang === "ja" ? "（" : " (";
    var close = lang === "ja" ? "）" : ")";
    node.appendChild(anchor(SITE.email, "mailto:" + SITE.email));
    if (SITE.altEmail) {
      node.appendChild(document.createTextNode(open + UI[lang].university + close + "  ·  "));
      node.appendChild(anchor(SITE.altEmail, "mailto:" + SITE.altEmail));
      node.appendChild(document.createTextNode(open + UI[lang].personal + close));
    }
  }

  /* --- Publications ------------------------------------------------------ */
  // Titles, authors, venues and abstracts stay in English: the papers are English.
  function renderPublications() {
    var list = $("publications-list");
    if (!list || !SITE.publications) return;
    list.innerHTML = "";

    SITE.publications.forEach(function (pub, index) {
      var li = el("li");
      li.appendChild(el("div", "pub-title", esc(pub.title)));
      li.appendChild(el("div", "pub-authors", pub.authors)); // <strong> is intentional

      var status = tr(pub, "status");
      var venue = "<em>" + esc(pub.venue) + "</em>, " + esc(pub.year);
      if (status) venue += ". " + esc(status);
      li.appendChild(el("div", "pub-venue", venue));

      var links = el("div", "item-links");
      var panel = null;

      if (pub.abstract) {
        panel = el("div", "pub-abstract");
        panel.id = "abstract-" + index;
        panel.hidden = true;
        panel.lang = "en";
        panel.appendChild(el("p", null, pub.abstract)); // allows <em>

        var button = el("button", "link-button", esc(UI[lang].abstract));
        button.type = "button";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", panel.id);
        button.addEventListener("click", function () {
          var open = panel.hidden;
          panel.hidden = !open;
          button.setAttribute("aria-expanded", String(open));
        });
        appendBracketed(links, button);
      }

      appendLinks(links, pub.links);
      if (links.childNodes.length) li.appendChild(links);
      if (panel) li.appendChild(panel);

      list.appendChild(li);
    });
  }

  /* --- Projects ---------------------------------------------------------- */
  // Reads a free-text `years` value such as "2025", "2025 – 2026" or "2026 – present".
  function projectTimeline(project) {
    var text = String(project.years || "");
    var years = text.match(/\d{4}/g) || ["0"];
    return {
      ongoing: /present/i.test(text),
      start: parseInt(years[0], 10),
      end: parseInt(years[years.length - 1], 10)
    };
  }

  // In-progress projects first, then most recently finished; ties go to the
  // later start, then the order in site.js.
  function compareProjects(a, b) {
    var ta = projectTimeline(a.project), tb = projectTimeline(b.project);
    return (tb.ongoing - ta.ongoing) ||
           (tb.end - ta.end) ||
           (tb.start - ta.start) ||
           (a.index - b.index);
  }

  function renderProjects() {
    var list = $("projects-list");
    if (!list || !SITE.projects) return;
    list.innerHTML = "";

    SITE.projects
      .map(function (project, index) { return { project: project, index: index }; })
      .sort(compareProjects)
      .forEach(function (item) {
        var project = item.project;
        var li = el("li");

        var head = el("div", "project-head");
        head.appendChild(el("span", "project-name", esc(tr(project, "name"))));
        if (project.years) {
          var years = String(project.years).replace(/present/i, UI[lang].present);
          head.appendChild(el("span", "project-years", esc(years)));
        }
        li.appendChild(head);

        var description = tr(project, "description");
        if (description) li.appendChild(el("p", "project-desc", esc(description)));

        if (project.links && project.links.length) {
          var links = el("div", "item-links");
          appendLinks(links, project.links);
          li.appendChild(links);
        }

        list.appendChild(li);
      });
  }

  /* --- Certifications ---------------------------------------------------- */
  function renderEntries(listId, entries) {
    var list = $(listId);
    if (!list || !entries) return;
    list.innerHTML = "";

    entries.forEach(function (entry) {
      var li = el("li");
      var title = tr(entry, "title");
      if (entry.year) li.appendChild(el("span", "entry-year", esc(entry.year)));
      if (entry.url) {
        li.appendChild(anchor(title, entry.url));
      } else {
        li.appendChild(el("span", null, esc(title)));
      }
      var detail = tr(entry, "detail");
      if (detail) li.appendChild(el("div", "entry-detail", esc(detail)));
      list.appendChild(li);
    });
  }

  /* --- Boot -------------------------------------------------------------- */
  function renderAll() {
    renderProfileLinks();
    renderContactEmail();
    renderPublications();
    renderProjects();
    renderEntries("certifications-list", SITE.certifications);
  }

  function init() {
    if (typeof SITE === "undefined") {
      console.error("data/site.js did not load — the page will be empty.");
      return;
    }

    initTheme();
    initLanguage();
    renderAll();
    initNavFade();

    var year = $("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
