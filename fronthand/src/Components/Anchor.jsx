import React, { useState, forwardRef, useImperativeHandle } from "react";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { dialog_pages } from "../routing/routes";

const UserAnchor = forwardRef((props, ref) => {
    const [userAnchor, setUserAnchor] = useState(null);
    const navigate = useNavigate();

    const handleSelect = (event, index) => {
        navigate(dialog_pages[index].route_url);
        handleCloseUserAnchor();
    };

    const handleCloseUserAnchor = () => {
        setUserAnchor(null);
    };

    useImperativeHandle(ref, () => ({
        openAnchor: setUserAnchor
    }));

    return (
        <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={userAnchor}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(userAnchor)}
            onClose={handleCloseUserAnchor}
        >
            {dialog_pages.map((page, index) => (
                <MenuItem key={index} onClick={(event) => handleSelect(event, index)}>
                    <Typography textAlign="center">{page.page_name}</Typography>
                </MenuItem>
            ))}
        </Menu>
    );
});

export default UserAnchor;
