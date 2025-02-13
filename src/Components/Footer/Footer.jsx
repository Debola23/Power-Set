import Styles from './Footer.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export const Footer = () => {

  const [email, setEmail] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  
    setIsModalOpen(true);

    
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
     <div className="mt-22">
      <div className={Styles.footer}>
          <div className={Styles.container}>
            <a href="/">
              <img className={Styles.flogo} src="/Images/logoicon.png" alt="River Store Logo" />
            </a>
            <div className={Styles.logoSection}>
              <h1 className={Styles.logo}>Power Sets</h1>
              <p className={Styles.description}>
                  If you are looking for a gym that combines great equipment, expert guidance, and an encouraging environment, then Power Sets is the one for you
              </p>
            </div>
            <div className={Styles.linksSection}>
              <h3>Company</h3>
              <ul>
                <li>Lagos, Nigeria</li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Job Offers </a><span className=" bg-amber-500" id={Styles.hire}>HIRING</span></li>
                <li><a href="">Terms</a></li>
              </ul>
            </div>
            <div className={Styles.linksSection}>
              <h3>Platfrom</h3>
              <ul>
                <li><a href="#about">Pricing</a></li>
                <li><a href="#about">Locations</a></li>
                <li><a href="#about">Membership</a></li>
              </ul>
            </div>
            <div className={Styles.newsletterSection}>
              <h3>Newsletter</h3>
              <p>Subscribe to get the latest updates and offers.</p>
              <form onSubmit={handleFormSubmit} className={Styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Controlled input
                  className={Styles.input}
                />
                <button type="submit" className={Styles.button}>Subscribe</button>
              </form>
            </div>
          </div>
          <div className={Styles.bottom}>
            <p>&copy;Power Sets 2025. All Rights Reserved.</p>
            <ul className={Styles.socialLinks}>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
      </div>
    </div>

    {isModalOpen && (
     <Modal closeModal={closeModal}/>   
    )}
    </>
   
  )
}


