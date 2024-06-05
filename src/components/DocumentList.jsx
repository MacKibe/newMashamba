import Document from "./Document";
import docs from "../data"
const DocumentList = () => {
  return (
    <>
      {/* List the documents for our application */}
      {docs.map((doc, index) => (
        <Document key={index} document={doc} />
      ))}
    </>
  );
};

export default DocumentList;
