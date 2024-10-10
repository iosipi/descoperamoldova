import { useParams } from "react-router-dom";
import { list } from "../../data/parcList";
import { Link } from "react-router-dom";
import ParcLists from "../ParcLists/ParcLists";

function ParcComponent () {

const {parcId} = useParams <{parcId: string}> ();

console.log(parcId)

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
 <div>
  <Link to = "/" style={{ color: 'red', textDecoration: 'none', fontSize: '18px', padding: '8px 16px',  }}> Acasa</Link>
   <h1>{result.title}</h1>
   <p>{result.description}</p>
   <img src={result.imgSrc} />
   <h2>Galerie:</h2> <div style={{display: "flex", gap: "20px"}}>{result.imgGallery.map(source => <img src={source} style={{width: "100px"}}/>)} </div>
 </div>
);
}


export default ParcComponent;
