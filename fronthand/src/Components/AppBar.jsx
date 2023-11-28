import  React, {useState, useRef} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UserAnchor from './Anchor';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Tab, Tabs } from '@mui/material';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
function MenuAppBar() {
    const userAnchor_ref = useRef();
    const [selectedPage, setSelectedPage ] = useState(0);
    const pages = ['Menu', 'Talk With Your Doctor', 'Your Appoiments', 'About'];

    const handleChange = (event, newValue) => {
        setSelectedPage(newValue);
      };

    const handleOpenUserDialog = (event) => {
        userAnchor_ref.current.openAnchor(event.currentTarget);
    };    

    return ( 
            <AppBar position="static">
            <ThemeProvider theme={darkTheme}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <EmojiEmotionsIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 40 }, mr: 1 }} />
                        <Typography  variant="h6" noWrap 
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }} 
                        >WELCOME</Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                            <Tabs value={selectedPage} onChange={handleChange}>
                                {pages.map((page, index) => (
                                    <Tab
                                        key={index}
                                        label={page}
                                        sx={{ my: 2, 
                                            margin: 1,
                                            color: 'white', 
                                            display: 'block', 
                                            fontFamily: 'monospace' ,
                                            fontSize: 16,
                                            fontWeight: 700,
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                            },
                                        }}  
                                    >{page}
                                    </Tab>
                                ))}
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton  sx={{ p: 0 }} onClick={handleOpenUserDialog}  >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <UserAnchor ref={userAnchor_ref}/>     
                        </Box>
                    </Toolbar>
                </Container>
            </ThemeProvider>
            </AppBar>
    );
}
export default MenuAppBar;

