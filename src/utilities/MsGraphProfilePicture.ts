import { getAuthProvider } from "./authProvider";
import { Client } from "@microsoft/microsoft-graph-client";

export const getProfilePicture = async () => {
  const client = Client.initWithMiddleware({
    authProvider: await getAuthProvider(),
  });

  return await client.api("/me/photo/$value").get();
};
