import { ElectronAbilityChannel, ElectronPostMessageChannel } from '@syan/constants'
import { getGlobalObject } from '@syan/shared'

import type { JSBridge } from './bridge'

type IPCRenderer = {
  invoke<T = unknown>(channel: string, ...args: unknown[]): Promise<T>
  postMessage(channel: string, message: unknown, transfer?: MessagePort[]): void
}

export function acquireElectronApi(): JSBridge | undefined {
  // See @electron-toolkit/preload
  const { electron } = getGlobalObject<{
    electron?: { ipcRenderer: IPCRenderer }
  }>()

  if (!electron) return

  return {
    platform: 'electron',
    canIUse() {
      return false
    },
    postMessage(data) {
      electron.ipcRenderer.postMessage(ElectronPostMessageChannel, data)
    },
    invoke(schema, ...args) {
      return electron.ipcRenderer.invoke(ElectronAbilityChannel, schema, ...args)
    }
  }
}
