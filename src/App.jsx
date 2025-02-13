import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Offer } from './Components/Offer/Offer'
import { Barner } from './Components/Barner/Barner'
import { Words } from './Components/Words/Words'
import { Poster } from './Components/Poster/Poster'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Footer } from './Components/Footer/Footer'



function App() {

  return (
    <>
   
      <div className='overflow-x-hidden'>
        <div className='intro'>
          <Navbar/>
          <Hero/>
        </div>
        <div>
          <Offer/>
          <Barner/>
          <Words/>
          <Poster/>
          <Testimonial/>
          <Footer/>
        </div>
      </div>
  
     
    </>
  )
}

export default App
