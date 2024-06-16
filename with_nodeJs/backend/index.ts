import express from "express";
import path from "path";
import { MerchandiseBasicInfoList } from "./db";
import axios from "axios";

const mongoose = require('mongoose');

export const app = express();
const port  = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'frontend'));

app.get('/', async(req, res) => {
    const merchandiseBasicInfoList = await MerchandiseBasicInfoList.find();
    // console.log(merchandiseBasicInfoList);
    // ここで割引の処理を行う
    res.render('index', { data:merchandiseBasicInfoList });
});

app.listen(port, () => {
    console.log(`サーバーが立ち上がりました🐈 on http://localhost:${port}`);
});