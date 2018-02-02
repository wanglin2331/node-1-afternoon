const express = require('express');
const bodyParser = require('body-Parser');

const app=express();
app.use(bodyParser.json());

const port=3000;

const messageController = require('./controllers/messages_controller');

app.use(express.static(__dirname +'/../public/build'));


app.post('/api/messages',messageController.create);
app.get('/api/messages',messageController.read);
app.put('/api/messages/:id',messageController.update);
app.delete('/api/messages/:id',messageController.delete);



app.listen(port,()=>{
    console.log('listening on port',port)
});