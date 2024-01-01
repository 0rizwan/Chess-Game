import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors())
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('This is home page')
})

app.get('/api/jokes', (req, res)=> {
    const Jokes = [
        {
            id: 1,
            title: "Joke one",
            content: "This is joke one"
        },
        {
            id: 2,
            title: "Joke two",
            content: "This is joke two"
        },
        {
            id: 3,
            title: "Joke three",
            content: "This is joke three"
        },
        {
            id: 4,
            title: "Joke four",
            content: "This is joke four"
        },
        {
            id: 5,
            title: "Joke five",
            content: "This is joke five"
        },
    ]

    res.send(Jokes)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})