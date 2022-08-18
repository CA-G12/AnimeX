const path = require('path');

const handleClientError = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', 'client', 'HTML', '404.html'))
}

const handleServerError = (err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', '..', 'client', 'HTML', '500.html'))
}

module.exports = {handleClientError, handleServerError}
