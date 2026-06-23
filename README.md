# Porcello Lab

個人研究室 Personal Research Hub。

GitHub Pages 統一入口網站：

```text
https://codingporcello.github.io/porcello-lab/
```

## 結構

```text
porcello-lab/
├── index.html
├── styles.css
├── apps.js
├── main.js
├── manifest.webmanifest
├── assets/avatar/
├── scripts/build.js
└── .github/workflows/deploy-pages.yml
```

## 本機測試

```bash
python3 -m http.server 4180
```

打開：

```text
http://127.0.0.1:4180/
```

## Build

```bash
npm run check
npm run build
```

## 部署

1. 在 GitHub 建立 repository：`porcello-lab`。
2. 本機執行：

```bash
git init
git add .
git commit -m "Build Porcello Lab"
git branch -M main
git remote add origin https://github.com/codingporcello/porcello-lab.git
git push -u origin main
```

3. 到 GitHub repository 的 `Settings → Pages`。
4. Source 選 `GitHub Actions`。
5. Actions 變綠色後，打開：

```text
https://codingporcello.github.io/porcello-lab/
```

## 新增第五個工具

只要修改 `apps.js`，新增一筆設定即可：

```js
{
  name: "新工具名稱",
  icon: "📚",
  description: "工具說明",
  url: "https://codingporcello.github.io/new-tool/",
}
```

不用修改 `index.html`。
