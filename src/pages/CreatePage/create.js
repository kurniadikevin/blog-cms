import Dashboard from "../dashboard";
import './style.css';

import { useState } from "react";

//import { useNavigate } from "react-router-dom";


export function CreatePost(){

  

   return(
    <div>
        <Dashboard/>
       <div className="create-main">

        <form className="create-form"  method='post' action='http://localhost:5000/posts/new'>
            <div>
            <label  className="title-label">Title</label>
            <input type='text' id="title-input" name='title'
           /*  value={title} onChange={(e) => setTitle(e.target.value)} */></input>
            </div>
            <div>
            <label className="author-label">Author</label>
            <input type='text' id="author-input" name='author'
            /*  value={author} onChange={(e) => setAuthor(e.target.value)} */></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input" name='text'
             /* value={body} onChange={(e) => setBody(e.target.value)} */></textarea>
            </div>
            <div className="btn-cont">
            <button id="save-template">Save as Template</button>
            <button id="publish-submit" type="submit">Publish</button>
            </div>
        </form>

       </div>
    </div>
   )
}

