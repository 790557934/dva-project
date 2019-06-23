import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Menu } from 'antd';
import styles from './index.scss';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKeys: []
        };
    };
    componentDidMount(){
        //手动切换路由设置当前选中的keys
        this.setSelectKeys(this.props.location.pathname);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        //手动切换菜单设置当前选中的keys
        if(this.props.location.pathname !== nextProps.location.pathname){
            this.setSelectKeys(nextProps.location.pathname);
        }
    }
    //封装设置当前选中的keys
    setSelectKeys(pathName){
        const splitPath = pathName.split('/');
        const keys = splitPath.length < 2 ? 'home' : splitPath[1];
        this.setState({
            selectedKeys: [keys]
        });
    }
    render() {
        return (
            <nav className={styles.nav}>
                <Menu mode='horizontal' className={styles.menu} defaultSelectedKeys={['home']} selectedKeys={this.state.selectedKeys}>
                    <Menu.Item key={'home'}><Link to='/home'>主页</Link></Menu.Item>
                    <Menu.Item key={'menus'}><Link to='/menus'>菜单</Link></Menu.Item>
                    <Menu.Item key={'admin'}><Link to='/admin'>管理</Link></Menu.Item>
                    <Menu.Item key={'about'}><Link to='/about'>关于我们</Link></Menu.Item>
                    <Menu.Item key={'login'} className={styles.login}><Link to='/login'>登录</Link></Menu.Item>
                    <Menu.Item key={'register'} className={styles.register}><Link to='/register'>注册</Link></Menu.Item>
                </Menu>
            </nav>
        )
    }
};
