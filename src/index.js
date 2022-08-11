const express = require('express');
const { readDataStore, writeDataStore } = require('../helpers/helpers');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('rps-game-api');
});

app.post('/addNewHighScore', async (req, res) => {

    const { name, score } = req.body;
    const data = JSON.parse(await readDataStore('data/datastore.json'));
    data.highScores.push({ name, score });
    writeDataStore('data/datastore.json', JSON.stringify(data));
    res.status(200).json({
        status: "success",
        message: 'New high score added',
    });
});

app.get('/getScores', async (req, res) => {
    const data = JSON.parse(await readDataStore('data/datastore.json'));
    const sortedScores = data.highScores.sort((a, b) => b.score - a.score);
    res.status(200).json({
        status: "success",
        message: 'High scores retrieved',
        data: sortedScores
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});