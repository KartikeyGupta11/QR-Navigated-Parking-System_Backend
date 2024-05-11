import express from 'express';
import "dotenv/config";
import dbConnect from './config/database.js';
import CurrentRouter from './routes/CurrentDataRoute.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use('/api/v2',CurrentRouter);

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server Started Successfully at ${PORT}`)
});



app.get("/",(req,res) => {
    res.send(`<h1>THIS IS A HOMEPAGE...</h1>`)
})