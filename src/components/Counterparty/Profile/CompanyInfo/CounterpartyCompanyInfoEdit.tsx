import React, {useState} from "react";
import {Typography, Row, Col, theme, Divider, Flex, Input, DatePicker, Radio, Dropdown, Button, Space, Checkbox  } from "antd";
import type { RadioChangeEvent } from 'antd';
import dayjs from 'dayjs';
import type { DatePickerProps } from 'antd';
import type { GetProp } from 'antd';
// import { DownOutlined } from "@ant-design/icons";

const{Text} = Typography;

const CompanyInfoEdit = () => {

  const [bankruptcyValue, setBankruptcyValue] = useState(1);
  const [flagCarriervalue, setFlagCarriervalue] = useState(1);

  const companyInfo = [
    {
      label: "Legal Name",
      value: "Cathay Pacific Airways Limited",
      typeOf: "string",
    },
    {
      label: "Common Name",
      value: "Cathay Pacific",
      typeOf: "string",
    },
    {
      label: "Airline Group",
      value: "Cathay Pacific",
      typeOf: "string",
    },
    {
      label: "Lessee Group",
      value: "Cathay Pacific",
      typeOf: "string",
    },
    {
      label: "Cirium Name",
      value: "Cathay Pacific",
      typeOf: "string",
    },
    {
      label: "Trading Name",
      value: "Cathay Pacific",
      typeOf: "string",
    },
    {
      label: "Date of Incorporation",
      value: "24 Sep 1946",
      typeOf: "date",
    },
    {
      label: "Date of Operations",
      value: "24 Sep 1946",
      typeOf: "date",
    },
    {
      label: "Status",
      value: "Listed",
      typeOf: "dropdown"
    },
    {
      label: "Airline Tier",
      value: "No Go",
      typeOf: "dropdown"
    },
    {
      label: "Market Capitalisation (eqUS$’m)",
      value: "7,270",
      typeOf: "string",
    },
    {
      label: "Market Capitalisation as at",
      value: "28 Jul 2023",
      typeOf: "date",
    },
    {
      label: "Past Bankruptcy/ Restructuring",
      value: "No",
      typeOf: "radio",
    },
    {
      label: "Date of Relationship Commencement",
      value: "28 Jul 2023",
      typeOf: "date",
    },

  ];

  const companyLeaseInfo = [
    {
      label: "Select Relationship",
      values: [
        {
          relation: "Lessee",
          value: "Yes"
        },
        {
          relation: "Indicative",
          value: "No"
        },
        {
          relation: "Guarantor",
          value: "Yes"
        },
      ],
      typeOf: "checkbox",
    },
    {
      label: "Portofolio Type",
      value: "Managed",
      typeOf: "dropdown",
    },
    {
      label: "Airline Type",
      value: "FSC",
      typeOf: "dropdown"
    },
    {
      label: "Lessee Type",
      value: "Airline",
      typeOf: "dropdown"
    },
    {
      label: "Flag Carrier",
      value: "Yes",
      typeOf: "radio",
    },
    {
      label: "ICAO Code",
      value: "CPA",
      typeOf: "string",
    },
    {
      label: "KYC Issues",
      value: "No"
    },
    {
      label: "Date of Last KYC",
      value: "31 Jul 2023"
    },
  ]

  const dateFormat = 'DD MMM YYYY';

  const customFormat: DatePickerProps['format'] = (value) =>
    value ? value.format(dateFormat) : '';

  const editBankruptcyValue = (e: RadioChangeEvent) => {
    setBankruptcyValue(e.target.value);
  };

  const editflagCarrierValue = (e: RadioChangeEvent) => {
    setFlagCarriervalue(e.target.value);
  };

  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
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

    <Row style={{padding: padding}}>
      {companyInfo.map((el) => {
        return (
          <Col span={12} style={{marginBottom: marginMD}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              {el.typeOf === "string" ? 
                <Input defaultValue={el.value} style={{width: "80%",fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
                : el.typeOf === "date" ? 
                <DatePicker style={{width: "80%"}} defaultValue= {dayjs(el.value, dateFormat)} format={customFormat}/>
                : el.typeOf === "radio" ? 
                <Radio.Group onChange={editBankruptcyValue} value={bankruptcyValue} style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                  <Radio value={1}>No</Radio>
                  <Radio value={2}>Yes</Radio>
                </Radio.Group>
                // : el.typeOf === "dropdown" ? 
                // <Dropdown >
                //   <Button>
                //     <Space>
                //       {el.value}
                //     <DownOutlined />
                //     </Space>
                //   </Button>
                // </Dropdown>
                : <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{el.value}</Text>
              }
            </Flex>
          </Col>
        )
      })
      }
      <Divider/>
      {companyLeaseInfo.map((el) => {
        return (
          <Col span={12} style={{marginBottom: marginMD}}>
            <Flex vertical justify="space-between">
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              {el.typeOf === "checkbox" ? 
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="A">Lessee</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B">Indicative</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C">Gaurantor</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                : el.typeOf === "string" ? 
                <Input value={el.value} style={{width: "80%",fontSize: fontSize, lineHeight: lineHeightSM, color:colorText}}/>
                : el.typeOf === "date" ? 
                <DatePicker style={{width: "80%"}} defaultValue= {dayjs(el.value, dateFormat)} format={customFormat}/>
                : el.typeOf === "radio" ? 
                <Radio.Group onChange={editflagCarrierValue} value={flagCarriervalue} style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                  <Radio value={1}>No</Radio>
                  <Radio value={2}>Yes</Radio>
                </Radio.Group>
                // : el.typeOf === "dropdown" ? 
                // <Dropdown >
                //   <Button>
                //     <Space>
                //       {el.value}
                //     <DownOutlined />
                //     </Space>
                //   </Button>
                // </Dropdown>
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

export default CompanyInfoEdit;