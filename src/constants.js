export const ROOTS = [
  {
    name:'damage',
    text:'伤害',
    baseValue: 10,
    types:[0, 1, 2]
  },
  {
    name:'speed',
    text:'速度',
    baseValue: 5,
    types: [0],
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
    desc: '# text n%',
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
    desc: 'n% text n',
    growingFormula: function(t, baseValue){
      return baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.8)
    }
  },
  {
    name: 'add',
    text: '附加',
    desc: 'text n #',
    growingFormula: function(t, baseValue){
      return baseValue + (10 - t) * baseValue * Math.pow((10 - t), 0.5)
    }
  },
]


