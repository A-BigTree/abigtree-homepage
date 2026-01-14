# 个人主页配置指南

## 快速配置您的个人主页

### 1. 替换头像

将您的头像图片放到 `public/` 目录，然后在 `src/data/personalData.ts` 中修改：

```typescript
profile: {
  name: "您的名字",
  avatar: "/your-avatar.jpg",  // 替换为您的头像文件名
  // ...
}
```

### 2. 更新个人信息

在 `src/data/personalData.ts` 中修改以下信息：

```typescript
profile: {
  name: "您的真实姓名",
  title: "您的职业身份（如：前端开发工程师）",
  bio: "简短的个人介绍，1-2句话即可",
  location: "您所在的城市",
  languages: ["中文", "English"]  // 您掌握的语言
}
```

### 3. 添加您的项目

在 `projects` 数组中添加您的真实项目：

```typescript
{
  id: "项目唯一标识",
  title: "项目名称",
  description: "项目的详细描述，说明项目功能和技术亮点",
  technologies: [
    { name: "React", category: "frontend", proficiency: 5 },
    { name: "TypeScript", category: "language", proficiency: 4 }
  ],
  links: [
    { type: "github", url: "https://github.com/your-repo", label: "GitHub" },
    { type: "demo", url: "https://your-project.com", label: "预览" }
  ],
  status: "completed",  // 已完成 | 进行中 | 计划中 | 已归档
  featured: true        // 标记为精选项目
}
```

### 4. 配置联系方式

修改 `contacts` 数组：

```typescript
contacts: [
  {
    type: "email",
    url: "mailto:your.email@example.com",
    label: "邮箱",
    icon: "📧",
    visible: true,
    order: 1
  },
  {
    type: "github",
    url: "https://github.com/your-username",
    label: "GitHub",
    icon: "💻",
    visible: true,
    order: 2
  }
]
```

### 5. 更新页面标题

修改 `index.html` 中的标题和元信息：

```html
<title>您的名字 - 个人主页</title>
<meta name="description" content="您的个人简介">
<meta name="author" content="您的名字">
```

### 6. 自定义样式（可选）

在 `src/App.css` 中修改颜色主题：

```css
:root {
  --color-primary: #您的主题色;        /* 主色调 */
  --color-primary-hover: #悬停颜色;    /* 悬停颜色 */
  --color-surface: #背景颜色;           /* 页面背景色 */
}
```

### 7. 添加技能和经验（可选）

如果想要展示技能和工作经历，在 `personalData` 中添加：

```typescript
skills: [
  { name: "JavaScript", category: "语言", level: 5, years: 4 },
  { name: "React", category: "前端框架", level: 5, years: 3 }
],

experience: [
  {
    id: "1",
    company: "公司名称",
    position: "职位名称",
    startDate: "2022-06",
    endDate: "至今",
    description: "工作内容描述",
    technologies: ["React", "TypeScript", "Node.js"]
  }
]
```

## 常见问题

**Q: 如何修改项目展示顺序？**  
A: 直接在 `projects` 数组中调整项目顺序即可。

**Q: 如何隐藏某些联系方式？**  
A: 将对应联系方式的 `visible` 属性设置为 `false`。

**Q: 如何添加更多的社交媒体链接？**  
A: 在 `contacts` 数组中添加新的联系方式，支持 `linkedin`、`twitter`、`wechat` 等类型。

**Q: 如何自定义布局？**  
A: 修改各个组件的 CSS 文件，或在 `App.tsx` 中调整组件布局顺序。

## 配置完成后

1. 运行 `npm run dev` 查看效果
2. 确认所有信息正确无误
3. 运行 `npm run build` 构建生产版本
4. 部署到您喜欢的平台

---

需要帮助？查看 [README.md](./README.md) 了解更多信息。
