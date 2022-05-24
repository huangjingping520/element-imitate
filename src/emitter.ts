import mitt from 'mitt'
import type { FormItem } from './components/form/type'

export interface Events {
  validate: undefined
  addFormItem: FormItem
}

export const emitter = mitt<Events>()
