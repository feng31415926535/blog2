# FENG MEOW - Vue 个人技术博客

## 项目概述
本项目是基于Vue 3框架开发的个人技术博客页面。项目采用柔和浅绿色（Soft Mint Green Minimalist Theme）作为主题风格，实现了一个功能齐全、界面清新专业的博客展示页面。

博客名称：**FENG MEOW**  
作者：FENG MEOW  
GitHub：[https://github.com/feng31415926535](https://github.com/feng31415926535)  
邮箱：yliu62153@outlook.com

## 技术栈
- **Vue 3**：使用Options API进行开发
- **Vite 7.2.4**：新一代前端构建工具，提供快速的开发体验
- **单文件组件（SFC）**：模块化开发，提高代码可维护性
- **CSS3**：实现响应式布局和主题样式

## 项目结构
```
blog2/
├── public/
│   └── vite.svg               # Vite默认图标
├── src/
│   ├── assets/
│   │   └── articlesData.js    # 文章数据文件
│   ├── components/            # 组件目录
│   │   ├── AboutModal.vue     # 关于我模态框组件
│   │   ├── ArticleCard.vue    # 文章卡片组件
│   │   ├── ArticleList.vue    # 文章列表组件
│   │   ├── BackToTop.vue      # 返回顶部按钮组件
│   │   ├── FooterComponent.vue # 底部版权栏组件
│   │   ├── HeaderComponent.vue # 顶部导航栏组件
│   │   ├── Pagination.vue     # 分页组件
│   │   └── Sidebar.vue        # 侧边栏组件
│   ├── App.vue                # 根组件
│   ├── main.js                # 应用入口文件
│   └── style.css              # 全局样式文件
├── .gitignore                 # Git忽略文件配置
├── index.html                 # HTML模板文件
├── package-lock.json          # npm依赖锁定文件
├── package.json               # 项目配置和依赖
├── vite.config.js             # Vite配置文件
└── README.md                  # 项目说明文档
```

## 主要功能列表

### 核心功能
1. **顶部导航栏**
   - 博客名称显示（"FENG MEOW"）
   - 导航菜单（首页、关于我）
   - 搜索框（实时过滤文章）
   - 暗黑模式切换按钮

2. **文章列表区**
   - 动态渲染多篇文章
   - 每篇文章显示封面图、标题、发布日期、摘要
   - "阅读更多"按钮实现文章独立展开/收起功能
   - 文章标签展示
   - 点赞功能（支持点赞和取消点赞）
   - "显示全部"按钮（清除所有过滤条件）
   - 分页功能（每页6篇文章）

3. **侧边栏**
   - 个人简介（圆形头像、昵称、简短介绍）
   - 分类板块（6个分类：Vue.js、JavaScript、前端工程化、响应式设计、CSS技巧、面试经验）
   - 点击分类过滤显示该分类下的所有文章
   - 热门标签（显示标签及使用次数）
   - 点击标签过滤相关文章
   - 最近文章（显示最新5篇文章）
   - 点击最近文章过滤显示该文章所属分类的文章

4. **底部版权栏**
   - 显示版权信息：© 2025 FENG MEOW 版权所有

5. **关于我模态框**
   - 个人头像
   - 个人简介
   - 联系邮箱（可点击发送邮件）
   - GitHub仓库链接（可点击跳转）
   - 技术技能展示

6. **数据驱动**
   - 所有文章、个人信息、分类等数据定义在data()中
   - 通过v-for等指令动态渲染内容
   - 使用Set数据结构跟踪点赞状态

### 扩展功能
1. **顶部搜索框**
   - 实时过滤文章（匹配标题或内容）
   - 输入时自动清除其他过滤条件

2. **文章标签系统**
   - 每篇文章包含2-4个标签
   - 侧边栏展示热门标签及使用次数
   - 点击标签可过滤相关文章
   - 选中的标签高亮显示

3. **分类过滤系统**
   - 点击分类按钮过滤显示该分类下的文章
   - 选中的分类高亮显示
   - 自动清除之前的标签和搜索过滤

4. **最近文章过滤**
   - 点击最近文章过滤显示该文章所属分类的文章
   - 自动清除之前的标签和搜索过滤

5. **点赞切换功能**
   - 点击点赞按钮：赞数+1，图标变为红色爱心
   - 再次点击：赞数-1，图标变回白色爱心
   - 点赞动画效果（脉冲动画）
   - 使用Set数据结构跟踪已点赞的文章

6. **清除过滤功能**
   - 文章列表顶部显示"显示全部"按钮
   - 只在有过滤条件时显示
   - 点击后清除所有过滤，显示所有文章

7. **暗黑模式开关**
   - 顶部导航栏提供月亮/太阳图标切换
   - 切换时颜色适配，保持良好阅读体验
   - 所有组件完美支持暗黑模式

8. **返回顶部按钮**
   - 页面滚动超过800px时右下角出现
   - 点击实现平滑返回顶部功能

9. **分页功能**
   - 每页显示6篇文章
   - 支持上一页、下一页、页码跳转
   - 显示当前页码和总页数
   - 分页组件横跨整个页面宽度

## 设计亮点

1. **柔和浅绿色主题**：清新自然的薄荷绿配色，营造舒适的阅读体验
2. **统一过滤系统**：支持分类、标签、搜索三种过滤方式，互斥且可一键清除
3. **智能点赞系统**：支持点赞/取消切换，使用Set跟踪状态，带动画效果
4. **模态框设计**：关于我模态框支持遮罩层交互，完美适配暗黑模式
5. **响应式布局**：桌面端侧边栏固定右侧，移动端自动堆叠，适配各种屏幕
6. **流畅交互体验**：0.3秒平滑过渡、悬停反馈、实时搜索、独立文章展开
7. **数据驱动架构**：集中管理数据，动态渲染，组件间通过props和事件通信

---

## 部署运行指南

### 环境要求

在开始部署之前，请确保您的开发环境满足以下要求：

- **Node.js**：推荐使用 Node.js 18.x 或更高版本
- **npm**：推荐使用 npm 9.x 或更高版本（通常随 Node.js 一起安装）
- **Git**：用于版本控制（可选，但如果要部署到 GitHub Pages 则需要）

#### 检查环境版本

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 检查 Git 版本
git --version
```

如果您的 Node.js 版本过低，请访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新 LTS 版本。

---

### 本地开发运行

#### 1. 克隆或下载项目

如果您从 GitHub 克隆项目：

```bash
# 克隆仓库
git clone https://github.com/feng31415926535/blog2.git

# 进入项目目录
cd blog2
```

如果您已经有项目文件，直接进入项目目录即可。

#### 2. 安装项目依赖

```bash
# 安装所有依赖包
npm install
```

这个过程可能需要几分钟时间，具体取决于您的网络速度。npm 会根据 `package.json` 文件自动安装所有必需的依赖。

**依赖说明：**
- `vue@^3.5.26`：Vue 3 核心库
- `@vitejs/plugin-vue@^6.0.3`：Vite 的 Vue 插件
- `vite@^7.2.4`：Vite 构建工具

#### 3. 启动开发服务器

```bash
# 启动开发服务器
npm run dev
```

启动成功后，您会看到类似以下的输出：

```
  VITE v7.2.4  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

#### 4. 访问项目

在浏览器中打开以下地址：

```
http://localhost:5173/
```

现在您可以在浏览器中查看和测试您的博客了。

#### 5. 开发模式说明

开发模式下，Vite 提供了以下特性：
- **热模块替换（HMR）**：修改代码后，浏览器会自动更新，无需手动刷新
- **快速启动**：利用浏览器的原生 ES 模块支持，启动速度极快
- **源码映射**：便于调试，可以在浏览器中看到原始源代码

**常用开发命令：**

```bash
# 启动开发服务器
npm run dev

# 启动开发服务器并暴露到网络（允许局域网访问）
npm run dev -- --host

# 指定端口启动（例如使用 3000 端口）
npm run dev -- --port 3000
```

---

### 生产构建

#### 1. 构建生产版本

当您完成开发并准备部署时，需要构建生产版本：

```bash
# 构建生产版本
npm run build
```

构建完成后，您会看到类似以下的输出：

```
vite v7.2.4 building for production...
✓ 23 modules transformed.
dist/index.html                   0.48 kB │ gzip:  0.30 kB
dist/assets/index-xxxxx.js        50.23 kB │ gzip: 20.12 kB
dist/assets/index-xxxxx.css       15.45 kB │ gzip:  5.23 kB
dist/assets/vite-xxxxx.svg        1.23 kB │ gzip:  0.89 kB
```

#### 2. 构建产物说明

构建完成后，会在项目根目录下生成 `dist` 文件夹，包含以下内容：

```
dist/
├── index.html              # 入口 HTML 文件
└── assets/
    ├── index-xxxxx.js      # 打包后的 JavaScript 文件
    ├── index-xxxxx.css     # 打包后的 CSS 文件
    └── vite-xxxxx.svg      # Vite 图标
```

这些文件是经过压缩和优化的生产版本，可以直接部署到任何静态文件服务器。

#### 3. 本地预览生产版本

在部署之前，您可以在本地预览生产版本：

```bash
# 预览生产构建
npm run preview
```

这会启动一个本地服务器来预览 `dist` 目录中的文件，类似于生产环境的效果。

---

### 部署到静态托管平台

#### 方案一：部署到 GitHub Pages

GitHub Pages 是一个免费的静态网站托管服务，非常适合部署个人博客。

**步骤 1：配置 Vite 的 base 路径**

如果您的仓库名称不是 `username.github.io`，需要修改 `vite.config.js`：

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/blog2/'  // 将 'blog2' 替换为您的仓库名称
})
```

如果您的仓库名称是 `username.github.io`，则不需要修改 `base` 配置。

**步骤 2：构建项目**

```bash
npm run build
```

**步骤 3：推送到 GitHub**

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/feng31415926535/blog2.git

# 推送到 GitHub
git push -u origin main
```

