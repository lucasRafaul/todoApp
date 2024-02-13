import express, { Router } from 'express';


const app = express();
const router = express.router();
let port = 3000

// ... rest of your Express setup

app.set('view engine', 'ejs')

app.get('/', (req, res) =>  {
    res.send('This is a todoapp project running on the server')
})

app.listen(port)
console.log(`server in listening in port ${port}`)
/*
app.post('/login', (req, res) =>{
    res.send('Hola mundo')
})*/