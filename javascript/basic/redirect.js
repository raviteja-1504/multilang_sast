// JS-05 Open redirect
function continueLogin(req, res) { return res.redirect(req.query.next); }
