import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'

export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance()
  if (!instance) {
    console.log('useGlobalConfig 必须在 setup 里面')
    return
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {}
}
