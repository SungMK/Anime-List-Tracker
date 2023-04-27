const Anime = require('../models/anime');

function newAnime(req, res) {
    res.render('animes/new', {
        title: 'Enter a New Anime'
    });
}

async function editAnime (req, res) {
    try {
        const foundAnime = await Anime.findById(req.params.id);
        res.render('animes/edit', {
             anime: foundAnime,
             title: 'Update Anime'
    });
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something Went Wrong'});
    }
}

async function index(req, res) {
    try {
        const allAnimes = await Anime.find({});
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

async function show(req, res) {
    try {
        const foundAnime = await Anime.findById(req.params.id);
  
        res.render('animes/show', {
            anime: foundAnime,
            title: 'See Anime Details',
      });
    } catch (error) {
      console.log(error);
      res.render('error', { title: 'Something Went Wrong' });
    }
}

async function deleteAnime (req, res) {
    try {
        await Anime.findByIdAndRemove(req.params.id);
        res.redirect('/animes')
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'}); 
    }
} 

async function updateAnime(req, res) {
    try {
        await Anime.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            studio: req.body.studio,
            currentEpisode: req.body.currentEpisode,
            currentSeason: req.body.currentSeason,
            releaseYear: req.body.releaseYear,
            completionStatus: req.body.completionStatus
        });
        res.redirect('/animes')
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'}); 
    }
} 

module.exports = { 
    new: newAnime,
    edit: editAnime,
    index,
    create,
    show,
    delete: deleteAnime,
    update: updateAnime,
}