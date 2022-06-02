const db = require('../../database/db')
const bcrypt = require('bcrypt')
const saltRounds = 10;

let register = (req, res) => {
    const userdata = req.body;
    const input = { "username": req.body.username, "email": req.body.email, "password": req.body.password };
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, userdata.email, function(err, result) {
        if (err) throw err;
        console.log("The results")
        console.log(result.length)
        const password = input.password;
        // Checking id user already exists then result length eill greater then 0 
        if (result.length == 0) {
            const hashPassword = bcrypt.hashSync(input.password, 10);
            console.log(hashPassword);
            const insert = `INSERT INTO users (username,email,password) VALUES (?,?,?)`;

            db.query(insert, [input.username, input.email, hashPassword], function(err, result) {
                if (err) throw err;
                console.log("User saved successfully")
                res.redirect('/dashboard');
            })
        } else {
            console.log("The user already exists");
            res.redirect('/login');
        }

    })

}
module.exports = register;