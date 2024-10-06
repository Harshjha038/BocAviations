import React, { useState } from "react";
import { Typography, Layout, Flex, theme, InputNumber, Button, Divider, Input, Col, Checkbox, Radio } from "antd";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from 'antd';

const { Text } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const generateUniqueId = (existingIds: any) => {
  let newId = Math.floor(Math.random() * 10000);
  while (existingIds.includes(newId)) {
    newId = Math.floor(Math.random() * 10000);
  }
  return newId;
};

const CounterpartyRelationshipCardEdit = () => {

  const [relationshipsInfo, setRelationshipsInfo] = useState([
    {
      title: "Guarantors/ Guaranteed Lessees",
      cardInfo: [
        {
          id: 1,
          counterpartyName: "Cathay Dragon",
          type: "",
          ownership: "",
          remark: "Rating of Cathay Pacific as guarantor",
        },
      ]
    },
    {
      title: "Shareholders/Subsidiaries/ Affiliates/ SPCs",
      cardInfo: [
        {
          id: 2,
          counterpartyName: "Swire Pacific Limited",
          type: "Airline",
          ownership: "45%",
          remark: "Swire is...",
        },
        {
          id: 3,
          counterpartyName: "Air China",
          type: "Airline",
          ownership: "30%",
          remark: "",
        },
        {
          id: 4,
          counterpartyName: "Qatar Airways",
          type: "Airline",
          ownership: "10%",
          remark: "",
        },
      ]
    },
    {
      title: "Subsidiaries/ Affiliates/ SPCs",
      cardInfo: [
        {
          id: 5,
          counterpartyName: "Air China",
          type: "Airline",
          ownership: "16%",
          remark: "",
        },
        {
          id: 6,
          counterpartyName: "AHK Air Hong Kong Limited",
          type: "Airline",
          ownership: "100%",
          remark: "",
        },
        {
          id: 7,
          counterpartyName: "HK Express",
          type: "Airline",
          ownership: "100%",
          remark: "",
        }
      ]
    }
  ]);

  const [ultimateShareholders, setUltimateShareholders] = useState<{ [key: number]: { checked: boolean; type: string } }>({});

  const handleOwnershipValueChange = (value: any, id: number) => {
    setRelationshipsInfo((prevInfo) => prevInfo.map((category) => ({
      ...category,
      cardInfo: category.cardInfo.map((item) => (
        item.id === id ? { ...item, ownership: value ? `${value}%` : "" } : item
      ))
    })));
  };

  const handleUltimateShareholderChange = (id: number) => (e: any) => {
    const checked = e.target.checked;
    setUltimateShareholders((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        checked
      }
    }));
  };

  const handleUltimateShareholderTypeChange = (e: RadioChangeEvent, id: number) => {
    setUltimateShareholders((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        type: e.target.value
      }
    }));
  };

  const handleDelete = (id: number) => {
    setRelationshipsInfo((prevInfo) => prevInfo.map((category) => ({
      ...category,
      cardInfo: category.cardInfo.filter(item => item.id !== id)
    })));
    setUltimateShareholders((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleAddRelationship = (categoryTitle: string) => {
    setRelationshipsInfo((prevInfo) => prevInfo.map((category) => {
      if (category.title === categoryTitle) {
        const existingIds = category.cardInfo.map(item => item.id);
        const newId = generateUniqueId(existingIds);
        const newEntry = {
          id: newId,
          counterpartyName: "",
          type: categoryTitle === "Guarantors/ Guaranteed Lessees" ? "" : "Airline",
          ownership: categoryTitle === "Shareholders/Subsidiaries/ Affiliates/ SPCs" ? "" : "",
          remark: "",
          tag: false
        };
        return {
          ...category,
          cardInfo: [...category.cardInfo, newEntry]
        };
      }
      return category;
    }));
  };

  const {
    token: {
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding,
      paddingXXS
    },
  } = theme.useToken();

  return (
    <Flex vertical gap={32}>
      {relationshipsInfo.map((data) => (
        <Content style={{ background: "#FAFAFA", paddingBottom: padding }} key={data.title}>
          <Flex vertical gap={8} style={{ padding: padding }}>
            <Text style={{ fontSize: fontSize, fontWeight: "400", lineHeight: lineHeightSM }}>{data.title}</Text>
          </Flex>
          {data.cardInfo.map((el) => (
            <Content style={{ padding: padding }} key={el.id}>
              <Flex justify="end" gap={10}>
                <div style={{ cursor: "pointer" }} onClick={() => handleDelete(el.id)}>
                  <DeleteFilled style={{ color: "#90192E" }} />
                </div>
              </Flex>
              <Flex vertical gap={24}>
                <Flex gap={4}>
                  <Col>
                    <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "400" }}>Name</Text>
                    <Input defaultValue={el.counterpartyName} style={{ fontSize: fontSize, fontWeight: "400" }} />
                  </Col>
                  {data.title === "Guarantors/ Guaranteed Lessees" ? (
                    <Col>
                      <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "400" }}>Type</Text>
                      <Input defaultValue={el.type} style={{ fontSize: fontSize, fontWeight: "400" }} />
                    </Col>
                  ) : (
                    <Col>
                      <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "400" }}>Ownership</Text>
                      <InputNumber
                        style={{ fontSize: fontSize, fontWeight: "400", width: "100%" }}
                        min="1"
                        max="100"
                        step="0.1"
                        addonAfter="%"
                        defaultValue={el.ownership}
                        onChange={(value) => handleOwnershipValueChange(value, el.id)}
                      />
                    </Col>
                  )}
                </Flex>
                {data.title === "Shareholders/Subsidiaries/ Affiliates/ SPCs" && (
                  <Flex gap={4} align="center" justify="space-between">
                    <Col>
                      <Checkbox
                        style={{ fontSize: fontSize, fontWeight: "400" }}
                        onChange={handleUltimateShareholderChange(el.id)}
                        checked={ultimateShareholders[el.id]?.checked || false}
                      >
                        Ultimate Shareholders
                      </Checkbox>
                    </Col>
                    {ultimateShareholders[el.id]?.checked ? (
                      <Col>
                        <Radio.Group
                          onChange={(e) => handleUltimateShareholderTypeChange(e, el.id)}
                          value={ultimateShareholders[el.id]?.type || "indirect"}
                        >
                          <Radio value={"direct"}>Direct</Radio>
                          <Radio value={"indirect"}>Indirect</Radio>
                        </Radio.Group>
                      </Col>
                    )
                    : (
                      <Col>
                        <Radio.Group disabled
                          value={ultimateShareholders[el.id]?.type || "indirect"}
                        >
                          <Radio value={"direct"}>Direct</Radio>
                          <Radio value={"indirect"}>Indirect</Radio>
                        </Radio.Group>
                      </Col>
                    )
                    }
                  </Flex>
                )}
                <Flex vertical gap={4}>
                  <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM, color: colorBgMask, fontWeight: "400" }}>Remark</Text>
                  <TextArea autoSize defaultValue={el.remark} style={{ fontSize: fontSize, lineHeight: lineHeightSM, width: "100%" }} />
                </Flex>
                <Divider />
              </Flex>
            </Content>
          ))}
          <Flex gap={10} align="center" justify="center">
            <Button
              icon={<PlusOutlined />}
              onClick={() => handleAddRelationship(data.title)}
              size="large"
              style={{
                width: "auto",
                paddingTop: paddingXXS,
                paddingLeft: padding,
                paddingRight: padding,
              }}
            >
              {data.title === "Guarantors/ Guaranteed Lessees"
                ? "Add new guarantor/guaranteed lessee"
                : data.title === "Shareholders/Subsidiaries/ Affiliates/ SPCs"
                ? "Add new Shareholders"
                : "Add new Subsidiaries/ Affiliates/ SPCs"}
            </Button>
          </Flex>
        </Content>
      ))}
    </Flex>
  );
};

export default CounterpartyRelationshipCardEdit;
