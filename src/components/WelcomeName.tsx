import { useEffect, useState } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { Typography } from "antd";

const { Text } = Typography;

const WelcomeName = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [name, setName] = useState("");

  useEffect(() => {
    if (account && account.name) {
      setName(account.name);
    } else {
      setName("");
    }
  }, [account]);

  if (name) {
    return <Text>{name} </Text>;
  } else {
    return null;
  }
};

export default WelcomeName;
