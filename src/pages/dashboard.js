import { Link } from 'react-router-dom';
import {toggleMode} from '../functions';
import { useState } from 'react';

function Dashboard(props) {
  
  const [toggle,setToggle] = useState(false);

  const body= document.querySelector('body')
  let bodyBg =body.style.backgroundColor;
  if(bodyBg=== 'rgb(35, 35, 35)'){
    toggleMode();
  }

  const toggleLogin=()=>{
    const loginForm = document.querySelector('.login-component');
    if(toggle === false ){
      loginForm.style.display='block';
      console.log('clicked')
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
          <div id='toggle-mode' onClick={toggleMode} value='day'>
            <span class="material-symbols-outlined" id='mode-icon'>
              dark_mode
            </span>
           </div>
        </div>

      </div>
    );
  }
  
  export default Dashboard;
  