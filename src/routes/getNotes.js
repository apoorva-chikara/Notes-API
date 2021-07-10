/**
 *  node modules import
 */

const express = require('express');

const router = express.Router();

/**
 * controller import
 */

const { fetchNotes } = require('../controllers/notesFetchController');

/* GET notes listing. */
router.get('/', fetchNotes);

module.exports = router;
