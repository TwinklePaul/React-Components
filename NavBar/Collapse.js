import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import {
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Grow,
  IconButton,
} from "@material-ui/core";
import { useNavStyles } from "../../../Themes/navbar";

const Collapse = () => {
  const classes = useNavStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton
        className={classes.appMenu}
        aria-label="menu"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        disablePortal={false}
      >
        <Grow in={true}>
          <Paper>
            <MenuList autoFocusItem={open} id="menu-list-grow">
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">Home</LinkS>
              </MenuItem>
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">Features</LinkS>
              </MenuItem>
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">Services</LinkS>
              </MenuItem>
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">About Us</LinkS>
              </MenuItem>
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">Contact Us</LinkS>
              </MenuItem>
              <MenuItem onClick={handleToggle}>
                <LinkS to="/view/users">Sign In</LinkS>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grow>
      </Popper>
    </>
  );
};

export default Collapse;
