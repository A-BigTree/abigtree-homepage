# JSON 配置指南

本指南说明如何使用 JSON 文件配置个人主页内容，支持本地和远程两种模式。

## 📋 配置方式

### 方式一：本地 JSON 文件（默认）

在开发环境中，默认使用本地的 JSON 配置文件。

**文件位置**: `public/config.json`

### 方式二：远程 JSON 文件

在生产环境中，可以从远程 URL 加载配置文件，方便动态更新内容。

## ⚙️ 配置步骤

### 1. 创建或修改 JSON 配置文件

在 `public/config.json` 文件中配置您的个人信息：

```json
{
  "profile": {
    "name": "您的姓名",
    "avatar": "/your-avatar.jpg",
    "bio": "个人简介",
    "title": "职位",
    "location": "城市",
    "languages": ["中文", "English"]
  },
  "projects": [
    {
      "id": "1",
      "title": "项目名称",
      "description": "项目描述",
      "technologies": [
        { "name": "React", "category": "frontend", "proficiency": 5 }
      ],
      "links": [
        { "type": "github", "url": "https://github.com/...", "label": "GitHub" }
      ],
      "status": "completed",
      "featured": true
    }
  ],
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

### 2. 选择数据源模式

创建 `.env` 文件（参考 `.env.example`）：

```bash
# 复制示例文件
cp .env.example .env
```

编辑 `.env` 文件：

```bash
# 使用本地 JSON 文件（默认）
VITE_DATA_SOURCE=local

# 或者使用远程 URL
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://your-cdn.com/config.json
```

### 3. 配置远程 URL（可选）

如果选择远程模式，需要配置 `VITE_REMOTE_DATA_URL`：

```bash
# 远程 URL 示例
VITE_REMOTE_DATA_URL=https://your-cdn.com/config.json
# 或
VITE_REMOTE_DATA_URL=https://api.example.com/portfolio/data
```

## 🌐 远程配置部署

### 部署到 CDN

将 `config.json` 文件部署到 CDN：

1. 上传 `config.json` 到您的 CDN 服务
2. 设置正确的 CORS 头部（如果需要）
3. 配置 `.env` 文件指向 CDN URL

```bash
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://cdn.example.com/config.json
```

### 使用 GitHub Raw Content

可以使用 GitHub 的原始内容作为远程配置：

```bash
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://raw.githubusercontent.com/username/repo/main/config.json
```

**注意**: GitHub Raw 有速率限制，生产环境建议使用 CDN。

### 使用 API 接口

也可以使用后端 API 返回配置：

```bash
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://api.example.com/portfolio/config
```

API 需要返回符合 `PersonalData` 接口的 JSON 数据。

## 🔄 数据刷新

自动刷新配置数据，无需重启应用：

```bash
# 设置刷新间隔（毫秒）
VITE_DATA_REFRESH_INTERVAL=300000  # 5分钟刷新一次
VITE_DATA_REFRESH_INTERVAL=0       # 禁用自动刷新
```

## 📝 JSON 结构说明

### Profile（个人信息）

```json
{
  "profile": {
    "name": "姓名",
    "avatar": "头像URL",
    "bio": "个人简介",
    "title": "职位",
    "location": "位置",
    "languages": ["语言1", "语言2"]
  }
}
```

### Projects（项目信息）

```json
{
  "projects": [
    {
      "id": "唯一标识",
      "title": "项目标题",
      "description": "项目描述",
      "technologies": [
        {
          "name": "技术名称",
          "category": "frontend|backend|tool|language",
          "proficiency": 1-5
        }
      ],
      "links": [
        {
          "type": "demo|github|docs|npm",
          "url": "链接地址",
          "label": "链接文本"
        }
      ],
      "status": "completed|in-progress|planned|archived",
      "featured": true|false
    }
  ]
}
```

### Contacts（联系方式）

```json
{
  "contacts": [
    {
      "type": "email|github|linkedin|twitter|website|wechat",
      "url": "链接地址",
      "label": "显示文本",
      "icon": "emoji图标",
      "visible": true|false,
      "order": 1
    }
  ]
}
```

## 🚀 使用示例

### 开发环境

```bash
# .env
VITE_DATA_SOURCE=local

# 启动开发服务器
npm run dev
```

### 生产环境（本地JSON）

```bash
# .env
VITE_DATA_SOURCE=local

# 构建
npm run build
# config.json 会被打包到 dist 目录
```

### 生产环境（远程JSON）

```bash
# .env
VITE_DATA_SOURCE=remote
VITE_REMOTE_DATA_URL=https://cdn.example.com/config.json

# 构建
npm run build
# 应用会从远程URL加载配置
```

## 🔧 故障排除

### JSON 格式错误

如果 JSON 格式不正确，页面会显示错误信息。可以使用 [JSONLint](https://jsonlint.com/) 验证格式。

### 远程加载失败

检查：
1. URL 是否正确可访问
2. CORS 配置是否正确
3. 网络连接是否正常
4. 服务器是否返回正确的 JSON 格式

### 本地加载失败

检查：
1. `public/config.json` 文件是否存在
2. JSON 格式是否正确
3. 文件权限是否正确

## 📚 完整示例

查看 `public/config.json` 获取完整的配置示例。

## 🎯 最佳实践

1. **开发环境**: 使用本地 JSON 文件，便于快速修改和测试
2. **生产环境**: 使用远程 URL（CDN 或 API），便于动态更新
3. **版本控制**: 提交 `config.json` 到版本控制
4. **备份**: 定期备份配置文件
5. **验证**: 在更新配置前验证 JSON 格式
6. **监控**: 监控远程配置的可用性

---

需要帮助？查看 [README.md](./README.md) 或 [SETUP_GUIDE.md](./SETUP_GUIDE.md)。
