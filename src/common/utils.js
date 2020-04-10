// 防抖函数
// export function debounce(func, delay) {
export default (func, delay) => {
  let timer = null;
  // XXX 注意！这里返回了一个箭头函数 但是暂时没有发现this的指向问题
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
