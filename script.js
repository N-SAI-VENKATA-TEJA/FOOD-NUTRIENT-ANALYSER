// ─── FOOD DATABASE ────────────────────────────────────────────────────────────
const FOODS = {
  // Proteins
  "Grilled Chicken Breast": {
    cal: 165,
    prot: 31,
    carb: 0,
    fat: 3.6,
    fiber: 0,
    sugar: 0,
    sodium: 74,
    vit_c: 0,
    vit_a: 0,
    calcium: 11,
    iron: 1,
    vit_d: 0,
    vit_b12: 0.3,
    potassium: 256,
    magnesium: 29,
    zinc: 1,
  },
  "Eggs (Whole)": {
    cal: 143,
    prot: 13,
    carb: 1,
    fat: 10,
    fiber: 0,
    sugar: 1,
    sodium: 142,
    vit_c: 0,
    vit_a: 160,
    calcium: 56,
    iron: 1.8,
    vit_d: 2,
    vit_b12: 1.1,
    potassium: 138,
    magnesium: 12,
    zinc: 1.3,
  },
  Salmon: {
    cal: 208,
    prot: 20,
    carb: 0,
    fat: 13,
    fiber: 0,
    sugar: 0,
    sodium: 59,
    vit_c: 3,
    vit_a: 58,
    calcium: 9,
    iron: 0.3,
    vit_d: 11,
    vit_b12: 3.2,
    potassium: 363,
    magnesium: 27,
    zinc: 0.4,
  },
  "Greek Yogurt": {
    cal: 59,
    prot: 10,
    carb: 3.6,
    fat: 0.4,
    fiber: 0,
    sugar: 3.2,
    sodium: 36,
    vit_c: 0,
    vit_a: 5,
    calcium: 111,
    iron: 0,
    vit_d: 0,
    vit_b12: 0.75,
    potassium: 141,
    magnesium: 11,
    zinc: 0.5,
  },
  "Tuna (canned)": {
    cal: 116,
    prot: 26,
    carb: 0,
    fat: 1,
    fiber: 0,
    sugar: 0,
    sodium: 333,
    vit_c: 0,
    vit_a: 20,
    calcium: 12,
    iron: 1,
    vit_d: 4,
    vit_b12: 2.5,
    potassium: 214,
    magnesium: 30,
    zinc: 0.7,
  },
  Tofu: {
    cal: 76,
    prot: 8,
    carb: 2,
    fat: 4.5,
    fiber: 0.3,
    sugar: 0.6,
    sodium: 7,
    vit_c: 0.2,
    vit_a: 2,
    calcium: 350,
    iron: 2.7,
    vit_d: 0,
    vit_b12: 0,
    potassium: 121,
    magnesium: 30,
    zinc: 1,
  },
  // Grains
  "Brown Rice (cooked)": {
    cal: 216,
    prot: 5,
    carb: 45,
    fat: 1.8,
    fiber: 3.5,
    sugar: 0.7,
    sodium: 10,
    vit_c: 0,
    vit_a: 0,
    calcium: 20,
    iron: 1,
    vit_d: 0,
    vit_b12: 0,
    potassium: 154,
    magnesium: 84,
    zinc: 1.2,
  },
  "White Rice (cooked)": {
    cal: 206,
    prot: 4,
    carb: 45,
    fat: 0.4,
    fiber: 0.6,
    sugar: 0,
    sodium: 1,
    vit_c: 0,
    vit_a: 0,
    calcium: 19,
    iron: 1.9,
    vit_d: 0,
    vit_b12: 0,
    potassium: 55,
    magnesium: 19,
    zinc: 0.8,
  },
  "Oatmeal (cooked)": {
    cal: 71,
    prot: 2.5,
    carb: 12,
    fat: 1.4,
    fiber: 2,
    sugar: 0.5,
    sodium: 49,
    vit_c: 0,
    vit_a: 0,
    calcium: 10,
    iron: 0.8,
    vit_d: 0,
    vit_b12: 0,
    potassium: 80,
    magnesium: 26,
    zinc: 0.9,
  },
  "Whole Wheat Bread": {
    cal: 247,
    prot: 13,
    carb: 41,
    fat: 4,
    fiber: 7,
    sugar: 6,
    sodium: 400,
    vit_c: 0,
    vit_a: 0,
    calcium: 73,
    iron: 3.6,
    vit_d: 0,
    vit_b12: 0,
    potassium: 248,
    magnesium: 76,
    zinc: 1.8,
  },
  "Pasta (cooked)": {
    cal: 158,
    prot: 6,
    carb: 31,
    fat: 1,
    fiber: 1.8,
    sugar: 0.6,
    sodium: 1,
    vit_c: 0,
    vit_a: 0,
    calcium: 10,
    iron: 1.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 44,
    magnesium: 18,
    zinc: 0.5,
  },
  "Quinoa (cooked)": {
    cal: 120,
    prot: 4.4,
    carb: 22,
    fat: 1.9,
    fiber: 2.8,
    sugar: 0.9,
    sodium: 7,
    vit_c: 0,
    vit_a: 1,
    calcium: 17,
    iron: 1.5,
    vit_d: 0,
    vit_b12: 0,
    potassium: 172,
    magnesium: 64,
    zinc: 1.1,
  },
  // Fruits
  Banana: {
    cal: 89,
    prot: 1.1,
    carb: 23,
    fat: 0.3,
    fiber: 2.6,
    sugar: 12,
    sodium: 1,
    vit_c: 8.7,
    vit_a: 3,
    calcium: 5,
    iron: 0.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 358,
    magnesium: 27,
    zinc: 0.2,
  },
  Apple: {
    cal: 52,
    prot: 0.3,
    carb: 14,
    fat: 0.2,
    fiber: 2.4,
    sugar: 10,
    sodium: 1,
    vit_c: 4.6,
    vit_a: 3,
    calcium: 6,
    iron: 0.1,
    vit_d: 0,
    vit_b12: 0,
    potassium: 107,
    magnesium: 5,
    zinc: 0.04,
  },
  Orange: {
    cal: 47,
    prot: 0.9,
    carb: 12,
    fat: 0.1,
    fiber: 2.4,
    sugar: 9,
    sodium: 0,
    vit_c: 53,
    vit_a: 11,
    calcium: 40,
    iron: 0.1,
    vit_d: 0,
    vit_b12: 0,
    potassium: 181,
    magnesium: 10,
    zinc: 0.1,
  },
  Strawberries: {
    cal: 32,
    prot: 0.7,
    carb: 8,
    fat: 0.3,
    fiber: 2,
    sugar: 5,
    sodium: 1,
    vit_c: 59,
    vit_a: 1,
    calcium: 16,
    iron: 0.4,
    vit_d: 0,
    vit_b12: 0,
    potassium: 153,
    magnesium: 13,
    zinc: 0.1,
  },
  Blueberries: {
    cal: 57,
    prot: 0.7,
    carb: 14,
    fat: 0.3,
    fiber: 2.4,
    sugar: 10,
    sodium: 1,
    vit_c: 9.7,
    vit_a: 3,
    calcium: 6,
    iron: 0.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 77,
    magnesium: 6,
    zinc: 0.2,
  },
  Avocado: {
    cal: 160,
    prot: 2,
    carb: 9,
    fat: 15,
    fiber: 7,
    sugar: 0.7,
    sodium: 7,
    vit_c: 10,
    vit_a: 7,
    calcium: 12,
    iron: 0.6,
    vit_d: 0,
    vit_b12: 0,
    potassium: 485,
    magnesium: 29,
    zinc: 0.6,
  },
  // Vegetables
  Broccoli: {
    cal: 34,
    prot: 2.8,
    carb: 7,
    fat: 0.4,
    fiber: 2.6,
    sugar: 1.7,
    sodium: 33,
    vit_c: 89,
    vit_a: 31,
    calcium: 47,
    iron: 0.7,
    vit_d: 0,
    vit_b12: 0,
    potassium: 316,
    magnesium: 21,
    zinc: 0.4,
  },
  Spinach: {
    cal: 23,
    prot: 2.9,
    carb: 3.6,
    fat: 0.4,
    fiber: 2.2,
    sugar: 0.4,
    sodium: 79,
    vit_c: 28,
    vit_a: 469,
    calcium: 99,
    iron: 2.7,
    vit_d: 0,
    vit_b12: 0,
    potassium: 558,
    magnesium: 79,
    zinc: 0.5,
  },
  "Sweet Potato": {
    cal: 86,
    prot: 1.6,
    carb: 20,
    fat: 0.1,
    fiber: 3,
    sugar: 4.2,
    sodium: 55,
    vit_c: 3,
    vit_a: 961,
    calcium: 30,
    iron: 0.6,
    vit_d: 0,
    vit_b12: 0,
    potassium: 337,
    magnesium: 25,
    zinc: 0.3,
  },
  Carrot: {
    cal: 41,
    prot: 0.9,
    carb: 10,
    fat: 0.2,
    fiber: 2.8,
    sugar: 4.7,
    sodium: 69,
    vit_c: 5.9,
    vit_a: 835,
    calcium: 33,
    iron: 0.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 320,
    magnesium: 12,
    zinc: 0.2,
  },
  Tomato: {
    cal: 18,
    prot: 0.9,
    carb: 3.9,
    fat: 0.2,
    fiber: 1.2,
    sugar: 2.6,
    sodium: 5,
    vit_c: 14,
    vit_a: 42,
    calcium: 10,
    iron: 0.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 237,
    magnesium: 11,
    zinc: 0.2,
  },
  // Dairy & Fats
  "Whole Milk": {
    cal: 61,
    prot: 3.2,
    carb: 4.8,
    fat: 3.3,
    fiber: 0,
    sugar: 4.8,
    sodium: 44,
    vit_c: 0,
    vit_a: 28,
    calcium: 113,
    iron: 0,
    vit_d: 1.2,
    vit_b12: 0.45,
    potassium: 150,
    magnesium: 10,
    zinc: 0.4,
  },
  "Cheddar Cheese": {
    cal: 402,
    prot: 25,
    carb: 1.3,
    fat: 33,
    fiber: 0,
    sugar: 0.5,
    sodium: 621,
    vit_c: 0,
    vit_a: 265,
    calcium: 710,
    iron: 0.7,
    vit_d: 0.6,
    vit_b12: 0.8,
    potassium: 98,
    magnesium: 28,
    zinc: 3.1,
  },
  Butter: {
    cal: 717,
    prot: 0.9,
    carb: 0.1,
    fat: 81,
    fiber: 0,
    sugar: 0.1,
    sodium: 576,
    vit_c: 0,
    vit_a: 684,
    calcium: 24,
    iron: 0.02,
    vit_d: 1.5,
    vit_b12: 0.17,
    potassium: 24,
    magnesium: 2,
    zinc: 0.09,
  },
  "Olive Oil": {
    cal: 884,
    prot: 0,
    carb: 0,
    fat: 100,
    fiber: 0,
    sugar: 0,
    sodium: 2,
    vit_c: 0,
    vit_a: 0,
    calcium: 1,
    iron: 0.6,
    vit_d: 0,
    vit_b12: 0,
    potassium: 1,
    magnesium: 0,
    zinc: 0,
  },
  // Legumes
  "Lentils (cooked)": {
    cal: 116,
    prot: 9,
    carb: 20,
    fat: 0.4,
    fiber: 7.9,
    sugar: 1.8,
    sodium: 2,
    vit_c: 1.5,
    vit_a: 1,
    calcium: 19,
    iron: 3.3,
    vit_d: 0,
    vit_b12: 0,
    potassium: 369,
    magnesium: 36,
    zinc: 1.3,
  },
  "Chickpeas (cooked)": {
    cal: 164,
    prot: 8.9,
    carb: 27,
    fat: 2.6,
    fiber: 7.6,
    sugar: 4.8,
    sodium: 7,
    vit_c: 1.3,
    vit_a: 1,
    calcium: 49,
    iron: 2.9,
    vit_d: 0,
    vit_b12: 0,
    potassium: 291,
    magnesium: 48,
    zinc: 1.5,
  },
  "Black Beans (cooked)": {
    cal: 132,
    prot: 8.9,
    carb: 24,
    fat: 0.5,
    fiber: 8.7,
    sugar: 0.3,
    sodium: 2,
    vit_c: 0,
    vit_a: 0,
    calcium: 23,
    iron: 2.1,
    vit_d: 0,
    vit_b12: 0,
    potassium: 305,
    magnesium: 60,
    zinc: 1,
  },
  // Nuts & Seeds
  Almonds: {
    cal: 579,
    prot: 21,
    carb: 22,
    fat: 50,
    fiber: 12.5,
    sugar: 4.4,
    sodium: 1,
    vit_c: 0,
    vit_a: 0,
    calcium: 264,
    iron: 3.7,
    vit_d: 0,
    vit_b12: 0,
    potassium: 733,
    magnesium: 270,
    zinc: 3.1,
  },
  "Peanut Butter": {
    cal: 588,
    prot: 25,
    carb: 20,
    fat: 50,
    fiber: 6,
    sugar: 9,
    sodium: 417,
    vit_c: 0,
    vit_a: 0,
    calcium: 49,
    iron: 1.9,
    vit_d: 0,
    vit_b12: 0,
    potassium: 558,
    magnesium: 168,
    zinc: 2.9,
  },
  "Chia Seeds": {
    cal: 486,
    prot: 17,
    carb: 42,
    fat: 31,
    fiber: 34,
    sugar: 0,
    sodium: 16,
    vit_c: 1.6,
    vit_a: 7,
    calcium: 631,
    iron: 7.7,
    vit_d: 0,
    vit_b12: 0,
    potassium: 407,
    magnesium: 335,
    zinc: 4.6,
  },
};

