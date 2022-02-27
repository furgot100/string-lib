// 1
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
// console.log(capitalize('hello world'))
// 2
function allCaps(str) {
  return str.toUpperCase();
}
// console.log(allCaps('foo bar'))
// 3
function capitalizeWords(str) {
  return str.split(' ').map(capitalize).join(' ');
}
// console.log(capitalizeWords('do all the things'))
// 4
function removeExtraSpaces(str) {
  return str.trim(str).split(/\s+/).join(' ');
}
// console.log(removeExtraSpaces("   Hello    world!   "))
// 5
function kebobCase(string, separator) {
  const lower = string.toLowerCase();
  const char = lower.split('');
  const filter = char.filter((charater) => {
    const code = charater.charCodeAt(0);
    if (code > 96 && code < 123) {
      return true;
    } if (code > 47 && code < 58) {
      return true;
    } if (code === 32 || code === separator.charCodeAt(0)) {
      return true;
    }
    return false;
  });
  const noSpace = removeExtraSpaces(filter.join(''));
  return noSpace.split(' ').join(separator);
}
// console.log(kebobCase("Hello world"))
// Challenge 6
function snakeCase(string) {
  return kebobCase(string, '_');
}
// console.log(snakeCase("what the heck "))
// 7
function camelCase(string) {
  const array = string.trim().split(' ');
  const first = array[0].toLowerCase();
  const remainder = array.slice(1).map(capitalize).join('');
  return [first, remainder].join('');
}
// console.log(camelCase("Camel Case"))
// 8
function shift(string, charSpaces) {
  return string.slice(charSpaces) + string.slice(0, charSpaces);
}
// console.log(shift("foo bare", 3))
// 10
function empty(string) {
  const trimmed = string.trim();
  return trimmed.split(/\s+/).join('').length === 0;
}
// console.log(empty("Abc def"))
// console.log(empty(" "))
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.empty = empty;
