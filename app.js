// ===== 卡片組 =====
let currentSetId = localStorage.getItem("currentSetId") || "hira";
let curReg = DECK_REG.find((r) => r.id === currentSetId) || DECK_REG[0];
let deck = normalizeDeck(curReg);

// ===== 發音 =====
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  u.rate = 0.85;
  const jp = speechSynthesis.getVoices().find((v) => v.lang.startsWith("ja"));
  if (jp) u.voice = jp;
  window.speechSynthesis.speak(u);
}
if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => {};

// ===== SRS =====
const DAY = 86400000;
const INTERVALS = [0, 1, 2, 4, 7, 15];
function loadSrs() {
  try { return JSON.parse(localStorage.getItem("srs") || "{}"); } catch { return {}; }
}
function saveSrs(srs) { localStorage.setItem("srs", JSON.stringify(srs)); }
function getRec(key) {
  const srs = loadSrs();
  return srs[key] || { box: 0, due: 0 };
}
function grade(key, result) {
  const srs = loadSrs();
  let rec = srs[key] || { box: 0, due: 0 };
  if (result === "again") rec.box = 0;
  else if (result === "good") rec.box = Math.min(rec.box + 1, INTERVALS.length - 1);
  rec.due = Date.now() + INTERVALS[rec.box] * DAY;
  srs[key] = rec;
  saveSrs(srs);
}
// SRS 用 "組id|正面" 當 key，避免不同組撞號
function srsKey(card) { return currentSetId + "|" + card.front; }

// ===== 學習狀態 =====
let queue = [];
let curIdx = null;

const flashcard = document.getElementById("flashcard");
const cardKana = document.getElementById("cardKana");
const cardRomaji = document.getElementById("cardRomaji");
const cardExample = document.getElementById("cardExample");
const dueText = document.getElementById("dueText");
const hintRow = document.getElementById("hintRow");
const gradeRow = document.getElementById("gradeRow");
const studyArea = document.getElementById("studyArea");
const doneArea = document.getElementById("doneArea");

function buildQueue(reviewAll) {
  const now = Date.now();
  queue = [];
  deck.forEach((card, i) => {
    if (reviewAll || getRec(srsKey(card)).due <= now) queue.push(i);
  });
}
function updateDueText() {
  const now = Date.now();
  const due = deck.filter((c) => getRec(srsKey(c)).due <= now).length;
  dueText.textContent = `今日待複習：${due}`;
}
function fitFront(el, text) {
  // 正面字多時自動縮小
  el.textContent = text;
  el.style.fontSize = text.length >= 4 ? "60px" : text.length >= 2 ? "90px" : "130px";
}
function nextCard() {
  flashcard.classList.remove("flipped");
  hintRow.style.display = "block";
  gradeRow.style.display = "none";

  if (queue.length === 0) {
    studyArea.style.display = "none";
    doneArea.style.display = "block";
    updateDueText();
    return;
  }
  studyArea.style.display = "block";
  doneArea.style.display = "none";

  curIdx = queue[0];
  const card = deck[curIdx];
  fitFront(cardKana, card.front);
  cardRomaji.textContent = card.main;
  cardRomaji.style.fontSize = card.main.length >= 4 ? "40px" : "70px";
  cardExample.textContent = card.sub;
  cardKana.classList.remove("pop");
  void cardKana.offsetWidth;
  cardKana.classList.add("pop");
  updateDueText();
}

flashcard.addEventListener("click", () => {
  const flipped = flashcard.classList.toggle("flipped");
  const card = deck[curIdx];
  speak(flipped ? card.sayFlip : card.say);
  if (flipped) {
    hintRow.style.display = "none";
    gradeRow.style.display = "flex";
  }
});
document.getElementById("speakBtn").addEventListener("click", () => {
  if (curIdx != null) speak(deck[curIdx].say);
});
gradeRow.querySelectorAll(".grade-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const g = btn.dataset.g;
    grade(srsKey(deck[curIdx]), g);
    markStudied();
    const idx = queue.shift();
    if (g === "again") queue.push(idx);
    nextCard();
  });
});
document.getElementById("reviewAllBtn").addEventListener("click", () => {
  buildQueue(true);
  nextCard();
});

