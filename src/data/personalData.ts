import type { PersonalData } from '../types';

export const personalData: PersonalData = {
  profile: {
    name: "Your Name",
    avatar: "/placeholder-avatar.png",
    bio: "专注前端开发，热爱创造优雅的用户体验。擅长 React、TypeScript 和现代化前端技术栈。",
    title: "前端开发者",
    location: "中国",
    languages: ["中文", "English"]
  },
  projects: [
    {
      id: "1",
      title: "个人主页",
      description: "使用 Vite + React + TypeScript 构建的现代化个人主页，展示个人作品和技能。",
      technologies: [
        { name: "React", category: "frontend", proficiency: 5 },
        { name: "TypeScript", category: "language", proficiency: 4 },
        { name: "Vite", category: "tool", proficiency: 4 },
        { name: "CSS3", category: "frontend", proficiency: 4 }
      ],
      links: [
        { type: "github", url: "https://github.com/yourusername/portfolio", label: "GitHub" },
        { type: "demo", url: "https://yourwebsite.com", label: "预览" }
      ],
      status: "completed",
      featured: true
    },
    {
      id: "2",
      title: "React 组件库",
      description: "一套可复用的 React UI 组件库，提供常见的基础组件和交互组件。",
      technologies: [
        { name: "React", category: "frontend", proficiency: 5 },
        { name: "TypeScript", category: "language", proficiency: 4 },
        { name: "Storybook", category: "tool", proficiency: 3 },
        { name: "CSS Modules", category: "frontend", proficiency: 4 }
      ],
      links: [
        { type: "github", url: "https://github.com/yourusername/ui-components", label: "GitHub" },
        { type: "docs", url: "https://yourwebsite.com/docs", label: "文档" },
        { type: "npm", url: "https://npmjs.com/package/your-components", label: "NPM" }
      ],
      status: "in-progress",
      featured: true
    },
    {
      id: "3",
      title: "数据可视化平台",
      description: "基于 Web 的数据可视化分析平台，支持多种图表类型和实时数据更新。",
      technologies: [
        { name: "React", category: "frontend", proficiency: 5 },
        { name: "D3.js", category: "frontend", proficiency: 3 },
        { name: "Node.js", category: "backend", proficiency: 3 },
        { name: "WebSocket", category: "tool", proficiency: 3 }
      ],
      links: [
        { type: "github", url: "https://github.com/yourusername/data-viz", label: "GitHub" },
        { type: "demo", url: "https://data-viz.yourwebsite.com", label: "预览" }
      ],
      status: "completed"
    }
  ],
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
      url: "https://github.com/yourusername",
      label: "GitHub",
      icon: "💻",
      visible: true,
      order: 2
    },
    {
      type: "website",
      url: "https://yourwebsite.com",
      label: "个人网站",
      icon: "🌐",
      visible: true,
      order: 3
    }
  ],
  skills: [
    { name: "JavaScript", category: "语言", level: 5, years: 4 },
    { name: "TypeScript", category: "语言", level: 4, years: 2 },
    { name: "React", category: "前端框架", level: 5, years: 3 },
    { name: "Vue.js", category: "前端框架", level: 4, years: 2 },
    { name: "Node.js", category: "后端", level: 3, years: 2 },
    { name: "CSS/Sass", category: "样式", level: 4, years: 4 },
    { name: "Git", category: "工具", level: 4, years: 3 },
    { name: "Webpack/Vite", category: "工具", level: 3, years: 2 }
  ],
  experience: [
    {
      id: "1",
      company: "科技公司A",
      position: "前端工程师",
      startDate: "2022-06",
      endDate: "至今",
      description: "负责公司核心产品的前端开发，使用 React 和 TypeScript 构建用户界面，优化页面性能和用户体验。",
      technologies: ["React", "TypeScript", "Redux", "Webpack"]
    },
    {
      id: "2",
      company: "科技公司B",
      position: "前端开发实习生",
      startDate: "2021-03",
      endDate: "2022-05",
      description: "参与公司官网和内部管理系统的开发，使用 Vue.js 和 Element UI 构建响应式页面。",
      technologies: ["Vue.js", "Element UI", "JavaScript", "CSS"]
    }
  ]
};
