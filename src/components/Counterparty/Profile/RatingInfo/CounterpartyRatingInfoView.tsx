import React, { useState } from "react";
import {Typography, Row, Col, theme, Divider, Flex } from "antd";

const{Text} = Typography;

interface RatingInfo {
  annualReviewRatingId?: string | number | null;
  indicativeRatingId?: string | number | null;
  ratingOutlook?: string | number | null;
  ratingSpRating?: string | number | null;
  ratingSpOutlook?: string | number | null;
  ratingMoodysRating?: string | number | null;
  ratingMoodysOutlook?: string | number | null;
  ratingFitchRating?: string | number | null;
  ratingFitchOutlook?: string | number | null;
  ratingPaymentRecord?: string | number | null;
  ratingIsLeaseReschedulingPastPresent?: boolean | null;
  ratingRiskPic?: string | number | null;
}

interface ProfileInfoProps {
  ratingInfo: RatingInfo;
}

const RatingInfoView : React.FC<ProfileInfoProps> = ({ ratingInfo }) => {

  const ratingInfoTop = [
    {
      key: "annualReviewRatingId",
      label: "Annual Review Rating"
    },
    {
      key: "indicativeRatingId",
      label: "Indicative Rating"
    },
    {
      key: "ratingOutlook",
      label: "Outlook (next 12 months)"
    },
    {
      key: "ratingSpRating",
      additionalKey: "ratingSpOutlook",
      label: "S&P Rating "
    },
    {
      key: "ratingMoodysRating",
      additionalKey: "ratingMoodysOutlook",
      label: "Moody’s Rating"
    },
    {
      key: "ratingFitchRating",
      additionalKey: "ratingFitchOutlook",
      label: "Fitch Rating"
    }
  ];

  const ratingInfoBottom = [
    {
      key: "ratingPaymentRecord",
      label: "Payment Record"
    },
    {
      key: "ratingIsLeaseReschedulingPastPresent",
      label: "Lease Rescheduling (past/current)"
    },
    {
      key: "ratingRiskPic",
      label: "Risk PIC"
    }
  ]

  const renderValue = (key: string, additionalKey?: string) => {
    const value = ratingInfo[key as keyof RatingInfo];
    const additionalValue = additionalKey ? ratingInfo[additionalKey as keyof RatingInfo] : null;

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
    <Row style={{padding: padding}}>
      {ratingInfoTop.map((el) => {
        return (
          <Col span={12} style={{marginBottom: margin}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{renderValue(el.key, el.additionalKey)}</Text>
            </Flex>
          </Col>
        )
      })
      }
      <Divider/>
      {ratingInfoBottom.map((el) => {
        return (
          <Col span={12} style={{marginBottom: margin}}>
             <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              <Text style={{fontSize: fontSize, lineHeight: lineHeightSM}}>{renderValue(el.key)}</Text>
            </Flex>
          </Col>
        )
      })
      }
    </Row>
  )
};

export default RatingInfoView;