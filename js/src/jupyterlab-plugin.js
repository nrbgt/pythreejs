var base = require('@jupyter-widgets/base');
var version = require('./version');

module.exports = {
    id: 'jupyter.extensions.jupyter-threejs',
    requires: [base.IJupyterWidgetRegistry],
    activate: function(app, widgets) {
        widgets.registerWidget({
            name: 'jupyter-threejs',
            version: version.version,
            exports: function(){
                return new Promise(function(resolve){
                    require.ensure(
                        ['./index'],
                        function(require) { 
                            resolve(require('./index')); 
                        },
                        function(err) { 
                            console.error(err); 
                        },
                        'jupyter-threejs'
                    );
                });
            }
        });
    },
    autoStart: true
};
