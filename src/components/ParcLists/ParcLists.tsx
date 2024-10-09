import { list } from "../../data/parcList";

type ParcListsProps = {
    region: string;
  };
  
  function ParcLists(props: ParcListsProps) {
    
  
    let finalList = list;
  
    if (props.region !== '') {
      finalList = list.filter((parc) => parc.region === props.region);
    }
  
    const listItems = finalList.map((parc) => <li key={parc.id}>{parc.title}</li>);
  
    return <ul>{listItems}</ul>;
  }
  
  export default ParcLists;
  