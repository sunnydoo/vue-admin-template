/** When your routing table is too long, you can split it into small modules**/

const vizRouter = [{
  title: '种猪业务',
  children: [
    {
      title: '繁殖管理',
      children: [
        { title: '后备管理看板', url: '/views/32/sheet0' },
        { title: '基母管理看板' },
        { title: 'BENCHMARK' },
        { title: '下游成绩追踪' }
      ]
    },
    {
      title: '物料使用监控',
      children: [
        { title: '实时库存查询' },
        { title: '饲料动保分析' }
      ]
    },
    {
      title: '种猪考核',
      children: [
        { title: '断奶成本管控' },
        { title: '种猪绩效奖金' }
      ]
    }
  ]
}, {
  title: '肉猪业务',
  children: [
    {
      title: '猪只存栏变动',
      children: [
        { title: '投苗任务' },
        { title: '死亡控制' },
        { title: '出栏进度' },
        { title: '实时存栏' },
        { title: '批次查询' }
      ]
    },
    {
      title: '物料使用监控',
      children: [
        { title: '饲喂标准执行监控' },
        { title: '动保成本监控' },
        { title: '疫苗领用与免疫' },
        { title: '实时库存查询' }
      ]
    },
    {
      title: '肉猪考核',
      children: [
        { title: '内部盈利能力PK' },
        { title: '肉猪绩效奖金' }
      ]
    }
  ]
}, {
  title: '采购分析',
  children: [
    { title: '采购管理看板' },
    { title: '采购目录明细' }
  ]
}, {
  title: '销售分析',
  children: [
    { title: '销售管理看板' }
  ]
}, {
  title: '审计监察',
  children: [
    { title: '死亡异常预警' },
    { title: '日增重异常预警' },
    { title: '库存超标预警' }
  ]
}, {
  title: '经营业绩',
  children: [
    { title: '种猪-内部能力' },
    { title: '肉猪-内部能力' },
    { title: '肉猪-考核口径' },
    { title: '肉猪-饲料调拨价' },
    { title: '肉猪-全财务口径' },
    { title: '上市猪企财报对标' },
    { title: '资产负债表' },
    { title: '利润表' },
    { title: '现金流量表' },
    { title: '销管财费用分析' }
  ]
}, {
  title: '数据文化',
  children: [
    { title: '数据质量考核' },
    { title: '数据应用度' }
  ]
}, {
  title: '人力资源',
  children: [
    { title: '人才结构' },
    { title: '人效分析' },
    { title: '薪酬分析' },
    { title: '组织架构与岗位角色描述' }
  ]
}
]
export default vizRouter
