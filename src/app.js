import {ROOTS, VALUE_TYPES} from './constants.js'
import { printListByTag } from './generator.js'

let affixes = []
for(let i = 0; i < ROOTS.length; i++){
  affixes = affixes.concat(printListByTag(ROOTS[i].name))
}
console.log(affixes)


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