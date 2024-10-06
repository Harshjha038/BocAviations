import React from "react";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

export const getInitialBreadcrumbData = (
  pageTitle: string,
  additionalTitle: string = ""
): BreadcrumbItemType[] => {
  const breadcrumbs: BreadcrumbItemType[] = [
    { title: <a href="/counterparties">Counterparties</a> },
    { title: <div>{pageTitle}</div> },
  ];

  if (additionalTitle) {
    breadcrumbs.push({ title: <div>{additionalTitle}</div> });
  }

  return breadcrumbs;
};
