import { Link } from 'react-router-dom';
import { useEffect, useState} from "react";
import Dashboard from '../dashboard';
import './styleHome.css';
import { formatDate} from '../../functions';
import axios from 'axios';
import LogIn from '../login/logIn';


export function HomePage() {
 
    const [data,setData]= useState([{title:'loading data', date : new Date(), _id: 'loading data'}]);
    const [currentUser,setCurrentUser] = useState([])
    const [rerender, setRerender] = useState(false);

    const callRestApi = async () => {
        const restEndpoint = "https://blog-api-production-8114.up.railway.app/posts/all";
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        setData(jsonResponse);
        console.log(jsonResponse);      
    };

     const deletePost= async function(post) {
         await axios.delete(`https://blog-api-production-8114.up.railway.app/posts/${post._id}`);
        console.log('Delete successful'); 
        setRerender(!rerender);  
    }

    // useEffect once
    useEffect(() =>{
        callRestApi();
       
    },[rerender])

   
    
    return (
        <div>
            <Dashboard currentUser={currentUser}/>
            <LogIn/>
            <div className="data-collection">
                {data.map(function(item){
                    return (
                        
                        <div className='data-container'>
                            <Link className='data-title' id='link2'
                             to={{ pathname: `/posts/${item._id}`,  }}
                            >
                                <div >{item.title}</div>
                            </Link>
                            <div className='data-body'>{item.body}</div>
                            <div className='data-author'>{item.author}</div>
                            <div className='data-date'>
                               {formatDate(item.date)}
                            </div>
                            <div className='publishStatus'> Published : {item.published}</div>
                            <div className='btn-container'>
                            <Link className='updateBtn' id='link2'
                             to={{ pathname: `/posts/${item._id}/update`,  }}>
                            <div>Update</div>
                            </Link>
                            <div id='deleteBtn' onClick={()=> deletePost(item)}>Delete</div>
                         
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
