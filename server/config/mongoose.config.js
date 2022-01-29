const mongoose = require("mongoose");
const Test1 = "Test1_db"

mongoose.connect("mongodb://localhost/" + Test1, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to ${Test1}`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));

