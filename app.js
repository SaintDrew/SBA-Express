const express = require('express')
const app = express()
const http = require('http')
const port = 3000
///////////////////////////////////////////////////////////
app.set("views", "views");
///////////////////////////////////////////////////////////
app.set("view engine", "ejs");
///////////////////////////////////////////////////////////
app.use(express.json());
/**

Middleware*/
const logReq = (request, response, next) => {
    console.log(`${request.method} was made to ${request.url} from the hostname: ${request.hostname}!!!`
    );
    console.log("Request received!!!");
    next();
};
app.use(logReq);
app.use(express.urlencoded({ extended: true }));
//Parsing Midware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Error-handling middleware.
app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({ errMessage: error.message });
});

app.listen(port, () => {
    console.log(`This server is listening on port: ${port}`);
});