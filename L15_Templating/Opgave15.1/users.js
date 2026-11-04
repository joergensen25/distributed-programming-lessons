import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';

app.set('view engine', 'pug');
app.set('views', __dirname);


let userValues = { brugernavn: "eaa25rjo", alder: 26, kontoOprettet: '2019-10-12', by: 'Aarhus', achievements: ['Master baiter', 'Master of Science'] };


console.log(renderFile(join(__dirname, 'users.pug'), userValues));

app.get('/', (req, response) => response.render('users', userValues))

app.listen(8000, () => console.log('Test running'));