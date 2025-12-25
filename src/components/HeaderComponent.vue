<template>
  <header class="header" :class="{ 'dark-mode': isDarkMode }">
    <div class="header-content">
      <!-- 博客名称 -->
      <div class="blog-name">
        <h1>FENG MEOW</h1>
      </div>
      
      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <ul>
          <li><a href="#" class="nav-link" @click.prevent="handleHomeClick">首页</a></li>
          <li><a href="#" class="nav-link" @click.prevent="handleAboutClick">关于我</a></li>
        </ul>
      </nav>
      
      <!-- 搜索框 -->
      <div class="search-box">
        <input 
          type="text" 
          placeholder="搜索文章..." 
          class="search-input"
          v-model="searchKeyword"
          @input="handleSearch"
        />
        <i class="search-icon">🔍</i>
      </div>
      
      <!-- 暗黑模式开关 -->
      <button class="dark-mode-toggle" @click="handleToggleDark">
        {{ isDarkMode ? '🌞' : '🌙' }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    // 处理搜索
    handleSearch() {
      this.$emit('search', this.searchKeyword)
    },
    // 处理首页点击
    handleHomeClick() {
      this.$emit('home-click')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    // 处理关于我点击
    handleAboutClick() {
      this.$emit('about-click')
    },
    // 处理暗黑模式切换
    handleToggleDark() {
      this.$emit('toggle-dark')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(134, 239, 172, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.blog-name h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #164e63;
  margin: 0;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #86efac;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  font-size: 0.9rem;
  width: 250px;
  transition: all 0.3s ease;
  background-color: #f9fafb;
}

.search-input:focus {
  outline: none;
  border-color: #86efac;
  box-shadow: 0 0 0 3px rgba(134, 239, 172, 0.1);
  width: 300px;
}

.search-icon {
  position: absolute;
  left: 0.8rem;
  color: #9ca3af;
  font-size: 1rem;
}

.dark-mode-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dark-mode-toggle:hover {
  background-color: #f3f4f6;
  transform: scale(1.1);
}

/* 暗黑模式样式 */
.header.dark-mode {
  background-color: #1e293b;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.header.dark-mode .blog-name h1 {
  color: #e2e8f0;
}

.header.dark-mode .nav-link {
  color: #94a3b8;
}

.header.dark-mode .nav-link:hover {
  color: #86efac;
}

.header.dark-mode .search-input {
  background-color: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.header.dark-mode .search-input:focus {
  border-color: #86efac;
  box-shadow: 0 0 0 3px rgba(134, 239, 172, 0.2);
}

.header.dark-mode .search-icon {
  color: #cbd5e1;
}

.header.dark-mode .dark-mode-toggle:hover {
  background-color: #334155;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .nav-menu ul {
    gap: 1rem;
  }
  
  .search-input {
    width: 200px;
  }
  
  .search-input:focus {
    width: 250px;
  }
}
</style>