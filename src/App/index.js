import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon, Table } from 'antd';

import SidebarMenu from './Component/SidebarMenu';
import Main from './Component/main';
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <SidebarMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}> 
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Main />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
