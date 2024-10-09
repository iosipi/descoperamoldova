import { useParams } from "react-router-dom";
import { list } from "../../data/parcList";

function ParcComponent () {

const {parcId} = useParams <{parcId: string}> ();

const result = list.find(({ id }) => id === Number(parcId));
if 
    return (
    <div>
        <h1>{result.title}</h1>
        <p>{result.description}</p>
    </div>
);
}

export default ParcComponent;