**步骤 4：启用 GitHub Pages**

1. 访问您的 GitHub 仓库页面
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main` 分支，文件夹选择 `/ (root)` 或 `/dist`
5. 点击 **Save**

**步骤 5：访问您的博客**

等待几分钟后，GitHub Pages 会自动部署您的网站。您可以通过以下地址访问：

```
https://feng31415926535.github.io/blog2/
```

---

#### 方案二：部署到 Vercel

Vercel 是一个现代化的静态网站托管平台，提供快速的部署体验。

**步骤 1：安装 Vercel CLI（可选）**

```bash
npm install -g vercel
```

**步骤 2：通过 Vercel CLI 部署**

```bash
# 登录 Vercel
vercel login

# 部署项目
vercel
```

按照提示操作，Vercel 会自动检测您的项目配置并完成部署。

**步骤 3：通过 Vercel 网站部署（推荐）**

1. 访问 [Vercel](https://vercel.com/) 并注册/登录
2. 点击 **Add New** → **Project**
3. 导入您的 GitHub 仓库
4. Vercel 会自动检测到这是一个 Vite 项目
5. 点击 **Deploy** 按钮

部署完成后，Vercel 会提供一个 `.vercel.app` 域名，您也可以绑定自定义域名。

---

#### 方案三：部署到 Netlify

Netlify 是另一个流行的静态网站托管平台。

**步骤 1：通过 Netlify 网站部署**

1. 访问 [Netlify](https://www.netlify.com/) 并注册/登录
2. 点击 **Add new site** → **Import an existing project**
3. 连接您的 GitHub 仓库
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. 点击 **Deploy site**

**步骤 2：通过 Netlify CLI 部署（可选）**

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 初始化项目
netlify init

# 部署
netlify deploy --prod
```

