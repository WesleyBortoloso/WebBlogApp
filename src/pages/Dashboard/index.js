import React, { useState, useEffect } from "react";
import api from '../../services/api';
import Header from '../../components/Header/index';
import PostCard from '../../components/postArea/index';
import BlogTitle from '../../components/blogTitle/index';
import { toast } from 'react-toastify';

import { Grid, Container, Box } from "@material-ui/core";

export default function Dashboard () {
  const [post, setPost] = useState([]);
  const [lastPosts, setLastPosts] = useState([]);

  const deletePost = id => {
    api.delete(`/posts/${id}`).then(() => {
      const newPost = post.filter(item => item._id !== id);
      setPost(newPost);
      toast.success('Sucesso')
    }).catch(() => {
      toast.error('Falha ao deletar')
    })
  };

  useEffect(()=> {
    api.get('/posts/posts?page=').then( response => {
    setPost(response.data);
    })
  }, []);

  useEffect(()=> {
    api.get('/posts/lastPosts').then(response => {
      setLastPosts(response.data)
    })
    
  }, []);

  const handleChangePage = (currentPage)=> {
    //request passando a page 
    console.log(currentPage)
    // numero total de registros / limite -> arredondar sempre para maior
  }

  return (
    <>
      <Header/>
      <BlogTitle lastPosts={lastPosts}/>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item sm={9} xs={12}>
            <div
              style={{
                display: 'flex',
                minHeight: "55vh",
                maxHeight: "55vh",
                overflow: "auto"
              }}
            >
              <div 
                className="post-wrapper"
                style={{
                  width: '100%',
                }}
              >
                {post.map(post => (
                  <PostCard
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    createdAt={post.CreatedAt}
                    deletePost={deletePost}
                  />
                ))}
              </div>
              <ul style={{
                paddingRight: 50,
                paddingLeft: 50,
              }}>
              <h2>Recentes</h2>
                {
                  lastPosts.map(post => (
                      <li
                        style={{
                          fontFamily:'Arial',
                          alignItems:"center",
                          justifyContent:"center",
                          paddingLeft: '15px',
                          fontSize:20,
                          fontWeight: "bold",
                          marginTop: 15
                        }}
                        key={post._id}
                      >
                        {post.title}
                      </li>
                  ))
                }
              </ul>     
            </div>
            <Box
              display="flex"
              justifyContent="center"
              style={{ marginTop: "30px" }}
            >
              {
                Array.from(Array(5).keys()).map((_, index)=>(
                  <button onClick={()=>handleChangePage(index+1)} key={index}>
                    {index + 1}
                  </button>
                ))
            }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
