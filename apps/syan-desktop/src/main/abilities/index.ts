import { APISchema } from '@syan/webview-protocol'
import { createNativeUI } from './native-ui'
import { BrowserWindow } from 'electron'

type AbilityCreateFactory = (win: BrowserWindow) => unknown

const abilities = new Map<string, AbilityCreateFactory>([['nativeUI', createNativeUI]])

export const abilityFactory = {
  invoke(win: BrowserWindow, schema: APISchema, ...args: unknown[]) {
    const [name, method] = schema.split('.')

    const factory = abilities.get(name)
    if (!factory) {
      throw new Error(`Ability ${name} not found`)
    }

    const ability = factory(win)
    if (typeof ability![method] !== 'function') {
      throw new Error(`[${name}] Method ${method} not found`)
    }

    return ability![method](...args)
  }
}
