import express from 'express';
import session from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set("views", __dirname);

app.use(express.json());

app.use(session({ secret: 'hemmelig', saveUninitialized: false, resave: false}))

let produkter = [
{id: 1, navn: "Banana", pris: 2.5},
{id: 2, navn: "Kiwi", pris: 3},
{id: 3, navn: "Orange", pris: 4},
{id: 4, navn: "Honeydew", pris: 14},
{id: 5, navn: "Ananas", pris: 18}

]


app.get('/index', (request, response) => {

    let kurvId = request.session.kurv




    response.render('index', {produkter: produkter, produktId: request.session.produktId})
});


app.post('/buy', (request, response) => {
    const { id } = request.body

    const produktId = Number(id)

    if (!request.session.kurv) {
        request.session.kurv = []
    }

    request.session.kurv.push(produktId)

    console.log("Shopping basket:", request.session.kurv)

    response.status(201).send('Product was added to basket.')
})


app.listen(8000)

console.log("Lytter på port 8000 ...")



