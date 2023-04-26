const Anime = require('../models/anime');

async function create (req, res) {
    try {
        const foundAnime = await Anime.findById(req.params.id);
        foundAnime.notes.push(req.body);
        await foundAnime.save();
        res.redirect(`/animes/${foundAnime._id}`);
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'}); 
    }
}

module.exports = {
    create
};