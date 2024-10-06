import React from "react";
import { Card, Layout, Button, Row, Col, Typography, theme } from "antd";
import "antd/dist/reset.css";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../utilities/authConfig";
import "./LoginPage.css";
import { UnauthenticatedTemplate } from "@azure/msal-react";

const { Content } = Layout;
const { Text } = Typography;

export function LoginPage() {
  const {
    token: { fontSize, paddingXS, colorBgLayout, padding },
  } = theme.useToken();

  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <>
      <UnauthenticatedTemplate>
        <Layout
          className="layout"
          style={{ backgroundColor: colorBgLayout, padding: padding }}
        >
          <Content className="content">
            <Card className="card" style={{ padding: padding }}>
              <Row
                style={{ paddingBottom: paddingXS }}
                align="middle"
                gutter={16}
              >
                <Col>
                  <img src="/logo2588.png" alt="Logo" />
                </Col>
                <Col>
                  <Text style={{ fontSize: fontSize }} strong>
                    BOC Aviation | CRMS
                  </Text>
                </Col>
              </Row>
              <Button type="primary" onClick={() => handleLogin("redirect")}>
                Login with Azure AD SSO
              </Button>
            </Card>
          </Content>
        </Layout>
      </UnauthenticatedTemplate>
    </>
  );
}
