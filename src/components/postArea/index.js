import React from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { withStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Box
} from "@material-ui/core";

import { EditOutlined, Close, Visibility } from "@material-ui/icons";


const PostArea = ({ 
  id,
  title,
  content,
  deletePost,
  createdAt,
  classes
}) => {


  return (
    <Card className={classes.card}>
      <CardContent>
        <Box display="flex" className={classes.info}>
          <Box className={classes.postTitle}>
            <Typography variant="h6" className={classes.titleText}>
              {title}
            </Typography>
          </Box>

          <CardActions disableSpacing className={classes.iconsBox}>
            <Link to={'/'}>
              <IconButton>
                <EditOutlined className={classes.icon} />
              </IconButton>
            </Link>
            <IconButton onClick={() => deletePost(id)}>
              <Close className={classes.icon} />
            </IconButton>
          </CardActions>
        </Box>
        <Typography color="textSecondary" className={classes.timestamps}>
          <Moment format="DD/MM/YYYY HH:mm">{createdAt}</Moment>
        </Typography>
        <Typography variant="body2" className={classes.content}>
        {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles({
  card: {
    marginBottom: "20px",
    boxShadow: "none",
    border: "none",
    background: "inherit",
    minHeight: "150px",
    textDecoration: "none",
    width: '100%',
    "&:hover": {
      background: "#f2f2f2",
      "& $icon": {
        display: "inline-block"
      }
    }
  },
  info: {
    borderBottom: "1px solid #bbb",
    height: "36px"
  },
  postTitle: {
    flex: "1"
  },
  titleText: {
    lineHeight: "36px"
  },
  iconsBox: {
    padding: "0"
  },
  icon: {
    fontSize: "16px",
    display: "none"
  },
  content: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "16px",
    marginTop: "6px"
  },
  timestamps: {
    fontSize: "12px"
  }
})(PostArea);


