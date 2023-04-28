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

async function deleteNote (req, res) {
    try {
        const anime = await Anime.findById(req.params.animeId);
        anime.notes.forEach((n, i) => {
            if(n._id == req.params.noteId) {
                anime.notes.splice(i, 1)
            }
        })
        await anime.save();
        res.redirect(`/animes/${req.params.animeId}`);
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'}); 
    }
} 

module.exports = {
    create,
    delete: deleteNote,
};