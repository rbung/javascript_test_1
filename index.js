'use strict'

const { testStrings } = require('./data')
const { analyse } = require('./palindromes')

testStrings.map(text => console.log(JSON.stringify(analyse(text), null, 2)))
