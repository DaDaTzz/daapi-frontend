export default [
  { path: '/', name: '主页', icon: 'smile', component: './Index' },
  {
    path: '/interface_info/:id',
    name: '查看接口',
    icon: 'smile',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login', name: '登录' }],
  },
  // { path: '/welcome', icon: 'smile', component: './Index',name:'欢迎' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      {
        icon: 'table',
        path: '/admin/interface_info',
        component: './Admin/InterfaceInfo',
        name: '接口管理',
      },
      {
        icon: 'analysis',
        path: '/admin/analysis',
        component: './Admin/Analysis',
        name: '接口分析',
      },
    ],
  },

  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
