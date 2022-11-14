import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './signup.css';

export default function Signup(){

    const handsubmit=async(event)=>{
        event.preventDefault();

        const datastring=new FormData(event.target);
        const config={headers:{"enctype":"multipart/formdata"}};

        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;

        if(name === '' || name === null){
            alert("enter a name");
        }
        else if(email === '' || email === null){
            alert("enter a email id");
        }
        else if(password === '' || password === null){
            alert("enter a password");
        }
        else{
            await axios.post("http://localhost:3006/Signup",datastring,config)
            .then(function(res){
                if(res.data.status === "error"){
                    alert("error");
                    window.location.reload();
                }
                else if(res.data.status === "inserted"){
                    alert("inserted");
                    window.location.href="./";
                }
            })
            .catch(function(error){
                alert("error");
                    window.location.reload();
            })

        }
    }

    return(
        <>
        <div className="container signupmaindiv">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                        <div className="col-lg-6">
                            <form onSubmit={handsubmit}>
                            <div className="signup-back p-5">
                                
                                            <h1>welcome to insta</h1>
                                            <label>name</label>
                                                <input type="text" name="name" id="name" className="form-control"/>
                                            <label>email</label>
                                                <input type="email" name="email" id="email" className="form-control"/>
                                            <label>password</label>
                                                <input type="password" name="password" id="password" className="form-control "/>
                                               <Link to="/signin"> <button type="button" name="b1" id="b1" className="btn btn-success p-2 mt-3">Signin</button></Link>
                                                <button type="submit" name="b2" id="b2" className="btn btn-warning p-2 mt-3 ml-4">Signup</button>
                            </div>
                            </form>
                        </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>

        </div>
        </>
    );
}