import { ipcMain, BrowserWindow } from 'electron'

import { IpcAbilityChannel } from '@syan/electron-protocol/constants'
import type { AbilityConstructor } from '@syan/electron-protocol'

import { AbilityRegistry } from '../abilities/registry'
import { NativeUIAbility } from '../abilities/native-ui'

const defaultAbilities = [NativeUIAbility]

export function applyAbility(abilities: AbilityConstructor[] = defaultAbilities) {
  const registry = new AbilityRegistry(abilities)

  ipcMain.handle(
    IpcAbilityChannel,
    async (event: Electron.IpcMainInvokeEvent, schema: string, ...args: unknown[]) => {
      const win = BrowserWindow.fromId(event.sender.id)

      if (!win) {
        console.error('[electron-main] abilities: window not found')
        return
      }

      try {
        await registry.invoke(win, schema, ...args)
      } catch (err) {
        console.error('[electron-main] abilities: invoke error', err)
      }

      return registry.invoke(win, schema, ...args)
    }
  )
}
