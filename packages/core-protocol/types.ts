export type MaybePromise<T> = Promise<T> | T

/**
 * - ${API} 代表 API 名字
 * - ${method} 调用方式
 * - ${param} 代表参数或者返回值
 * - ${option} 代表参数的可选值或者返回值的属性
 */
export type APISchemaFormat =
  | `${string}`
  | `${string}.${string}`
  | `${string}.${string}.${string}`
  | `${string}.${string}.${string}.${string}`

export type APIPrefix<
  P extends string,
  T,
  K extends keyof T = keyof T
> = `${P}.${Extract<K, string>}`
