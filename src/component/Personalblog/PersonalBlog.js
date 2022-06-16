import React from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function PersonalBlog({changeBlog}) {
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
    </>
  )
}