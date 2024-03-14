//front Book
// Description: Node.js HTML client
// requires: npm install express ejs axios body-parser


const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');

// Base URL for the API
//const base_url = "https://api.example.com";
const base_url = "http://localhost:3000";
//const base_url = "http://node41091-noderest.proen.app.ruk-com.cloud";

// Set the template engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + '/public'));

app.get("/books", async (req, res) => { // ระวังบรรทัดนี้
    try {
        const response = await axios.get(base_url + '/books');
        res.render("books", { books: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/book/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books/' + req.params.id);
        res.render("book", { book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.post(base_url + '/books', data);
        res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update/:id", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/books/' + req.params.id);
        res.render("update", { book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update/:id", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.put(base_url + '/books/' + req.params.id, data);
        res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/books/' + req.params.id);
            res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//table 2 *********************************************************************
app.get("/auss", async (req, res) => { // ระวังบรรทัดนี้
    try {
        const response = await axios.get(base_url + '/auss');
        res.render("auss", { auss: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/aus/:id_new", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/auss/' + req.params.id_new);
        res.render("aus", { aus: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create2", (req, res) => {
    res.render("create2");
});

app.post("/create2", async (req, res) => {
    try {
        const data = { name: req.body.name, last: req.body.last };
        await axios.post(base_url + '/auss', data);
        res.redirect("/auss");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update2/:id_new", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/auss/' + req.params.id_new);
        res.render("update2", { aus: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update2/:id_new", async (req, res) => {
    try {
        const data = { name: req.body.name, last: req.body.last };
        await axios.put(base_url + '/auss/' + req.params.id_new, data);
        res.redirect("/auss");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete2/:id_new", async (req, res) => {
    try {
        await axios.delete(base_url + '/auss/' + req.params.id_new);
            res.redirect("/auss");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//table 3 *******3************************3*********3***************3**************3
app.get("/users", async (req, res) => { // ระวังบรรทัดนี้
    try {
        const response = await axios.get(base_url + '/users');
        res.render("users", { users: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/user/:id_user", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/users/' + req.params.id_user);
        res.render("user", { user: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create3", (req, res) => {
    res.render("create3");
});

app.post("/create3", async (req, res) => {
    try {
        const data = { u_name: req.body.u_name, u_last: req.body.u_last, u_number: req.body.u_number, u_email: req.body.u_email };
        await axios.post(base_url + '/users', data);
        res.redirect("/users");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update3/:id_user", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/users/' + req.params.id_user);
        res.render("update3", { user: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update3/:id_user", async (req, res) => {
    try {
        const data = { u_name: req.body.u_name, u_last: req.body.u_last, u_number: req.body.u_number, u_email: req.body.u_email };
        await axios.put(base_url + '/users/' + req.params.id_user, data);
        res.redirect("/users");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete3/:id_user", async (req, res) => {
    try {
        await axios.delete(base_url + '/users/' + req.params.id_user);
            res.redirect("/users");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update3/:id_user", async (req, res) => {
    try {
        const data = { u_name: req.body.u_name, u_last: req.body.u_last, u_number: req.body.u_number, u_email: req.body.u_email };
        await axios.put(base_url + '/users/' + req.params.id_user, data);
        res.redirect("/users");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete3/:id_user", async (req, res) => {
    try {
        await axios.delete(base_url + '/users/' + req.params.id_user);
            res.redirect("/users");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.listen(5500, () => {
            console.log('Server started on port 5500');
            });
            