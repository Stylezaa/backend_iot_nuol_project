var express = require('express');
const { body } = require('express-validator');
var router = express.Router();

//for check login module
const passportJWT = require('../middleware/passportJWT');
//for check rold === "admin" module
const checkAdmin = require('../middleware/checkAdmin');

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.index);
router.post(
  '/register',
  [
    body('name').not().isEmpty().withMessage('ກະລຸນາກວດສອບຊື່ແລະນາມສະກຸນ'),
    body('email')
      .not()
      .isEmpty()
      .withMessage('ກະລຸນາກອກອີເມວ')
      .isEmail()
      .withMessage('ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'),
    body('password')
      .not()
      .isEmpty()
      .withMessage('ກະລຸນາໃສ່ລະຫັດຜ່ານ')
      .isLength({ min: 8 })
      .withMessage('ລະຫັດຜ່ານຕ້ອງ 8 ຕົວອັກສອນຂື້ນໄປ'),
  ],
  userController.register
);

router.post(
  '/login',
  [
    body('email')
      .not()
      .isEmpty()
      .withMessage('ກະລຸນາກອກອີເມວ')
      .isEmail()
      .withMessage('ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'),
    body('password')
      .not()
      .isEmpty()
      .withMessage('ກະລຸນາໃສ່ລະຫັດຜ່ານ')
      .isLength({ min: 8 })
      .withMessage('ລະຫັດຜ່ານຕ້ອງ 8 ຕົວອັກສອນຂື້ນໄປ'),
  ],
  userController.login
);

router.get('/me', [passportJWT.isLogin], userController.me);

module.exports = router;