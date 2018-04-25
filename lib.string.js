// Strings

const toString = any => any.toString()

const charAt = str => i => str.charAt(i)

const charCodeAt = str => i => str.charCodeAt(i)

const codePointAt = str => i => str.codePointAt(i)

//TODO: test this
const stringConcat = str => (...args) => str.concat(s, [...args])

const endsWith = str => test => str.endsWith(test)

const stringIncludes = str => test => str.includes(test)

const upperCase = str => str.toUpperCase()

const lowerCase = str => str.toLowerCase()

const split = str => delimiter => str.split(delimiter)

const splitLim = str => delimiter => lim =>  str.split(delimiter, lim)

const match = str => r => str.match(r)

const replace = str => test => delimiter => str.replace(test, delimiter)

const stringify = any => JSON.stringify(any)
