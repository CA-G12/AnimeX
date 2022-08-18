const path=require('path')

const getHome=(req, res) => {
    res.sendFile(path.join(__dirname, '..','..','client', 'HTML', 'index.html'))
}

module.exports=getHome
