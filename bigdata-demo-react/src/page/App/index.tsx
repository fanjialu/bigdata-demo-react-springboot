import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.scss'
import { Menus } from '../../constants/constants';
import { HeaderContent } from '../../components/Layout/Head';
import '../../styles/common.scss'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout className='main' hasSider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#48409E',
          },
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          className='layout-side'
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="title">{!collapsed ? "A1大数据管理平台" : " "}</div>

          <div className='side-menu'>
            <Menu
              title='menu'
              mode="inline"
              defaultSelectedKeys={['1']}
              items={Menus}
              onSelect={({ keyPath }: any) => {
                console.log(keyPath);
              }}
            />
          </div>

        </Sider>
        <Layout className='site-layout' style={!collapsed ? { marginLeft: 200 } : {}}>
          <Header className='layout-head' style={{ padding: 0 }}>
            <HeaderContent collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
          <Content  className='layout-content'
            style={{
              background: "#F1F0FF",
            }}
          >
            <Outlet />
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </Layout>
      </ConfigProvider>
    </Layout>
  );
};

export default App;