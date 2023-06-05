import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.scss'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout className='main'>
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
      >
        <div className="title">A1大数据管理平台</div>

        <div className='side-menu'>
          <Menu
            title='menu'
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '/chart/my_first_chart',
                icon: <UserOutlined />,
                label: 'HDFS',
                className: "menu-item",
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'YARN',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'MapReduce2',
              }, {
                key: '4',
                icon: <UserOutlined />,
                label: 'HDFS',
                className: "menu-item",
              },
              {
                key: '5',
                icon: <VideoCameraOutlined />,
                label: 'YARN',
              },
              {
                key: '6',
                icon: <UploadOutlined />,
                label: 'MapReduce2',
              }, {
                key: '7',
                icon: <UserOutlined />,
                label: 'HDFS',
                className: "menu-item",
              },
              {
                key: '8',
                icon: <VideoCameraOutlined />,
                label: 'YARN',
              },
              {
                key: '9',
                icon: <UploadOutlined />,
                label: 'MapReduce2',
              }, {
                key: '10',
                icon: <UserOutlined />,
                label: 'HDFS',
                className: "menu-item",
              },
              {
                key: '11',
                icon: <VideoCameraOutlined />,
                label: 'YARN',
              },
              {
                key: '12',
                icon: <UploadOutlined />,
                label: 'MapReduce2',
              },
            ]}
            onSelect={({ keyPath }: any) => {
              console.log(keyPath);
            }}
          />
        </div>

      </Sider>
      <Layout>
        <Header className='layout-head' style={{ padding: 0 }}>
          <Button
            className='menu-icon'
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined color='#fff' /> : <MenuFoldOutlined color='#fff' />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            // margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "#F1F0FF",
            height:"800px",
            overflowY:"scroll"

          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;