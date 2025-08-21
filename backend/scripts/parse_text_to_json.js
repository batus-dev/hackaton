#!/usr/bin/env node
/*
Lee archivos JSON con estructura { text: "<json minificado>", ... } y
crea archivos con el JSON del campo `text` parseado y FORMATEADO en otro directorio.

Uso:
  node backend/scripts/parse_text_to_json.js [ruta_de_entrada] [--in=dir] [--out=dir] [--pretty=2]

- ruta_de_entrada: puede ser un directorio o un archivo .json. Si se omite y no se usa --in,
                   por defecto usa backend/output
- --in=dir:       directorio de entrada (prioridad baja si se pasa ruta_de_entrada)
- --out=dir:      directorio de salida (por defecto backend/output_parsed)
- --pretty=N:     espacios de indentación para el JSON de salida (por defecto 2)

Ejemplo:
  node backend/scripts/parse_text_to_json.js --in=backend/output --out=backend/output_parsed --pretty=2
*/

const fs = require('fs');
const path = require('path');

function isDir(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}
function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function parseArgs(argv) {
  const inFlag = (argv.find(a => a.startsWith('--in=')) || '').split('=')[1];
  const outFlag = (argv.find(a => a.startsWith('--out=')) || '').split('=')[1];
  const prettyFlag = (argv.find(a => a.startsWith('--pretty=')) || '').split('=')[1];
  const positional = argv.slice(2).filter(a => !a.startsWith('--'))[0];

  const inputPath = positional || inFlag || path.join('backend', 'output');
  const outDir = outFlag || path.join('backend', 'output_parsed');
  const pretty = Number(prettyFlag) || 2;
  return { inputPath, outDir, pretty };
}

function reorderAndNormalize(obj) {
  // Garantiza el orden de claves y que existan todas (o null)
  const ordered = {
    titulo: obj?.titulo ?? null,
    genero: obj?.genero ?? null,
    descripcion: obj?.descripcion ?? null,
    sinopsis: obj?.sinopsis ?? null,
    keywords: Array.isArray(obj?.keywords) ? obj.keywords : [],
    temporadas: obj?.temporadas ?? null,
    duracion_minutos: obj?.duracion_minutos ?? null,
    rating_parental: obj?.rating_parental ?? null,
  };
  return ordered;
}

function processFile(inFile, outDir, pretty) {
  const base = path.basename(inFile);
  const outFile = path.join(outDir, base);
  const raw = fs.readFileSync(inFile, 'utf8');
  let top;
  try {
    top = JSON.parse(raw);
  } catch (e) {
    console.error(`ERROR parseando JSON top-level en ${inFile}: ${e.message}`);
    return { file: inFile, ok: false, reason: 'top_json_invalid' };
  }

  if (typeof top.text !== 'string') {
    console.error(`ERROR: campo 'text' no encontrado o no es string en ${inFile}`);
    return { file: inFile, ok: false, reason: 'text_missing' };
  }

  let parsedText;
  try {
    parsedText = JSON.parse(top.text);
  } catch (e) {
    console.error(`ERROR parseando campo 'text' como JSON en ${inFile}: ${e.message}`);
    return { file: inFile, ok: false, reason: 'text_json_invalid' };
  }

  const finalObj = reorderAndNormalize(parsedText);
  const prettyJson = JSON.stringify(finalObj, null, pretty) + '\n';
  fs.writeFileSync(outFile, prettyJson);
  return { file: inFile, outFile, ok: true };
}

function listJsonFiles(dir) {
  return fs.readdirSync(dir)
    .filter(f => f.toLowerCase().endsWith('.json'))
    .map(f => path.join(dir, f));
}

async function main() {
  const { inputPath, outDir, pretty } = parseArgs(process.argv);

  if (!fs.existsSync(inputPath)) {
    console.error(`ERROR: ruta de entrada no existe: ${inputPath}`);
    process.exit(1);
  }

  ensureDir(outDir);

  let files = [];
  if (isDir(inputPath)) {
    files = listJsonFiles(inputPath);
  } else if (isFile(inputPath)) {
    if (inputPath.toLowerCase().endsWith('.json')) files = [inputPath];
  } else {
    console.error(`ERROR: ruta de entrada no válida: ${inputPath}`);
    process.exit(1);
  }

  if (!files.length) {
    console.warn('No se encontraron archivos .json para procesar.');
    return;
  }

  console.log(`Procesando ${files.length} archivo(s). Salida -> ${outDir}`);
  let ok = 0, fail = 0;
  for (const f of files) {
    const res = processFile(f, outDir, pretty);
    if (res.ok) {
      ok += 1;
      console.log(`OK: ${path.basename(f)} -> ${path.basename(res.outFile)}`);
    } else {
      fail += 1;
    }
  }
  console.log(`Finalizado. Éxitos: ${ok}, Fallos: ${fail}`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error('Fallo inesperado:', e);
    process.exit(1);
  });
}
