
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_Al5Cia, __expression_kEw1RK, __block_pSVCGn;
    var store = require('/home/tsoler/workspace/git/panel-embedded/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_Al5Cia = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_kEw1RK = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_pSVCGn = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_tWP8Zn = function(id, obj) {
        // console.log('__intro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        (typeof obj === 'object' || typeof obj === 'function') &&
            Object.defineProperty && Object.defineProperty(obj, '__instrumented_miss', {enumerable: false, writable: true});
        obj.__instrumented_miss = obj.__instrumented_miss || [];
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (obj.length === 0) {
                // console.log('interim miss: ', id);
                obj.__instrumented_miss[id] = true;
            } else {
                obj.__instrumented_miss[id] = false;
            }
        }
        return obj;
    };
    function isProbablyChainable(obj, id) {
        return obj &&
            obj.__instrumented_miss[id] !== undefined &&
            'number' === typeof obj.length;
    }
    __extro_WYgAXf = function(id, obj) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.js');
        // console.log('__extro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (isProbablyChainable(obj, id) && obj.length === 0 && obj.__instrumented_miss[id]) {
                // if the call was not a "constructor" - i.e. it did not add things to the chainable
                // and it did not return anything from the chainable, it is a miss
                // console.log('miss: ', id);
            } else {
                fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
            }
            obj.__instrumented_miss[id] = undefined;
        } else {
            fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
        }
        return obj;
    };
};
////////////////////////

// Instrumented Code
{
    __statement_Al5Cia(0);
    'use strict';
}
{
    __statement_Al5Cia(1);
    __expression_kEw1RK(2), function (window, document, undefined) {
        __block_pSVCGn(0);
        {
            __statement_Al5Cia(3);
            var uh = (__expression_kEw1RK(4), window.uh || {
                    teste: true
                });
        }
        {
            __statement_Al5Cia(5);
            window.uh = uh;
        }
        return __expression_kEw1RK(6), window.uh;
    }(window, document);
}