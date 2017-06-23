var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var gulp_load_plugins = require('gulp-load-plugins')();
var less_config = require('./less_config.js');
var autoprefixer = require('gulp-autoprefixer')

// gulp.task('browser-sync', ['express-server', 'less'], function() {
// 	browserSync.init({
// 		proxy: "localhost:3000",
// 		open: false,
// 		port: 8090,
// 	});
// 	//监听模板变化
// 	gulp.watch([
// 		'./views/**/*.ejs',
// 		'./routes/**/*.js',
// 		'./public/**/*.less'
// 	], ['reload-after-update']);
// });
gulp.task('browser-sync', ['less'], function() {
	browserSync.init({
		proxy: "localhost:3000",
		open: false,
		port: 8090,
	});
	//监听模板变化
	gulp.watch([
		'./views/**/*.ejs',
		'./routes/**/*.js',
		'./public/**/*.less'
	], ['reload-after-update']);
});
gulp.task('less', function() {
	return gulp.src(less_config.lessPath.src)
		//.pipe(gulp_load_plugins.plumber({ errorHandler: gulp_load_plugins.notify.onError('Error: <%= error.message %>') }))
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false, //是否美化属性值
			remove: true	//是否去掉不必要的前缀 默认：true 
		}))
		.pipe(cssmin({ compatibility: 'ie7' }))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('reload-after-update', ['less'], function() {
	setTimeout(function() {
		reload();
	}, 500);
});

gulp.task('express-server', function() {
	nodemon({
		script: 'app.js',
		ext: 'ejs html js',
		env: { 'NODE_ENV': 'development' },
		//task: ['']
	})
});

gulp.task('default', ['browser-sync'], function() {

});
