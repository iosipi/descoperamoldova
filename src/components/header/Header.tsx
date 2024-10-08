import React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import logo from '../../logo.png'; 

function Header(props: { onRegionChange: (region: string) => void }) {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#adc58c'}}>
      <List sx={{ display: 'flex' }}>
        <ListItem>
          <img src={logo} alt="Logo" style={{ width: '150px', height: '150px' }} />
        </ListItem>
        <ListItem>
          <Button sx={{ color: 'red',}} onClick={() => props.onRegionChange('centru')}>Centru</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => props.onRegionChange('nord')}>Nord</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => props.onRegionChange('sud')}>Sud</Button>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Header;
