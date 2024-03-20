const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, regiserUser, loginUser } = require('../controllers/authController');





//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)


router.get('/', test)
router.post('/register', regiserUser) //function registerUser
router.post('/login', loginUser) //funnction loginUser


module.exports = router