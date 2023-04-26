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

// async function deleteNote (req, res) {
//     try {
//         const foundAnime = await Anime.findById(req.params.id);
//         const noteIndex = foundAnime.notes.findIndex(note => note.id === req.params.noteId);
//         if (noteIndex !== -1) {
//             foundAnime.notes.splice(noteIndex, 1);
//             await foundAnime.save();
//         } 
//         res.redirect(`/animes/${foundAnime._id}`);
//     } catch (error) {
//         console.log(error);
//         res.render('error', {title: 'Something went wrong'}); 
//     }
// }

module.exports = {
    create,
};