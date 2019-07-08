import Login from '@/pages/login';
import User from '@/pages/user';
import NotFound from '@/pages/notFound';

export default [{
  type:'redirect',
  exact:true,
  from:'/',
  to:'/user'
},{
  type:'route',
  path:'/user',
  exact:true,
  component:User
},{
  type:'route',
  path:'/login',
  exact:true,
  component:Login
},{
  type:'route',
  path:'*',
  component:NotFound
}]