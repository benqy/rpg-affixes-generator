import { ROOTS, VALUE_TYPES } from './constants.js'
import { printListByTag } from './generator.js'
import * as fse from 'fs-extra'

let affixes = {}
for (let i = 0; i < ROOTS.length; i++) {
  affixes = {...affixes, ...printListByTag(ROOTS[i].name) }
}
fse.outputFile('./build/affixes.json', JSON.stringify(affixes), (err) => {
  console.log(err)
})

/**
 * {
    "name": "xx头盔",
    "prefix1": "{\"x\":1,\"y\":2}",
    "prefix2": "{\"x\":1,\"y\":2}",
    "suffix1": "{\"x\":1,\"y\":2}",
    "suffix2": "{\"x\":1,\"y\":2}",
    "specAffix1": "{\"x\":1,\"y\":2}",
    "specAffix2": "{\"x\":1,\"y\":2}",
    "specAffix3": "{\"x\":1,\"y\":2}",
    "specAffix4": "{\"x\":1,\"y\":2}"
}
 */
