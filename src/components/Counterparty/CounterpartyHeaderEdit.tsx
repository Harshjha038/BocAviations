import React from "react";
import { Layout, Breadcrumb, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

const { Title } = Typography;
const { Header } = Layout;

interface CounterpartyHeaderEditProps {
  pageTitle: string;
  breadcrumbData: BreadcrumbItemType[];
  onGoBack: () => void;
  children?: React.ReactNode;
}

export const CounterpartyHeaderEdit: React.FC<CounterpartyHeaderEditProps> = ({
  pageTitle,
  breadcrumbData,
  onGoBack,
  children,
}) => {
  return (
    <Header
      style={{
        padding: "16px",
        background: "#fff",
        minHeight: "auto",
        height: "auto",
        lineHeight: "normal",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Breadcrumb items={breadcrumbData} style={{ marginBottom: "16px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Space between title and children (e.g., Tabs)
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowLeftOutlined
            style={{ marginRight: "14px" }}
            onClick={onGoBack}
          />
          {pageTitle && (
            <Title level={5} style={{ margin: "0" }}>
              {pageTitle}
            </Title>
          )}
        </div>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          {children}
        </div> */}
      </div>
    </Header>
  );
};
