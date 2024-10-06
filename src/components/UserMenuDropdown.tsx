import React from "react";
import { useMsal } from "@azure/msal-react";
import { CaretDownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, theme } from "antd";
import { NavLink } from "react-router-dom";
import WelcomeName from "./WelcomeName";
/**
 * Renders a sign-out button
 */
export const UserMenuDropdown = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <NavLink to="/manage_profile">Manage profile</NavLink>,
    },
    {
      key: "2",
      label: (
        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </div>
      ),
    },
  ];

  const {
    token: { colorBgSpotlight, fontSizeSM },
  } = theme.useToken();

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <WelcomeName />
          <CaretDownOutlined
            style={{ color: colorBgSpotlight, fontSize: fontSizeSM }}
          />
        </Space>
      </a>
    </Dropdown>
  );
};
