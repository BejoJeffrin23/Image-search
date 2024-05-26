import ImageCard from "./ImageCard";
import styles from "../styles/ImageCard.module.css";

type Image = {
  id: number;
  alt: string;
  src: { medium: string };
  photographer: string;
};

const ImageGrid = ({ images }: { images: Image[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
