// import express from 'express';
// import { MongoClient } from 'mongodb';
// import bodyParser from 'body-parser';
// const bodyParser = pkg;
const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'todoDB';

app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.post('/note', (req, res) => {
    // Buat koneksi ke server
    MongoClient.connect(url, (err, client) => {
        const db = client.db(dbName);
        const notesCollection = db.collection('notes');

        // Simpan data ke collection notes
        notesCollection.insertOne(req.body).then((result) => {
            // tampilkan hasilnya di console
            console.log(result);
        });

        // tutup koneksi ke database
        client.close();
    });

    // kirim status dan pesan dalam format json ke client
    res.status(200).json('Data successfully saved');
});

app.get('/notes', (req, res) => {
    res.send('Receive GET request');
});

app.get('/note/:id', (req, res) => {
    res.send('Received GET request with parameter');
});

app.put('/note/:id', (req, res) => {
    res.send('Received PUT request');
});

app.delete('/note/:id', (req, res) => {
    res.send('Received DELETE request');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
