const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

function imgSquash() {
  return gulp.src("./public/img/Studio/*").pipe(imagemin()).pipe(gulp.dest("./public/minified/images/Studio"));
}
gulp.task("imgSquash", imgSquash);
gulp.task("watch", () => {
  gulp.watch("./img/*", imgSquash);
});
gulp.task("default", gulp.series("imgSquash", "watch"));
