import React from 'react';
import { Router, Switch } from 'dva/router';
import RouteComponent from './utils/routeComponent';

let isLogin = false;

const RouteConfig = [
  {
    path: '/',
    component: () => import('./pages/IndexPage'),
    model: [],
    routes: [
      {
        path: '/home',
        component: () => import('./pages/Home/routes'),
        redirect: true,
        model: [import('./pages/Home/models')],
        isLogin
      },
      {
        path: '/menus',
        component: () => import('./pages/Menus/routes'),
        model: [],
        isLogin
      },
      {
        path: '/about',
        component: () => import('./pages/About/routes'),
        model: [],
        isLogin
      },
      {
        path: '/admin',
        component: () => import('./pages/Admin/routes'),
        model: [],
        isLogin
      },
      {
        path: '/login',
        component: () => import('./pages/Login/routes'),
        model: []
      },
      {
        path: '/register',
        component: () => import('./pages/Register/routes'),
        model: [],
      }
    ]
  }
];

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          RouteConfig.map((route, index) => {
            return <RouteComponent key={index} {...route} app={app}/>
          })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
