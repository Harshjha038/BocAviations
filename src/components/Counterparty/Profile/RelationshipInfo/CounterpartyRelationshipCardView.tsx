import React, { useState } from "react";
import {Typography, Layout, Flex, theme, Tag } from "antd";
import { LinkButton } from "src/components/LinkButton";

const{Text} = Typography;
const{Content} = Layout;

const CounterpartyRelationshipCardView = () => {

  const [openCard, setOpenCard] = useState(false)

  const relationshipsInfo = [
    {
      title: "Guaranteed Lessees",
      cardInfo: [
        {
          counterpartyName: "Cathay Dragon",
          type: "",
          ownership: "",
          remark: "Rating of Cathay Pacific as guarantor",
          tag: false
        },
      ]
    },
    {
      title: "Shareholders",
      cardInfo: [
        {
          counterpartyName: "Swire Pacific Limited",
          type: "Airline",
          ownership: "45%",
          remark: "Swire is...",
          tag: true
        },
        {
          counterpartyName: "Air China",
          type: "Airline",
          ownership: "30%",
          remark: "",
          tag: false
        },
        {
          counterpartyName: "Qatar Airways",
          type: "Airline",
          ownership: "10%",
          remark: "",
          tag: false
        },
      ]
    },
    {
      title: "Airline Subsidiaries/ Affiliates/ SPCs",
      cardInfo: [
        {
          counterpartyName: "Air China",
          type: "Airline",
          ownership: "16%",
          remark: "",
          tag: false
        },
        {
          counterpartyName: "AHK Air Hong Kong Limited",
          type: "Airline",
          ownership: "100%",
          remark: "",
          tag: false
        },
        {
          counterpartyName: "HK Express",
          type: "Airline",
          ownership: "100%",
          remark: "",
          tag: false
        },
      ]
    },
    
  ];

  const {
    token: {
      colorBgMask,
      fontSize,
      paddingSM,
      paddingLG,
      boxShadow,
      colorText,
      borderRadiusXS,
      colorPrimary,
      lineHeightSM,
      marginXS,
      padding
    },
  } = theme.useToken();

  const open = () => {
    setOpenCard(true)
  }

  return (
    <Flex vertical gap={32}>
      {relationshipsInfo.map((data) => {
        return(
          <Flex vertical gap={8}>
            <Text style={{fontSize: fontSize, fontWeight: "400", lineHeight: lineHeightSM}}>{data.title}</Text>
            {data.cardInfo.map((el) => {
              return(
                <Content style={{paddingTop: paddingSM,
                  paddingBottom: paddingSM,
                  paddingLeft: paddingLG,
                  paddingRight: paddingLG,
                  boxShadow: boxShadow}}>
                  <Flex align="center" justify="space-between">
                    <LinkButton text={el.counterpartyName} onClick={open}/>
                    {el.tag === false ? "" : <Tag style={{borderColor: "#D798A3", lineHeight: lineHeightSM, borderRadius: borderRadiusXS, fontSize: fontSize, color: colorPrimary, backgroundColor: "#FBEAED"}}>Ultimate-direct</Tag>}
                  </Flex>
                  <Flex align="center">
                    <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM, marginRight: marginXS}}>
                      {el.type === "" ? "" : "Type:"} <span style={{color:colorText}}>{el.type}</span>
                    </Text>
                    <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM, marginRight: marginXS}}>
                      {el.ownership === "" ? "" : "Ownership:"} <span style={{color:colorText}}>{el.ownership}</span>
                    </Text>
                  </Flex>
                  { el.remark === "" ? "" : <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>
                    REMARK: <span style={{color:colorText}}>{el.remark}</span>
                  </Text>}
                </Content>
              )
            })

            }
          </Flex>
        )
      })
      }
    </Flex>
  )
};

export default CounterpartyRelationshipCardView;