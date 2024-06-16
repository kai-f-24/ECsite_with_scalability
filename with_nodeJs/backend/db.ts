import { app } from "."
import express from "express";
import path from "path";
import 'dotenv/config'

require('dotenv').config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.zxd10jh.mongodb.net/ecsite_with_scalability?retryWrites=true&w=majority`)
    .then(() => console.log('mongoDBに接続しました。'))
    .catch((err: any) => console.log(err));



const merchandiseBasicInfoListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgPath: {
        type: String,
        required: true,
    }
})

export const MerchandiseBasicInfoList = mongoose.model("MerchandiseBasicInfoList", merchandiseBasicInfoListSchema, 'merchandise');