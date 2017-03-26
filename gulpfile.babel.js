'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import esdoc		from 'gulp-esdoc';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import del      from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';

const CLIENT_ROOT = 'client',
			DOCS_ROOT = 'docs',
			API_ROOT = 'http://localhost:3000';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(CLIENT_ROOT, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(CLIENT_ROOT, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  scss: resolveToApp('**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(CLIENT_ROOT, 'index.html')
  ],
  entry: {
  	app: [
      'babel-polyfill',
      path.join(__dirname, CLIENT_ROOT, 'app/app.js')
    ],
	  editor: [
	    path.join(__dirname, CLIENT_ROOT, 'app/components/aframe/editor/editor.js')
	  ]
	},
  output: CLIENT_ROOT,
  docs: DOCS_ROOT,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  // dest: path.join(__dirname, 'dist'),
  dest: path.join(__dirname, '../virtualtour-ks/public')
};

// use webpack.config.js to build modules
gulp.task('webpack', ['clean'], (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry.app;
  config.entry.editor = paths.entry.editor;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
  ].concat(paths.entry.app);
  config.entry.editor = paths.entry.editor;

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3002,
    open: false,
    proxy: 'localhost:3000',
    // server: {baseDir: CLIENT_ROOT},
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
});

gulp.task('watch', ['serve']);

gulp.task('docs', ['cleandocs'], cb => {
	return gulp.src(path.join(__dirname, CLIENT_ROOT)).pipe(
		esdoc({
			title: 'UOIT Virtual Tour',
			destination: paths.docs,
			includes: ['\\.(js|es6)$'], 'excludes': ['\\.spec\\.(js|es6)$'],
			'experimentalProposal': {
		    'classProperties': true,
		    'objectRestSpread': true,
		    'decorators': true,
		    'doExpressions': true,
		    'functionBind': true,
		    'asyncGenerators': true,
		    'exportExtensions': true,
		    'dynamicImport': true
		  }
		})
	);
});

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('clean', cb => {
  del([paths.dest], {
  	force: true
  }).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('cleandocs', cb => {
  del([paths.docs], {
  	force: true
  }).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('default', ['watch']);
