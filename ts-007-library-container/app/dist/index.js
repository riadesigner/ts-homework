"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('reflect-metadata');
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// --------
//  VARS
// --------
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path_1.default.join(__dirname + '/public');
const book_routes_1 = __importDefault(require("./books/book-routes"));
// ----
//  DB
// ----
require('./infrastructure/db_connection');
// -----------
//  STRUCTURE
// -----------
require('./infrastructure/container');
// --------
//  ROUTES
// --------
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', book_routes_1.default);
app.use('/', (req, res) => {
    res.sendFile(`${PUBLIC_PATH}/index.html`);
});
app.use((req, res) => { res.send("err"); });
// --------
//  SERVER
// --------
app.listen(PORT, () => {
    console.log("hi from PORT");
}).on("error", () => {
    console.log("error to starting server");
});
