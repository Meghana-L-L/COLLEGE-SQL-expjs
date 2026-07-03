// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'info123'
// });

// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("create database college2", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// module.exports = connection;

// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'info123',
//     database: 'college2'
// });

// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("create table faculty(FacultyName varchar(25), Subject varchar(25), Experience varchar(25))", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("create table library(LID int, LibraryName varchar(25))", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("create table marks(StudentName varchar(25), English int, maths int, science int)", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// module.exports = connection;


// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'info123',
//     database: 'college2'
// });

// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("insert into faculty values('prof.samir','maths','2 year'),('prof.amir','science','4 year'),('prof.arvind','maths','5 year'),('prof.paratik','science','6 year')", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("insert into library values(845,'fifth library'),(415,'sixth library')", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("insert into marks values('shivani',47,42,75),('amir',78,74,56),('arvind',84,47,58),('parth',48,56,87)", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// module.exports = connection;

// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'info123',
//     database: 'college2'
// });

// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("select * from faculty", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("select * from marks", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("select * from library", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// module.exports = connection;

// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'info123',
//     database: 'college2'
// });

// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("delete from faculty where FacultyName='prof.paratik'", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("delete from marks where StudentName='shivani'", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("delete from library where LID=415", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// module.exports = connection;

const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'info123',
    database: 'college2'
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query("select StudentName, English from marks", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    connection.query("select FacultyName, Experience from faculty", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    connection.query("select LibraryName from library", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

module.exports = connection;