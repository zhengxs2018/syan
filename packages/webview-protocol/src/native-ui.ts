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
  alert(message: string, title?: string): Promise<void>
  confirm(message: string, style?: NativeUI.ConfirmStyles): Promise<boolean>
}
