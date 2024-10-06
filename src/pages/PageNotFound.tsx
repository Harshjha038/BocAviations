import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>The request page cannot be found</p>
      <p>
        {" "}
        The following URL is not valid: <strong>{document.URL}</strong>
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </button>
    </>
  );
};

export default PageNotFound;
