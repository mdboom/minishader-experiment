export const DEFAULT_ARGUMENTS = {
    width: 800,
    height: 800
}

export const REQUIRED_FIELDS = new Set(['target', 'data'])

const validateArguments = (args) => {
    if (args === undefined || typeof args !== 'object') throw new Error('args must be an object')
    const keys = Object.keys(args)
    REQUIRED_FIELDS.forEach((k) => {
        if (!keys.includes(k)) throw new Error(`missing required argument ${k}`)
    })
    const newArgs = Object.assign({}, DEFAULT_ARGUMENTS, args)
    return newArgs
}

export default validateArguments