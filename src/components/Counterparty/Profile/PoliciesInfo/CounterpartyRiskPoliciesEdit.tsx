import React from "react";
import {Typography, Input, theme, Flex } from "antd";

const{Text} = Typography;
const { TextArea } = Input;

const RiskPoliciesEdit = () => {

  const policiesInfo = [
    {
      label: "Aircraft depreciation",
      value: "7%"
    },
    {
      label: "Fuel Hedging",
      value: "Yes"
    },
    {
      label: "FX Hedging ",
      value: "Yes"
    },
    {
      label: "Interest Rate Hedging",
      value: "No"
    },
    {
      label: "Liquidity policy",
      value: "Morderate"
    }
  ];
  
  const {
    token: {
      colorBgMask,
      fontSize,
      padding,
      lineHeightSM,
      colorText
    },
  } = theme.useToken();

  return (
    <Flex vertical gap={16} style={{padding: padding}}>
      {policiesInfo.map((el) => {
        return (
          <Flex gap={4} vertical>
            <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
            <TextArea autoSize defaultValue={el.value} style={{fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
          </Flex>
          
        )
      })
      }
    </Flex>
  )
};

export default RiskPoliciesEdit;