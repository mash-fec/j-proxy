const express = require('express')
const app = express();
const request = require('request');

const bodyParser = require('body-parser');

const port = 3010;

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/house_images', (req,res) => {
   let id = req.query.id;
   console.log("Request Query:", id);
   let images_url = "http://localhost:3003/house_images?id=" + id;
   request(images_url, { json: true }, (error, response, body) => {
     if (error) { return console.log(error); }
     //console.log(body);
     console.log(body.results);
     res.send({results:body.results});
   });




})

app.listen(port, () => console.log(`app listening on port ${port}!`))