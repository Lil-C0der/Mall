module.exports = {
  configureWebpack: {
    reslove: {
      alias: {
        // "@": "src",
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
