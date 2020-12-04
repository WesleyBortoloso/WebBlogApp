import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {List,ListItem,ListItemText,Typography,IconButton,Drawer} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuIcon: {
    lineHeight: "140px",
    marginRight: "-40px"
  }
});

export default function DrawerLastPosts({ lastPosts }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Typography variant="h4">Recentes</Typography>
        </ListItem>
        {lastPosts.map(post => (
          <Link
            to={`/post/${post._id}`}
            key={post._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem>
              <ListItemText primary={post.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.menuIcon}>
        <IconButton onClick={toggleDrawer("left", true)} color="inherit">
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
