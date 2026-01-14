# 个人主页

一个使用 Vite + React + TypeScript 构建的现代化个人主页，展示个人项目作品和联系方式。

## ✨ 特性

- 🎨 简约现代的设计风格
- 📱 完全响应式布局，适配所有设备
- 🚀 基于 Vite 的快速构建
- 💪 TypeScript 类型安全
- 🎯 模块化组件结构
- ♿ 良好的可访问性支持
- ⚡ 优化的性能表现

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/           # 组件目录
│   ├── ProfileHeader/   # 个人头部信息组件
│   ├── ProjectSection/  # 项目展示组件
│   ├── ContactSection/  # 联系方式组件
│   └── Layout/          # 布局组件
├── types/               # TypeScript 类型定义
├── data/                # 个人数据配置
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口点
```

## ⚙️ 个性化配置

### 修改个人信息

编辑 `src/data/personalData.ts` 文件来更新您的个人信息：

```typescript
export const personalData: PersonalData = {
  profile: {
    name: "您的名字",           // 修改为您的姓名
    avatar: "/your-avatar.png", // 替换为您的头像图片
    bio: "您的个人简介",       // 添加个人简介
    title: "您的职位",         // 您的职业身份
    location: "您的位置",      // 所在城市或地区
    languages: ["中文", "English"] // 掌握的语言
  },
  // ... 其他配置
};
```

### 添加项目

在 `projects` 数组中添加您的项目：

```typescript
projects: [
  {
    id: "unique-id",
    title: "项目名称",
    description: "项目描述",
    technologies: [
      { name: "React", category: "frontend", proficiency: 5 },
      // 更多技术栈...
    ],
    links: [
      { type: "github", url: "https://github.com/...", label: "GitHub" },
      { type: "demo", url: "https://example.com", label: "预览" }
    ],
    status: "completed", // completed | in-progress | planned | archived
    featured: true       // 是否为精选项目
  },
  // 更多项目...
]
```

### 配置联系方式

修改 `contacts` 数组来配置您的联系方式：

```typescript
contacts: [
  {
    type: "email",                    // email | github | linkedin | twitter | website | wechat
    url: "mailto:your.email@example.com",
    label: "邮箱",
    icon: "📧",
    visible: true,
    order: 1
  },
  // 更多联系方式...
]
```

### 替换头像

1. 将您的头像图片放入 `public/` 目录
2. 在 `src/data/personalData.ts` 中更新头像路径：
   ```typescript
   avatar: "/your-avatar.jpg"
   ```

## 🎨 自定义样式

### 修改配色方案

在 `src/App.css` 中修改 CSS 变量来自定义配色：

```css
:root {
  --color-primary: #3b82f6;        /* 主色调 */
  --color-primary-hover: #2563eb;  /* 悬停颜色 */
  --color-surface: #f8fafc;         /* 背景色 */
  /* 更多变量... */
}
```

### 调整布局

在各个组件的 CSS 文件中修改样式规则来自定义布局。

## 🔧 技术栈

- **框架**: React 19
- **语言**: TypeScript 5.9
- **构建工具**: Vite 7
- **样式**: CSS3 (CSS Variables, Flexbox, Grid)

## 📱 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 🚀 部署

### 部署到 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 部署到 GitHub Pages

```bash
# 安装 gh-pages
npm install -D gh-pages

# 在 package.json 中添加部署脚本
# "deploy": "gh-pages -d dist"

# 构建
npm run build

# 部署
npm run deploy
```

### 部署到 Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 构建
npm run build

# 部署
netlify deploy --prod --dir=dist
```

## 📝 开发说明

### 代码规范

项目使用 ESLint 进行代码检查：

```bash
npm run lint
```

### 类型检查

运行 TypeScript 类型检查：

```bash
npx tsc --noEmit
```

## 🤝 贡献

欢迎提交问题和拉取请求！

## 📄 许可证

MIT License

## 🎉 开始使用

1. 克隆此仓库
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 编辑 `src/data/personalData.ts` 添加您的个人信息
5. 部署到您喜欢的平台

---

如有问题或建议，欢迎随时联系！
