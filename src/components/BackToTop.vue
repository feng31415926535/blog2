<template>
  <button 
    class="back-to-top" 
    :class="{ 'show': show, 'dark-mode': isDarkMode }"
    @click="scrollToTop"
  >
    🔝
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 平滑滚动到顶部
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #86efac;
  color: #164e63;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background-color: #4ade80;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 20px rgba(134, 239, 172, 0.4);
}

/* 暗黑模式样式 */
.back-to-top.dark-mode {
  background-color: #1e293b;
  color: #86efac;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-to-top.dark-mode:hover {
  background-color: #334155;
  color: #4ade80;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>