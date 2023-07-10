import { ROOTS } from './src/constants.js'
import { generate } from './src/modifier.js'
import * as fse from 'fs-extra'


fse.outputFile(
  './build/affixes.json',
  JSON.stringify(generate()),
  (err) => {
    console.log(err)
  }
)

// printListByTag('regenerate')

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
