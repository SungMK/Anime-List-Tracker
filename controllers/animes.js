const Anime = require('../models/anime');

function newAnime(req, res) {
    res.render('animes/new', {
        title: 'Enter a New Anime'
    });
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
        console.log('updateAnime function called');
        if (req.method === 'GET') {
            const foundAnime = await Anime.findById(req.params.id);

            res.render('animes/edit', {
                anime: foundAnime,
                title: 'Edit Anime',
            });
        } else if (req.method === 'PUT') {
            await Anime.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/animes');
        }
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'}); 
    }
} 

module.exports = { 
    new: newAnime,
    index,
    create,
    show,
    delete: deleteAnime,
    update: updateAnime,
}