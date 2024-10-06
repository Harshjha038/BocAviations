import { gql, useMutation } from "@apollo/client";
import { Spin } from "antd";
import { createContext, useEffect, useState } from "react";
import PageNotAccessible from "src/pages/PageNotAccessible";
import { getCurrentUser } from "src/utilities/getCurrentUser";

type UserRoleType = "CONTRIBUTOR" | "ADMIN" | "VIEWER" | "";

export const UserContext = createContext({
  isValidMember: false,
  userRole: "",
});

const VALIDATE_USER_IS_MEMBER = gql`
  mutation ValidateUserIsMember($username: String!) {
    validateUserIsMember(username: $username) {
      status
      data {
        username
        name
        role
      }
    }
  }
`;

export function AuthenticateMemberTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isValidMember, setIsValidMember] = useState(false);
  const [userRole, setUserRole] = useState<UserRoleType>("");
  const [validateIsUserMember, { loading, error, data }] = useMutation(
    VALIDATE_USER_IS_MEMBER
  );

  useEffect(() => {
    console.log(`getCurrentUser(): ${getCurrentUser()}`);
    const _validateIsUserMember = async () => {
      return await validateIsUserMember({
        variables: { username: getCurrentUser() },
      });
    };

    _validateIsUserMember().then((response) => {
      console.log("user data: ", response?.data?.validateUserIsMember?.data);
      const _status = response?.data?.validateUserIsMember?.status;
      setIsValidMember(_status);
      if (_status) {
        setUserRole(response?.data?.validateUserIsMember?.data?.role);
      }
    });
  }, []);

  if (loading) return <><Spin spinning={true} fullscreen /></>;
  return (
    <UserContext.Provider value={{ isValidMember, userRole }}>
      {isValidMember ? children : <PageNotAccessible />}
    </UserContext.Provider>
  );
}
