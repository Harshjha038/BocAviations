import React, {useState} from "react";
import {Typography, Row, Col, theme, Flex, Input, Radio } from "antd";
import type { RadioChangeEvent } from 'antd';

const{Text} = Typography;


const MarketInfoEdit = () => {
  
  const [accessionValue, setAccessionValue] = useState(1);

  const marketInfo = [
    {
      label: "Country of Incorporation",
      value: "Hong Kong",
      typeOf: "string",
    },
    {
      label: "Region",
      value: "Greater China (China)",
      typeOf: "string",
    },
    {
      label: "Sub Region",
      value: "Greater China",
      typeOf: "string",
    },
    {
      label: "Cape Town Accession",
      value: "No",
      typeOf: "radio",
    },
    {
      label: "S&P Rating",
      value: "BB-, Stable",
      typeOf: "string",
    },
    {
      label: "Moody’s Rating",
      value: "Baa3, Negative",
      typeOf: "string",
    },
    {
      label: "Fitch Rating",
      value: "BB-, Stable",
      typeOf: "string",
    }
  ];

  const editAccessionValue = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setAccessionValue(e.target.value);
  };

  const {
    token: {
      marginMD,
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding,
      colorText
    },
  } = theme.useToken();

  return (
    <Row  style={{padding: padding}}>
      {marketInfo.map((el) => {
        return (
          <Col span={12} style={{marginBottom: marginMD}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              {el.typeOf === "string" ? 
                <Input defaultValue={el.value} style={{width: "80%",fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
                : el.typeOf === "radio" ? 
                <Radio.Group onChange={editAccessionValue} value={accessionValue} style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                  <Radio value={1}>No</Radio>
                  <Radio value={2}>Yes</Radio>
                </Radio.Group>
                : <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{el.value}</Text>
              }
            </Flex>
          </Col>
        )
      })
      }
    </Row>
  )
};

export default MarketInfoEdit;