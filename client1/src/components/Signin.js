import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './signin.css';
export default function Signin(){

    const handsubmit=async(event)=>{
            event.preventDefault();
            const datastring=new FormData(event.target);
            const config={headers:{"enctype":"multipart/formdata"}};
              
            let username=document.getElementById("username").value;
            let password=document.getElementById("password").value;

            if(username === '' || username === null){
                alert("enter a email");
            }
            else if(password === '' || password === null){
                alert("enter a password");
            }
            else{
                await axios.post("http://localhost:3006/Signin",datastring,config)
            .then(function(response){
                if(response.data.status === "error"){
                    alert("Invalid username");
                    window.location.reload();
                }
                else if(response.data.status === "success"){
                    let nam = response.data.name;

                    alert("hello "+nam);
                    // localStorage.setItem('userid',id);
                    window.location.href='/';
                }

                    else if(response.data.status === "invalid_data"){
                        alert("Invalid password");
                        window.location.reload();
                    }

               
                
            })
            .catch(function(error){
                alert(error);
                window.location.reload();

            })

               
                
           
            }
    }
    return(
        <>
        <div className="container signinmaindiv">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-4 ">
                        <form onSubmit={handsubmit}>
                        <div className="signin-back ">
                            
                                        <h1>Signin</h1>
                                
                                        <label>username</label>
                                        
                                            <input type="text" name="username" id="username" className="form-control"/>
                                        
                                  
                                        <label>password</label>
                                        
                                            <input type="password" name="password" id="password" className="form-control"/>
                                 
                                       <Link to="/"><button type="button" name="b1" id="b1" className="btn btn-warning mt-3">Signup</button></Link>
                                     
                                        <button type="submit" name="b2" id="b2" className="btn btn-success mt-3 ml-4">Signin</button>
                            
                            </div>
                        </form>
                    </div>
                   
                <div className="col-lg-4">&nbsp;</div>

            </div>

        </div>
        </>
    );
}