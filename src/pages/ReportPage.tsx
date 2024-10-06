import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import PageNotAccessible from "./PageNotAccessible";

import PowerBiService from "../utilities/PowerBiService";
import { PowerBiReport } from "../models/PowerBiModels";

import * as powerbi from "powerbi-client";
import * as models from "powerbi-models";

// ensure Power BI JavaScript API has loaded
require("powerbi-models");
require("powerbi-client");

export type ViewMode = "FitToPage" | "FitToWidth" | "ActualSize";

const ReportPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const embedContainer = useRef(null);
  const { path } = useParams();

  const [embeddedReport, setEmbeddedReport] = useState<powerbi.Report | null>(
    null
  );
  const [embeddedNewReport, setEmbeddedNewReport] =
    useState<powerbi.Embed | null>(null);

  const [embedType, setEmbedType] = useState<
    "ExistingReport" | "NewReport" | null
  >(null);
  const [reportType, setReportType] = useState<
    "PowerBiReport" | "PaginatedReport" | null
  >(null);

  const [workspaceId, setWorkspaceId] = useState<string>(
    "a4fff074-ccec-4a40-b42f-fde514033178"
  );
  const [reportId, setReportId] = useState<string>(
    "6ca41326-afaf-4f0a-8e19-d75309773797"
  );

  const [editMode, setEditMode] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showFiltersPane, setShowFiltersPane] = useState(true);
  const [showBookmarksPane, setShowBookmarksPane] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("FitToPage");

  const embedExistingReport = async (WorkspaceId: string, ReportId: string) => {
    if (embedContainer.current == null) return;
    const params = new URLSearchParams(window.location.search);
    const openInEditMode = params.get("edit") === "true";
    setEditMode(openInEditMode);

    const defaultShowNavigation: boolean = false;
    setShowNavigation(defaultShowNavigation);
    const defaultShowFilterPane: boolean = false;
    setShowFiltersPane(defaultShowFilterPane);
    const defaultShowBookmarksPane: boolean = false;
    setShowBookmarksPane(defaultShowBookmarksPane);
    const defaultViewMode: ViewMode = "FitToWidth";
    setViewMode(defaultViewMode);

    let report: PowerBiReport = await PowerBiService.GetReport(
      WorkspaceId,
      ReportId
    );

    setEmbedType("ExistingReport");
    setReportType("PowerBiReport");

    let accessToken: string = await PowerBiService.GetAccessToken();

    var config: powerbi.IReportEmbedConfiguration = {
      type: "report",
      id: report.id,
      embedUrl: report.embedUrl,
      accessToken: accessToken,
      tokenType: models.TokenType.Aad,
      viewMode: openInEditMode ? models.ViewMode.Edit : models.ViewMode.View,
      permissions: models.Permissions.All,
      filters: [
        {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "StateDim",
            column: "State",
          },
          operator: "In",
          values: ["Iowa"],
          filterType: models.FilterType.Basic,
          requireSingleSelection: true,
        },
      ],
      settings: {
        // background: models.BackgroundType.Transparent,
        panes: {
          pageNavigation: {
            visible: defaultShowNavigation,
            position: models.PageNavigationPosition.Left,
          },
          filters: { visible: defaultShowFilterPane, expanded: false },
          bookmarks: { visible: defaultShowBookmarksPane },
        },
        bars: {
          actionBar: { visible: false },
        },
        persistentFiltersEnabled: false,
        personalBookmarksEnabled: false,
      },
    };

    console.log("config", config);

    // Embed the report and display it within the div container
    var embeddedReport: powerbi.Report = window.powerbi.embed(
      embedContainer.current,
      config
    ) as powerbi.Report;

    // embeddedReport.on("filtersApplied", (args) => {
    //   embeddedReport.savePersistentFilters();
    // });
    // embeddedReport.on("dataSelected", (args) => {
    //   embeddedReport.savePersistentFilters();
    // });
    // embeddedReport.on("visualClicked", (args) => {
    //   embeddedReport.savePersistentFilters();
    // });
    // embeddedReport.on("selectionChanged", (args) => {
    //   embeddedReport.savePersistentFilters();
    // });

    setEmbeddedReport(embeddedReport);
    console.log(embeddedReport);

    embeddedReport.on("saved", (event: any) => {
      console.log("embeddedReport.on", event);
    });
  };

  // set height of embed container relative to height of window
  const setReportContainerHeight = () => {
    if (embedContainer.current == null) return;
    var reportContainer: HTMLElement = embedContainer.current;
    var reportContainerTopPosition =
      reportType === "PaginatedReport" ? 88 : 122;
    reportContainer.style.height =
      window.innerHeight - reportContainerTopPosition - 100 + "px";
  };

  useLayoutEffect(() => {
    if (isAuthenticated) {
      setReportContainerHeight();
      window.addEventListener("resize", setReportContainerHeight);
    }
  }, [isAuthenticated, reportType]);

  // call Power BI REST API and embed report
  useEffect(() => {
    const runUseEffectAsync = async () => {
      if (embedContainer.current == null) return;
      window.powerbi.reset(embedContainer.current);

      embedExistingReport(workspaceId, reportId);
      return;
    };

    if (isAuthenticated) {
      runUseEffectAsync();
    }
  }, [path]);

  if (!isAuthenticated) {
    return <PageNotAccessible />;
  } else {
    return (
      <div>
        <div ref={embedContainer} />
      </div>
    );
  }
};

export default ReportPage;
