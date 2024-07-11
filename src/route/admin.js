import { Router } from "express";
import {signUp, signIn, logOut}  from "../controllers/authController.js";
import {dashboard}  from "../controllers/dashboardController.js";
import { Index, Store, View, update, destroy} from "../controllers/RoleController.js";
import verifyToken from "../middleware/userAuth.js";

const Route = Router();

/* User Singin*/ 
Route.post('/signup', signUp);
Route.post('/signin', signIn);
Route.post('/logout', verifyToken, logOut);

/* Dashboard */ 
Route.get('/dashboard', verifyToken, dashboard);

/* Role */
Route.get('/roles', Index);
Route.post('/roles/create', Store);
Route.get('/roles/:id', View);
Route.put('/roles/update/:id', update);
Route.delete('/roles/delete/:id', destroy);

export default Route;