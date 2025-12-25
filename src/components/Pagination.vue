<template>
  <div class="pagination" :class="{ 'dark-mode': isDarkMode }">
    <!-- 页码导航 -->
  <div class="pagination-container">
    <!-- 上一页按钮 -->
    <button 
      class="page-btn"
      :class="{ 'disabled': currentPage === 1 }"
      @click="handlePrevPage"
      :disabled="currentPage === 1"
      aria-label="上一页"
    >
      <span class="arrow">←</span>
      <span class="btn-text">上一页</span>
    </button>
    
    <!-- 页码按钮 -->
    <div class="page-numbers">
      <!-- 首页按钮 -->
      <button 
        class="page-number"
        :class="{ 'active': currentPage === 1 }"
        @click="handlePageChange(1)"
        :aria-label="`第1页`"
        :aria-current="currentPage === 1 ? 'page' : false"
      >
        1
      </button>
      
      <!-- 省略号 -->
      <span v-if="showPrevEllipsis" class="ellipsis" aria-hidden="true">...</span>
      
      <!-- 中间页码 -->
      <button 
        v-for="page in visiblePages" 
        :key="page"
        class="page-number"
        :class="{ 'active': currentPage === page }"
        @click="handlePageChange(page)"
        :aria-label="`第${page}页`"
        :aria-current="currentPage === page ? 'page' : false"
      >
        {{ page }}
      </button>
      
      <!-- 省略号 -->
      <span v-if="showNextEllipsis" class="ellipsis" aria-hidden="true">...</span>
      
      <!-- 末页按钮 -->
      <button 
        v-if="totalPages > 1"
        class="page-number"
        :class="{ 'active': currentPage === totalPages }"
        @click="handlePageChange(totalPages)"
        :aria-label="`第${totalPages}页`"
        :aria-current="currentPage === totalPages ? 'page' : false"
      >
        {{ totalPages }}
      </button>
    </div>
    
    <!-- 下一页按钮 -->
    <button 
      class="page-btn"
      :class="{ 'disabled': currentPage === totalPages }"
      @click="handleNextPage"
      :disabled="currentPage === totalPages"
      aria-label="下一页"
    >
      <span class="btn-text">下一页</span>
      <span class="arrow">→</span>
    </button>
  </div>
    
    <!-- 页码信息 -->
    <div class="page-info">
      第 {{ currentPage }}/{{ totalPages }} 页，共 {{ totalItems }} 篇文章
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 6
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 总页数
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize)
    },
    
    // 显示的中间页码
    visiblePages() {
      const pages = []
      const maxVisible = 3 // 中间显示的最大页码数
      const halfVisible = Math.floor(maxVisible / 2)
      
      let start = Math.max(2, this.currentPage - halfVisible)
      let end = Math.min(this.totalPages - 1, this.currentPage + halfVisible)
      
      // 调整显示范围，确保始终显示足够的页码
      if (end - start + 1 < maxVisible && start > 2) {
        start = Math.max(2, end - maxVisible + 1)
      }
      
      if (end - start + 1 < maxVisible && end < this.totalPages - 1) {
        end = Math.min(this.totalPages - 1, start + maxVisible - 1)
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      return pages
    },
    
    // 是否显示前省略号
    showPrevEllipsis() {
      return this.currentPage - 2 > 2
    },
    
    // 是否显示后省略号
    showNextEllipsis() {
      return this.totalPages - (this.currentPage + 2) > 1
    }
  },
  methods: {
    // 上一页
    handlePrevPage() {
      if (this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1)
      }
    },
    
    // 下一页
    handleNextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1)
      }
    },
    
    // 页码点击
    handlePageChange(page) {
      if (page !== this.currentPage) {
        this.$emit('page-change', page)
      }
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.pagination-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-btn {
  background-color: #86efac;
  color: #164e63;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 100px;
  justify-content: center;
}

.page-btn .arrow {
  font-size: 1rem;
  font-weight: 600;
}

.page-btn .btn-text {
  font-size: 0.95rem;
}

.page-btn:hover:not(.disabled) {
  background-color: #4ade80;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

.page-btn.disabled {
  background-color: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.page-number {
  background: none;
  border: 2px solid #86efac;
  color: #164e63;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-number:hover:not(.active) {
  background-color: rgba(134, 239, 172, 0.1);
  transform: translateY(-2px);
}

.page-number.active {
  background-color: #86efac;
  color: #164e63;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

.ellipsis {
  color: #6b7280;
  padding: 0 0.5rem;
  font-size: 1.2rem;
}

.page-info {
  color: #6b7280;
  font-size: 0.9rem;
}

/* 暗黑模式样式 */
.pagination.dark-mode .page-btn {
  background-color: #86efac;
  color: #164e63;
}

.pagination.dark-mode .page-btn:hover:not(.disabled) {
  background-color: #4ade80;
}

.pagination.dark-mode .page-btn.disabled {
  background-color: #334155;
  color: #64748b;
}

.pagination.dark-mode .page-number {
  border-color: #86efac;
  color: #cbd5e1;
}

.pagination.dark-mode .page-number:hover:not(.active) {
  background-color: rgba(134, 239, 172, 0.1);
}

.pagination.dark-mode .page-number.active {
  background-color: #86efac;
  color: #164e63;
}

.pagination.dark-mode .ellipsis {
  color: #64748b;
}

.pagination.dark-mode .page-info {
  color: #94a3b8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .pagination-container {
    gap: 0.3rem;
  }
  
  .page-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .page-number {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .page-info {
    font-size: 0.8rem;
  }
}
</style>