// ─── MICRONUTRIENT CONFIG ─────────────────────────────────────────────────────
const MICROS = [
  {
    key: "vit_c",
    name: "Vitamin C",
    icon: "🍊",
    daily: 90,
    unit: "mg",
    color: "#ff9500",
  },
  {
    key: "vit_a",
    name: "Vitamin A",
    icon: "🥕",
    daily: 900,
    unit: "mcg",
    color: "#ff6b35",
  },
  {
    key: "calcium",
    name: "Calcium",
    icon: "🦴",
    daily: 1000,
    unit: "mg",
    color: "#4db8ff",
  },
  {
    key: "iron",
    name: "Iron",
    icon: "🔩",
    daily: 18,
    unit: "mg",
    color: "#e8a838",
  },
  {
    key: "vit_d",
    name: "Vitamin D",
    icon: "☀️",
    daily: 20,
    unit: "mcg",
    color: "#fbbf24",
  },
  {
    key: "vit_b12",
    name: "Vitamin B12",
    icon: "💊",
    daily: 2.4,
    unit: "mcg",
    color: "#a78bfa",
  },
  {
    key: "potassium",
    name: "Potassium",
    icon: "⚡",
    daily: 3500,
    unit: "mg",
    color: "#00e5a0",
  },
  {
    key: "magnesium",
    name: "Magnesium",
    icon: "🌊",
    daily: 400,
    unit: "mg",
    color: "#4db8ff",
  },
  {
    key: "zinc",
    name: "Zinc",
    icon: "🔬",
    daily: 11,
    unit: "mg",
    color: "#c084fc",
  },
  {
    key: "fiber",
    name: "Fiber",
    icon: "🌿",
    daily: 30,
    unit: "g",
    color: "#86efac",
  },
  {
    key: "sodium",
    name: "Sodium",
    icon: "🧂",
    daily: 2300,
    unit: "mg",
    color: "#94a3b8",
  },
  {
    key: "sugar",
    name: "Sugar",
    icon: "🍬",
    daily: 50,
    unit: "g",
    color: "#fb7185",
  },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = {
  log: [],
  goalCal: 2000,
  currentMeal: "Breakfast",
  weeklyData: [1820, 1650, 2100, 1900, 2250, 1780, 0],
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
  buildMicroGrid();
  buildWeeklyChart();
  populateDatalist();
  populateQuickChips();
  updateAll();
}

function populateDatalist() {
  const dl = document.getElementById("foodSuggest");
  Object.keys(FOODS).forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    dl.appendChild(opt);
  });
}

