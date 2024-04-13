/**
 * 通过 Webview 或 Chrome Extension 注入的 JS Bridge
 *
 * @example
 * ```ts
 * window.WebViewJSBridge.invoke('nativeUI.alert', 'hello,world')
 * ```
 */
export const WebViewJSBridgeInjectionKey = 'SYanJSBridge' as const

/**
 * 在 Electron 中，renderer 进程通过 IPC 向 main 进程调用能力的 IPC 频道
 */
export const ElectronAbilityChannel = 'webview:invoke'


export const ElectronPostMessageChannel = 'webview:postMessage'
