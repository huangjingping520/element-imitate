import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('按钮测试', () => {
  it('按钮能够现实文本', () => {
    const content = 'Merlin'
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    })
    expect(wrapper.text()).toBe(content)
  })
  it('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain('el-button--small')
  })
})
