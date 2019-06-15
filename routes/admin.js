var express = require('express');
var router = express.Router();
const News = require('../models/news')

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login')
        return;
    }

    next()
})

/* GET home page. */
router.get('/', function (req, res, next) {


    // console.log(req.session.admin);
    // const newsData = new News({
    //     title: 'Tytul testowy',
    //     description: 'Opis'
    // })
    // newsData.save((err) => {
    //     console.log(err);

    // })
    res.render('admin/index', {
        title: 'Admin'
    });
});
router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {
        title: 'Dodaj news'
    });
});
module.exports = router;