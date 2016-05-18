// var jsdom = require("jsdom");

// const doc = jsdom.jsdom();
// global['window'] = doc.defaultView;
// global['document'] = doc;

// require('../../app/scripts/uh.js');

describe('window.uh - Namespace da aplicacao', function () {

	it('Verifica se o objeto esta no formato esperado', function () {

		expect(window.uh).toEqual(jasmine.any(Object));

    });

    it('Teste 2', function () {
 
        expect(window.uh).toEqual(jasmine.any(Object));

	});


});