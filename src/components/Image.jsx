const Image = ({image}) => {
  return (
    <div>
      <img src={image.url} alt={`${image.num}:${image.name}`} />
    </div>
  )
}

export default Image
