/**
 * フルページスクリーンショット取得スクリプト
 * 事前に `npm run dev` で開発サーバーを起動しておいてください。
 *
 * 使い方: npm run screenshot
 * 出力: static/screenshots/fullpage.png
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const OUT_DIR = join(ROOT, 'static', 'screenshots');
const OUT_FILE = join(OUT_DIR, 'fullpage.png');

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: OUT_FILE,
      fullPage: true,
      type: 'png',
    });
    console.log('Saved:', OUT_FILE);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
