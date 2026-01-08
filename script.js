// HEX примерные (можешь заменить на точные)
const BASE_ITEMS = [
  { id: 1,  name: "светлая роза",        hex: "#f6b7c8" },
  { id: 2,  name: "голубой",             hex: "#6ec6ff" },
  { id: 3,  name: "василек",             hex: "#2f5bff" },
  { id: 4,  name: "молочка",             hex: "#f4f1e8" },
  { id: 5,  name: "черная",              hex: "#111111" },
  { id: 6,  name: "аспарагус",           hex: "#6a8f6a" },
  { id: 7,  name: "весна",               hex: "#7fdc7a" },
  { id: 8,  name: "айсберг",             hex: "#d7f3f7" },
  { id: 9,  name: "попугай",             hex: "#22c55e" },
  { id: 10, name: "бордо",               hex: "#6f1d2a" },
  { id: 11, name: "свет носог",          hex: "#bfc7d1" },
  { id: 12, name: "камелия",             hex: "#ff6b8a" },
  { id: 13, name: "мрамор",              hex: "#d9d9d9" },
  { id: 14, name: "777",                 hex: "#7a7a7a" },
  { id: 15, name: "доллар",              hex: "#8bd18b" },
  { id: 16, name: "фламинго роза",       hex: "#ff7aa2" },
  { id: 17, name: "ежевика",             hex: "#3b1b4a" },
  { id: 18, name: "дымок",               hex: "#a9b0b8" },
  { id: 19, name: "карамель",            hex: "#c58b5a" },
  { id: 20, name: "вишня",               hex: "#8b1e3f" },
  { id: 21, name: "полынь",              hex: "#9aa88f" },
  { id: 22, name: "орех",                hex: "#8b6b4a" },
  { id: 23, name: "брусника",            hex: "#b3204d" },
  { id: 24, name: "малина",              hex: "#d81b60" },
  { id: 25, name: "матроска",            hex: "#1f3a8a" },
  { id: 26, name: "яблоко",              hex: "#44c06a" },
  { id: 27, name: "Темно-носочный",      hex: "#2b2f3a" },
  { id: 28, name: "бирюза",              hex: "#22b8b8" },
  { id: 29, name: "кофе",                hex: "#6f4e37" },
  { id: 30, name: "ультра марин",        hex: "#1f2a92" },
  { id: 31, name: "хакки",               hex: "#6b7b3a" },
  { id: 32, name: "клевер",              hex: "#2f7a3d" },
  { id: 33, name: "шампанский",          hex: "#f3e5c7" },
  { id: 34, name: "светлая сирень",      hex: "#d8c5ff" },
  { id: 35, name: "колокольчик",         hex: "#7c83ff" },
  { id: 36, name: "сталь",               hex: "#6b7280" },
  { id: 37, name: "небо",                hex: "#87ceeb" },
  { id: 38, name: "красный терракот",    hex: "#b7412c" },
  { id: 39, name: "оранжевый",           hex: "#ff7a00" },
  { id: 40, name: "ангора",              hex: "#d7c8b5" },
  { id: 41, name: "фуксия",              hex: "#ff00a8" },
  { id: 42, name: "изумруд",             hex: "#0f9d58" },
  { id: 43, name: "персик",              hex: "#ffb07c" },
  { id: 44, name: "лимон",               hex: "#ffe44d" },
  { id: 45, name: "горчица",             hex: "#caa300" },
  { id: 46, name: "супер белый",         hex: "#ffffff" },
  { id: 47, name: "бежевый",             hex: "#e6d2b5" },
  { id: 48, name: "фисташка",            hex: "#b8e3b0" },
  { id: 49, name: "желтый",              hex: "#ffd500" },
  { id: 50, name: "шоколад",             hex: "#3f2a1a" },
  { id: 51, name: "темно-синий",         hex: "#0b1f4b" },
  { id: 52, name: "слоновая кость",      hex: "#f7f0d9" },
  { id: 53, name: "нежность",            hex: "#ffd6e7" },
  { id: 54, name: "джинсы",              hex: "#2b6cb0" },
  { id: 55, name: "бутылка",             hex: "#0b6b4f" },
  { id: 56, name: "мак красный",         hex: "#e10600" },
  { id: 57, name: "чернило(фиолетовое)", hex: "#3a1b5a" },
  { id: 58, name: "морская вода",        hex: "#37b7c3" },
  { id: 59, name: "лиловый",             hex: "#b07ccf" },
  { id: 60, name: "темный терракот",     hex: "#7a2d22" },
  { id: 61, name: "облепиха",            hex: "#ff8a2a" },
  { id: 62, name: "алый(сочный)",        hex: "#ff1e1e" },
  { id: 63, name: "лагуна",              hex: "#1aa6b7" },
  { id: 64, name: "пепельный",           hex: "#b8b2a7" },
];

