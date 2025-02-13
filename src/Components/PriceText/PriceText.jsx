import { motion } from 'framer-motion'
import './PriceText.css'
import { SlideLeft } from '../../utility/animation'

const PriceData = [
  {
    id: '11',
    title: 'Daily',
    desc:"₦3,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:0.2,
  },
  {
    id: '22',
    title: 'One week',
    desc:"₦11,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:0.4,
  },
  {
    id: '33',
    title: 'Two Weeks',
    desc:"₦16,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:0.6,
  },
  {
    id: '44',
    title: 'Monthly',
    desc:"₦25,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:0.8,
  },
  {
    id: '55',
    title: 'Two Months',
    desc:"₦47,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:1.0,
  },
  {
    id: '66',
    title: 'Six Months',
    desc:"₦145,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:1.2,
  },
  {
    id: '77',
    title: 'Yearly',
    desc:"₦280,000",
    link:"/",
    icon:<img src="/Images/sub.png" alt="" className='w-12 h-12'/>,
    delay:1.4,
  },
]

export const PriceText = () => {
  return (
     <div className='prc'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:text-4xl' id='h1'>
              Gym Membership Deals
            </h1>
            <p className='text-gray-500'>
              Get the best deals available at power sets. One free week for new members.
            </p>
          </div>
              {
                PriceData.map((item) => {
                  return (
                    <motion.div variants={SlideLeft(item.delay)} initial="hidden" whileInView="visible" className=' mb-2.5 space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]' key={item.id}>
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
