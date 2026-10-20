// Gobblins promo site: language, store buttons, decorations and a tiny playable board.

/** Fill in when the apps are live; until then the buttons say "coming soon". */
const STORE_LINKS = { appStore: null, googlePlay: null };

const T = {
  it: {
    navPlay: "Prova", navFeatures: "Caratteristiche", navSeasons: "Stagioni", navShots: "Screenshot",
    tag: "Il match 3 coi mostri di gelatina",
    heroLead: "Sei mostriciattoli golosi, isole infinite da esplorare e combo che fanno tremare lo schermo. Abbinali, falli scoppiare e scopri cosa c'è nel prossimo forziere!",
    free: "Gratis · niente pubblicità · gioca anche offline",
    appStore: "Scarica su", googlePlay: "Disponibile su", soon: "Presto!",
    playEyebrow: "Provalo subito", playTitle: "Scambia, abbina, scoppia!",
    playLead: "Trascina un Gobblin verso un vicino, oppure tocca due Gobblins uno dopo l'altro: allineane tre o più dello stesso tipo e guardali sparire. Le cascate valgono di più!",
    score: "Punti", best: "Combo migliore", hint: "Nel gioco completo: strisce, bombe, arcobaleni e combo tra speciali",
    featEyebrow: "Cosa ti aspetta", featTitle: "Dolce fuori, tosto dentro",
    featLead: "Un puzzle rilassante da giocare in un minuto, con abbastanza sorprese da tenerti incollato per mesi.",
    chipCombo: "Combo", chipEndless: "Infinito", chipObstacles: "Ostacoli", chipPrizes: "Premi", chipDaily: "Ogni giorno", chipSeasons: "Stagioni",
    f1Title: "Pezzi speciali", f1Text: "4 in fila fanno un pezzo a strisce, una L o una T una bomba, 5 in fila l'arcobaleno. Scambia due speciali tra loro per una super combo.",
    f2Title: "Isole senza fine", f2Text: "Prati di zucchero, spiagge di biscotto, vulcani di cioccolato: 10 livelli per isola, con tappe difficili e super difficili da conquistare.",
    f3Title: "Ostacoli golosi", f3Text: "Ghiaccio da rompere, biscotti da sbriciolare, cioccolato che si espande, gabbie di liquirizia e Gobblins a tempo da fermare prima del boom.",
    f4Title: "Forzieri e potenziamenti", f4Text: "Forzieri di bronzo, argento e oro che si aprono col tempo, martello, mescolata, mosse extra e bombe da portare in partita.",
    f5Title: "Missioni e regali", f5Text: "Tre missioni nuove ogni giorno e un regalo che cresce per sette giorni di fila, fino al forziere d'oro.",
    f6Title: "Feste a tema", f6Text: "Befana, San Valentino, Carnevale, Pasqua, estate, Halloween e Natale: grafica, musica e vestiti dei Gobblins cambiano da soli, al momento giusto.",
    islEyebrow: "La mappa", islTitle: "Un arcipelago da divorare",
    islLead: "Ogni isola nasconde dieci livelli e un forziere alla fine. E dopo l'ultima… ce n'è sempre un'altra.",
    islands: ["Prato Zuccherino", "Spiaggia di Biscotto", "Laguna di Gelatina", "Vette di Panna", "Vulcano di Cioccolato", "Nuvole di Zucchero Filato"],
    island: "Isola", levels: "livelli",
    seaEyebrow: "Si cambia d'abito", seaTitle: "Stagioni a tema",
    seaLead: "Il gioco segue il calendario: orecchie da coniglio a Pasqua, coriandoli a Carnevale, cuori a San Valentino, occhiali da sole d'estate, zucche ad Halloween e berretti a Natale. Puoi anche scegliere la tua festa preferita dalle impostazioni.",
    thClassic: "Classico", thChristmas: "Natale", thEaster: "Pasqua", thCarnival: "Carnevale", thValentine: "San Valentino", thBefana: "Befana", thSummer: "Estate",
    shotEyebrow: "Dal gioco", shotTitle: "Guarda che spettacolo",
    ctaTitle: "I Gobblins hanno fame!", ctaLead: "Presto su iPhone, iPad e Android. Gratis, senza pubblicità e senza registrazione.",
    support: "Supporto", contact: "Contatti", get: "Scarica", swipe: "← scorri →",
    vidEyebrow: "Guardalo in azione", vidTitle: "Dalla prima mossa alla festa",
    vidLead: "Un livello vero dell'isola 9: gabbie di liquirizia da spezzare, una bomba e un arcobaleno per partire forte e, alla fine, le mosse avanzate che diventano strisce esplosive.",
  },
  en: {
    navPlay: "Try it", navFeatures: "Features", navSeasons: "Seasons", navShots: "Screenshots",
    tag: "The jelly monster match 3",
    heroLead: "Six hungry little monsters, endless islands to explore and combos that shake the screen. Match them, pop them and find out what's in the next chest!",
    free: "Free · no ads · plays offline too",
    appStore: "Download on the", googlePlay: "Get it on", soon: "Soon!",
    playEyebrow: "Try it now", playTitle: "Swap, match, pop!",
    playLead: "Drag a Gobblin towards a neighbour, or tap two Gobblins one after the other: line up three or more of a kind and watch them vanish. Cascades are worth more!",
    score: "Score", best: "Best combo", hint: "In the full game: stripes, bombs, rainbows and special combos",
    featEyebrow: "What's inside", featTitle: "Sweet outside, tough inside",
    featLead: "A relaxing puzzle you can play in a minute, with enough surprises to keep you hooked for months.",
    chipCombo: "Combos", chipEndless: "Endless", chipObstacles: "Obstacles", chipPrizes: "Prizes", chipDaily: "Daily", chipSeasons: "Seasons",
    f1Title: "Special pieces", f1Text: "4 in a row makes a striped piece, an L or T a bomb, 5 in a row a rainbow. Swap two specials together for a super combo.",
    f2Title: "Endless islands", f2Text: "Sugar meadows, cookie beaches, chocolate volcanoes: 10 levels per island, with hard and super hard stops to conquer.",
    f3Title: "Tasty obstacles", f3Text: "Ice to crack, cookies to crumble, spreading chocolate, licorice cages and timed Gobblins to stop before they go boom.",
    f4Title: "Chests and boosters", f4Text: "Bronze, silver and gold chests that unlock over time, plus hammers, shuffles, extra moves and bombs to bring into a level.",
    f5Title: "Missions and gifts", f5Text: "Three new missions every day and a gift that grows for seven days in a row, up to a gold chest.",
    f6Title: "Holiday themes", f6Text: "Epiphany, Valentine's Day, Carnival, Easter, summer, Halloween and Christmas: the art, the music and the Gobblins' outfits change by themselves, right on time.",
    islEyebrow: "The map", islTitle: "An archipelago to devour",
    islLead: "Every island hides ten levels and a chest at the end. And after the last one… there's always another.",
    islands: ["Sugar Meadow", "Cookie Beach", "Jelly Lagoon", "Whipped Peaks", "Choco Volcano", "Candyfloss Clouds"],
    island: "Island", levels: "levels",
    seaEyebrow: "A change of clothes", seaTitle: "Seasonal themes",
    seaLead: "The game follows the calendar: bunny ears at Easter, confetti at Carnival, hearts on Valentine's Day, sunglasses in summer, pumpkins at Halloween and woolly hats at Christmas. You can also pick your favourite in the settings.",
    thClassic: "Classic", thChristmas: "Christmas", thEaster: "Easter", thCarnival: "Carnival", thValentine: "Valentine's", thBefana: "Epiphany", thSummer: "Summer",
    shotEyebrow: "From the game", shotTitle: "See it in action",
    ctaTitle: "The Gobblins are hungry!", ctaLead: "Coming soon to iPhone, iPad and Android. Free, no ads and no sign-up.",
    support: "Support", contact: "Contact", get: "Get it", swipe: "← swipe →",
    vidEyebrow: "See it in action", vidTitle: "From first move to party",
    vidLead: "A real level from island 9: licorice cages to break, a bomb and a rainbow for a flying start and, at the end, the moves left turning into exploding stripes.",
  },
};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s) => document.querySelector(s);
let lang = (() => {
  try {
    const saved = localStorage.getItem("gobblins-site-lang");
    if (saved === "it" || saved === "en") return saved;
  } catch {}
  return (navigator.language || "en").toLowerCase().startsWith("it") ? "it" : "en";
})();

