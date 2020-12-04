import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Container,
  Box,
  Button,
  Grid
} from "@material-ui/core";

export default class Create extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, content } = this.state;

    api.post("/posts/post", { title,content });

    this.props.history.push("/");
  };

  render() {
    return (
      <Container maxWidth="xl" style={{marginTop: '44px'}}>
        <Typography variant="h6">NOVA PUBLICAÇÃO</Typography>

        <Grid>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid item>
              <TextField
                fullWidth
                id="standard-name"
                name="title"
                label="Título"
                margin="normal"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Grid>

            <Grid item>
              <TextField
                multiline
                fullWidth
                id="standard-multiline-flexible"
                name="content"
                label="Conteúdo"
                rowsMax="10"
                rows="10"
                margin="normal"
                onChange={this.handleChange}
                value={this.state.content}
              />
            </Grid>
            <Box display="flex">
              <Button variant="contained" type="submit" color="primary" style={{backgroundColor:'#5897C8', marginRight:'24px'}}>
                Salvar
              </Button>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Button variant="contained">Cancelar</Button>
              </Link>
            </Box>
          </form>
        </Grid>
      </Container>
    );
  }
}
