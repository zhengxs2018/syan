import type { JSBridge } from './bridge'

export function acquireUnknownApi(): JSBridge {
  return  {
    platform: 'unknown',
    canIUse() {
      return false
    },
    postMessage(data) {
      window.postMessage(data)
    },
    invoke() {
      throw new Error('Not implemented')
    }
  }
}