// ===== 測驗 =====
let quizList = [], quizPos = 0, quizScore = 0;
const QUIZ_LEN = 10;
const quizArea = document.getElementById("quizArea");
const quizResult = document.getElementById("quizResult");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizProgress = document.getElementById("quizProgress");
const quizScoreEl = document.getElementById("quizScore");
const quizAsk = document.getElementById("quizAsk");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function startQuiz() {
  quizList = shuffle(deck).slice(0, Math.min(QUIZ_LEN, deck.length));
  quizPos = 0; quizScore = 0;
  quizArea.style.display = "block";
  quizResult.style.display = "none";
  quizAsk.textContent = curReg.type === "vocab" ? "這是什麼意思？" : "這個假名怎麼念？";
  showQuestion();
}
function showQuestion() {
  const q = quizList[quizPos];
  quizProgress.textContent = `第 ${quizPos + 1} / ${quizList.length} 題`;
  quizScoreEl.textContent = `⭐ ${quizScore}`;
  fitFront(quizQuestion, q.front);

  // 干擾選項：同組中不同答案（去重）
  const pool = [...new Set(deck.map((c) => c.ans).filter((a) => a !== q.ans))];
  const wrong = shuffle(pool).slice(0, 3);
  const opts = shuffle([q.ans, ...wrong]);
  quizOptions.innerHTML = "";
  opts.forEach((ansText) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = ansText;
    if (ansText.length >= 3) btn.style.fontSize = "18px";
    btn.addEventListener("click", () => answer(btn, ansText, q.ans));
    quizOptions.appendChild(btn);
  });
}
function answer(btn, picked, correct) {
  const buttons = quizOptions.querySelectorAll(".quiz-opt");
  buttons.forEach((b) => (b.disabled = true));
  if (picked === correct) {
    btn.classList.add("correct");
    quizScore++;
  } else {
    btn.classList.add("wrong");
    buttons.forEach((b) => { if (b.textContent === correct) b.classList.add("correct"); });
  }
  quizScoreEl.textContent = `⭐ ${quizScore}`;
  markStudied();
  setTimeout(() => {
    quizPos++;
    if (quizPos >= quizList.length) endQuiz();
    else showQuestion();
  }, 900);
}
function endQuiz() {
  quizArea.style.display = "none";
  quizResult.style.display = "block";
  const total = quizList.length;
  const pct = quizScore / total;
  document.getElementById("quizResultEmoji").textContent = pct === 1 ? "🏆" : pct >= 0.6 ? "🎉" : "💪";
  document.getElementById("quizResultTitle").textContent = pct === 1 ? "全對！太神啦" : pct >= 0.6 ? "做得很好！" : "繼續加油！";
  document.getElementById("quizResultScore").textContent = `答對 ${quizScore} / ${total}`;
}
document.getElementById("quizRestartBtn").addEventListener("click", startQuiz);

// ===== 寫字 =====
let writeIdx = 0, showGuide = true;
const writeCanvas = document.getElementById("writeCanvas");
const wctx = writeCanvas.getContext("2d");
const guideKana = document.getElementById("guideKana");

function setupCanvas() {
  const rect = writeCanvas.getBoundingClientRect();
  if (rect.width === 0) return;
  writeCanvas.width = rect.width;
  writeCanvas.height = rect.height;
  wctx.lineCap = "round";
  wctx.lineJoin = "round";
  wctx.lineWidth = 14;
  wctx.strokeStyle = "#ff6fa5";
}
function clearCanvas() { wctx.clearRect(0, 0, writeCanvas.width, writeCanvas.height); }
function renderWrite() {
  if (writeIdx >= deck.length) writeIdx = 0;
  const card = deck[writeIdx];
  document.getElementById("writeKana").textContent = card.front;
  document.getElementById("writeRomaji").textContent = card.main;
  guideKana.textContent = card.front;
  guideKana.style.fontSize = card.front.length >= 4 ? "90px" : card.front.length >= 2 ? "150px" : "220px";
  setupCanvas();
  clearCanvas();
}
function canvasPos(e) {
  const rect = writeCanvas.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}
