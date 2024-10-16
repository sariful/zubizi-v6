import gulp from "gulp";


import htmlmin from "gulp-htmlmin";

import nodemon from "gulp-nodemon";
import imagemin from "gulp-imagemin";
import pngquant from "imagemin-pngquant";
import mozjpeg from "imagemin-mozjpeg";
import webp from "gulp-webp";

import newer from "gulp-newer";
import babel from "gulp-babel";

import uglify from "gulp-uglify";


import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import preprocess from "gulp-preprocess";
import cleanCSS from "gulp-clean-css";


const folder = {
    src: "source/",
    build: "public/"
};

gulp.task("img", () => {
    try {
        return gulp.src(folder.src + "img/**/*", {
            encoding: false,
        })
            .pipe(newer(folder.build + "assets/img/"))
            .pipe(imagemin([
                pngquant({ quality: [0.6, 0.8] }),
                mozjpeg({ quality: 75, progressive: true }),
            ]))
            .pipe(webp())
            .pipe(gulp.dest(folder.build + "assets/img/"));
    } catch (error) {

    }
});

gulp.task("video", () => {
    try {
        return gulp.src(folder.src + "video/**/*", {
            encoding: false,
        })
            .pipe(newer(folder.build + "assets/video/"))
            .pipe(gulp.dest(folder.build + "assets/video/"));
    } catch (error) {

    }
});

gulp.task("html", () => {
    try {
        return gulp.src(folder.src + "html/**/*.html")
            .pipe(preprocess())
            .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }))
            .pipe(gulp.dest(folder.build));
    } catch (error) {
        console.warn("Error parsing HTML: ", error);
    }
});


gulp.task("js", () => {
    try {
        return gulp.src(folder.src + "js/**/*.js")
            .pipe(newer(folder.build + "assets/js/"))
            .pipe(babel({
                presets: ['@babel/preset-env']
            })).pipe(uglify())
            .pipe(gulp.dest(folder.build + "assets/js/"));
    } catch (error) {

    }
});


gulp.task("extras", () => {
    return gulp.src(folder.src + "extras/**/*", {
        encoding: false
    })
        .pipe(gulp.dest(folder.build));
});


gulp.task("css", () => {
    return gulp.src(folder.src + "css/**/*.css")
        .pipe(postcss([tailwindcss, autoprefixer]))
        .pipe(cleanCSS())  // Minify CSS
        .pipe(gulp.dest(folder.build + "assets/css/"));
});

/**
 * automated tasks
 */
gulp.task("start", function (done) {
    const stream = nodemon({
        script: "bin/www",
        ext: "js html",
        env: {
            "NODE_ENV": "development"
        },
        ignore: ["public/*", "source/*"],
        done: done
    });
    stream.on("crash", function () {
        console.error("Application has crashed!\n");
        stream.emit("restart", 10); // restart the server in 10 seconds
    });
});

gulp.task("watch", function () {
    gulp.watch([folder.src + "html/**/*.html", folder.src + "partials/*.html"], gulp.series("html"));
    gulp.watch([folder.src + "html/**/*.html", folder.src + "partials/*.html"], gulp.series("css"));
    gulp.watch(folder.src + "js/**/*", gulp.parallel("js"));
    gulp.watch(folder.src + "extras/**/*", gulp.parallel("extras"));
    gulp.watch(folder.src + "img/**/*", gulp.parallel("img"));
    gulp.watch(folder.src + "video/**/*", gulp.parallel("video"));
    gulp.watch(folder.src + "css/**/*", gulp.parallel("css"));
});

gulp.task("build", gulp.series("html", "css", "js", "extras", "img", "video"));

gulp.task("default", gulp.parallel("build", "watch", "start"));
