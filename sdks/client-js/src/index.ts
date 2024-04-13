import bridge from './bridge'
import { nativeUI } from './abilities/native-ui'

export default {
  isSupported: bridge.platform !== 'unknown',
  nativeUI
}
