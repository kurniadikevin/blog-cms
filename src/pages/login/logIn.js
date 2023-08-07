import './style.css';
import axios from 'axios';
import {  useState } from 'react';


function LogIn(){

    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [currentUser, setCurrentUser]= useState('not log in');

    const loginUser = async(e)=>{
        e.preventDefault();
        if( username && password){
        const article = { 
           username : username,
        password : password};
        await axios.post(`${process.env.REACT_APP_API_URL}/users/log-in`, article).then(
            (res)=> {
              setCurrentUser('login as admin')
            console.log(res.config.data)
          }
            )
          displayControlBtn();
        } else {
          alert('please insert username and password')
        }
   }

   const displayControlBtn=()=>{
    // display create update delete button
    const createBtn = document.querySelector('.create-link');
    const updateBtn = document.querySelectorAll('.updateBtn');
    const deleteBtn = document.querySelectorAll('#deleteBtn');
    const loginComponent = document.querySelector('.login-component');

    createBtn.style.display='block';
    for(let i=0; i< updateBtn.length; i++){
      updateBtn[i].style.display='block';
      deleteBtn[i].style.display='block';
    }
    loginComponent.style.display='none';
   }


    return(
        <div className="login-component">
            <h2>Log-in to edit </h2>
            <p>{currentUser} (admin for testing with username: admin123 password: 123123)</p>
            <div className='loginForm'>
            <label for="username">Username</label>
            <input name="username" placeholder="username" type="text"
              value={username} onChange={(e) => setUsername(e.target.value)} />
            <label for="password">Password</label>
            <input name="password" type="password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loginUser} id='login-btn'>Log In</button>
            </div>
        </div>
    )
}

export default LogIn;

