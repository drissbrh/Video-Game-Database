import Modal from "react-modal";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Carroussel.css";

const Carroussel = ({ platforms, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % platforms.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + platforms.length) % platforms.length
    );
  };

  const carrousselClass = ["carroussel"];

  if (!isOpen) {
    carrousselClass.push("open");
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Gallery Modal"
      ariaHideApp={false}
      style={customStyles}
      className={carrousselClass.join(" ")}
    >
      <button onClick={onClose} className="close_carroussel">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img
        src={platforms[currentImageIndex].image}
        alt={`${platforms[currentImageIndex].id}`}
      />
      <div className="carroussel__leftRight">
        <button onClick={prevImage}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={nextImage}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </Modal>
  );
};

export default Carroussel;
