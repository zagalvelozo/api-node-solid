import express from "express"
import { router } from "./routes";
import connection from "./database/connection";

const db = 'mongodb://localhost:27017/MyDB';

const app = express();


app.use(express.json());
app.use(router)

connection({db});

export { app }