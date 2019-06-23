import React from 'react';
import { Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import NoRule from '../components/NoRule';
import { connect } from 'dva';

//动态加载路由
const dynamicComponent = (app, models, component, routes, isLogin, userInfo) => dynamic({
    app,
    models: () => models,
    component: () =>
        component().then(res => {
            //如果开关为fasle 证明未登录 && 没有登陆信息 则重定向到login
            if (isLogin === false) {
                if(!userInfo.id){
                    return () => <Redirect to='/login' />
                }
            }
            const Component = res.default || res;
            return props => <Component {...props} routes={routes} app={app} />
        })
});


function RouteComponent({ app, model, routes, component, isLogin, userInfo }) {
    return (
        <Route component={dynamicComponent(app, model, component, routes, isLogin, userInfo)} />
    )
};

//路由重定向
function RedirectComponent({ from, exact, routes }) {
    const redirectPath = routes.filter(item => item.redirect);
    const to = redirectPath.length > 0 ? redirectPath[0].path : routes[0].path;
    return <Redirect from={from} exact={exact} to={to} />
};

//路由匹配不上
function NoMatch({ status, desc }) {
    return <Route render={props => <NoRule {...props} status={status} desc={desc} />} />
}

export { RedirectComponent, NoMatch };
export default connect(({global}) => ({userInfo: global.userInfo}))(RouteComponent);