const User = require("../models/user.model");


        // ******Create******

module.exports.createNewUser = (req, res) => {
        User.create(req.body)
                .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
                .catch(err => res.status(400).json(err));
        };


        // ******Retrieve******

module.exports.findAllUsers = (req, res) => {
        User.find().collation({locale:'en',strength:2}).sort({name:1})
                .then(allUsers => res.json({ users: allUsers }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
};
        
module.exports.findOneSingleUser = (req, res) => {
        User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ User: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

                

                // ******Update******
        
module.exports.updateExistingUser = (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
                .then(updatedUser => res.json({ user: updatedUser }))
                .catch(err => res.status(400).json(err));
        };
        

                // ******Delete******
        
module.exports.deleteAnExistingUser = (req, res) => {
        User.deleteOne({ _id: req.params.id })
                .then(result => res.json({ result: result }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
        };


