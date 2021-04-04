import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

const d = new Database();

d.connect();

App.put("/people/:create", (req, res) => {
    let person = req.params.create;
    d.createOne(person);
    req.body;
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = d.readOne(person);
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
