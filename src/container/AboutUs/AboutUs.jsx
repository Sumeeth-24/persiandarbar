import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Being a pioneer in the various cuisine specialities like Mughlai, Punjabi, Chinese, Sea cuisines made Persian Darbar the most loved restaurant in the city. Raan being their signature dish available in more than 10 varieties captured more hearts.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Established on 13th June 1976, founded by 5 friends who were avid food lovers. Knowing our love for food we decided why not start a restaurant of our own. That was the inception of Persian Darbar.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
