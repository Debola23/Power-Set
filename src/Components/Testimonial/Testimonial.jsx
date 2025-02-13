import "./Testimonial.css";
import { TestimonialData } from "../../mockData/data";
import Slider from "react-slick";


export const Testimonial = () => {
    const setting = {
      dots: true,
      arrow: false,
      infinite: true,
      speed: 500,
      slidesToScrool: 1,
      autoplayspeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint:10000,
          settings:{
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,

        },
      },
      {
        breakpoint:640,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ],
    };

  return (
    <div className="testi">
        <div className="container">
            <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
               <h1 className="text-4xl font-bold">Testimonial</h1>      
            </div> 
            {/* testimonial cards */}   
            <div>
              <Slider {...setting}>
                {
                  TestimonialData.map((data) => (
                    <div key={data.id} className="my-6">
                      <div className="flex flex-col gap-4 p-12 shadow-lg mx-4 rounded-xl bg-[#ff89011a]">
                        <div className="flex justify-start items-center gap-5">
                          <img src={data.img} alt="" className="rounded-full w-16 h-16" />
                          <div>
                            <p className="text-xl font-bold text-black/80 ">{data.name}</p>
                            <p>{data.position}</p>
                          </div>
                        </div>
                        {/* bottom section */}
                        <div className="py-6 space-y-4 flex flex-col items-center gap-4">
                          <p className="text-sm text-gray-500">{data.text}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
        </div>
    </div>
  )
}
