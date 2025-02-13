import './Poster.css'
import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'


export const Poster = () => {
  return (
    <div className="poster">
      <div className="container my-14">
        <div className='bg-[#f9f9f9] py-15 md:py-24 flex justify-center items-center'>
          <div className='flex flex-col justify-center text-center space-y-8 lg:px-44'>
            <motion.h1  variants={SlideLeft (0.5)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}}  id="h1p" className='text-3xl lg:text-5xl font-bold uppercase'>
              Get 20% Discount On Your First Membership Deal, Are You Ready.
            </motion.h1>
            <motion.p variants={SlideLeft (0.7)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}} id="pp" className=''>We will make sure you get the right and the best quality products for your workout</motion.p>
            <motion.button variants={SlideLeft (0.9)} initial="hidden"  whileInView={"visible"} viewport={{ once: true}}  className="cssbuttons-io-button mt-8 flex justify-center gap-6" id='rBtnn'>
              Learn More
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
