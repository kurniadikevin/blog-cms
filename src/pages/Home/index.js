import { Link } from 'react-router-dom';
import { useEffect, useState} from "react";
import Dashboard from '../dashboard';
import './styleHome.css';
import { formatDate, getImageSrc, limitDisplayText,renderSeeMore} from '../../functions';
import axios from 'axios';
import LogIn from '../login/logIn';


export function HomePage() {
 
    const [data,setData]= useState([{title:'loading data', date : new Date(), _id: 'loading data'}]);
    const [currentUser,setCurrentUser] = useState([])
    const [rerender, setRerender] = useState(false);

    const callRestApi = async () => {
        const restEndpoint = `${process.env.REACT_APP_API_URL}/posts/all`;
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        setData(jsonResponse);
    };

     const deletePost= async function(post) {
         await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post._id}`);
        setRerender(!rerender);  
    }

    const checkForPublishedStatus=(item)=>{
       return item === true || item === 'true' ? 'Published' : 'Unpublished'
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
                            {
                             item.imageContent?.length > 0 ?
                            <img id='data-image' alt='post-image' src={getImageSrc(item.imageContent)}
                            width={200} >
                            </img>
                            : ''
                            }
                            <Link className='data-title' id='link2'
                             to={{ pathname: `/posts/${item._id}`,  }}
                            >
                                <div id='data-title-text'>{item.title}</div>
                            </Link>
                            <div className='data-body'>
                                {limitDisplayText(item.body,30)}
                               {renderSeeMore(item.body, item._id)}
                            </div>
                            <div className='data-author'>{item.author}</div>
                            <div className='data-date'>
                               {formatDate(item.date)}
                            </div>
                            <div className='publishStatus'> {checkForPublishedStatus(item.published)}</div>
                            <div className='btn-container'>
                            <Link className='updateBtn' id='link2'
                             to={{ pathname: `/posts/${item._id}/update`,  }}>
                            <div >Update</div>
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
