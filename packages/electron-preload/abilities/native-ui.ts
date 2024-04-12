import { ipcRenderer } from 'electron'
import { type NativeUI } from '@syan/core-protocol'
import { IpcAbilityChannel } from '@syan/electron-protocol'

import { schemaSet } from './schema'

schemaSet.add('nativeUI.alert')
schemaSet.add('nativeUI.confirm')

export const nativeUI: NativeUI = {
  alert(message, styles) {
    return ipcRenderer.invoke(IpcAbilityChannel, 'nativeUI.alert', message, styles)
  },
  confirm(message, styles) {
    return ipcRenderer.invoke(IpcAbilityChannel, 'nativeUI.confirm', message, styles)
  }
}
