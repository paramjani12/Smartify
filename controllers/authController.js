const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { log } = require('console')



const UserOTPVerification=require("../models/userOTPVerification");


const nodemailer = require("nodemailer");

require("dotenv").config();

const bcrypt = require("bcrypt");

const path = require("path");


let transporter = nodemailer.createTransport({
  service:'gmail',    
  auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
  }
})

//testing transporter
transporter.verify((error, success)=>{
  if(error){
      console.log(error);
  }
  else{
      console.log("Ready");
      console.log(success);
  }
})




const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  return token
}

const createAndSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id)
  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }
  res.cookie('jwt', token, cookieOptions)
  user.password = undefined // to avoid showing password in the res
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    })
    createAndSendToken(newUser, 200, res)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({
        status: 'error',
        message: 'please enter valid email address and password',
      })
    }

    const user = await User.findOne({ email }).select('+password') //as we have not selected password in model
    if (!user || !(await user.matchPassword(password, user.password))) {
      res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      })
    }
    createAndSendToken(user, 200, res)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.logout = (req, res) => {
  res.clearCookie('jwt').send()
}


exports.otp = async (req, res, next) => {
  try {
    const { email } = req.body

    if (!email) {
      res.status(400).json({
        status: 'error',
        message: 'please enter valid email address',
      })
    }

    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).json({
        status: 'error',
        message: 'Invalid email',
      })
    }
    else{

          sendVerificationEmail({email}, res);

    }

  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}


const sendVerificationEmail = async ({email}, res) =>{
  try{
    const otp = `${Math.floor(1000+Math.random()*9000)}`
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Please Verify It's You",
      html: `<p>Salutation from Smartify team.</p> <p>Please verify to access password keeper section of the portal.</p> <p> Your OTP is <b> ${otp} </b> link will expire in 3 mins.</p>`
    };
    const newOTPVerification = await new UserOTPVerification({
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now()+180000,
    });

    await newOTPVerification.save();
    await transporter.sendMail(mailOptions);
    res.json({
      status: "PENDING",
      message: "OTP email sent",
      data:{
        email,
      },
    });
  }
  catch (error){
    res.json({
      status: "FAILED",
      message: error.message
    })
  }
}




exports.verifyotp = async (req, res, next) => {
  try {
    const { otp } = req.body

    if (!otp) {
      throw Error("Empty otp detail")
    }
    else{
      const UserOTPVerificationRecords = await UserOTPVerification.find({
        otp,
      })
      const {expiresAt} = UserOTPVerificationRecords[0];
      const checkOTP = UserOTPVerificationRecords[0].otp;
      if(expiresAt<Date.now()){
        await UserOTPVerification.deleteMany({otp});
        throw new Error("OTP has expired");
      }
      else{
        if(otp == checkOTP){
          await UserOTPVerification.deleteMany({otp});
          res.json({
            status:"VERIFIED",
            message:"User Email is verified"
          })
        }
        else{
          throw new Error("Invalid OTP")
        }
      }
    }

  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}
