## Badges:
![example workflow](https://github.com/furgot100/string-lib/actions/workflows/node.js.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/furgot100/string-lib/badge.svg?branch=main)](https://coveralls.io/github/furgot100/string-lib?branch=main)

# Javascript String Library
A Library that lets you change strings

## Function capitalize
Returns given string with first letter capitalized

## Function allCaps
Returns given string in all caps

## Function capitalizeWords
Returns given string with words capitalized
```
capitalizeWords('do all the things')

<!-- output -->
'Do All The Things'
```

## Fucntion removeExtraSpaces
Removes extra spaces from given strings
```
removeExtraSpaces("   Hello    world!   ")

<!-- output -->
"Hello world!"
```

## Function kebobCase
Returns string in kebob case
```
kebobCase("Hello World")

<!-- Output -->
"Hello-World"
```

## Function snakeCase
Returns string in snake case
```
snakeCase("hello world")

<!-- Output -->
"hello_world"
```

## Function camelCase
Returns string in camel case
```
camelCase('hello world')

<!-- Output -->
'helloWorld'
```

## Function shift
Takes a string and a number. Returns the string where the string is shifted based on the number
```
shift('hello world', 4)

<!-- Output -->
'o worldhell'
```

## Function isEmpty
Checks to see if the string is empty