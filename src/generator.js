import { ROOTS, VALUE_TYPES, MAX_TIER, MIN_TIER, MIN_BASE_VALUE,MAX_BASE_VALUE } from './constants.js'

const emptyFormula = value => value


export const generate = (tag) => {
  const root = ROOTS.filter((root) => root.name === tag)[0]
  const affixs = []
  root.valueTypes.forEach((type) => {
    const groupId = '' + root.id + VALUE_TYPES[type].id
    const group = {tierLimit:{},data: [],position: root.position}
    //计算该分组在每个部位是否会出现(最高tier为10,11即不会出现)
    Object.keys(root.tierLimit).forEach(key => {
      group.tierLimit[key] = root.tierLimit[key] !== 11
    })

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
      const id = groupId + '00' + tier
      const tierName = root.tierNames[MAX_TIER - tier]
      const tierLimit = {}
      const limitKeys = Object.keys(root.tierLimit)
      //计算该tier在每个部位是否会出现
      limitKeys.forEach(key => {
        tierLimit[key] = root.tierLimit[key] <= tier
      })
      const affix  = {
        id,
        name: root.name,
        //影响基础数值的通道
        valuePath: `${root.name}.${VALUE_TYPES[type].name}`,
        desc: descTmpl,
        tags: root.tags,
        minValue,
        maxValue,
        tier,
        tierName,
        position: root.position,
        tierLimit,
      }
      group.data.push(affix)
      console.log(JSON.stringify(affix))
      // console.log(`t${tier}: ${id} ${descTmpl}`)
      
    }
    affixs.push(group)
    console.log('----------------')
  })
  return affixs
}
