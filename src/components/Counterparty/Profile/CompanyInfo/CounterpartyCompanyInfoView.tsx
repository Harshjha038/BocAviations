import React, {useState} from "react";
import {Typography, Row, Col, theme, Divider, Flex} from "antd";
import dayjs from 'dayjs';
import { FlagFilled } from '@ant-design/icons';

const{Text} = Typography;

interface CompanyInfo {
  legalName?: string;
  commonName?: string;
  airlineGroup?: string;
  lesseeGroup?: string;
  ciriumName?: string;
  tradingName?: string;
  dateOfIncorporation?: string;
  dateOfOperations?: string;
  status?: string;
  airlineTier?: string;
  marketCapitalisationValueUsdm?: number;
  marketCapitalisationAsAtDate?: string;
  hasPastBankruptcyRestructuring?: boolean;
  dateOfRelationshipCommencement?: string;
  isRelationshipLessee?: boolean;
  isRelationshipIndicative?: boolean;
  isRelationshipGuarantor?: boolean;
  portfolioType?: string;
  airlineType?: string;
  isFlagCarrier?: boolean;
  lesseeType?: string;
  icaoCode?: string;
  hasKycIssues?: boolean;
  dateOfLastKYC?: string;
}

interface ProfileInfoViewProps {
  companyInfo: CompanyInfo;
}

const CompanyInfoView: React.FC<ProfileInfoViewProps> = ({ companyInfo }) => {

  const companyData = [
    {
      key: "legalName",
      label: "Legal Name"
    },
    {
      key: "commonName",
      label: "Common Name"
    },
    {
      key: "airlineGroup",
      label: "Airline Group"
    },
    {
      key: "lesseeGroup",
      label: "Lessee Group"
    },
    {
      key: "ciriumName",
      label: "Cirium Name"
    },
    {
      key: "tradingName",
      label: "Trading Name"
    },
    {
      key: "dateOfIncorporation",
      label: "Date of Incorporation"
    },
    {
      key: "dateOfOperations",
      label: "Date of Operations"
    },
    {
      key: "status",
      label: "Status"
    },
    {
      key: "airlineTier",
      label: "Airline Tier"
    },
    {
      key: "marketCapitalisationValueUsdm",
      label: "Market Capitalisation (eqUS$’m)"
    },
    {
      key: "marketCapitalisationAsAtDate",
      label: "Market Capitalisation as at"
    },
    {
      key: "hasPastBankruptcyRestructuring",
      label: "Past Bankruptcy/ Restructuring"
    },
    {
      key: "dateOfRelationshipCommencement",
      label: "Date of Relationship Commencement"
    },

  ];

  const companyLeaseData = [
    {
      key: "isRelationshipLessee",
      label: "Lessee"
    },
    {
      key: "isRelationshipIndicative",
      label: "Indicative"
    },
    {
      key: "isRelationshipGuarantor",
      label: "Guarantor"
    },
    {
      key: "portfolioType",
      label: "Portfolio type"
    },
    {
      key: "airlineType",
      label: "Airline Type"
    },
    {
      key: "isFlagCarrier",
      label: "Flag Carrier"
    },
    {
      key: "lesseeType",
      label: "Lessee Type"
    },
    {
      key: "icaoCode",
      label: "ICAO Code"
    },
    {
      key: "hasKycIssues",
      label: "KYC Issues"
    },
    {
      key: "dateOfLastKYC",
      label: "Date of Last KYC"
    },
  ]

  const formatDate = (dateString?: string) => {
    if (dateString && dayjs(dateString).isValid()) {
      return dayjs(dateString).format('DD MMM YYYY');
    }
    return "-";
  };
  
  const isMoreThanTwoYearsOld = (dateString?: string) => {
    if (dateString && dayjs(dateString).isValid()) {
      return dayjs(dateString).isAfter(dayjs().subtract(2, 'year')) && dayjs(dateString).isBefore(dayjs().add(1, 'day'));
    }
    return false;
  };

  const renderValue = (key: keyof CompanyInfo): string => {
    const value = companyInfo[key];
  
    if (value === undefined || value === null) {
      return "-";
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (typeof value === "number") {
      return value.toString();
    }
    if (typeof value === "string") {
      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
      if (isoDateRegex.test(value) && dayjs(value).isValid()) {
        return formatDate(value);
      }
      return value;
    }
    return "-";
  };

  const {
    token: {
      margin,
      colorBgMask,
      fontSize,
      lineHeightSM,
      padding,
      colorPrimary,
      marginXS 
    },
  } = theme.useToken();

  return (
    <Row style={{padding: padding}}>
      {companyData.map((el) => (
      <Col span={12} style={{ marginBottom: margin }} key={el.key}>
        <Flex vertical>
          <Text style={{ color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM }}>
            {el.label}
          </Text>
          <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM }}>
            {renderValue(el.key as keyof CompanyInfo)}
            <span>{el.key === "dateOfOperations" && companyInfo.dateOfOperations && isMoreThanTwoYearsOld(companyInfo.dateOfOperations) 
              && (<FlagFilled style={{ color: colorPrimary, marginLeft: marginXS  }} />)}
            </span>
          </Text>
          
        </Flex>
      </Col>
      ))}
      <Divider/>
      {companyLeaseData.map((el) => {
        return (
          <Col span={6} style={{marginBottom: margin}}>
            <Flex vertical>
              <Text style={{color: colorBgMask, fontSize: fontSize, lineHeight: lineHeightSM}}>{el.label}</Text>
              <Text style={{ fontSize: fontSize, lineHeight: lineHeightSM }}>
                {renderValue(el.key as keyof CompanyInfo)}
              </Text>
            </Flex>
          </Col>
        )
      })
      }
    </Row>
    
  )
};

export default CompanyInfoView;