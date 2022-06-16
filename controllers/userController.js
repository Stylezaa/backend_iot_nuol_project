const User = require('../models/userModel');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('../config/index');

//================================================================
//===================== For Authentication =======================
//================================================================
exports.index = async (req, res, next) => {
  const users = await User.find().select('name email role').sort({ _id: -1 });

  res.status(200).json({
    data: users,
  });
};

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    //Validation Email
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('ຂໍ້ມູນທີ່ຮັບມາບໍ່ຖືກຕ້ອງ');
      error.statusCode = 422; //message type not collect
      error.validation = errors.array();
      throw error;
    }

    //check email ຊໍ້າ
    const existEmail = await User.findOne({ email: email });
    if (existEmail) {
      const error = new Error('ອີເມວຊໍ້າ ມີຜູ້ໃຊ້ງານແລ້ວ ລອງໃໝ່ອີກຄັ້ງ');
      error.statusCode = 400;
      throw error;
    }

    let user = new User();
    user.name = name;
    user.email = email;
    user.password = await user.encryptPassword(password);

    await user.save();

    return res.status(201).json({
      message: 'Register Successfully',
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //check ວ່າມີ email ນີ້ໃນລະບົບບໍ່
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error('ບໍ່ພົບຜູ້ໃຊ້ງານນີ້ໃນລະບົບ');
      error.statusCode = 404;
      throw error;
    }

    //ກວດສອບລະຫັດຜ່ານວ່າຕົງກັນຫຼ່ືບໍ່ ຖັາບໍ່ຕົງໃຫ້ໂຍນ Error ອອກໄປ
    const isValid = await user.checkPassword(password);
    if (!isValid) {
      const error = new Error('ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ');
      error.statusCode = 401;
      throw error;
    }

    //ສ້າງ token jwt ເພື່ອກວດສອບກັບ server
    const token = await jwt.sign(
      {
        id: user._id, //save to payload
        role: user.role, //save to payload
      },
      config.JWT_SECRET,
      { expiresIn: '30 days' } //Expire token time
    );

    //decode ວັນໝົດອາຍຸ (type data is timestamp)
    const expires_in = jwt.decode(token);

    return res.status(200).json({
      access_token: token,
      expires_in: expires_in.exp, //expire day with decode to timestamp
      token_type: 'Bearer', //for tell fontend for send data to header
    });
  } catch (error) {
    next(error);
  }
};

//get profile
exports.me = (req, res, next) => {
  const { _id, name, email, role } = req.user;
  return res.status(200).json({
    user: {
      id: _id,
      name: name,
      email: email,
      role: role,
    },
  });
};