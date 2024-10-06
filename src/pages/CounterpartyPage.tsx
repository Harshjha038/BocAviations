import React, { useState, useEffect, useCallback } from "react";
import CounterpartyContentLayout from "../components/Counterparty/CounterpartyContentLayout";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { reviewers } from "../utilities/contants";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "antd";
import IndicativeRatingApprovalModal from "../components/Modals/IndicativeRatingApprovalModal";
import {
  contentMap,
  tabsItems,
  archiveTab,
} from "../components/Counterparty/CounterpartyRoutes";
import { getInitialBreadcrumbData } from "../components/Counterparty/breadcrumbHelper";
import { showCustomInfoModal } from "../components/Modals/CustomInfoModal";
import GenerateCreditReportModal from "src/components/Modals/GenerateReportModal";

function CounterpartyPage() {
  const [isEditCounterpartyProfile, setIsEditCounterpartyProfile] = useState(false);
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [activeTabKey, setActiveTabKey] = useState<string>("profile");
  const [status, setStatus] = useState<
    "in-progress" | "under-first-review" | "under-second-review" | "completed"
  >("in-progress");
  const [isSeekApprovalModalOpen, setIsSeekApprovalModalOpen] = useState(false);
  const [isGenerateCreditReportModalOpen, setIsGenerateCreditReportModalOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Cathay Pacific");
  const [showCustomHeader, setShowCustomHeader] = useState(false);
  const [breadcrumbData, setBreadcrumbData] = useState<BreadcrumbItemType[]>(
    getInitialBreadcrumbData("Cathay Pacific")
  );
  const [selectedReviewer, setSelectedReviewer] = useState<string>(
    reviewers[0].label
  );
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [reportType, setReportType] = useState('Credit assessment');
  const [currencyType, setCurrencyType] = useState('USD');

  const handleReportTypeChange = (value: string) => {
    setReportType(value);
  };

  const handleCurrencyTypeChange = (value: string) => {
    setCurrencyType(value);
  };

  const handleReviewerSelection = useCallback((key: string) => {
    const reviewer = reviewers.find((rev) => rev.key === key);
    if (reviewer) setSelectedReviewer(reviewer.label);
  }, []);

  const updateContent = useCallback((tabKey: string) => {
    const tabContent = tabsItems(handleEditFinancials, handleEditProfile, uuid ? uuid : "", isEditCounterpartyProfile).find(
      (item) => item.key === tabKey
    )?.children;
    if (tabContent) {
      setCurrentContent(tabContent);
    } else {
      setCurrentContent(contentMap[tabKey]);
    }
  }, []);

  const [currentContent, setCurrentContent] = useState<React.ReactNode>(
    contentMap["Cathay Pacific"]
  );

  useEffect(() => {
    updateContent(activeTabKey);
    navigate(`/counterparty/${uuid}/${activeTabKey}`);
  }, [activeTabKey, navigate, updateContent]);

  const handleSeekApproval = () => setIsSeekApprovalModalOpen(true);
  const handleSeekSecondApproval = () => setIsSeekApprovalModalOpen(true);
  const handleGenerateCreditReport = () => setIsGenerateCreditReportModalOpen(true);

  const handleSeekApprovalConfirm = () => {
    setIsSeekApprovalModalOpen(false);
    if (status === "in-progress") {
      setStatus("under-first-review");
      setBreadcrumbData(getInitialBreadcrumbData("Cathay Pacific", "Submit"));
      setPageTitle("Seek approval for annual review rating");
      setCurrentContent(contentMap["Submit"]);
      setShowCustomHeader(true);
    } else {
      setStatus("under-second-review");
    }
  };

  const handleGenerateReportConfirm = () => {
    setIsGenerateCreditReportModalOpen(false);
     
    { reportType === "Credit assessment" 
      ? navigate(`/counterparty/1/generate-credit-report/credit-assessment`, { state: { currencyType, reportType }}) 
      : navigate(`/counterparty/1/generate-credit-report/annual-review`, { state: { currencyType, reportType }}) }
  };

  const handleSeekApprovalModalClose = () => setIsSeekApprovalModalOpen(false);
  const handleGenerateCreditReportModalClose = () => setIsGenerateCreditReportModalOpen(false);

  const handleGoBack = () => {
    if (breadcrumbData.length > 2) {
      setBreadcrumbData((prevBreadcrumbs) => {
        const newBreadcrumbs = prevBreadcrumbs.slice(0, -1);
        const previousPage = newBreadcrumbs[newBreadcrumbs.length - 1];
        setPageTitle(previousPage.title as string);
        updateContent(activeTabKey);
        setShowCustomHeader(false);
        setIsEditCounterpartyProfile(false)
        return newBreadcrumbs;
      });
    }
  };

  const handleArchiveTabClick = () => {
    handleShowCustomHeader("Archives", "Archives", "Archives");
  };

  // const handleGenerateCreditReport = () => {
  //   setBreadcrumbData(
  //     getInitialBreadcrumbData("Cathay Pacific", "Generate report")
  //   );
  //   setPageTitle("Generate credit assessment report");
  //   setCurrentContent(contentMap["Report"]);
  //   setShowCustomHeader(true);
  // };

  const handleDownloadCreditReport = () => {
    console.log("handleDownloadCreditReport............");
  };

  const handleRetractSubmission = () => {
    showCustomInfoModal({
      title: "Are you sure you want to retract your submission?",
      content: <div>You may edit and submit again.</div>,
      onOk: () => {
        console.log("Submission retracted");
        setStatus("in-progress");
      },
      buttonStyles: {
        backgroundColor: colorPrimary,
        borderColor: colorPrimary,
      },
    });
  };

  const onStartEditing = () => {
    console.log("onStartEditing............");
  };

  const handleEditFinancials = () => {
    handleShowCustomHeader("Edit Cathay Pacific Financials", "Edit Financials", "EditFinancial");
  };

  const handleEditProfile = () => {
    handleShowCustomHeader("Edit Cathay Pacific Profile", "Edit Profile", "EditProfile");
  };

  const handleShowCustomHeader = (
    title = "Default Title",
    breadcrumbTitle = "Default Breadcrumb",
    contentKey = "DefaultContent"
  ) => {
    setIsEditCounterpartyProfile(true);
    setShowCustomHeader(true);
    setPageTitle(title);
    setBreadcrumbData(getInitialBreadcrumbData("Cathay Pacific", breadcrumbTitle));
    setCurrentContent(contentMap[contentKey]);
  };

  return (
    <>
      <CounterpartyContentLayout
        pageTitle={pageTitle}
        tabsItems={tabsItems(handleEditFinancials, handleEditProfile, uuid ? uuid : "", isEditCounterpartyProfile)}
        activeTabKey={activeTabKey}
        setActiveTabKey={setActiveTabKey}
        breadcrumbData={breadcrumbData}
        extraTabContent={archiveTab(handleArchiveTabClick)}
        status={status}
        onSeekApproval={handleSeekApproval}
        onSeekSecondApproval={handleSeekSecondApproval}
        onGoBack={handleGoBack}
        showCustomHeader={showCustomHeader}
        handleGenerateCreditReport={handleGenerateCreditReport}
        handleDownloadCreditReport={handleDownloadCreditReport}
        handleRetractSubmission={handleRetractSubmission}
        onStartEditing={onStartEditing}
        handleEditFinancials={handleEditFinancials}
        isEditCounterpartyProfile={isEditCounterpartyProfile}
      >
        {currentContent}
      </CounterpartyContentLayout>
      <IndicativeRatingApprovalModal
        isOpen={isSeekApprovalModalOpen}
        selectedReviewer={selectedReviewer}
        onSelectReviewer={handleReviewerSelection}
        onConfirm={handleSeekApprovalConfirm}
        onCancel={handleSeekApprovalModalClose}
      />
      <GenerateCreditReportModal
        isOpen={isGenerateCreditReportModalOpen}
        onConfirm={handleGenerateReportConfirm}
        onCancel={handleGenerateCreditReportModalClose}
        reportType={reportType}
        onReportTypeChange={handleReportTypeChange}
        currencyType={currencyType}
        onCurrencyTypeChange={handleCurrencyTypeChange}

      />
    </>
  );
}

export default CounterpartyPage;

