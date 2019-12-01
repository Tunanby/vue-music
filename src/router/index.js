import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Rank from 'components/rank/rank'
// import Singer from 'components/singer/singer'
const Recommend = () => import('components/recommend/recommend')
const Rank = () => import('components/rank/rank')
const Singer = () => import('components/singer/singer')
const SingerDetail = () => import('components/singer-detail/singer-detail')
const RecommendDetail = () => import('components/recommend-detail/recommend-detail')
const RankDetail = () => import('components/rank-detail/rank-detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [
        {
          path: ":id",
          component: RecommendDetail
        }
      ]
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail,
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    { path: '/*', redirect: '/recommend' }
  ]
})
