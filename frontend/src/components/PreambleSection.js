import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function PreambleSection() {
    
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.highlight-text');
    splitTypes.forEach((char, i)=>{
        const text = new SplitType(char, { types: 'chars'});

    gsap.from(
      text.chars,
      {
        color: 'white', // Your preferred highlight color
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      }
    );
    })
    
  }, []);

  return (
    <div className='text-7xl px-32'>
      <h1 className='highlight-text highlight-heading'>Preamble of The Constitution of India</h1>
      <p className='highlight-text'>We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens:</p>
      
        <p className='highlight-text'>JUSTICE, social, economic and political;</p>
        <p className='highlight-text'>LIBERTY of thought, expression, belief, faith and worship;</p>
        <p className='highlight-text'>EQUALITY of status and of opportunity;</p>
      
        <p className='highlight-text'>and to promote among them all</p>
      
        <p className='highlight-text'>FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;</p>
      
        <p className='highlight-text'>IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION. </p>
    </div>
  );
}

export default PreambleSection;
