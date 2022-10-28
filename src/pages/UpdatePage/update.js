import Dashboard from "../dashboard";
import './style.css';
import { useState } from "react";
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";


export function UpdatePost(){

    const [title,setTitle]= useState('');
    const [author,setAuthor] = useState('');
    const [body,setBody]= useState('');
    const { id } = useParams();

   const updatePost = async()=>{
        const article = { 
            title: title,
            body: body,
            author: author,
            _id : id };
        await axios.put(`http://localhost:5000/posts/${id}`, article);
        //this.setState({ updatedAt: response.data.updatedAt });
        console.log('update post')
   }

   return(
    <div>
        <Dashboard/>
       <div className="create-main">

        <div className="create-form" >
            <h2>Update Post</h2>
            <div>
            <label  className="title-label">Title</label>
            <input type='text' id="title-input" name='title'
             value={title} onChange={(e) => setTitle(e.target.value)} ></input>
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
            <button id="save-template">Save as Template</button>
          
            <button id="publish-submit" onClick={updatePost}>Update</button>

            </div>
        </div>

       </div>
    </div>
   )
}

