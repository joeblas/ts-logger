"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const mockLog = new index_1.Log();
it('returns void', () => {
    const result = mockLog.debug('hello world');
    expect(result).toEqual(undefined);
});
