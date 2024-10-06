import React from "react";
import {Typography, Flex, Layout, theme } from "antd";

const{Text} = Typography;
const{Content} = Layout;

const CounterpartyManagementView = () => {

    const managementInfo = [
        {
          position: "Chairman",
          name: "Johnathan Hughes",
          info: "The innovative chairman of Cathay pacific Industries, transformed the company into a leading multinational through strategic acquisitions and technology investments. A passionate advocate for sustainability and philanthropy, he is renowned for his visionary leadership and commitment to positive global impact.",
        },
        {
            position: "CEO",
            name: "Sarah Thompson",
            info: "The dynamic CEO of Cathay pacific Industries, revolutionized the company with cutting-edge technological advancements and strategic global expansions. Renowned for her visionary leadership, she champions innovation and corporate social responsibility in the airline industry.",
        },
        {
            position: "CFO",
            name: "Michael Chen",
            info: "The astute CFO of Cathay Pacific, optimized the airline's financial strategy through meticulous cost management and innovative revenue initiatives. Celebrated for his financial acumen, he drives sustainable growth and profitability in the aviation industry.",
        },
    ];

    const {
        token: {
          colorBgMask,
          fontSize,
          paddingSM,
          paddingLG,
          lineHeightSM
        },
    } = theme.useToken();

    return (
        <div>
            {managementInfo.map((el) => {
                return(
                    <Flex vertical gap={4}
                        style={{
                        paddingBottom: paddingLG,
                        paddingRight: paddingLG
                        }}>
                        <Flex vertical>
                            <Text 
                                style={{fontSize: fontSize,
                                color: colorBgMask,
                                fontWeight: "400"}}>{el.position}
                            </Text>
                            <Text style={{fontSize: fontSize, lineHeight: lineHeightSM, fontWeight: "500"}}>{el.name}</Text>
                            <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                                {el.info}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })

            }
        </div>
       
    )
};

export default CounterpartyManagementView;