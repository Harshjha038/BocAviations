import { msalInstance } from "../index";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType } from "@azure/msal-browser";

export const getAuthProvider = async () => {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  // @microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser
  const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
    msalInstance,
    {
      account,
      interactionType: InteractionType.Popup,
      scopes: [
        `api://${process.env.REACT_APP_AZURE_IDENTITY_ENTERPRISE_APP_CLIENT_ID}/CRMS.Access`,
        'email',
      ],
    }
  );

  return authProvider;
};
