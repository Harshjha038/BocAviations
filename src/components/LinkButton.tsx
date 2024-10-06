import React from "react";
import { Typography, Button, theme } from "antd";

const { Text } = Typography;

interface LinkButtonProps {
  text: string;
  onClick: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, onClick }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Button type="link" onClick={onClick} style={{padding: 0 }}>
      <Text style={{ color: colorPrimary }} underline>
        {text}
      </Text>
    </Button>
  );
};
