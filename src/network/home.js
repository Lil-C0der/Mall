import instance from "network/request";

export function getMultidata() {
  return instance({
    url: "home/multidata",
  });
}

export function getHomeGoods(type, page) {
  return instance({
    url: "home/data",
    params: {
      type,
      page,
    },
  });
}
