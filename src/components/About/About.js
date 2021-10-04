import './About.css'
import React from 'react';

const About = () => {
 return (
  <div>
   <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 className="h2-style">Our Team</h2>

    <div className="card mx-auto w-50">
      <img className="w-100" src="https://1.bp.blogspot.com/-jgP_WrNxEGs/X2reSeiyXxI/AAAAAAAABVQ/5gWBwyzoYrMwDDu2BjxFssTVCt2ZdgmCwCLcBGAsYHQ/s640/Shoddo%2BKhan.png" alt="Jane" />
      <div class="container mx-auto">
        <h2>Shoddo Khan</h2>
        <p class="title">CEO & Founder of Janani Music</p>
        <p>shoddokhan42@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>

  </div>
 );
};

export default About;