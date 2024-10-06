import { Skeleton, Layout, theme } from "antd";

const { Content } = Layout;
export const GenericLoader = () => {
    const {
        token: { colorBgContainer, paddingXL },
    } = theme.useToken();
    return (
        <Content style={{ background: colorBgContainer, padding: paddingXL, height: "100%" }}>
            <Skeleton active />
        </Content>
    )
};
