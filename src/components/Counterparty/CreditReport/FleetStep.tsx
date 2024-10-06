import { Col, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Text } = Typography;

interface FleetStepProps {
    reportType: string;
    currencyType: string;
}

const formItems3 = [
    {
        label: "3.1. How many aircraft in the fleet and what is the average age of the fleet",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.2. Details of the split between subsidiaries (if relevant)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.3. Is the fleet all narrow body, widebody or a mix. Why?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.4. Is the airline operating a mixed OEM fleet? Why?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.5. What is the order book or fleet growth plans over the next 3-5 years (to mention lease expiries)? IS the move to newer kit, is there up gauging? Rational or driver of the move.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.6. How many retirements in the fleet?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.7. Comment on aircraft utilisation and trend",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.8. Do we know if the airline has maintenance capabilities? (outsourced or inhouse?)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.9. What is the split between owned and leased? Do we know how much of the owned fleet is unencumbered?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "3.10. Lastly who are the existing/other lessors to the airline? And payment record to these lessors if we know.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];

export function FleetStep({reportType,currencyType}: FleetStepProps) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };

    return (
        <>
            <Col span={12} offset={6}>
                <Form
                    name="basic"
                    layout='vertical'
                //  form={form}
                >
                    <Text strong >3. Fleet</Text>
                   { formItems3.map((item, index) => (
                            <Form.Item key={index} label={item.label} extra={item.extra}>
                                <TextArea
                                    defaultValue={item.defaultValue}
                                    placeholder={item.placeholder}
                                    onChange={onChange}
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        ))
                    }
                </Form>
            </Col>
        </>
    )
};