export default {
  // 结算商品总件数
  sum(state) {
    const getCount = n => n.count;
    const getSum = (preVal, curVal) => preVal + curVal;
    return state.cartList.map(getCount).reduce(getSum, 0);
  },
  cartList(state) {
    return state.cartList;
  },
  // 全选按钮的状态
  ischeckAll(state) {
    const getIsChecked = n => n.isChecked;
    // // 判断是否存在没有被勾选的商品
    const hasUnselect = (pre, cur) => pre && cur;
    return state.cartList.map(getIsChecked).reduce(hasUnselect, true);

    // 第二种方法
    // const uncheck = n => !n.isChecked;
    // return !state.cartList.some(uncheck);
  },
  // 商品总价
  totalPrice(state) {
    const getSelected = n => n.isChecked;
    const getPrice = (pre, cur) => pre + cur.count * cur.realPrice;
    return state.cartList
      .filter(getSelected)
      .reduce(getPrice, 0)
      .toFixed(2);
  },
  // 勾选的商品件数
  selectedCount(state) {
    const getSelected = n => n.isChecked;
    const getSelectedCount = (pre, cur) => pre + cur.count;
    return state.cartList.filter(getSelected).reduce(getSelectedCount, 0);
  }
};
