import express from 'express'
import { loginController, registerController } from '../Controllers/userController.mjs';

//router object
const Router = express.Router();

//routes
// REGISTER || POST
// 
Router.post("/register", registerController);

//LOGIN || POST
Router.post("/login", loginController);

//export
export default Router;
