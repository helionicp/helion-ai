export const routes = {
  auth: {
    root: '/auth',
    login: '/auth/login',
    terms: '/auth/terms',
    privacy: '/auth/privacy',
  },

  dashboard: {
    root: '/dashboard',
    home: '/dashboard/home',
    management: {
      root: '/dashboard/management',
      customers: {
        root: '/dashboard/management/customers',
        list: '/dashboard/management/customers/list',
        view: (customerId: string) => `/dashboard/management/customers/${customerId}`,
      },
    },
    apps: {
      root: '/dashboard/apps',
      marketplace: '/dashboard/apps/marketplace',
      chat: '/dashboard/apps/chat',
    },
  },
};
