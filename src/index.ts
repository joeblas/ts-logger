import { LogInterface } from "./interfaces/LogInterface"

export class Log implements LogInterface {

  public debug(message: string, ...additionalData: any[]): void {
    this.emitMessage('debug', message, additionalData)
  }
  public warn(message: string, ...additionalData: any[]): void {
    this.emitMessage('warn', message, additionalData)

  }
  public error(message: string, ...additionalData: any[]): void {
    this.emitMessage('error', message, additionalData)

  }
  public info(message: string, ...additionalData: any[]): void {
    this.emitMessage('info', message, additionalData)

  }

  private emitMessage(msgType: 'debug' | 'warn' | 'error' | 'info', msg: string, additionalData: any[]) {
    if (additionalData.length > 0) {
      console[msgType](msg, additionalData)
    } else {
      console[msgType](msg)
    }
  }

}