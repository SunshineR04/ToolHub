# ToolHub — 好用的工具集合

> 发现、分享、管理实用工具与资源网站的导航站。完全免费方案构建，支持可视化后台与文件下载。

在线预览：https://tangerine-starburst-022d29.netlify.app

## ✨ 特性

- **导航站布局** — 卡片网格 + 分类筛选 + 实时搜索
- **可视化后台** — Decap CMS (`/admin/`)，Git 驱动，无需数据库
- **文件下载** — 支持直接上传小文件（<6MB）或外链大文件（蓝奏云 / Gitee Releases 等）
- **分类与标签** — 5 大分类（开发 / 设计 / AI / 效率 / 学习）+ 自定义标签
- **响应式设计** — Tailwind CSS，移动端友好
- **静态部署** — Astro 构建，Netlify 全球 CDN，自动部署

## 🛠 技术栈

| 层 | 选型 |
|---|---|
| 框架 | [Astro](https://astro.build) 5.x |
| 样式 | [Tailwind CSS](https://tailwindcss.com) 3.x |
| 后台 | [Decap CMS](https://decapcms.org) 3.x |
| 托管 | [Netlify](https://www.netlify.com) |
| 认证 | Netlify Identity + Git Gateway（GitHub OAuth） |

## 📂 目录结构

```
toolhub/
├── public/
│   ├── admin/          # Decap CMS 配置与入口
│   ├── uploads/        # 上传文件存放
│   └── favicon.svg
├── src/
│   ├── components/     # ToolCard / SearchBar / CategoryFilter / Header
│   ├── content/
│   │   └── tools/      # 每个 .md 即一个工具
│   ├── layouts/        # BaseLayout
│   └── pages/
│       ├── index.astro              # 首页
│       ├── tools/[...slug].astro    # 详情页
│       └── categories/[category].astro
├── astro.config.mjs
├── tailwind.config.mjs
└── netlify.toml
```

## 🚀 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
```

## 📝 添加工具

### 方式一：可视化后台（推荐）

访问 `https://你的域名.netlify.app/admin/`，用 GitHub 账号登录即可增删改。

字段说明：

| 字段 | 说明 |
|---|---|
| 名称 / 图标 / 网址 / 描述 | 必填，图标为 emoji 下拉选择 |
| 分类 | 开发工具 / 设计资源 / AI工具 / 效率工具 / 学习资源 / 素材资源 / 其他 |
| 标签 | 自定义列表 |
| 下载文件 | 每项含「显示名称」+ 择一「上传文件(<6MB)」或「外部下载链接」 |
| 精选 / 排序 | 控制首页展示优先级（当前首页按名称字母排序） |
| 正文 | Markdown 额外说明 |

### 方式二：直接编辑 Markdown

在 `src/content/tools/` 下新建 `xxx.md`：

```yaml
---
name: "示例工具"
url: "https://example.com"
icon: "🔧"
description: "一句话介绍"
category: "开发工具"
tags: ["标签1", "标签2"]
featured: false
order: 0
downloads:
  - name: "Windows 安装包"
    url: "https://xxx.lanzou.com/xxx"
---

可选的 Markdown 正文
```

## 📦 大文件下载

Netlify 免费版 API 限制 6MB，安装包等大文件请：

1. 上传到 **蓝奏云 / Gitee Releases / 123云盘** 等国内快的网盘
2. 复制外链地址
3. 填到后台的「外部下载链接」

小文件（<6MB）可直接用「上传文件」。

## ☁️ 部署

已连接 GitHub 仓库，推送即自动部署：

```bash
git add -A && git commit -m "feat: xxx" && git push
```

Netlify 配置（`netlify.toml`）：

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

首次部署后需在 Netlify 后台开启：

1. **Identity** — Site configuration → Identity → Enable Identity
2. **Git Gateway** — Identity → Services → Git Gateway → Enable
3. **External providers → GitHub** — 启用 GitHub 登录（绕过邮箱确认）

> 免费额度：300 构建分钟/月，日常通过后台添加工具每次约 1 分钟。

## 📄 License

MIT
