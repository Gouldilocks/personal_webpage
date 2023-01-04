import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import MapContainer from './component/Map';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/personalData';
import { PersonalBlog } from './component/Personalblog';

export function Home3() {
  const [showBlog, setShowBlog] = React.useState(false);
  const changeBlog = () => {
    setShowBlog(!showBlog);
  }

  return (
    <div className="body_wrapper">
      {(showBlog) ? <PersonalBlog changeBlog={changeBlog} /> :
        <div className='webpage'>
          <Navbar mClass="dark_menu" mContainer="custome_container" mainlogo="icon.jpeg" stickylogo="icon.jpeg" changeBlog={changeBlog} />
          <ParticlesBanner jhonData={jhonData} />
          <About aClass='about_area bg_color' jhonData={jhonData} />
          <Service wClass="work_area_two" jhonData={jhonData} />
          <Portfolio pClass="bg_color" />
          <Skill cClass="bg_w" />
          <Contact jhonData={jhonData} />
          <Footer jhonData={jhonData} />
        </div>
  }
    </div>
  );
}
