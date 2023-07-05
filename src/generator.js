import { ROOTS, VALUE_TYPES, MAX_TIER, MIN_TIER, MIN_BASE_VALUE,MAX_BASE_VALUE } from './constants.js'

const emptyFormula = value => value


export const generate = (tag) => {
  const root = ROOTS.filter((root) => root.name === tag)[0]
  const affixs = {}
  root.valueTypes.forEach((type) => {
    for(let tier = MAX_TIER; tier >= MIN_TIER; tier--){
      // console.log(`${root.text} ${root.baseValue} ${root.types}`)
      const extendFormula = root.tierFormula || emptyFormula
      const minValue = parseInt(extendFormula(VALUE_TYPES[type].tierFormula(tier, MIN_BASE_VALUE)))
      const maxValue = parseInt(extendFormula(VALUE_TYPES[type].tierFormula(tier, MAX_BASE_VALUE)))
      let descTmpl = VALUE_TYPES[type].desc
      descTmpl = descTmpl.replace('#', root.text)
      descTmpl = descTmpl.replace('text', VALUE_TYPES[type].text)
      // descTmpl = descTmpl.replace('n', minValue)
      // descTmpl = descTmpl.replace('m', maxValue)
      const id = '' + root.id + VALUE_TYPES[type].id + '00' + tier
      const tierName = root.tierNames[MAX_TIER - tier]
      const affix  = {
        id,
        name: root.name,
        desc: descTmpl,
        tags: root.tags,
        minValue,
        maxValue,
        tier,
        tierName,
        position: root.position,
      }
      affixs[id] = affix
      console.log(JSON.stringify(affix))
      // console.log(`t${tier}: ${id} ${descTmpl}`)
      
    }
    console.log('----------------')
  })
  return affixs
}
