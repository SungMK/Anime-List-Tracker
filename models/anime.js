const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
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
        enum: ['N/A', 'Ghibli', 'Madhouse', 'Bones', 'TOEI', 'MAPPA', 'Pierrot', 'Ufotable', 'Kyoto-Animation', 'Sunrise', 'A-1'],
        default: 'N/A'
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
        type: String,
        enum: ['Yes', 'No', 'In Progress']
    },
    notes: [noteSchema]
}, { timestamps: true });
    
module.exports = mongoose.model('Anime', animeSchema);