const Anime = require('../models/anime');


async function index(req, res) {
    try {
      const allAnimes = await Anime.find({});
      res.render('animes/index', {
        title: 'All Animes',
        animes: allAnimes,
      });
    } catch (error) {
      console.log(error);
      res.render('error', { title: 'Something Went Wrong' });
    }
}

module.exports = { 
    index,
}