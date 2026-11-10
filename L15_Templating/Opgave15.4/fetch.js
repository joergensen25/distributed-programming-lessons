import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.get('/:nationalitet/:antal', async (req, response) => {

    let nationalitet = req.params.nationalitet
    let antal = Number(req.params.antal)


    let tilladteNationer = ['gb', 'dk', 'de', 'fr']

    if (!tilladteNationer.includes(nationalitet)) {
        return response.status(400).send("Ugyldig nationalitet. Gyldige nationaliteter: gb, dk, de eller fr.")
    }

    if (!Number.isInteger(antal) || antal < 10 || antal > 100) {
        return response.status(400).send("Ugyldigt antal. Vælg et antal mellem 10 og 100.")
    }

    
    try {
        console.log(`Henter ${antal} brugere fra ${nationalitet}`)

        let apiResponse = await fetch(`https://randomuser.me/api/?nat=${nationalitet}&results=${antal}`)


        if (!apiResponse.ok) {
            throw new Error("Fejl")
        }

        let data = await apiResponse.json();



        
        response.render('fetch', { users: data.results, nationalitet: nationalitet})

    } catch (error) {
        console.error(error)
        response.status(500).send("Der skete en fejl.");
    }
})


app.listen(8000, () => console.log('Test running'))