// ── store buttons ──────────────────────────────────
const APPLE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.8-4.2zM14 5.2c.7-.8 1.2-2 1-3.2-1 .1-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24"><path fill="#34a853" d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z"/><path fill="#fbbc04" d="M17 8.4 13.4 12 17 15.6l4-2.3c.9-.5.9-1.8 0-2.3z"/><path fill="#4285f4" d="m13.4 12 3.6 3.6-11.5 6.6c-.6.3-1.3.3-1.9-.5z"/><path fill="#ea4335" d="M3.6 2.3c.6-.8 1.3-.8 1.9-.5L17 8.4 13.4 12z"/></svg>';

function renderStores() {
  const t = T[lang];
  for (const box of document.querySelectorAll("[data-stores]")) {
    box.innerHTML = [
      ["appStore", APPLE, "App Store"],
      ["googlePlay", PLAY, "Google Play"],
    ]
      .map(([key, icon, name]) => {
        const url = STORE_LINKS[key];
        const attrs = url ? `href="${url}" target="_blank" rel="noopener"` : `aria-disabled="true" role="link"`;
        return `<a class="btn store" ${attrs}>${icon}<span class="txt"><small>${t[key]}</small>${name}</span>${url ? "" : `<span class="soon">${t.soon}</span>`}</a>`;
      })
      .join("");
  }
}

