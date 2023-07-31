import { ROOTS } from './src/constants.js'
import { generate } from './src/modifier.js'
import * as fse from 'fs-extra'

const [affixesGroupByPath,allPaths] = generate()

fse.outputFile(
  './build/affixes.json',
  JSON.stringify(affixesGroupByPath),
  (err) => {
    console.log(err)
  }
)

let pathEnum = `
export enum PathKey {
`
Object.keys(allPaths).forEach((path) => {
  pathEnum += `  ${path} = '${path}',\n`
})
pathEnum += `}`
console.log(pathEnum)
fse.outputFile('./build/pathEnum.ts', pathEnum, (err) => {
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
