import { getGlobalObject } from '@syan/shared'

import type { JSBridge } from './bridge'

type VSCodeAPI = {
  postMessage(message: unknown): void
  getState(state: unknown): unknown
  setState(state: unknown): unknown
}

export function acquireVsCodeApi(): JSBridge | undefined {
  // See @electron-toolkit/preload
  const { acquireVsCodeApi } = getGlobalObject<{
    acquireVsCodeApi?: () => VSCodeAPI
  }>()

  if (typeof acquireVsCodeApi !== 'function') return

  const vscode = acquireVsCodeApi()

  return {
    platform: 'vscode',
    canIUse() {
      return false
    },
    postMessage(data) {
      vscode.postMessage(data)
    },
    invoke() {
      throw new Error('Not implemented')
    }
  }
}
