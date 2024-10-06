import { useMsal } from "@azure/msal-react";
import { Button, Layout, Row, theme, Alert, Space } from "antd";
const { Content } = Layout;

const PageNotAccessible = () => {
  const { instance } = useMsal();
  const {
    token: { colorBgLayout, padding },
  } = theme.useToken();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  return (
    <>
      <Layout
        className="layout"
        style={{ backgroundColor: colorBgLayout, padding: padding }}
      >
        <Content className="content" style={{ maxWidth: "800px" }}>
          <Row
            align="middle"
            gutter={16}
          >
            <Alert
              message="Access denied"
              description="You do not have access to CRMS or you may not have the necessary permissions to access this page. Please contact your administrator if you believe this is an error or if you need assistance."
              type="error"
              showIcon
              action={
                <Space direction="vertical">
                  <Button size="small">
                    <a href="mailto:boca_crms@bocaviation.com" target="_blank">Contact admin</a>
                  </Button>
                  <Button size="small" onClick={handleLogout}>
                    Logout and retry
                  </Button>
                </Space>
              }
            />
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default PageNotAccessible;
