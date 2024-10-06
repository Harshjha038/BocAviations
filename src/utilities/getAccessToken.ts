import { loginRequest } from "../utilities/authConfig";
import { msalInstance } from "../index";

export async function getAccessToken() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  const response = await msalInstance.acquireTokenSilent({
    ...loginRequest,
    account: account,
  });
  return response.accessToken;
}
