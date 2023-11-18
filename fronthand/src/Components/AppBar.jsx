import  React, {useState, useRef} from 'react';
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


function MenuAppBar() {
    const pages = ['|Menu|', '|Talk With Your Doctor|', '|Your Appoiments|', '|About|'];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    

    return (
        <AppBar position="static">
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, 
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
                    </Button>
                ))}
          </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default MenuAppBar;


/*













*/