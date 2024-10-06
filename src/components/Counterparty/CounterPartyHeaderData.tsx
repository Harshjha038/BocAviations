import React from "react";
import { Row, Col, Typography, theme } from "antd";

const { Text } = Typography;

interface CounterpartyHeaderDataProps {
  itemKey: string;
  count: string;
  heading: string;
  date: string;
  status: "true" | "false";
}

export const CounterpartyHeaderData: React.FC<CounterpartyHeaderDataProps> = ({
  itemKey,
  count,
  heading,
  date,
  status,
}) => {
  const {
    token: {
      paddingXS,
      colorSuccess,
      colorWarning,
      fontSizeSM,
      colorBgMask,
      fontSize,
    },
  } = theme.useToken();
  const colorStatus = status === "true" ? colorSuccess : colorWarning;
  console.log("key",itemKey);
  return (
    <div
      style={{
        borderRight: itemKey !== "3" ? "1px solid #d9d9d9" : "none",
        paddingLeft: paddingXS,
        paddingRight: paddingXS,
      }}
    >
      <Row>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: colorStatus,
              marginRight: "8px",
            }}
          />
          <Text strong style={{ fontSize: fontSize }}>
            {count}
          </Text>
          <Text
            style={{
              marginLeft: "8px",
              fontSize: fontSizeSM,
              color: colorBgMask,
            }}
          >
            ({date})
          </Text>
        </div>
      </Row>
      <Row>
        <Col>
          <Text style={{ fontSize: fontSizeSM, color: colorBgMask }}>
            {heading}
          </Text>
        </Col>
      </Row>
    </div>
  );
};
