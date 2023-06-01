import { useState } from "react"
import axios from "axios"
import { callAlertMui } from "../functions";


const MultipartForm=(props)=>{
    
    const [title,setTitle]= useState();
    const [author, setAuthor] = useState();
    const [imageFile, setImageFile]= useState();
    const [body,setBody]= useState();
    const [published,setPublished]= useState();

    const handleFileSelect = (event) => {
        setImageFile(event.target.files);
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

        axios.post('https://blog-api-production-8114.up.railway.app/posts/new-multipart', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        callAlertMui('success')
        window.location='/';
    }

    return(
    <div className="create-form" id="multipart-form">
            <h2>
            {props.type === 'new'? 'Publish New Post':
            'Update post'}
             </h2>
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
            <button id="publish-submit" 
            onClick={()=> title && author && body ? submitFormMultipart() : callAlertMui('error')}>
                Submit</button>
            </div>
        </div>
    )
}

export default MultipartForm