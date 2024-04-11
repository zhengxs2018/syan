import { ipcRenderer } from 'electron'

export const emitter = {
  on(channel, listener) {
    ipcRenderer.on(channel, listener)

    return () => {
      ipcRenderer.removeListener(channel, listener)
    }
  },
  once(channel, listener) {
    ipcRenderer.once(channel, listener)
  },
  off(channel, listener) {
    ipcRenderer.removeListener(channel, listener)
  },
  removeAllListeners(channel) {
    ipcRenderer.removeAllListeners(channel)
  }
}
