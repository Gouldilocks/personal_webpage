import React, {Component} from 'react';
import ItemGrid from './ItemGrid';
import Sectiontitle from '../../component/Banner/Sectiontitle';

class portfolio extends Component {
    render() {
      var {pClass}= this.props;
      return(
        <section className={`portfolio_area ${pClass}`} id="portfolio">
            <div className="container">
                <Sectiontitle Title="Work Experience" TitleP="Here are some examples of relevant experience for software engineering"/>
                <ItemGrid/>
            </div>
        </section>
      )
    }
  }

  export default portfolio;
