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

  /**
   * Listens to `channel`, when a new message arrives `listener` would be called with
   * `listener(event, args...)`.
   */
  on(channel: string, listener: JSBridge.EventListener): () => void

  /**
   * Adds a one time `listener` function for the event. This `listener` is invoked
   * only the next time a message is sent to `channel`, after which it is removed.
   */
  once(channel: string, listener: JSBridge.EventListener): void

  /**
   * Adds a one time `listener` function for the event. This `listener` is invoked
   * only the next time a message is sent to `channel`, after which it is removed.
   */
  off(channel: string, listener: JSBridge.EventListener): void

  /**
   * Removes all listeners, or those of the specified `channel`.
   */
  removeAllListeners(channel: string): void

  /**
   * Send an asynchronous message to the main process via `channel`, along with
   * arguments. Arguments will be serialized with the Structured Clone Algorithm,
   * just like `window.postMessage`, so prototype chains will not be included.
   * Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an
   * exception.
   *
   * **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
   * Electron objects will throw an exception.
   *
   * Since the main process does not have support for DOM objects such as
   * `ImageBitmap`, `File`, `DOMMatrix` and so on, such objects cannot be sent over
   * Electron's IPC to the main process, as the main process would have no way to
   * decode them. Attempting to send such objects over IPC will result in an error.
   *
   * The main process handles it by listening for `channel` with the `ipcMain`
   * module.
   *
   * If you need to transfer a `MessagePort` to the main process, use
   * `JSBridge.postMessage`.
   *
   * If you want to receive a single response from the main process, like the result
   * of a method call, consider using `JSBridge.invoke`.
   */
  send(channel: string, ...args: unknown[]): void

  /**
   * Resolves with the response from the main process.
   *
   * Send a message to the main process via `channel` and expect a result
   * asynchronously. Arguments will be serialized with the Structured Clone
   * Algorithm, just like `window.postMessage`, so prototype chains will not be
   * included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw
   * an exception.
   *
   * **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
   * Electron objects will throw an exception.
   *
   * Since the main process does not have support for DOM objects such as
   * `ImageBitmap`, `File`, `DOMMatrix` and so on, such objects cannot be sent over
   * Electron's IPC to the main process, as the main process would have no way to
   * decode them. Attempting to send such objects over IPC will result in an error.
   *
   * The main process should listen for `channel` with `ipcMain.handle()`.
   *
   * For example:
   *
   * If you need to transfer a `MessagePort` to the main process, use
   * `JSBridge.postMessage`.
   *
   * If you do not need a response to the message, consider using `JSBridge.send`.
   */
  invoke(channel: string, ...args: unknown[]): Promise<unknown>

  /**
   * Send a message to the main process, optionally transferring ownership of zero or
   * more `MessagePort` objects.
   *
   * The transferred `MessagePort` objects will be available in the main process as
   * `MessagePortMain` objects by accessing the `ports` property of the emitted
   * event.
   *
   * **NOTE:** Cannot transfer these when `contextIsolation: true`.
   *
   * For example:
   *
   * For more information on using `MessagePort` and `MessageChannel`, see the MDN
   * documentation.
   */
  postMessage(channel: string, message: unknown, transfer?: MessagePort[]): void
}
