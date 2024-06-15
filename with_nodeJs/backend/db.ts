import { app } from "."
import express from "express";

require('dotenv').config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

// サンプル商品データとその型
interface sampleMerchandiseInfoInterface {
    name: string,
    price: number,
    imgPath: string,
}

export const sampleMerchandiseInfo: sampleMerchandiseInfoInterface = {
    name: 'T-shirt',
    price: 4000,
    imgPath: 'src/img/sampleTShirtImg.jpg'
}

// app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.zxd10jh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log('mongoDBに接続しました。'))
    .catch((err: any) => console.log(err));