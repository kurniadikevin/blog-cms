import Dashboard from "../dashboard";
import './style.css';

export function CreatePost(){

  
   return(
    <div>
        <Dashboard/>
       <div className="create-main">
        
        <form className="create-form"  method='post' action='https://blog-api-production-8114.up.railway.app/posts/new'>
            <h2>Publish New Post</h2>
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
            <select name="published">
                <option value={true}>Publish</option>
                <option value={false}>Save as Template</option>
            </select>
            <button id="publish-submit" type="submit">Submit</button>
            </div>
        </form>

       </div>
    </div>
   )
}

