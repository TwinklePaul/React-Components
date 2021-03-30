import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Collapse from "./Collapse";
import { useNavStyles } from "../../../Themes/navbar";

const NavBar = () => {
  const classes = useNavStyles();

  return (
    <Container className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Booster
          </Typography>

          <div style={{ marginLeft: "auto" }}>
            <Collapse />
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>Home</Button>
            </LinkS>
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>Features</Button>
            </LinkS>
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>Services</Button>
            </LinkS>
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>About Us</Button>
            </LinkS>
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>Contact Us</Button>
            </LinkS>
            <LinkS to="/view/users">
              <Button className={classes.menuButton}>Sign In</Button>
            </LinkS>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
