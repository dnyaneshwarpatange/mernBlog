require('dotenv').config()
const express =require("express");
const conn = require("./utils/db")
const app = express();
const router = require("./Routers/Routes");
const cors  = require("cors");

const corsOptions = {
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    Credential:true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(router);



const PORT = process.env.PORT || 3000;

try {
    conn().then(()=>{
        app.listen(PORT,()=>{
            console.log("Server started on the port",{PORT})
        })
    })
} catch (error) {
    
}