import { list } from "../../data/parcList";
import { Link } from "react-router-dom";

type ParcListsProps = {
  region: string;
};

function ParcLists(props: ParcListsProps) {
  let finalList = list;

  if (props.region !== '') {
    finalList = list.filter((parc) => parc.region === props.region);
  }

  const listItems = finalList.map((parc) => (
    <li key={parc.id}>
      <Link to={`/parc/${parc.id}`}>{parc.title}</Link>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default ParcLists;
