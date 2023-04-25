// Home controller function
function home(req, res) {
    res.render('index', {title: 'Anime Progress Tracker'});
}

module.exports = {
    home
};