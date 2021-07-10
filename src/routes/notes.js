/**
 *  node modules import
 */
const express = require('express');

const router = express.Router();

/**
 * controller import
 */

const { noteSave } = require('../controllers/notesSaveandUpdateController');

/* GET home page. */
router.post('/save', noteSave.save);

router.post('/update', noteSave.update);

module.exports = router;
