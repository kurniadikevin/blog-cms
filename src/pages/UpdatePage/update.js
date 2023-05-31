import Dashboard from "../dashboard";
import './style.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { callAlertMui } from "../../functions";
import AlertMui from "../../components/alert-box";


export function UpdatePost(){

    const [title,setTitle]= useState('');
    const [author,setAuthor] = useState('');
    const [body,setBody]= useState('');
    const [status,setStatus]= useState('');
    const [imageContent, setImageContent]= useState('');
    const { id } = useParams();
    const [submitType,setSubmitType]= useState('no-image')


  //update post
   const updatePost = async(e)=>{
        e.preventDefault()
        const article = { 
            title: title,
            body: body,
            author: author,
            imageContent : imageContent,
            _id : id ,
          published : status}
        await axios.put(`http://localhost:5000/posts/${id}`, article);
        callAlertMui('success')
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
      setStatus(jsonResponse[0].published);
      setImageContent(jsonResponse[0].imageContent);
      console.log(jsonResponse[0].imageContent[0] + '  image content')
  };

  const handleFileSelect = (event) => {
    setImageContent(event.target.files);
    /* setTimeout(()=>
    console.log(imageContent),1000) */
    setSubmitType('with-image')
  }

  const updatePostWithImage=()=>{
    const formData = new FormData();
    if(imageContent){
        formData.append("image", imageContent[0]);
    }
    formData.append('title',title);
    formData.append('author',author);
    formData.append('body',body);
    formData.append('published',status);

    axios.put( `http://localhost:5000/posts/with-image/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    callAlertMui('success')
    window.location='/';
  }

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
                <label>Image assets</label>
                <input type='file' onChange={handleFileSelect} id='image-file'
                name='image'></input>
            </div>
            <div>
            <label className="body-text">Body Text</label>
            <textarea id="body-input" name='body'
              value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
            </div>
            <div className="btn-cont">
            <select name="published" onChange={(e) => setStatus(e.target.value)}>
                <option value={true}>Publish</option>
                <option value={false} >Save as Template</option>
                <option value={status} selected>Unchanged</option>
            </select>
          
            <button id="publish-submit" onClick={
              (e)=> submitType==='no-image'? updatePost(e) : updatePostWithImage()
              }>
              Update</button>
            </div>
        </div>
        <div id="alert-mui">
          <div id='alert-error'> <AlertMui status='error'/></div>
          <div  id='alert-success'> <AlertMui status='success'/> </div>
        </div>

       </div>
    </div>
   )
}

