import { useParams } from "react-router-dom";
import { list } from "../../data/parcList";
import { Link } from "react-router-dom";

function ParcComponent() {
  const { parcId } = useParams<{ parcId: string }>();

  const result = list.find(({ id }) => id === Number(parcId));
  if (!result) {
    return (
      <div>
        <h1>Ne cerem scuze!</h1>
        <p>Parcul nu a fost găsit.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/"
          style={{
            color: '#d05663',
            textDecoration: 'none',
            fontSize: '18px',
            padding: '8px 16px',
          }}
        >
          Acasa
        </Link>
      </div>
      <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>{result.title}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginBottom: '20px',
        }}
      >
        <div style={{ flex: 1, maxWidth: '1000px', paddingRight: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{result.description}</p>
        </div>
        <div style={{ flex: '0 0 500px' }}>
          <img
            src={result.imgSrc}
            alt={result.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <h2>Galerie:</h2>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '20px',
        }}
      >
        {result.imgGallery.map((source, index) => (
          <img
            key={index}
            src={source}
            alt={`Gallery ${index}`}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ParcComponent;
