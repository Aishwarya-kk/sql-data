const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const mysql=require("mysql2");

app.set("view engine",("ejs"));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


const connection=mysql.createConnection(
    {
    host:'localhost',
    user:'root',
    database:'emps',
    password:'shalini'

    }
)


connection.query("SELECT * FROM emps",(err,resu)=>{
    console.log(err);
    console.log(resu);
})

app.listen(port,()=>{
    console.log("server is woking");
})

app.get("/",(req,res)=>{
    res.send("working");
})

app.get("/sql",(req,res)=>{
    let q="SELECT * FROM emps";
    connection.query(q,(err,resu)=>{
        let result=resu;
        console.log(result);
        console.log(err);
        res.render("data.ejs",{result});
    })
})