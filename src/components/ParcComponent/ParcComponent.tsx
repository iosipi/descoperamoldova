import { useParams } from "react-router-dom";
import { list } from "../../data/parcList";
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
   <h1>{result.title}</h1>
   <p>{result.description}</p>
   <img src={result.imgSrc} />
   {result.imgGallery.map(source => <img src={source}/>)}
 </div>
);
}


export default ParcComponent;
