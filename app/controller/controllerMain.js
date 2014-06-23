var controllerMain = module.exports;
var daoMessage = require("../dao/daoMessage");

controllerMain.index = function(req, res) {
	res.render('index');
}


controllerMain.admin = function(req,res){
	res.render('admin/index');
}

controllerMain.createMessage = function(req, res) {
	var title = req.body.title;
	var desc = req.body.desc;
	var code = req.body.code;
	var link = req.body.link;
	var now = new Date();
	var message = {
		title: title,
		code: code,
		link: link,
		desc: desc,
		update_time: now,
		create_time: now
	}
	daoMessage.insert(message, function(err, results) {
		res.send("ok")
		return;
	});
	return;
}

controllerMain.getAllMessage = function(req, res) {
	daoMessage.getAllMessage(function(err, results) {
		res.send(results);
		return;
	});
	return;
}

