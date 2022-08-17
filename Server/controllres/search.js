const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const searchAnime= (req, res) => {
    
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${req.params.input}`)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

module.exports=searchAnime