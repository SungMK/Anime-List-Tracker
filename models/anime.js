const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 1
    }
}, { timestamps: true });

const animeSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    studio: {
        type: String,
        enum: ['Ghibli', 'Madhouse', 'Bones', 'TOEI', 'MAPPA', 'Pierrot', 'Ufotable', 'Kyoto-Animation', 'Sunrise', 'A-1']
    },
    currentEpisode: {
        type: Number,
        min: 1,
        max: 9999
    },
    currentSeason: {
        type: Number,
        min: 1,
        max: 9999
    },
    releaseYear: {
        type: Number,
        default: function () {
          return new Date().getFullYear();
        },
        min: 1917
    },
    completionStatus: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
}, { timestamps: true });
    
module.exports = mongoose.model('Anime', animeSchema);