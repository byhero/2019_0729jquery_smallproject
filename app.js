const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/admin.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/mypage', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/mypage.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/signup.html'));
    //__dirname : It will resolve to your project folder.
});


app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));