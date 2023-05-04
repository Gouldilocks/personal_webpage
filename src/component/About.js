import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal';
import { Button } from '@material-ui/core';
import JsFileDownloader from 'js-file-downloader';


const fileUrl = 'https://github.com/Gouldilocks/currentResume/raw/main/Christian_Aaron_Gould_R.docx';
class About extends Component {
    render(){ let jhonData = this.props.jhonData; 
        var {aClass} = this.props;
        return(
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
                                <Reveal effect="fadeInRight" duration={1500}>
                                    <img src={require('../looking_away.jpg')} alt="" />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
