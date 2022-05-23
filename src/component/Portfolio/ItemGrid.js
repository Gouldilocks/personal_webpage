import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { Grid,Card,CardMedia,CardContent,CardActions,Button } from '@material-ui/core';

let Experiences = [
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
        title: 'Technology Internship Program',
        company: 'Capital One',
        location: 'Plano, TX',
        date: 'June 2022 - August 2022',
        image: 'https://www.annualreports.com/HostedData/CompanyHeader/NYSE_COF.png',
        description: [
            'Internship Program Not Completed Yet',
        ],
    },
    {
        title: 'Teaching Assistant',
        company: 'Lyle School of Engineering',
        location: 'Dallas, TX',
        date: 'August 2020 - Present',
        image: 'https://lyleonline.smu.edu/static/logo.png',
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
