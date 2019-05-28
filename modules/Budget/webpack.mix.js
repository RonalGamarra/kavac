const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/_app.js', 'js/$LOWER_NAME$.js')
    .sass( __dirname + '/Resources/assets/sass/_app.scss', 'css/$LOWER_NAME$.css');

if (mix.inProduction()) {
    mix.version();
}