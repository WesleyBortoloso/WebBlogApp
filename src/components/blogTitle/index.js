import React from "react";
import { Typography, Box, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DrawerLastPosts from "../drawerLastPosts";

const BlogTitle = ({ classes, lastPosts }) => {
  return (
    <Box display="flex" className={classes.mainNav}>
      <Hidden smUp>
        <Typography variant="h5" className={classes.title}>
          BLOG DA MEGACODE
        </Typography>
      </Hidden>
      <Hidden xsDown>
        <Typography variant="h4" className={classes.title}>
          BLOG DA MEGACODE
        </Typography>
      </Hidden>
    </Box>
  );
};

export default withStyles({
  mainNav: {
    width: "100%",
    height: "140px",
    textAlign: "center",
    borderBottom: "1px solid #bbb",
    marginBottom: "30px"
  },
  title: {
    flex: "1",
    lineHeight: "140px",
    fontWeight: '500'
  }
})(BlogTitle);
