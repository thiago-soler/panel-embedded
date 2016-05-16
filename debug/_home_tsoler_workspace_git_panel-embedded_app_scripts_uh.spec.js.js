
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_ltbGjm, __expression_pGkJ62, __block_MQPv0d;
    var store = require('/home/tsoler/workspace/git/panel-embedded/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_ltbGjm = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.spec.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_pGkJ62 = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.spec.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_MQPv0d = function(i) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.spec.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_zaJ3G5 = function(id, obj) {
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
    __extro_zEzu41 = function(id, obj) {
        var fd = store.register('/home/tsoler/workspace/git/panel-embedded/app/scripts/uh.spec.js');
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
    __statement_ltbGjm(0);
    var jsdom = (__expression_pGkJ62(1), require('jsdom'));
}
{
    __statement_ltbGjm(2);
    const doc = __extro_zEzu41(3, __intro_zaJ3G5(3, jsdom).jsdom());
}
{
    __statement_ltbGjm(4);
    global['window'] = doc.defaultView;
}
{
    __statement_ltbGjm(5);
    global['document'] = doc;
}
{
    __statement_ltbGjm(6);
    __expression_pGkJ62(7), require('./uh.js');
}
{
    __statement_ltbGjm(8);
    __expression_pGkJ62(9), describe('window.uh - Namespace da aplicacao', function () {
        __block_MQPv0d(0);
        {
            __statement_ltbGjm(10);
            __expression_pGkJ62(11), it('Verifica se o objeto esta no formato esperado', function () {
                __block_MQPv0d(1);
                {
                    __statement_ltbGjm(12);
                    __extro_zEzu41(13, __intro_zaJ3G5(13, (__expression_pGkJ62(14), expect(window.uh))).toEqual(__extro_zEzu41(15, __intro_zaJ3G5(15, jasmine).any(Object))));
                }
            });
        }
        {
            __statement_ltbGjm(16);
            __expression_pGkJ62(17), it('Teste 2', function () {
                __block_MQPv0d(2);
                {
                    __statement_ltbGjm(18);
                    __extro_zEzu41(19, __intro_zaJ3G5(19, (__expression_pGkJ62(20), expect(window.uh))).toEqual(__extro_zEzu41(21, __intro_zaJ3G5(21, jasmine).any(Object))));
                }
            });
        }
    });
}