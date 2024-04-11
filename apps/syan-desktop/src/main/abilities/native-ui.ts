import { BrowserWindow } from 'electron'
import { NativeUI } from '@syan/webview-protocol'
import { dialog } from 'electron'
export function createNativeUI(win: BrowserWindow) {
  const nativeUI: NativeUI = {
    alert(message, title) {
      dialog.showMessageBox(win, {
        type: 'info',
        message,
        title,
        buttons: ['OK']
      })
    },
    confirm(message: string) {
      const result = dialog.showMessageBoxSync(win, {
        type: 'question',
        message,
        buttons: ['OK', 'Cancel']
      })

      return result === 0
    }
  }

  return nativeUI
}
