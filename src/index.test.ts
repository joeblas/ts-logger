import { Log } from './index'

const mockLog = new Log()

it('returns void', () => {
  const result = mockLog.debug('hello world')
  expect(result).toEqual(undefined)
})

