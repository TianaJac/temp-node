// CommonJs, every file is a module (by default)
// Modules - Encapstulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('steph')
sayHi(names.john)
sayHi(names.peter)