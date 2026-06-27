/* ============================================================
   Portfolio interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Current year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Theme toggle (persisted) ---- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ---- Navbar background on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('navBurger');
  var links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- Animated stat counters ---- */
  var counters = document.querySelectorAll('.stat__num');
  var started = false;
  function runCounters() {
    if (started) return;
    var statsBlock = document.querySelector('.hero__stats');
    if (!statsBlock) return;
    var rect = statsBlock.getBoundingClientRect();
    if (rect.top > window.innerHeight - 80) return;
    started = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var dur = 1100, start = performance.now();
      function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  window.addEventListener('scroll', runCounters, { passive: true });
  runCounters();

  /* ---- Contact form: mailto fallback when not served over HTTP ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    var isHttp = location.protocol === 'http:' || location.protocol === 'https:';
    if (!isHttp) {
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Opening as a local file — this button opens your email app. The form sends automatically once the site is live on the web.';
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var get = function (n) {
          var el = form.querySelector('[name="' + n + '"]');
          return el ? el.value.trim() : '';
        };
        var subject = get('subject') || 'Message from portfolio';
        var body =
          'Name: ' + get('name') + '\n' +
          'Email: ' + get('email') + '\n\n' +
          get('message');
        window.location.href =
          'mailto:corsegaalex@gmail.com?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
      });
    }
  }

  /* ---- Active nav link per page ---- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var pageKey = path.indexOf('projects') === 0 ? 'projects'
              : path.indexOf('contact') === 0 ? 'contact'
              : 'home';
  document.querySelectorAll('.nav__links a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === pageKey) a.classList.add('active');
  });
})();
