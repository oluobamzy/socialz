import "./ActionBar.css";
import Button from '@mui/material/Button';
const ActionBar = () => {
  return (
    <div className="action-bar">
      
        <div className="text-area-action">
          <h1>Social tool for personal gain</h1>
          <Button variant="contained" color="warning" sx={{textAlign:'center'}}>
            Buy Now
          </Button>
        </div>
        <div className="action-bar__item__img">
        <img src="https://images.pexels.com/photos/5083568/pexels-photo-5083568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="home" />
        </div>
      

    </div>
  );
};
export default ActionBar;
