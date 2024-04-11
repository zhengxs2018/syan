export namespace NativeUI {
  export enum VerticalAlign {
    Top = 'top',
    Center = 'center',
    Bottom = 'bottom'
  }

  export type ConfirmStyles = {
    title?: string
    buttons?: string[]
    verticalAlign?: VerticalAlign
  }
}

export interface NativeUI {
  alert(message: string, title?: string): void

  confirm(message: string, title?: string, buttons?: string[]): boolean
  confirm(message: string, style?: NativeUI.ConfirmStyles): boolean
}
