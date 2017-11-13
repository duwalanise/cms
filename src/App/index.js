import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import SidebarMenu from './Component/SidebarMenu';
import NavHeader from './Component/NavHeader';
import Main from './Component/main';
import Login from './Component/Authentication';

const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    if (!this.props.isAuthenticated) {
      return <Login />;
    }
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <SidebarMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            <NavHeader />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Main />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  store => ({ isAuthenticated: store.currentUser.isAuthenticated })
  // dispatch => bindActionCreators({ fetchStaffList, addStaff, updateStaff, removeStaff }, dispatch)
)(App);
