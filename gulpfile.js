const{ src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');

function sass2css(done) {
    src("./public/stylesheets/style.scss")
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(dest("./dist/css/"))

    done();
}

async function startnodemon(done) {
    var started = false;
    return nodemon({
        script: './bin/www'
    }).on('start', function() {
        if (!started) {
            done();
            started=true;
        }
    })
    
}

watch('./public/sass/**/*.scss', sass2css);
module.exports.default = parallel(sass2css, startnodemon);