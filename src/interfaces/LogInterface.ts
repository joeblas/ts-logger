export interface LogInterface {
  debug(message: string, ...additionalData: any[]): void
  warn(message: string, ...additionalData: any[]): void
  error(message: string, ...additionalData: any[]): void
  info(message: string, ...additionalData: any[]): void
}