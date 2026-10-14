(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(pointer: fine)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- HEADER ---- */
  (function () {
    var header = $('#siteHeader');
    var nav = $('#primaryNav');
    var burger = $('#burger');
    if (!header) return;

    var lastY = window.scrollY, ticking = false;
    function update() {
      var y = window.scrollY;
      header.classList.toggle('is-solid', y > 40);
      if (y > lastY && y > 320) header.classList.add('is-hidden');
      else header.classList.remove('is-hidden');
      lastY = y; ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    if (burger) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav) {
        nav.classList.remove('is-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    $$('.nav-item.has-drop').forEach(function (item) {
      var toggle = $('.nav-link', item);
      if (!toggle) return;
      var desktop = function () { return window.innerWidth > 960; };
      var closeTimer = null;
      item.addEventListener('mouseenter', function () {
        if (desktop()) {
          if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
          item.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
      item.addEventListener('mouseleave', function () {
        if (desktop()) {
          if (closeTimer) { clearTimeout(closeTimer); }
          closeTimer = setTimeout(function () {
            item.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
          }, 260);
        }
      });
      toggle.addEventListener('click', function (e) {
        if (desktop()) return;
        e.preventDefault();
        var open = item.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  })();

  /* ---- SPLIT TEXT (spaces preserved) ---- */
  $$('[data-split]').forEach(function (el) {
    if (el.dataset.split === 'done') return;
    var nodes = Array.prototype.slice.call(el.childNodes);
    var frag = document.createDocumentFragment();
    var i = 0;

    function pushWord(node) {
      var outer = document.createElement('span');
      outer.className = 'w';
      var inner = document.createElement('span');
      inner.className = 'wi';
      inner.style.setProperty('--i', i++);
      inner.appendChild(node);
      outer.appendChild(inner);
      frag.appendChild(outer);
      frag.appendChild(document.createTextNode(' '));
    }

    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        var words = node.textContent.split(/\s+/).filter(Boolean);
        words.forEach(function (w) { pushWord(document.createTextNode(w)); });
      } else if (node.nodeType === 1) {
        pushWord(node.cloneNode(true));
      }
    });

    el.textContent = '';
    el.appendChild(frag);
    el.classList.add('split');
    el.dataset.split = 'done';
  });

  /* ---- REVEAL ---- */
  (function () {
    var targets = $$('[data-reveal], [data-split]');
    if (!targets.length) return;
    if (REDUCED || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  })();

  /* ---- COUNTERS ---- */
  (function () {
    var els = $$('[data-count]');
    if (!els.length) return;
    function ease(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
    function fmt(n, dec) {
      var s = n.toFixed(dec);
      var parts = s.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }
    function run(el) {
      var to = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      if (isNaN(to)) return;
      if (REDUCED) { el.textContent = fmt(to, dec); return; }
      var dur = 1900, start = performance.now();
      (function tick(now) {
        var t = Math.min((now - start) / dur, 1);
        el.textContent = fmt(ease(t) * to, dec);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to, dec);
      })(start);
    }
    if (REDUCED || !('IntersectionObserver' in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        run(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---- HERO PARTICLE NETWORK ---- */
  (function () {
    var canvas = $('#net');
    if (!canvas || REDUCED || !FINE) return;
    var ctx = canvas.getContext('2d');
    var W = 0, H = 0, DPR = 1, pts = [], raf = null, running = false;
    var mouse = { x: -9999, y: -9999 };

    function size() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      var count = Math.round(Math.min(72, Math.max(24, (W * H) / 24000)));
      pts = new Array(count).fill(0).map(function () {
        return {
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.3 + 0.6
        };
      });
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      var LINK = 128, MOUSE_LINK = 180;

      pts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;
        var dx = p.x - mouse.x, dy = p.y - mouse.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140 && d > 0.01) {
          var f = ((140 - d) / 140) * 0.6;
          p.x += (dx / d) * f; p.y += (dy / d) * f;
        }
      });

      for (var i = 0; i < pts.length; i++) {
        for (var j = i + 1; j < pts.length; j++) {
          var a = pts[i], b = pts[j];
          var ax = a.x - b.x, ay = a.y - b.y;
          var dist = Math.sqrt(ax * ax + ay * ay);
          if (dist < LINK) {
            ctx.strokeStyle = 'rgba(102,187,106,' + ((1 - dist / LINK) * 0.28).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      if (mouse.x > -1000) {
        pts.forEach(function (p) {
          var dx = p.x - mouse.x, dy = p.y - mouse.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_LINK) {
            ctx.strokeStyle = 'rgba(165,214,167,' + ((1 - d / MOUSE_LINK) * 0.42).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          }
        });
      }

      pts.forEach(function (p) {
        ctx.fillStyle = 'rgba(165,214,167,0.7)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });

      if (running) raf = requestAnimationFrame(step);
    }
    function start() { if (!raf) { running = true; raf = requestAnimationFrame(step); } }
    function stop()  { running = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

    var hero = canvas.parentElement;
    hero.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    hero.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });

    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 180); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) start(); else stop(); });
      }, { threshold: 0.02 }).observe(hero);
    } else { start(); }

    size(); start();
  })();

})();
