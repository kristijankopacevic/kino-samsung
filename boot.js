(function () {
  var V = '202611181611', JS = './assets/index-CohmoBI9.js', CSS = './assets/style-B2x6-VZP.css', UP = 'https://kristijankopacevic.github.io/kino-samsung/', ls = null, cache = null;
  try { ls = window.localStorage; cache = JSON.parse(ls.getItem('kino.app') || 'null'); } catch (e) {}
  try { if (cache && ls.getItem('kino.app.booting') === cache.version) { ls.removeItem('kino.app'); ls.removeItem('kino.app.booting'); cache = null; } } catch (e) {}
  window.KINO_BUILT = V; window.KINO_VERSION = V; window.KINO_UPDATE = UP;
  if (cache && cache.js && String(cache.version) > V) {
    try { ls.setItem('kino.app.booting', cache.version); } catch (e) {}
    window.KINO_VERSION = String(cache.version);
    var st = document.createElement('style'); st.textContent = cache.css || ''; document.head.appendChild(st);
    var sc = document.createElement('script'); sc.textContent = cache.js; document.body.appendChild(sc);
  } else {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = CSS; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = JS; document.body.appendChild(s);
  }
})();
