import Express from 'express';

const App = Express();
const port = 45030;

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

App.get('/', (req, res) => {
    res.send("Hello world!");
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

App.get('/search/:name', (req, res) => {
    let result = { search: ["not found"] };
    names.forEach((value) => {
        if (req.params.name.includes(value) == true) {
            result.search = names.filter(value);
        }
    });
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
