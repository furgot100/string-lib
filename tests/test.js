const { expect } = require('@jest/globals')
const lib = require('../index')

test('Capatalize Test', () => {
    expect(lib.capitalize('hello world')).toBe('Hello world')
    expect(lib.capitalize('1234')).toBe('1234')
    expect(lib.capitalize('hello_world')).toBe('Hello_world')
})

test('All Caps', () => {
    expect(lib.allCaps('hello world')).toBe('HELLO WORLD')
    expect(lib.allCaps('1234')).toBe('1234')
    expect(lib.allCaps('hello_world')).toBe('HELLO_WORLD')
})

test('All Caps', () => {
    expect(lib.allCaps('hello world')).toBe('HELLO WORLD')
    expect(lib.allCaps('1234')).toBe('1234')
    expect(lib.allCaps('hello_world')).toBe('HELLO_WORLD')
})

test('Caps Words', () => {
    expect(lib.capitalizeWords('do all the things')).toBe('Do All The Things')
    expect(lib.capitalizeWords('has 1234')).toBe('Has 1234')
    expect(lib.capitalizeWords('hello_world')).toBe('Hello_world')
})

test('Remove extra spaces', () => {
    expect(lib.removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!')
    expect(lib.removeExtraSpaces('has  1234')).toBe('has 1234')
    expect(lib.removeExtraSpaces(' 2  ')).toBe('2')
})

test('Kebob', () => {
    expect(lib.kebobCase('hello world')).toBe('hello-world')
    expect(lib.kebobCase('1234')).toBe('1234')
    expect(lib.kebobCase('hello_world')).toBe('helloworld')
})


test('Snake', () => {
    expect(lib.snakeCase('hello world')).toBe('hello_world')
    expect(lib.snakeCase('1234')).toBe('1234')
    expect(lib.snakeCase('hello_world')).toBe('hello_world')
})


test('Camel Case', () => {
    expect(lib.camelCase('hello world')).toBe('helloWorld')
    expect(lib.camelCase('1234')).toBe('1234')
    expect(lib.camelCase('camel_case')).toBe('camel_case')
})


test('Shift', () => {
    expect(lib.shift('hello world', 4)).toBe('o worldhell')
    expect(lib.shift('1234',2)).toBe('3412')
    expect(lib.shift('hello_world',3)).toBe('lo_worldhel')
})

test('Empty', () => {
    expect(lib.empty('hello world')).toBe(false)
    expect(lib.empty(' ')).toBe(true)
    expect(lib.empty('hello_world')).toBe(false)
})






