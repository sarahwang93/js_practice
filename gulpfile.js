const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', async function() {
    console.log("Server Started")
    
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});