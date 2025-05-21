import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="gallery">
      <div className="wrapper">
        <h2 className="title-gallery">OUR GALLERY</h2>
        <div className="twins">
          <div className="left-gallery">
            <img
              src={gallery1}
              className="gambar-1"
              alt="caffe"
              onClick={() => openModal(gallery1)}
              style={{ cursor: "pointer" }}
            />
            <img
              src={gallery2}
              className="gambar-2"
              alt="bakery"
              onClick={() => openModal(gallery2)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="right-gallery">
            <img
              src={gallery2}
              className="gambar-2"
              alt="bakery"
              onClick={() => openModal(gallery2)}
              style={{ cursor: "pointer" }}
            />
            <img
              src={gallery1}
              className="gambar-1"
              alt="caffe"
              onClick={() => openModal(gallery1)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={modalImage}
            alt="modal"
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // supaya klik gambar gak close modal
          />
          <button className="modal-close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
