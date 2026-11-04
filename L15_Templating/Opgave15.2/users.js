import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import express from 'express';
let app = express();

import { renderFile } from 'pug';
import { join } from 'path';

app.set('view engine', 'pug');
app.set('views', __dirname);


let userValues1 = { brugernavn: "eaa25rjo", alder: 26, kontoOprettet: '2019-10-12', by: 'Aarhus', achievements: ['Master baiter', 'Master of Science'] };

let testUser1 = { brugernavn: "eaa11abc", alder: 99, kontoOprettet: '2019-10-12', by: 'Silkeborg', achievements: ['Test', 'Test1'] };

let testUser2 = { brugernavn: "eaa22def", alder: 42, kontoOprettet: '2000-07-01', by: 'København', achievements: ['Master of testing', 'Chess Grandmaster']}

let listOfUsers = [userValues1, testUser1, testUser2]

console.log(renderFile(join(__dirname, 'users.pug'), {users: listOfUsers}));

app.get('/', (req, response) => response.render('users', {users: listOfUsers}))

app.listen(8000, () => console.log('Test running'));