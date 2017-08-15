var mode = 'dev';
// var mode = 'prod';

angular.module('appConfig', [])
    .constant('dev', {
        templateUrl: './src/templates/home.html'
    })
    .constant('prod', {
        templateUrl: './templates/home.html'
    })
    .service('appConfig', function () {
        if (mode === 'prod')
            return this.prod;
        else return this.dev;
    });
