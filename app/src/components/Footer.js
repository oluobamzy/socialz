import './Footer.css'
import BentoIcon from '@mui/icons-material/Bento';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ConstructionIcon from '@mui/icons-material/Construction';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        
      <div className="footer__links">
        <BentoIcon />
        <h5>Gallery</h5>
      </div>
      <div className="footer__links">
        <ContactMailIcon />
        <h5>Contact Us</h5>
      </div>
      <div className="footer__links">
        <ConstructionIcon />
       <h5> Services</h5>
      </div>
      </div>
      <p>© 2023 Socialz</p>
    </div>
  );
};

export default Footer;