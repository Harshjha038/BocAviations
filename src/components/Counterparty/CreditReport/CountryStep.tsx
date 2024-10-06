import { Col, Flex, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LinkButton } from "src/components/LinkButton";
const { Text } = Typography;

const formItems4 = [
    {
        label: "4.1. Country Rating. One belt one road country?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "4.2. Brief overview of the country",
        extra: "",
        defaultValue: "",
        placeholder: "e.g. Kazakhstan is the second-largest republic of the former Soviet Union, after Russia, and the ninth-largest country in the world. The country has an abundance of natural resources – including oil, gas, coal, uranium, and other mineral deposits – and has exploited these resources to build Central Asia’s leading economy.",
        link: ""
    },
    {
        label: "4.3. What is the sovereign rating of the country? What do Moody’s/S&P/Fitch/Economist/World Bank have to say about the country’s economy and what are the big news stories impacting the country?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "4.4. What are the big industries in the country? What level of reliance is there on these industries for the country? E.g. is it a natural resources economy exposed to commodity price shocks?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "4.5. How wealthy a country is it? Is it a low/middle/high income country?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "4.6. What are the current economic issues facing the country?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""

    },
    {
        label: "4.7. What are the current geopolitical considerations for the country? E.g. has there been social unrest, disputes with neighbouring countries or terrorism events.",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "4.8. Is the country a member of Cape Town and is it being applied in the country? Where does it rank on the Pillsburry Law Index: ",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: "google.com"
    },
];

const formItems5 = [
    {
        label: "5.1. Chart above to put into context how large the total country aviation market is.",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.2. Does the country operate as part of a common travel region or open skies or just limited to bilateral deals with other countries?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.3. What are the expected future developments here (e.g. open skies due shortly and lots of new competitors) and are there slot/route restrictions (e.g. limited slots available in target markets)?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.4. What is the trend in passenger numbers in recent years?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.5. How was the market impacted by covid and how has the recovery been?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.6. What are the drivers of growth/stagnation in the market? What is the airport/aviation infrastructure like in the country? Are there slot issues etc.",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""

    },
    {
        label: "5.7. Using the data from this table, discuss the seasonality of the market.",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: "google.com"
    },
    {
        label: "5.8. Who dominates the market? Who are the major players/competitors?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.9. What has been the evolution of the market share? Has the airline grown and taken market share or has it lost market share?",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
    {
        label: "5.10. What is driving the market developments? (e.g. open skies, retrenchment by Russian airlines, airline collapse? etc)",
        extra: "",
        defaultValue: "",
        placeholder: "",
        link: ""
    },
];

export function CountryStep() {
    // const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };

    const openLink = () => {
        console.log("open link")
    };

    return (
        <>
            <Col span={12} offset={6}>
                <Form
                    name="basic"
                    layout='vertical'
                //  form={form}
                >
                    <Text strong >4. Country Overview and Macro Environment</Text>
                    {formItems4.map((item, index) => (
                        <Form.Item key={index} label={item.label} extra={item.extra}>
                            {item?.link ? <LinkButton text="View index" onClick={openLink} /> : null}
                            <TextArea
                                defaultValue={item.defaultValue}
                                placeholder={item.placeholder}
                                onChange={onChange}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                    ))
                    }

                    <Flex align="center" gap={12}>
                        <Text strong >5. Airline Home Country Aviation Market</Text>
                        {/* <LinkButton text="View chart" onClick={openLink} /> */}
                    </Flex>
                    {formItems5.map((item, index) => (
                        <Form.Item key={index} label={item.label} extra={item.extra}>
                            {/* {item?.link ? <LinkButton text="View table" onClick={openLink} /> : null} */}
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