import { ipcRenderer } from 'electron'
import { type NativeUI } from '@syan/webview-protocol'
import { IpcAbilityChannel } from '@syan/electron-protocol'

import { schemaSet } from './schema'

schemaSet.add('nativeUI.alert')
schemaSet.add('nativeUI.confirm')

export const nativeUI: NativeUI = {
  alert(message, styles) {
    // TODO check message
    return ipcRenderer.invoke(IpcAbilityChannel, 'nativeUI.alert', message, styles)
  },
  confirm(message, styles) {
    // TODO check message
    return ipcRenderer.invoke(IpcAbilityChannel, 'nativeUI.alert', message, styles)
  }
}
