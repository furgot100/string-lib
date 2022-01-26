// 1
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(capitalize('hello world'))

// 2
function allCaps(str) {
    return str.toUpperCase()
}
console.log(allCaps('foo bar'))

// 3
function capitalizeWords(str) {
    return str.split(' ').map(capitalize).join(' ')
}
console.log(capitalizeWords('do all the things'))

// 4
function removeExtraSpaces(str) {
    return str.trim(str).split(/\s+/).join(' ')
}
console.log(removeExtraSpaces("   Hello    world!   "))


// 8
function shift (string, charSpaces) {
    return string.slice(charSpaces) + string.slice(0, charSpaces)
}
console.log(shift("foo bare", 3))

// 10
function empty (string) {
    const trimmed = string.trim()
    return trimmed.split(/\s+/).join("").length === 0;
}
console.log(empty('Abc def'))
console.log(empty(' '))