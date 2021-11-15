const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'password',
        database : 'workflow_manager',
    }
);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , (req,res)  => {
    res.send("hello");
}
);


app.post("/insertEmpDetails" , (req,res)  => {
    const sql = `insert into login values (?,?);`;
    db.query(sql, [req.body.fname , req.body.lname] , (err , result) => {
        console.log(err);
    });
    res.send("hello");
}
);


app.listen( 3001 , () => {
    console.log("running backend on port 3001");
});

