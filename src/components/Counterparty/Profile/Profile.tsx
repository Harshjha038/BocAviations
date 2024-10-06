import React, { useState } from "react";
import { Layout, Typography, Flex, theme, Collapse, Button, Row, Col, Checkbox, Rate } from "antd";
import type { CollapseProps } from 'antd';
import { EditOutlined, ApartmentOutlined, PlusOutlined } from "@ant-design/icons";
import CompanyInfoView from "./CompanyInfo/CounterpartyCompanyInfoView";
import CompanyInfoEdit from "./CompanyInfo/CounterpartyCompanyInfoEdit";
import MarketInfoView from "./MarketInfo/CounterpartyMarketinfoView";
import MarketInfoEdit from "./MarketInfo/CounterpartyMarketinfoEdit";
import RatingInfoView from "./RatingInfo/CounterpartyRatingInfoView";
import RatingInfoEdit from "./RatingInfo/CounterpartyRatingInfoEdit";
import AuditInfoView from "./AuditInfo/CounterpartyAuditInfoView";
import RiskPoliciesView from "./PoliciesInfo/CounterpartyRiskPoliciesView";
import RiskPoliciesEdit from "./PoliciesInfo/CounterpartyRiskPoliciesEdit";
import CounterpartyRelationshipCardView from "./RelationshipInfo/CounterpartyRelationshipCardView";
import CounterpartyRelationshipCardEdit from "./RelationshipInfo/CounterpartyRelationshipCardEdit";
import CounterpartyManagementView from "./ManagementInfo/CounterpartyManagementInfoView";
import CounterpartyManagementEdit from "./ManagementInfo/CounterpartyManagementInfoEdit";
import { gql, useQuery } from "@apollo/client";
import { GenericLoader } from "src/components/GenericLoader";

const { Header } = Layout;
const { Content } = Layout;
const { Text } = Typography;

interface ProfileProps {
  uuid?: string;
  editCounterpartyProfile?: boolean;
  handleEditProfile?: () => void;
}

const COUNTERPARTY_QUERY = gql`
query{
  counterparty(id:"FB8A8B67-B96B-EF11-BDFD-000D3AC8A3EA",current: true){
    id
    isInWatchlist
    isStarred
    counterpartyVersions {
      id
      counterpartyId
      version
      isCurrent
      finalReportFile
      kycFile
      counterpartyProfile {
        id
        legalName
        commonName
        airlineGroup
        lesseeGroup
        ciriumName
        airlineTier
        dateOfIncorporation
        dateOfOperations
        status
        marketCapitalisationValueUsdm
        marketCapitalisationAsAtDate
        hasPastBankruptcyRestructuring
        dateOfRelationshipCommencement
        isRelationshipLessee
        isRelationshipIndicative
        isRelationshipGuarantor
        portfolioType
        airlineType
        lesseeType
        isFlagCarrier
        icaoCode
        hasKycIssues
        countryOfIncorporation
        region
        subRegion
        isCapeTownAccession
        marketSpRating
        marketSpOutlook
        marketMoodysRating
        marketMoodysOutlook
        marketFitchRating
        marketFitchOutlook
        annualReviewRatingId
        indicativeRatingId
        ratingOutlook
        ratingSpRating
        ratingSpOutlook
        ratingMoodysRating
        ratingMoodysOutlook
        ratingFitchRating
        ratingFitchOutlook
        ratingPaymentRecord
        ratingIsLeaseReschedulingPastPresent
        ratingRiskPic
        aircraftDepreciation
        fuelHedging
        fxHedging
        interestRateHedging
        liquidityPolicy
        counterpartyId
        counterpartyVersionId
      }
    }
  }
}`

