<template>
  <div class="article-list" :class="{ 'dark-mode': isDarkMode }">
    <div class="header-section">
      <h2 class="section-title">最新文章</h2>
      
      <!-- 清除过滤按钮 -->
      <button 
        v-if="hasFilters" 
        class="clear-filters-btn"
        @click="handleClearFilters"
      >
        显示全部
      </button>
    </div>
    
    <!-- 按分类分组显示文章 -->
    <div v-if="Object.keys(groupedArticles).length === 0" class="no-articles">
      <p>暂无文章</p>
    </div>
    
    <div v-else>
      <!-- 分类区域 -->
      <div 
        v-for="(articles, categoryName) in groupedArticles" 
        :key="categoryName"
        class="category-section"
        :id="`category-${categoryName}`"
      >
        <h3 class="category-title">{{ categoryName }}</h3>
        
        <!-- 该分类下的文章列表 -->
        <div class="category-articles">
          <ArticleCard 
            v-for="article in articles" 
            :key="article.id"
            :article="article"
            :is-dark-mode="isDarkMode"
            :is-liked="isLiked"
            @like="handleLike"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入 ArticleCard 组件
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleCard
  },
  props: {
    groupedArticles: {
      type: Object,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      default: false
    },
    selectedCategory: {
      type: String,
      default: null
    },
    selectedTag: {
      type: String,
      default: null
    },
    searchKeyword: {
      type: String,
      default: ''
    },
    isLiked: {
      type: Function,
      required: true
    }
  },
  computed: {
    hasFilters() {
      return this.selectedCategory || this.selectedTag || this.searchKeyword
    }
  },
  methods: {
    // 处理点赞
    handleLike(articleId) {
      this.$emit('like', articleId)
    },
    // 处理清除过滤
    handleClearFilters() {
      this.$emit('clear-filters')
    }
  }
}
</script>

<style scoped>
.article-list {
  flex: 1;
  min-width: 0;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.8rem;
  color: #164e63;
  font-weight: 700;
  margin: 0;
}

.clear-filters-btn {
  background-color: #86efac;
  color: #164e63;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background-color: #4ade80;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

/* 分类区域 */
.category-section {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #164e63;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #86efac;
  display: inline-block;
}

/* 分类下的文章列表 */
.category-articles {
  display: grid;
  gap: 2rem;
}

/* 无文章提示 */
.no-articles {
  text-align: center;
  padding: 4rem 0;
  color: #6b7280;
  font-size: 1.1rem;
}

/* 暗黑模式样式 */
.dark-mode .section-title {
  color: #e2e8f0;
}

.dark-mode .clear-filters-btn {
  background-color: #86efac;
  color: #164e63;
}

.dark-mode .clear-filters-btn:hover {
  background-color: #4ade80;
}

.dark-mode .category-title {
  color: #f1f5f9;
  border-bottom-color: #86efac;
}

.dark-mode .no-articles {
  color: #94a3b8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .category-section {
    margin-bottom: 3rem;
  }
}
</style>