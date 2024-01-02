import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import UserAnchor from "./Anchor";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Tab, Tabs } from "@mui/material";
import { main_pages, dialog_pages } from "../routing/routes";
import Cookies from 'js-cookie';
import { checkAuth } from "../Services/ServerHandler";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MenuAppBar =forwardRef((props, ref)=> {
  
  const userAnchor_ref = useRef();
  const [selectedPage, setSelectedPage] = useState(0);
  const navigate = useNavigate();
  
  const handleAuthUser= async() => {
    try{
    const is_accses= await  checkAuth(Cookies.get('User_token'));
    if(!is_accses)
    {
      navigate(dialog_pages[1].route_url);
    }

  }catch(error){
    console.log(error);
    navigate(dialog_pages[1].route_url);
  }
  }
  const handleChange = (event, newValue) => {
    setSelectedPage(newValue);
    navigate(main_pages[newValue].route_url);

  };

  
  const handleOpenUserDialog = (event) => {
    userAnchor_ref.current.openAnchor(event.currentTarget);
  };

  useImperativeHandle(ref, () => ({
    
  }));
  
  return (
    <AppBar position="static">
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <EmojiEmotionsIcon
              sx={{ display: { xs: "none", md: "flex", fontSize: 40 }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WELCOME
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Tabs value={selectedPage} onChange={handleChange}>
                {main_pages.map((page, index) => ( 
                    <Tab
                      onClick={async()=>{handleAuthUser()}}
                      key={index}
                      label={page.page_name}
                      sx={{
                        my: 2,
                        margin: 1,
                        color: "white",
                        display: "block",
                        fontFamily: "monospace",
                        fontSize: 16,
                        fontWeight: 700,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      {page.page_name}
                    </Tab>
                  
                ))}
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserDialog}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <UserAnchor ref={userAnchor_ref} />
            </Box>
          </Toolbar>
        </Container>
      </ThemeProvider>
    </AppBar>
  );
});
export default MenuAppBar;