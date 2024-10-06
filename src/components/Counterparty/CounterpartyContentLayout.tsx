import React from "react";
import { Layout, theme } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { CounterpartyHeader } from "./CounterpartyHeader";
import { CounterpartyHeaderEdit } from "./CounterpartyHeaderEdit";
import Profile from "./Profile/Profile";

const { Content } = Layout;

interface ContentLayoutProps {
  pageTitle: string;
  breadcrumbData: BreadcrumbItemType[];
  children: React.ReactNode;
  tabsItems: any[];
  activeTabKey: string;
  setActiveTabKey: (key: string) => void;
  extraTabContent?: any;
  status:
    | "in-progress"
    | "under-first-review"
    | "under-second-review"
    | "completed";
  onSeekApproval: () => void;
  onSeekSecondApproval: () => void;
  onGoBack: () => void;
  showCustomHeader: boolean;
  handleGenerateCreditReport: () => void;
  handleDownloadCreditReport: () => void;
  onStartEditing: () => void;
  handleRetractSubmission: () => void;
  handleEditFinancials: () => void;
  isEditCounterpartyProfile: boolean;
}

const CounterpartyContentLayout = (props: ContentLayoutProps) => {
  const {
    token: { padding, colorBgContainer },
  } = theme.useToken();

  const shouldAddBackground =
    React.isValidElement(props.children) &&
    (props.children as React.ReactElement).type === Profile;
  console.log("shouldAddBackground", shouldAddBackground);
  return (
    <Layout>
      {props.showCustomHeader ? (
        <CounterpartyHeaderEdit {...props} />
      ) : (
        <CounterpartyHeader {...props} />
      )}

      <Layout style={{ padding: padding }}>
        <Content
          style={{
            padding: shouldAddBackground ? 0 : padding,
            background: shouldAddBackground ? "transparent" : colorBgContainer,
            overflow: "auto",
          }}
        >
          {React.cloneElement(props.children as React.ReactElement<any>, {
            handleEditFinancials: props.handleEditFinancials,
            editCounterpartyProfile: props.isEditCounterpartyProfile
          })}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CounterpartyContentLayout;
