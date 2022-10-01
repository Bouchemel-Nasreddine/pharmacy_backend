const express =require('express');
const res = require('express/lib/response');

// var mysql = require('mysql');
const PORT = 5000;

const app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database :'projet'
});
connection.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});


//midedleware


app.use(express.json());

app.post('/user', (req,res)=>{

    const data =req.body;
    connection.query("INSERT INTO users SET?",data,(error,results,fields)=>{
     if (error) throw error ;
     res.send(req.body)
     connection.end();


    }



    );
    
 

    
});

app.post('/produit', (req,res)=>{

    const data =req.body;
    connection.query("INSERT INTO produit SET?",data,(error,results,fields)=>{
     if (error) throw error ;
     res.send(req.body)
     connection.end();


    }



    );
    
 

    
});


  app.get('/users',function(req,res){
    var data = {
        "Data":""
    };
   
    connection.query("SELECT * from users",function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = 'No data Found..';
            res.json(data);
        }
    });
});

app.listen(PORT, () => {
    console.log("Server started listening on PORT : " + PORT);
  });
