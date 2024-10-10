import React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';

function Header(props: {activeRegion: string, onRegionChange: (region: string) => void }) {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#3e6913' }}>
      <List sx={{ display: 'flex' }}>
        <ListItem>
          <img src="/imagini/logo.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
        </ListItem>
        <ListItem sx={{display: 'flex' }}>
          <Button  variant={props.activeRegion === '' ? 'contained' : 'text'}
            onClick={() => props.onRegionChange('')}
            sx={{
              color: '#080808',
              '&:hover': {
                color: '#C5EBAA', 
              },
            }}>Toate</Button>

          <Button variant={props.activeRegion === 'centru' ? 'contained' : 'text'}
            onClick={() => props.onRegionChange('centru')}
            sx={{
              color: '#080808',
              '&:hover': {
                color: '#C5EBAA', 
              },
            }}
          >
            Centru
          </Button>
        </ListItem>
        <ListItem>
          <Button variant={props.activeRegion === 'nord' ? 'contained' : 'text'}
            onClick={() => props.onRegionChange('nord')}
            sx={{
              color: '#080808',
              '&:hover': {
                color: '#C5EBAA', 
              },
            }}
          >
            Nord
          </Button>
        </ListItem>
        <ListItem>
          <Button variant={props.activeRegion === 'sud' ? 'contained' : 'text'}
            onClick={() => props.onRegionChange('sud')}
            sx={{
              color: '#080808',
              '&:hover': {
                color: '#C5EBAA', 
              },
            }}
          >
            Sud
          </Button>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Header;
