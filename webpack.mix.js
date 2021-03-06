const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
  .options({ processCssUrls: false });

mix.webpackConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'resources/js/components/'),
      '@hoc': path.resolve(__dirname, 'resources/js/hoc/'),
      '@pages': path.resolve(__dirname, 'resources/js/pages/'),
      '@store': path.resolve(__dirname, 'resources/js/store/'),
      '@fonts': path.resolve(__dirname, 'public/fonts/'),
      '@theme': path.resolve(__dirname, 'resources/js/theme/'),
      '@utils': path.resolve(__dirname, 'resources/js/utils/')
    }
  }
});