let drawing = false;
writeCanvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  writeCanvas.setPointerCapture(e.pointerId);
  const p = canvasPos(e);
  wctx.beginPath();
  wctx.moveTo(p.x, p.y);
});
writeCanvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  const p = canvasPos(e);
  wctx.lineTo(p.x, p.y);
  wctx.stroke();
});
writeCanvas.addEventListener("pointerup", () => (drawing = false));
writeCanvas.addEventListener("pointercancel", () => (drawing = false));
document.getElementById("writeClear").addEventListener("click", clearCanvas);
document.getElementById("writeNext").addEventListener("click", () => { writeIdx = (writeIdx + 1) % deck.length; renderWrite(); });
document.getElementById("writePrev").addEventListener("click", () => { writeIdx = (writeIdx - 1 + deck.length) % deck.length; renderWrite(); });
document.getElementById("writeSpeak").addEventListener("click", () => speak(deck[writeIdx].say));
document.getElementById("writeGuideToggle").addEventListener("click", () => {
  showGuide = !showGuide;
  guideKana.classList.toggle("hidden", !showGuide);
});

// ===== 文法頁 =====
function buildGrammar() {
  const wrap = document.getElementById("grammarList");
  wrap.innerHTML = "";
  GRAMMAR.forEach((g) => {
    const card = document.createElement("div");
    card.className = "grammar-card";
    const ex = g.examples.map((e) =>
      `<div class="g-ex" data-say="${e.jp}">
         <div class="g-jp">${e.jp} 🔊</div>
         <div class="g-romaji">${e.romaji}</div>
         <div class="g-zh">${e.zh}</div>
       </div>`).join("");
    card.innerHTML = `<div class="g-title">${g.title}</div><div class="g-desc">${g.desc}</div>${ex}`;
    wrap.appendChild(card);
  });
  wrap.querySelectorAll(".g-ex").forEach((el) => {
    el.addEventListener("click", () => speak(el.dataset.say));
  });
}

// ===== 一覽 =====
function buildGrid() {
  const grid = document.getElementById("kanaGrid");
  grid.classList.toggle("vocab", curReg.type === "vocab");
  grid.innerHTML = "";
  deck.forEach((card) => {
    const cell = document.createElement("div");
    cell.className = "kana-cell";
    if (curReg.type === "vocab") {
      cell.innerHTML = `<div class="k vsm">${card.front}</div><div class="r">${card.main}</div>`;
    } else {
      cell.innerHTML = `<div class="k">${card.front}</div><div class="r">${card.main}</div>`;
    }
    cell.addEventListener("click", () => speak(card.say));
    grid.appendChild(cell);
  });
}

// ===== 卡片組選單（橫向滑動） =====
function buildSetSwitch() {
  const wrap = document.getElementById("setSwitch");
  wrap.innerHTML = "";
  DECK_REG.forEach((r) => {
    const btn = document.createElement("button");
    btn.className = "set-btn" + (r.id === currentSetId ? " active" : "");
    btn.textContent = r.label;
    btn.addEventListener("click", () => switchSet(r.id));
    wrap.appendChild(btn);
  });
}
function switchSet(id) {
  currentSetId = id;
  localStorage.setItem("currentSetId", id);
  curReg = DECK_REG.find((r) => r.id === id);
  deck = normalizeDeck(curReg);
  writeIdx = 0;
  document.querySelectorAll("#setSwitch .set-btn").forEach((b, i) => {
    b.classList.toggle("active", DECK_REG[i].id === id);
  });
  buildGrid();
  buildQueue(false);
  nextCard();
  if (document.getElementById("page-quiz").classList.contains("active")) startQuiz();
  if (document.getElementById("page-write").classList.contains("active")) renderWrite();
}

// ===== 分頁切換 =====
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("page-" + tab.dataset.page).classList.add("active");
    if (tab.dataset.page === "quiz") startQuiz();
    if (tab.dataset.page === "write") renderWrite();
  });
});

// ===== 每日打卡 =====
function markStudied() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem("lastStudy");
  if (last === today) return;
  let streak = parseInt(localStorage.getItem("streak") || "0", 10);
  const yesterday = new Date(Date.now() - DAY).toISOString().slice(0, 10);
  streak = last === yesterday ? streak + 1 : 1;
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastStudy", today);
  updateStreak();
}
function updateStreak() {
  const streak = parseInt(localStorage.getItem("streak") || "0", 10);
  document.getElementById("streak").textContent = `🔥 ${streak} 天`;
}

// ===== 啟動 =====
buildSetSwitch();
buildGrid();
buildGrammar();
updateStreak();
buildQueue(false);
nextCard();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
