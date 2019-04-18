import Loadable from 'react-loadable';
import createHistory from 'history/createBrowserHistory';
import BasicLayout from '@/layouts/BasicLayout';
import SiderLayout from '@/layouts/SiderLayout';
import Loading from '@/components/Loading';

const Page1InDemo1 = Loadable({loader: () => import('@/pages/demo1/page1'),loading: Loading});
const Page2InDemo1 = Loadable({loader: () => import('@/pages/demo1/page2'),loading: Loading});
const Demo2 = Loadable({loader: () => import('@/pages/demo2'),loading: Loading});
const Demo3 = Loadable({loader: () => import('@/pages/demo3'),loading: Loading});




export const history = createHistory();

export const routes = [
  {
    path:'/',
    redirect:'/demo1/page1'
  },
  {
    path:'/demo1',
    redirect:'/demo1/page1',
    children:[{
      path:'/page1',
      layout:SiderLayout,
      component:Page1InDemo1
    },{
      path:'/page2',
      layout:SiderLayout,
      component:Page2InDemo1
    },]
  },
  {
    path:'/demo2',
    layout:BasicLayout,
    component:Demo2
  },
  {
    path:'/demo3/:bookId',
    layout:BasicLayout,
    component:Demo3
  }
]