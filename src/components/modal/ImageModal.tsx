import { memo } from "react";
import "./modal.css";

interface Props {
  src?: string | null;
  onClose: () => void;
}

const ImageModalComponent = ({ src, onClose }: Props) => {
  if (!src) return null;
  return (
    <div className="modal" onClick={onClose}>
      <img src={src} alt="Selected" />
    </div>
  );
};

export const ImageModal = memo(ImageModalComponent);
