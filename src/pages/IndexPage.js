import React from 'react';
import { connect } from 'dva';
import { Switch } from 'dva/router';
import { Layout } from 'antd';
import RouteComponent, { RedirectComponent, NoMatch } from '../utils/routeComponent';
import NavBar from '../components/NavBar';
import styles from './indexPage.scss';

const { Header, Content } = Layout;

function IndexPage(props) {
  const { routes, app } = props;
  return (
    <Layout>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一级路由 */}
        <Switch>
          {
            routes.map((route, index) => {
              return <RouteComponent key={index} {...route} app={app}/>
            })
          }
          <RedirectComponent exact={true} from='/' routes={routes} />
          <NoMatch status={404} desc='您访问的地址不存在，请重新访问正确的地址'/>
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
