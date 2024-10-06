import { ThemeConfig } from "antd/es/config-provider/context";

const crmsThemeConfig: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: "#90192E",
        colorInfo: "#90192E",
        colorPrimaryText: "#A11C34",
        fontSizeHeading3: 24,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        colorBorder: "rgba(225, 226, 226, 1)",
    },
    components: {
        Layout: {
            "headerBg": "#FFFFFF",
            "headerColor": "",
            "headerPadding": "0 24px",
            "headerHeight": "60px"
        },
        Menu: {
            "itemBorderRadius": 0,
            "subMenuItemBorderRadius": 0,
            "itemSelectedBg": "#FBEAED",
        },
        Button: {
            "primaryShadow": "0",
            "borderRadius": 2
        },
        Input: {
            "borderRadius": 2
        },
        Upload: {
            "borderRadiusLG": 2
        }
    }
};
export default crmsThemeConfig;
