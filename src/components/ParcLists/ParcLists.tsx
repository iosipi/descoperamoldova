type ParcListsProps = {
    region: string;
  };
  
  function ParcLists(props: ParcListsProps) {
    const list = [
      { id: 1, title: 'Parc1', region: 'sud' },
      { id: 2, title: 'Parc2', region: 'nord' },
      { id: 3, title: 'Parc3', region: 'centru' }
    ];
  
    let finalList = list;
  
    if (props.region !== '') {
      finalList = list.filter((parc) => parc.region === props.region);
    }
  
    const listItems = finalList.map((parc) => <li key={parc.id}>{parc.title}</li>);
  
    return <ul>{listItems}</ul>;
  }
  
  export default ParcLists;
  