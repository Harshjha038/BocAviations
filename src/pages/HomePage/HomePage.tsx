import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import "reactflow/dist/style.css";
import BackgroundImage from "src/assets/home-background.jpeg";
import "./HomePage.css";
import SearchInput from "src/components/SearchInput";
import { Flex, theme, Typography } from "antd";
import { LoginPage } from "../LoginPage/LoginPage";
import HomeCounterpartyCardsSection from "src/components/HomeCounterpartyCardsSection/HomeCounterpartyCardsSection";

const { Title } = Typography;

export function HomePage() {
  const {
    token: {
      paddingXXS,
      padding,
      colorPrimaryText,
      fontSizeHeading3,
      colorBorder,
    },
  } = theme.useToken();
  const handleSearch = (e: any) => {
    console.log("e", e);
  };
  const titleStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    fontSize: fontSizeHeading3,
    fontWeight: 500,
    color: colorPrimaryText,
  };

  return (
    <>
      <AuthenticatedTemplate>
        <div className="full-page-container">
          <img
            src={BackgroundImage}
            alt="Background"
            className="background-image"
          />
          <div className="home-banner-overlay">
            <h1>Credit Rating Management System</h1>
          </div>

          <Flex justify="center">
            <SearchInput
              placeholder="type here"
              buttonText="Search counterparties"
              onSearch={handleSearch}
              buttonStyle={{
                borderRadius: 0,
              }}
              className="home-search-input"
              style={searchInputStyle}
            />
          </Flex>
          <div className="container">
            <div
              style={{
                marginTop: "50px",
                padding: paddingXXS,
                paddingLeft: padding,
                borderLeft: "4px solid",
                borderLeftColor: colorBorder,
              }}
            >
              <Title level={2} style={titleStyle} type="success">
                Starred Counterparties
              </Title>
            </div>
            <HomeCounterpartyCardsSection />
          </div>
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        Please sign-in to see your profile information
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
}

const searchInputStyle: React.CSSProperties = {
  maxWidth: "800px",
  position: "relative",
  marginTop: "-25px",
  zIndex: 10,
  borderRadius: 0,
};
