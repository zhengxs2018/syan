import { ipcRenderer, contextBridge } from 'electron'
import { WebViewJSBridgeInjectionKey, type JSBridge } from '@syan/webview-protocol'

import { nativeUI } from './mods/native-ui'
import { canIUse } from './mods/schema'

export const electronAPI: JSBridge = {
  nativeUI,
  canIUse,
  send(channel, ...args) {
    ipcRenderer.send(channel, ...args)
  },
  postMessage(channel, message, transfer) {
    ipcRenderer.postMessage(channel, message, transfer)
  },
  invoke(channel, ...args) {
    return ipcRenderer.invoke(channel, ...args)
  },
  on(channel, listener) {
    // @ts-expect-error fix this type
    ipcRenderer.on(channel, listener)

    return () => {
      // @ts-expect-error fix this type
      ipcRenderer.removeListener(channel, listener)
    }
  },
  once(channel, listener) {
    // @ts-expect-error fix this type
    ipcRenderer.once(channel, listener)
  },
  off(channel, listener) {
    // @ts-expect-error fix this type
    ipcRenderer.removeListener(channel, listener)
  },
  removeAllListeners(channel) {
    ipcRenderer.removeAllListeners(channel)
  },
}

export function exposeElectronAPI(injectKey = WebViewJSBridgeInjectionKey) {
  // Use `contextBridge` APIs to expose Electron APIs to
  // renderer only if context isolation is enabled, otherwise
  // just add to the DOM global.
  if (process.contextIsolated) {
    try {
      contextBridge.exposeInMainWorld(injectKey, electronAPI)
    } catch (error) {
      console.error(error)
    }
  } else {
    window[injectKey] = electronAPI
  }
}
