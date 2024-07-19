const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9005, // 将端口号更改为你需要的端口号，例如 8081
  },
});
