import Document from "./Document";
import docs from "../data";

console.log(docs);
const DocumentList = () => {
  return (
    <>
      {/* List the documents for our application */}
      {docs.map((doc, index) => {
        return <Document key={index} document={doc} />;
      })}
    </>
  );
};

export default DocumentList;
