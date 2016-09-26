(function (global) {
    System.config({
        defaultJSExtension: true,

        map: {
            app: 'app'
        },
        bundles: {
            'dist/build.js': ['app/main-aot.js']
        },

        packages: {
            app: {
                main: './main-aot.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);

