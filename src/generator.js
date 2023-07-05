import { ROOTS, VALUE_TYPES, MAX_TIER, MIN_TIER } from './constants.js'

export const generate = () => {}

export const printListByTag = (tag) => {
  const affix = ROOTS.filter((root) => root.name === tag)[0]
  affix.valueTypes.forEach((type) => {
    for(let i = MAX_TIER; i >= MIN_TIER; i--){
      // console.log(`${root.text} ${root.baseValue} ${root.types}`)
      const minValue = parseInt(VALUE_TYPES[type].tierFormula(i, affix.baseValue[0]))
      const maxValue = parseInt(VALUE_TYPES[type].tierFormula(i, affix.baseValue[1]))
      let descTmpl = VALUE_TYPES[type].desc
      descTmpl = descTmpl.replace('#', affix.text)
      descTmpl = descTmpl.replace('text', VALUE_TYPES[type].text)
      descTmpl = descTmpl.replace('n', minValue)
      descTmpl = descTmpl.replace('m', maxValue)
      console.log(`t${i}: ${descTmpl}`)
    }
    console.log('----------------')
  })
}
