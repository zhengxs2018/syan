import { type JSBridge } from '@syan/core-protocol'

import { nativeUI } from './native-ui'
import { canIUse } from './schema'

export const webviewJSBridge: JSBridge = {
  nativeUI,
  canIUse,
}
