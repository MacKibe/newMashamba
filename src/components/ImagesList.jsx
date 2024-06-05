import Image from "./Image";
const ImagesList = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </div>
  );
};

export default ImagesList;
