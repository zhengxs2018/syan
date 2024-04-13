import { z } from 'zod'

/**
 * 调用底层 API 的协议格式
 *
 * - ${API} 代表 API 名字
 * - ${method} 调用方式
 * - ${param} 代表参数或者返回值
 * - ${option} 代表参数的可选值或者返回值的属性
 *
 * @example
 *
 * ```ts
 * // 显示系统警告弹窗
 * bridge.invoke('nativeUI.alert', message)
 *
 * // 获取摄像头
 * bridge.invoke('camera.getCamera')
 * ```
 */
const JSBridgeCallNameRE = /^([a-z]+)\.[a-z0-9]+(\.[a-z0-9]+){0,2}$/i

const apiSchema = z.custom<
  | `${string}`
  | `${string}.${string}`
  | `${string}.${string}.${string}`
  | `${string}.${string}.${string}.${string}`
>((val) => typeof val === 'string' && JSBridgeCallNameRE.test(val))

const verticalAlign = z.enum(['Top', 'Center', 'Bottom'])

const confirmStyles = z.object({
  title: z.string().optional(),
  buttons: z.array(z.string()).optional(),
  verticalAlign: verticalAlign.optional()
})

export const abilities = {
  apiSchema,
  verticalAlign,
  confirmStyles
}