const LS_CUSTOM_KEY = "custom_colors_v1";

const rowsEl = document.getElementById("rows");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const onlySelectedEl = document.getElementById("onlySelected");
const selectedCountEl = document.getElementById("selectedCount");
const qtyTotalEl = document.getElementById("qtyTotal");

const customName = document.getElementById("customName");
const customPicker = document.getElementById("customPicker");
const customHex = document.getElementById("customHex");
const addCustomBtn = document.getElementById("addCustomBtn");

const overlay = document.getElementById("overlay");
const modalSwatch = document.getElementById("modalSwatch");
const modalId = document.getElementById("modalId");
const modalName = document.getElementById("modalName");
const modalQty = document.getElementById("modalQty");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveBtn = document.getElementById("saveBtn");
const q1 = document.getElementById("q1");
const q3 = document.getElementById("q3");
const q5 = document.getElementById("q5");
const q10 = document.getElementById("q10");
const q0 = document.getElementById("q0");
const deleteColorBtn = document.getElementById("deleteColorBtn");

const sheet = document.getElementById("sheet");
const downloadBtn = document.getElementById("downloadBtn");
const closeSheetBtn = document.getElementById("closeSheetBtn");
const saveExportBtn = document.getElementById("saveExportBtn");
const modeV1 = document.getElementById("modeV1");
const modeV2 = document.getElementById("modeV2");
const exportFormat = document.getElementById("exportFormat");

let activeItem = null;
let exportMode = null; // "v1" | "v2" | null

function keyForQty(id){ return "qty_id_" + String(id); }
function normalize(s){ return String(s ?? "").toLowerCase().trim().replaceAll("ё","е"); }
function isWhite(hex){ return normalize(hex) === "#ffffff"; }
function isCustomId(id){ return id > 64; }

function getQty(id){
  const v = localStorage.getItem(keyForQty(id));
  const qty = parseInt(v || "0", 10);
  return Number.isNaN(qty) ? 0 : qty;
}
function setQty(id, val){
  const s = String(val).trim();
  if (s === "" || s === "0") localStorage.removeItem(keyForQty(id));
  else localStorage.setItem(keyForQty(id), s);
}

function matches(item, q){
  if (!q) return true;
  const nq = normalize(q);
  return String(item.id).includes(nq) || normalize(item.name).includes(nq);
}

