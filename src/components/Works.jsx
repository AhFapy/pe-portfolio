import { Tilt } from "react-tilt"
import {motion} from "framer-motion"

import { styles } from "../style"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"

  
const ProjectCard = ({index, name, description, tags, image, source_code_link, handleWindow}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px] hover:cursor-pointer" onClick={() => handleWindow(source_code_link)}>
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl">
        </img>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src="/click.png" alt="github" className="w-1/2 h-1/2 object-contain">
            </img>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  const handleWindow = function(link) {
    window.open(link)
  }

  return (
    <>
    <motion.div variants={textVariant()} className='flex justify-center items-center flex-col mt-[100vh]'>
      <p className={`${styles.sectionSubText} text-center`}>THE GLOBAL MILE</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Proof Content.</h2>
    </motion.div>

    <div className="w-full flex justify-center">
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
      >
        In this section you can see all the proof that will be added as I make progress in the Ambitious Callenge of <b>The Global Mile</b>
      </motion.p>
    </div>

     <div className="mt-20 flex flex-wrap justify-center gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} handleWindow={handleWindow}/> 
      )
      )}
    </div> 

    </>
  )
}

export default SectionWrapper(Works, "work")