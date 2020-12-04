import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const RecentPosts = ({ classes, lastPosts }) => {
  return (
    <Box display={{ xs: "none", sm: "block" }}>
      <Paper className={classes.paper}>
        <Typography variant="h6">Recentes</Typography>
        {lastPosts.map(post => (
          <Link to={`/post/${post._id}`} key={post._id} className={classes.link}>
            <Typography variant="h6" >
              {post.title}
            </Typography>
          </Link>
        ))}
      </Paper>
    </Box>
  );
};

export default withStyles({
  paper: {
    padding: "16px",
    marginTop: "5px",
    position: "fixed",
    boxShadow: "none",
    border: "none",
    background: "inherit"
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})(RecentPosts);
