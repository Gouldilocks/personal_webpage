import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';
import { Button,Box } from '@material-ui/core';

class Service extends Component{
    render(){
        let jhonData = this.props.jhonData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="What I'm Doing" TitleP="I love what I do! Here are a few examples of some of what I have worked on in the past."/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row justify-content-center">
                            {
                                jhonData.service && jhonData.service.map(item =>{
                                return(
                                    <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="d-flex justify-content-center">
                                                <img class="d-flex rounded img-fluid" src={item.iconName} alt="Picture For Project" /> 
                                            </div> 
                                            <a href=".#"><h2 className="t_color">{item.serviceTitle}</h2></a>
                                            <p>{item.sDetails}</p>
                                            <Button onClick={() => {
                                                window.open(item.link, '_blank');
                                            }}
                                            variant="outlined"
                                            > {item.button_name} </Button>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;