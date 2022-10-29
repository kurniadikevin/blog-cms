import './style.css';

function LogIn(){

    return(
        <div className="login-component">
            <h2>Log-in to edit</h2>
            <form action="http://localhost:5000/users/log-in" method="POST" className='loginForm'>
            <label for="username">Username</label>
            <input name="username" placeholder="username" type="text" />
            <label for="password">Password</label>
            <input name="password" type="password" />
            <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn