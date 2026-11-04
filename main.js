/* ============================================================================
   main.js — renders the lists in index.html from data/site.js.
   Nothing here needs editing to add content; edit data/site.js instead.
   ========================================================================== */

(function () {
  "use strict";

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

  function appendLinks(container, links) {
    (links || []).forEach(function (link) {
      container.appendChild(anchor(link.label, link.url));
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

  /* --- Profile links ----------------------------------------------------- */
  function renderProfileLinks() {
    var row = $("profile-links");
    if (!row) return;

    var links = [];
    if (SITE.email)    links.push({ label: "Email", url: "mailto:" + SITE.email });
    if (SITE.cv)       links.push({ label: "CV", url: SITE.cv });
    if (SITE.scholar)  links.push({ label: "Google Scholar", url: SITE.scholar });
    if (SITE.github)   links.push({ label: "GitHub", url: SITE.github });
    if (SITE.linkedin) links.push({ label: "LinkedIn", url: SITE.linkedin });
    if (SITE.orcid)    links.push({ label: "ORCID", url: SITE.orcid });

    appendLinks(row, links);
  }

  function renderContactEmail() {
    var node = $("contact-email");
    if (!node || !SITE.email) return;
    node.appendChild(anchor(SITE.email, "mailto:" + SITE.email));
    if (SITE.altEmail) {
      node.appendChild(document.createTextNode(" (university)  ·  "));
      node.appendChild(anchor(SITE.altEmail, "mailto:" + SITE.altEmail));
      node.appendChild(document.createTextNode(" (personal)"));
    }
  }

  /* --- Publications ------------------------------------------------------ */
  function renderPublications() {
    var list = $("publications-list");
    if (!list || !SITE.publications) return;

    SITE.publications.forEach(function (pub, index) {
      var li = el("li");
      li.appendChild(el("div", "pub-title", esc(pub.title)));
      li.appendChild(el("div", "pub-authors", pub.authors)); // <strong> is intentional

      var venue = "<em>" + esc(pub.venue) + "</em>, " + esc(pub.year);
      if (pub.status) venue += ". " + esc(pub.status);
      li.appendChild(el("div", "pub-venue", venue));

      var links = el("div", "item-links");
      var panel = null;

      if (pub.abstract) {
        panel = el("div", "pub-abstract");
        panel.id = "abstract-" + index;
        panel.hidden = true;
        panel.appendChild(el("p", null, pub.abstract)); // allows <em>

        var button = el("button", "link-button", "Abstract");
        button.type = "button";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", panel.id);
        button.addEventListener("click", function () {
          var open = panel.hidden;
          panel.hidden = !open;
          button.setAttribute("aria-expanded", String(open));
        });
        links.appendChild(button);
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

    SITE.projects
      .map(function (project, index) { return { project: project, index: index }; })
      .sort(compareProjects)
      .forEach(function (item) {
        var project = item.project;
        var li = el("li");

        var head = el("div", "project-head");
        head.appendChild(el("span", "project-name", esc(project.name)));
        if (project.years) head.appendChild(el("span", "project-years", esc(project.years)));
        li.appendChild(head);

        if (project.description) li.appendChild(el("p", "project-desc", esc(project.description)));

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

    entries.forEach(function (entry) {
      var li = el("li");
      if (entry.year) li.appendChild(el("span", "entry-year", esc(entry.year)));
      if (entry.url) {
        li.appendChild(anchor(entry.title, entry.url));
      } else {
        li.appendChild(el("span", null, esc(entry.title)));
      }
      if (entry.detail) li.appendChild(el("div", "entry-detail", esc(entry.detail)));
      list.appendChild(li);
    });
  }

  /* --- Boot -------------------------------------------------------------- */
  function init() {
    if (typeof SITE === "undefined") {
      console.error("data/site.js did not load — the page will be empty.");
      return;
    }

    initTheme();
    renderProfileLinks();
    renderContactEmail();
    renderPublications();
    renderProjects();
    renderEntries("certifications-list", SITE.certifications);

    var year = $("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
