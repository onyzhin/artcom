var chalk = require('chalk');

/*-----------------------------------------------------------
 GULP: APP CONFIGURATION
 Source, Build folder and other application configuration
-----------------------------------------------------------*/
var config =  function() {

    // Source Path
    var src = { 
        root    : 'app',
        css     : 'app/css',
        scss    : 'app/scss',
        js      : 'app/js',
        vendorjs: 'app/js/vendor',
        images  : 'app/img',
        partials: 'app/partials',
        fonts   : 'app/fonts',
        bower   : './bower_components',
        zip     : './zip'
    };

    // Build Path
    var build = {
        root   : 'build',
        css    : 'build/css',
        js     : 'build/js',
        images : 'build/img',
        fonts  : 'build/fonts'
    };

    // Server Configuration
    var serverConfiguration = {
        host       : 'localhost',
        port       : 3000,
        open       : true,
        livereload : {
            enable: true,
            port: 35729
        }
    };

    // Default production mode set to false
    var production = false;

    // Bower Configuration
    var bowerConfiguration = {
        paths: {
            bowerDirectory : src.bower,
            bowerrc        : '.bowerrc',
            bowerJson      : 'bower.json'
        }
    };

    // Minification options for HTML
    var opts = {
        comments : false,
        quotes   : true,
        spare    : true,
        empty    : true,
        cdata    : true
    };

    // Chalk config
    var notify = {
        error   : chalk.red.bold,
        warning : chalk.black.bold.bgYellow,
        update  : chalk.yellow.underline,
        success : chalk.green
    };

    // CSS autoprefix config
    var browserVersion = ['last 5 versions'];

    return {
        source: src,
        build: build,
        serverConfiguration: serverConfiguration,
        production: production,
        bowerConfiguration: bowerConfiguration,
        opts: opts,
        notify: notify,
        browserVersion: browserVersion
    };
};

module.exports = config();
