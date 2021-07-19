const gulp = require('gulp')
const jshint = require('gulp-jshint')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')



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
var styleSRC = './src/scss/style.scss'
var styleDEST = './dist/css'

gulp.task("styles", function(done){
    gulp.src(styleSRC)
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDEST));
    done();
})

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

////////////////////////////////////////////////////////////////
jsDIST = './dist/js/'
jsFolder = './src/js/'
jsSRC = 'script.js'

var jsFiles = [jsSRC]

gulp.task('js', function(done){

    jsFiles.map(function(entry){
        return browserify({
            entries:[jsFolder+entry]
        })
        .transform(babelify, {presets:['env']})
        .bundle()
        .pipe(source( entry ))
        .pipe(rename({extname:'.min.js'}))
        .pipe( buffer() )
        .pipe( sourcemaps.init({loadMaps:true}))
        .pipe(uglify())
        .pipe( sourcemaps.write('./'))
        .pipe( gulp.dest(jsDIST))
    });
    done();
    //Browserify
    //transform(babelify)
    //bundle
    //rename
    //buffer
    //init sourcemaps
    //uglify
    //write sourcemaps
    //dist

})

//////////////watch mode/////////////////////////
var styleWatch = './src/scss/**/*.scss'
var jsWatch = './src/js/**/*.js'

// gulp.task('watch', function(){
//     gulp.watch(styleWatch, gulp.series('styles'))
//     gulp.watch(jsWatch, gulp.series('js'))
// })

gulp.task('watch', function(){
    gulp.watch(styleWatch, gulp.parallel('styles'))
    gulp.watch(jsWatch, gulp.parallel('js'))
})