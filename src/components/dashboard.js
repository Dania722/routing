import * as React from 'react';
import './dash.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import StreamIcon from '@mui/icons-material/Stream';
import HomeIcon from '@mui/icons-material/Home';



import Home_dash  from '../components/home';
const c ={backgroundColor:"green"}
const drawerWidth = 240;

export default function Dash() {


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={c}  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div" display={"inline"}>
        <StreamIcon  fontSize='large'/>   React Dash Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary= "Home" />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary= "Categories" />
                </ListItemButton>
              </ListItem>
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary= "Product" />
                </ListItemButton>
              </ListItem> 
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary= "Order" />
                </ListItemButton>
              </ListItem> 
              <Divider />
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText  >  <a href="/login">Sign in</a> </ListItemText>
                </ListItemButton>
              </ListItem>  
              <ListItem >
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText   
                    >
                        <a href="/login">Sign out</a>
                  
                    </ListItemText>
                </ListItemButton>
              </ListItem>      </List>
              <Divider />



        
              
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <Home_dash/>
      </Box>
    </Box>
  );
}
