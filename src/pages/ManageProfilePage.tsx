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
import { Upload, Row, Col } from "antd";
import { Form, Input } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import GenericContentLayout from "src/components/GenericContentLayout";
import ImgCrop from 'antd-img-crop';


const ManageProfileContent = () => {
    const { instance, inProgress } = useMsal();
    const [graphData, setGraphData] = useState<null | GraphData>(null);
    const [form] = Form.useForm();

    

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    useEffect(() => {
        if (!graphData && inProgress === InteractionStatus.None) {
            callMsGraph()
                .then((response: any) => {
                    console.log("graphDataResponse: ", response);
                    setGraphData(response);
                })
                .catch((e) => {
                    if (e instanceof InteractionRequiredAuthError) {
                        instance.acquireTokenRedirect({
                            ...loginRequest,
                            account: instance.getActiveAccount() as AccountInfo,
                        });
                    }
                });
        }
    }, [inProgress, graphData, instance]);

    if (!graphData) {
        return <Loading />;
    }

    return (
        <>
            <GenericContentLayout
                pageTitle={"Manage profile"}
                breadcrumbData={[{ title: <div>Manage profile</div> }]}
                onSave={() => console.log('call save API')}
            >
                <Form
                    name="basic"
                    layout='vertical'
                    form={form}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Name">
                                <Input disabled defaultValue={graphData?.displayName} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Email">
                                <Input disabled defaultValue={graphData?.mail} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Title">
                                <Input placeholder="Please enter business title"  />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
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
                </Form>
            </GenericContentLayout>
        </>
    );
};

export function ManageProfilePage() {
    const authRequest = {
        ...loginRequest,
    };

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}
            loadingComponent={Loading}
        >
            <ManageProfileContent />
        </MsalAuthenticationTemplate>
    );
}
