import { motion } from 'framer-motion'
import './Offer.css'
import { SlideLeft } from '../../utility/animation'



const OfferData = [
  {
    id: '1',
    title: 'Yoga Equipment',
    desc:"Yoga items and trainers are available for you to get started with your yoga journey.",
    link:"/",
    icon:<img src="/Images/yoga.png" alt="" className='w-12 h-12'/>,
    delay:0.3,
  },
  {
    id: '2',
    title: 'Muscle Equipment',
    desc:"There are various muscle equipment available for you to get started with your muscle training journey.",
    link:"/",
    icon:<img src="/Images/dumbell.png" alt="" className='w-12 h-12'/>,
    delay:0.6,
  },
  {
    id: '3',
    title: 'Fitness Equipment',
    desc:"Join our aerobics classes and get started with your fitness journey.",
    link:"/",
    icon:<img src="/Images/gymequipment.png" alt="" className='w-12 h-12'/>,
    delay:0.9,
  },
]

export const Offer = () => {
  return (
    <div className='offer'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:text-4xl' id='h1'>
              What we offer
            </h1>
            <p className='text-gray-500'>
              We offer various services to help to get in the best shape and boost your overall well-being.
            </p>
          </div>
          {
            OfferData.map((item) => {
              return (
                <motion.div variants={SlideLeft(item.delay)} initial="hidden" whileInView="visible" className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]' key={item.id}>
                  <div className='text-4xl'>{item.icon}</div>
                  <p className='text-2xl font-semibold'>{item.title}</p>
                  <p className='text-gray-500 font-semibold'>{item.desc}</p>
                </motion.div>
                
              );
            })
          }
        </div>
      </div>
    </div>
  )
}
