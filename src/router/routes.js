
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'adminTicket', component: () => import('pages/AdminTicket.vue') },
      { path: 'adminClient', component: () => import('pages/AdminClient.vue') },
      { path: 'adminOperator', component: () => import('pages/AdminOperator.vue') },
      { path: 'adminAdmin', component: () => import('pages/AdminAdmin.vue') },
      { path: 'clientTicket', component: () => import('pages/ClientTicket.vue') },
      { path: 'clientArch', component: () => import('pages/ClientArch.vue') },
      { path: 'clientTicketOpen', component: () => import('pages/ClientTicketOpen.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
