import './Words.css';
import Stepper, { Step } from '../Steps/Stepper';
import { useState } from 'react';

export const Words = () => {
  const [name, setName] = useState("");  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleConfirm = () => {
    if (name.trim()) {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      <div id='words'>
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the Power Sets Gym</h2>
            <p>Do you wish to join our Aerobics class?</p>
          </Step>
          <Step>
            <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="/Images/aerobics.jpg" />
            <p>Every 1st and 3rd Saturday of the month</p>
          </Step>
          <Step>
            <h2>Are you interested? Enter your name</h2>
            <div className="flex items-center gap-2" id='place'>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name?" 
                required 
                className="inp border p-2 rounded" 
              />
              <button 
                onClick={handleConfirm} 
                disabled={!name.trim()} 
                className={`px-4 py-2 rounded transition 
                  ${name.trim() ? "bg-amber-700 text-white hover:bg-amber-900" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
              >
                Confirm
              </button>
            </div>
          </Step>

          {/* Modal */}
          {isModalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" id='modalbg'>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center" id='modal'>
                <h2 className="text-xl font-bold">Hello, {name}</h2> 
                <p className="mt-2">See you on saturday.</p>
                <button onClick={() => setIsModalVisible(false)} className="mt-4 bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-900 transition">
                  Close
                </button>
              </div>
            </div>
          )}
          <Step>
            <h2>Thank you</h2>
          </Step>
        </Stepper>
      </div>
    </>
  );
};



const MouseImageTrail = ({

  children,

  // List of image sources

  images,

  // Will render a new image every X pixels between mouse moves

  renderImageBuffer,

  // images will be rotated at a random number between zero and rotationRange,

  // alternating between a positive and negative rotation

  rotationRange,

}) => {

  const [scope, animate] = useAnimate();


  const lastRenderPosition = useRef({ x: 0, y: 0 });

  const imageRenderCount = useRef(0);


  const handleMouseMove = (e) => {

    const { clientX, clientY } = e;


    const distance = calculateDistance(

      clientX,

      clientY,

      lastRenderPosition.current.x,

      lastRenderPosition.current.y

    );


    if (distance >= renderImageBuffer) {

      lastRenderPosition.current.x = clientX;

      lastRenderPosition.current.y = clientY;


      renderNextImage();

    }

  };


  const calculateDistance = (x1, y1, x2, y2) => {

    const deltaX = x2 - x1;

    const deltaY = y2 - y1;


    // Using the Pythagorean theorem to calculate the distance

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);


    return distance;

  };


  const renderNextImage = () => {

    const imageIndex = imageRenderCount.current % images.length;

    const selector = `[data-mouse-move-index="${imageIndex}"]`;


    const el = document.querySelector(selector);


    el.style.top = `${lastRenderPosition.current.y}px`;

    el.style.left = `${lastRenderPosition.current.x}px`;

    el.style.zIndex = imageRenderCount.current.toString();


    const rotation = Math.random() * rotationRange;


    animate(

      selector,

      {

        opacity: [0, 1],

        transform: [

          `translate(-50%, -25%) scale(0.5) ${

            imageIndex % 2

              ? `rotate(${rotation}deg)`

              : `rotate(-${rotation}deg)`

          }`,

          `translate(-50%, -50%) scale(1) ${

            imageIndex % 2

              ? `rotate(-${rotation}deg)`

              : `rotate(${rotation}deg)`

          }`,

        ],

      },

      { type: "spring", damping: 15, stiffness: 200 }

    );


    animate(

      selector,

      {

        opacity: [1, 0],

      },

      { ease: "linear", duration: 0.5, delay: 5 }

    );


    imageRenderCount.current = imageRenderCount.current + 1;

  };


  return (

    <div

      ref={scope}

      className="relative overflow-hidden"

      onMouseMove={handleMouseMove}

    >

      {children}


      {images.map((img, index) => (

        <img

          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"

          src={img}

          alt={`Mouse move image ${index}`}

          key={index}

          data-mouse-move-index={index}

        />

      ))}

    </div>

  );

};