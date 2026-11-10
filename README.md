### Opsætning af Express og Pug

1. Åbn terminalen i VS Code, og naviger til den mappe, hvor du ønsker at bruge Express og Pug.
2. Opret et Node.js-projekt:
   `npm init -y`
3. Installer Express og Pug:
   `npm install express pug`
4. Aktivér ES Modules, så du kan bruge `import` i JavaScript:
   `npm pkg set type=module`
5. Nu er `package.json`, `package-lock.json` og mappen `node_modules` oprettet, og Express og Pug er klar til brug.

**Bemærk:**
- Pakkerne kan bruges fra projektmappen og dens undermapper.
- Du behøver ikke installere dem igen for hver JavaScript-fil.
- `package.json` indeholder projektets opsætning og afhængigheder.
- `package-lock.json` registrerer de konkrete versioner af de installerede pakker.
- `node_modules` indeholder de installerede pakker.

**Hvis projektet allerede har en `package.json`:** Du skal normalt ikke køre `npm init -y` igen. Brug `npm install` for at installere projektets afhængigheder.




### Opsætning af Mocha og Chai

1. Åbn terminalen i VS Code, og naviger til projektmappen.
2. Hvis der ikke allerede findes en `package.json`, så kør:
   `npm init -y`
3. Installer Mocha og Chai:
   `npm install --save-dev mocha chai`
4. Hvis du bruger `import`, skal din `package.json` indeholde `"type": "module"`. Det kan tilføjes med:
   `npm pkg set type=module`
5. Opret en mappe kaldet `test`, hvor du placerer dine testfiler.
6. Kør dine tests med:
   `npx mocha`

**Bemærk:**
- Mocha er et testframework, der bruges til at afvikle tests.
- Chai er et assertion-bibliotek til at kontrollere resultater.
- `--save-dev` betyder, at pakkerne installeres som udviklingsafhængigheder (`devDependencies`).
- Mocha og Chai skal ikke installeres igen for hver testfil, hvis de allerede er installeret i projektet eller en passende overordnet projektmappe.