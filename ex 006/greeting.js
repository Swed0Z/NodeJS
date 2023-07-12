const getFlag = require('./flags')

console.log(`oi ${getFlag('--name')}, ${getFlag('--greeting')}`)
