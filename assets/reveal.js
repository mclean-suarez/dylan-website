/* Site-wide scroll reveal (Kinso-style): content eases up and fades in as it enters the viewport.
   Content is fully visible without JavaScript — the hidden state only applies once html.rv-on is set here. */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SEL = [
    '[data-reveal]',
    /* homepage + main pages */
    '#top .hh-text > *', '#top .kd-wrap', '.hh-cta > *', '.hh-logos > *',
    '.kf-label', '.ak-row > *', '.ak-head', '.ak-strip', '.ak-dark-in > *', '.ak-faq > *', '.ak-finale',
    '.pg-ans', '.pg-sub', '.pg-two > *', '.pg-member', '.pg-cal', '.pg-guides', '.pg-incl', '.pg-revs > *', '.pg-rev-h',
    /* articles, hub, bios, legal */
    'main > nav[aria-label="Breadcrumb"] ~ *', '.aoa-prose > *', '.aoa-grid > *', '.aoa-related > *',
    /* skills guide */
    '.sk-hero > *', '.sk-stats', '.sk-pick', '.sk-head', '.sk-grid > *', '.sk-signs-h', '.sk-signs > *', '.sk-sechead', '.sk-install > *', '.sk-check', '.sk-safe'
  ].join(',');
  var SKIP = '.hn-nav, nav.hn-nav *, .kd-stack, [style*="position:sticky"], .pg-sticky';
  var IMG = '.ak-stage, .kd-wrap, .sk-shelf, .sk-card, .sk-grid > .sk-card, .pg-guides';

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { done.add(e.target); e.target.classList.add('rv-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
  var seen = new WeakSet(), done = new WeakSet();

  function scan() {
    var found = Array.prototype.slice.call(document.querySelectorAll(SEL));
    var set = new Set(found);
    found.forEach(function (el) {
      if (el.closest(SKIP) || el.matches(SKIP)) return;
      // the page runtime can re-render and reset class names: put ours back without replaying the motion
      if (seen.has(el)) { if (!el.classList.contains('rv')) { el.classList.add('rv'); if (el.matches(IMG)) el.classList.add('rv-img'); if (done.has(el)) el.classList.add('rv-in'); } return; }
      // only the outermost match animates (no double motion on nested matches)
      for (var p = el.parentElement; p; p = p.parentElement) { if (set.has(p) && !p.matches(SKIP)) return; }
      el.classList.add('rv');
      if (el.matches(IMG)) el.classList.add('rv-img');
      // gentle stagger between siblings that reveal together
      var i = 0, s = el.previousElementSibling;
      while (s && i < 6) { if (set.has(s)) i++; s = s.previousElementSibling; }
      el.style.setProperty('--rv-d', (i * 0.09).toFixed(2) + 's');
      seen.add(el); io.observe(el);
    });
    // pages without any known blocks (bios, legal): reveal main's direct children
    if (!document.querySelector('.rv')) { var m = document.querySelector('main'); if (m && !seen.has(m)) { Array.prototype.forEach.call(m.children, function (c, i) { seen.add(c); c.classList.add('rv'); c.style.setProperty('--rv-d', Math.min(i, 5) * 0.08 + 's'); io.observe(c); }); } }
  }

  function start() {
    document.documentElement.classList.add('rv-on');
    scan();
    // pages rendered by the dc runtime fill in after load — pick up new content as it appears
    var t; new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 60); })
      .observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    // safety net: never leave anything hidden (e.g. print, odd layouts)
    setTimeout(function () { document.querySelectorAll('.rv:not(.rv-in)').forEach(function (el) {
      var r = el.getBoundingClientRect(); if (r.bottom < 0) el.classList.add('rv-in');
    }); }, 4000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.addEventListener('beforeprint', function () { document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('rv-in'); }); });
})();
