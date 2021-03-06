import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

// Routes :
import postRoutes from './routes/posts.js';

// Aller dans le fichier package.json et ajouter "type": "module" et remplacer test par "start": "nodemon index.js"

const app = express();

app.use(bodyParser.json( { limit: "30mb", extended: true } ));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true } ));
app.use(cors());
dotenv.config({ path: './../.env'});

// Les posts seront disponibles sur http://localhost:5000/posts
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

mongoose.set('useFindAndModify', false);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT);
});
