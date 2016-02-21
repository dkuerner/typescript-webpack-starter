/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Car2goApi = __webpack_require__(1);
	var api = new Car2goApi('own');
	if (window && window.document) {
	    document.writeln(api.getContext());
	}
	else {
	    console.log(api.getContext());
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseApi = __webpack_require__(2);
	var Car2goApi = (function (_super) {
	    __extends(Car2goApi, _super);
	    function Car2goApi(context) {
	        _super.call(this, context);
	    }
	    return Car2goApi;
	})(BaseApi);
	module.exports = Car2goApi;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ApiEndPoints = __webpack_require__(3);
	var BaseApi = (function () {
	    function BaseApi(context) {
	        this.context = 'own';
	        this.endpoints = new ApiEndPoints();
	        this.context = context;
	    }
	    ;
	    BaseApi.prototype.getContext = function () {
	        return this.context;
	    };
	    BaseApi.prototype.setContext = function (context) {
	        this.context = context;
	    };
	    return BaseApi;
	})();
	module.exports = BaseApi;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var ApiEndPoints = (function () {
	    function ApiEndPoints() {
	        this.login = '/cuba/customer/login/own';
	        this.logout = '/cuba/customer/logout/own';
	    }
	    return ApiEndPoints;
	})();
	module.exports = ApiEndPoints;


/***/ }
/******/ ]);