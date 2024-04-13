import type { NativeUI } from '@syan/protocol/client/abilities'

import api from '../bridge'

export const nativeUI: NativeUI = {
  alert(message, title) {
    return api.invoke('nativeUI.alert', message, title)
  },
  confirm(message, styles) {
    return api.invoke('nativeUI.confirm', message, styles)
  }
}
