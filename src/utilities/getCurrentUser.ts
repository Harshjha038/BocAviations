import { msalInstance } from "../index";

export function getCurrentUser(): string {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }
  return account?.username;
}
