import { BrowserWindow, dialog } from 'electron'

import { Ability } from '@syan/electron-protocol'
import type { NativeUI } from '@syan/webview-protocol'

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
    const result = await dialog.showMessageBox(this.win, {
      type: 'question',
      title: styles.title ?? this.win.title,
      message: message,
      buttons: styles.buttons ?? ['OK', 'Cancel']
    })

    return result.response === 0
  }
}
