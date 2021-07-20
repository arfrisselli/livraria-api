import express from "express";
import cor from "cors";
import winston from "winston";
import clientesRouter from "./routes/cliente.route.js";
import livrosRouter from "./routes/livro.route.js";
import autoresRouter from "./routes/autor.route.js";
import vendasRouter from "./routes/venda.route.js";
import basicAuth from "express-basic-auth";
import {authorizer, authorize} from "./controllers/auth.controller.js";

// ************************ Configurando LOG ***********************************//
const { combine, timestamp, label, printf } = winston.format; //destructuring
const myFormat = printf(({ level, message, label, timestamp}) =>{
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({ 
    level: "silly",
    transports:[
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: "bookstore-api.log"})
    ],
    format: combine(
        label({label: "bookstore-api"}),
        timestamp(),
        myFormat
    )
});
// ************************ Fim config LOG ***********************************//

const app = express();
app.use(express.json());
app.use(cors());
app.use(basicAuth({ authorizeAsync: true, authorizer}));
app.use("/cliente", clientesRouter);
app.use("/livro", livrosRouter);
app.use("/autor", authorize("admin"), autoresRouter);
app.use("/venda", vendasRouter);
app.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

export default app

