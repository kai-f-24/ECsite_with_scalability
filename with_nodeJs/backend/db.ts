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