import { Col, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Text } = Typography;

interface FinancialStepProps {
    reportType: string;
    currencyType: string;
}

const formItems7credit = [
    {
        label: "7.1. The following financial performance and the associated Credit Rating are based on the stand-alone/consolidated financial statements for Airline X for FY (relevant year).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.2. Are accounts audited/unaudited?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.3. Are there any qualifications/auditor comments in the financial statements or other material item to consider when reviewing the financial information.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.4. Please comment on Revenue: has it grown or decreased? What is the driver – comment if  PAX increase (volume) or air fare increase (price) or other (new airline sub/acquisition)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.5. Comment on operating expenses excluding lease costs and depreciation (e.g. EBITDAR). How has it grown yoy and compare to Revenues? If costs are growing more than revenues is this because growth has been value destructive?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.6. What are the big drivers (in absolute US$ terms not % terms) of the increase in the operating costs? Comment on these drivers and the impact. ",
        extra: "E.g. fuel cost went up US$XXm (XXX% yoy) driven by an X% increase ASKs and also an x% change in unit cost as the airline was not fully hedged.",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.7. Discuss the aircraft rental expense and comment on changes while relating to the fleet of the airline. ",
        extra: "(e.g. the airline op lease costs have increased x%, reflecting the airline adding X aircraft during the year/airline refleeting with younger more expensive aircraft.)",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.8. Is the airline making an operating profit?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.9. Comment on the airlines size (adjusted total assets) and how this has been funded e.g. debt and equity.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.10. Does the airline have a positive or negative TNW position?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.11. Comment on the airlines gross debt and adjusted leverage. What is the payment horizon of the debts? Are there any near term debt maturities?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.12. As a % of revenues what is the airlines cash generation? (30% is the standard industry benchmark, below 15% is poor, above 30% is good).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.13. Unencumbered assets if required? Amount of u credit lines (and undrawn portion available) ? Banking relationship (identify key banks)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "7.14. Is the airline generating cash from operations? (This is a critical point, if the airline is failing to make cash from its operations its will need to fund itself via either sale of assets or raising debt/equity).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems7annual = [
    {
        label: "4.1. The following financial performance and the associated Credit Rating are based on the stand-alone/consolidated financial statements for Airline X for FY (relevant year).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.2. Are accounts audited/unaudited?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.3. Are there any qualifications/auditor comments in the financial statements or other material item to consider when reviewing the financial information.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.4. Please comment on Revenue: has it grown or decreased? What is the driver – comment if  PAX increase (volume) or air fare increase (price) or other (new airline sub/acquisition)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.5. Comment on operating expenses excluding lease costs and depreciation (e.g. EBITDAR). How has it grown yoy and compare to Revenues? If costs are growing more than revenues is this because growth has been value destructive?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.6. What are the big drivers (in absolute US$ terms not % terms) of the increase in the operating costs? Comment on these drivers and the impact. ",
        extra: "E.g. fuel cost went up US$XXm (XXX% yoy) driven by an X% increase ASKs and also an x% change in unit cost as the airline was not fully hedged.",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.7. Discuss the aircraft rental expense and comment on changes while relating to the fleet of the airline. ",
        extra: "(e.g. the airline op lease costs have increased x%, reflecting the airline adding X aircraft during the year/airline refleeting with younger more expensive aircraft.)",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.8. Is the airline making an operating profit?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.9. Comment on the airlines size (adjusted total assets) and how this has been funded e.g. debt and equity.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.10. Does the airline have a positive or negative TNW position?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.11. Comment on the airlines gross debt and adjusted leverage. What is the payment horizon of the debts? Are there any near term debt maturities?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.12. As a % of revenues what is the airlines cash generation? (30% is the standard industry benchmark, below 15% is poor, above 30% is good).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.13. Unencumbered assets if required? Amount of u credit lines (and undrawn portion available) ? Banking relationship (identify key banks)",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "4.14. Is the airline generating cash from operations? (This is a critical point, if the airline is failing to make cash from its operations its will need to fund itself via either sale of assets or raising debt/equity).",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems8credit = [
    {
        label: "8.1. Summarise the airlines position",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "8.2. Discuss the rating and outlook.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "8.3. Highlight and acknowledge risks in transaction.  Key challenges of the airline.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "8.4. Risk is supportive of the transaction based on the following positive attributes:",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "8.5. Any exposure issues? Recommendation to sell down if any",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
const formItems8annual = [
    {
        label: "5.1. Summarise the airlines position",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "5.2. Discuss the rating and outlook.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "5.3. Highlight and acknowledge risks.  Key challenges of the airline.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "5.4. Risk is supportive based on the following positive attributes:",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "5.5. Any exposure issues? Recommendation to sell down if any",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];

export function FinancialStep({ reportType, currencyType }: FinancialStepProps) {
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
                    <Text strong >{
                        reportType === "Credit assessment" ? "7. Financial Performance" : "4. Financial Performance"}</Text>
                    {reportType === "Credit assessment" ? (
                        formItems7credit.map((item, index) => (
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
                        formItems7annual.map((item, index) => (
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

                    <Text strong >{
                        reportType === "Credit assessment" ? "8. Conclusion and Recommendation" : "5. Conclusion and Recommendation"}</Text>
                    {reportType === "Credit assessment" ? (
                        formItems8credit.map((item, index) => (
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
                        formItems8annual.map((item, index) => (
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
                </Form>
            </Col>
        </>
    )
};