import React from 'react'
import LearningFeature from './LearningFeature'
import ConstitutionFeature from './ConstitutionSection'
import CaseStudySection from './CaseSutySection'



const LearningPage = () => {
  
  return (
    <div className='bg-black'>
      <LearningFeature/>
      <ConstitutionFeature/>
      <CaseStudySection />
    </div>
  )
}

export default LearningPage


const caseStudies = [
  {
    title: 'Tarakeswar Affair (1874)',
    content: `
      TARAKESWAR AFFAIR (1874) 

Law Involved:
Section 497 of the IPC 1860 defines Adultery and related punishment for it.
Section 300 of the IPC defines murder and SECTION 302 describes its punishment.


Introduction:
The Tarakeswar affair deals with a public scandal in colonial Bengal in the 19th century. 
This case involved an illicit love affair between Elokeshi, wife of Nobin Chandra, and the Mahant, head priest of Tarakeswar Shiva temple. This Affair was covered by every newspaper in 1973. The public opinion was that the Mahant’s actions were punishable and Nobin’s act of slitting his wife’s head was justified as in those times adultery was a more heinous crime than murder. Thus, due to public outrage, authorities were forced to release Nobin after two years only. This case became a popular theme for Bengali plays and Kalighat paintings which portrayed Nobin as a devoted husband, the Mahant as a womanizer, and Elokeshi as a seductress and the main cause of the affair. 


Facts of the Case:
● The Tarakeswar murder involved three people- Elokshi, a minor girl married to Nobin, an upper-class Bengali with a job in the Military press, Calcutta and Madhavchandra Giri, chief priest of the Tarakeswar temple.
● Nobin had to leave his wife with her father in the village of Tarakeswar where she decided to seek fertility medication from the priest.
● The Mahant had allegedly seduced and raped Elokeshi which led to the beginning of an affair between the two.
● On 24th May 1873, Nobin returned to Kumrul and met his wife. He took her to her grandmother’s house where Elokeshi confessed to Nobin about her affair with the Mahant, after three days on 27th May 1873, Nobin slit Elokeshi’s throat and she died of excessive bleeding. 


● Nobin surrendered himself to the police and confessed that he had murdered his wife because she had an affair with the mahant.
● Both Nobin and the mahant were represented before the court for committing murder and adultery respectively.
● The Hooghly Session Court held that Nobin’s act was insane and that he was not in control of his senses when he became aware of his wife’s affair and held him not guilty.
● The same court in the trial against Mahant for adultery held that adultery was a criminal offense in British India and sentenced him to 3 years of imprisonment with a fine of Rs. 2000.
● Both the cases were appealed to the High Court of Calcutta. 


Issues of the Case:
Trial 1
● Whether Nobin was insane or not?
● Whether Nobin was clearly of unsound mind while committing the act or not?


Trial 2
● Whether Nobin and Elokeshi were married was it a known fact or not?
● Did Nobin know about the affair and accept the same or not?
● Whether there was sufficient proof or evidence to tell; whether sexual intercourse had occurred between the defendant and Elokeshi or not?
● Whether the Mahant knew that Elokeshi was married or not?
High Court Judgment: Trial 1
● The High Court admitted that there was no doubt that Elokeshi was killed by a fish knife (boti) by Nobin as he had confessed to it by himself.
● Regarding the question of insanity and loss of control, the court held that the defendant was not insane but had been excited. He acted under the influence of ‘anger, jealousy, and grief’ but was aware that what he was doing was wrong.
● The court declared Nobin sane and guilty of culpable homicide as there was no sufficient evidence to prove that he was insane and unable to think of the consequences of his actions.
● Thus, the High court quashed the decision of the session court and sentenced Nobin to transportation for life under section 302 of the Penal Code. 


Trial 2
● The High Court upheld the decision of the Session Court and sentenced the Mahant to 3 years imprisonment with a fine of Rs. 2000.
● The court explained that adhering to Hindu Law, adultery was a criminal offense in British India. 
● The court also noted for proof that carnal intercourse took place between the Mahant and Nobin’s wife.
● The court accepted the testimony of three residents who confirmed that they saw Elokeshi entering the Mahant’s house in the evening and leaving it in the morning.
● Though it was not that strong of proof still the court accepted it and quoted the lines of Manu “A woman must never act independently of her husband.”
● At last, the court stated that they place the law above personal revenge and individual justice.


Conclusion:
The Tarakeswar case was one of the most popular and most controversial cases in British India. 
This case caught people’s special attention as the adultery charges were against the Mahant of the Tarakeswar Temple. After the verdict of the Calcutta High Court, the native people forced the Governor-General to free Nobin as according to popular public opinion he has done nothing wrong in punishing his wife for her disloyalty. 
The court’s decision was indeed correct as it was in accordance with the law of that time. The judgment was given without any influence by society. According to the media, the Tarakeswar case was popular to the extent that everyone could be heard talking about the incident.
    `,
  },
  { title: 'Case Study 2', content: 'Details about case study 2...' },
  { title: 'Case Study 3', content: 'Details about case study 3...' },
  { title: 'Case Study 4', content: 'Details about case study 4...' },
  { title: 'Case Study 5', content: 'Details about case study 5...' },
  { title: 'Case Study 6', content: 'Details about case study 6...' },
];