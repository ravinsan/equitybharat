import { Router } from "express";
import {signUp, signIn, logOut}  from "../controllers/authController.js";
import {dashboard}  from "../controllers/dashboardController.js";
import { Index, Store, View, update, destroy} from "../controllers/RoleController.js";
import { indexMenu, storeMenu, viewMenu, updateMenu, destroyMenu} from "../controllers/MenuController.js";
import verifyToken from "../middleware/userAuth.js";

const Route = Router();

/* User Singin*/ 
Route.post('/signup', signUp);
Route.post('/signin', signIn);
Route.post('/logout', verifyToken, logOut);

/* Dashboard */ 
Route.get('/dashboard', verifyToken, dashboard);

/* Role */
Route.get('/roles', verifyToken, Index);
Route.post('/roles/create', verifyToken, Store);
Route.get('/roles/:id', verifyToken, View);
Route.put('/roles/update/:id', verifyToken, update);
Route.delete('/roles/delete/:id', verifyToken, destroy);

/* Menu */
Route.get('/menus', verifyToken, indexMenu);
Route.post('/menus/create', verifyToken, storeMenu);
Route.get('/menus/:id', verifyToken, viewMenu);
Route.put('/menus/update/:id', verifyToken, updateMenu);
Route.delete('/menus/delete/:id', verifyToken, destroyMenu);

export default Route;