const path = require('path')

const renderHome = (req, res) => {
        return res.render('home.ejs');
     }    

const renderAbout = (req, res) => {
        return res.render('about.ejs');
     }       

module.exports = {renderHome, renderAbout};