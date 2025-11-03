import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");

export function readJSON(filename: string) {
  const p = path.join(DATA_DIR, filename);
  if (!fs.existsSync(p)) return null;
  const raw = fs.readFileSync(p, "utf-8");
  return JSON.parse(raw);
}

export function writeJSON(filename: string, data: any) {
  const p = path.join(DATA_DIR, filename);
  fs.writeFileSync(p, JSON.stringify(data, null, 2), "utf-8");
}
