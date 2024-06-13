import { useState, useContext } from "react";
import ImagesList from "./ImagesList";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { DocumentContext } from "../context/DocumentsContext";

const Document = () => {
  
  const {docs} = useContext(DocumentContext)

  const styles = {
    color: "white",
    width: "2rem",
    height: "2rem"
  }
  
  const [count, setCount] = useState(0);

  function nextImage() {
    setCount(count + 1);
    console.log("Right Btn Clicked");
  }

  function prevImage() {
    setCount(count - 1);
    console.log("Left Btn Clicked");
  }

  const { id, images, transcriptions } = docs[count];
  
  console.log(docs);
  return (
    <div className="documentSection">
      <div className="documentInfo">
        <h1>{id}</h1>
        <ImagesList images={images} />
        <div className="transcription">
          <h2>Details.</h2>
          <p>{transcriptions.id}</p>
          <p>{transcriptions.pk}</p>
          <p>{transcriptions.area}</p>
          <p>{transcriptions.regno}</p>
          <p>{transcriptions.person}</p>
          <p>{transcriptions.category}</p>
        </div>
      </div>
      <nav>
        <BsArrowLeftCircleFill style={styles} onClick={prevImage} />
        <BsArrowRightCircleFill style={styles} onClick={nextImage} />
      </nav>
    </div>
  );
};

export default Document;