function loadCustom(){
  try{
    const raw = localStorage.getItem(LS_CUSTOM_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter(x => x && typeof x.id==="number" && typeof x.name==="string" && typeof x.hex==="string");
  }catch{
    return [];
  }
}
function saveCustom(list){ localStorage.setItem(LS_CUSTOM_KEY, JSON.stringify(list)); }
function getAllItems(){ return [...BASE_ITEMS, ...loadCustom()].sort((a,b)=>a.id-b.id); }
function getNextCustomId(){
  const all = getAllItems();
  const maxId = all.reduce((m,x)=>Math.max(m, x.id), 0);
  return maxId + 1;
}

function getSelected(){
  const out = [];
  getAllItems().forEach(it => {
    const qty = getQty(it.id);
    if (qty > 0) out.push({ ...it, qty });
  });
  return out;
}

function updateTotals(){
  const sel = getSelected();
  selectedCountEl.textContent = String(sel.length);
  qtyTotalEl.textContent = String(sel.reduce((a,x)=>a+x.qty,0));
}

function render(){
  const q = searchInput.value.trim();
  const onlySel = !!onlySelectedEl.checked;

  rowsEl.innerHTML = "";
  let filtered = getAllItems().filter(it => matches(it, q));
  if (onlySel) filtered = filtered.filter(it => getQty(it.id) > 0);

  filtered.forEach(it => {
    const row = document.createElement("div");
    row.className = "row";

    const id = document.createElement("div");
    id.className = "id";
    id.textContent = it.id;

    const sw = document.createElement("div");
    sw.className = "swatch" + (isWhite(it.hex) ? " white" : "");
    sw.style.background = it.hex;

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = it.name;

    const right = document.createElement("div");
    right.className = "right";
    right.style.display = "flex";
    right.style.justifyContent = "flex-end";

    const qty = getQty(it.id);
    const chooseBtn = document.createElement("button");
    chooseBtn.className = "btn mini " + (qty > 0 ? "selected" : "gray");
    chooseBtn.textContent = qty > 0 ? String(qty) : "Выбрать";
    chooseBtn.onclick = () => openModal(it);

    right.appendChild(chooseBtn);

    row.appendChild(id);
    row.appendChild(sw);
    row.appendChild(name);
    row.appendChild(right);

    rowsEl.appendChild(row);
  });

  updateTotals();
}

function openModal(item){
  activeItem = item;

  modalSwatch.className = "swatch" + (isWhite(item.hex) ? " white" : "");
  modalSwatch.style.background = item.hex;

  modalId.textContent = "ID: " + item.id;
  modalName.textContent = item.name;

  const qty = getQty(item.id);
  modalQty.value = qty > 0 ? String(qty) : "";

  deleteColorBtn.style.display = isCustomId(item.id) ? "inline-flex" : "none";

  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
  setTimeout(() => modalQty.focus(), 50);
}

function closeModal(){
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
  activeItem = null;
}

function addDelta(delta){
  const current = parseInt((modalQty.value || "0").trim(), 10);
  const base = Number.isNaN(current) ? 0 : current;
  modalQty.value = String(base + delta);
}

function saveModal(){
  if (!activeItem) return;
  const v = parseInt((modalQty.value || "0").trim(), 10);
  const qty = Number.isNaN(v) ? 0 : Math.max(0, v);
  setQty(activeItem.id, qty);
  closeModal();
  render();
}

function clearModalQtyWithConfirm(){
  if (!activeItem) return;
  if (!confirm("Очистить количество для этого цвета?")) return;
  modalQty.value = "";
}

function deleteCustomWithConfirm(){
  if (!activeItem || !isCustomId(activeItem.id)) return;
  if (!confirm("Удалить этот кастомный цвет?")) return;

  const list = loadCustom().filter(x => x.id !== activeItem.id);
  saveCustom(list);
  localStorage.removeItem(keyForQty(activeItem.id));
  closeModal();
  render();
}

overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
window.addEventListener("keydown", (e) => { if (e.key === "Escape" && overlay.style.display === "flex") closeModal(); });

function setExportMode(mode){
  exportMode = mode;
  modeV1.checked = exportMode === "v1";
  modeV2.checked = exportMode === "v2";
  saveExportBtn.disabled = !exportMode;
}

function updateExportSummary(colorCount, qtyTotal){
  const summaryEl = document.getElementById("exportSummary");
  const colorCountEl = document.getElementById("exportSummaryColorCount");
  const qtyTotalEl = document.getElementById("exportSummaryQtyTotal");
  if (!summaryEl || !colorCountEl || !qtyTotalEl) return;
  colorCountEl.textContent = String(colorCount);
  qtyTotalEl.textContent = String(qtyTotal);
}

function buildExportSheet(mode){
  const selectedSection = document.getElementById("exportSelectedSection");
  const allSection = document.getElementById("exportAllSection");

  selectedSection.classList.toggle("active", mode === "v1");
  allSection.classList.toggle("active", mode === "v2");

  const titleEl = document.getElementById("exportTitle");
  const dateEl = document.getElementById("exportDate");
  titleEl.textContent = "Список";

  const now = new Date();
  const pad = (n)=> String(n).padStart(2,"0");
  const stamp = `${pad(now.getDate())}.${pad(now.getMonth()+1)}.${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  dateEl.textContent = `Дата: ${stamp}`;

  const selectedForTotals = getSelected();
  const colorCount = selectedForTotals.length;
  const qtyTotal = selectedForTotals.reduce((a, x) => a + x.qty, 0);

  if (mode === "v2") {
    const leftBody = document.getElementById("exportBodyLeft");
    const rightBody = document.getElementById("exportBodyRight");
    leftBody.innerHTML = "";
    rightBody.innerHTML = "";

    const all = getAllItems();

    if (all.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 3;
      emptyCell.textContent = "Нет данных.";
      emptyCell.style.color = "#555";
      emptyRow.appendChild(emptyCell);
      leftBody.appendChild(emptyRow);
      updateExportSummary(colorCount, qtyTotal);
      return;
    }

    const half = Math.ceil(all.length / 2);
    const leftItems = all.slice(0, half);
    const rightItems = all.slice(half);
    const rowCount = Math.max(leftItems.length, rightItems.length);

    const fill = (items, body) => {
      for (let i = 0; i < rowCount; i++) {
        const item = items[i];
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdQty = document.createElement("td");

        if (item) {
          tdId.textContent = String(item.id);
          tdName.textContent = item.name;
          const qty = getQty(item.id);
          tdQty.textContent = qty > 0 ? String(qty) : " ";
        } else {
          tdId.textContent = " ";
          tdName.textContent = " ";
          tdQty.textContent = " ";
        }

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdQty);
        body.appendChild(tr);
      }
    };

    fill(leftItems, leftBody);
    fill(rightItems, rightBody);
    updateExportSummary(colorCount, qtyTotal);
    return;
  }

  const body = document.getElementById("exportBodySelected");
  body.innerHTML = "";

  const selected = selectedForTotals;

  if (selected.length === 0) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.colSpan = 3;
    td1.textContent = "Нет данных.";
    td1.style.color = "#555";
    tr.appendChild(td1);
    body.appendChild(tr);
    updateExportSummary(colorCount, qtyTotal);
    return;
  }

  selected.forEach(item => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");   tdId.textContent = String(item.id);
    const tdName = document.createElement("td"); tdName.textContent = item.name;
    const tdQty = document.createElement("td");  tdQty.textContent = String(item.qty);
    tr.appendChild(tdId); tr.appendChild(tdName); tr.appendChild(tdQty);
    body.appendChild(tr);
  });

  updateExportSummary(colorCount, qtyTotal);
}

function getExportScale(){
  const dpr = window.devicePixelRatio || 1;
  return Math.min(3, Math.max(2, dpr));
}

async function renderExportCanvas(mode){
  buildExportSheet(mode);
  const node = document.getElementById("exportSheet");
  const canvas = await html2canvas(node, {
    scale: getExportScale(),
    backgroundColor: "#ffffff",
    useCORS: true,
    imageTimeout: 0
  });
  return canvas;
}

async function makeJpegBlob(mode){
  const canvas = await renderExportCanvas(mode);
  const blob = await new Promise(res => canvas.toBlob(res, "image/jpeg", 0.92));
  return blob;
}

// iPhone Share Sheet с файлом (без ссылок). Нужен HTTPS.
async function sharePhotoIOS(mode){
  const blob = await makeJpegBlob(mode);
  if (!blob) { alert("Не получилось создать фото"); return; }

  const file = new File([blob], "spisok.jpg", { type: "image/jpeg" });

  if (navigator.share) {
    try{
      if (!navigator.canShare || navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Список",
          text: "Список цветов",
          files: [file],
        });
        return;
      }
    } catch (e) {
      // fallback ниже
    }
  }

  // fallback: открыть фото отдельно
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
  setTimeout(()=>URL.revokeObjectURL(url), 60000);
  alert("Чтобы отправка/сохранение работали без ссылок на iPhone — нужен HTTPS. Сейчас открыл фото отдельно.");
}

async function downloadPDF(mode){
  const canvas = await renderExportCanvas(mode);
  const imgData = canvas.toDataURL("image/png");
  const { jsPDF } = window.jspdf;

  const imgW = canvas.width;
  const imgH = canvas.height;

  const pdf = new jsPDF({
    orientation: imgW >= imgH ? "landscape" : "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageW / imgW, pageH / imgH);
  const w = imgW * ratio;
  const h = imgH * ratio;
  const x = (pageW - w) / 2;
  const y = (pageH - h) / 2;

  pdf.addImage(imgData, "PNG", x, y, w, h);
  pdf.save("spisok.pdf");
}

// sheet controls
function openSheet(){
  setExportMode(null);
  sheet.style.display = "flex";
}
function closeSheet(){ sheet.style.display = "none"; }
sheet.addEventListener("click", (e) => { if (e.target === sheet) closeSheet(); });

// custom add
function sanitizeHex(s){
  let v = String(s || "").trim().toLowerCase();
  if (!v) return "#9ca3af";
  if (v[0] !== "#") v = "#" + v;
  const ok = /^#([0-9a-f]{6})$/i.test(v);
  return ok ? v.toUpperCase() : "#9CA3AF";
}

function addCustom(){
  const name = customName.value.trim();
  if (!name) { customName.focus(); return; }

  const hex = sanitizeHex(customHex.value || customPicker.value);
  const id = getNextCustomId();

  const list = loadCustom();
  list.push({ id, name, hex });
  saveCustom(list);

  customName.value = "";
  customPicker.value = hex;
  customHex.value = hex;

  render();

  const item = getAllItems().find(x => x.id === id);
  if (item) openModal(item);
}

customPicker.addEventListener("input", () => { customHex.value = customPicker.value.toUpperCase(); });
customHex.addEventListener("input", () => {
  const v = sanitizeHex(customHex.value);
  customPicker.value = v;
});

// handlers
searchInput.addEventListener("input", render);
onlySelectedEl.addEventListener("change", render);
clearSearchBtn.addEventListener("click", () => { searchInput.value = ""; render(); searchInput.focus(); });

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!confirm("Очистить все количества?")) return;
  getAllItems().forEach(it => localStorage.removeItem(keyForQty(it.id)));
  render();
});

downloadBtn.addEventListener("click", openSheet);
closeSheetBtn.addEventListener("click", closeSheet);

addCustomBtn.addEventListener("click", addCustom);
customName.addEventListener("keydown", (e)=>{ if(e.key==="Enter") addCustom(); });
customHex.addEventListener("keydown", (e)=>{ if(e.key==="Enter") addCustom(); });

closeModalBtn.addEventListener("click", closeModal);
saveBtn.addEventListener("click", saveModal);

q1.addEventListener("click", () => addDelta(1));
q3.addEventListener("click", () => addDelta(3));
q5.addEventListener("click", () => addDelta(5));
q10.addEventListener("click", () => addDelta(10));
q0.addEventListener("click", clearModalQtyWithConfirm);

deleteColorBtn.addEventListener("click", deleteCustomWithConfirm);

modeV1.addEventListener("change", () => {
  if (modeV1.checked) setExportMode("v1");
  else if (modeV2.checked) setExportMode("v2");
  else setExportMode(null);
});
modeV2.addEventListener("change", () => {
  if (modeV2.checked) setExportMode("v2");
  else if (modeV1.checked) setExportMode("v1");
  else setExportMode(null);
});

saveExportBtn.addEventListener("click", async () => {
  if (!exportMode) { alert("Выберите V1 или V2"); return; }
  const format = exportFormat.value;
  try{
    if (format === "photo") await sharePhotoIOS(exportMode);
    else await downloadPDF(exportMode);
  } finally {
    closeSheet();
  }
});

render();
