# 2022 React Project Kit

### 環境需求
- node 18.12.1
- yarn 1.22.19

### Library
- Material UI
- Redux
- Redux Toolkit
- Redux Observable
- Reselect
- Rxjs
- Lodash
- React Router
- Style Component
- Eslint
- Prettier
- FontAwesome

### 目錄結構

#### src/components

- 可以獨立且被服用的最小元件
- 通常不會在 components 處理與 API 介接的部分
- 命名規則：駝峰式 + 長命名法

#### src/pages

- 集成 components
- 形成一個完整可以被瀏覽的頁面
- 通常會由 router 作為上層的呼叫來源
- 作為 API 和處理資料的地方
- 命名規則：大寫開頭的駝峰式 + `page.js` 結尾

#### src/layouts

- 作為 page 的外層 layout
- 設定如 header 或 drawer 等元素
- 命名規則：大寫開頭的駝峰式 + `layout.js` 結尾
- 
#### src/hooks

- 集中所有客製化 React Hooks
- 命名規則：大寫開頭的駝峰式 + `hook.js` 結尾

#### src/routes

- 處理 router
- 呼叫對應的 pages 而不是 components
- 命名規則：大寫開頭的駝峰式 + `route.js` 結尾

#### src/services

- API 介面
- 命名規則：小寫開頭的駝峰式 + `service.js` 結尾

#### src/stores

- Redux Store 介面
- 包含處理 Rxjs / Epic 等非同步事件
- 命名規則：小寫開頭的駝峰式 + `store.js` 結尾

#### src/constants

- 集中變數
- 命名規則：小寫開頭的駝峰式 + `constant.js` 結尾

#### src/utils

- 儲存小型且可被覆用 Function
- 命名規則：小寫開頭的駝峰式 + `util.js` 結尾

#### src/assets

- 儲存靜態檔案

### Guide

#### Icon

https://fontawesome.com/docs/web/use-with/react/add-icons#add-the-icons-to-your-project
