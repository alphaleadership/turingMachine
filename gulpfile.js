const gulp = require("gulp")
const ts = require("gulp-typescript")
const spawn = require("child_process").spawn
const tsProject = ts.createProject("tsconfig.json")
const nodemon = require("gulp-nodemon")

function run(){
    nodemon({
        script: 'dist/index.js'
        , ext: 'js'
        , env: { 'NODE_ENV': 'development' }
    })
}

gulp.task("default", function (cb) {
    tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"))
    run()
    cb()
})

gulp.watch("src/*.ts", {}, function (cb) {
    tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"))
    cb()
})