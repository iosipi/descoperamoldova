import { useParams } from "react-router-dom";
import { useState } from "react";
import { list } from "../../data/parcList";
import { Link } from "react-router-dom";

function ParcComponent() {
  const { parcId } = useParams<{ parcId: string }>();
  const result = list.find(({ id }) => id === Number(parcId));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!result) {
    return (
      <div>
        <h1>Ne cerem scuze!</h1>
        <p>Parcul nu a fost găsit.</p>
      </div>
    );
  }

  // Handler to close the modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Handler to go to the next image
  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex + 1) % result.imgGallery.length : 0
      );
    }
  };

  // Handler to go to the previous image
  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex !== null
          ? prevIndex === 0
            ? result.imgGallery.length - 1
            : prevIndex - 1
          : 0
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#d05663",
            textDecoration: "none",
            fontSize: "18px",
            padding: "8px 16px",
          }}
        >
          Acasa
        </Link>
      </div>
      <h1 style={{ marginBottom: "20px", textAlign: "left" }}>{result.title}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: 1, maxWidth: "1000px", paddingRight: "20px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{result.description}</p>
        </div>
        <div style={{ flex: "0 0 500px" }}>
          <img
            src={result.imgSrc}
            alt={result.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <h2>Galerie:</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {result.imgGallery.map((source, index) => (
          <img
            key={index}
            src={source}
            alt={`Gallery ${index}`}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedImageIndex(index)} // Click to open modal
          />
        ))}
      </div>

      {/* Modal for image zoom and navigation */}
      {selectedImageIndex !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={result.imgGallery[selectedImageIndex]}
            alt={`Zoomed ${selectedImageIndex}`}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default ParcComponent;
