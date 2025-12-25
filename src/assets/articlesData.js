export default [
  // Vue.js 分类
  {
    id: 1,
    title: 'Vue 3 Composition API 实战指南',
    date: '2025-01-15',
    cover: 'https://picsum.photos/id/1074/800/400',
    content: 'Vue 3 的 Composition API 带来了全新的代码组织方式，让组件逻辑更加清晰和可复用。本文将通过实际案例介绍 Composition API 的核心概念和最佳实践。\n\n在使用 Composition API 时，我们可以将相关的逻辑代码组织在同一个函数中，提高代码的可读性和可维护性。例如，将数据获取、处理和状态管理等逻辑封装在一个 composable 中。\n\nComposition API 还提供了更灵活的响应式系统，通过 ref 和 reactive 函数创建响应式数据，使用 watch 和 computed 监听数据变化。\n\n通过本文的学习，你将掌握如何在实际项目中使用 Composition API 构建高效、可维护的 Vue 3 应用。',
    category: 'Vue.js',
    tags: ['Vue.js', 'Composition API', '前端开发', '响应式'],
    likes: 45
  },
  {
    id: 2,
    title: 'Vue 3 响应式系统深度解析',
    date: '2025-01-10',
    cover: 'https://picsum.photos/id/1036/800/400',
    content: 'Vue 3 的响应式系统是其核心特性之一，基于 Proxy 实现了更高效的响应式数据追踪。本文将深入解析 Vue 3 响应式系统的工作原理和使用技巧。\n\n与 Vue 2 的 Object.defineProperty 相比，Proxy 能够更好地支持数组和动态属性，提供了更全面的响应式能力。\n\n我们将通过实际代码示例，展示如何使用 ref、reactive、watch 和 computed 等 API 构建响应式应用。',
    category: 'Vue.js',
    tags: ['Vue.js', '响应式系统', 'Proxy', 'JavaScript'],
    likes: 42
  },
  {
    id: 8,
    title: 'Vue 3 组件设计模式与最佳实践',
    date: '2025-01-05',
    cover: 'https://picsum.photos/id/1083/800/400',
    content: '组件设计是 Vue 开发中的核心技能，本文将介绍 Vue 3 中常用的组件设计模式和最佳实践。\n\n我们将探讨 props 和 emit 的合理使用、事件总线的替代方案、插槽（Slots）的高级用法以及组件间通信的各种模式。\n\n通过学习这些模式，你将能够构建更加可复用、可维护的 Vue 组件库。',
    category: 'Vue.js',
    tags: ['Vue.js', '组件设计', '设计模式', '前端开发'],
    likes: 56
  },
  {
    id: 9,
    title: 'Vue 3 与 TypeScript 深度整合',
    date: '2025-01-02',
    cover: 'https://picsum.photos/id/1071/800/400',
    content: 'TypeScript 为 Vue 3 应用带来了类型安全和更好的开发体验。本文将详细介绍如何在 Vue 3 项目中使用 TypeScript。\n\n我们将学习如何为组件、props、emits 和 composables 添加类型注解，以及如何配置 TypeScript 以获得最佳的开发体验。',
    category: 'Vue.js',
    tags: ['Vue.js', 'TypeScript', '类型安全', '前端开发'],
    likes: 48
  },
  {
    id: 10,
    title: 'Vue Router 4 导航守卫与权限控制',
    date: '2024-12-28',
    cover: 'https://picsum.photos/id/1069/800/400',
    content: 'Vue Router 4 提供了强大的导航守卫功能，用于控制页面的访问权限和导航行为。本文将详细介绍 Vue Router 4 的导航守卫机制。\n\n我们将学习如何使用全局守卫、路由独享守卫和组件内守卫，以及如何实现基于角色的权限控制。',
    category: 'Vue.js',
    tags: ['Vue.js', 'Vue Router', '路由', '权限控制'],
    likes: 39
  },

  // JavaScript 分类
  {
    id: 3,
    title: 'JavaScript 异步编程的演进历程',
    date: '2025-01-12',
    cover: 'https://picsum.photos/id/1035/800/400',
    content: 'JavaScript 从诞生之日起就与异步编程密不可分。本文将回顾 JavaScript 异步编程的发展历程，从回调函数到 Promise，再到 async/await。\n\n回调函数是 JavaScript 最早的异步编程方式，但容易导致回调地狱。Promise 的出现解决了回调地狱问题，提供了更优雅的链式调用方式。\n\nasync/await 则进一步简化了异步代码的编写，让异步代码看起来像同步代码一样直观。\n\n通过了解异步编程的演进历程，我们可以更好地理解现代 JavaScript 的异步编程模型，并在实际项目中选择合适的异步处理方式。',
    category: 'JavaScript',
    tags: ['JavaScript', '异步编程', 'Promise', 'async/await'],
    likes: 32
  },
  {
    id: 6,
    title: 'TypeScript 入门到精通',
    date: '2025-01-05',
    cover: 'https://picsum.photos/id/1070/800/400',
    content: 'TypeScript 是 JavaScript 的超集，为 JavaScript 添加了静态类型系统，提高了代码的可靠性和可维护性。本文将从入门到精通介绍 TypeScript 的使用。\n\nTypeScript 的核心是类型系统，包括基本类型、接口、类、泛型等概念。通过类型注解，我们可以在编译时发现潜在的错误，提高代码质量。\n\n本文将详细介绍 TypeScript 的语法、类型系统、编译配置以及在实际项目中的应用。\n\n掌握 TypeScript 将使你能够编写更加健壮和可维护的 JavaScript 代码，提升开发效率和代码质量。',
    category: 'JavaScript',
    tags: ['TypeScript', 'JavaScript', '类型系统', '前端开发'],
    likes: 52
  },
  {
    id: 11,
    title: 'JavaScript 模块化演进与最佳实践',
    date: '2025-01-03',
    cover: 'https://picsum.photos/id/1067/800/400',
    content: '模块化是现代 JavaScript 开发的核心概念之一。本文将介绍 JavaScript 模块化的演进历程，从 IIFE 到 CommonJS，再到 ES Modules。\n\n我们将学习如何在浏览器和 Node.js 环境中使用模块化，以及如何设计和组织模块化代码的最佳实践。',
    category: 'JavaScript',
    tags: ['JavaScript', '模块化', 'ES Modules', '前端工程化'],
    likes: 41
  },
  {
    id: 12,
    title: 'JavaScript 数组方法的高级应用',
    date: '2024-12-30',
    cover: 'https://picsum.photos/id/1064/800/400',
    content: 'JavaScript 数组提供了丰富的方法，掌握这些方法可以极大地提高开发效率。本文将深入介绍 JavaScript 数组方法的高级应用。\n\n我们将学习如何使用 map、filter、reduce 等方法进行数据处理，以及如何组合这些方法解决复杂问题。',
    category: 'JavaScript',
    tags: ['JavaScript', '数组', '函数式编程', '数据处理'],
    likes: 35
  },
  {
    id: 13,
    title: 'JavaScript 闭包与作用域深入解析',
    date: '2024-12-25',
    cover: 'https://picsum.photos/id/1045/800/400',
    content: '闭包是 JavaScript 中最强大也是最容易误解的概念之一。本文将深入解析 JavaScript 闭包的工作原理和应用场景。\n\n我们将学习闭包的形成条件、内存管理以及在实际项目中的应用，包括模块化、私有变量和函数式编程。',
    category: 'JavaScript',
    tags: ['JavaScript', '闭包', '作用域', '函数式编程'],
    likes: 47
  },

  // CSS技巧 分类
  {
    id: 4,
    title: 'CSS Grid 布局完全指南',
    date: '2025-01-08',
    cover: 'https://picsum.photos/id/1041/800/400',
    content: 'CSS Grid 是现代 CSS 布局系统的重要组成部分，提供了强大的二维布局能力。本文将详细介绍 CSS Grid 的核心概念和使用方法。\n\nCSS Grid 允许我们创建复杂的网格布局，通过定义行和列来精确控制元素的位置和大小。与 Flexbox 不同，CSS Grid 专注于二维布局，而 Flexbox 专注于一维布局。\n\n本文将通过实际案例展示如何使用 CSS Grid 创建响应式布局、复杂的页面结构以及优雅的组件布局。\n\n掌握 CSS Grid 布局将使你能够创建更加灵活和强大的网页布局，提升前端开发效率。',
    category: 'CSS技巧',
    tags: ['CSS', 'Grid', '响应式设计', '布局'],
    likes: 28
  },
  {
    id: 14,
    title: 'CSS Flexbox 布局进阶技巧',
    date: '2025-01-01',
    cover: 'https://picsum.photos/id/1054/800/400',
    content: 'Flexbox 是构建一维布局的强大工具。本文将介绍 Flexbox 的高级特性和最佳实践。\n\n我们将学习如何使用 flex-grow、flex-shrink 和 flex-basis 控制元素的伸缩，以及如何实现完美的居中对齐和响应式布局。',
    category: 'CSS技巧',
    tags: ['CSS', 'Flexbox', '响应式设计', '布局'],
    likes: 33
  },
  {
    id: 15,
    title: 'CSS 动画与过渡效果实战',
    date: '2024-12-27',
    cover: 'https://picsum.photos/id/1055/800/400',
    content: 'CSS 动画可以为网页添加生动的视觉效果。本文将介绍 CSS 动画和过渡的核心概念和使用方法。\n\n我们将学习如何使用 @keyframes 定义动画，以及如何使用 transition 和 transform 属性创建流畅的过渡效果。',
    category: 'CSS技巧',
    tags: ['CSS', '动画', '过渡', '视觉效果'],
    likes: 42
  },
  {
    id: 16,
    title: 'CSS 变量与主题定制',
    date: '2024-12-23',
    cover: 'https://picsum.photos/id/1077/800/400',
    content: 'CSS 变量（Custom Properties）为 CSS 带来了动态性和可维护性。本文将介绍 CSS 变量的使用方法和最佳实践。\n\n我们将学习如何定义和使用 CSS 变量，以及如何利用 CSS 变量实现主题定制和响应式设计。',
    category: 'CSS技巧',
    tags: ['CSS', '变量', '主题', '响应式设计'],
    likes: 37
  },

  // 前端工程化 分类
  {
    id: 5,
    title: 'Vite 构建工具的优势与实践',
    date: '2025-01-06',
    cover: 'https://picsum.photos/id/1059/800/400',
    content: 'Vite 是新一代前端构建工具，以其快速的开发体验和高效的构建性能受到广泛关注。本文将介绍 Vite 的核心优势和使用实践。\n\nVite 采用了基于浏览器原生 ES 模块的开发服务器，实现了按需编译，极大地提高了开发效率。同时，Vite 的构建过程使用 Rollup，确保了生产环境的构建性能。\n\n本文将详细介绍如何使用 Vite 创建 Vue 项目、配置插件、优化构建以及部署应用。\n\n通过学习 Vite 的使用，你将体验到前所未有的开发速度，提高前端开发效率。',
    category: '前端工程化',
    tags: ['Vite', '前端工程化', '构建工具', 'Vue.js'],
    likes: 36
  },
  {
    id: 17,
    title: 'Webpack 5 配置与优化指南',
    date: '2024-12-29',
    cover: 'https://picsum.photos/id/1080/800/400',
    content: 'Webpack 是目前最流行的前端构建工具之一。本文将详细介绍 Webpack 5 的核心配置和优化技巧。\n\n我们将学习如何配置入口、输出、加载器和插件，以及如何优化构建性能和代码体积。',
    category: '前端工程化',
    tags: ['Webpack', '前端工程化', '构建工具', '性能优化'],
    likes: 43
  },
  {
    id: 18,
    title: 'Git 分支策略与团队协作最佳实践',
    date: '2024-12-26',
    cover: 'https://picsum.photos/id/1051/800/400',
    content: 'Git 是团队协作中必不可少的工具。本文将介绍 Git 的分支策略和团队协作最佳实践。\n\n我们将学习如何使用 Git Flow、GitHub Flow 等分支策略，以及如何进行代码审查、合并请求和版本管理。',
    category: '前端工程化',
    tags: ['Git', '版本控制', '团队协作', '前端工程化'],
    likes: 40
  },

  // 响应式设计 分类
  {
    id: 7,
    title: '响应式设计最佳实践',
    date: '2025-01-03',
    cover: 'https://picsum.photos/id/1068/800/400',
    content: '响应式设计是现代网页开发的重要组成部分，确保网站在不同设备上都能提供良好的用户体验。本文将介绍响应式设计的最佳实践和实现技巧。\n\n我们将讨论如何使用媒体查询、弹性布局和相对单位来构建适应各种屏幕尺寸的网页。\n\n同时，我们还将探讨移动端优先的设计理念，以及如何优化响应式网站的性能。',
    category: '响应式设计',
    tags: ['响应式设计', 'CSS', '移动端', '用户体验'],
    likes: 38
  },
  {
    id: 19,
    title: '移动端适配方案深入解析',
    date: '2024-12-24',
    cover: 'https://picsum.photos/id/1050/800/400',
    content: '移动端适配是前端开发中的重要挑战。本文将介绍各种移动端适配方案的原理和实践。\n\n我们将学习如何使用 rem、vw/vh、flexible.js 等方案进行移动端适配，以及如何处理不同屏幕尺寸和分辨率的问题。',
    category: '响应式设计',
    tags: ['响应式设计', '移动端', 'CSS', '适配'],
    likes: 39
  },
  {
    id: 20,
    title: '响应式图片优化策略',
    date: '2024-12-22',
    cover: 'https://picsum.photos/id/1047/800/400',
    content: '图片是网页加载性能的重要影响因素。本文将介绍响应式图片的优化策略和最佳实践。\n\n我们将学习如何使用 srcset、sizes 和 picture 元素实现响应式图片，以及如何优化图片格式和压缩技术。',
    category: '响应式设计',
    tags: ['响应式设计', '图片优化', '性能优化', 'Web开发'],
    likes: 34
  },

  // 面试经验 分类
  {
    id: 21,
    title: '前端面试常见算法题解析',
    date: '2025-01-07',
    cover: 'https://picsum.photos/id/1043/800/400',
    content: '算法是前端面试中的重要内容。本文将解析前端面试中常见的算法题和解题思路。\n\n我们将学习如何解决数组、字符串、链表、树等数据结构的常见问题，以及如何优化算法的时间和空间复杂度。',
    category: '面试经验',
    tags: ['面试', '算法', 'JavaScript', '前端开发'],
    likes: 58
  },
  {
    id: 22,
    title: '前端面试中的 Vue 常见问题',
    date: '2025-01-04',
    cover: 'https://picsum.photos/id/1042/800/400',
    content: 'Vue 是前端面试中的高频考点。本文将总结前端面试中关于 Vue 的常见问题和回答思路。\n\n我们将学习 Vue 的响应式原理、组件通信、生命周期、性能优化等核心知识点。',
    category: '面试经验',
    tags: ['面试', 'Vue.js', '前端开发', '知识点'],
    likes: 49
  },
  {
    id: 23,
    title: '前端面试中的 CSS 高频考点',
    date: '2024-12-21',
    cover: 'https://picsum.photos/id/1040/800/400',
    content: 'CSS 是前端面试中的基础内容。本文将总结前端面试中关于 CSS 的高频考点和回答技巧。\n\n我们将学习 CSS 布局、选择器、盒模型、动画、响应式设计等核心知识点。',
    category: '面试经验',
    tags: ['面试', 'CSS', '前端开发', '知识点'],
    likes: 44
  },
  {
    id: 24,
    title: '前端面试中的 JavaScript 核心概念',
    date: '2024-12-20',
    cover: 'https://picsum.photos/id/1039/800/400',
    content: 'JavaScript 是前端面试中的重点内容。本文将总结前端面试中关于 JavaScript 的核心概念和回答思路。\n\n我们将学习 JavaScript 的原型链、闭包、异步编程、事件循环等核心知识点。',
    category: '面试经验',
    tags: ['面试', 'JavaScript', '前端开发', '知识点'],
    likes: 51
  }
]