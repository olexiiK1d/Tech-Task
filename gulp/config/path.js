import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './build'
const srcFolder = './src'

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `wusys.yellowmind.agency`,
}
