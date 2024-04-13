import { z } from 'zod'

import { abilities } from '../validators/abilities'

type InterfaceToKeys<T extends string, O> = `${T}.${Extract<keyof O, string>}`

export namespace NativeUI {
  export type VerticalAlign = z.infer<typeof abilities.verticalAlign>
  export type ConfirmStyles = z.infer<typeof abilities.confirmStyles>
}

export interface NativeUI {
  alert(message: string, title?: string): Promise<void>
  confirm(message: string, style?: NativeUI.ConfirmStyles): Promise<boolean>
}

export interface StorageArea {
  has(key: string): Promise<boolean>

  get(key: string): Promise<string | undefined>

  set(key: string, value: unknown, ttl?: number): Promise<boolean>
  setDefault(key: string, value: unknown): Promise<boolean>
  setTTL(key: string, ttl: number): Promise<boolean>

  delete(key: string): Promise<boolean>
  clear(): Promise<void>
}

export type APISchema =
  | (z.infer<typeof abilities.apiSchema> & {})
  | InterfaceToKeys<'nativeUI', NativeUI>
  | InterfaceToKeys<'storage', StorageArea>

export interface Runtime {
  /**
   * 封装了原生 UI 相关的 API。
   *
   * 如：弹出提示框、确认框、选择框等。
   */
  nativeUI: NativeUI

  /**
   * 用本地数据存储区，用于应用数据的保存和读取。
   */
  storage: StorageArea
}
