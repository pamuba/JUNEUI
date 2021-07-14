var gulp = require('gulp')
var jshint = require('gulp-jshint')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')


//gulp-jshint
//named task
// gulp.task('task_jshint', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())   
//         .pipe(jshint.reporter('default'));
//     done();
// });

//default task
// gulp.task('default', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())   
//         .pipe(jshint.reporter('default'));
//     done();
// });

//alternate syntex for creating a task
// function task_jshint(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())   
//         .pipe(jshint.reporter('default'));
//     done();
// }
// function task_jshint1(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())   
//         .pipe(jshint.reporter('default'));
//     done();
// }
// exports.task_jshint = task_jshint
// exports.default = task_jshint

// exports.default = gulp.series( task_jshint,  task_jshint1);
// exports.default = gulp.parallel( task_jshint,  task_jshint1);

//////////////////////////////////////////////////////////////////
//sass compile + minify + rename
//gulp-sass
// var styleSRC = './src/scss/style.scss'
// var styleDEST = './dist/css'

// gulp.task("styles", function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             outputStyle:'compressed'
//         }))
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done();
// })

//////////////////////////////////////////////////////////////////////
///generate the css from scss in the src folder

// var styleSRC = './src/scss/style.scss'
// var styleDEST = './src/scss/'

// gulp.task("styles", function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//         }))
//         .pipe(gulp.dest(styleDEST));
//     done();
// });


//gulp minify and rename css files
// gulp-rename
// gulp-clean-css

// var styleSRC = './src/scss/style.css'
// var styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())//minify
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done();
// });
////////////////////////////////////////////////////////////////////


//sass compile + minify + rename + soucemaps + autoprefix
//gulp-sourcemaps
//gulp-autoprefixer

// var styleSRC = './src/scss/style.scss'
// var styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             outputStyle:'compressed'
//         }))
//         .pipe(autoprefixer({
//             // browsers:['last 2 versions']
//         }))
//         .pipe(rename({suffix:'.min'}))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(styleDEST))
//     done();
// })

//image minification
//gulp-imagemin

// var imgSrc = './src/images/*'
// var imgDest = './dist/images'

// gulp.task('image', function(done){
//     gulp.src(imgSrc)
//         .pipe(imagemin())
//         .pipe(gulp.dest(imgDest));
//     done();
// })