#!/usr/bin/env node
/*
Envía consultas a un endpoint usando el título de cada elemento del JSON.
Uso:
  node backend/scripts/batch_query_titles.js [ruta_json] [--delay=ms] [--out=directorio]
Por defecto lee backend/listaPeliculas.json, usa delay=200ms entre requests
y guarda cada respuesta en backend/output como <timestamp>-<slug>.json.
*/

const fs = require('fs');
const path = require('path');

// Usa fetch nativo (Node >=18). Si no existe, intenta node-fetch si está instalado.
let fetchFn = global.fetch;
if (!fetchFn) {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    fetchFn = require('node-fetch');
  } catch (e) {
    console.error('ERROR: Este script requiere Node 18+ (fetch nativo) o instalar node-fetch: npm i node-fetch');
    process.exit(1);
  }
}

const ENDPOINT = 'http://localhost:3000/api/v1/prediction/b2fd9bcf-aaf3-4ef6-ad4c-4f6e1e86e712';

function slugify(str) {
  return String(str)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // elimina diacríticos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'item';
}

function formatTimestamp(d = new Date()) {
  // ISO: 2025-08-21T15:30:45.123Z -> 20250821T153045123Z (sin dos puntos ni punto)
  const iso = d.toISOString();
  const yyyy = iso.slice(0, 4);
  const mm = iso.slice(5, 7);
  const dd = iso.slice(8, 10);
  const hh = iso.slice(11, 13);
  const mi = iso.slice(14, 16);
  const ss = iso.slice(17, 19);
  const ms = iso.slice(20, 23);
  return `${yyyy}${mm}${dd}T${hh}${mi}${ss}${ms}Z`;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function writeJsonFile(filePath, data) {
  const json = typeof data === 'string' ? data : JSON.stringify(data);
  fs.writeFileSync(filePath, json);
}

async function query(data) {
  const res = await fetchFn(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText} ${text ? '- ' + text : ''}`);
  }
  return res.json();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const jsonPath = process.argv[2] || path.join('backend', 'listaPeliculas.json');
  const delayArg = (process.argv.find((a) => a.startsWith('--delay=')) || '--delay=200').split('=')[1];
  const delayMs = Number(delayArg) || 200;
  const outArg = (process.argv.find((a) => a.startsWith('--out=')) || '').split('=')[1];
  const outDir = outArg || path.join('backend', 'output');

  if (!fs.existsSync(jsonPath)) {
    console.error(`ERROR: No existe el archivo: ${jsonPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, 'utf8');
  let items;
  try {
    items = JSON.parse(raw);
  } catch (e) {
    console.error('ERROR: JSON inválido en el archivo de entrada.');
    throw e;
  }

  if (!Array.isArray(items)) {
    console.error('ERROR: Se esperaba un array de objetos en el JSON de entrada.');
    process.exit(1);
  }

  console.log(`Total de elementos a consultar: ${items.length}`);
  ensureDir(outDir);
  console.log(`Las respuestas se guardarán en: ${outDir}`);

  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx] || {};
    const title = item.title || item.TITLE || item.titulo || null;
    if (!title) {
      console.warn(`[${idx + 1}/${items.length}] Saltado: no se encontró título en el elemento.`);
      continue;
    }
    const payload = { question: title };
    try {
      const resp = await query(payload);
      const ts = formatTimestamp();
      const slug = slugify(title);
      const filename = `${ts}-${slug}.json`;
      const savePath = path.join(outDir, filename);
      await writeJsonFile(savePath, resp);
      console.log(`[${idx + 1}/${items.length}] OK - "${title}" -> guardado: ${savePath}`);
    } catch (err) {
      console.error(`[${idx + 1}/${items.length}] ERROR - "${title}": ${err.message}`);
    }
    if (idx < items.length - 1 && delayMs > 0) {
      await sleep(delayMs);
    }
  }

  console.log('Proceso finalizado.');
}

if (require.main === module) {
  main().catch((e) => {
    console.error('Fallo inesperado:', e);
    process.exit(1);
  });
}
