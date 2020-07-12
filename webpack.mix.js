let mix = require('laravel-mix');

mix
    .browserSync({
        localOnly: true,
        files: ['index.html'],
        proxy: 'localhost:8080'
    })
    .postCss('styles/main.css', 'public/css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .js('js/main.js', 'public/js/main.js');