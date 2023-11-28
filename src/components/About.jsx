import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion' 

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) => {
return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='flex justify-center items-center flex-col'>
      <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      <motion.p
    variants={fadeIn("", "", 0., 1)}
    className='mt-4 text-secondary text-center flex-center text-[17px] max-w-3xl leading-[30px]'
    >
      My name's Ahmed Mirza and I'm on baccalaureate's first year. My main goal for this P.E semester is the same as my life philosophy. <br/>
      Being disciplined and achieving a top tier athletic and aesthetic body 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </motion.div>

    <h2 className={`${styles.sectionHeadText} text-center mt-[10vh]`}>The System.</h2>
    <motion.p
    variants={fadeIn("", "", 0., 1)}
    className='mt-[10vh] ml-[25%] mr-[25%] text-center flex-center text-[17px] max-w-3xl leading-[30px]'
    >
      <p>· 4x Hypertrophy Training Weekly</p>
      <p>· 2x Murph Workouts per Month</p>
      <p>· 1x Jogging Session per Week</p>
    </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")