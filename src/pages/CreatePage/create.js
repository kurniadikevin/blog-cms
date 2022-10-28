import Dashboard from "../dashboard";
import './style.css'

export function CreatePost(){
   return(
    <div>
        <Dashboard/>
       <div className="create-main">
        <form className="create-form">
            <div>
            <label name='title' className="title-label">Title</label>
            <input type='text' id="title-input" ></input>
            </div>
            <div>
            <label className="author-label">Author</label>
            <input type='text' id="author-input"></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input"></textarea>
            </div>
            <div className="btn-cont">
            <button id="save-template">Save as Template</button>
            <button id="publish-submit">Publish</button>
            </div>
        </form>
       </div>
    </div>
   )
}

