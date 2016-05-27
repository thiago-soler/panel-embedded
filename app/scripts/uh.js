'use strict';

function _Panel () {}

_Panel.prototype.type = function () {

	return 'Namespace';

};

/** @namespace */
var PANEL = new _Panel();


function _Loader () {}

_Loader.prototype = new _Panel();
_Loader.prototype.constructor = _Loader;

_Loader.prototype.start = function () {

	return 'start';

};

PANEL.loader = new _Loader();