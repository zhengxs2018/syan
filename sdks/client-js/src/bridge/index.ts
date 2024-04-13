import { acquireElectronApi } from './electron'
import { acquireVsCodeApi } from './vscode'
import { acquireUnknownApi } from './noop'

export default acquireElectronApi() || acquireVsCodeApi() || acquireUnknownApi()
