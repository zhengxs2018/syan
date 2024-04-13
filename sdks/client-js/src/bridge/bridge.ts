import type { APISchema } from '@syan/protocol/client/abilities'

export interface JSBridge {
  /**
   * 当前平台名称
   */
  platform: 'web' | 'vscode' | 'electron' | 'unknown'

  /**
   * 判断是否支持某个 API
   *
   * @param schema - API 调用协议
   */
  canIUse(schema: APISchema): boolean

  /**
   * 调用 API
   *
   * @param schema - API 调用协议
   * @param args - API 参数
   */
  invoke<T = unknown>(schema: APISchema, ...args: unknown[]): Promise<T>

  /**
   * 发送消息
   */
  postMessage(data: unknown): void
}
