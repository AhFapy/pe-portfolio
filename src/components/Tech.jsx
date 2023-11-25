import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { motion } from 'framer-motion' 
import { fadeIn, textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <>
    
    <main id="main-tech" className="text-white text-[5vw] flex flex-col justify-center items-center h-screen mb-[100vh]">
    <div className="pt-[6vh] flex flex-col items-center mt-[6vh] w-[90vw] h-[40vh]">
        <div>
            <h1 className={`${styles.sectionHeadText} text-center`}>
                Initial Data and Measures 🛠️<br/>
                <div className="w-full flex justify-center">
                <motion.p
                variants={fadeIn("", "", 0., 1)}
                className='mt-4 text-secondary text-center flex-center text-[17px] max-w-3xl leading-[30px] font-normal'
                >
                    Following up you'll see the initial measures at the start of the program. Some of those are my weekly diet and my Body Mass Index.
                </motion.p>
                </div>
            </h1>
        </div>
        <h2 className={`${styles.sectionSubText} text-center mt-[5vh]`}>ParQ Test</h2>
        <img className={`rounded-xl border-2 border-sky-500 mt-[3rem] hover:cursor-pointer hover:opacity-70 ease-in-out transition-all`} src="parq-test.jpg"/>
        <h2 className={`${styles.sectionSubText} text-center mt-[5vh]`}>Body Fat Measures with ACE</h2>
        <img className={`rounded-xl border-2 border-sky-500 mt-[3rem] hover:cursor-pointer hover:opacity-70 ease-in-out transition-all`} src="Ace-calculation.png"/>
        <h2 className={`${styles.sectionSubText} text-center mt-[5vh]`}>BMI Calculations</h2>
        <img className={`rounded-xl border-2 border-sky-500 mt-[3rem] hover:cursor-pointer hover:opacity-70 ease-in-out transition-all`} src="bmi.png"/>
        <h2 className={`${styles.sectionSubText} text-center mt-[5vh]`}>My Diet from 19/09 until 26/09</h2>
        <img className={`rounded-xl border-2 border-sky-500 mt-[3rem] hover:cursor-pointer hover:opacity-70 ease-in-out transition-all`} src="diet.png"/>
    </div>
</main>
</>
)
}

export default SectionWrapper(Tech, "")