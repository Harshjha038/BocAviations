import React, { useState } from "react";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import {Typography, Flex, Layout, theme, Input, AutoComplete, Button, Divider } from "antd";

const{Text} = Typography;
const{Content} = Layout;
const{TextArea} = Input;

const CounterpartyManagementEdit = () => {

    const [managementInfo, setManagementInfo] = useState([
        {
            id: 1,
            position: "Chairman",
            name: "Johnathan Hughes",
            info: "The innovative chairman of Cathay pacific Industries, transformed the company into a leading multinational through strategic acquisitions and technology investments. A passionate advocate for sustainability and philanthropy, he is renowned for his visionary leadership and commitment to positive global impact.",
        },
        {
            id: 2,
            position: "CEO",
            name: "Sarah Thompson",
            info: "The dynamic CEO of Cathay pacific Industries, revolutionized the company with cutting-edge technological advancements and strategic global expansions. Renowned for her visionary leadership, she champions innovation and corporate social responsibility in the airline industry.",
        },
        {
            id: 3,
            position: "CFO",
            name: "Michael Chen",
            info: "The astute CFO of Cathay Pacific, optimized the airline's financial strategy through meticulous cost management and innovative revenue initiatives. Celebrated for his financial acumen, he drives sustainable growth and profitability in the aviation industry.",
        },
    ])

    const handleAddManagement = () => {
        const nextId = managementInfo.length > 0 
            ? Math.max(...managementInfo.map(item => item.id)) + 1 
            : 1;

        setManagementInfo(prevInfo => [
            ...prevInfo,
            {
                id: nextId,
                position: "",
                name: "",
                info: "",
            }
        ]);
    };

    const handleDeleteManagement = (id: number) => {
        setManagementInfo(prevInfo => prevInfo.filter(item => item.id !== id));
    }

    const options = [
        { value: 'President' },
        { value: 'Chairman' },
        { value: 'MD' },
        { value: 'CEO' },
        { value: 'CFO' },
        { value: 'COO' },
        { value: 'CCO' }
    ];

    const {
        token: {
          colorBgMask,
          fontSize,
          paddingXXS,
          padding,
          paddingLG,
          lineHeightSM
        },
    } = theme.useToken();

    return (
        <div>
            {managementInfo.map((el) => {
                return(
                    <Flex vertical gap={10} key={el.id}>
                        <Flex justify="end">
                            <div onClick={() => handleDeleteManagement(el.id)} style={{cursor: "pointer"}}>
                                <DeleteFilled style={{color: "#90192E"}}/>
                            </div>
                        </Flex>
                        <Flex vertical gap={24}
                            style={{
                            paddingBottom: paddingLG
                            }}>
                            <Flex  gap={24}>
                                <Flex vertical gap={4}>
                                    <Text style={{fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "500"}}>Name</Text>
                                    <Input defaultValue={el.name} style={{fontSize: fontSize, fontWeight: "400", width:"250px"}}/>
                                </Flex>
                                <Flex vertical gap={4}>
                                    <Text style={{fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "500"}}>Position</Text>
                                    <AutoComplete
                                    options={options}
                                    defaultValue={el.position}
                                    filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 }
                                    style={{fontSize: fontSize, fontWeight: "400", width:"250px"}}/>
                                </Flex>
                            </Flex>
                            <Flex vertical gap={4}>
                                <Text style={{fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "500"}}>Remark</Text>
                                <TextArea autoSize defaultValue={el.info} style={{fontSize: fontSize, lineHeight: lineHeightSM, width: "100%"}}/>
                            </Flex>
                            <Divider/>
                        </Flex>
                    </Flex>
                )
            })

            }
            <Flex gap={10} align="center" justify="center">
                <Button icon={<PlusOutlined />} 
                onClick={handleAddManagement}
                size="large" 
                style={{width:"auto", 
                paddingTop: paddingXXS,
                paddingLeft: padding,
                paddingRight: padding,}}>
                Add new management
                </Button>
            </Flex>
        </div>
       
    )
};

export default CounterpartyManagementEdit;