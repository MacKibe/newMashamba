import Document from "./Document";
import docs from "../data";

const DocumentList = () => {
  return (
    <>
      {/* List the documents for our application */}
      {/* {docs.map((doc, index) => {
        return <Document key={index} document={doc} />;
      })} */}
      {/* List  all document ids */}

      {/* Display the document. */}
      <Document document={docs}/>
    </>
  );
};

export default DocumentList;
