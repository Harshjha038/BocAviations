import React from "react";
import {Typography, Row, Col, theme, Divider, Flex } from "antd";

const{Text} = Typography;

const AuditInfoView = () => {

  const auditRatingInfo = [
    {
        labelHeader: "Annual review rating",
        divider: true,
        info: [
            {
                label: "Accounting Standard",
                value: "Local FRS"
            },
            {
                label: "Qualification",
                value: "Unqualified"
            },
            {
                label: "Last Accounts",
                value: "31 Dec 2023 (Audited)"
            },
            {
                label: "Date of Receipt",
                value: "31 Dec 2023"
            },
            {
                label: "Consolidation Status",
                value: "Standalone"
            },
            {
                label: "Auditors",
                value: "KPMG"
            },
            {
                label: "Reporting currency",
                value: "HKD"
            },
            {
                label: "Cashflow method",
                value: "Direct"
            }
        ]
    },
    {
        labelHeader: "Indicative rating",
        divider: false,
        info: [
            {
                label: "Accounting Standard",
                value: "Local FRS"
            },
            {
                label: "Qualification",
                value: "Unqualified"
            },
            {
                label: "Last Accounts",
                value: "31 Dec 2023 (Forecast)"
            },
            {
                label: "Date of Receipt",
                value: "31 Dec 2023"
            },
            {
                label: "Consolidation Status",
                value: "Standalone"
            },
            {
                label: "Auditors",
                value: "KPMG"
            },
            {
                label: "Reporting currency",
                value: "HKD"
            },
            {
                label: "Cashflow method",
                value: "Direct"
            }
        ]
    }
  ];

  const {
    token: {
      margin,
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding
    },
  } = theme.useToken();

  return (
    <Row  style={{padding: padding}}>
    {auditRatingInfo.map((data) => {
      return (
          <Row>
              <Col span={24} style={{marginBottom: margin, lineHeight: lineHeightSM}}>
                  <Text style={{fontSize: fontSize, fontWeight: "400", lineHeight: lineHeightSM}}>{data.labelHeader}</Text>
              </Col>
              {data.info.map((el) => {
                  return(
                      <Col span={12} style={{marginBottom: margin}}>
                          <Flex vertical>
                              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
                              <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{el.value}</Text>
                          </Flex>
                      </Col>
                  )
              })
              }
              {data.divider === true ? <Divider/> : ""}
          </Row>
      )
    })
    }
  </Row>
  )
};

export default AuditInfoView;