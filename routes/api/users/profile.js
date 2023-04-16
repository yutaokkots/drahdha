const express = require('express');
const router = express.Router();
const sessionCtrl = require('../../../controllers/sessions')
const ensureLoggedIn = require('../../../config/ensureLoggedIn');


// POST /api/users/profile/session
// .create() -> for saving a session to the db
router.post('/session', sessionCtrl.create())

