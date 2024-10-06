import React from "react";
import { Card, Typography, Space, theme, Flex } from "antd";
import "./HomeCounterpartyCard.css";
import { Rate } from "antd";
const { Title, Text } = Typography;

export interface CounterpartyCardProps {
  title: string;
  country: string;
  tier: string;
  annualValue: string;
  annualDate: string;
  annualDateValue: string;
  indicativeValue: string;
  indicativeDate: string;
  indicativeDateValue: string;
  className?: string;
}

const CounterpartyCard: React.FC<CounterpartyCardProps> = ({
  title,
  country,
  tier,
  annualValue,
  annualDate,
  annualDateValue,
  indicativeValue,
  indicativeDate,
  indicativeDateValue,
  className,
}) => {
  const {
    token: {
      colorTextTertiary,
      colorPrimaryText,
      colorBgLayout,
      fontSize,
      boxShadow,
      marginXS,
      margin,
      fontSizeLG,
    },
  } = theme.useToken();

  return (
    <Card
      className={`counterparty-card ${className || ""}`}
      style={{
        boxShadow: boxShadow,
      }}
      cover={
        <div
          className="counterparty-card-header"
          style={{
            marginLeft: margin,
            marginRight: margin,
            marginTop: marginXS,
            marginBottom: marginXS,
          }}
        >
          <Flex align="center" justify="space-between">
            <Title
              level={4}
              style={{ color: colorPrimaryText, fontSize: fontSizeLG }}
              className="counterparty-card-title"
            >
              {title}
            </Title>
            <Rate defaultValue={1} count={1} />
          </Flex>

          <Text style={{ color: "rgba(0, 0, 0, 0.75)" }}>
            {country} • Tier {tier}
          </Text>
        </div>
      }
    >
      <div
        className="counterparty-card-body"
        style={{ backgroundColor: colorBgLayout }}
      >
        <Flex style={{ flexDirection: "column" }}>
          <Space>
            <Title
              style={{
                fontSize: fontSize,
                fontWeight: "400",
              }}
              level={5}
            >
              Annual:
            </Title>
            <Title
              style={{
                fontSize: fontSize,
                fontWeight: "700",
              }}
              level={5}
            >
              {annualValue}
            </Title>
          </Space>
          <Space>
            <Text style={{ color: colorTextTertiary, fontWeight: 500 }}>
              {annualDate}
            </Text>
            <Text style={{ color: colorTextTertiary, fontWeight: 500 }}>
              ({annualDateValue})
            </Text>
          </Space>
        </Flex>
        <Flex style={{ flexDirection: "column", marginTop: "12px" }}>
          <Space>
            <Title
              style={{
                fontSize: fontSize,
                fontWeight: "400",
              }}
              level={5}
            >
              Indicative:
            </Title>
            <Title
              style={{
                fontSize: fontSize,
                fontWeight: "700",
              }}
              level={5}
            >
              {indicativeValue}
            </Title>
          </Space>
          <Space>
            <Text style={{ color: colorTextTertiary, fontWeight: 500 }}>
              {indicativeDate}
            </Text>
            <Text style={{ color: colorTextTertiary, fontWeight: 500 }}>
              ({indicativeDateValue})
            </Text>
          </Space>
        </Flex>
      </div>
    </Card>
  );
};

export default CounterpartyCard;
