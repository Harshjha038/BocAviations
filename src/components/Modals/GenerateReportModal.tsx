import { FC, useCallback } from "react";
import { Typography, Space, Form, Radio, RadioChangeEvent } from "antd";
import { GenericModal } from "../Modals/GenericModal";
const { Text } = Typography;

interface GenerateCreditReportModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    reportType: string;
    onReportTypeChange: (value: string) => void;
    currencyType: string;
    onCurrencyTypeChange: (value: string) => void;
}

const GenerateCreditReportModal: FC<GenerateCreditReportModalProps> = ({
    isOpen,
    onConfirm,
    onCancel,
    reportType,
    onReportTypeChange,
    currencyType,
    onCurrencyTypeChange,

}) => {

    // const [reportType, setReportType] = useState('');
    // const [currencyType, setCurrencyType] = useState('');

    const reportOptions = [
        { label: 'Credit assessment', value: 'Credit assessment' },
        { label: 'Annual review', value: 'Annual review' },
    ];
    const currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'Reporting currency', value: 'Reporting currency' },
    ];
    // const onReportTypeChange = useCallback((e: RadioChangeEvent) => {
    //     setReportType(e.target.value);
    //     console.log('radio3 checked', e.target.value);
    // }, [reportType]);
    // const onCurrencyTypeChange = ({ target: { value } }: RadioChangeEvent) => {
    //     console.log('radio3 checked', value);
    //     setCurrencyType(value);
    // };

    const handleReportTypeChange = useCallback((e: RadioChangeEvent) => {
        onReportTypeChange(e.target.value);
    }, [onReportTypeChange]);

    const handleCurrencyTypeChange = (e: RadioChangeEvent) => {
        onCurrencyTypeChange(e.target.value);
    };

    return (
        <GenericModal
            title="Proceed with report generation?"
            open={isOpen}
            onConfirm={onConfirm}
            onCancel={onCancel}
        >
            <Space direction="vertical" size="middle">
                <Text>
                The profile, financials, rating and KYC data will be used when generating the report. Please ensure that all data filled is accurate.
                </Text>

                <Form
                    name="basic"
                    layout='vertical'
                // form={form}
                >
                    <Form.Item label="Please select report type to proceed">
                        <Radio.Group options={reportOptions} onChange={handleReportTypeChange} value={reportType} optionType="button" />
                    </Form.Item>
                    <Form.Item label="Please select currency to be used">
                        <Radio.Group options={currencyOptions} onChange={handleCurrencyTypeChange} value={currencyType} optionType="button" />
                    </Form.Item>
                </Form>



            </Space>
        </GenericModal>
    )
};

export default GenerateCreditReportModal;
