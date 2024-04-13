import { ipcMain, BrowserWindow } from 'electron'

import { ElectronAbilityChannel } from '@syan/constants'

import { type AbilityConstructor, AbilityRegistry, NativeUIAbility } from '../abilities/mod'

const defaultAbilities = [NativeUIAbility]

export function applyAbility(abilities: AbilityConstructor[] = defaultAbilities) {
  const registry = new AbilityRegistry(abilities)

  ipcMain.handle(
    ElectronAbilityChannel,
    async (event: Electron.IpcMainInvokeEvent, schema: string, ...args: unknown[]) => {
      const win = BrowserWindow.fromId(event.sender.id)
      return registry.invoke(win!, schema, ...args)
    }
  )
}
