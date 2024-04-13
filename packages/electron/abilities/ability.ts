import { BrowserWindow } from 'electron'

export interface Ability {
  // pass
}

export interface AbilityConstructor {
  readonly abilityName: string

  new (win: BrowserWindow): Ability
}
