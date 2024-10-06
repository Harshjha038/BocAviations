import { theme } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";


export const VarianceColumnText: React.FC<{ text: any }> = ({ text }) => {
  const {
    token: { colorTextBase },
  } = theme.useToken();
  let color = colorTextBase;
  let displayValue;

  if (typeof text === "number") {
    displayValue = new Intl.NumberFormat().format(
      parseFloat(Number(text).toFixed(2))
    );
    color = text < 0 ? "#F5222D" : "#389E0D";
  } else if (typeof text === "string") {
    displayValue = text;
  } else {
    displayValue = "";
  }

  return (
    <div
      style={{
        textAlign: "end",
        fontFamily: "Roboto Mono",
        fontWeight: "700",
        color: color,
      }}
    >
      {displayValue}
    </div>
  );
};

export const VarianceColumnPercentageText: React.FC<{ text: any }> = ({
  text,
}) => {
  const {
    token: { colorTextBase },
  } = theme.useToken();
  let color = colorTextBase;
  let displayValue;
  let displayIcon;

  if (typeof text === "number") {
    displayValue = new Intl.NumberFormat().format(
      parseFloat(Number(text).toFixed(2))
    );
    color = text < 0 ? "#F5222D" : "#389E0D";
    displayIcon = text < 0 ? <FallOutlined /> : <RiseOutlined />;
    displayValue = displayValue + "%";
  } else if (typeof text === "string") {
    displayValue = text;
    displayIcon = null;
  } else {
    displayValue = "";
    displayIcon = null;
  }

  return (
    <div
      style={{
        textAlign: "end",
        fontFamily: "Roboto Mono",
        fontWeight: "700",
        color: color,
      }}
    >
      {displayValue} {displayIcon}
    </div>
  );
};
