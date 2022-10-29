import { Link } from 'react-router-dom';
import {toggleMode} from '../functions';

function Dashboard() {
  
  const body= document.querySelector('body')
  let bodyBg =body.style.backgroundColor;
  if(bodyBg=== 'rgb(35, 35, 35)'){
    toggleMode();
  }


  return (
      <div className="dashboard">
         <Link  to="/" className="blog-name" id='link'>
          <div >Blackboard Journal CMS</div>
          
        </Link>
        <div className='dashboard-menu'>
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
  