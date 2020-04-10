import instance from "network/request";

export function getDetail(iid) {
  return instance({
    url: "detail",
    params: {
      iid
    }
  });
}

export function getRecommend() {
  return instance({
    url: "recommend"
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.nowPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.logo = shopInfo.shopLogo;
    this.url = shopInfo.shopUrl;
  }
}

export class GoodsParams {
  constructor(params) {
    this.img = params.info.images ? params.info.images[0] : "";
    this.rule = params.rule.tables[0];
    this.info = params.info.set;
  }
}
