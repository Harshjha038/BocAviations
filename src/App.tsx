import { Routes, Route, useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ApolloProvider } from "@apollo/client";
// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./utilities/NavigationClient";

// Apollo Client
import client from "./ApolloClient";

// Sample app imports
import { PageLayout } from "./components/PageLayout/PageLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ManageProfilePage } from "./pages/ManageProfilePage";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Report from "./pages/ReportPage";
import { OrgChart } from "./pages/OrgChart";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import crmsThemeConfig from "./themeConfig";
import Counterparty from "./pages/CounterpartyPage";
import { EmptyPage } from "./pages/EmptyPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { TasksPage } from "./pages/TasksPage";
import { CreditAssessment } from "./pages/CounterpartyPage/CreditAssessment";
import { AnnualReview } from "./pages/CounterpartyPage/AnnualReview";
import { AuthenticateMemberTemplate, UserContext } from "./components/AuthenticateMemberTemplate";
import { useContext } from "react";
import PageNotAccessible from "./pages/PageNotAccessible";

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <ConfigProvider theme={crmsThemeConfig}>
      <MsalProvider instance={pca}>
        <ApolloProvider client={client}>
          <AuthenticatedTemplate>
            <AuthenticateMemberTemplate>
              <PageLayout>
                <Pages />
              </PageLayout>
            </AuthenticateMemberTemplate>
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <LoginPage />
          </UnauthenticatedTemplate>
        </ApolloProvider>
      </MsalProvider>
    </ConfigProvider>
  );
}

function Pages() {
  const { userRole } = useContext(UserContext); // Get the user role from context

  // Create a function to check if the user has the required roles
  const isAuthorized = (role: string) => ["ADMIN", "CONTRIBUTOR"].includes(role);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/manage_profile" element={<ManageProfilePage />} />
      <Route path="/counterparty/:uuid/*" element={<Counterparty />} />
      <Route path="/counterparty/:uuid/generate-credit-report/credit-assessment" element={<CreditAssessment />} />
      <Route path="/counterparty/:uuid/generate-credit-report/annual-review" element={<AnnualReview />} />
      <Route path="/test_report" element={<Report />} />
      <Route path="/test_orgchart" element={<OrgChart />} />
      <Route path="/empty_page" element={<EmptyPage />} />
      <Route
        path="/tasklist"
        element={
          isAuthorized(userRole) ? (
            <TasksPage />
          ) : (
            <PageNotAccessible />
          )
        }
      />
      <Route path="/page_inaccessible" element={<PageNotAccessible />} />
    </Routes>
  );
}

export default App;
