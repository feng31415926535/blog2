<template>
  <div class="article-card" :class="{ 'dark-mode': isDarkMode }">
    <!-- 文章封面图 -->
    <div class="article-cover">
      <img :src="article.cover" :alt="article.title" class="cover-img" />
    </div>
    
    <!-- 文章内容 -->
    <div class="article-content">
      <!-- 文章标题 -->
      <h3 class="article-title">{{ article.title }}</h3>
      
      <!-- 发布日期 -->
      <div class="article-meta">
        <span class="publish-date">{{ article.date }}</span>
      </div>
      
      <!-- 文章摘要/完整内容 -->
      <div class="article-text">
        <!-- 摘要内容 -->
        <p v-if="!isExpanded">
          {{ getArticleSummary(article.content) }}
        </p>
        
        <!-- 完整内容 -->
        <div v-else class="full-content">
          <p>{{ article.content }}</p>
        </div>
      </div>
      
      <!-- 文章标签 -->
      <div class="article-tags">
        <span 
          v-for="tag in article.tags" 
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- 操作按钮 -->
      <div class="article-actions">
        <!-- 阅读更多/收起按钮 -->
        <button 
          class="read-more-btn"
          @click="toggleExpanded"
        >
          {{ isExpanded ? '收起' : '阅读更多' }}
        </button>
        
        <!-- 点赞按钮 -->
        <button 
          class="like-btn"
          :class="{ 'liked': isLiked(article.id) }"
          @click="handleLike"
        >
          <span class="like-icon">{{ isLiked(article.id) ? '❤️' : '🤍' }}</span>
          <span class="like-count">{{ article.likes }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      default: false
    },
    isLiked: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    // 获取文章摘要（前两句）
    getArticleSummary(content) {
      const sentences = content.split('\n').filter(sentence => sentence.trim() !== '')
      return sentences.slice(0, 2).join('\n')
    },
    
    // 切换展开/收起状态
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
    },
    
    // 处理点赞
    handleLike() {
      this.$emit('like', this.article.id)
    }
  }
}
</script>

<style scoped>
.article-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(134, 239, 172, 0.12);
  margin-bottom: 2rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(134, 239, 172, 0.18);
}

.article-cover {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .cover-img {
  transform: scale(1.05);
}

.article-content {
  padding: 1.5rem;
}

.article-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #164e63;
  font-weight: 600;
  line-height: 1.3;
}

.article-meta {
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.9rem;
}

.article-text {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #4b5563;
}

.full-content {
  margin-bottom: 1.5rem;
}

.full-content p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.article-tags {
  margin-bottom: 1.5rem;
}

.tag {
  display: inline-block;
  background-color: #f0fdfa;
  color: #164e63;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: #86efac;
  color: #164e63;
  transform: translateY(-2px);
}

.article-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-more-btn {
  background-color: #86efac;
  color: #164e63;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background-color: #4ade80;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

.like-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.like-btn:hover {
  background-color: #fef2f2;
  color: #ef4444;
  transform: translateY(-2px);
}

.like-btn.liked {
  color: #ef4444;
}

.like-btn.liked:hover {
  background-color: #fef2f2;
  transform: translateY(-2px);
  animation: pulse 0.3s ease;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.like-icon {
  font-size: 1.2rem;
}

.like-count {
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-cover {
    height: 200px;
  }
  
  .article-content {
    padding: 1rem;
  }
  
  .article-title {
    font-size: 1.3rem;
  }
  
  .article-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .read-more-btn {
    width: 100%;
  }
}

/* 暗黑模式样式 */
.article-card.dark-mode {
  background-color: #1e293b;
  box-shadow: 0 4px 20px rgba(134, 239, 172, 0.08);
}

.article-card.dark-mode:hover {
  box-shadow: 0 8px 30px rgba(134, 239, 172, 0.12);
}

.article-card.dark-mode .article-title {
  color: #e2e8f0;
}

.article-card.dark-mode .article-meta {
  color: #94a3b8;
}

.article-card.dark-mode .article-text {
  color: #cbd5e1;
}

.article-card.dark-mode .tag {
  background-color: #334155;
  color: #cbd5e1;
}

.article-card.dark-mode .tag:hover {
  background-color: #86efac;
  color: #164e63;
}

.article-card.dark-mode .read-more-btn {
  background-color: #86efac;
  color: #164e63;
}

.article-card.dark-mode .read-more-btn:hover {
  background-color: #4ade80;
}

.article-card.dark-mode .like-btn {
  color: #94a3b8;
}

.article-card.dark-mode .like-btn:hover {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
</style>