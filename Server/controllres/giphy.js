const path=require('path')
const getGiphyPage =(req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','client', 'HTML', 'giphy.html'))
}

module.exports=getGiphyPage
