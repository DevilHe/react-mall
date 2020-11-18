import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';

const menu = [
  {
    title: '首页',
    link: '/',
    icon: ''
  },
  {
    title: '购物车',
    link: '/cart',
    icon: ''
  },
  {
    title: '订单列表',
    link: '/olist',
    icon: ''
  },
  {
    title: '我的',
    link: '/user',
    icon: ''
  },
]

interface BottomNavProps {
  pathname: string;
}

export default class BottomNav extends Component<BottomNavProps> {
  render() {
    const { pathname } = this.props;
    return (
      <TabBar>
        {menu.map(({ title, link, icon }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={'iconfont icon-' + icon}></span>}
            selected={pathname === link}
            onPress={() => {
              history.push(link);
            }}
          />
        ))}
      </TabBar>
    )
  }
}