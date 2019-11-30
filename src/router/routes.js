
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {name:'index', path: '', component: () => import('pages/Index.vue') },
      {name:'login', path: 'login', component: () => import('pages/auth.vue') },
      {name:'register', path: 'register', component: () => import('pages/auth.vue') },
      {name:'wallet', path: 'wallet', component: () => import('pages/wallet.vue') },
      {name:'account', path: 'account', component: () => import('pages/account.vue'),
    children:[
      { path: 'transaction', name: 'transaction'},
      { path: 'thrift', name: 'thrift'},
      { path: 'thriftaccount', name: 'thriftaccount'},
    ]},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
