import * as types from "store/types";

export default {
  addCart({ commit, state }, payload) {
    let item = state.cartList.find(n => n.iid === payload.iid);
    if (item) {
      commit(types.ADD_COUNT, item);
    } else commit(types.ADD_CART, payload);
  }
};
