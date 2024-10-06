import React from "react";
import { Layout, theme } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { GenericHeader } from "./GenericHeader";
const { Content } = Layout;

interface GenericContentLayoutProps {
    pageTitle: string;
    breadcrumbData: BreadcrumbItemType[];
    children: React.ReactNode;
    onGoBack?: () => void;
    onSave?: () => void;
}

const GenericContentLayout = (props: GenericContentLayoutProps) => {
    const {
        token: { colorBgContainer, padding },
    } = theme.useToken();

    return (
        <Layout>
            <GenericHeader pageTitle={props.pageTitle} breadcrumbData={props.breadcrumbData} onGoBack={props.onGoBack} onSave={props.onSave}/>
            <Layout style={{ padding: padding }}>
                <Content
                    style={{
                        padding: padding,
                        background: colorBgContainer,
                        overflow: "auto",
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default GenericContentLayout;
