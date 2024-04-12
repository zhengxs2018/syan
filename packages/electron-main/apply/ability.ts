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
      return registry.invoke(win!, schema, ...args)
    }
  )
}
