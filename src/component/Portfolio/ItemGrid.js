import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { Grid,Card,CardMedia,CardContent,CardActions,Button } from '@material-ui/core';

let Experiences = [
    {
        title: 'Technology Development Program',
        company: 'Capital One',
        location: 'Plano, TX',
        date: 'August 2023 - Present',
        image: 'https://fastly.4sqi.net/img/general/600x600/87384844_PpnZd5jAGeEuglj3VU-1BBaS1hY4h2_hsP-PAGPrKKc.jpg',
        description: [
            'Collaborated with a team of 5 engineers to manage releases and environments effectively',
            'Automated testing procedures to ensure smooth operation of environments',
            'Implemented automated deployment of testing outcomes in UI environments, enhancing efficiency',
            'Developed and managed multiple Jenkins scripts to streamline maintenance tasks for dev and QA environments',
            'Actively engaged in daily stand-up meetings within a Scrum Agile framework, focusing on environment maintenance and upkeep'
        ],
    }
    ,{
        title: 'Technology Internship Program',
        company: 'Capital One',
        location: 'Plano, TX',
        date: 'June 2022 - August 2022',
        image: 'https://fastly.4sqi.net/img/general/600x600/87384844_PpnZd5jAGeEuglj3VU-1BBaS1hY4h2_hsP-PAGPrKKc.jpg',
        description: [
            'Worked in a team of 5 Software Engineering interns on a web application microservice in the financial department',
            'Participated in daily standups in a SCRUM AGILE environment, with 2 week sprints and retrospectives after each',
            'Deployed a microservice utilizing an OCR api in order to enable word searching in scanned documents for improved workflow of auto funders',
            'Subscribed to java events and created 2 endpoints in Java 8 Spring Boot',
            'Wrote regex to mask personal information from stored data',
            'Completed end to end testing with functional testing principles',
            'Edited production-level code in Angular to add new componences necessary for the frontend of the microservice to be used in a gui by funders of auto loans'
        ],
    },

    {
        title: 'Software Engineering Internship Program',
        company: 'McKesson',
        location: 'Irving, TX',
        date: 'May 2021 - August 2021',
        image: 'https://newparkdallas.com/wp-content/uploads/2020/08/McKesson.png',
        description: [
            'Worked in a team of 7 Software Engineers on ESIT Core data management system',
            'Participated in daily standups of a SCRUM AGILE environment, with 2 - week sprints',
            'Added source code to the main codebase of ESIT Core, McKesson’s multi - purpose data streamlining service',
            'Implemented a logging diagnostic utility using Context Dependency Injection',
            'Formed various JUnit tests in order to meet the acceptance criteria',
            'Adapted an easily expandable, object - oriented approach to injecting loggers into various areas of a code base, to allow for a smoother and future - proof approach to debugging java code',
        ],
    },

    {
        title: 'Teaching Assistant',
        company: 'Lyle School of Engineering',
        location: 'Dallas, TX',
        date: 'August 2020 - Present',
        image: 'https://www2.economicgateway.com/media/userfiles/subsite_162/images/logos/smu-logo.jpg',
        description: [
            'Mentored one team each semester in leadership and interpersonal communication development',
            'Monitored a team\'s progress on meeting deadlines, and assisted with technical and leadership issues',
            'Led student team retrospectives after completed sprints',
            'Debugged various Electrical circuits and Arduino C code on a robot which students build from scratch',
            'Teach students in lab periods about various coding practices',
            'Assist students in debugging a multitude of different memory errors in C++',
            'Assist professors in grading and evaluating students, teams, and their projects',
        ],
    }
]
class ItemGrid extends Component {




    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <Grid container spacing={3}>
                {Experiences.map(experience => (
                    <Grid item xs={12}>
                        <Card className="grid-item">
                            <CardMedia
                                component="img"
                                height="140"
                                image={experience.image}
                                alt={experience.title}
                            />
                            <CardContent>
                                <b>
                                    <em>
                                        <h4>{experience.company}</h4>
                                    </em>
                                </b>
                                <h3>{experience.title}</h3>
                                <br></br>
                                <h5>{experience.location}</h5>
                                <h6>{experience.date}</h6>
                                <ul>
                                    {experience.description.map(description => (
                                        <li>{description}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
  }

  export default ItemGrid;