---

#### 方案四：部署到自己的服务器

如果您有自己的服务器，可以使用 Nginx 或 Apache 来托管静态文件。

**步骤 1：构建项目**

```bash
npm run build
```

**步骤 2：上传 dist 目录**

使用 FTP、SFTP 或 SCP 将 `dist` 目录上传到服务器。

**步骤 3：配置 Nginx**

创建或编辑 Nginx 配置文件：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**步骤 4：重启 Nginx**

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### 常见问题解决

#### 问题 1：npm install 速度慢或失败

**解决方案：**

使用国内镜像源：

```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 重新安装依赖
npm install
```

或者使用 cnpm：

```bash
# 安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

# 使用 cnpm 安装依赖
cnpm install
```

#### 问题 2：端口被占用

如果 `5173` 端口已被占用，Vite 会自动尝试其他端口。您也可以手动指定端口：

```bash
# 使用 3000 端口
npm run dev -- --port 3000
```

#### 问题 3：构建后页面空白

**可能原因和解决方案：**

1. **base 路径配置错误**
   
   检查 `vite.config.js` 中的 `base` 配置是否正确。

2. **路由模式问题**
   
   如果使用 Vue Router，确保使用 `createWebHistory()` 并配置正确的 base 路径。

3. **资源路径错误**
   
   检查图片等资源的引用路径是否正确。

