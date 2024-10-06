import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
} from "@azure/msal-react";
import "reactflow/dist/style.css";
import { theme } from "antd";
import { LoginPage } from "./LoginPage/LoginPage";
import GenericContentLayout from "src/components/GenericContentLayout";

export function TasksPage() {
    return (
        <>
            <AuthenticatedTemplate>
                <GenericContentLayout
                     pageTitle={"Tasks"} 
                     breadcrumbData={[{title: <div>Tasks</div>}]}
                >
                    Task List here
                </GenericContentLayout>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                Please sign-in to see your profile information
                <LoginPage />
            </UnauthenticatedTemplate>
        </>
    );
}
