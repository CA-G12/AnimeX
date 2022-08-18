// Import Node-Fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const searchAnime= (req, res) => {
    let url = `https://kitsu.io/api/edge/anime?filter[text]=${req.params.input}`;

    if (req.params.input === 'trending') {
        url = `https://kitsu.io/api/edge/trending/anime`;
    }
    
    fetch(url)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

module.exports=searchAnime
