# 🌸 あいうえお 可愛日文

零基礎日文學習 App（PWA）。手機加到主畫面即可離線使用。

## 功能
- 📇 **單字卡 + SRS 間隔重複**：忘記/模糊/記得，自動安排複習時機
- 📝 **測驗**：選擇題計分
- ✍️ **寫字練習**：手指描寫 + 米字格 + 範本開關
- 📖 **基礎文法**：です、助詞、指示詞、ます形
- 🗂️ **一覽表**：點字聽發音
- 🔥 **每日打卡**：連續學習天數

## 內容範圍
平假名 / 片假名（清音・濁音・拗音）＋ 主題單字（數字・顏色・食物・招呼語）

## 本機測試
需要透過網址開啟（PWA / 發音功能不支援直接點 HTML 檔）：

```powershell
# 在專案資料夾執行
python -m http.server 8000
```

- 同一台電腦：`http://localhost:8000`
- 手機（同 Wi-Fi）：`http://<電腦IP>:8000`

## 上線分享（免費，擇一）

### A. GitHub Pages
1. 在 GitHub 建一個新 repo（例如 `aiueo`）
2. 把這個資料夾的檔案上傳上去
3. repo → Settings → Pages → Source 選 `main` 分支 `/root`
4. 幾分鐘後得到網址：`https://你的帳號.github.io/aiueo/`

### B. Netlify（最簡單，拖拉即可）
1. 註冊 https://www.netlify.com
2. 進 Sites 頁面，把整個 `japanese-app` 資料夾**拖進**上傳框
3. 立即得到一個 `https://xxx.netlify.app` 網址

上線後，手機打開網址 →「加到主畫面」就完成了 🎉

## 檔案說明
| 檔案 | 用途 |
|------|------|
| `index.html` | 頁面結構 |
| `style.css` | 樣式（可愛粉嫩風） |
| `app.js` | 所有互動邏輯 |
| `data.js` | 假名 / 單字 / 文法資料 |
| `manifest.json` | PWA 設定 |
| `sw.js` | Service Worker（離線快取） |
| `icon.svg` | App 圖示 |
