import './Barner.css'
import { motion } from 'framer-motion'
import { SlideUp } from "../../utility/animation"

export const Barner = () => {
  return (
    <div className="barner">
        <div className="container">
            <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
                <div id='barnerimg'>
                    <motion.img initial ={{opacity: 0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{type:"spring", stiffness:100, delay:0.4}}  src="./Images/img1.png" alt="" className='w-[28rem]  md:max-w-[400px] xl:min-w-[600px] h-full object-cover' id='barImg'/>
                </div>
                <div id='barnertext' className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-[450px]'>
                    <motion.h1 variants={SlideUp(0.7)} initial="hidden" whileInView={"visible"} viewport={{ once: true}}     className="text-2xl lg:text-4xl font-bold" id='h1'>Importance Of Self Care</motion.h1>
                    <motion.p variants={SlideUp(0.9)} initial="hidden" whileInView={"visible"} viewport={{ once: true}} className='flex justify-center md:justify-start mt-4' id='barP'>
                        The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit
                        quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.
                    </motion.p>
                    <motion.button variants={SlideUp(1.1)} initial="hidden" whileInView={"visible"} viewport={{ once: true}} className="cssbuttons-io-button mt-8" id='rBtn'>
                      Register Now
                      <div className="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                        </svg>
                      </div>
                  </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}
