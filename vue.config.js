const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('ion-') // For Ionic Vue users, this line can be added.
          },
          reactivityTransform: true
        };
      });
  }
})
