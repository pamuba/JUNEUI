module.exports = function(config){
    config.set({
        frameworks:['jasmine', 'jasmine-matchers'],
        preprocessors:{
            '*.js':['coverage']
        },
        files:[
            '*.js',
            '*.spec.js'
        ],
        plugins:['karma-jasmine', 'karma-jasmine-matchers', 'karma-chrome-launcher', 'karma-coverage'],
        reporters:['dots', 'coverage'],
        color:true,
        browsers:['ChromeHeadless'],
        // singleRun:true
        coverageReporter:{
            dir:'coverage/',
            reporters:[
                {type:'html', subdir:'html'}
            ]
        }
    })
}