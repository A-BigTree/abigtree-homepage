# 快速开始指南

本指南帮助您快速开始使用支持 JSON 配置的个人主页。

## 🚀 3 分钟快速启动

### 步骤 1: 编辑配置文件

打开 `public/config.json`，修改以下信息：

```json
{
  "profile": {
    "name": "您的姓名",
    "avatar": "/your-avatar.jpg",
    "bio": "您的个人简介",
    "title": "您的职位"
  }
}
```

### 步骤 2: 添加项目

在 `projects` 数组中添加您的项目：

```json
{
  "projects": [
    {
      "id": "1",
      "title": "您的项目名称",
      "description": "项目描述",
      "technologies": [
        { "name": "React", "category": "frontend" }
      ],
      "links": [
        { "type": "github", "url": "项目链接", "label": "GitHub" }
      ],
      "status": "completed"
    }
  ]
}
```

### 步骤 3: 配置联系方式

在 `contacts` 数组中配置联系方式：

```json
{
  "contacts": [
    {
      "type": "email",
      "url": "mailto:your.email@example.com",
      "label": "邮箱",
      "icon": "📧",
      "visible": true,
      "order": 1
    }
  ]
}
```

### 步骤 4: 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

## 📱 本地部署（快速）

```bash
# 1. 构建应用
npm run build

# 2. 预览构建
npm run preview
```

配置文件 `config.json` 会被自动包含在构建中。

## 🌐 远程部署（推荐）

### 步骤 1: 创建远程配置

将 `config.json` 上传到：
- CDN（推荐）
- GitHub
- 您的服务器

### 步骤 2: 配置环境变量

创建 `.env` 文件：

```bash
cp .env.example .env
```

编辑 `.env`：

```bash
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://your-cdn.com/config.json
```

### 步骤 3: 构建和部署

```bash
npm run build
```

将 `dist` 目录上传到您的服务器或静态托管平台。

## 🎯 配置模式对比

| 特性 | 本地 JSON | 远程 JSON |
|------|-----------|-----------|
| 更新内容 | 需要重新构建 | 即时生效 |
| 部署复杂度 | 简单 | 中等 |
| 开发便利性 | 高 | 中 |
| 生产推荐 | 小型站点 | 大型/动态站点 |
| 性能 | 更快 | 稍慢 |
| 配置示例 | `public/config.json` | `VITE_REMOTE_DATA_URL` |

## 📋 常见配置

### 添加更多联系方式

```json
{
  "contacts": [
    { "type": "email", "url": "mailto:...", "label": "邮箱", "icon": "📧" },
    { "type": "github", "url": "https://github.com/...", "label": "GitHub", "icon": "💻" },
    { "type": "linkedin", "url": "https://linkedin.com/...", "label": "LinkedIn", "icon": "💼" },
    { "type": "twitter", "url": "https://twitter.com/...", "label": "Twitter", "icon": "🐦" },
    { "type": "website", "url": "https://...", "label": "个人网站", "icon": "🌐" }
  ]
}
```

### 更新项目状态

```json
{
  "status": "completed"      // 已完成
  // 或
  "status": "in-progress"    // 进行中
  // 或
  "status": "planned"        // 计划中
  // 或
  "status": "archived"       // 已归档
}
```

### 标记精选项目

```json
{
  "featured": true
}
```

### 添加技能（可选）

```json
{
  "skills": [
    { "name": "JavaScript", "category": "语言", "level": 5, "years": 4 },
    { "name": "React", "category": "前端框架", "level": 5, "years": 3 }
  ]
}
```

## 🔍 验证配置

### 检查 JSON 格式

使用在线工具验证：https://jsonlint.com/

### 测试配置加载

1. 修改 `config.json`
2. 保存文件
3. 刷新浏览器
4. 查看是否显示更新

### 检查远程配置

```bash
# 测试远程 URL 是否可访问
curl https://your-cdn.com/config.json
```

## ❓ 常见问题

**Q: 配置修改后没有生效？**  
A: 本地模式需要重启开发服务器；远程模式会自动刷新（如果配置了刷新间隔）。

**Q: 如何切换本地/远程模式？**  
A: 修改 `.env` 文件中的 `VITE_DATA_SOURCE` 变量。

**Q: 远程配置加载失败？**  
A: 检查 URL 是否正确、CORS 是否配置、网络是否正常。

**Q: 如何隐藏某些信息？**  
A: 在 JSON 中将对应项目的 `visible` 设置为 `false` 或删除对应项。

**Q: 可以使用多个配置文件吗？**  
A: 可以部署多个 JSON 文件，通过环境变量切换不同 URL。

## 📚 更多文档

- **详细配置指南**: `JSON_CONFIG_GUIDE.md`
- **完整使用说明**: `PERSONAL_README.md`
- **配置细节指南**: `SETUP_GUIDE.md`
- **项目总结**: `COMPLETION_SUMMARY.md`

## ✅ 检查清单

部署前检查：

- [ ] 修改了个人信息（姓名、头像、简介）
- [ ] 添加了真实的项目作品
- [ ] 配置了正确的联系方式
- [ ] 验证了 JSON 格式正确
- [ ] 测试了开发环境
- [ ] 运行了构建命令
- [ ] 检查了构建产物
- [ ] 配置了环境变量（远程模式）
- [ ] 部署了配置文件（远程模式）
- [ ] 测试了生产环境

---

祝您使用愉快！🎉
