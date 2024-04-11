import { ipcRenderer } from 'electron'
import { type NativeUI } from '@syan/webview-protocol'

export const nativeUI: NativeUI = {
  alert(message, ...args) {
    // TODO check message
    return ipcRenderer.invoke('abilities', 'nativeUI.alert', message, ...args)
  },
  confirm(message, ...args) {
    // TODO check message
    return ipcRenderer.invoke('abilities', 'nativeUI.alert', message, ...args)
  }
}

import { schemaSet } from './schema'

schemaSet.add('nativeUI.alert')
schemaSet.add('nativeUI.confirm')
