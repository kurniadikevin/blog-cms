import { useState } from "react"
import axios from "axios"


const MultipartForm=()=>{
    
    const [title,setTitle]= useState();
    const [author, setAuthor] = useState();
    const [imageFile, setImageFile]= useState();
    const [body,setBody]= useState();
    const [published,setPublished]= useState(true);

    const handleFileSelect = (event) => {
        setImageFile(event.target.files);
      }

    const submitForm=()=>{
        console.table(title,author,imageFile ? imageFile[0]: null,body,published)
    }

    const submitFormMultipart=()=>{
        const formData = new FormData();
        if(imageFile){
            formData.append("image", imageFile[0]);
        }
        formData.append('title',title);
        formData.append('author',author);
        formData.append('body',body);
        formData.append('published',published);
        console.table(formData)

        axios.post('http://localhost:5000/posts/new-multipart', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        alert('post submitted')
        console.log('OK')
    }

    return(
    <div className="create-form" id="multipart-form">
            <h2>Publish New Post</h2>
            <div>
            <label  className="title-label">Title</label>
            <input type='text' id="title-input" name='title'
            value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
            <label className="author-label">Author</label>
            <input type='text' id="author-input" name='author'
             value={author} onChange={(e) => setAuthor(e.target.value)}></input>
            </div>
            <div>
                <label>Image assets</label>
                <input type='file' onChange={handleFileSelect} id='image-file'
                name='image'></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input" name='body'
             value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div className="btn-cont">
            <select onChange={(e)=> setPublished(e.target.value)}>
                <option value={true}>Publish</option>
                <option value={false}>Save as Template</option>
            </select>
            <button id="publish-submit" onClick={submitFormMultipart}>Submit</button>
            <button id="publish-submit" onClick={submitForm}>Submit test</button>
            </div>
        </div>
    )
}

export default MultipartForm