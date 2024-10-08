import React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';


function Header() {
    return (
      <AppBar position='static' sx={{backgroundColor: `green`}}>
        <List sx={{display: `flex`}}>
          <ListItem><Button>Centru</Button></ListItem>
          <ListItem><Button>Nord</Button></ListItem>
          <ListItem><Button>Sud</Button></ListItem>
        </List>
      </AppBar>
    );
}

export default Header;