import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "../styles/drawer.css"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Switch, Route,Redirect,useHistory} from "react-router-dom"
import { Login } from './login';
import { Companies } from './companies';
import {Question} from "./question"


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer'>
      <Toolbar />
      <Divider />
      <List>
       
          <ListItem button >
            <ListItemText primary={"Questions"} onClick={()=>history.push("/questions")}/>
          </ListItem>
        
      </List>
      <Divider />
      <List>
       
          <ListItem button >
          <ListItemText primary={"Companies"} onClick={()=>history.push("/companies")}/>
          </ListItem>
  
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

   const history = useHistory();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  className='appbar'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon className='toggler-icon'/>
          </IconButton>
          <Typography  noWrap component="div">
             <span className="stack" >stack<strong className='overflow'>Overflow</strong></span>
          </Typography>
          <Search className='search-box'>
            <SearchIconWrapper>
              <SearchIcon className="search-icon"/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className="mx-auto">
            <Button style={{marginLeft:"400px"}} variant="contained">sign up</Button>
            <Button onClick={()=>history.push("/login")}  style={{marginLeft:"5px",backgroundColor:"transparent",color:"black"}} variant="contained">login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          
            <Route exact path="/companies">
                 <Companies />
            </Route>
            <Route exact path="/questions">
                  <Question /> 
            </Route>

            <Route exact path="/login">
                 <Login />
            </Route>
            
          </Switch>

         
      </Box>
    </Box>
  );
}