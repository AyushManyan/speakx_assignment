const express = require('express');
const router = express.Router();
const { getData } = require('../controller/dataController');


router.route('/getdata').get(getData);
// router.route('/getalldata').get(getAllData);


module.exports = router;