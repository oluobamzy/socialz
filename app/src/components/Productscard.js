import "./ProductsCard.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import BeenhereIcon from '@mui/icons-material/Beenhere';
const ProductsCard = () => {
  return (
    <div className="prod-card-catalog">
      <div className="prod-card">
        <a href="/websites">
        <h3>Projects</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects</p>
        <AccessTimeFilledIcon className="icon" />
        </a>
      </div>
      <div className="prod-card">
        <h3>Automation</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects</p>
        <AttachEmailIcon className="icon" />
      </div>
      <div className="prod-card">
        <h3>Build Scalable Apps</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects</p>
        <BeenhereIcon className="icon" />
      </div>
    </div>
  );
};
export default ProductsCard;