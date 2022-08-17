const getHome= require('./home')
const getGiphy= require('./giphy')
const searchAnime= require('./search')
const getAnimeGiphy= require('./animeGiphy')
const {handleClientError, handleServerError} = require('./error')

module.exports={getHome, getGiphy, searchAnime, getAnimeGiphy, handleClientError, handleServerError}