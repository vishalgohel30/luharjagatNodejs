const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const webMaster = require("./web/appMaster");
const dbUtils = require("./utils/dbUtils");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// }
console.log('process',process.env.NODE_ENV)

dbUtils.initAndConnectDb((error) => {
    if (error) {
      return console.log('mysql db connection error : ' + error);
    }
    const port = 4040;
    app.listen(port, (error) => {
      if (error) {
        return console.log(`${new Date().toISOString()} Server Down: ${error}`);
      } else { 
        console.log(`${new Date().toISOString()} Connected to port ${port}, env ${process.env.NODE_ENV}`);
      }
    });
  });
  
app.use('/web', webMaster);
