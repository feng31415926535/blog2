<template>
  <div class="app-container" :class="{ 'dark-mode': isDarkMode }">
    <!-- 顶部导航栏 -->
    <HeaderComponent 
      :is-dark-mode="isDarkMode"
      @toggle-dark="toggleDarkMode"
      @search="handleSearch"
      @home-click="handleHomeClick"
      @about-click="handleAboutClick"
    />
    
    <!-- 主内容区域 -->
    <main class="main-content">
      <!-- 文章列表区 -->
    <ArticleList 
      :grouped-articles="groupedArticles"
      :is-dark-mode="isDarkMode"
      :selected-category="selectedCategory"
      :selected-tag="selectedTag"
      :search-keyword="searchKeyword"
      :is-liked="isLiked"
      :filtered-articles-count="filteredArticles.length"
      @like="handleLike"
      @clear-filters="clearAllFilters"
    />
    
    <!-- 侧边栏 -->
    <Sidebar 
      :user-info="userInfo"
      :categories="categories"
      :tags="allTags"
      :recent-articles="recentArticles"
      :is-dark-mode="isDarkMode"
      :selected-category="selectedCategory"
      :selected-tag="selectedTag"
      @tag-click="handleTagClick"
      @category-click="handleCategoryClick"
      @recent-article-click="handleRecentArticleClick"
    />
    </main>
    
    <!-- 分页组件（横跨整个页面宽度） -->
    <div class="pagination-wrapper" :class="{ 'dark-mode': isDarkMode }">
      <Pagination 
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-items="filteredArticles.length"
        :page-size="pageSize"
        :is-dark-mode="isDarkMode"
        @page-change="handlePageChange"
      />
    </div>
    
    <!-- 底部版权栏 -->
    <FooterComponent :is-dark-mode="isDarkMode" />
    
    <!-- 返回顶部按钮 -->
    <BackToTop 
      :show="showBackToTop"
      :is-dark-mode="isDarkMode"
    />
    
    <!-- 关于我模态框 -->
    <AboutModal 
      :show="showAboutModal"
      :is-dark-mode="isDarkMode"
      :user-info="userInfo"
      @close="showAboutModal = false"
    />
  </div>
</template>

<script>
// 导入组件
import HeaderComponent from './components/HeaderComponent.vue'
import ArticleList from './components/ArticleList.vue'
import Sidebar from './components/Sidebar.vue'
import FooterComponent from './components/FooterComponent.vue'
import BackToTop from './components/BackToTop.vue'
import AboutModal from './components/AboutModal.vue'
import Pagination from './components/Pagination.vue'

