import ImagesList from "./ImagesList";
const Document = ({ doc }) => {
  const { id, images, transcriptions } = doc;
  //
  // Have 3 components to display the title pages and transcriptions.
  return (
    <div>
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
