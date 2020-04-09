import * as types from "store/types";

export default {
  [types.ADD_CART](state, payload) {
    state.cartList.push(payload);
    // 修改商品选中状态
    payload.isChecked = true;
  },
  [types.ADD_COUNT](state, payload) {
    payload.count++;
  },
  [types.ISCHECKED_CHANGE](state, payload) {
    payload.isChecked = !payload.isChecked;
  },
  [types.SELECTALL](state) {
    state.cartList.forEach(n => {
      n.isChecked = true;
    });
  },
  [types.UNSELECTALL](state) {
    state.cartList.forEach(n => {
      n.isChecked = false;
    });
  }
};