function populateQuickChips() {
  const quickFoods = [
    "Banana",
    "Eggs (Whole)",
    "Oatmeal (cooked)",
    "Greek Yogurt",
    "Almonds",
    "Broccoli",
  ];
  const wrap = document.getElementById("quickChips");
  wrap.innerHTML = quickFoods
    .map((f) => `<div class="chip" onclick="quickAdd('${f}')">${f}</div>`)
    .join("");
}

// ─── USER ACTIONS ─────────────────────────────────────────────────────────────
function setGoal(btn, cal) {
  state.goalCal = cal;
  document
    .querySelectorAll(".goal-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("goalCalDisplay").textContent = `Goal: ${cal} kcal`;
  updateAll();
}

function selectMeal(tab, meal) {
  state.currentMeal = meal;
  document
    .querySelectorAll(".meal-tab")
    .forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
}

function quickAdd(name) {
  document.getElementById("foodName").value = name;
  document.getElementById("foodQty").value = 100;
  document.getElementById("foodUnit").value = "g";
  addFood();
}

function addFood() {
  const nameEl = document.getElementById("foodName");
  const qtyEl = document.getElementById("foodQty");
  const unitEl = document.getElementById("foodUnit");
  const name = nameEl.value.trim();
  const qty = parseFloat(qtyEl.value) || 100;
  const unit = unitEl.value;

  if (!name) {
    showToast("Please enter a food name", "⚠");
    return;
  }

  let data = FOODS[name];
  if (!data) data = genRandom(name); // fallback for unknown foods

  const factor = qty / 100;
  const item = {
    id: Date.now(),
    name,
    qty,
    unit,
    meal: state.currentMeal,
    cal: Math.round(data.cal * factor),
    prot: +(data.prot * factor).toFixed(1),
    carb: +(data.carb * factor).toFixed(1),
    fat: +(data.fat * factor).toFixed(1),
    fiber: +(data.fiber * factor).toFixed(1),
    sugar: +(data.sugar * factor).toFixed(1),
    sodium: Math.round(data.sodium * factor),
    micros: {},
  };
  MICROS.forEach((m) => {
    if (data[m.key] !== undefined)
      item.micros[m.key] = +(data[m.key] * factor).toFixed(2);
  });

  state.log.push(item);
  state.weeklyData[6] = getTotals().cal;

  updateAll();
  nameEl.value = "";
  qtyEl.value = 100;
  showToast(`${name} added (${item.cal} kcal)`, "✓");
}

function genRandom(name) {
  // Deterministic pseudo-random values derived from the food name
  const seed = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const r = (min, max) => min + (seed % (max - min));
  return {
    cal: r(50, 400),
    prot: r(1, 30),
    carb: r(5, 60),
    fat: r(1, 25),
    fiber: r(0, 10),
    sugar: r(0, 20),
    sodium: r(10, 500),
    vit_c: r(0, 30),
    vit_a: r(0, 100),
    calcium: r(10, 200),
    iron: r(0.2, 3),
    vit_d: r(0, 5),
    vit_b12: r(0, 1),
    potassium: r(50, 400),
    magnesium: r(5, 80),
    zinc: r(0.1, 2),
  };
}

function removeFood(id) {
  state.log = state.log.filter((i) => i.id !== id);
  state.weeklyData[6] = getTotals().cal;
  updateAll();
  showToast("Item removed", "✕");
}

function resetAll() {
  state.log = [];
  state.weeklyData[6] = 0;
  updateAll();
  showToast("Log cleared", "↺");
}

// ─── COMPUTE ──────────────────────────────────────────────────────────────────
function getTotals() {
  return state.log.reduce(
    (t, i) => {
      t.cal += i.cal;
      t.prot += i.prot;
      t.carb += i.carb;
      t.fat += i.fat;
      t.fiber += i.fiber;
      t.sugar += i.sugar;
      t.sodium += i.sodium;
      MICROS.forEach((m) => {
        t.micros[m.key] = (t.micros[m.key] || 0) + (i.micros[m.key] || 0);
      });
      return t;
    },
    {
      cal: 0,
      prot: 0,
      carb: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
      sodium: 0,
      micros: {},
    },
  );
}

function getBalanceScore(t) {
  if (!state.log.length) return 0;
  let score = 100;
  const g = state.goalCal;

  // Calorie deviation
  const calPct = t.cal / g;
  if (calPct > 1.2) score -= 20;
  else if (calPct > 1.05) score -= 10;

  // Macro ratios
  const totalMacroG = t.prot + t.carb + t.fat;
  if (totalMacroG > 0) {
    const protPct = ((t.prot * 4) / t.cal) * 100 || 0;
    const carbPct = ((t.carb * 4) / t.cal) * 100 || 0;
    const fatPct = ((t.fat * 9) / t.cal) * 100 || 0;
    if (protPct < 10) score -= 15;
    if (carbPct > 70) score -= 10;
    if (fatPct > 45) score -= 10;
  }

  if (t.fiber < 10) score -= 10;
  if (t.sugar > 50) score -= 15;
  if (t.sodium > 2300) score -= 15;

  return Math.max(0, Math.min(100, score));
}

// ─── UI UPDATE ORCHESTRATOR ───────────────────────────────────────────────────
function updateAll() {
  const t = getTotals();
  updateRing(t);
  updateMacros(t);
  updateMicroGrid(t);
  updateLog();
  updateWeeklyChart();
  updateBalance(t);
  updateInsights(t);
}

// ─── RING ─────────────────────────────────────────────────────────────────────
function updateRing(t) {
  const pct = Math.min(1, t.cal / state.goalCal);
  const circumference = 2 * Math.PI * 80;
  const offset = circumference * (1 - pct);

  document.getElementById("ringProgress").style.strokeDashoffset = offset;
  document.getElementById("ringCal").textContent = t.cal.toLocaleString();
  document.getElementById("ringGoalText").textContent =
    `/ ${state.goalCal.toLocaleString()}`;
  document.getElementById("statRemain").textContent = Math.max(
    0,
    state.goalCal - t.cal,
  );
  document.getElementById("statBurned").textContent =
    "~" + Math.round(state.goalCal * 0.1);
  document.getElementById("statWater").textContent = "~2.5L";
  document.getElementById("statItems").textContent = state.log.length;

  const ring = document.getElementById("ringProgress");
  if (pct >= 1) {
    ring.style.stroke = "var(--orange)";
    ring.style.filter = "drop-shadow(0 0 6px var(--orange))";
  } else {
    ring.style.stroke = "var(--accent)";
    ring.style.filter = "drop-shadow(0 0 6px var(--accent))";
  }
}

// ─── MACROS ───────────────────────────────────────────────────────────────────
function updateMacros(t) {
  const scale = state.goalCal / 2000;
  const targets = {
    prot: 50 * scale,
    carb: 275 * scale,
    fat: 78 * scale,
    fiber: 28 * scale,
    sugar: 50 * scale,
    sodium: 2300,
  };
  const sets = [
    { val: t.prot.toFixed(1), id: "mProt", target: targets.prot, unit: "g" },
    { val: t.carb.toFixed(1), id: "mCarb", target: targets.carb, unit: "g" },
    { val: t.fat.toFixed(1), id: "mFat", target: targets.fat, unit: "g" },
    { val: t.fiber.toFixed(1), id: "mFiber", target: targets.fiber, unit: "g" },
    { val: t.sugar.toFixed(1), id: "mSugar", target: targets.sugar, unit: "g" },
    { val: t.sodium, id: "mSodium", target: targets.sodium, unit: "mg" },
  ];
  sets.forEach((s) => {
    const pct = Math.min(100, (s.val / s.target) * 100);
    const valEl = document.getElementById(s.id + "Val");
    const barEl = document.getElementById(s.id + "Bar");
    const pctEl = document.getElementById(s.id + "Pct");
    if (valEl) valEl.innerHTML = `${s.val} <span>${s.unit}</span>`;
    if (barEl) barEl.style.width = pct + "%";
    if (pctEl) pctEl.textContent = `${Math.round(pct)}% of daily target`;
  });
}

// ─── MICRONUTRIENT GRID ───────────────────────────────────────────────────────
function buildMicroGrid() {
  const grid = document.getElementById("microGrid");
  grid.innerHTML = MICROS.map(
    (m, i) => `
    <div class="micro-card">
      <div class="micro-icon">${m.icon}</div>
      <div class="micro-name">${m.name}</div>
      <div class="micro-ring">
        <svg viewBox="0 0 48 48">
          <circle class="micro-ring-bg" cx="24" cy="24" r="16"/>
          <circle class="micro-ring-fill" id="mr_${m.key}" cx="24" cy="24" r="16"
            stroke="${m.color}"
            style="stroke-dasharray:100;stroke-dashoffset:100;transition-delay:${i * 0.05}s"/>
        </svg>
        <div class="micro-pct-text" id="mrPct_${m.key}">0%</div>
      </div>
      <div class="micro-val" id="mrVal_${m.key}">0 ${m.unit}</div>
    </div>
  `,
  ).join("");
}

function updateMicroGrid(t) {
  MICROS.forEach((m) => {
    const val = t.micros[m.key] || 0;
    const pct = Math.min(100, (val / m.daily) * 100);
    const circ = 2 * Math.PI * 16; // ≈ 100.5
    const offset = circ * (1 - pct / 100);
    const el = document.getElementById(`mr_${m.key}`);
    const pctEl = document.getElementById(`mrPct_${m.key}`);
    const valEl = document.getElementById(`mrVal_${m.key}`);
    if (el) el.style.strokeDashoffset = offset;
    if (pctEl) pctEl.textContent = Math.round(pct) + "%";
    if (valEl)
      valEl.textContent = `${val < 10 ? val.toFixed(1) : Math.round(val)} ${m.unit}`;
  });
}

// ─── FOOD LOG ─────────────────────────────────────────────────────────────────
function updateLog() {
  const body = document.getElementById("logBody");
  document.getElementById("logCount").textContent =
    `${state.log.length} item${state.log.length !== 1 ? "s" : ""}`;

  if (!state.log.length) {
    body.innerHTML = `
      <div class="log-empty">
        <div class="log-empty-icon">🥗</div>
        <div>No foods logged yet. Add your first meal above!</div>
      </div>`;
    return;
  }

  const mealColors = {
    Breakfast: "#fbbf24",
    Lunch: "#00e5a0",
    Dinner: "#4db8ff",
    Snack: "#a78bfa",
  };
  body.innerHTML = state.log
    .map(
      (item, idx) => `
    <div class="log-row" style="animation-delay:${idx * 0.04}s">
      <div>
        <div class="log-food-name">${item.name}</div>
        <div class="log-food-qty">${item.qty}${item.unit}</div>
      </div>
      <div class="log-cell log-cell-cal">${item.cal}</div>
      <div class="log-cell c-prot">${item.prot}g</div>
      <div class="log-cell c-carb">${item.carb}g</div>
      <div class="log-cell c-fat">${item.fat}g</div>
      <div class="log-cell">${item.fiber}g</div>
      <div class="log-cell">
        <span style="color:${mealColors[item.meal] || "#888"};font-size:0.72rem;font-weight:600">
          ${item.meal}
        </span>
      </div>
      <div><button class="del-btn" onclick="removeFood(${item.id})">✕</button></div>
    </div>
  `,
    )
    .join("");
}

// ─── WEEKLY CHART ─────────────────────────────────────────────────────────────
function buildWeeklyChart() {
  const chart = document.getElementById("weeklyChart");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  chart.innerHTML = days
    .map(
      (d, i) => `
    <div class="week-bar-wrap">
      <div class="week-bar ${i === 6 ? "today" : ""}" id="wbar_${i}"
           style="height:0px;position:relative">
        <span class="week-bar-val" id="wbval_${i}"></span>
      </div>
      <div class="week-label ${i === 6 ? "today" : ""}">${d}</div>
    </div>
  `,
    )
    .join("");
}

function updateWeeklyChart() {
  const maxVal = Math.max(...state.weeklyData, state.goalCal, 100);
  state.weeklyData.forEach((v, i) => {
    const bar = document.getElementById(`wbar_${i}`);
    const valEl = document.getElementById(`wbval_${i}`);
    if (!bar) return;
    bar.style.height = Math.max(4, (v / maxVal) * 100) + "px";
    valEl.textContent = v > 0 ? v : "";
  });
}

// ─── BALANCE SCORE ────────────────────────────────────────────────────────────
function updateBalance(t) {
  const score = getBalanceScore(t);
  const circ = 2 * Math.PI * 32;
  const offset = circ * (1 - score / 100);
  document.getElementById("bsFill").style.strokeDashoffset = offset;
  document.getElementById("bsScore").textContent = score;

  let title, desc, color;
  if (!state.log.length) {
    title = "Start Tracking";
    desc = "Add foods to see your dietary balance score.";
    color = "var(--text3)";
  } else if (score >= 80) {
    title = "Excellent!";
    desc = "Your diet is well-balanced. Keep it up!";
    color = "var(--accent)";
  } else if (score >= 60) {
    title = "Good Balance";
    desc = "Minor adjustments could optimise your nutrition.";
    color = "var(--blue)";
  } else if (score >= 40) {
    title = "Needs Work";
    desc = "Consider diversifying your food choices.";
    color = "var(--orange)";
  } else {
    title = "Off Track";
    desc = "Focus on whole foods and balanced macros today.";
    color = "var(--red)";
  }

  document.getElementById("balanceTitle").textContent = title;
  document.getElementById("balanceDesc").textContent = desc;
  document.getElementById("bsFill").style.stroke = color;
  document.getElementById("bsScore").style.color = color;
}

// ─── SMART INSIGHTS ───────────────────────────────────────────────────────────
function updateInsights(t) {
  const section = document.getElementById("insightsSection");
  const cards = section.querySelectorAll(".insight-card");
  if (!state.log.length) return;

  const scale = state.goalCal / 2000;
  const calPct = t.cal / state.goalCal;
  const insights = [];

  // Calorie status
  if (calPct > 1.1) {
    insights.push({
      badge: "⚠ Warning",
      cls: "badge-warn",
      text: `You've exceeded your calorie goal by <strong>${Math.round((calPct - 1) * 100)}%</strong>. Consider lighter options for your next meal.`,
    });
  } else if (calPct < 0.5) {
    insights.push({
      badge: "💡 Tip",
      cls: "badge-info",
      text: `You've only consumed <strong>${Math.round(calPct * 100)}%</strong> of your goal. Make sure to eat enough to fuel your body.`,
    });
  } else {
    insights.push({
      badge: "✅ On Track",
      cls: "badge-tip",
      text: `Great progress! You've consumed <strong>${t.cal} kcal</strong> out of your <strong>${state.goalCal} kcal</strong> goal.`,
    });
  }

  // Protein
  if (t.prot < 30 * scale) {
    insights.push({
      badge: "⚠ Protein Low",
      cls: "badge-warn",
      text: `Protein intake is low at <strong>${t.prot.toFixed(0)}g</strong>. Add lean meats, legumes, or dairy to hit your targets.`,
    });
  } else {
    insights.push({
      badge: "💪 Protein",
      cls: "badge-tip",
      text: `Good protein intake of <strong>${t.prot.toFixed(0)}g</strong>. Protein supports muscle repair and keeps you satiated.`,
    });
  }

  // Fiber
  if (t.fiber < 10) {
    insights.push({
      badge: "🌿 Fiber",
      cls: "badge-warn",
      text: `Fiber intake is very low (<strong>${t.fiber.toFixed(1)}g</strong>). Add vegetables, legumes, or whole grains.`,
    });
  } else {
    insights.push({
      badge: "🌿 Fiber",
      cls: "badge-tip",
      text: `<strong>${t.fiber.toFixed(1)}g</strong> of fiber logged. Excellent for digestive health and blood sugar stability.`,
    });
  }

  insights.slice(0, 3).forEach((ins, i) => {
    if (cards[i]) {
      cards[i].querySelector(".insight-badge").className =
        `insight-badge ${ins.cls}`;
      cards[i].querySelector(".insight-badge").innerHTML = ins.badge;
      cards[i].querySelector(".insight-text").innerHTML = ins.text;
    }
  });
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, icon = "✓") {
  clearTimeout(toastTimer);
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.querySelector(".toast-icon").textContent = icon;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ─── KEYBOARD SHORTCUTS ───────────────────────────────────────────────────────
document.getElementById("foodName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addFood();
});
document.getElementById("foodQty").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addFood();
});

// ─── BOOT ─────────────────────────────────────────────────────────────────────
init();

// Kick off entrance animation for the calorie ring
setTimeout(() => {
  document.getElementById("ringProgress").style.strokeDashoffset = "502";
}, 50);
