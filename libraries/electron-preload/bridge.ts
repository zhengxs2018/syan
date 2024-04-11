import { contextBridge } from 'electron'

import { type JSBridge, WebViewJSBridgeInjectionKey } from '@syan/webview-protocol'

import { nativeUI } from './abilities/native-ui'
import { canIUse } from './abilities/schema'

export const webviewJSBridge: JSBridge = {
  nativeUI,
  canIUse,
}

export function exposeWebViewJSBridge(injectKey = WebViewJSBridgeInjectionKey) {
  // Use `contextBridge` APIs to expose Electron APIs to
  // renderer only if context isolation is enabled, otherwise
  // just add to the DOM global.
  if (process.contextIsolated) {
    try {
      contextBridge.exposeInMainWorld(injectKey, webviewJSBridge)
    } catch (error) {
      console.error(error)
    }
  } else {
    window[injectKey] = webviewJSBridge
  }
}
