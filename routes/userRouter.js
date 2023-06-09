const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const { isLoggedIn } = require('../middlewares/isLoggedIn')

const router = express.Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/otp', authController.otp)
router.post('/verifyotp', authController.verifyotp)


router.route('/logout').post(authController.logout)

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser)

router.route('/:id').get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser)

module.exports = router
