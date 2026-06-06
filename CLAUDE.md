# 日文學習 App（あいうえお 可愛日文）

零基礎日文學習 PWA。介面繁體中文、風格活潑可愛（粉嫩櫻花）。

## 重要資訊
- **專案位置**：`C:\Users\ck6th\japanese-app`
- **GitHub repo**：`ck6thomas-ai/aiueo`（public）
- **線上網址**：https://ck6thomas-ai.github.io/aiueo/ （GitHub Pages，main 分支 root）
- **更新方式**：改完檔案後 `git -C C:\Users\ck6th\japanese-app add -A && commit && push`，幾分鐘後線上自動更新。

## 檔案
| 檔案 | 用途 |
|------|------|
| index.html | 頁面結構（5 分頁：學習/測驗/寫字/文法/一覽） |
| style.css | 樣式 |
| app.js | 所有邏輯（SRS、測驗、寫字 canvas、文法、選單） |
| data.js | **所有學習內容都在這**（假名/單字/文法） |
| sw.js | Service Worker；**改任何檔案後要把 CACHE 版本號 +1**（如 aiueo-v5→v6）否則手機讀到舊快取 |
| manifest.json / icon.svg | PWA 設定與圖示 |

## data.js 資料結構
- 假名組：`{ kana, romaji, word, wordZh }`（word/wordZh 是例字，可留空）
- 單字組：`v(jp, romaji, zh)` → `{ jp, romaji, zh }`
- 卡片組登錄在 `DECK_REG` 陣列（id, label, type: "kana"|"vocab", items）
- 文法在 `GRAMMAR` 陣列
- 新增一個卡片組：建好 items 陣列 → 加進 `DECK_REG` 即可，頂部選單會自動出現

## 新增內容後的標準流程
1. 編輯 `data.js`
2. `node --check data.js`（可選，驗證語法）
3. `sw.js` 的 CACHE 版本號 +1
4. `git add -A && git commit && git push`

## 進度
Phase 1~5 全部完成：五十音(清濁拗)、主題單字(數字/顏色/食物/招呼/日常用語)、SRS 間隔重複、測驗、寫字練習、基礎文法、已上線。
