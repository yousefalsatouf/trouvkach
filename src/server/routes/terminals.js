const router = require("express").Router();
const Terminal = require("../models/terminals");

router.route("/").get((req, res) => {
    Terminal.find()
        .then(terminals => res.json(terminals))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//router.route('/add').post((req, res) => {
//  const username = req.body.username;
//
//  const newUser = new User({username});
//
//  newUser.save()
//    .then(() => res.json('User added!'))
//    .catch(err => res.status(400).json('Error: ' + err));
//});

module.exports = router;
