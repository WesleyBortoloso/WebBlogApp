import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {AppBar,Toolbar,Typography,Button,Box, Hidden} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
  button: {
    maxHeight: "30px",
    minHeight: "30px"
  },
  toolBar: {
    maxHeight: "42px",
    minHeight: "42px"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #bbb"
  },
  login: {
    color: "#333",
    textAlign: "right"
  },
  fill: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
     <Container>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Hidden xsDown>
              <Link to={`/post/create`} className={classes.link}>
                <Button className={classes.button} variant="outlined">
                  <Typography>NOVA PUBLICAÇÃO</Typography>
                </Button>
              </Link>
            </Hidden>

            <Hidden smUp>
              <Link to={`/post/create`} className={classes.link}>
                <Button variant="outlined">
                  <AddIcon />
                </Button>
              </Link>
            </Hidden>

            <div className={classes.fill}></div>
            <Typography variant="body1" className={classes.login}>
              USUÁRIO LOGADO
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </Fragment>
  );
};

export default Header;
