exports.config =
        npm:
          enabled: false
        plugins:
                sass:
                        mode: 'native'
                        options:
                                includePaths: ["bower_components/compass-mixins/lib/"]

        conventions:
                assets: /^app\/assets\//
        modules:
                definition: false
                wrapper: false
        paths:
            public: '_public'
        files:
                javascripts:
                        joinTo:
                                'js/vendor.js': [
                                        /^bower_components/
                                        /^vendor\/scripts/
                                ]
                                'js/app.js': [
                                        'app/scripts/*.coffee'
                                        'app/scripts/common/**/*.coffee'
                                        'app/scripts/*.js'
                                ]
                         order:
                                before: [
                                ]
                                after: [

                                ]
                stylesheets:
                        joinTo:
                                'css/vendor.css': [
                                        /^bower_components/
                                        /^vendor\/styles/
                                ]
                                'css/app.css': /^app\/styles/
                        order:
                                after: [

                                ]
