const path = require('path')

const renderHome = (req, res) => {
        return res.sendFile(path.resolve('views/home.html'));
     }    

const renderAbout = (req, res) => {
        return res.sendFile(path.resolve('views/about.html'));
     }       

module.exports = {renderHome, renderAbout};