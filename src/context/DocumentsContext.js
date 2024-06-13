import { createContext, useState } from "react";
import docsData from "../data";

export const DocumentContext = createContext({});

export const DocumentProvider = ({ children }) => {
  const [docs, setDocs] = useState(docsData);

  return (
    <DocumentContext.Provider value={{ docs, setDocs }}>
      {children}
    </DocumentContext.Provider>
  );
};
