import type { APIPrefix, APISchemaFormat } from './types'
import type { NativeUI } from './native-ui'


export type APISchema = (APISchemaFormat & {}) | APIPrefix<'nativeUI', NativeUI>

export namespace JSBridge {
  export interface MessageEvent extends Event {
    /**
     * A list of MessagePorts that were transferred with this message
     */
    ports: MessagePort[]
    /**
     * The `JSBridge` instance that emitted the event originally
     */
    sender: JSBridge
  }

  export type EventListener = (event: MessageEvent, ...args: unknown[]) => void
}

export interface JSBridge {
  nativeUI: NativeUI
  canIUse(schema: APISchema): boolean
}
