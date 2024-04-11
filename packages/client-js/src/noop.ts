import type { JSBridge } from '@syan/webview-protocol'

export default {
  canIUse() {
    return false
  }
} as unknown as JSBridge