#### 问题 4：GitHub Pages 部署后样式丢失

**解决方案：**

确保 `vite.config.js` 中的 `base` 配置正确：

```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/your-repo-name/'  // 替换为您的仓库名称
})
```

然后重新构建并部署：

```bash
npm run build
git add .
git commit -m "Fix base path"
git push
```

#### 问题 5：暗黑模式样式不生效

**解决方案：**

确保所有组件都正确接收和使用 `isDarkMode` prop。检查组件中的样式是否正确应用了 `:class="{ 'dark-mode': isDarkMode }"`。

---

### 性能优化建议

#### 1. 代码分割

Vite 默认支持代码分割。如果您的项目变得更大，可以考虑使用动态导入：

```javascript
const AboutModal = defineAsyncComponent(() => import('./components/AboutModal.vue'))
```

#### 2. 图片优化

- 使用适当的图片格式（WebP 优先）
- 压缩图片文件大小
- 使用 CDN 加速图片加载

#### 3. 启用 Gzip 压缩

在服务器配置中启用 Gzip 压缩，可以显著减少传输大小。

#### 4. 使用 CDN

将 Vue 等库通过 CDN 引入，减少打包体积。

---

### 更新和维护

#### 更新依赖

定期更新依赖以获得最新的功能和安全修复：

```bash
# 检查过时的依赖
npm outdated

# 更新依赖
npm update

# 更新到最新版本
npm install vue@latest @vitejs/plugin-vue@latest vite@latest
```

#### 添加新文章

编辑 `src/assets/articlesData.js` 文件，按照现有格式添加新的文章数据。

#### 修改样式

全局样式在 `src/style.css` 中，组件样式在各组件的 `<style scoped>` 标签中。

---

## 项目特色

1. **功能齐全**：文章展示、分类标签、搜索过滤、点赞分页等完整功能
2. **体验优秀**：流畅动画、响应式设计、暗黑模式支持
3. **易于维护**：组件化开发、数据驱动、代码结构清晰
4. **部署便捷**：支持 GitHub Pages、Vercel、Netlify 等多种部署方式

---

## 联系方式

- **GitHub**: [https://github.com/feng31415926535](https://github.com/feng31415926535)
- **邮箱**: yliu62153@outlook.com

---

## 许可证

本项目仅供学习和个人使用。
