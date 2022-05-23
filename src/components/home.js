
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import React, {Component} from 'react';
import { Container } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';




export class Home_dash extends Component{
    constructor(props){
        super(props)
        this.state= {
            value : 0
        }
    }
    handleChange = (event, newValue) => {
      this.setState({
          value:newValue
      })
    
      };
    render()
    {
        return (
            <Container maxwidth="md" fixed>
            <AppBar color='default'   position="static" >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
                <Tab label="Item Eight" />
                <Tab label="Item Nine" />
              </Tabs>
            </AppBar>
            </Container>
          );
        
    }
}
export default Home_dash;


