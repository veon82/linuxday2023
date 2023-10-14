const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;
const HOST = process.env.MONGODB_HOST;
const DATABASE = process.env.MONGODB_DATABASE;

const connectionString = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const DistroSchema = new mongoose.Schema({
    name: String,
    year: Number,
    description: { type: String, default: '' }
});

const Distro = mongoose.model('Distro', DistroSchema);

app.get("/", async (req, res) => {
    return res.json({ message: "what are you looking for?"});
});

app.get("/healthz", async (req, res) => {
    return res.json({ message: "healthy!"});
});

app.get('/distros', async (req, res) => {
    const allDistros = await Distro.find();
    console.log(allDistros);
    return res.status(200).json(allDistros);
    
});

app.get("/distros/:id", async (req, res) => {
    const { id } = req.params;
    const distro = await Distro.findById(id);
    return res.status(200).json(distro);
});

app.post('/distros', async (req, res) => {
    console.log({...req.body});
    const newDistro = new Distro({ ...req.body});
    const insertedDistro = await newDistro.save();
    console.log(insertedDistro);
    return res.status(201).json(insertedDistro);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
