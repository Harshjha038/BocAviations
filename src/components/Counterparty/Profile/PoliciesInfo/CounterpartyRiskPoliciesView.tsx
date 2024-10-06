import React from "react";
import {Typography, theme, Flex } from "antd";

const{Text} = Typography;

interface PoliciesInfo {
  aircraftDepreciation?: string;
  fuelHedging?: string;
  fxHedging?: string;
  interestRateHedging?: string;
  liquidityPolicy?: string;
}

interface ProfileInfoProps {
  policiesInfo: PoliciesInfo;
}

const RiskPoliciesView : React.FC<ProfileInfoProps> = ({policiesInfo}) => {

  const policiesData = [
    {
      key: "aircraftDepreciation",
      label: "Aircraft depreciation"
    },
    {
      key: "fuelHedging",
      label: "Fuel Hedging"
    },
    {
      key: "fxHedging",
      label: "FX Hedging "
    },
    {
      key: "interestRateHedging",
      label: "Interest Rate Hedging"
    },
    {
      key: "liquidityPolicy",
      label: "Liquidity policy"
    }
  ];

  const renderValue = (key: string, additionalKey?: string) => {
    const value = policiesInfo[key as keyof PoliciesInfo];
    const additionalValue = additionalKey ? policiesInfo[additionalKey as keyof PoliciesInfo] : null;

    if (additionalValue !== null && additionalValue !== undefined) {
      return `${value}, ${additionalValue}`;
    }

    if (value === undefined || value === null) {
      return "-";
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (typeof value === "number") {
      return value;
    }
    return value;
  };

  const {
    token: {
      colorBgMask,
      fontSize,
      padding,
      lineHeightSM
    },
  } = theme.useToken();

  return (
    <Flex vertical gap={16} style={{padding: padding}}>
      {policiesData.map((el) => {
        return (
          <Flex gap={4} vertical>
            <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
            <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{renderValue(el.key)}</Text>
          </Flex>
          
        )
      })
      }
    </Flex>
  )
};

export default RiskPoliciesView;