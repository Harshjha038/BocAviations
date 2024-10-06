import { useEffect, useState } from "react";

// Msal imports
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
    InteractionStatus,
    InteractionType,
    InteractionRequiredAuthError,
    AccountInfo,
} from "@azure/msal-browser";
import { loginRequest } from "../utilities/authConfig";

// Sample app imports
import { GraphData } from "../components/ProfileData";
import { Loading } from "../components/Loading";
import { ErrorComponent } from "../components/ErrorComponent";
import { callMsGraph } from "../utilities/MsGraphApiCall";

// Antd imports
import ImgCrop from 'antd-img-crop';
import { Button, Upload, Typography, theme, Row, Col } from "antd";
import { Form, Input } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
const { Title } = Typography;


export function OnboardingPage() {
    const {
        token: { colorBgContainer, padding },
    } = theme.useToken();

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <Content
                style={{
                    padding: padding,
                    background: colorBgContainer,
                    overflow: "auto",
                }}
            >

                <Row >
                    <Col span={12} offset={6}>
                        <Title level={3} >Welcome to CRMS!</Title>
                    </Col>
                </Row>

                <Row >
                    <Col span={12} offset={6}>
                        <Title level={5} style={{ marginBottom: '60px' }}>To continue, please fill up the following fields. This will be used during report generation. These can be changed in “Manage profile” afterwards.</Title>
                    </Col>
                </Row>

                <Form
                    name="basic"
                    layout='vertical'
                >
                    <Row>
                        <Col span={12} offset={6}>
                            <Form.Item label="Title">
                                <Input placeholder="Please enter business title" />
                            </Form.Item>

                            <Form.Item label="Signature">
                                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile}>
                                <ImgCrop rotationSlider aspect={2 / 1} showReset  minZoom={0.5}>
                                    <Upload.Dragger name="files" action="/upload.do" accept="image/png, image/jpeg" maxCount={1} >
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">Support for a single image upload.</p>
                                    </Upload.Dragger>
                                    </ImgCrop>
                                </Form.Item>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row >
                        <Col span={12} offset={6}>
                            <Form.Item >
                                <Button type="primary" htmlType="submit" block>
                                    Complete setup
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Content>
        </>
    );
}
