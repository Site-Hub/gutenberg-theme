require('dotenv').config();

// Load dependencies
const env = process.env.NODE_ENV || 'development';
const { series, parallel, src, dest, watch } = require('gulp');
const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const babel = require('rollup-plugin-babel');
const bs = require('browser-sync').create();
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const multi = require('@rollup/plugin-multi-entry');
const replace = require('@rollup/plugin-replace');

function css () {
  return src(['./src/app.scss', './blocks/**/*.scss'])
  .pipe(concat('app.min.scss'))
  .pipe(
    sass({
      outputStyle: 'compressed',
      includePaths: ['./src'],
    }).on('error', sass.logError)
  )
  .pipe(postcss([autoprefixer()]))
  .pipe(dest('./dist'))
  .pipe(bs.stream());
}

function serve( cb ) {
	bs.init({
		proxy: process.env.GULP_PROXY,
	});

	watch(['src/**/*.scss', 'blocks/**/*.scss'], css );
	// watch(['custom-field-types/**/*.scss'], parallel(custom_field_types_css));
	// watch(['blocks/**/*.js', 'src/**/*.js'], parallel(blocks_js, modules_js, js_entrypoint));
	// watch(['custom-field-types/**/*.js'], parallel(custom_field_types_js));
	// watch(['*.html', 'dist/**/*.js', '**/*.php']).on('change', bs.reload);

	cb();
}

// exports.default = series( parallel( parallel( css, login_page_css ), parallel( blocks_js, modules_js, js_entrypoint ) ), serve );
exports.default = series( css, serve );