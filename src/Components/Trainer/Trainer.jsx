import { Navbar } from '../Navbar/Navbar'
import Style from './Trainer.module.css'
import { motion } from 'framer-motion'
import { SlideRight } from '../../utility/animation'
import { SlideUp } from '../../utility/animation'
import { Footer } from '../Footer/Footer'




const OfferData = [
  {
    id: '1',
    title: 'Good form',
    desc:"For strength training especially, and swimming, form is very important, but it’s also important for other types of exercise. If you’re strength training, start with lighter weights so you can work on your form.",
    link:"/",
    icon:<img src="/Images/goodform.png" alt="" className='w-12 h-12'/>,
    delay:0.3,
  },
  {
    id: '2',
    title: 'Mix it up.',
    desc:"Don’t stick to the same workout routine for too long, or your body will adjust to the stress level and you won’t be getting an effective workout",
    link:"/",
    icon:<img src="/Images/change.png" alt="" className='w-12 h-12'/>,
    delay:0.6,
  },
  {
    id: '3',
    title: 'One set, to failure.',
    desc:"Instead of doing 2-3 sets, as many people do, maximize your effectiveness by doing just one,",
    link:"/",
    icon:<img src="/Images/failure.png" alt="" className='w-12 h-12'/>,
    delay:0.9,
  },
  {
    id: '4',
    title: 'Heavier weight',
    desc:"When you’re starting out, it’s best to start with lower weights so you can focus on good form. But once you’ve gotten your form down, it’s best to lift the heaviest weights you can lift while still keeping good form.",
    link:"/",
    icon:<img src="/Images/heavy.png" alt="" className='w-12 h-12'/>,
    delay:1.2,
  },
  {
    id: '5',
    title: 'Warm Up',
    desc:"Warming up before a session will help with movement and mobility while lifting",
    link:"/",
    icon:<img src="/Images/warmup.png" alt="" className='w-12 h-12'/>,
    delay:1.5,
  },
  {
    id: '6',
    title: 'Rest',
    desc:"You cant work your muscles everyday you need to rest on some days to ensure growth",
    link:"/",
    icon:<img src="/Images/sleeping.png" alt="" className='w-12 h-12'/>,
    delay:1.8,
  },
  {
    id: '7',
    title: 'Water',
    desc:"Be sure to hydrate throughout the day. It takes a couple of hours for your body to absorb the water, so you can’t just drink right before exercise. ",
    link:"/",
    icon:<img src="/Images/water.png" alt="" className='w-12 h-12'/>,
    delay:2.1,
  },
  {
    id: '8',
    title: 'Protein',
    desc:"Many people don’t pay enough attention to getting the protein their muscles need to rebuild.",
    link:"/",
    icon:<img src="/Images/protein.png" alt="" className='w-12 h-12'/>,
    delay:2.4,
  },
]

export const Trainer = () => {

  return (
    <>
      <div id={Style.herobg}>
          <Navbar/>
        <motion.div variants={SlideRight (0.6)} initial="hidden" animate="visible" className={Style.trainerText} >
          <h2>Personal Training At</h2>
          <h3>Power Sets</h3>
        </motion.div>
      </div>
      {/* Trainer Intro */}  
        <div className="w-full bg-gray-100 py-12 px-4 md:px-12 lg:px-24" id={Style.trainCont}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            
            {/* Left Text Section */}
            <motion.div variants={SlideUp(0.6)} initial="hidden" whileInView="visible" 
              className="lg:col-span-3 space-y-4 text-left">
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900" id={Style.th2}>
                A CUSTOM WORKOUT <br /> PLAN BUILT FOR YOU
              </h2>
              
              <p className="text-lg text-orange-700" id={Style.tp}>
                You are a unique individual with unique fitness goals.
              </p>

              <p className="text-base md:text-lg text-gray-700" id={Style.tp}>
                Work one-on-one with a certified personal trainer who will build a 
                custom workout program for your specific needs and fitness goals. Whether you’re a 
                beginner, have just hit a plateau, or are an athlete training for a specific event, 
                working with a Fitness 19 personal trainer is an amazing and beneficial experience.
              </p>

              <p className="mt-4 text-sm md:text-base font-medium" id={Style.tp}>
                Power Set wonderful personal training team includes:
              </p>

              {/* List */}
              <ul className="grid grid-cols-2 gap-2 list-disc pl-4 text-gray-800 text-sm md:text-base">
                <li>Beginner programs</li>
                <li>Spa</li>
                <li>Building muscle</li>
                <li>Sport-specific athlete programs</li>
                <li>Senior fitness programs</li>
                <li>Endurance Training</li>
                <li>Corrective movement</li>
                <li>Aerobics</li>
              </ul>

              <p className="mt-6 text-sm md:text-base" id={Style.tp}>
                <span className="uppercase font-semibold text-black">
                  Want a free personal training session?
                </span> Fill out the form at the bottom of this page and a Power Set personal trainer will reach out!
              </p>
            </motion.div>

            {/* Right Image Section */}
            <motion.div variants={SlideUp(1.2)} initial="hidden" whileInView="visible" 
              className="lg:col-span-2 flex justify-center"   >
              <img src="/Images/personaltrainer.jpg" alt="Personal Trainer"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
                id={Style.tImg}
              />
            </motion.div>
          </div>
        </div>
      {/* Habits */}
      <div id={Style.habits}>
        <h1 id={Style.habitsText}>
            Good Workout Habits
              <img src="/Images/habit.png" alt="" className='w-10 h-10' />
          </h1>
        <div className="container" id={Style.c}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {
              OfferData.map((item) => {
                return (
                  <motion.div variants={SlideUp(item.delay)} initial="hidden" whileInView="visible" className='space-y-4 p-6 mb-4 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]' key={item.id}>
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
      {/* Form */}
      <div className={Style.form}> 
        <div className="mt-4 flex flex-col  rounded-lg p-4 shadow-sm" id={Style.formId}>
          <div className="mt-4">
            <label className="text-black" htmlFor="name">FULL NAME</label>
            <input placeholder="Name" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 outline-0" type="text"/>
          </div>

          <div className="mt-4">
            <label className="text-black" htmlFor="session">SESSION</label>
            <textarea placeholder="Pick any session from the above list and type  here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1  outline-0" id="description"></textarea>
          </div>

          <div className="mt-4 flex flex-row space-x-2" id={Style.question}>
            <div className="flex-1" id={Style.q1}>
              <label className="text-black" htmlFor="question">DO YOU NEED AN EVERYDAY TRAINER?</label>
              <input placeholder="Enter your answer here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1  outline-0" id="emotions" type="text"/>
            </div>

            <div className="flex-1" id={Style.q2}>
              <label className="text-black" htmlFor="question">WANT TO JOIN SATURDAY JOGS?</label>
              <input placeholder="Enter your answer here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1  outline-0" id="symbols" type="text"/>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900  outline-0" id="generate-button" type="button">Send</button>
          </div>

          <div className="mt-4">
            <textarea placeholder="Add your comment here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 h-48  outline-0" id="story-output"></textarea>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}
