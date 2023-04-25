const Anime = require('../models/anime');

// async function index(req, res) {
//     try {
//         // const allAnimes = await Anime.find({});
        
//         res.render('animes/index', {
//             animes: allAnimes,
//             title: 'All Animes',
//         });
//     } catch (error) {
//         console.log(error);
//         res.render('error', {title: 'Something Went Wrong'});
//     }
// }

function index(req, res) {
    res.render('animes/index'); 
}

module.exports = { 
    index,
}