import Dashboard from "../dashboard";
import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams} from 'react-router-dom';

export function UpdatePost(){

    const [title,setTitle]= useState('');
    const [author,setAuthor] = useState('');
    const [body,setBody]= useState('');
    const [status,setStatus]= useState(true);
    const { id } = useParams();


  //update post
   const updatePost = async(e)=>{
        e.preventDefault()
        const article = { 
            title: title,
            body: body,
            author: author,
            _id : id ,
          published : status}
        await axios.put(`http://localhost:5000/posts/${id}`, article);
        console.log('update post')
        window.location='/';
   }

   // make default value on update
  const callRestApi = async () => {
    const restEndpoint = `http://localhost:5000/posts/${id}`;
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setTitle(jsonResponse[0].title);
      setAuthor(jsonResponse[0].author);
      setBody(jsonResponse[0].body);
  };

  useEffect(()=>{
    callRestApi()
  },[])


   return(
    <div>
        <Dashboard/>
       <div className="create-main">

        <div className="create-form" >
            <h2>Update Post</h2>
            <div>
            <label  className="title-label">Title</label>
            <input type='text' id="title-input" name='title'
             value={title} onChange={(e) => setTitle(e.target.value)}
            ></input>
            </div>
            <div>
            <label className="author-label">Author</label>
            <input type='text' id="author-input" name='author'
              value={author} onChange={(e) => setAuthor(e.target.value)} ></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input" name='body'
              value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
            </div>
            <div className="btn-cont">
            <select name="published" onChange={(e) => setStatus(e.target.value)}>
                <option value={true}>Publish</option>
                <option value={false}>Save as Template</option>
            </select>
          
            <button id="publish-submit" onClick={updatePost}>Update</button>

            </div>
        </div>

       </div>
    </div>
   )
}

