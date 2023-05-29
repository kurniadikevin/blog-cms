import Dashboard from "../dashboard";
import './style.css';
import MultipartForm from "../../components/multipart-form";

export function CreatePost(){

  
   return(
    <div>
        <Dashboard/>
       <div className="create-main">
        
        <div className="toggle-form">
            <div>Basic form</div>
            <div>Multipart form</div>
        </div>
       {/*  <form className="create-form"  method='post' action='http://localhost:5000/posts/new'>
            <h2>Publish New Post</h2>
            <div>
            <label  className="title-label">Title</label>
            <input type='text' id="title-input" name='title'></input>
            </div>
            <div>
            <label className="author-label">Author</label>
            <input type='text' id="author-input" name='author'></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input" name='text'></textarea>
            </div>
            <div className="btn-cont">
            <select name="published">
                <option value={true}>Publish</option>
                <option value={false}>Save as Template</option>
            </select>
            <button id="publish-submit" type="submit">Submit</button>
            </div>
        </form> */}
        <MultipartForm/>
       </div>
    </div>
   )
}

