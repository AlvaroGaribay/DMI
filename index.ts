const express = require("express");
import  router  from "./src/routes";


const app = express();
const port = 9000;


const initialize = () => {
    console.log(`Server is on port ${port}`);
}


app.listen(port, initialize);
