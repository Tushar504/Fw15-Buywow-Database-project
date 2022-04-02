const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const { body, validationResult } = require("express-validator");

const cartController = require("./controllers/cart.controller");
/////////sachin
const bestController=require("./controllers/best.controller.js")
const bodyController=require("./controllers/body.controller.js")
const homeController=require("./controllers/home.controller.js")
const summerController=require("./controllers/summer.controller.js")
////sachin
const bath_body = require("./controllers/bath_body_controller");
const search_result = require("./controllers/searchcontroller");

const hair_shampoo = require("./controllers/hair_shampoo_controller");
const mother_child = require("./controllers//mother_child_controller");
const skin_face_wash = require("./controllers/skin_face_wash_controller");
const wellness = require("./controllers/wellness_controller");
const massage = require("./controllers/massage_controller");
const charcol = require("./controllers/charcol_controller");
const nutrition_health = require("./controllers/nutrition_health_controller");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/bath_body", bath_body);
app.use("/search", search_result);
app.use("/hair_shampoo", hair_shampoo);
app.use("/mother_child", mother_child);
app.use("/skin_face_wash", skin_face_wash);
app.use("/wellness", wellness);
app.use("/massage", massage);
app.use("/charcol", charcol);
app.use("/nutrition_health", nutrition_health);
// Sachinuse
app.use("/summer",summerController)
app.use("/body",bodyController)
app.use("/home",homeController)
app.use("/Best",bestController)
// meeeeeeeeee
app.post(
  "/register",
  body("first_name").notEmpty().withMessage("first name is required"),
  body("last_name").notEmpty().withMessage("last name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("enter correct email id"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 5, max: 8 })
    .withMessage(
      "password should be min 5 letters long and max 8 letters long"
    ),
  register
);
app.post(
  "/login",
  body("email")
    .notEmpty()
    .withMessage("email id is required")
    .isEmail()
    .withMessage("incorrect email"),
  body("password").notEmpty().withMessage("password is required"),
  login
);
app.use("/cart", cartController);
module.exports = app;
