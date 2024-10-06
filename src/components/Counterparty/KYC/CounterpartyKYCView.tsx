import React, { useState } from "react";
import { Layout, Typography, Flex, theme, Alert , Button, Row, Col, Checkbox, Rate, Input } from "antd";
import { FilePdfOutlined, PlusOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Content } = Layout;
const { Text } = Typography;

const CounterpartyKYCView = () => {

    const handleNewKYC = () => {
        console.log("Clicked Create New KYC")
    }

    const {
        token: {
        marginMD,
        colorBgContainer,
        paddingLG,
        fontSize,
        fontSizeLG,
        lineHeightSM,
        fontSizeHeading5,
        colorBorder,
        borderRadiusXS,
        margin,
        padding,
        paddingSM,
        paddingXS
        },
    } = theme.useToken();

    return (
    <Flex vertical gap={24}>
        <Header>
            <Flex align="center" justify="space-between">
                <Col>
                    <Flex gap={8}>
                        <Text style={{fontSize: fontSizeHeading5, fontWeight: "500"}}>KYC</Text>
                        <Button
                            type="text"
                            icon={<FilePdfOutlined />}
                            style={{
                                borderColor: colorBorder,
                            }}
                            />
                    </Flex>
                </Col>
                <Col>
                <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{
                    borderColor: colorBorder,
                    alignItems: "baseline"
                }}
                onClick={handleNewKYC}
                > Create new KYC
                </Button>
                </Col>
            </Flex>
        </Header>
        <Content style={{paddingLeft: paddingLG, paddingRight:paddingLG }}>
            <Flex vertical gap={12}>
                <Flex vertical style={{paddingBottom: paddingLG}} gap={4}>
                    <Col>
                        <Text style={{fontSize: fontSize, fontWeight: "400"}}>Select KYC Date</Text>
                    </Col>
                    <Col>
                        <Input defaultValue="31/6/2023, 12:33pm" style={{width: "auto"}}/>
                    </Col>
                </Flex>
                
                <Col>
                    <Alert message="No issues" type="success" />
                </Col>
            </Flex>
        </Content>
    </Flex>
  )
}

export default CounterpartyKYCView;