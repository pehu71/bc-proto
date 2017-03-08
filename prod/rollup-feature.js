var rollup  = require('rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify  = require('rollup-plugin-uglify');

module.exports = {
    entry: 'app/main-aot.js',
    dest: 'dist/feature.js',
    sourceMap: false,
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: 'node_modules/rxjs/**'
        }),
        uglify()
    ]
};

