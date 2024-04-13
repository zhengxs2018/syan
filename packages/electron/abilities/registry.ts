import { BrowserWindow } from 'electron'

import type { AbilityConstructor } from './ability'

export class AbilityRegistry {
  private readonly registry = new Map<string, AbilityConstructor>()

  constructor(abilities: AbilityConstructor[]) {
    abilities.forEach((ability) => {
      this.registry.set(ability.abilityName, ability)
    })
  }

  get(name: string) {
    return this.registry.get(name)
  }

  resolve(name: string, win: BrowserWindow) {
    const Ctor = this.registry.get(name)

    if (typeof Ctor === 'function') {
      return new Ctor(win)
    }

    throw new Error(`Ability ${name} not found`)
  }

  invoke(win: BrowserWindow, schema: string, ...args: unknown[]) {
    const [name, method] = schema.split('.')
    const ability = this.resolve(name, win)

    if (typeof ability[method] !== 'function') {
      throw new Error(`[${name}] Method ${method} not found`)
    }

    return ability[method](...args)
  }
}
