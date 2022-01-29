const UserController = require("../controllers/user.controller");

module.exports = app => {

//             // ******Create******

app.post("/api/users/new", UserController.createNewUser);


//             // ******Retrieve******

app.get("/api/users/", UserController.findAllUsers);
app.get("/api/users/:id", UserController.findOneSingleUser);


//             // ******Update******

app.put("/api/users/update/:id", UserController.updateExistingUser);


//             // ******Delete******

app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);

};