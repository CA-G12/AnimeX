const path=require('path')
const getGiphy=(req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','client', 'HTML', 'giphy.html'))
}

module.exports=getGiphy