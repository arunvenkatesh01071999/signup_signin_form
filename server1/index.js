const cors=require('cors');
const express=require('express');
const mycon=require('mysql');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(fileupload());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

const c=mycon.createConnection({
    host:"localhost",
    user:"root",
    password:"arun9629",
    database:"sdatabase"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("database connected");
    }
})

app.post('/Signup',(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;

    let sql='insert into sdatabase.register(name,email,password)values(?,?,?)';

    c.query(sql,[name,email,password],(error,result)=>{
        if(error){
            let s={"status":"error"};
            res.send(s);
        }
        else{
            let s={"status":"inserted"};
            res.send(s);
        }

    })
})
//===========================================================================================
app.post('/Signin',(request,response)=>{
    let username = request.body.username;
    let password = request.body.password;
   

    let sql = 'select * from sdatabase.register where email=?';  
    c.query(sql,[username],(error,result)=>{
        if(error){
            let s={"status":"error"};
            response.send(s);
            
        }
        else if(result.length > 0){
            let username1 = result[0].email;
            let password1 = result[0].password;
            let Name1 = result[0].name;

            if(username1 === username && password1 === password){
                let s= {"status":"success","name":Name1};
                response.send(s);
            }
            else{
                let s = {"status":"invalid_data"};
                response.send(s);
            }
        }
        
        else {
            let s={"status":"error"};
            response.send(s);
        }
           
        })
    
    })

app.listen(3006);