// ── language ───────────────────────────────────────
function applyLang() {
  const t = T[lang];
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const v = t[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  }
  $("#lang").textContent = lang === "it" ? "EN" : "IT";
  renderStores();
  renderIslands();
  renderShots();
}
$("#lang").addEventListener("click", () => {
  lang = lang === "it" ? "en" : "it";
  try {
    localStorage.setItem("gobblins-site-lang", lang);
  } catch {}
  applyLang();
});

// ── decorations ────────────────────────────────────
const rand = (a, b) => a + Math.random() * (b - a);
function scatter(box, count, pieces) {
  if (!box) return;
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = `assets/${pieces[i % pieces.length]}.webp`;
    img.alt = "";
    const size = rand(34, innerWidth < 640 ? 54 : 76);
    img.style.cssText = `left:calc(${rand(0, 100)}% - ${size}px * ${rand(0, 1).toFixed(2)});top:${rand(4, 86)}%;--s:${size}px;--d:${rand(7, 12)}s;--delay:${rand(-8, 0)}s`;
    box.appendChild(img);
  }
  if (reduced) return;
  for (let i = 0; i < 14; i++) {
    const b = document.createElement("span");
    const size = rand(10, 34);
    b.className = "bubble";
    b.style.cssText = `left:${rand(0, 100)}%;width:${size}px;height:${size}px;animation-duration:${rand(9, 20)}s;animation-delay:${rand(-20, 0)}s`;
    box.appendChild(b);
  }
}
const CLASSIC = [0, 1, 2, 3, 4, 5].map((k) => `classic-${k}`);
// Fewer, fainter floaters on phones, where they would sit behind the text.
const phone = innerWidth < 640;
scatter($("#floaters"), phone ? 5 : 9, [...CLASSIC, "rainbow", "bomb-0", "lineH-4"]);
scatter($("#ctaFloaters"), phone ? 4 : 7, CLASSIC);

// Hero Gobblins lean towards the pointer.
if (!reduced) {
  addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    $("#floaters").style.transform = `translate(${x * -24}px, ${y * -18}px)`;
  });
}

// Parade: two copies of the six Gobblins in three outfits scroll forever.
const parade = $("#parade");
const outfits = ["classic", "easter", "summer", "halloween", "christmas", "carnival"].flatMap((th) => [0, 1, 2, 3, 4, 5].map((k) => `${th}-${k}`));
parade.innerHTML = [...outfits, ...outfits].map((p, i) => `<img src="assets/${p}.webp" alt="" style="--i:${i}" />`).join("");

addEventListener("scroll", () => $("nav.top").classList.toggle("scrolled", scrollY > 30), { passive: true });

// The gameplay video plays muted on its own; with reduced motion it waits for the player's tap.
const video = $("#gameplay");
if (reduced) {
  video.removeAttribute("autoplay");
  video.pause();
  video.controls = true;
}

