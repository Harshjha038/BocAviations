import GenericContentLayout from "src/components/GenericContentLayout";
import { useState } from 'react';
import { Button, Col, Flex, message, Steps, theme } from 'antd';
import { IntroductionStep } from "../../components/Counterparty/CreditReport/IntroductionStep";
import { FleetStep } from "../../components/Counterparty/CreditReport/FleetStep";
import { CountryStep } from "../../components/Counterparty/CreditReport/CountryStep";
import { AirlineRouteStep } from "../../components/Counterparty/CreditReport/AirlineRouteStep";
import { FinancialStep } from "../../components/Counterparty/CreditReport/FinancialStep";
import { GenerateStep } from "../../components/Counterparty/CreditReport/GenerateStep";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';






export function CreditAssessment() {
    const {
        token: {  marginXL, padding },
    } = theme.useToken();
    const [current, setCurrent] = useState(0);
    let disabled = current > 0 ? false : true;
    const navigate = useNavigate();
    const location = useLocation();
    const { reportType, currencyType } = location.state || {};

    const steps = [
        {
            title: 'Introduction',
            description: "Section 1, 2",
            content: <IntroductionStep  reportType={reportType} currencyType={currencyType}/>,
        },
        {
            title: 'Fleet',
            description: "Section 3",
            content: <FleetStep  reportType={reportType} currencyType={currencyType}/>,
        },
        {
            title: 'Country',
            description: "Section 4, 5",
            content: <CountryStep />,
        },
        {
            title: 'Airline Route',
            description: "Section 6",
            content: <AirlineRouteStep />,
        },
        {
            title: 'Financial',
            description: "Section 7, 8",
            content: <FinancialStep  reportType={reportType} currencyType={currencyType}/>,
        },
        {
            title: 'Generate',
            description: "",
            content: <GenerateStep />,
        },
    ];

    const onChange = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title, description: item.description }));

    function setBreadcrumbData(arg0: any): import("antd/es/breadcrumb/Breadcrumb").BreadcrumbItemType[] {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <GenericContentLayout
                pageTitle={"Generate credit report"}
                breadcrumbData={[{ title: <div>Counterparties</div> }, { title: <div>Cathay Pacific</div> }, { title: <div>Generate credit report</div> }]}
                onSave={() => navigate(`/counterparty/FB8A8B67-B96B-EF11-BDFD-000D3AC8A3EA/profile`)}
            >
             
                <Steps
                    current={current}
                    items={items}
                    onChange={onChange}
                    style={{
                        marginBottom: marginXL,
                        paddingTop:padding,
                    }}
                />
                <Col span={24} >
                    <div>{steps[current].content}</div>
                </Col>

                <Flex justify="space-between" style={{ marginTop: marginXL }}>
                    <Button onClick={() => prev()} disabled={disabled}>
                        Previous
                    </Button>
                    {current < steps.length - 1 && (

                        <Button type="primary" onClick={() => next()} >
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </Flex>
            </GenericContentLayout>
        </>
    );
}