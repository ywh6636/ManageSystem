const baseSize = 16 // 基准字体大小

export const setRem = () => {
  const scale = document.documentElement.clientWidth / 1920 // 设计稿
  document.documentElement.style.fontSize = `${Math.max(scale * baseSize, 12)}px`
}

// 初始化
setRem()

// 监听窗口变化
window.addEventListener('resize', setRem)
