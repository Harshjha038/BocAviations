import React, { useState } from "react";
import {
  Breadcrumb,
  Layout,
  theme,
  Typography,
  Space,
  Button,
  Drawer,
  Timeline,
} from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Tabs, Dropdown, Divider, Flex } from "antd";
import {
  ArrowLeftOutlined,
  EllipsisOutlined,
  PaperClipOutlined,
  CheckSquareFilled,
  CloseSquareFilled,
} from "@ant-design/icons";
import { CounterpartyHeaderRating } from "./CounterpartyHeaderRating";
import { LinkButton } from "../LinkButton";
import type { MenuProps } from "antd";
import { workflowTimeline } from "../../utilities/contants";

const { Text } = Typography;
const { Header } = Layout;
const { Title } = Typography;

interface CounterpartyHeaderProps {
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
  handleGenerateCreditReport: () => void;
  handleDownloadCreditReport: () => void;
  onStartEditing: () => void;
  handleRetractSubmission: () => void;
}

export const CounterpartyHeader = (props: CounterpartyHeaderProps) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={() => {}} style={{ cursor: "pointer" }}>
          Rating
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={() => {}} style={{ cursor: "pointer" }}>
          General update
        </div>
      ),
    },
  ];
  const {
    token: {
      colorBgContainer,
      padding,
      colorBorder,
      borderRadiusSM,
      colorPrimary,
      fontSize,
      colorText,
      fontSizeHeading3
    },
  } = theme.useToken();

  let statusText;
  switch (props.status) {
    case "in-progress":
      statusText = "In progress";
      break;
    case "under-first-review":
      statusText = "Under review";
      break;
    case "under-second-review":
      statusText = "Under 2nd review";
      break;
    case "completed":
      statusText = "Completed";
      break;
    default:
      statusText = "Unknown status";
  }
  console.log("props.status===", props.status);
  const sortedWorkflowTimeline = workflowTimeline.sort((a, b) => {
    return (
      new Date(`${a.date} ${a.time}`).getTime() -
      new Date(`${b.date} ${b.time}`).getTime()
    );
  });

  return (
    <Header
      style={{
        padding: padding,
        paddingBottom: 0,
        background: colorBgContainer,
        minHeight: "auto",
        height: "auto",
        lineHeight: "normal",
      }}
    >
      <Breadcrumb items={props.breadcrumbData} />
      <Flex align="center" gap={4}>
        {props.pageTitle && (
          <Title level={5} style={{ margin: "0" }}>
            {props.pageTitle}
          </Title>
        )}

        <Space style={{ flexGrow: 1 }} size={1}>
          <CounterpartyHeaderRating
            itemKey="1"
            count={"3.2"}
            heading={"Annual review rating"}
            date={"23/03/2024"}
            status={"true"}
          />
          <Divider
            type="vertical"
            style={{ height: "32px", backgroundColor: colorBorder }}
          />
          <CounterpartyHeaderRating
            itemKey="2"
            count={"3.2"}
            heading={"Indicative rating"}
            date={"23/03/2024"}
            status={"true"}
          />
          <Divider
            type="vertical"
            style={{ height: "32px", backgroundColor: colorBorder }}
          />
          <CounterpartyHeaderRating
            itemKey="3"
            count={"No issues"}
            heading={"KYC check"}
            date={"23/03/2024"}
            status={"false"}
          />
        </Space>

        <Flex align="flex-end" vertical gap={4}>
          <Space>
            <Text strong>Rating: {statusText}</Text>
            <Divider
              type="vertical"
              style={{ height: "20px", backgroundColor: colorBorder }}
            />
            <LinkButton text="View workflow" onClick={showDrawer} />
          </Space>

          {props.status === "in-progress" && (
            <Space>
              <Button type="default" onClick={props.handleGenerateCreditReport}>
                Generate credit report
              </Button>
              <Button type="primary" onClick={props.onSeekApproval}>
                Seek approval
              </Button>

              <Dropdown menu={{ items }}>
                <Button
                  icon={<EllipsisOutlined />}
                  onClick={() => { }}
                  style={{
                    borderColor: colorBorder,
                    borderRadius: borderRadiusSM,
                  }}
                />
              </Dropdown>
            </Space>
          )}

          {props.status === "under-first-review" && (
            <Space>
              <Button type="default" onClick={props.onSeekSecondApproval}>
                Request 2nd reviewer
              </Button>
              <CloseSquareFilled
                style={{ color: colorPrimary, fontSize: fontSizeHeading3 }}
              />
              <CheckSquareFilled
                style={{ color: colorPrimary, fontSize: fontSizeHeading3 }}
              />
            </Space>
          )}

          {props.status === "under-second-review" && (
            <Space>
              <Button type="default" onClick={props.handleRetractSubmission}>
                Retract submission
              </Button>
            </Space>
          )}

          {props.status === "completed" && <></>}
        </Flex>
      </Flex>

      <Tabs
        activeKey={props.activeTabKey}
        onChange={props.setActiveTabKey}
        tabBarStyle={{ marginBottom: 0 }}
        items={props.tabsItems.map(({ key, label }) => ({ key, label }))}
        tabBarExtraContent={
          <Button type="text" color="" onClick={() => { }}>
            {props.extraTabContent.label}
          </Button>
        }
      />

      <Drawer
        title="Workflow timeline"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Timeline>
          {sortedWorkflowTimeline.map((item, index) => (
            <Timeline.Item key={index}>
              <div>
                <Text style={{ fontSize: fontSize, color: colorText }}>
                  {item.action}
                </Text>
                <div style={{ marginTop: "4px" }}>
                  <Text style={{ fontSize: fontSize, color: colorText }}>
                    {item.date} {item.time} ({item.timezone})
                  </Text>
                </div>
                {item.attachment && (
                  <a href={`path/to/${item.attachment}`}>
                    <Button
                      icon={<PaperClipOutlined />}
                      style={{ color: colorPrimary }}
                    >
                      {item.attachment}
                    </Button>
                  </a>
                )}
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Drawer>
    </Header>
  );
};
