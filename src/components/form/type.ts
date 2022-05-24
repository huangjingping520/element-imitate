import type { InjectionKey } from 'vue'
import type { Rules, Values } from 'async-validator'

export interface FormData {
  model: Record<string, unknown>
  rules?: Rules
}

export interface FormItem {
  validate: () => Promise<Values>
}

export interface FormType {
  validate: (cb: (isValid: boolean) => void) => void
}

export const key: InjectionKey<FormData> = Symbol('form-data')
