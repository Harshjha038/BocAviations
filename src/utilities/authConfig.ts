import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: `${process.env.REACT_APP_AZURE_IDENTITY_ENTERPRISE_APP_CLIENT_ID}`,
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    system: {
        allowNativeBroker: false // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: [        
        `api://${process.env.REACT_APP_AZURE_IDENTITY_ENTERPRISE_APP_CLIENT_ID}/CRMS.Access`,
        'email',
        ]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
export const PowerBiPermissionScopes: string[] = [
    // "https://analysis.windows.net/powerbi/api/Dashboard.Read.All",
    // "https://analysis.windows.net/powerbi/api/Dataset.Read.All",
    // "https://analysis.windows.net/powerbi/api/Report.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Report.Read.All",
    // "https://analysis.windows.net/powerbi/api/Group.Read.All",
    // "https://analysis.windows.net/powerbi/api/Workspace.ReadWrite.All",
    // "https://analysis.windows.net/powerbi/api/Content.Create"
  ]

export const PowerBiLoginRequest: PopupRequest = {
    scopes: PowerBiPermissionScopes
};
