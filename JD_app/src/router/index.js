import Vue from 'vue';
import Router from 'vue-router';

// 组件
import FormPreview from 'common/FormPreview'
import LineChart from 'components/charts/LineChart'
import PieChart from 'components/charts/PieChart'


import Home from 'components/home/Home';
import Recommend from 'components/recommend/Recommend';
import ECSServer from 'components/ECSserver/ECSServer';
import YunWaf from 'components/products/yun-waf/YunWaf';
import YunKD from 'components/products/yun-kd/YunKD';
import YunCG from 'components/products/yun-cg/YunCG';
import YunLD from 'components/products/yun-ld/YunLD';
import YunJC from 'components/products/yun-jc/YunJC';
import YunJM from 'components/products/yun-jm/YunJM';
import YunClear from 'components/products/yun-clear/YunClear';
import SSL from 'components/products/yun-ssl/ssl'
import CloudShop from 'components/cloudShop/cloudShop'
import orderDetail from 'components/mine/order-detail'
import Safety  from 'components/safe/safety'
import Recharge from 'components/recharge/recharge'

import SafeRule from 'components/safe/saferule'
import AddRule from 'components/safe/addrule'


import Server from 'components/server/Server';
import ServerMsg from 'components/server/ServerMsg';
import ServerMonit from 'components/server/ServerMonit';
import Login from 'components/login'
import Register from 'components/register/register'
import ForgetPassWord from 'components/forgetPassword/forgetPassWord'
import NotFound from 'components/404'
import News from 'components/news/News'
import NewsMsg from 'components/news/NewsMsg'
import Purchase from 'components/purchase/Purchase'
import PurchaseView from 'components/purchase/PurchaseView'
import PurchaseSuccess from 'components/purchase/PurchaseSuccess'
import IndividualWorkOrders from 'components/work-orders/IndividualWorkOrders'
import Control from 'components/control/Control'
import About from 'components/about/About'
import Call from 'components/about/call'
import Mine from 'components/mine/Mine'
import Setting from 'components/mine/Setting'
import Personmeans from 'components/mine/personmeans'
import Order from 'components/mine/order'
import Inbox from 'components/inbox/inbox'
import InboxMsg from 'components/inbox/Inbox_msg'
import PerfectForm from 'components/mine/perfect-form'
import Psearch from 'components/search/psearch'
import ProductsList from 'components/productsList/productsList'


Vue.use(Router)

export default new Router({
  mode:'hash',
  base:__dirname,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      children:[
        {
        path:'/login/register',
        name:'register',
        component:Register
       },
        {
        path:'/login/forgetPassWord',
        name:'forgetPassWord',
        component:ForgetPassWord
       }
    ]
    },
    {
      path: '/line',
      component: LineChart
    },{
      path: '/pie',
      component: PieChart
    },{
      path: '*',
      name: '404',
      component: NotFound,
    },{
      path: '/',
      redirect: '/login',
    },

    {
      path: '/home',
      component: Home,
      redirect: '/home/recommend',
      children: [
        {
          name: 'recommend',
          path: '/home/recommend',
          component: Recommend
        },{
          name: 'ProductsList',
          path: '/home/productsList',
          component: ProductsList
        },{
          name: 'control',
          path: '/home/control',
          component: Control
        },{
          name: 'Psearch',
          path: '/home/psearch',
          component: Psearch,
          children: [
            {
              name: 'NewsMsg',
              path: '/home/psearch/:sid',
              component: NewsMsg
            }
          ]
        }, {
          name: 'inbox',
          path: '/home/inbox',
          component: Inbox
        },{
          name: 'news',
          path: '/home/news',
          component: News,
          // children: [
          //   {
          //     name: 'NewsMsg',
          //     path: '/home/news/:sid',
          //     component: NewsMsg
          //   }
          // ]
        },{
          name: 'mine',
          path: '/home/mine',
          component: Mine,
          children: [
            {
              name: 'PerfectForm',
              path: '/home/mine/perfect',
              component: PerfectForm
            }
          ]
        }
      ]
    },{
      name: 'waf',
      path: '/waf',
      component: YunWaf
    },
    {
      name: 'ssl',
      path: '/ssl',
      component: SSL
    },{
      name: 'kd',
      path: '/kd',
      component: YunKD
    },{
      name: 'cg',
      path: '/cg',
      component: YunCG
    },{
      name: 'ld',
      path: '/ld',
      component: YunLD
    },{
      name: 'jc',
      path: '/jc',
      component: YunJC
    },{
      name: 'jm',
      path: '/jm',
      component: YunJM
    },
    {
      name:'recharge',
      path:'/recharge',
      component:Recharge
    },{
      name: 'clear',
      path: '/clear',
      component: YunClear
    },{
      name: 'cloudShop',
      path: '/cloudShop',
      component: CloudShop
    },{
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Call',
      path: '/call',
      component: Call
    },
    {
      name: 'Setting',
      path: '/setting',
      component: Setting
    },{
      name: 'Personmeans',
      path: '/personmeans',
      component: Personmeans
    },
    {
      name: 'Order',
      path: '/order',
      component: Order,
      children:[
         {
          name:'orderDetail',
          path:'/order/order-detail',
          component:orderDetail
         }
      ]
    },{
      name: 'ecs',
      path: '/ecs',
      component: ECSServer,
      children: [
        {
          name: '',
          path: '/or',
          component: FormPreview
        }
      ]
    },{
      name: 'Inbox',
      path: '/inbox',
      component: Inbox,
      children: [
        {
          name: 'InboxMsg',
          path: '/inbox/msg/:id',
          component: InboxMsg
        }
      ]
    },{
      name: 'order',
      path: '/order-msg',
      component: FormPreview
    },{
      name: 'server',
      path: '/server',
      component: Server,
      meta: {
        requireAuth: true
      },
      children: [
        {
          name: 'serverMsg',
          path: '/server/msg/:id',
          component: ServerMsg
        },{
          name: 'serverMonit',
          path: '/server/monit',
          component: ServerMonit
        }
      ]
    },{
      name: 'IndividualWorkOrders',
      path: '/individual',
      component: IndividualWorkOrders
    },{
      name: 'Safety',
      path: '/safety',
      component: Safety,
      children:[
        {
          name:'SafeRule',
          path:'/safety/saferule',
          component:SafeRule,
          children:[
            {
              name:'AddRule',
              path:'/safety/saferule/addrule',
              component:AddRule
            }
          ]
        }
      ]
    },{
      name: 'purchase',
      path: '/purchase',
      component: Purchase,
      meta: {
        requireAuth: true
      },
      children: [
        {
          name: 'PurchaseView',
          path: '/purchase/view',
          component: PurchaseView
        },{
          name: 'PurchaseSuccess',
          path: '/purchase/success',
          component: PurchaseSuccess
        }
      ]
    }
  ]
})
