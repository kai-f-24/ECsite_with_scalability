import express from "express";
import path from "path";
import { sampleMerchandiseInfo } from "./db";

export const app = express();
const port  = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'frontend'));

app.get('/', (req, res) => {
    const sampleData = sampleMerchandiseInfo;
    // ここで割引の処理を行う
    res.render('index', { data: sampleData });
});

app.listen(port, () => {
    console.log(`サーバーが立ち上がりました🐈 on http://localhost:${port}`);
});