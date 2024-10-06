import React from "react";
import { theme } from "antd";

interface ColorDotProps {
  score: number;
}

const getColorFromScore = (score: number): string => {
  const {
    token: { colorError, colorSuccess, colorWarning, colorBorder },
  } = theme.useToken();
  if (score >= 7) {
    return colorError;
  } else if (score <= 5) {
    return colorSuccess;
  } else if (score >= 5.1 && score <= 6.9) {
    return colorWarning;
  }
  return colorBorder;
};

export const ColorDot: React.FC<ColorDotProps> = ({ score }) => {
  const color = getColorFromScore(score);
  return (
    <span
      style={{
        display: "inline-block",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        backgroundColor: color,
        marginRight: "8px",
      }}
    />
  );
};
