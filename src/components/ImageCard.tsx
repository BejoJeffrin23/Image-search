import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ image }: { image: any }) => {
  const downloadImage = (url: any, filename: any) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <div className={styles.card}>
        <img
          src={image.src.medium}
          alt={image.alt}
          className="w-full h-72 object-cover"
        />
        <div className={styles.overlay}>
          <div>
            {image.alt} (ID: {image.id})
          </div>
          <div>Photographer: {image.photographer}</div>
          <div className="mt-1">
            <button className="bg-black py-1 px-2 rounded-sm">
              Add to Cart
            </button>
          </div>
          <div className="mt-1">
            <button
              className="bg-[#71e471] py-1 px-2 mt-1 rounded-sm"
              onClick={() =>
                downloadImage(image.src.medium, `image_${image.id}.jpg`)
              }
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
