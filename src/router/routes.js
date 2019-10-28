
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {name:'', path: '', component: () => import('pages/Index.vue') },
      {name:'login', path: 'login', component: () => import('pages/auth.vue') },
      {name:'register', path: 'register', component: () => import('pages/auth.vue') },
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
