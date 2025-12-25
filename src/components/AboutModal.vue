<template>
  <div v-if="show" class="modal-overlay" @click="handleClose">
    <div class="modal-content" :class="{ 'dark-mode': isDarkMode }" @click.stop>
      <button class="close-btn" @click="handleClose">&times;</button>
      
      <div class="about-modal">
        <div class="avatar-section">
          <img :src="userInfo.avatar" :alt="userInfo.name" class="modal-avatar" />
        </div>
        
        <h2 class="modal-title">{{ userInfo.name }}</h2>
        
        <div class="modal-bio">
          <p>{{ userInfo.bio }}</p>
        </div>
        
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span class="contact-label">邮箱：</span>
            <a :href="'mailto:' + userInfo.email" class="contact-link">{{ userInfo.email }}</a>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">🐙</span>
            <span class="contact-label">GitHub：</span>
            <a :href="userInfo.github" target="_blank" class="contact-link">{{ userInfo.github }}</a>
          </div>
        </div>
        
        <div class="skills-section">
          <h3 class="skills-title">技术栈</h3>
          <div class="skills-list">
            <span v-for="skill in userInfo.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    isDarkMode: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: all 0.3s ease;
}

.close-btn:hover {
  color: #ef4444;
  transform: rotate(90deg);
}

.about-modal {
  text-align: center;
}

.avatar-section {
  margin-bottom: 1.5rem;
}

.modal-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #86efac;
  box-shadow: 0 4px 12px rgba(134, 239, 172, 0.3);
}

.modal-title {
  font-size: 1.8rem;
  color: #164e63;
  margin-bottom: 1rem;
  font-weight: 700;
}

.modal-bio {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.contact-info {
  background-color: #f0fdfa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-label {
  color: #6b7280;
  font-weight: 500;
}

.contact-link {
  color: #86efac;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: #4ade80;
  text-decoration: underline;
}

.skills-section {
  text-align: left;
}

.skills-title {
  font-size: 1.2rem;
  color: #164e63;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #f0fdfa;
  color: #164e63;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: #86efac;
  transform: translateY(-2px);
}

/* 暗黑模式样式 */
.modal-content.dark-mode {
  background-color: #1e293b;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.modal-content.dark-mode .close-btn {
  color: #94a3b8;
}

.modal-content.dark-mode .close-btn:hover {
  color: #ef4444;
}

.modal-content.dark-mode .modal-title {
  color: #e2e8f0;
}

.modal-content.dark-mode .modal-bio {
  color: #cbd5e1;
}

.modal-content.dark-mode .contact-info {
  background-color: #334155;
}

.modal-content.dark-mode .contact-label {
  color: #94a3b8;
}

.modal-content.dark-mode .skills-title {
  color: #e2e8f0;
}

.modal-content.dark-mode .skill-tag {
  background-color: #334155;
  color: #cbd5e1;
}

.modal-content.dark-mode .skill-tag:hover {
  background-color: #86efac;
  color: #164e63;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .modal-content {
    padding: 2rem 1.5rem;
    width: 95%;
  }
  
  .modal-avatar {
    width: 100px;
    height: 100px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-bio {
    font-size: 0.9rem;
  }
  
  .contact-info {
    padding: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
