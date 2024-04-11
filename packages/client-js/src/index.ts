import { WebViewJSBridgeInjectionKey, type JSBridge } from '@syan/webview-protocol'
import noop from './noop'

// @ts-expect-error fix this type
const bridge = (window[WebViewJSBridgeInjectionKey] || noop) as JSBridge

export default bridge
