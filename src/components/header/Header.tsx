import React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';

function Header(props: { onRegionChange: (region: string) => void }) {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#adc58c'}}>
      <List sx={{ display: 'flex' }}>
        <ListItem>
          <img src="/imagini/logo.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
        </ListItem>
        <ListItem>
          <Button onClick={() => props.onRegionChange('centru')}>Centru</Button>
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
