import { Col, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Text } = Typography;

const formItems6 = [
    {
        label: "6.1. A quick look at the airlines network.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.2. How many routes is the airline operating and What are the top 10 routes?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.3. How much of the airlines capacity is focused on these routes? Are they mature or new routes launched? Has the airline stepped in to fill void from other airlines?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.4. Are the routes on the domestic/regional/international? Link in to comments on best performing routes for the airline in terms of profitability.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.5. Who are the airlines competitors on its routes? Is there much competition? What do we know generally about those routes/markets and impact on the airline.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.5. Who are the airlines competitors on its routes? Is there much competition? What do we know generally about those routes/markets and impact on the airline.",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
    {
        label: "6.7. Are there new routes due to open?",
        extra: "",
        defaultValue: "",
        placeholder: "",
    },
];
export function AirlineRouteStep() {
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
                    <Text strong >6. Airline Route Network</Text>
                    {formItems6.map((item, index) => (
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