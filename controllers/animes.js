const Anime = require('../models/anime');

function newAnime(req, res) {
    res.render('animes/new', {
        title: 'Enter a New Anime'
    });
}

async function index(req, res) {
    try {
        const allAnimes = await Anime.find({});
        console.log('Check');
        res.render('animes/index', {
            animes: allAnimes,
            title: 'All Animes',
        });
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}

async function create(req, res) {
    try {
        await Anime.create(req.body);
        res.redirect('/animes')
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}

module.exports = { 
    new: newAnime,
    index,
    create
}