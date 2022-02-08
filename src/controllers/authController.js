const { verifyUser } = require("../lib/jwt");

module.exports = {
	LOGIN_GET: (req, res) => {
		try {
			const { token } = req.cookies;

			if(!token) {
				res.render("login");
			} else {
				const { role } = verifyUser(token);
				if(role == "admin") {
				  res.redirect('/admin');
				} else if (role == "teacher") {
				  res.redirect("/teachers");
				} else if (role == "student") {
				  res.redirect("/students");
				}
			}
		} catch (error) {
			res.status(401).send({
				message: "Invalid token !"
			})
		}
	},

	LOGIN_POST: (req, res) => {
		const { role } = req.body;
		if (role == "admin") {
			res.redirect("/admin");
		} else if (role == "teacher") {
			res.redirect("/teachers");
		} else if (role == "student") { 
			res.redirect("/students");
		}
	},
};
