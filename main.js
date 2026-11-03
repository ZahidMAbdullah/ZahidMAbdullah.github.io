/* ============================================================================
   main.js — renders the lists in index.html from data/site.js.
   Nothing here needs editing to add content; edit data/site.js instead.
   ========================================================================== */

(function () {
  "use strict";

  var NEWS_VISIBLE = 4; // how many news items to show before "Show all"

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

  /* --- Header links ------------------------------------------------------ */
  function profileLinks(includeEmail) {
    var links = [];

    if (includeEmail && SITE.email) {
      links.push({ label: "Email", url: "mailto:" + SITE.email, primary: true });
    }
    if (SITE.cv)       links.push({ label: "CV", url: SITE.cv });
    if (SITE.scholar)  links.push({ label: "Google Scholar", url: SITE.scholar });
    if (SITE.github)   links.push({ label: "GitHub", url: SITE.github });
    if (SITE.linkedin) links.push({ label: "LinkedIn", url: SITE.linkedin });
    if (SITE.orcid)    links.push({ label: "ORCID", url: SITE.orcid });
    if (SITE.labUrl)   links.push({ label: "NISAR Lab", url: SITE.labUrl });

    return links;
  }

  function renderLinkRow(container, links) {
    if (!container) return;
    container.innerHTML = "";
    links.forEach(function (link) {
      container.appendChild(
        anchor(link.label, link.url, "btn" + (link.primary ? " btn-primary" : ""))
      );
    });
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

  function renderCvButton() {
    var button = $("cv-button");
    if (!button) return;
    if (!SITE.cv) return;          // stays hidden until a CV file is set
    button.href = SITE.cv;
    button.hidden = false;
  }

  /* --- Keywords ---------------------------------------------------------- */
  function renderKeywords() {
    var list = $("keywords");
    if (!list || !SITE.keywords) return;
    SITE.keywords.forEach(function (word) {
      list.appendChild(el("li", null, esc(word)));
    });
  }

  /* --- News -------------------------------------------------------------- */
  function renderNews() {
    var list = $("news");
    var toggle = $("news-toggle");
    if (!list || !SITE.news) return;

    SITE.news.forEach(function (item, index) {
      var li = el("li");
      li.appendChild(el("span", "news-date", esc(item.date)));
      li.appendChild(el("span", "news-text", item.text)); // allows <strong>/<em>
      if (index >= NEWS_VISIBLE) li.hidden = true;
      list.appendChild(li);
    });

    if (SITE.news.length <= NEWS_VISIBLE || !toggle) return;

    toggle.hidden = false;
    var expanded = false;
    toggle.addEventListener("click", function () {
      expanded = !expanded;
      Array.prototype.forEach.call(list.children, function (li, index) {
        if (index >= NEWS_VISIBLE) li.hidden = !expanded;
      });
      toggle.textContent = expanded ? "Show less" : "Show all";
    });
  }

  /* --- Publications ------------------------------------------------------ */
  function renderPublications() {
    var list = $("publications-list");
    if (!list || !SITE.publications) return;

    SITE.publications.forEach(function (pub, index) {
      var li = el("li", "pub");
      li.dataset.kind = pub.peerReviewed ? "peer" : "other";

      li.appendChild(el("div", "pub-year", esc(pub.year)));

      var body = el("div", "pub-body");

      var title = el("h3", "pub-title", esc(pub.title));
      if (pub.status) {
        title.appendChild(el("span", "tag tag-muted", esc(pub.status)));
      }
      body.appendChild(title);

      body.appendChild(el("p", "pub-authors", pub.authors)); // <strong> is intentional
      body.appendChild(el("p", "pub-venue", esc(pub.venue)));

      var actions = el("div", "pub-actions");

      if (pub.abstract) {
        var abstractId = "abstract-" + index;
        var button = el("button", "link-button", "Abstract");
        button.type = "button";
        button.style.marginTop = "0";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", abstractId);
        actions.appendChild(button);

        var panel = el("div", "pub-abstract");
        panel.id = abstractId;
        panel.hidden = true;
        panel.appendChild(el("p", null, pub.abstract)); // allows <em>

        button.addEventListener("click", function () {
          var open = panel.hidden;
          panel.hidden = !open;
          button.setAttribute("aria-expanded", String(open));
          button.textContent = open ? "Hide abstract" : "Abstract";
        });

        (pub.links || []).forEach(function (link) {
          actions.appendChild(anchor(link.label, link.url));
        });

        body.appendChild(actions);
        body.appendChild(panel);
      } else {
        (pub.links || []).forEach(function (link) {
          actions.appendChild(anchor(link.label, link.url));
        });
        body.appendChild(actions);
      }

      li.appendChild(body);
      list.appendChild(li);
    });

    initPublicationFilters(list);
  }

  function initPublicationFilters(list) {
    var bar = $("pub-filters");
    if (!bar) return;

    var buttons = bar.querySelectorAll(".filter");
    var empty = el("p", "empty-state", "No publications in this category yet.");
    empty.hidden = true;
    list.parentNode.insertBefore(empty, list.nextSibling);

    bar.addEventListener("click", function (event) {
      var button = event.target.closest(".filter");
      if (!button) return;

      var filter = button.dataset.filter;
      Array.prototype.forEach.call(buttons, function (other) {
        other.classList.toggle("is-active", other === button);
      });

      var shown = 0;
      Array.prototype.forEach.call(list.children, function (li) {
        var match = filter === "all" || li.dataset.kind === filter;
        li.hidden = !match;
        if (match) shown++;
      });

      empty.hidden = shown > 0;
    });
  }

  /* --- Talks & posters --------------------------------------------------- */
  function renderTalks() {
    var list = $("talks-list");
    if (!list || !SITE.talks) return;

    SITE.talks.forEach(function (talk) {
      var li = el("li", "talk");
      li.appendChild(el("div", "talk-date", esc(talk.date)));

      var body = el("div");
      var title = el("h4", "talk-title");
      if (talk.url) {
        title.appendChild(anchor(talk.title, talk.url));
      } else {
        title.innerHTML = esc(talk.title);
      }
      body.appendChild(title);

      var line = el("p", "talk-meta", esc(talk.venue) + (talk.place ? " &middot; " + esc(talk.place) : ""));
      if (talk.kind) {
        line.insertBefore(el("span", "tag tag-lead", esc(talk.kind)), line.firstChild);
      }
      body.appendChild(line);

      if (talk.links && talk.links.length) {
        var links = el("div", "talk-links");
        talk.links.forEach(function (link) {
          links.appendChild(anchor(link.label, link.url));
        });
        body.appendChild(links);
      }

      li.appendChild(body);
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

  // In-progress projects first, then most recently finished; ties go to
  // featured projects, then the later start, then the order in site.js.
  function compareProjects(a, b) {
    var ta = projectTimeline(a.project), tb = projectTimeline(b.project);
    return (tb.ongoing - ta.ongoing) ||
           (tb.end - ta.end) ||
           ((b.project.featured === true) - (a.project.featured === true)) ||
           (tb.start - ta.start) ||
           (a.index - b.index);
  }

  function renderProjects() {
    var grid = $("projects-list");
    if (!grid || !SITE.projects) return;

    var ordered = SITE.projects
      .map(function (project, index) { return { project: project, index: index }; })
      .sort(compareProjects)
      .map(function (item) { return item.project; });

    ordered.forEach(function (project) {
      var card = el("article", "project" + (project.featured ? " is-featured" : ""));

      var head = el("div", "project-head");
      head.appendChild(el("h3", null, esc(project.name)));
      if (project.years) head.appendChild(el("span", "project-years", esc(project.years)));
      card.appendChild(head);

      if (project.tagline) card.appendChild(el("p", "project-tagline", esc(project.tagline)));
      if (project.description) card.appendChild(el("p", "project-desc", esc(project.description)));

      if (project.links && project.links.length) {
        var links = el("div", "project-links");
        project.links.forEach(function (link) {
          links.appendChild(anchor(link.label, link.url));
        });
        card.appendChild(links);
      }

      if (project.tags && project.tags.length) {
        var tags = el("ul", "tag-row");
        project.tags.forEach(function (tag) {
          tags.appendChild(el("li", null, esc(tag)));
        });
        card.appendChild(tags);
      }

      grid.appendChild(card);
    });
  }

  /* --- Experience & teaching -------------------------------------------- */
  function renderExperience(containerId, jobs) {
    var container = $(containerId);
    if (!container || !jobs) return;

    jobs.forEach(function (job) {
      var entry = el("div", "entry exp");
      entry.appendChild(el("div", "entry-period", esc(job.period)));

      var body = el("div");
      body.appendChild(el("h4", "entry-title", esc(job.role)));

      var sub = el("p", "entry-sub");
      if (job.orgUrl) {
        sub.appendChild(anchor(job.org, job.orgUrl));
      } else {
        sub.innerHTML = esc(job.org);
      }
      body.appendChild(sub);

      if (job.note) body.appendChild(el("p", "entry-detail", esc(job.note)));

      if (job.points && job.points.length) {
        var points = el("ul", "exp-points");
        job.points.forEach(function (point) {
          points.appendChild(el("li", null, esc(point)));
        });
        body.appendChild(points);
      }

      entry.appendChild(body);
      container.appendChild(entry);
    });
  }

  /* --- Education --------------------------------------------------------- */
  function renderEducation() {
    var list = $("education-list");
    if (!list || !SITE.education) return;

    SITE.education.forEach(function (item) {
      var li = el("li", "entry");
      li.appendChild(el("div", "entry-period", esc(item.period)));

      var body = el("div");
      body.appendChild(el("h4", "entry-title", esc(item.degree)));
      body.appendChild(el("p", "entry-sub", esc(item.school)));
      if (item.detail) body.appendChild(el("p", "entry-detail", esc(item.detail)));

      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* --- Skills ------------------------------------------------------------ */
  function renderSkills() {
    var grid = $("skills-list");
    if (!grid || !SITE.skills) return;

    SITE.skills.forEach(function (group) {
      var box = el("div", "skill-group");
      box.appendChild(el("h4", null, esc(group.group)));
      var items = el("ul");
      group.items.forEach(function (item) {
        items.appendChild(el("li", null, esc(item)));
      });
      box.appendChild(items);
      grid.appendChild(box);
    });
  }

  /* --- Awards & certifications ------------------------------------------- */
  function renderAwards(listId, awards) {
    var list = $(listId);
    if (!list || !awards) return;

    awards.forEach(function (award) {
      var li = el("li", "entry");
      li.appendChild(el("div", "entry-period", esc(award.year)));

      var body = el("div");
      var title = el("h4", "entry-title");
      if (award.url) {
        title.appendChild(anchor(award.title, award.url));
      } else {
        title.innerHTML = esc(award.title);
      }
      body.appendChild(title);
      if (award.detail) body.appendChild(el("p", "entry-sub", esc(award.detail)));

      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* --- Memberships ------------------------------------------------------- */
  function renderMemberships() {
    var list = $("memberships-list");
    if (!list || !SITE.memberships) return;

    SITE.memberships.forEach(function (item) {
      var li = el("li", "entry");
      li.appendChild(el("div", "entry-period", esc(item.period)));

      var body = el("div");
      body.appendChild(el("h4", "entry-title", esc(item.name)));
      body.appendChild(el("p", "entry-sub", esc(item.role)));

      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* --- Activities -------------------------------------------------------- */
  function renderActivities() {
    var list = $("activities-list");
    if (!list || !SITE.activities) return;

    SITE.activities.forEach(function (item) {
      var li = el("li", "entry entry-simple");
      var body = el("div");
      body.appendChild(el("h4", "entry-title", esc(item.title)));
      if (item.detail) body.appendChild(el("p", "entry-sub", esc(item.detail)));
      if (item.links && item.links.length) {
        var links = el("div", "entry-links");
        item.links.forEach(function (link) {
          links.appendChild(anchor(link.label, link.url));
        });
        body.appendChild(links);
      }
      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* --- Nav highlighting -------------------------------------------------- */
  function initNavHighlight() {
    var links = document.querySelectorAll(".nav a");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    Array.prototype.forEach.call(links, function (link) {
      byId[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = byId[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Array.prototype.forEach.call(links, function (other) {
            other.classList.remove("is-current");
          });
          link.classList.add("is-current");
        }
      });
    }, { rootMargin: "-25% 0px -65% 0px" });

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* --- Boot -------------------------------------------------------------- */
  function init() {
    if (typeof SITE === "undefined") {
      console.error("data/site.js did not load — the page will be empty.");
      return;
    }

    initTheme();
    renderCvButton();
    renderKeywords();
    renderLinkRow($("hero-links"), profileLinks(true));
    renderLinkRow($("contact-links"), profileLinks(true));
    renderContactEmail();
    renderNews();
    renderPublications();
    renderTalks();
    renderProjects();
    renderExperience("experience-list", SITE.experience);
    renderExperience("teaching-list", SITE.teaching);
    renderEducation();
    renderSkills();
    renderAwards("certifications-list", SITE.certifications);
    renderAwards("awards-list", SITE.awards);
    renderMemberships();
    renderActivities();
    initNavHighlight();

    var year = $("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
