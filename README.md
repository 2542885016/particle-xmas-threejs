# Particle Xmas

🎄 **Particle Xmas** 是一个用 **Three.js** 和 **Vite** 制作的炫酷粒子圣诞动画展示项目，适合前端特效练手或作品展示。

![Demo](./screenshot.gif)

---

## 功能特点

- **3D 粒子动画**：粒子在三维空间中动态飞舞，支持互动效果  
- **自定义设置**：可调整粒子数量、颜色和速度  
- **响应式设计**：兼容桌面和移动端  
- **轻量高效**：基于 Vite 构建，加载快速、性能优化  

---

## 技术栈

- **Vite** – 高性能前端构建工具  
- **Three.js** – WebGL 3D 渲染库  
- **JavaScript / CSS** – 核心逻辑与样式  

---


## 🧠 Troubleshooting & Lessons Learned

在本项目开发与部署过程中，主要解决了以下工程问题：

- **Three.js 交互控制**：修复 OrbitControls 缩放失效问题，优化相机参数以改善视图比例  
- **场景层级与坐标系统**：解决光源与模型错位（world / local 坐标），以及 Sprite 文本错误绑定问题  
- **资源加载与构建差异**：修复生产环境资源 404（Vite 构建后 `/src` 路径失效），统一使用 `public/` 或模块导入   

### 📌 Key Takeaways
- Scene Graph（对象层级）是 Three.js 问题排查核心  
- 区分 world / local coordinate 可避免大多数位置错误  
- 开发环境与生产环境资源路径存在差异  
- 优先通过 console 报错定位问题，再做最小修改


---


## 本地运行

克隆项目并安装依赖后启动开发服务器：

```bash
git clone https://github.com/2542885016/-
cd particle-xmas
npm install
npm run dev

