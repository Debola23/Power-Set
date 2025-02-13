import { Navbar } from '../Navbar/Navbar';
import Style from './Pricing.module.css';
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animation';
import { Footer } from '../Footer/Footer';
import { PriceText } from '../PriceText/PriceText';

export const Pricing = () => {
  return (
    <>
    <div className={Style.pIntro}>
      <Navbar/>
      <motion.div variants={SlideRight (0.6)} initial="hidden" animate="visible" className={Style.pricingText} >
        <h2>Personal Training At</h2>
        <h3>Power Sets</h3>
      </motion.div>
    </div>
    <div className={Style.pMain}>
      <div className={Style.priceSec}>
        <PriceText />
      </div>
    </div>
    <Footer/>
    </>
   
  )
}
