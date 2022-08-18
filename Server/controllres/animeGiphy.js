const dotenv = require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getAnimeGiphy=(req,res)=>{
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${req.params.anime + " anime"}&limit=25&offset=0&rating=g&lang=en`)
    .then(response=> response.json())
    .then(response=> res.send(response))
    .catch(err=> console.log(err))
}

module.exports=getAnimeGiphy