// 导入文章数据
import articlesData from './assets/articlesData.js'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ArticleList,
    Sidebar,
    FooterComponent,
    BackToTop,
    AboutModal,
    Pagination
  },
  data() {
    return {
      // 暗黑模式状态
      isDarkMode: false,
      // 搜索关键词
      searchKeyword: '',
      // 关于我模态框显示状态
      showAboutModal: false,
      // 用户信息
      userInfo: {
        avatar: 'https://picsum.photos/id/1005/200/200',
        name: 'FENG MEOW',
        bio: '专注于Web前端开发的技术爱好者，喜欢分享Vue、JavaScript等技术内容。致力于构建优雅、高效的Web应用。',
        email: 'yliu62153@outlook.com',
        github: 'https://github.com/feng31415926535',
        skills: ['Vue.js', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Vite', 'Git', 'Node.js']
      },
      // 文章分类
      categories: [
        { id: 1, name: 'Vue.js' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: '前端工程化' },
        { id: 4, name: '响应式设计' },
        { id: 5, name: 'CSS技巧' },
        { id: 6, name: '面试经验' }
      ],
      // 文章数据
      articles: articlesData,
      // 选中的标签
      selectedTag: null,
      // 选中的分类
      selectedCategory: null,
      // 已点赞的文章ID集合
      likedArticles: new Set(),
      // 显示返回顶部按钮
      showBackToTop: false,
      // 分页相关状态
      currentPage: 1,
      pageSize: 6
    }
  },
  computed: {
    // 过滤后的文章列表
    filteredArticles() {
      let result = [...this.articles]
      
      // 搜索过滤
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase()
        result = result.filter(article => 
          article.title.toLowerCase().includes(keyword) || 
          article.content.toLowerCase().includes(keyword)
        )
      }
      
      // 标签过滤
      if (this.selectedTag) {
        result = result.filter(article => 
          article.tags.includes(this.selectedTag)
        )
      }
      
      // 分类过滤
      if (this.selectedCategory) {
        result = result.filter(article => 
          article.category === this.selectedCategory
        )
      }
      
      return result
    },
    // 分页后的文章列表
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredArticles.slice(start, end)
    },
    // 总页数
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.pageSize)
    },
    // 按分类分组的文章（基于分页后的数据）
    groupedArticles() {
      const grouped = {}
      
      // 对分页后的文章按分类分组
      this.paginatedArticles.forEach(article => {
        if (!grouped[article.category]) {
          grouped[article.category] = []
        }
        grouped[article.category].push(article)
      })
      
      // 按分类顺序排序
      const sortedGroups = {}
      this.categories.forEach(category => {
        if (grouped[category.name]) {
          sortedGroups[category.name] = grouped[category.name]
        }
      })
      
      return sortedGroups
    },
    // 所有标签（去重）
    allTags() {
      const tagsMap = new Map()
      this.articles.forEach(article => {
        article.tags.forEach(tag => {
          tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1)
        })
      })
      
      return Array.from(tagsMap.entries()).map(([name, count]) => ({ name, count }))
    },
    // 最近文章（按日期排序取最新5篇）
    recentArticles() {
      return [...this.articles]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)
    }
  },
  methods: {
    // 切换暗黑模式
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      // 保存到 localStorage
      localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false')
    },
    // 处理搜索
    handleSearch(keyword) {
      this.searchKeyword = keyword
      this.selectedTag = null
      this.currentPage = 1 // 搜索时重置到第1页
    },
    // 处理首页点击
    handleHomeClick() {
      this.searchKeyword = ''
      this.selectedTag = null
      this.selectedCategory = null
      this.currentPage = 1 // 点击首页时重置到第1页
    },
    // 处理关于我点击
    handleAboutClick() {
      this.showAboutModal = true
    },
    // 处理标签点击
    handleTagClick(tag) {
      this.selectedTag = tag
      this.searchKeyword = ''
      this.selectedCategory = null
      this.currentPage = 1 // 切换标签时重置到第1页
    },
    // 处理分类点击
    handleCategoryClick(category) {
      this.selectedCategory = category
      this.searchKeyword = ''
      this.selectedTag = null
      this.currentPage = 1 // 切换分类时重置到第1页
    },
    // 处理点赞
    handleLike(articleId) {
      const article = this.articles.find(a => a.id === articleId)
      if (article) {
        if (this.likedArticles.has(articleId)) {
          // 取消点赞
          article.likes--
          this.likedArticles.delete(articleId)
        } else {
          // 点赞
          article.likes++
          this.likedArticles.add(articleId)
        }
      }
    },
    // 检查文章是否已点赞
    isLiked(articleId) {
      return this.likedArticles.has(articleId)
    },
    // 清除所有过滤
    clearAllFilters() {
      this.searchKeyword = ''
      this.selectedTag = null
      this.selectedCategory = null
      this.currentPage = 1 // 清除过滤时重置到第1页
    },
    // 处理最近文章点击
    handleRecentArticleClick(article) {
      this.selectedCategory = article.category
      this.searchKeyword = ''
      this.selectedTag = null
      this.currentPage = 1 // 切换最近文章时重置到第1页
    },
    // 处理页码变化
    handlePageChange(page) {
      this.currentPage = page
      // 滚动到页面顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    // 监听滚动事件
    handleScroll() {
      this.showBackToTop = window.scrollY > 800
    }
  },
  created() {
    // 检查 localStorage 中的暗黑模式设置
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      this.isDarkMode = savedDarkMode === 'true'
    }
  },
  mounted() {
    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #164e63;
  background-color: #f0fdfa;
  transition: all 0.3s ease;
}

/* 应用容器 */
.app-container {
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* 暗黑模式 */
.app-container.dark-mode {
  background-color: #0f172a;
  color: #e2e8f0;
}

/* 主内容区域 */
.main-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
}

/* 分页组件包装器（横跨整个页面宽度） */
.pagination-wrapper {
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding: 0 2rem;
  width: 100%;
}

.pagination-wrapper.dark-mode {
  background-color: #0f172a;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    padding: 1rem;
  }
  
  .pagination-wrapper {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
}
</style>