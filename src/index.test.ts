import { Log } from './index'

const mockLog = new Log()

it('debug returns void', () => {
  const result = mockLog.debug('hello world')
  expect(result).toEqual(undefined)
})

it('error with multiple args returns void', () => {
  const result = mockLog.error('error', {error: 'testing error'})
  expect(result).toEqual(undefined)
})

it('info with multiple args returns void', () => {
  const result = mockLog.info('info', {info: 'testing info'})
  expect(result).toEqual(undefined)
})

it('warning with multiple args returns void', () => {
  const result = mockLog.warn('warn', {warning: 'testing warning'})
  expect(result).toEqual(undefined)
})