// Phone menu: the burger opens the links; picking one (or tapping outside) closes it.
const nav = $("nav.top");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  $("#burger").setAttribute("aria-expanded", String(open));
};
$("#burger").addEventListener("click", (e) => {
  e.stopPropagation();
  setMenu(!nav.classList.contains("open"));
});
$("#menu").addEventListener("click", () => setMenu(false));
document.addEventListener("click", (e) => !nav.contains(e.target) && setMenu(false));

// ── islands & screenshots ──────────────────────────
const ISLANDS = ["meadow", "cookie", "lagoon", "cream", "volcano", "clouds"];
function renderIslands() {
  const t = T[lang];
  $("#islands").innerHTML = ISLANDS.map(
    (id, i) => `<div class="island" style="--i:${i}"><img src="assets/island-${id}.webp" alt="" loading="lazy" width="420" height="420" /><b>${t.islands[i]}</b><span>${t.island} ${i + 1} · ${t.levels} ${i * 10 + 1}–${i * 10 + 10}</span></div>`,
  ).join("");
}
function renderShots() {
  $("#shots").innerHTML = [0, 1, 2, 3, 4, 5, 6]
    .map((n) => `<div class="phone"><img src="assets/shot-${lang}-${n}.webp" alt="" loading="lazy" width="540" height="1170" /></div>`)
    .join("");
}

// ── seasons ────────────────────────────────────────
function showTheme(theme, animate) {
  $("#scene").style.backgroundImage = `url(assets/bg-${theme}.webp)`;
  $("#sceneRow").innerHTML = [0, 1, 2, 3, 4, 5]
    .map((k) => `<img class="${animate ? "swap" : ""}" src="assets/${theme}-${k}.webp" alt="" style="--i:${k}" />`)
    .join("");
  if (animate) setTimeout(() => document.querySelectorAll("#sceneRow img").forEach((img) => img.classList.remove("swap")), 900);
  for (const b of document.querySelectorAll("#tabs button")) b.setAttribute("aria-pressed", String(b.dataset.theme === theme));
}
for (const b of document.querySelectorAll("#tabs button")) b.addEventListener("click", () => showTheme(b.dataset.theme, true));
showTheme("classic", false);

