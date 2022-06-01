import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { Parallax} from 'react-parallax';

const Testimonial = () => {
  return(
      <section id="testimonial">
        <div className="container">
            <TestimonialSlider/>
        </div>
     </section>
  )
}
export default Testimonial;