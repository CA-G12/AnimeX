const app = require('../app')
const {getHome, getGiphy, searchAnime, getAnimeGiphy, handleClientError, handleServerError }=require('../controllres/index')

const router= require('express').Router()

router.get('/',getHome )
router.get('/giphy',getGiphy )
router.get('/search/:input', searchAnime)
router.get('/giphy/:anime', getAnimeGiphy)
router.use(handleClientError);
router.use(handleServerError);

module.exports=router