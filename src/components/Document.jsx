import ImagesList from "./ImagesList";

const Document = ({ document }) => {
  const { id, images, transcriptions } = document;
  return (
    <div className="documentSection">
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
  );
};

export default Document;
