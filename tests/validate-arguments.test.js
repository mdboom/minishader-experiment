import validateArguments, { DEFAULT_ARGUMENTS } from '../src/validate-arguments'

describe('validateArguments', () => {
    it('throws if you do not pass in an object', () => {
        expect(() => validateArguments()).toThrow()
        expect(() => validateArguments(123)).toThrow()
    })
    it('returns a handful of default arguments if not specified', () => {
        expect(validateArguments({target: '#test', data: []}).width).toBe(DEFAULT_ARGUMENTS.width)
        expect(validateArguments({target: '#test', data: []}).height).toBe(DEFAULT_ARGUMENTS.height)
        expect(validateArguments({target: '#test', data: [], height: 10}).height).not.toBe(DEFAULT_ARGUMENTS.height)
        expect(validateArguments({target: '#test', data: [], width: 10}).width).not.toBe(DEFAULT_ARGUMENTS.width)
    })
})