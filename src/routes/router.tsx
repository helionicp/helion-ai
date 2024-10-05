import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { DashboardLayout } from './../layouts/dashboard';
import { AuthLayout } from './../layouts/auth';
import { AuthGuard } from './../guards/auth-guard';
import { GuestGuard } from './../guards/guest-guard';
import { routes } from './paths';
import { LazyPage } from './lazy-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={routes.dashboard.root} replace />,
  },
  {
    path: routes.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: routes.auth.root,
        element: <Navigate to={routes.auth.login} replace />,
      },
      {
        path: routes.auth.login,
        element: LazyPage(() => import('./../pages/auth/login')),
      },
      // {
      //   path: routes.auth.resetPassword,
      //   element: LazyPage(() => import('@/pages/auth/reset-password')),
      // },
      // {
      //   path: routes.auth.terms,
      //   element: LazyPage(() => import('@/pages/auth/terms')),
      // },
      // {
      //   path: routes.auth.privacy,
      //   element: LazyPage(() => import('@/pages/auth/privacy')),
      // },
    ],
  },
  {
    path: routes.dashboard.root,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: routes.dashboard.root,
        element: <Navigate to={routes.dashboard.home} replace />,
      },
      {
        path: routes.dashboard.home,
        element: LazyPage(() => import('./../pages/dashboard/home')),
      },
      /* ---------------------------------- APPS ---------------------------------- */
      {
        path: routes.dashboard.apps.root,
        children: [
          {
            index: true,
            path: routes.dashboard.apps.root,
            element: <Navigate to={routes.dashboard.apps.marketplace} replace />,
          },
          {
            path: routes.dashboard.apps.marketplace,
            element: LazyPage(() => import('../pages/dashboard/apps/marketplace')),
          },
          {
            path: routes.dashboard.apps.chat,
            element: LazyPage(() => import('./../pages/dashboard/apps/chat')),
          },
        ],
      },
      /* ------------------------------- MANAGEMENT ------------------------------- */
      {
        path: routes.dashboard.management.root,
        children: [
          {
            index: true,
            path: routes.dashboard.management.root,
            element: <Navigate to={routes.dashboard.management.customers.root} replace />,
          },
          {
            path: routes.dashboard.management.customers.root,
            children: [
              {
                index: true,
                path: routes.dashboard.management.customers.root,
                element: <Navigate to={routes.dashboard.management.customers.list} replace />,
              },
              {
                path: routes.dashboard.management.customers.list,
                element: LazyPage(() => import('./../pages/dashboard/management/customers/list')),
              },
            ],
          },
        ],
      },

    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
