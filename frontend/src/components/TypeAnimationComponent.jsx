import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
  return (
    <div className="animated-container">
      <TypeAnimation
        sequence={[
          'You will get kinich', // Text to type
          1000, // Delay
          'are you sure?', // Text to type
          2000, // Delay
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{ fontFamily: "'Pacifico', cursive", fontSize: '2.5rem', color: 'black' }}
      />
    </div>
  );
};

export default TypeAnimationComponent;
