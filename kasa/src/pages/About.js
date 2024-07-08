import React from 'react';
import About_Banner from '../images/Banner_a_propos.png';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import collapsesData from '../data/about-collapse.json';


const About = () => (
  <div className="about">
    <Banner 
    image={About_Banner} alt="Paysage montagneux avec une rivière, entouré d'arbres verts et de montagnes enneigées"
/>

    <div>
    {collapsesData.sections.map((item) => (
        <Collapse key={item.index} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
         ))}
        
      </div>
  </div>
);

export default About;
