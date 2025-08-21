#!/usr/bin/env node
/*
Convierte una tabla Markdown (formato con pipes) a JSON.
Uso:
  node backend/scripts/md_table_to_json.js backend/listaPeliculas.md backend/listaPeliculas.json
Si no se pasan argumentos, usa rutas por defecto.
*/
const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
  // Normaliza a camelCase en minúsculas, removiendo acentos y caracteres no alfanuméricos
  let s = String(str || '').replace(/\*\*/g, '').trim();
  try {
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } catch (_) {}
  s = s.replace(/[^a-zA-Z0-9]+/g, ' ');
  const parts = s.trim().toLowerCase().split(' ').filter(Boolean);
  if (parts.length === 0) return '';
  return parts[0] + parts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function cleanHeader(cell) {
  let c = String(cell || '').trim();
  c = c.replace(/\*\*/g, ''); // remover ** de markdown
  c = c.replace(/\s+/g, ' ');
  return c;
}

function splitRow(line) {
  // recorta bordes y separa por '|'
  const trimmed = String(line || '').trim();
  const noEdges = trimmed.replace(/^\|/, '').replace(/\|$/, '');
  return noEdges.split('|').map((c) => c.trim());
}

function isSeparator(line) {
  if (!line) return false;
  let s = String(line).trim();
  if (!s.startsWith('|')) return false;
  s = s.replace(/^\|/, '').replace(/\|$/, '');
  const cells = s.split('|').map((c) => c.trim());
  return cells.length > 0 && cells.every((c) => c.length > 0 && /^[\-:]+$/.test(c));
}

function parseMarkdownTable(mdLines) {
  const n = mdLines.length;
  let i = 0;
  while (i < n - 1) {
    const line = mdLines[i];
    const nextLine = mdLines[i + 1];
    if (String(line).trim().startsWith('|') && isSeparator(nextLine)) {
      const headerCells = splitRow(line).map(cleanHeader);
      const headerKeys = headerCells.map(toCamelCase);
      const rows = [];
      i += 2; // saltar separador
      while (i < n && String(mdLines[i]).trim().startsWith('|')) {
        const rowLine = mdLines[i];
        if (isSeparator(rowLine)) {
          i += 1;
          continue;
        }
        let cells = splitRow(rowLine);
        if (cells.length !== headerCells.length) {
          if (cells.length > headerCells.length) {
            const head = cells.slice(0, headerCells.length - 1);
            const tail = cells.slice(headerCells.length - 1).join(' | ');
            cells = head.concat([tail]);
          } else {
            // rellenar faltantes
            while (cells.length < headerCells.length) cells.push('');
          }
        }
        const row = {};
        for (let j = 0; j < headerKeys.length; j++) {
          row[headerKeys[j]] = cells[j];
        }
        rows.push(row);
        i += 1;
      }
      return rows;
    }
    i += 1;
  }
  return [];
}

function main() {
  const inPath = process.argv[2] || path.join('backend', 'listaPeliculas.md');
  const outPath = process.argv[3] || path.join('backend', 'listaPeliculas.json');

  if (!fs.existsSync(inPath)) {
    console.error(`ERROR: No existe el archivo de entrada: ${inPath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(inPath, 'utf8');
  const lines = content.split(/\r?\n/);
  const data = parseMarkdownTable(lines);

  if (!data || data.length === 0) {
    console.error('ERROR: No se encontró una tabla Markdown válida en el archivo.');
    process.exit(2);
  }

  // Crear directorio destino si no existe
  const outDir = path.dirname(outPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`OK: ${data.length} filas exportadas a ${outPath}`);
}

if (require.main === module) {
  main();
}
