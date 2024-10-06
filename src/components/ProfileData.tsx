export type GraphData = {
  displayName: string;
  jobTitle: string;
  mail: string;
  businessPhones: string[];
  officeLocation: string;
};


export const ProfileData: React.FC<{ graphData: GraphData }> = ({
  graphData,
}) => {
  return (

    <table>
        <tr>
            <td>Name</td>
            <td>{graphData.displayName}</td>
        </tr>
        <tr>
            <td>Title</td><td>{graphData.jobTitle}</td>
        </tr>
        <tr>
            <td>Mail</td><td>{graphData.mail}</td>
        </tr>
        <tr>
            <td>Phone</td><td>{graphData.businessPhones[0]}</td>
        </tr>
        <tr>
            <td>Location</td><td>{graphData.officeLocation}</td>
        </tr>
    </table>
  );
};

