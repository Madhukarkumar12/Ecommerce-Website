const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname));

const DATABASE_FILE = 'users.json';

// Load database or initialize empty structure
function loadDatabase() {
    if (fs.existsSync(DATABASE_FILE)) {
        return JSON.parse(fs.readFileSync(DATABASE_FILE, 'utf-8'));
    }
    return { users: {} };
}

// Save database to file
function saveDatabase(database) {
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(database, null, 2));
}

let database = loadDatabase();

// Signup Endpoint
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: "All fields are required!" });
    }

    if (database.users[email]) {
        return res.json({ success: false, message: "Email already registered!" });
    }

    database.users[email] = { name, password, cart: [] };
    saveDatabase(database);
    res.json({ success: true });
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "All fields are required!" });
    }

    const user = database.users[email];
    if (user && user.password === password) {
        res.json({ success: true, user: { email, name: user.name, cart: user.cart } });
    } else {
        res.json({ success: false, message: "Invalid email or password!" });
    }
});

app.get('/check-login', (req, res) => {
    // Check for email in the query or headers
    const email = req.headers['email'];

    if (!email) {
        return res.json({ success: false, message: 'No user email provided!' });
    }

    // Check if the user exists in the database
    const user = database.users[email];
    if (user) {
        return res.json({ success: true, user: { email, name: user.name, cart: user.cart } });
    } else {
        return res.json({ success: false, message: 'User not found!' });
    }
});

// Save Cart Endpoint....
app.post('/save-cart', (req, res) => {
    const { email, cart } = req.body;

    if (!email || !cart) {
        return res.json({ success: false, message: "Email and cart data are required!" });
    }

    if (database.users[email]) {
        database.users[email].cart = cart;
        saveDatabase(database);
        res.json({ success: true, message: "Cart saved successfully!" });
    } else {
        res.json({ success: false, message: "User not found!" });
    }
});

// Load Cart Endpoint....
app.post('/load-cart', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: "Email is required!" });
    }

    const user = database.users[email];
    if (user) {
        res.json({ success: true, cart: user.cart });
    } else {
        res.json({ success: false, message: "User not found!" });
    }
});


// Start Server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});