function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalize('hello world'))

function allCaps(str) {
    return str.toUpperCase()
}
console.log(allCaps('foo bar'))

function capitalizeWords(str) {
    return str.split(' ').map(capitalize).join(' ')
}
console.log(capitalizeWords('Do All The Things'))

