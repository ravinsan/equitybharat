import { Router } from "express";
import {signUp, signIn}  from "../controllers/authController.js";
const Route = Router();

Route.post('/signup', signUp);
Route.post('/signin', signIn);

export default Route;