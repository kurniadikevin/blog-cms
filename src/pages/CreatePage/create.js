import Dashboard from "../dashboard";
import './style.css';
import MultipartForm from "../../components/multipart-form";
import AlertMui from "../../components/alert-box";
export function CreatePost(){

   return(
    <div>
        <Dashboard/>
       <div className="create-main">
        <MultipartForm type='new'/>
        <div id="alert-mui">
          <div id='alert-error'> <AlertMui status='error'/></div>
          <div  id='alert-success'> <AlertMui status='success'/> </div>
        </div>

       </div>
    </div>
   )
}

