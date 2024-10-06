import React from "react";
import { Row, Col, Typography, theme, Flex } from "antd";
import { ColorDot } from "../ColorDot";

const { Text } = Typography;

interface CounterpartyHeaderRatingProps {
  itemKey: string;
  count: string;
  heading: string;
  date: string;
  status: "true" | "false";
}

export const CounterpartyHeaderRating: React.FC<
  CounterpartyHeaderRatingProps
> = ({ itemKey, count, heading, date, status }) => {
  const {
    token: { paddingXS, fontSizeSM, colorBgMask, fontSize },
  } = theme.useToken();

  return (
    <div
      style={{
        paddingLeft: paddingXS,
        paddingRight: paddingXS,
      }}
    >
      <Row>
        <Flex style={{ display: "flex", alignItems: "center" }}>
          <ColorDot score={Number(count)} />
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
        </Flex>
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
