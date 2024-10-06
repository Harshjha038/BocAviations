import React, {useState} from "react";
import {Typography, Row, Col, theme, Flex} from "antd";
import dayjs from 'dayjs';

const{Text} = Typography;

interface MarketInfo {
  countryOfIncorporation?: string;
  region?: string;
  subRegion?: string;
  isCapeTownAccession?: boolean;
  marketSpRating?: string;
  marketSpOutlook?: string;
  marketMoodysRating?: string;
  marketMoodysOutlook?: string;
  marketFitchRating?: string;
  marketFitchOutlook?: string;
}
interface ProfileInfoProps {
  marketInfo: MarketInfo;
}

const MarketInfoView : React.FC<ProfileInfoProps> = ({marketInfo}) => {

  const marketData = [
    {
      key: "countryOfIncorporation",
      label: "Country of Incorporation"
    },
    {
      key: "region",
      label: "Region"
    },
    {
      key: "subRegion",
      label: "Sub Region"
    },
    {
      key: "isCapeTownAccession",
      label: "Cape Town Accession"
    },
    {
      key: "marketSpRating",
      additionalKey: "marketSpOutlook",
      label: "S&P Rating"
    },
    {
      key: "marketMoodysRating",
      additionalKey: "marketMoodysOutlook",
      label: "Moody’s Rating"
    },
    {
      key: "marketFitchRating",
      additionalKey: "marketFitchOutlook",
      label: "Fitch Rating"
    }
  ];

  const renderValue = (key: string, additionalKey?: string) => {
    const value = marketInfo[key as keyof MarketInfo];
    const additionalValue = additionalKey ? marketInfo[additionalKey as keyof MarketInfo] : null;

    if (additionalValue !== null && additionalValue !== undefined) {
      return `${value}, ${additionalValue}`;
    }

    if (value === undefined || value === null) {
      return "-";
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (typeof value === "number") {
      return value;
    }
    return value;
  };

  const {
    token: {
      margin,
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding
    },
  } = theme.useToken();

  return (
    <Row  style={{padding: padding}}>
      {marketData.map((el) => {
        return (
          <Col span={12} style={{marginBottom: margin}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>
                {renderValue(el.key, el.additionalKey)}
              </Text>
            </Flex>
          </Col>
        )
      })
      }
    </Row>
  )
};

export default MarketInfoView;