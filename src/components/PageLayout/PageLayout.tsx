/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { UserContext } from "../AuthenticateMemberTemplate";
import React, { useState, useContext } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { UserMenuDropdown } from "../UserMenuDropdown";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import "./PageLayout.css";
import {
  HomeOutlined,
  SendOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  TeamOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  MenuProps,
  theme,
  Divider,
  Space,
  Typography,
  Button,
} from "antd";
import { NavLink } from "react-router-dom";
import SearchInput from "../SearchInput";

const { Header, Sider } = Layout;
const { Text } = Typography;

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props: {
  children:
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | null
  | undefined;
}) => {
  const { userRole } = useContext(UserContext);
  console.log('pagelayout', userRole)
  const navigationMenuData: MenuProps["items"] = [
    {
      key: "home",
      label: <NavLink to="/">Home</NavLink>,
      icon: <HomeOutlined />,
    },
    {
      key: "counterparties",
      label: <NavLink to="/counterparty/FB8A8B67-B96B-EF11-BDFD-000D3AC8A3EA/profile">Counterparties</NavLink>,
      icon: <SendOutlined />,
    },
    {
      key: "watchlist",
      label: <NavLink to="/empty_page">Watchlist</NavLink>,
      icon: <EyeOutlined />,
    },
    ...(userRole === "ADMIN" || userRole === "CONTRIBUTOR"
      ? [
        {
          key: "peerComparison",
          label: <NavLink to="/empty_page">Peer comparison</NavLink>,
          icon: <TeamOutlined />,
        },
      ]
      : []),
    ...(userRole === "ADMIN"
      ? [
        {
          key: "adminSettings",
          icon: <SettingOutlined />,
          label: "Admin Settings",
          children: [
            {
              key: "creditRatingModels",
              label: <NavLink to="/empty_page">Credit rating models</NavLink>,
            },
            {
              key: "userManagement",
              label: <NavLink to="/empty_page">User management</NavLink>,
            },
            {
              key: "guidelines",
              label: <NavLink to="/empty_page">Guidelines</NavLink>,
            },
            {
              key: "massUpdate",
              label: <NavLink to="/empty_page">Mass update</NavLink>,
            },
          ],
        },
      ]
      : []), // If not ADMIN, no Admin Settings menu will be shown,
    // {
    //   key: "testReport",
    //   label: <NavLink to="/test_report">Test Report</NavLink>,
    //   icon: <AreaChartOutlined />,
    // },
    // {
    //   key: "testOrgChart",
    //   label: <NavLink to="/test_orgchart">Test Org Chart</NavLink>,
    //   icon: <AreaChartOutlined />,
    // },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const isAuthenticated = useIsAuthenticated();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  const {
    token: {
      colorBgContainer,
      boxShadow,
      paddingMD,
      margin,
      borderRadiusSM,
      colorBorder,
    },
  } = theme.useToken();

  return (
    <Layout className="layout-container">
      <Header className="header-container">
        <Space>
          <img src="/logo2588.png" alt="Logo" />
          <Text strong className="header-text">
            BOC Aviation
          </Text>
          <Text className="subheading-text">|</Text>
          <Text className="subheading-text">
            Credit Rating Management System
          </Text>
        </Space>

        <Space size={"middle"}>
          <div className="search-container">
            <SearchInput
              placeholder="search airline"
              onSearch={onSearch}
              allowClear
              size='middle'
              maxLength={20}
              style={{ maxWidth: "300px" }}
            />

          </div>
          {(userRole === "CONTRIBUTOR" || userRole === "ADMIN") && (
            <NavLink to="/tasklist">
              <Button
                type="text"
                icon={<BellOutlined />}
                className="notification-button"
                style={{
                  borderColor: colorBorder,
                }}
              />
            </NavLink>
          )}
          {isAuthenticated ? <UserMenuDropdown /> : <LoginPage />}
        </Space>
      </Header>

      <Divider style={{ margin: 0 }} />
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          collapsedWidth={48}
          width={220}
          style={{
            background: colorBgContainer,
            minHeight: "100%",
            boxShadow: boxShadow,
          }}
        >
          <Button
            block
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            className="toggle-button"
            style={{
              paddingLeft: collapsed ? 0 : paddingMD,
              alignSelf: "center",
              display: "flex",
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={navigationMenuData}
          />
        </Sider>
        {props.children}
      </Layout>
    </Layout>
  );
};
