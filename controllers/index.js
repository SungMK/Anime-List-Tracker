function home(req, res) {
    res.render('index', {title: 'Anime List'});
}

module.exports = {
    home
};