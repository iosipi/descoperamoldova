import { list } from "../../data/parcList";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

type ParcListsProps = {
  region: string;
};

function ParcLists(props: ParcListsProps) {
  let finalList = list;

  if (props.region !== '') {
    finalList = list.filter((parc) => parc.region === props.region);
  }

  const listItems = finalList.map((parc) => (
    <Grid item sm={3} md={2} key={parc.id}>
      <Card sx={{ maxWidth: 345, margin: 2, color: '#114817', backgroundColor: '#C5EBAA' }}>
        <CardMedia
          sx={{ height: 140, backgroundColor: 'blue' }}
          image={parc.imgSrc}
          title={parc.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {parc.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={`/parc/${parc.id}`}
            sx={{ color: '#d05663' }}
          >
            Citește mai mult
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={2} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {listItems}
    </Grid>
  );
}

export default ParcLists;
