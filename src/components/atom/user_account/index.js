import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
 import LogoutIcon from '@mui/material/Logout';

import { UserListItem } from './index.style';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from "@ant-design/icons";

export default function AccountMenu() {
    const history = useHistory()
    const userToken = JSON.parse(localStorage.getItem("user_token"))
  //  let role = userToken ? userToken.role : undefined

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/auth"
    }
    const handleProfile = () => {
      if(userToken?.role === "simple_user") {
          history.push("/gid-personal")
      } else {
          history.push("/gid-personal-wider")
      }
    }
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar className="color1" 
                        sx={{ width: 32, height: 32,background: "#326A32" }}>
                            <UserOutlined className="color1" />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        padding: "5px 30px",
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            background: "transparent",
                            color: "#326A32"
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <UserListItem>
                    <MenuItem 
                    className="list-item" 
                    onClick={handleProfile}>
                        <Avatar /> Profile
                    </MenuItem><br />
                    <MenuItem  onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </UserListItem>
            </Menu>
        </React.Fragment>
    );
}

 