const TextForm=()=>{
    return(
        <form className="create-form"  id="multipart-form"
         method='post' action='https://blog-api-production-8114.up.railway.app/posts/new'>
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
        </form> 
    )
}

export default TextForm