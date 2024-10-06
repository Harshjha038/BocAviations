import { Alert, Button, Col, Divider, Row } from "antd";
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Typography, theme } from "antd";


const { Title, Text } = Typography;

interface DataType {
    key: string;
    daterequested: string;
    type: string;
    currency: string;
    file: string;
    status: string;
    remarks: string;
    datecompleted: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Date requested',
        dataIndex: 'daterequested',
        key: 'daterequested',
        // render: (text) => <a>{text}</a>,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
    },
    {
        title: 'File',
        dataIndex: 'file',
        key: 'file',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Remarks',
        dataIndex: 'remarks',
        key: 'remarks',
    },
    {
        title: 'Date completed',
        dataIndex: 'datecompleted',
        key: 'datecompleted',
    },

];

const data: DataType[] = [
    {
        key: '1',
        daterequested: '23/01/2024 4:55 PM',
        type: 'Annual',
        currency: 'USD',
        file: '',
        status: "In progress",
        remarks: "",
        datecompleted: "23/01/2024 4:55 PM"
    },
    {
        key: '2',
        daterequested: '23/01/2024 4:55 PM',
        type: 'Annual',
        currency: 'USD',
        file: 'link to first draft',
        status: "Partially completed",
        remarks: "RPA bot failed",
        datecompleted: "23/01/2024 4:55 PM"
    },
    {
        key: '3',
        daterequested: '23/01/2024 4:55 PM',
        type: 'Annual',
        currency: 'USD',
        file: '',
        status: "Failed",
        remarks: "Error message",
        datecompleted: "23/01/2024 4:55 PM"
    },
    {
        key: '4',
        daterequested: '23/01/2024 4:55 PM',
        type: 'Credit assessment ',
        currency: 'USD',
        file: 'credit_assessment_12231.docx',
        status: "Completed",
        remarks: "",
        datecompleted: "23/01/2024 4:55 PM"
    },
];

export function GenerateStep() {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    return (
        <>
            <Title level={5}>Instructions</Title>
            <Row >
                <Text>1. Generate the credit report. Edit if necessary.</Text>
            </Row>
            <Row >
                <Text>2. To seek approval, upload the finalised report and select the reviewer.</Text>
            </Row>
            <Row >
                <Col span={16}>
                    <Text strong style={{ color: colorPrimary }} >*If any of the inputs have been amended, please re-generate the credit report here and re-upload for approval. The data inputted here will be saved for future re-generation.</Text>
                </Col>
            </Row>
            <br />
            <Row >
                <Button type="primary" value="default">Generate report</Button>
            </Row>
            <Divider />
            <Title level={5}>Past generated reports</Title>
            <br />
            <Alert message="If generating report has failed or is partially completed, please contact Telstra team to investigate." type="warning" />
            <br />
            <Table columns={columns} dataSource={data} />
        </>
    )

}