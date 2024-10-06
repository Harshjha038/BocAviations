import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Table,
  Typography,
  Button,
  Flex,
  theme,
  Radio,
  GetRef,
  Form,
  Input,
  Badge,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  front_end_config,
  financial_statement_info,
  financial_statement_profit_and_loss,
  financial_statement_attributes,
} from "../../../utilities/contants";
import "./CounterpartyFinancials.css";
import { SettingOutlined } from "@ant-design/icons";
import { VarianceColumnText, VarianceColumnPercentageText } from "./Variance";

const { Text } = Typography;
type FormInstance<T> = GetRef<typeof Form<T>>;
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface FrontEndConfig {
  id: number;
  type_category_item_id: string;
  label: string;
  data_type: string;
  is_read_only?: number;
  is_label_bold?: number;
  has_divider_above?: number;
  is_background_color_dark?: number;
}

interface FinancialStatementInfo {
  id: number;
  generated_name: string;
}

interface FinancialStatementProfitAndLoss {
  id: number;
  financial_statement_id: number;
  type_category_item_id: string;
  line_item_other_index?: number;
  line_item_other_value?: string;
  value_in_usd?: number;
  value_in_reporting_currency?: number;
  value_as_input?: string;
  parent_comment_id?: number;
}

interface DataType {
  key: string;
  label: string;
  [key: string]: any;
  children?: any[];
}

const frontEndConfig: FrontEndConfig[] = front_end_config;
const profitAndLossData: FinancialStatementProfitAndLoss[] =
  financial_statement_profit_and_loss;

const transformData = (
  config: FrontEndConfig[],
  info: FinancialStatementInfo[],
  profitAndLoss: FinancialStatementProfitAndLoss[]
): DataType[] => {
  return config.map((item) => {
    const match = financial_statement_attributes.find(
      (attr) => attr.type_category_item_id === item.type_category_item_id
    );

    const row: DataType = {
      key: `${item.id}`,
      label: item.label,
      item_id: match ? match.item_id.toString() : "N/A",
      children: [],
      hasChildren: false,
    };

    if (item.has_divider_above) {
      row.has_divider_above = item.has_divider_above;
    }

    if (item.is_label_bold) {
      row.is_label_bold = item.is_label_bold;
    }

    if (item.is_background_color_dark) {
      row.is_background_color_dark = item.is_background_color_dark;
    }

    if (item.is_read_only) {
      row.is_read_only = item.is_read_only;
    }

    const groupedItems = profitAndLoss.reduce((acc, curr) => {
      if (
        curr.type_category_item_id === item.type_category_item_id &&
        "line_item_other_index" in curr
      ) {
        const key = curr.line_item_other_value || "";
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(curr);
      }
      return acc;
    }, {} as Record<string, FinancialStatementProfitAndLoss[]>);

    row.children = Object.entries(groupedItems).map(([key, items]) => {
      const child: DataType = {
        key: `children_${items[0].id}`,
        label: items[0].line_item_other_value || "",
        item_id: items[0].type_category_item_id,
      };

      items.forEach((item) => {
        const columnKey = `column_${item.financial_statement_id}`;
        child[columnKey] = item.value_in_usd || "";
      });

      const firstColumnValue = items.find(
        (item) => item.financial_statement_id === info[0].id
      )?.value_in_usd;
      const secondColumnValue = items.find(
        (item) => item.financial_statement_id === info[1].id
      )?.value_in_usd;

      // Variance  calculation
      if (
        firstColumnValue !== undefined &&
        typeof firstColumnValue === "number" &&
        secondColumnValue !== undefined &&
        typeof secondColumnValue === "number"
      ) {
        child.variance = secondColumnValue - firstColumnValue;
      } else {
        child.variance = "";
      }

      // Variance percentage calculation
      if (
        firstColumnValue !== undefined &&
        typeof firstColumnValue === "number" &&
        secondColumnValue !== undefined &&
        typeof secondColumnValue === "number" &&
        firstColumnValue !== 0
      ) {
        child.variancePercent =
          ((secondColumnValue - firstColumnValue) / firstColumnValue) * 100;
      } else {
        child.variancePercent = "";
      }

      return child;
    });

    if (row.children?.length > 0) {
      row.hasChildren = true;
    }

    info.forEach((infoItem, index) => {
      let foundItem;
      foundItem = profitAndLoss.find(
        (data) =>
          data.type_category_item_id === item.type_category_item_id &&
          data.financial_statement_id === infoItem.id &&
          !data.line_item_other_value
      );

      const keys = Object.keys(infoItem) as Array<keyof FinancialStatementInfo>;
      const keyExists = keys.includes(
        row.item_id as keyof FinancialStatementInfo
      );

      if (keyExists) {
        foundItem = {
          value_in_usd: infoItem[row.item_id as keyof FinancialStatementInfo],
        };
      }
      const columnKey = `column_${index + 1}`;
      row[columnKey] = foundItem?.value_in_usd ?? "";
      if (index === 0 && typeof foundItem?.value_in_usd === "number") {
        const secondColumnValue = profitAndLoss.find(
          (data) =>
            data.type_category_item_id === item.type_category_item_id &&
            data.financial_statement_id === info[1].id &&
            !data.line_item_other_value
        )?.value_in_usd;

        if (
          foundItem?.value_in_usd !== undefined &&
          secondColumnValue !== undefined &&
          typeof secondColumnValue === "number"
        ) {
          row.variance = secondColumnValue - foundItem?.value_in_usd;
        } else {
          row.variance = "";
        }

        if (
          foundItem?.value_in_usd !== undefined &&
          typeof foundItem?.value_in_usd === "number" &&
          secondColumnValue !== undefined &&
          typeof secondColumnValue === "number" &&
          foundItem?.value_in_usd !== 0
        ) {
          row.variancePercent =
            ((secondColumnValue - foundItem?.value_in_usd) /
              foundItem?.value_in_usd) *
            100;
        } else {
          row.variancePercent = "";
        }
      }
    });
    return row;
  });
};

