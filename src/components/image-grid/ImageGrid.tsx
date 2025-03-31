import { memo, useState } from "react";
import { ImageModal } from "../modal/ImageModal.tsx";
import { ImageData } from "../../types/ProjectData.ts";
import "./ImageGrid.css";

interface Props {
  images: ImageData[];
}

const ImageGridComponent = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {props.images.map((image) => (
          <div key={image.alt} className="image-item">
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          </div>
        ))}
      </div>
      {!!selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export const ImageGrid = memo(ImageGridComponent);
