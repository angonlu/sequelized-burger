var express = require("express");

var router = express.Router();

var db = require("../models/");




router.get("/", function(req, res) {
	db.Burger.findAll()
		.then(function(Burgerdb){
			console.log(Burgerdb);

			var hbsObject = {burger: Burgerdb };
			return res.render("index", hbsObject)
		})
});



router.post("/create", function(req, res) {
	console.log(req.body.name)
	db.Burger.create({
		burger_name: req.body.name,
		devoured: req.body.devoured 
	})
		.then(function(Burgerdb){
			console.log(Burgerdb);
			res.redirect("/");
		});
});

router.put('/update/:id', function(req, res){

		db.Burger.update({
			devoured: true
		}, {
			where: {
				id: req.params.id
			}
		}
	).then(function(Burgerdb){
		res.redirect("/")
	})
});

module.exports = router;