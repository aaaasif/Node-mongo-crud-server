const express = require('express');
const { MongoClient, Collection } = require('mongodb');
const app = express();
const port = 5000;



const uri = "mongodb+srv://aaaasif:UuhpKuBJyt5mrBTc@cluster0.kz6u6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      const database = client.db("users");
      const useCollection = database.collection("aaaasif");
      
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Runnis My CRUD server');
});

app.listen(port, () =>{
    console.log('Running Server on port' , port);
})