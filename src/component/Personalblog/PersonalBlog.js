import React from "react"
import { Fade, Reveal } from 'react-reveal';
import { Button, Card, Grid, CardMedia, CardContent, Typography} from '@material-ui/core';

export default function PersonalBlog({changeBlog, blogData}) {


  const cardStyle = {
    maxHeight: "100%",
  }

  const cardMediaStyle = {
    height: "20rem",
    width: "20rem",
    objectFit: "cover",
  }

  return (
    <>
      <div>
        Hello From the Blog! This is a work in progress, and has not content as of yet.
      </div> 
      <Button onClick={() => {
        changeBlog();
      }}>
        Return to Website
      </Button>
      <br></br>
      <Grid container spacing={5}>
        {blogData.map((blog) => (
          <Fade bottom cascade duration={1000}>
            <Grid item xs={6} key={blog.id}>
              <Card style={cardStyle}>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt="image for blog"
                  style={cardMediaStyle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.message}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </>
  )
}