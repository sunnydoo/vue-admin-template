import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import vizRouter from './modules/viz'
import PinyinHelper from 'pinyin4js'

const uniquePaths = []
function updateRouteItem(item) {
  for (let key in item) {
    key = key.trim().toLowerCase()
    if (key === 'title') {
      let pinyinTitle = PinyinHelper.convertToPinyinString(item[key], '', PinyinHelper.FIRST_LETTER)
      if (uniquePaths.includes(pinyinTitle)) {
        pinyinTitle += 'a'
      }
      uniquePaths.push(pinyinTitle)

      item.name = pinyinTitle
      item.path = pinyinTitle
      if ('url' in item) {
        item.path += '/:url'
        item.props = { url: item['url'] }
        delete item.url
      }
      item.meta = { title: item['title'] }
      delete item.title
    } else if (key === 'children') {
      const itemArray = item[key]
      for (const child of itemArray) {
        updateRouteItem(child)
      }
    }
  }

  const thisIcon = 'children' in item ? 'el-icon-folder-opened' : 'el-icon-document'
  if ('meta' in item) {
    item.meta['icon'] = thisIcon
  } else {
    item['meta'] = { 'icon': thisIcon }
  }

  if ('children' in item) {
    item.alwaysShow = true
    item.component = () => import('@/views/farm/group')
  } else {
    item.component = () => import('@/views/farm/repro')
  }
}

for (const menuitem of vizRouter) {
  updateRouteItem(menuitem)
  menuitem.component = Layout
  menuitem.alwaysShow = true
  menuitem.path = '/' + menuitem.path
}

/*
* hidden: true                   if set true, item will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu
*                                if not set alwaysShow, when item has more than one children route,
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
   roles: ['admin','editor']    control the page roles (you can set multiple roles)
   title: 'title'               the name show in sidebar and breadcrumb (recommend set)
   icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
   noCache: true                if set true, the page will no be cached(default is false)
   affix: true                  if set true, the tag will affix in the tags-view
   breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
   activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
*/
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/farm/repro'),
        name: 'dashboard',
        meta: { title: '报表首页', icon: 'dashboard' }
      }
    ]
  },
  ...vizRouter
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
