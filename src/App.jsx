// import IdList from "./components/IdList";
import Document from "./components/Document";
import DocumentProvider from "./context/DocumentsContext"
function App() {
  return (
    <DocumentProvider>
      {/* List  all document ids */}
      {/* <IdList/> */}
      {/* Display the document. */}
      <Document/>
    </DocumentProvider>
  );
}

export default App;
