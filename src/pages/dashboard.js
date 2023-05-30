import { Link } from 'react-router-dom';
import {toggleLightDarkMode, getValueLightDarkMode} from '../functions';
import { useState } from 'react';

function Dashboard(props) {
  
  const [toggle,setToggle] = useState(false);


  const toggleLogin=()=>{
    const loginForm = document.querySelector('.login-component');
    if(toggle === false ){
      loginForm.style.display='block';
      setToggle(true);
    } else{
      loginForm.style.display='none';
      setToggle(false)
    }
  }


  return (
      <div className="dashboard">
         <Link  to="/" className="blog-name" id='link'>
          <div >Blackboard Journal CMS  </div>

          
        </Link>
        <div className='dashboard-menu'>
          <div>{props.currentUser}</div>
          <div className='login-link' id='link2' onClick={toggleLogin} >Log-in</div>
          <Link  to="/" className='home-link' id='link2'>
            <div>Home</div>
          </Link>
          <Link  to="/create" className='create-link' id='link2'>
            <div>Create</div>
          </Link>
          <div id='toggle-mode' onClick={toggleLightDarkMode} value={getValueLightDarkMode}>
            <span class="material-symbols-outlined" id='mode-icon'>
              light_mode
            </span>
           </div>
        </div>

      </div>
    );
  }
  
  export default Dashboard;
  