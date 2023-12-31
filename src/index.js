// src/index.js
 
// React: 框架的核心包
import React from 'react';
// ReactDOM: 专门做渲染相关的包
import ReactDOM from 'react-dom/client';
// 应用全局样式文件
import './index.css';
// 引入根组件
import App from './App';
 
// 渲染根组件App 到一个id为root的DOM节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点，useEffect执行机制
  <React.StrictMode>
    <App />
  </React.StrictMode>
);