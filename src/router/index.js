import App from '../pages/App/App'
import ReactHooks from '../pages/reactHooks'
import RouterPage from '../pages/routerPage'
import RouterDetail from '../pages/routerPage/routerDetail'
import NotFound from '../pages/routerPage/NotFound'

let routerConfig = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: App
  },  
  {
    path: '/reactHooks',
    title: 'reactHooks',
    exact: true,
    component: ReactHooks
  },
  {
    path: '/routerPage',
    title: 'routerPage',
    exact: false,
    component: RouterPage
  },
  {
    path: '/routerDetail/:id',
    title: '路由详情',
    exact: false,
    component: RouterDetail
  },
  {
    path: '',
    title: 'NotFound',
    exact: false,
    component: NotFound
  }
]

export default routerConfig