import express from "express"
import admin from "./route/admin.js"
import cors from "cors"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));   // isase form data ya row dono ke liye use hoga
app.use(express.json());    //ager data row se send krenge tab use hoga 
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

app.use('/admin', admin);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

export default app;