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




      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div className="about_content">
                  <h2 className="t_color">{jhonData.aboutme}</h2>
                  <h6>{jhonData.role}</h6>
                  <p>{jhonData.aboutdetails}</p>
                  <Button
                    onClick={
                      () => {
                        window.open(fileUrl, '_blank');
                      }
                    }
                    style={{
                      width: '10rem',
                      height: '4rem',
                    }}
                    className="theme_btn active">
                    Download Resume</Button>
                </div>
              </Fade>
            </div>
            <div className="col-lg-5">
              <div className="about_img">
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/pictureofme.jpg')} alt="" /></Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}