const Profile : React.FC<ProfileProps> = ({ handleEditProfile, uuid, editCounterpartyProfile }) => {

  const [rating, setRating] = useState(0);

  const {
    token: {
      marginMD,
      colorBgContainer,
      paddingLG,
      fontSize,
      fontSizeLG,
      lineHeightSM,
      fontSizeHeading5,
      colorBorder,
      borderRadiusXS,
      margin,
      padding,
      paddingSM,
      paddingXXS
    },
  } = theme.useToken();
  
  const handleID = uuid ? uuid : "FB8A8B67-B96B-EF11-BDFD-000D3AC8A3EA"

  const { loading, error, data } = useQuery(COUNTERPARTY_QUERY, {
    variables: { id: handleID, current: true },
  });
  if (loading) return <><GenericLoader></GenericLoader></>

  const handleEdit = () => {
    if (handleEditProfile) {
      handleEditProfile();
    }
  }

  const handleAddToStarred = () => {
    setRating(prevRating => (prevRating === 0 ? 1 : 0));
  };

  const companyInfo: CollapseProps['items'] = [
    {
      key: '1',
      label: <Text style={{ fontSize: fontSize, fontWeight: "400", paddingLeft: editCounterpartyProfile ? padding : 0 }}>Company Info</Text>,
      children: editCounterpartyProfile ? <CompanyInfoEdit /> : <CompanyInfoView companyInfo= {data.counterparty.counterpartyVersions[0].counterpartyProfile} />,
      showArrow: editCounterpartyProfile ? false : true
    }
  ];

  const marketInfo: CollapseProps['items'] = [
    {
      key: '1',
      label: <Text style={{ fontSize: fontSize, fontWeight: "400", paddingLeft: editCounterpartyProfile ? padding : 0  }}>Market Info</Text>,
      children: editCounterpartyProfile ? <MarketInfoEdit /> : <MarketInfoView marketInfo= {data.counterparty.counterpartyVersions[0].counterpartyProfile} />,
      showArrow: editCounterpartyProfile ? false : true
    }
  ];

  const ratingInfo: CollapseProps['items'] = [
    {
      key: '1',
      label: <Text style={{ fontSize: fontSize, fontWeight: "400", paddingLeft: editCounterpartyProfile ? padding : 0  }}>Counterparty Rating Info</Text>,
      children: editCounterpartyProfile ? <RatingInfoEdit /> : <RatingInfoView ratingInfo= {data.counterparty.counterpartyVersions[0].counterpartyProfile} />,
      showArrow: editCounterpartyProfile ? false : true
    }
  ];

  const auditInfo: CollapseProps['items'] = [
    {
      key: '1',
      label: <Text style={{ fontSize: fontSize, fontWeight: "400", paddingLeft: editCounterpartyProfile ? padding : 0  }}>Audit Info</Text>,
      children: <AuditInfoView />,
      showArrow: editCounterpartyProfile ? false : true
    }
  ];

  const policiesInfo: CollapseProps['items'] = [
    {
      key: '1',
      label: <Text style={{ fontSize: fontSize, fontWeight: "400", paddingLeft: editCounterpartyProfile ? padding : 0  }}>Key Accounting/ Risk Policies</Text>,
      children: editCounterpartyProfile ? <RiskPoliciesEdit /> : <RiskPoliciesView policiesInfo= {data.counterparty.counterpartyVersions[0].counterpartyProfile} />,
      showArrow: editCounterpartyProfile ? false : true
    }
  ];

  return (
    <div>
      {!editCounterpartyProfile ? <Header style={{ marginBottom: margin, lineHeight: lineHeightSM, alignContent: "center" }}>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={8}>
            <Text strong style={{ fontSize: fontSizeHeading5, fontWeight: "500" }}> Profile </Text>
            <Button
              type="text"
              icon={<EditOutlined />}
              className="notification-button"
              style={{
                borderColor: colorBorder,
              }}
              onClick={handleEdit}
            />
          </Flex>
          <Flex gap={12} align="center">
            <Flex onClick={handleAddToStarred} style={{ fontSize: fontSizeLG, cursor: "pointer" }} gap={8} align={"center"}>
              <div onClick={handleAddToStarred} style={{ display: 'inline-block' }}>
                <Rate count={1} value={rating} onChange={setRating} />
              </div>
              Add to starred
            </Flex>
            <Checkbox style={{ fontSize: fontSizeLG, border: "none", borderColor: colorBorder }}>Add to watchlist</Checkbox>
          </Flex>
        </Flex>
      </Header> : ""}
      <Row>
        <Col span={14}>
          <Content style={{ background: colorBgContainer, marginRight: marginMD, marginBottom: marginMD, padding: paddingLG, borderRadius: borderRadiusXS }}>
            <Text style={{ fontSize: fontSizeHeading5, fontWeight: "500" }}>Counterparty Details</Text>
            {editCounterpartyProfile ? 
            <div>
              <Collapse collapsible="icon" items={companyInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse collapsible="icon" items={marketInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
            </div>
            :
            <div>
              <Collapse items={companyInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse items={marketInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
            </div>}
          </Content>
          <Content style={{ background: colorBgContainer, marginRight: marginMD, marginBottom: marginMD, padding: paddingLG, borderRadius:    borderRadiusXS }}>
            <Text style={{ fontSize: fontSizeHeading5, fontWeight: "500" }}>Financial Outline</Text>
            {editCounterpartyProfile ? 
            <div>
              <Collapse collapsible="icon" items={ratingInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse collapsible="icon" items={auditInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse collapsible="icon" items={policiesInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
            </div>
            :
            <div>
              <Collapse items={ratingInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse items={auditInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
              <Collapse items={policiesInfo} style={{ marginTop: marginMD }} bordered={false} defaultActiveKey={['1']} />
            </div>}
          </Content>
        </Col>
        <Col span={10}>
          <Flex vertical gap={32}>
            <Flex gap={24} vertical style={{ background: colorBgContainer, padding: paddingLG, borderRadius: borderRadiusXS }}>
              <Flex align="center" justify="space-between">
                <Text style={{ fontSize: fontSizeHeading5, fontWeight: "500" }}>Relationships</Text>
                <Button> <ApartmentOutlined />Generate Chart</Button>
              </Flex>
              {editCounterpartyProfile ? 
              <Content>
                <Flex vertical gap={16}>
                  <CounterpartyRelationshipCardEdit/>
                </Flex>
              </Content>
              : <CounterpartyRelationshipCardView />}
            </Flex>
            <Flex vertical gap={24} style={{ background: colorBgContainer, padding: paddingLG, borderRadius: borderRadiusXS }}>
              <Flex justify="space-between" >
                <Text style={{ fontSize: fontSizeHeading5, fontWeight: "500" }}>Board of directors/Management</Text>
              </Flex>
              {editCounterpartyProfile ? 
                <Content style={{background: "#FAFAFA", padding: padding }}>
                  <Flex vertical gap={16}>
                    <Text style={{ fontSize: fontSize,
                      fontWeight: "400"
                        }}>Board of directors/Management</Text>
                    <CounterpartyManagementEdit/>
                  </Flex>
                </Content>
                : <CounterpartyManagementView />}
            </Flex>
          </Flex>
        </Col>
      </Row>
    </div>
  )
}

export default Profile;