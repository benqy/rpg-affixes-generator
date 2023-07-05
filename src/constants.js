
/**
 * tiers顺序: weapon,helment,shoulder,body,glove,trousers,boot,amulet,belt,ring
 */
export const ROOTS = [
  {
    name:'damage',
    text:'伤害',
    tags:['damage'],
    baseValue: [5,10],
    valueTypes:[0, 1, 2],
    position: 'prefix',
    id:'001',
    tierNames: ['锐利','猛烈','强劲','狂暴','爆发','激进','猛力','无情','破碎','虚空'],
    // minTiersByEquipType: [1, 11, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name:'speed',
    text:'速度',
    tags:['speed'],
    position:'prefix',
    id:'002',
    valueTypes: [0],
    tierNames:['迅捷', '飞速', '迅疾', '猎豹', '疾行', '风驰', '飞驰', '风快', '迅速', '飞快'],
    tierFormula: value => Math.pow(value, 0.5)
  },
  {
    name:'hitPoint',
    text:'生命',
    tags:['hitPoint'],
    position:'prefix',
    id:'003',
    valueTypes: [0],
    tierNames:['生机', '活力', '庇佑', '强韧', '蓬勃', '恢复', '充盈', '健康', '鲜活', '长存']
  },
  {
    name:'arrmor',
    text:'护甲',
    tags:['arrmor'],
    position:'prefix',
    id:'004',
    valueTypes: [0,2],
    tierNames:['坚固', '厚重', '坚硬', '稳固', '严密', '牢固', '结实', '防御', '可靠', '坚实']
  },
  {
    name:'resistance',
    text:'元素抗性',
    tags:['resistance','fire','cold','lightning'],
    position:'suffix',
    id:'005',
    valueTypes: [0],
    tierNames:['坚固', '抵御', '守护', '钢铁', '坚定', '防护', '抗拒', '抗衡', '免疫', '抵挡'],
    tierFormula: value => Math.pow(value, 0.6)
  },
  {
    name:'strength',
    text:'力量',
    tags:['attr','strength'],
    position:'suffix',
    id:'006',
    valueTypes: [2],
    tierNames:['强悍', '雄壮', '威武', '刚毅', '雄狮', '巨力', '雄健', '猛兽', '力牛', '勇猛'],
    tierFormula: value => Math.pow(value, 0.65) + 5
  },
  {
    name:'dexterity',
    text:'敏捷',
    tags:['attr','dexterity'],
    position:'suffix',
    id:'007',
    valueTypes: [2],
    tierNames:['敏捷', '灵活', '迅捷', '敏锐', '矫捷', '疾步', '敏猫', '机敏', '灵狐', '捷豹'],
    tierFormula: value => Math.pow(value, 0.65) + 5
  },
  {
    name:'intelligence',
    text:'智力',
    tags:['attr','intelligence'],
    position:'suffix',
    id:'008',
    valueTypes: [2],
    tierNames:['聪慧', '智慧', '睿智', '聪颖', '明晰', '智者', '明哲', '博学', '机智', '智囊'],
    tierFormula: value => Math.pow(value, 0.65) + 5
  },
  {
    name:'regenerate',
    text:'生命恢复',
    tags:['regenerate'],
    position:'suffix',
    id:'008',
    valueTypes: [2],
    tierNames:['聪慧', '智慧', '睿智', '聪颖', '明晰', '智者', '明哲', '博学', '机智', '智囊'],
    tierFormula: value => Math.pow(value, 0.8) + 5
  }
]



export const VALUE_TYPES = [
  {
    name: 'increase',
    text: '提高',
    id:'001',
    desc: '#text n% - m%',
    /**
     * 伤害成长公式
     * baseValue一般情况下就是t10词缀的基础数值
     * t 为词缀等级 
     * 
    */
    tierFormula: function(t, baseValue){
      return baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.8)
    }
  },
  {
    name: 'more',
    text: '更多',
    id:'002',
    desc: 'n% - m% text#',
    tierFormula: function(t, baseValue){
      return Math.pow(baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.8),0.6)
    }
  },
  {
    name: 'add',
    text: '附加',
    id:'003',
    desc: 'text n - m #',
    tierFormula: function(t, baseValue){
      return baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.8)
    }
  },
]


export const MAX_TIER = 10
export const MIN_TIER = 1
export const MIN_BASE_VALUE = 5
export const MAX_BASE_VALUE = 10