import React, { useState } from "react";
import {Typography, Row, Col, theme, Divider, Flex, Input, Radio } from "antd";
import type { RadioChangeEvent } from 'antd';

const{Text} = Typography;

const RatingInfoEdit = () => {

  const [leaseRescheduling, setLeaseRescheduling] = useState(1)

  const ratingInfoTop = [
    {
      label: "Annual Review Rating",
      value: "3"
    },
    {
      label: "Indicative Rating",
      value: "3"
    },
    {
      label: "Outlook (next 12 months)",
      value: "Positive",
      typeOf: "string"
    },
    {
      label: "S&P Rating ",
      value: "AA+, Stable",
      typeOf: "string"
    },
    {
      label: "Moody’s Rating",
      value: "Aa3, Negative",
      typeOf: "string"
    },
    {
      label: "Fitch Rating",
      value: "AA+, Negative",
      typeOf: "string"
    }
  ];

  const ratingInfoBottom = [
    {
      label: "Payment Record",
      value: "Good",
      typeOf: "string"
    },
    {
      label: "Lease Rescheduling (past/current)",
      value: "Yes",
      typeOf: "radio"
    },
    {
      label: "Risk PICr",
      value: "Moderate",
      typeOf: "string"
    }
  ]

  const editLeaseRescheduling = (e: RadioChangeEvent) => {
    setLeaseRescheduling(e.target.value);
  };

  const {
    token: {
      margin,
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding,
      colorText
    },
  } = theme.useToken();

  return (
    <Row style={{padding: padding}}>
      {ratingInfoTop.map((el) => {
        return (
          <Col span={12} style={{marginBottom: margin}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              {el.typeOf === "string" ? 
                <Input value={el.value} style={{width: "80%",fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
                :
                <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{el.value}</Text>
              }
            </Flex>
          </Col>
        )
      })
      }
      <Divider/>
      {ratingInfoBottom.map((el) => {
        return (
          <Col span={12} style={{marginBottom: margin}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              {el.typeOf === "string" ? 
                <Input value={el.value} style={{width: "80%",fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
                : el.typeOf === "radio" ? 
                <Radio.Group onChange={editLeaseRescheduling} value={leaseRescheduling} style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                  <Radio value={1}>No</Radio>
                  <Radio value={2}>Yes</Radio>
                </Radio.Group>
                :
                <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{el.value}</Text>
              }
            </Flex>
          </Col>
        )
      })
      }
    </Row>
  )
};

export default RatingInfoEdit;