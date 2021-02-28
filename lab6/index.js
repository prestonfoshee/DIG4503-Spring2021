import Express from 'express';

const App = Express();
const port = 45030;
const preston = {
    name: "Preston",
    color: "blue"
};

App.get('/', (req, res) => {
    res.send("Hello world!");
});

App.get('/person', (req, res) => {
    res.json(preston);
});

App.listen(port, () => {
    console.log("Server running!");
});