// ── reveal on scroll ───────────────────────────────
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ── the mini board ─────────────────────────────────
// A pocket version of the game: swap neighbours, runs of 3+ pop, the rest falls, cascades score more.
(() => {
  const N = 6;
  const KINDS = 5;
  const board = $("#board");
  const grid = []; // grid[r][c] = { id, kind, el }
  let nextId = 1;
  let busy = false;
  let selected = null;
  let score = 0;
  let best = 0;
  // clientWidth is the padding box: N cells plus 8px of padding on each side.
  const cell = () => (board.clientWidth - 16) / N;
  const place = (p, r, c) => (p.el.style.transform = `translate(${c * cell()}px, ${r * cell()}px)`);
  const wait = (ms) => new Promise((res) => setTimeout(res, reduced ? 0 : ms));

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const bg = document.createElement("div");
      bg.className = "cell";
      bg.style.cssText = `left:${11 + c * cell()}px;top:${11 + r * cell()}px;background:${(r + c) % 2 ? "#34508c" : "#3d5a9e"}`;
      board.appendChild(bg);
    }
  }

  function make(kind, r, c, fromRow = r) {
    const el = document.createElement("div");
    el.className = "pc";
    el.innerHTML = `<img src="assets/classic-${kind}.webp" alt="" draggable="false" style="--b:${(-Math.random() * 2).toFixed(2)}s" />`;
    const p = { id: nextId++, kind, el };
    el.dataset.id = p.id;
    board.appendChild(el);
    place(p, fromRow, c);
    return p;
  }

  // Fresh board with no ready-made runs.
  for (let r = 0; r < N; r++) {
    grid[r] = [];
    for (let c = 0; c < N; c++) {
      let k;
      do k = Math.floor(Math.random() * KINDS);
      while ((c >= 2 && grid[r][c - 1].kind === k && grid[r][c - 2].kind === k) || (r >= 2 && grid[r - 1][c].kind === k && grid[r - 2][c].kind === k));
      grid[r][c] = make(k, r, c);
    }
  }

  function runs() {
    const hit = new Set();
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const k = grid[r][c].kind;
        if (c <= N - 3 && grid[r][c + 1].kind === k && grid[r][c + 2].kind === k) for (let i = c; i < N && grid[r][i].kind === k; i++) hit.add(r * N + i);
        if (r <= N - 3 && grid[r + 1][c].kind === k && grid[r + 2][c].kind === k) for (let i = r; i < N && grid[i][c].kind === k; i++) hit.add(i * N + c);
      }
    }
    return hit;
  }

  function swap(a, b) {
    const t = grid[a.r][a.c];
    grid[a.r][a.c] = grid[b.r][b.c];
    grid[b.r][b.c] = t;
    place(grid[a.r][a.c], a.r, a.c);
    place(grid[b.r][b.c], b.r, b.c);
  }

  function floatScore(n, r, c) {
    const s = document.createElement("div");
    s.className = "float-score";
    s.textContent = `+${n}`;
    s.style.left = `${8 + (c + 0.5) * cell()}px`;
    s.style.top = `${8 + r * cell()}px`;
    board.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }

  async function resolve() {
    let combo = 0;
    for (let hit = runs(); hit.size; hit = runs()) {
      combo++;
      const cells = [...hit].map((i) => ({ r: Math.floor(i / N), c: i % N }));
      const points = cells.length * 10 * combo;
      score += points;
      best = Math.max(best, combo);
      $("#score").textContent = score;
      $("#best").textContent = `x${best}`;
      const mid = cells[Math.floor(cells.length / 2)];
      floatScore(points, mid.r, mid.c);
      for (const { r, c } of cells) {
        const p = grid[r][c];
        p.el.classList.add("pop");
        p.el.style.transform += " scale(0.2)";
        grid[r][c] = null;
        setTimeout(() => p.el.remove(), 260);
      }
      await wait(240);
      // Gravity: survivors fall, new Gobblins drop in from above.
      for (let c = 0; c < N; c++) {
        let write = N - 1;
        for (let r = N - 1; r >= 0; r--) {
          if (!grid[r][c]) continue;
          const p = grid[r][c];
          grid[r][c] = null;
          grid[write][c] = p;
          write--;
        }
        for (let r = write, n = 1; r >= 0; r--, n++) grid[r][c] = make(Math.floor(Math.random() * KINDS), r, c, -n);
      }
      await wait(30);
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
        grid[r][c].el.classList.add("fall");
        place(grid[r][c], r, c);
      }
      await wait(360);
      for (const row of grid) for (const p of row) p.el.classList.remove("fall");
    }
  }

  async function attempt(a, b) {
    if (busy || Math.abs(a.r - b.r) + Math.abs(a.c - b.c) !== 1) return;
    busy = true;
    swap(a, b);
    await wait(230);
    if (runs().size) await resolve();
    else {
      swap(a, b);
      await wait(230);
    }
    busy = false;
  }

  const posOf = (el) => {
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (grid[r][c]?.el === el) return { r, c };
    return null;
  };
  const select = (p) => {
    board.querySelector(".pc.sel")?.classList.remove("sel");
    selected = p;
    if (p) grid[p.r][p.c].el.classList.add("sel");
  };

  let start = null;
  board.addEventListener("pointerdown", (e) => {
    const el = e.target.closest(".pc");
    const p = el && posOf(el);
    if (!p || busy) return;
    start = { p, x: e.clientX, y: e.clientY };
    if (selected && Math.abs(selected.r - p.r) + Math.abs(selected.c - p.c) === 1) {
      const from = selected;
      select(null);
      start = null;
      attempt(from, p);
    } else select(p);
  });
  board.addEventListener("pointermove", (e) => {
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < cell() * 0.35) return;
    const to = Math.abs(dx) > Math.abs(dy) ? { r: start.p.r, c: start.p.c + Math.sign(dx) } : { r: start.p.r + Math.sign(dy), c: start.p.c };
    const from = start.p;
    start = null;
    select(null);
    if (to.r >= 0 && to.r < N && to.c >= 0 && to.c < N) attempt(from, to);
  });
  addEventListener("pointerup", () => (start = null));
  addEventListener("resize", () => {
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) place(grid[r][c], r, c);
    board.querySelectorAll(".cell").forEach((bg, i) => {
      bg.style.left = `${11 + (i % N) * cell()}px`;
      bg.style.top = `${11 + Math.floor(i / N) * cell()}px`;
    });
  });
})();

applyLang();
