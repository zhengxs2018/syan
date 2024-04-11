import { type JSBridge } from '@syan/webview-protocol'

import { nativeUI } from './native-ui'
import { canIUse } from './schema'

export const webviewJSBridge: JSBridge = {
  nativeUI,
  canIUse,
}
