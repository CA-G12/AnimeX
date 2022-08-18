const getHome= require('./home')
const getGiphyPage= require('./giphy')
const searchAnime= require('./search')
const getAnimeGiphy= require('./animeGiphy')
const {handleClientError, handleServerError} = require('./error')

module.exports={getHome, getGiphyPage, searchAnime, getAnimeGiphy, handleClientError, handleServerError}
