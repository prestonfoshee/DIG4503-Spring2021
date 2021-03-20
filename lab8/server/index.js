import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.put('/people/:person', (req, res) => {
    const name = req.params.person;
    names.push(name);
    res.json({ name: name });
});

App.get('/search/:name', (req, res) => {
    const name = req.params.name;
    const results = names.filter(value => value.includes(name));
    res.json({ name: results });
});

App.get('/people/:person', (req, res) => {
    let result = { name: "not found" };
    names.forEach((value) => {
        if (req.params.person == value) {
            result.name = value;
        }
    });
    res.json(result);
});

App.listen(port, () => {
    console.log("The server is running!");
});
