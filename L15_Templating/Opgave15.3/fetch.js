import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.get('/', async (req, response) => {
    try {

        let apiResponse = await fetch('https://randomuser.me/api/?nat=dk&results=100')

        if (!apiResponse.ok) {
            throw new Error("Fejl")
        }

        let data = await apiResponse.json();

        let users = data.results;

        response.render('fetch', { users: users})

    } catch (error) {
        console.error(error)
        response.status(500).send("Der skete en fejl.");
    }
})


app.listen(8000, () => console.log('Test running'))