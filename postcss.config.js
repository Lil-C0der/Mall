module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 414,
      viewportHeight: 736,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [
        "ignore",
        "wrapper",
        "nav-bar",
        "tab-bar",
        "tab-bar-item"
      ],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
