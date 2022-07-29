const express = require('express');
const mysql = require('mysql');
const { default: test } = require('node:test');

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "test"
});

connection.connect((err) => {
    if (err) {
        console.log("error" + err.stack)
        return
    }

    console.log("success")
})

app.get("/", (req, res) => {
    connection.query(
        "SELECT * FROM test",
        (error, result) => {
            console.log(result)
            res.render("../frontend/src/index.js")
        }
    )
})

app.listen(3000)