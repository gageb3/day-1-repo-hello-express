import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express()
const PORT = process.env.PORT || 3000; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.use(express.json()); 

// for pull request assignment

app.get('/', (req, res) => {
  res.send('Hello Express from Render 😍😍😍. <a href="gage">gage</a>')
})

// endpoints...middlewares...apis? 

// send an html file
app.get('/gage', (req, res) => {
 
  res.sendFile(join(__dirname, 'public', 'gage.html')) 

})

app.get('/api/gage', (req, res) => {
  // res.send('gage. <a href="/">home</a>')
  const myVar = 'Hello from server!';
  res.json({ myVar });
})

app.get('/api/query', (req, res) => {

  //console.log("client request with query param:", req.query.name); 
  const name = req.query.name; 
  res.json({"message": `Hi, ${name}. How are you?`});

  // receivedData.queries.push(req.query.name || 'Guest');
  // const name = req.query.name || 'Guest';
  // res.json({ message: `Hello, ${name} (from query param)` });
});

app.get('/api/url/:iaddasfsd', (req, res) => {

  console.log("client request with URL param:", req.params.iaddasfsd); 
  // const name = req.query.name; 
  // res.json({"message": `Hi, ${name}. How are you?`});

});


app.get('/api/body', (req, res) => {

  console.log("client request with POST body:", req.query); 
  // const name = req.body.name; 
  // res.json({"message": `Hi, ${name}. How are you?`});

});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})