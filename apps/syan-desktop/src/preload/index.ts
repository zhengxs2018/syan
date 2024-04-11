import { exposeWebViewJSBridge } from '@syan/electron-preload'
import { exposeElectronAPI } from '@electron-toolkit/preload'

exposeElectronAPI()
exposeWebViewJSBridge()
