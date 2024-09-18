import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import rape1 from '../assets/images/rape1.jpeg';
import rape2 from '../assets/images/rape2.jpeg';
import sexualAssault from '../assets/images/sexualAssault.jpeg';
import murder from '../assets/images/murder.jpeg';

// Example data with image, heading, text, and URL
const criminalActs = [
  {
      "headline": "UP girl kidnapped from village, raped for 2 months; rescued",
      "url": "https://www.indiatoday.in/crime/story/uttar-pradesh-minor-girl-kidnapped-raped-for-two-months-rescued-from-karnataka-2447528-2023-10-11",
      "detected_crimes": [
          {
              "crime": "Rape",
              "ipc_section": "376",
              "penalty": "Rigorous imprisonment for not less than 10 years, which may extend to life imprisonment",
              "jail_time": 10
          }
      ],
      "image" : rape1,
  },
  {
      "headline": "UP woman kills sisters, 7 and 4, after they find her in objectionable position",
      "url": "https://www.indiatoday.in/crime/story/sisters-murdered-throat-slit-shovel-elder-sister-up-etawah-2446808-2023-10-10",
      "detected_crimes": [
          {
              "crime": "Murder",
              "ipc_section": "302",
              "penalty": "Death penalty or life imprisonment and fine",
              "jail_time": 20
          }
      ],
      "image" : murder,
  },
  {
      "headline": "8-year-old girl gang raped, bludgeoned to death in Rajkot; 3 arrested",
      "url": "https://www.indiatoday.in/crime/story/girl-gang-raped-bludgeoned-to-death-rajkot-gujarat-2446630-2023-10-09",
      "detected_crimes": [
          {
              "crime": "Rape",
              "ipc_section": "376",
              "penalty": "Rigorous imprisonment for not less than 10 years, which may extend to life imprisonment",
              "jail_time": 10
          }
      ],
      "image": rape2,
  },
  {
      "headline": "Sisters, aged 5 and 7, hacked to death with shovel in UP's Etawah",
      "url": "https://www.indiatoday.in/crime/story/sisters-murdered-throat-slit-shovel-in-up-etawah-2446499-2023-10-09",
      "detected_crimes": [
          {
              "crime": "Murder",
              "ipc_section": "302",
              "penalty": "Death penalty or life imprisonment and fine",
              "jail_time": 20
          }
      ],
      "image": murder, 
  },
  {
      "headline": "On way to school, girl kidnapped and raped by father's friends in Uttar Pradesh",
      "url": "https://www.indiatoday.in/crime/story/minor-girl-kidnap-rape-oyo-hotel-room-gangrape-father-friends-uttar-pradesh-hapur-school-2446398-2023-10-09",
      "detected_crimes": [
          {
              "crime": "Rape",
              "ipc_section": "376",
              "penalty": "Rigorous imprisonment for not less than 10 years, which may extend to life imprisonment",
              "jail_time": 10
          }
      ],
      "image": rape1,
  },
  {
      "headline": "Elderly man rapes 5-year-old in Uttar Pradesh, kills himself to evade arrest",
      "url": "https://www.indiatoday.in/crime/story/elderly-man-rapes-5-year-old-uttar-pradesh-kills-self-evade-arrest-2445753-2023-10-07",
      "detected_crimes": [
          {
              "crime": "Rape",
              "ipc_section": "376",
              "penalty": "Rigorous imprisonment for not less than 10 years, which may extend to life imprisonment",
              "jail_time": 10
          }
      ],
      "image": rape2,
  },
  {
      "headline": "4 policemen arrested for sexually assaulting girl in Tamil Nadu",
      "url": "https://www.indiatoday.in/india/story/4-policemen-arrested-for-sexually-assaulting-girl-in-tamil-nadu-2445730-2023-10-07",
      "detected_crimes": [
          {
              "crime": "Assault",
              "ipc_section": "351-354",
              "penalty": "Imprisonment for up to 2 years and/or fine",
              "jail_time": 2
          }
      ],
      "image": sexualAssault,
  },
  {
      "headline": "Rajasthan horror: Drunk man rapes 5-year-old daughter in Jaisalmer, arrested",
      "url": "https://www.indiatoday.in/crime/story/rajasthan-police-arrests-man-for-rapes-5-year-old-daughter-in-jaisalmer-2445674-2023-10-07",
      "detected_crimes": [
          {
              "crime": "Rape",
              "ipc_section": "376",
              "penalty": "Rigorous imprisonment for not less than 10 years, which may extend to life imprisonment",
              "jail_time": 10
          }
      ],
      "image": rape1,
  },
  {
      "headline": "Tamil Nadu: 4 cops sexually assault girl, suspended",
      "url": "https://www.indiatoday.in/crime/story/tamil-nadu-4-cops-sexually-abuse-minor-girl-suspended-2445036-2023-10-05",
      "detected_crimes": [
          {
              "crime": "Assault",
              "ipc_section": "351-354",
              "penalty": "Imprisonment for up to 2 years and/or fine",
              "jail_time": 2
          }
      ],
      "image": sexualAssault,
  }
];

const CriminalActsSlider = () => {
  return (
    <div className="relative flex items-center justify-center p-4 bg-black shadow-md rounded-lg flex-col">
      <h2 className="text-white text-2xl font-bold mb-4">Criminal Acts</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-4xl"
      >
        {criminalActs.map((act, index) => (
          <SwiperSlide key={index}>
            <div className="flex rounded-lg shadow-lg overflow-hidden bg-gray-800 h-70">
              {/* Image Section */}
              <div className="flex-shrink-0 w-1/3 border-r border-gray-700 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.headline}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{act.headline}</h3>
                <p className="text-lg mb-4">
                  This crime of {act.detected_crimes[0].crime} which violates IPC section {act.detected_crimes[0].ipc_section} can have a penalty of {act.detected_crimes[0].penalty}.
                </p>
                <a
                  href={act.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CriminalActsSlider;