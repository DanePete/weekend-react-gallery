const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "gallery"`;
    pool.query(sqlQuery)
        .then((result) => {
            console.log('Received data from DB', result);
            res.send(result.rows);   
        })
        .catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        })
})

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// NEW PUT ROUT
router.put('/:id', (req, res) => {
    const sqlQuery = `
        UPDATE "gallery"
        SET "likes" = likes + 1 WHERE "id" = $1;
        `;
        const sqlParams = [
            req.params.id
        ];
    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('Reset list');
            res.sendStatus(200);   
        })
        .catch((error) => {
            console.log('PUT reset error', error);
            res.sendStatus(500);
            
        })
})


// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;