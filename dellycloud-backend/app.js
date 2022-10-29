const express = require("express");
require('dotenv').config();
const { graphql, buildSchema } = require('graphql');
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({origin:"http://localhost:3000"}));

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {

    res.send("Hello User");
    
});

const server = app.listen(PORT, () => {

    console.log("Server Launched Successsfully On Port " + PORT);

});

