import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";

const { Search } = Input;

interface SearchInputProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (value: string) => void;
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
  [key: string]: any;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "",
  buttonText = "",
  onSearch,
  style,
  buttonStyle,
  ...props
}) => {
  return (
    <Search
      placeholder={placeholder}
      enterButton={
        <Button type="default" icon={<SearchOutlined />} style={buttonStyle}>
          {buttonText}
        </Button>
      }
      size="large"
      onSearch={onSearch}
      style={style}
      type="default"
      {...props}
    />
  );
};

export default SearchInput;
