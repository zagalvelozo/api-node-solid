import express from "express"
import { router } from "./routes";
import connection from "./database/connection";

const app = express();

const db = 'mongodb://localhost:27017/test';

app.use(express.json());
app.use(router)

// connection({db});

export { app }