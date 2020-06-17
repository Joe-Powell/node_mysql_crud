const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const { json } = require('body-parser');




const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});



// function that pushes data into database 
const catchData = (req, res) => {
    const post = req.body.post;
    console.log(post)
    db.query('INSERT INTO anoter_table set post = ?', [post], (error, results) => {

        if (error) {
            console.log(error);
        } else {
            db.query('SELECT * FROM anoter_table', (error, results) => {
                if (error) {
                    console.log(error);
                } else {

                    return res.render('index', {
                        post: results
                    })


                }



            })





        }
    });



}




// middleware when page loads at '/' below
const postsInDatabase = (req, res) => {

    db.query('SELECT * FROM anoter_table', (error, results) => {
        if (error) {
            console.log(error);
        } else {

            return res.render('index', {
                post: results

            })




        }

    })


}


const postsDelete = (req, res, next) => {
    let postId = req.body.id;
    console.log(postId)



    db.query('Delete FROM anoter_table WHERE id = ?', [postId], (error, results) => {
        if (error) {
            console.log('didnt work' + error);
            next();
        } else {

            next();




        }

    })


}


const postsUpdate = (req, res, next) => {
    let postId = req.body.id;
    let post = req.body.post;
    console.log(postId)



    db.query(`UPDATE anoter_table set post = "${post}" WHERE id ="${postId}" `, (error, results) => {
        if (error) {
            console.log('didnt work' + error);
            next();
        } else {

            next();




        }

    })


}









router.get('/', postsInDatabase, (req, res) => {
    res.render('index');
});


router.post('/delete', postsDelete, (req, res) => {
    res.redirect('/');  // this refreshes the page

});

router.post('/update', postsUpdate, (req, res) => {
    res.redirect('/');  // this refreshes the page

});




// if you get a post of "/catchData" catchData function will process the request
router.post('/catchData', catchData)













module.exports = router;
