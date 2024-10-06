import { Col, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Text } = Typography;


interface IntroductionStepProps {
    reportType: string;
    currencyType: string;
}

const formItems1credit = [
    {
        label: "1.1. Brief Description of relationship with the client: ",
        extra: "",
        defaultValue: "",
        placeholder: "Eg.The Company first started a relationship with….",
    },
    {
        label: "1.2. Delivery date and lease tenor: ",
        extra: "",
        defaultValue: "",
        placeholder: "The aircraft are scheduled for delivery from July 2024 to September 2024. Each aircraft will have a 12-year lease to SCAT from the delivery date.",
    },
];
const formItems1annual = [
    {
        label: "1.1. Brief Description of relationship with the client: ",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "1.2. Delivery date and lease tenor: The aircraft are scheduled for delivery from July 2024 to September 2024. Each aircraft will have a 12-year lease to SCAT from the delivery date.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems2credit = [
    {
        label: "2.1. Brief history of the company",
        extra: "",
        defaultValue: "",
        placeholder: "Eg when the airline started what is its business model",
    },
    {
        label: "2.2. Overview today",
        extra: "",
        defaultValue: "",
        placeholder: "e.g. Flag carrier/private airline/listed airline, flying X pax per annum, and operating from X hubs and X routes",
    },
];
const formItems2annual = [
    {
        label: "2.1. Updates since last review",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems23 = [
    {
        label: "2.3.1. Who are the major shareholders",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.3.2. Provide the background and experience of the major/material shareholders",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.3.3. Who are the major subsidiaries of the airline? View chart",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems24 = [
    {
        label: "2.4.1. Provide details of the business model",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.2. Is this a full-service carrier, low cost carrier, hybrid, freighter, etc",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.3. Does the business focus on load factors (e.g. Ryanair) or yields/air fares",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.4. Is the business growing e.g. its route network, or is it in the midst of changing its fleet etc.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.5. Who are the target customers and brief comments on who the main competitors are and why",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.6. What are the target markets/regions?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.7. Where does the business do well/where are its weaknesses?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.8. Senior Management commentary (focus on airline/aviation-related experience)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "2.4.9. Risk Management policies: fuel, foreign exchange, interest rate hedging.",
        extra: 'Does airline impose fuel surcharges (an any approvals needed to do so)?',
        defaultValue: "",
        placeholder: "",
    },
];

export function IntroductionStep({ reportType, currencyType }: IntroductionStepProps) {
    // const [value, setValue] = useState('');
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
                    <Text strong >1. Introduction</Text>
                    {reportType === "Credit assessment" ? (
                        formItems1credit.map((item, index) => (
                            <Form.Item key={index} label={item.label} extra={item.extra}>
                                <TextArea
                                    defaultValue={item.defaultValue}
                                    placeholder={item.placeholder}
                                    onChange={onChange}
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        ))
                    ) : (
                        formItems1annual.map((item, index) => (
                            <Form.Item key={index} label={item.label} extra={item.extra}>
                                <TextArea
                                    defaultValue={item.defaultValue}
                                    placeholder={item.placeholder}
                                    onChange={onChange}
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        ))
                    )}
                    <Text strong >2. Key Developments</Text>
                    {reportType === "Credit assessment" ? (
                        formItems2credit.map((item, index) => (
                            <Form.Item key={index} label={item.label} extra={item.extra}>
                                <TextArea
                                    defaultValue={item.defaultValue}
                                    placeholder={item.placeholder}
                                    onChange={onChange}
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                        ))
                    ) : formItems2annual.map((item, index) => (
                        <Form.Item key={index} label={item.label} extra={item.extra}>
                            <TextArea
                                defaultValue={item.defaultValue}
                                placeholder={item.placeholder}
                                onChange={onChange}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                    ))}
                    {reportType === "Credit assessment" ? (
                        <>
                            <Text strong >2.3. Structure and Shareholders</Text>
                            {
                                formItems23.map((item, index) => (
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
                        </>
                    ) : null}

                    {reportType === "Credit assessment" ? (
                        <>
                            <Text strong >2.4. Business Model</Text>
                            {
                                formItems24.map((item, index) => (
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
                        </>
                    ) : null}
                </Form>

            </Col>
        </>
    )
};