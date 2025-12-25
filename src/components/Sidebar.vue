<template>
  <aside class="sidebar" :class="{ 'dark-mode': isDarkMode }">
    <!-- 个人简介 -->
    <div class="profile-section">
      <div class="profile-avatar">
        <img :src="userInfo.avatar" :alt="userInfo.name" class="avatar-img" />
      </div>
      <h3 class="profile-name">{{ userInfo.name }}</h3>
      <p class="profile-bio">{{ userInfo.bio }}</p>
    </div>
    
    <!-- 分类板块 -->
    <div class="section categories-section">
      <h4 class="section-title">分类</h4>
      <ul class="categories-list">
        <li 
          v-for="category in categories" 
          :key="category.id"
          class="category-item"
          :class="{ 'active': selectedCategory === category.name }"
          @click="handleCategoryClick(category.name)"
        >
          <span class="category-name">{{ category.name }}</span>
        </li>
      </ul>
    </div>
    
    <!-- 热门标签 -->
    <div class="section tags-section">
      <h4 class="section-title">热门标签</h4>
      <div class="tags-cloud">
        <span 
          v-for="tag in tags" 
          :key="tag.name"
          class="tag-cloud-item"
          :class="{ 'active': selectedTag === tag.name }"
          @click="handleTagClick(tag.name)"
        >
          {{ tag.name }} ({{ tag.count }})
        </span>
      </div>
    </div>
    
    <!-- 最近文章 -->
    <div class="section recent-section">
      <h4 class="section-title">最近文章</h4>
      <ul class="recent-articles-list">
        <li 
          v-for="article in recentArticles" 
          :key="article.id"
          class="recent-article-item"
          @click="handleRecentArticleClick(article)"
        >
          <span class="recent-article-title">{{ article.title }}</span>
          <span class="recent-article-date">{{ article.date }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    userInfo: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    recentArticles: {
      type: Array,
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
    }
  },
  methods: {
    // 处理标签点击
    handleTagClick(tagName) {
      this.$emit('tag-click', tagName)
    },
    // 处理分类点击
    handleCategoryClick(categoryName) {
      this.$emit('category-click', categoryName)
    },
    // 处理最近文章点击
    handleRecentArticleClick(article) {
      this.$emit('recent-article-click', article)
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(134, 239, 172, 0.12);
  transition: all 0.3s ease;
}

.section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(134, 239, 172, 0.18);
}

/* 个人简介 */
.profile-section {
  text-align: center;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #86efac;
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.2);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #164e63;
  font-weight: 600;
}

.profile-bio {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 分类板块 */
.section-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #164e63;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #86efac;
}

.categories-list {
  list-style: none;
}

.category-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0fdfa;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-item:hover {
  padding-left: 0.5rem;
  background-color: rgba(134, 239, 172, 0.1);
}

.category-item.active {
  padding-left: 0.5rem;
  background-color: rgba(134, 239, 172, 0.15);
}

.category-item:hover .category-name {
  color: #86efac;
}

.category-item.active .category-name {
  color: #86efac;
  font-weight: 600;
}

.category-item:last-child {
  border-bottom: none;
}

.category-item:hover {
  padding-left: 0.5rem;
}

.category-name {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* 热门标签 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-cloud-item {
  display: inline-block;
  background-color: #f0fdfa;
  color: #164e63;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-cloud-item:hover {
  background-color: #86efac;
  color: #164e63;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

.tag-cloud-item.active {
  background-color: #86efac;
  color: #164e63;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

/* 最近文章 */
.recent-articles-list {
  list-style: none;
}

.recent-article-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0fdfa;
  transition: all 0.3s ease;
  cursor: pointer;
}

.recent-article-item:last-child {
  border-bottom: none;
}

.recent-article-item:hover {
  padding-left: 0.5rem;
  background-color: rgba(134, 239, 172, 0.05);
}

.recent-article-title {
  display: block;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;
  line-height: 1.4;
}

.recent-article-item:hover .recent-article-title {
  color: #86efac;
}

.recent-article-date {
  display: block;
  color: #9ca3af;
  font-size: 0.8rem;
}

/* 暗黑模式样式 */
.sidebar.dark-mode .section {
  background-color: #1e293b;
  box-shadow: 0 4px 20px rgba(134, 239, 172, 0.08);
}

.sidebar.dark-mode .section:hover {
  box-shadow: 0 8px 30px rgba(134, 239, 172, 0.12);
}

.sidebar.dark-mode .profile-name,
.sidebar.dark-mode .section-title {
  color: #e2e8f0;
}

.sidebar.dark-mode .section-title {
  border-bottom-color: #86efac;
}

.sidebar.dark-mode .profile-bio,
.sidebar.dark-mode .category-name,
.sidebar.dark-mode .recent-article-title,
.sidebar.dark-mode .tag-cloud-item {
  color: #cbd5e1;
}

.sidebar.dark-mode .category-item {
  border-bottom-color: #334155;
}

.sidebar.dark-mode .category-item:hover {
  background-color: rgba(134, 239, 172, 0.1);
}

.sidebar.dark-mode .category-item.active {
  background-color: rgba(134, 239, 172, 0.2);
}

.sidebar.dark-mode .category-item.active .category-name {
  color: #86efac;
}

.sidebar.dark-mode .recent-article-item {
  border-bottom-color: #334155;
}

.sidebar.dark-mode .recent-article-item {
  border-bottom-color: #334155;
}

.sidebar.dark-mode .recent-article-item:hover {
  background-color: rgba(134, 239, 172, 0.1);
}

.sidebar.dark-mode .recent-article-title {
  color: #94a3b8;
}

.sidebar.dark-mode .recent-article-item:hover .recent-article-title {
  color: #86efac;
}

.sidebar.dark-mode .recent-article-date {
  color: #64748b;
}

.sidebar.dark-mode .tag-cloud-item {
  background-color: #334155;
  color: #cbd5e1;
}

.sidebar.dark-mode .tag-cloud-item:hover {
  background-color: #86efac;
  color: #164e63;
}

.sidebar.dark-mode .tag-cloud-item.active {
  background-color: #86efac;
  color: #164e63;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-width: auto;
  }
  
  .section {
    padding: 1rem;
  }
  
  .profile-avatar {
    width: 80px;
    height: 80px;
  }
  
  .profile-name {
    font-size: 1.2rem;
  }
  
  .profile-bio {
    font-size: 0.85rem;
  }
}
</style>