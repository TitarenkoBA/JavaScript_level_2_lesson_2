class GoodsItem {
    constructor(title = 'unknown', price = 999, rating = 0, url = 'img/goods/1.jpg') {
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.url = url;
    }
    renderGoodsItem() {
        return `<div class="goods-item"><img class="good-img" src=${this.url}><h3>${this.title}</h3><p>${this.price}</p><h4>${this.rating}</h4></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Chappi', price: 150, rating: 1, url: 'img/goods/1.jpg' },
            { title: 'Simba', price: 50, rating: 10, url: 'img/goods/2.jpg' },
            { title: 'Darsi', price: 350, rating: 4, url: 'img/goods/3.jpg' },
            { title: 'Unicharm', price: 250, rating: 8, url: 'img/goods/4.jpg' },
            { title: 'Royal Farm', price: 450, rating: 7, url: 'img/goods/5.jpg' },
            { title: 'Pedigree', price: 550, rating: 5, url: 'img/goods/6.jpg' },
            { title: 'Pro Plan', price: 650, rating: 6, url: 'img/goods/7.jpg' },
        ];
    }
    renderGoodsList() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.rating, good.url);
            listHtml += goodItem.renderGoodsItem();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    countGoodsListPrice() {
        let count = 0;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            count += goodItem.price;
        });
        let listHtml = `Count of all goods in GoodsList is ${count}`;
        document.querySelector('.goods-count').innerHTML = listHtml;
    }

}


const list = new GoodsList();
list.fetchGoods();
list.renderGoodsList();
list.countGoodsListPrice();


class BasketItem extends GoodsItem {
    
}


class BasketList {
    constructor() {
        this.basketGoods = [];
    }
    fetchBasketGoods() {
        
    }
    renderBasketList() {
        
    }
}