import './Services.css';
import { TbBrandStorybook } from "react-icons/tb";
import Nav from './Nav';
import { useState } from 'react';
const Services = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignOut = () => {
    // Implement the sign-out logic here
    setIsSignedIn(false);
  };
    return (
        <div className="container">
            <Nav isSignedIn={isSignedIn} onSignOut={handleSignOut}/>
            <div className='services'>
            <div className="services__container">
                <TbBrandStorybook className='icon-story'/>
                <h3>Find any story</h3> 
                <p>Search for any story you want to read. our AI generative tool will help you check in history and bring to you a list of stories that match your reading fantasy</p>
                <button>Try Now</button>
              </div>
              <div className="services__container">
                <TbBrandStorybook className='icon-story'/>
                <h3>Generate Images</h3> 
                <p>Do you love the oldies? Here's to a good old days. Generate cool and lovely images by providing details of what you want in those images and you get to keep the images at a fee</p>
                <button>Try Now</button>
              </div>
              <div className="services__container">
                <TbBrandStorybook className='icon-story'/>
                <h3>Find other users</h3> 
                <p>There are any more others like you reading old stories and generating cool images. Connect and share resources</p>
                <button className='chat'><a href='/chat' >Chat Now</a></button>
              </div>
            </div>
            

              
        </div>
    );
};
export default Services;