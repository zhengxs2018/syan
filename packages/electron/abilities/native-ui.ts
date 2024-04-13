import { BrowserWindow, dialog } from 'electron'

import type { NativeUI } from '@syan/protocol/client/abilities'
import { abilities } from '@syan/protocol/validators/abilities'

import { Ability } from './ability'

export class NativeUIAbility implements Ability, NativeUI {
  static abilityName = 'nativeUI'

  constructor(private readonly win: BrowserWindow) {}

  async alert(message: string, title?: string) {
    await dialog.showMessageBox({
      type: 'info',
      title: title ?? this.win.title,
      message: message
    })
  }

  async confirm(message: string, styles: NativeUI.ConfirmStyles = {}) {
    const styl = abilities.confirmStyles.parse(styles)

    const result = await dialog.showMessageBox(this.win, {
      type: 'question',
      title: styl.title ?? this.win.title,
      message: message,
      buttons: styl.buttons ?? ['OK', 'Cancel']
    })

    return result.response === 0
  }
}