const dataSource = transformData(
  frontEndConfig,
  financial_statement_info,
  profitAndLossData
);

const defaultExpandedRowKeys = dataSource.map((row) => row.key);

const columns: ColumnsType<DataType> = [
  {
    title: <span>(millions)</span>,
    dataIndex: "label",
    key: "label",
    fixed: "left",
    width: "280px",
    render: (text: string, record: DataType, index: number) => {
      return (
        <span
          style={{
            fontWeight: record.is_label_bold ? "bold" : "",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          {text}
        </span>
      );
    },
  },
];

const EditableCell: React.FC<any> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<any>(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form?.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form?.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        className="form-style"
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}
      >
        <Input
          className="form-input-style"
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div onClick={toggleEdit}>{children}</div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

financial_statement_info.forEach((infoItem, index) => {
  //is_approved=1 means cannot be editable and no red dot
  //is_approved=0 means not approved yet so can be editable and show red dot
  let editable = infoItem.is_approved === 1 ? false : true;
  columns.push({
    title: (
      <span className="content-header-custom">
        <Badge dot={editable} offset={[2, 0]}>
          {infoItem.generated_name}
        </Badge>
      </span>
    ),
    dataIndex: `column_${index + 1}`,
    key: `column_${index + 1}`,
    width: "170px",
    render: (text, record) => {
      let displayValue;
      if (typeof text === "number") {
        displayValue = new Intl.NumberFormat().format(Math.round(text));
      } else if (typeof text === "string") {
        displayValue = text;
      } else {
        displayValue = "";
      }

      console.log("record", record);
      const cellStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        boxSizing: "border-box",
      };
      if (
        !record?.is_background_color_dark ||
        record?.is_background_color_dark !== 1
      ) {
        cellStyle.backgroundColor = record?.is_read_only ? "#F5F5F5" : "white";
      }

      return editable ? (
        <td style={cellStyle}>
          <div
            style={{
              textAlign: "end",
              fontFamily: "Roboto Mono",
              justifyContent: "flex-end",
              display: "flex",
              padding: "8px",
            }}
          >
            <EditableCell
              title={infoItem.generated_name}
              editable={record?.is_read_only ? false : true}
              dataIndex={`column_${index + 1}`}
              record={record}
              handleSave={(updatedRecord: any) => {
                console.log("Updated Record:", updatedRecord);
              }}
            >
              {displayValue}
            </EditableCell>
          </div>
        </td>
      ) : (
        <div
          style={{
            textAlign: "end",
            fontFamily: "Roboto Mono",
          }}
        >
          {displayValue}
        </div>
      );
    },
  });
});

columns.push({
  title: <span className="content-header-custom">Variance</span>,
  dataIndex: "variance",
  key: "variance",
  width: "170px",
  render: (text) => <VarianceColumnText text={text} />,
});

columns.push({
  title: <span className="content-header-custom">Variance %</span>,
  dataIndex: "variancePercent",
  key: "variancePercent",
  width: "170px",
  render: (text) => <VarianceColumnPercentageText text={text} />,
});

const TAB_OPER_STATS = "operational_stats";
const TAB_PROFIT_LOSS = "profit_loss";
const TAB_BALANCE_SHEET = "balance_sheet";
const TAB_CASHFLOW = "cashflow";
const TAB_DEBT_PROFILE = "debt_profile";
const TAB_RATIO = "ratio";
const TAB_CREDIT_TABLES = "credit_tables";

export const CounterpartyFinancialsEdit: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("profit_loss");
  const {
    token: { marginMD, paddingSM, paddingXS, fontSizeHeading5 },
  } = theme.useToken();

  interface EditableRowProps {
    index: number;
    [key: string]: any;
  }

  const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "profit_loss":
        return (
          <div>
            <Table
              components={{
                body: {
                  row: EditableRow,
                  cell: EditableCell,
                },
              }}
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              rowKey={(record) => record.key}
              bordered
              expandable={{
                defaultExpandedRowKeys,
                expandIcon: () => null,
              }}
              className="custom-table-header"
              rowClassName={(record) => {
                let className = "custom-cell-background";

                if (record.is_background_color_dark) {
                  className += " dark-background";
                }

                if (record.has_divider_above) {
                  className += " custom-table";
                }

                return className.trim();
              }}
              scroll={{
                x: 400,
                // y: 400,
              }}
            />
          </div>
        );
      default:
        return <div>{selectedTab} content.</div>;
    }
  };

  return (
    <>
      <Flex
        className="content-header"
        style={{ marginBottom: marginMD, gap: paddingSM }}
      >
        <Flex style={{ gap: paddingXS, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: fontSizeHeading5 }}>Financial statements</Text>
        </Flex>
        <div>
          <Radio.Group
            defaultValue={TAB_PROFIT_LOSS}
            onChange={(e) => setSelectedTab(e.target.value)}
          >
            <Radio.Button
              value={TAB_OPER_STATS}
              className="custom-radio-button"
            >
              Operational Stats
            </Radio.Button>
            <Radio.Button
              value={TAB_PROFIT_LOSS}
              className="custom-radio-button"
            >
              Profit & Loss
            </Radio.Button>
            <Radio.Button
              value={TAB_BALANCE_SHEET}
              className="custom-radio-button"
            >
              Balance sheet
            </Radio.Button>
            <Radio.Button value={TAB_CASHFLOW} className="custom-radio-button">
              Cashflow
            </Radio.Button>
            <Radio.Button
              value={TAB_DEBT_PROFILE}
              className="custom-radio-button"
            >
              Debt Profile
            </Radio.Button>
            <Radio.Button value={TAB_RATIO} className="custom-radio-button">
              Ratio
            </Radio.Button>
            <Radio.Button
              value={TAB_CREDIT_TABLES}
              className="custom-radio-button"
            >
              Credit Tables
            </Radio.Button>
          </Radio.Group>
        </div>
      </Flex>
      <div style={{ marginBottom: marginMD }}>
        <Button icon={<SettingOutlined />}>Table settings</Button>
      </div>
      {renderContent()}
    </>
  );
};
