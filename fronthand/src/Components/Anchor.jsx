import React, { useState, forwardRef, useImperativeHandle} from "react";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const UserAnchor = forwardRef((props, ref) => {
    const [UserAnchor, setUserAnchor] = useState(null);
    const settings = ['Profile', 'Support', , 'Logout'];
    
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
        anchorEl={UserAnchor}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        open={Boolean(UserAnchor)}
        onClose={handleCloseUserAnchor}
        >
        {settings.map((setting) => (
            <MenuItem key={setting}>
                <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
        ))}
        </Menu>
    );
});
export default UserAnchor;
