import "./Hero.css"
import { motion } from "framer-motion"
import { SlideRight } from "../../utility/animation"
import { SlideLeft } from "../../utility/animation"
export const Hero = () => {
  return (
    <>
      <div className="hero">
          <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative px-4 items-center" id="cont">
            <div className="flex flex-col justify-center py-14 md:py-0 " >
              <motion.h1 variants={SlideRight (0.6)} initial="hidden" animate="visible"  className="text-[5.5rem] leading-tight">
                Gym Right<br/>Live Right
              </motion.h1>
              <motion.p  variants={SlideRight (1.2)} initial="hidden" animate="visible" className="text-[20px] mt-8">
                Book a trainer or come to any of our gyms and start your fitness journey today.
              </motion.p>
              <motion.div  variants={SlideRight (1.5)} initial="hidden" animate="visible" className="flex " id="btn">
                  <button className="cssbuttons-io-button mt-8">
                    Book Trainer
                    <div className="icon">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
              </motion.div>
            </div>
            {/* hero image */}
              <div className="flex justify-center items-center">
                <motion.img variants={SlideLeft (2)} initial="hidden" animate="visible" src="/Images/intro1.png" alt="" className="w-[350px]md:w-[550px] xl:w-[700px] drop-shadow"  />
              </div>
          </div>
      </div>
    </>
   
  )
}
