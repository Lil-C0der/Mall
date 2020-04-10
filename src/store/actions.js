import * as types from "store/types";

export default {
  addCart({ commit, state }, payload) {
    return new Promise((reslove, reject) => {
      let item = state.cartList.find(n => n.iid === payload.iid);
      if (item) {
        commit(types.ADD_COUNT, item);
        reslove("又添加了一件");
      } else {
        commit(types.ADD_CART, payload);
        reslove("加入到购物车");
      }
    });
  }
};
