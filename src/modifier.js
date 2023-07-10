import {
  ROOTS,
  VALUE_TYPES,
  MAX_TIER,
  MIN_TIER,
  MIN_BASE_VALUE,
  MAX_BASE_VALUE,
} from './constants.js'

const emptyFormula = (value) => value

const generateGroup = (tag) => {
  const root = ROOTS.filter((root) => root.name === tag)[0]
  const affixes = []
  const paths = {}
  root.valueTypes.forEach((type) => {
    const groupId = '' + root.id + VALUE_TYPES[type].id
    const group = { tierLimit: {}, data: [], position: root.position }
    const valuePath = `${root.name}.${VALUE_TYPES[type].name}`
    paths[valuePath] = valuePath
    //计算该分组在每个部位是否会出现(最高tier为10,11即不会出现)
    Object.keys(root.tierLimit).forEach((key) => {
      group.tierLimit[key] = root.tierLimit[key] !== 11
    })

    //分组下的词缀数据
    for (let tier = MAX_TIER; tier >= MIN_TIER; tier--) {
      // console.log(`${root.text} ${root.baseValue} ${root.types}`)
      const extendFormula = root.tierFormula || emptyFormula
      const minValue = parseInt(
        extendFormula(VALUE_TYPES[type].tierFormula(tier, MIN_BASE_VALUE))
      )
      const maxValue = parseInt(
        extendFormula(VALUE_TYPES[type].tierFormula(tier, MAX_BASE_VALUE))
      )
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
      limitKeys.forEach((key) => {
        tierLimit[key] = root.tierLimit[key] <= tier
      })
      const affix = {
        id,
        groupId,
        name: root.name,
        //影响基础数值的通道
        valuePath,
        desc: descTmpl,
        tags: root.tags,
        minValue,
        maxValue,
        tier,
        tierName,
        func: VALUE_TYPES[type].name,
        position: root.position,
        tierLimit,
      }
      group.data.push(affix)
      // console.log(`t${tier}: ${id} ${descTmpl}`)
    }
    affixes.push(group)
    console.log('----------------')
  })
  return { affixes,paths }
}

export const generate = () => {
  //按词缀影响的属性分组
  let affixesGroupByPath = []
  let allPaths = []
  for (let i = 0; i < ROOTS.length; i++) {
    const { affixes, paths } = generateGroup(ROOTS[i].name)
    affixesGroupByPath = [...affixesGroupByPath, ...affixes]
    allPaths = {...allPaths, ...paths}
  }
  // console.log(allPaths)
  return affixesGroupByPath
}
