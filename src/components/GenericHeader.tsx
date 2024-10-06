import React from "react";
import { Layout, Breadcrumb, Typography, theme, Button, Flex } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

const { Title, Text } = Typography;
const { Header } = Layout;

interface GenericHeaderProps {
    pageTitle: string;
    breadcrumbData: BreadcrumbItemType[];
    onGoBack?: () => void;
    onSave?: () => void;
    children?: React.ReactNode;
}

export const GenericHeader: React.FC<GenericHeaderProps> = ({
    pageTitle,
    breadcrumbData,
    onGoBack,
    onSave
}) => {
    console.log(onSave)
    const {
        token: {
            marginXS,
            padding,
            colorBgContainer,
            fontSizeSM,
            colorTextTertiary
        },
    } = theme.useToken();
    return (
        <Header
            style={{
                padding: padding,
                background: colorBgContainer,
                minHeight: "auto",
                height: "auto",
                lineHeight: "normal",
            }}
        >
            <Breadcrumb items={breadcrumbData} style={{ marginBottom: marginXS }} />
            <Flex align="center" justify="space-between">
                <Flex align="center">
                    {onGoBack && (
                        <ArrowLeftOutlined
                            style={{ marginRight: "14px", cursor: "pointer" }}
                            onClick={onGoBack}
                        />
                    )}
                    {pageTitle && (
                        <Title level={5} style={{ margin: "0" }}>
                            {pageTitle}
                        </Title>
                    )}
                </Flex>
                {onSave && (
                    <Flex gap={16} align="center">
                        <Text style={{ fontSize: fontSizeSM, color: colorTextTertiary }}>Auto-saved just now</Text>
                        <Button type="default" onClick={onSave}>
                            Save and exit
                        </Button>
                    </Flex>
                )}
            </Flex>

        </Header>
    );
};
