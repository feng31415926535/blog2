<template>
  <footer class="footer" :class="{ 'dark-mode': isDarkMode }">
    <div class="footer-content">
      <p class="copyright">&copy; 2025 FENG MEOW 版权所有</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  padding: 2rem 0;
  margin-top: 4rem;
  box-shadow: 0 -4px 20px rgba(134, 239, 172, 0.12);
  transition: all 0.3s ease;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.copyright {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

/* 暗黑模式样式 */
.footer.dark-mode {
  background-color: #1e293b;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
}

.footer.dark-mode .copyright {
  color: #94a3b8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
  
  .footer-content {
    padding: 0 1rem;
  }
  
  .copyright {
    font-size: 0.8rem;
  }
}
</style>