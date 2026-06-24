/* わんステーション — editorial.js（暖色エディトリアル版） */
(function () {
  'use strict';
  var eh = document.getElementById('eh');
  var hero = document.querySelector('.ehero');

  /* ヘッダー：ヒーロー上は透明＆白文字、過ぎたら生成り＆濃文字 */
  function onScroll() {
    if (!eh) return;
    var h = hero ? hero.offsetHeight - 90 : 200;
    if (window.scrollY > h) {
      eh.classList.add('solid');
      eh.classList.remove('on-hero');
    } else {
      eh.classList.remove('solid');
      eh.classList.add('on-hero');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* モバイルメニュー */
  var mb = document.getElementById('menuBtn');
  var ov = document.getElementById('mOverlay');
  var mc = document.getElementById('mClose');
  function close() { if (ov) ov.style.display = 'none'; document.body.style.overflow = ''; }
  if (mb && ov) {
    mb.addEventListener('click', function () { ov.style.display = 'flex'; document.body.style.overflow = 'hidden'; });
    if (mc) mc.addEventListener('click', close);
    ov.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  /* スクロール演出 */
  var reveals = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('vis'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
