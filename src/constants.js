export const ROOTS = [
  {
    name:'damage',
    text:'伤害',
    baseValue: [5,10],
    valueTypes:[0, 1]
  },
  {
    name:'speed',
    text:'速度',
    baseValue: 5,
    valueTypes: [0],
    /**
     * 
     * @param {*} 针对类型的成长修正
     */
    tierFormula: function(value){
      return Math.pow(value, 0.7)
    }
  }
]



export const VALUE_TYPES = [
  {
    name: 'increase',
    text: '提高',
    desc: '# text n% - m%',
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
    desc: 'n% - m% text #',
    tierFormula: function(t, baseValue){
      return Math.pow(baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.8),0.6)
    }
  },
  {
    name: 'add',
    text: '附加',
    desc: 'text n - m #',
    tierFormula: function(t, baseValue){
      return baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.5)
    }
  },
]


export const MAX_TIER = 10
export const GLOBAL_MIN_TIER = 1