import svgSprite from 'gulp-svg-sprite'

export const mySvgSprite = () => {
	return app.gulp
		.src(app.path.src.svgicons, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SVG',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						sprite: 'sprite.svg',
					},
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.images))
}
