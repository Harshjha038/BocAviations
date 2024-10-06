// src/routes/CounterpartyRoutes.tsx
import React from "react";
import { FolderOpenOutlined } from "@ant-design/icons";
import { CounterpartyFinancialsView } from "../Counterparty/Financials/CounterpartyFinancialsView";
import { CounterpartyFinancialsEdit } from "../Counterparty/Financials/CounterpartyFinancialsEdit";
import Profile from "../Counterparty/Profile/Profile";
import CounterpartyKYCView from "./KYC/CounterpartyKYCView";


export const contentMap: Record<string, React.ReactNode> = {
  "Cathay Pacific": <div>Cathay Pacific Main Content</div>,
  Submit: <div>Submit Content...</div>,
  Archives: <div>Archives Content..</div>,
  Report: <div>Generate Report Content..</div>,
  EditFinancial: <CounterpartyFinancialsEdit />,
  EditProfile: <Profile />
};

export const tabsItems = (handleEditFinancials: () => void, handleEditProfile: () => void, uuid: string, editCounterpartyProfile: boolean) => [
  { key: "profile", 
    label: "Profile", 
    children: (
      <Profile 
      handleEditProfile={handleEditProfile}
      uuid={uuid}
      editCounterpartyProfile={editCounterpartyProfile}
      />)  },
  {
    key: "financials",
    label: "Financials",
    children: (
      <CounterpartyFinancialsView
      handleEditFinancials={handleEditFinancials}
      />
    ),
  },
  { key: "rating", label: "Rating", children: <div>Rating Content</div> },
  { key: "KYC", 
    label: "KYC", 
    children: (
      <CounterpartyKYCView/>
    ) },
  { key: "fleet", label: "Fleet", children: <div>Fleet Content</div> },
  { key: "TTM", label: "TTM", children: <div>TTM Content</div> },
];

export const archiveTab = (handleArchiveTabClick: () => void) => ({
  key: "archives",
  label: (
    <span onClick={handleArchiveTabClick}>
      <FolderOpenOutlined style={{ marginRight: 8 }} />
      Archives
    </span>
  ),
});
