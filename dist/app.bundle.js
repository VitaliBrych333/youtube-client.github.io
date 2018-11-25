/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/check-widthScreen.js":
/*!********************************************!*\
  !*** ./js/components/check-widthScreen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkWidthScreen; });\n/* harmony import */ var _create_elementPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elementPage */ \"./js/components/create-elementPage.js\");\n/* harmony import */ var _create_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pagination */ \"./js/components/create-pagination.js\");\n\n\n\nfunction createPages(arrayObjectsResponse, end) {\n  Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 0, end);\n  Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, end);\n}\n\nfunction checkWidthScreen(arrayObjectsResponse) {\n  var widthScreen = window.innerWidth;\n\n  if (widthScreen >= 1353) {\n    createPages(arrayObjectsResponse, 4);\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    createPages(arrayObjectsResponse, 3);\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    createPages(arrayObjectsResponse, 2);\n  } else {\n    createPages(arrayObjectsResponse, 1);\n  }\n}\n\n//# sourceURL=webpack:///./js/components/check-widthScreen.js?");

/***/ }),

/***/ "./js/components/control-pages.js":
/*!****************************************!*\
  !*** ./js/components/control-pages.js ***!
  \****************************************/
/*! exports provided: controlScreen, pagination, swipeStart, swipeMove, swipeEnd, addMultipleListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlScreen\", function() { return controlScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pagination\", function() { return pagination; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeStart\", function() { return swipeStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeMove\", function() { return swipeMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeEnd\", function() { return swipeEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMultipleListeners\", function() { return addMultipleListeners; });\n/* harmony import */ var _create_elementPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elementPage */ \"./js/components/create-elementPage.js\");\n/* harmony import */ var _create_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-pagination */ \"./js/components/create-pagination.js\");\n\n\nvar indexPageActive = 0;\nvar numberValueElement = 0;\nfunction controlScreen(arrayObjectsResponse) {\n  document.querySelector('#pagination').innerHTML = '';\n  var viewsContent = document.querySelector('#answer>div:first-child>.about>p:nth-child(3)>#views').textContent;\n  var objStartNumber = arrayObjectsResponse.findIndex(function (obj) {\n    return obj.views === viewsContent;\n  });\n  var numActivePage = 0;\n  var numberElement = objStartNumber + 1;\n  var widthScreen = window.innerWidth;\n\n  if (widthScreen >= 1353) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 4);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 4);\n    numActivePage = Math.ceil(numberElement / 4) - 1;\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 3);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 3);\n    numActivePage = Math.ceil(numberElement / 3) - 1;\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 2);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 2);\n    numActivePage = Math.ceil(numberElement / 2) - 1;\n  } else {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, objStartNumber, 1);\n    Object(_create_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, 1, 1);\n    numActivePage = numberElement - 1;\n  }\n\n  if (numActivePage < 0) {\n    numActivePage = 0;\n  }\n\n  indexPageActive = numActivePage;\n  document.querySelector('#pagination>div.active').classList.remove('active');\n  document.querySelectorAll('#pagination>div')[numActivePage].classList.add('active');\n  return indexPageActive;\n}\nfunction pagination(arrayObjectsResponse, event) {\n  var numberPage = parseInt(event.target.textContent, 10);\n  var widthScreen = window.innerWidth;\n  document.querySelector('#pagination>div.active').classList.remove('active');\n  event.target.classList.add('active');\n  document.querySelector('#answer').innerHTML = '';\n  indexPageActive = numberPage - 1;\n\n  if (widthScreen >= 1353) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 4 * numberPage - 4, 4);\n    numberValueElement = 4 * indexPageActive;\n  } else if (widthScreen < 1353 && widthScreen >= 1019) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 3 * numberPage - 3, 3);\n    numberValueElement = 3 * indexPageActive;\n  } else if (widthScreen < 1019 && widthScreen >= 685) {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, 2 * numberPage - 2, 2);\n    numberValueElement = 2 * indexPageActive;\n  } else {\n    Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberPage - 1, 1);\n    numberValueElement = indexPageActive;\n  }\n}\nvar touchStartCoords = {\n  'x': -1,\n  'y': -1\n};\nvar touchEndCoords = {\n  'x': -1,\n  'y': -1\n};\nvar direction = 'undefined';\nvar startTime = 0;\nvar elapsedTime = 0;\nvar minDistanceXAxis = 30;\nvar maxDistanceYAxis = 30;\nvar maxAllowedTime = 1000;\nfunction swipeStart(e) {\n  e = e || window.event;\n  e = 'changedTouches' in e ? e.changedTouches[0] : e;\n  touchStartCoords = {\n    'x': e.pageX,\n    'y': e.pageY\n  };\n  startTime = new Date().getTime();\n}\nfunction swipeMove(e) {\n  e = e || window.event;\n  e.preventDefault();\n}\nfunction swipeEnd(arrayObjectsResponse, e) {\n  var numLastElem = arrayObjectsResponse.length - 1;\n  e = e || window.event;\n  e = 'changedTouches' in e ? e.changedTouches[0] : e;\n  touchEndCoords = {\n    'x': e.pageX - touchStartCoords.x,\n    'y': e.pageY - touchStartCoords.y\n  };\n  elapsedTime = new Date().getTime() - startTime;\n\n  if (elapsedTime <= maxAllowedTime) {\n    if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis) {\n      direction = touchEndCoords.x < 0 ? 'left' : 'right';\n      var widthScreenTouch = window.innerWidth;\n\n      switch (direction) {\n        case 'left':\n          indexPageActive += 1;\n\n          if (numberValueElement > numLastElem) {\n            numberValueElement = 0;\n            break;\n          } else if (widthScreenTouch >= 1353) {\n            numberValueElement += 4;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n          } else if (widthScreenTouch < 1353 && widthScreenTouch >= 1019) {\n            numberValueElement += 3;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n          } else if (widthScreenTouch < 1019 && widthScreenTouch >= 685) {\n            numberValueElement += 2;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n          } else {\n            numberValueElement += 1;\n\n            if (numberValueElement > numLastElem) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          }\n\n          break;\n\n        case 'right':\n          indexPageActive -= 1;\n\n          if (indexPageActive < 0) {\n            indexPageActive = 0;\n          }\n\n          if (numberValueElement <= 0 || numberValueElement > numLastElem) {\n            numberValueElement = 0;\n            break;\n          } else if (widthScreenTouch >= 1353) {\n            numberValueElement -= 4;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 4);\n          } else if (widthScreenTouch < 1353 && widthScreenTouch >= 1019) {\n            numberValueElement -= 3;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 3);\n          } else if (widthScreenTouch < 1019 && widthScreenTouch >= 685) {\n            numberValueElement -= 2;\n\n            if (numberValueElement < 0) {\n              numberValueElement = 0;\n              Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n              break;\n            }\n\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 2);\n          } else {\n            numberValueElement -= 1;\n            Object(_create_elementPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayObjectsResponse, numberValueElement, 1);\n          }\n\n          break;\n\n        default:\n          break;\n      }\n\n      if (indexPageActive > document.querySelectorAll('#pagination>div').length - 1) {\n        indexPageActive = 0;\n      }\n\n      document.querySelector('#pagination>div.active').classList.remove('active');\n      document.querySelectorAll('#pagination>div')[indexPageActive].classList.add('active');\n    }\n  }\n}\nfunction addMultipleListeners(el, s, fn) {\n  var evts = s.split(' ');\n\n  for (var i = 0, iLen = evts.length; i < iLen; i += 1) {\n    el.addEventListener(evts[i], fn, false);\n  }\n}\n\n//# sourceURL=webpack:///./js/components/control-pages.js?");

/***/ }),

/***/ "./js/components/create-btnNextChunk.js":
/*!**********************************************!*\
  !*** ./js/components/create-btnNextChunk.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createBtnNext; });\n/* harmony import */ var _create_responseArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-responseArray */ \"./js/components/create-responseArray.js\");\n/* harmony import */ var _request_viewsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-viewsCount */ \"./js/components/request-viewsCount.js\");\n/* harmony import */ var _check_widthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-widthScreen */ \"./js/components/check-widthScreen.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-pages */ \"./js/components/control-pages.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables */ \"./js/components/variables.js\");\n/* harmony import */ var _create_btnPrevChunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-btnPrevChunk */ \"./js/components/create-btnPrevChunk.js\");\n/* harmony import */ var _delete_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-buttons */ \"./js/components/delete-buttons.js\");\n/* harmony import */ var _create_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-main */ \"./js/components/create-main.js\");\n/* global gapi */\n\n\n\n\n\n\n\n\nfunction createBtnNext(arrayObjectsResponse, wordRequest) {\n  var btnNextClips = document.createElement('button');\n  btnNextClips.type = 'button';\n  btnNextClips.id = 'next';\n  btnNextClips.className = 'nav-pages';\n  btnNextClips.innerHTML = 'Next 15 <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>';\n  btnNextClips.addEventListener('click', nextPages.bind(null, arrayObjectsResponse, wordRequest));\n  document.querySelector('header').appendChild(btnNextClips);\n}\n\nfunction nextPages(arrayObjectsResponse, wordRequest) {\n  document.querySelector('#next').setAttribute('disabled', 'disabled');\n  Object(_create_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _getVariables = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      arrayResponse = _getVariables.arrayResponse;\n\n  var _getVariables2 = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      API_YOUTUBE = _getVariables2.API_YOUTUBE,\n      DISCOVERY_DOCS = _getVariables2.DISCOVERY_DOCS;\n\n  function nextChunk() {\n    var pageTokenNext = arrayObjectsResponse[0].nextPage;\n    gapi.client.init({\n      'apiKey': API_YOUTUBE,\n      'discoveryDocs': DISCOVERY_DOCS\n    }).then(function () {\n      return gapi.client.youtube.search.list({\n        maxResults: '15',\n        q: wordRequest,\n        part: 'snippet',\n        type: 'video',\n        pageToken: pageTokenNext,\n        fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode'\n      });\n    }).then(function (response) {\n      arrayResponse = response.result;\n      arrayObjectsResponse = Object(_create_responseArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayResponse);\n      var length = arrayObjectsResponse.length;\n\n      for (var i = 0; i < length; i += 1) {\n        Object(_request_viewsCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, i);\n      }\n\n      setTimeout(function () {\n        var targetElement = document.querySelector('#answer');\n        Object(_delete_buttons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        Object(_check_widthScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayObjectsResponse);\n        window.addEventListener('resize', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"controlScreen\"].bind(null, arrayObjectsResponse));\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousedown touchstart', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeStart\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousemove touchmove', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeMove\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mouseup touchend', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeEnd\"].bind(null, arrayObjectsResponse));\n        createBtnNext(arrayObjectsResponse, wordRequest);\n        Object(_create_btnPrevChunk__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrayObjectsResponse, wordRequest);\n      }, 1000);\n    }, function (reason) {\n      console.log(\"Error: \".concat(reason.result.error.message));\n    });\n  }\n\n  gapi.load('client', nextChunk.bind(null, arrayObjectsResponse, wordRequest));\n}\n\n//# sourceURL=webpack:///./js/components/create-btnNextChunk.js?");

/***/ }),

/***/ "./js/components/create-btnPrevChunk.js":
/*!**********************************************!*\
  !*** ./js/components/create-btnPrevChunk.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createBtnPrev; });\n/* harmony import */ var _create_responseArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-responseArray */ \"./js/components/create-responseArray.js\");\n/* harmony import */ var _request_viewsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-viewsCount */ \"./js/components/request-viewsCount.js\");\n/* harmony import */ var _check_widthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-widthScreen */ \"./js/components/check-widthScreen.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-pages */ \"./js/components/control-pages.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables */ \"./js/components/variables.js\");\n/* harmony import */ var _create_btnNextChunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-btnNextChunk */ \"./js/components/create-btnNextChunk.js\");\n/* harmony import */ var _delete_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-buttons */ \"./js/components/delete-buttons.js\");\n/* harmony import */ var _create_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-main */ \"./js/components/create-main.js\");\n/* global gapi */\n\n\n\n\n\n\n\n\nfunction createBtnPrev(arrayObjectsResponse, wordRequest) {\n  var btnPrevClips = document.createElement('button');\n  btnPrevClips.type = 'button';\n  btnPrevClips.id = 'prev';\n  btnPrevClips.className = 'nav-pages';\n  btnPrevClips.innerHTML = '<i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Prev 15 ';\n  btnPrevClips.addEventListener('click', prevPages.bind(null, arrayObjectsResponse, wordRequest));\n  document.querySelector('header').insertBefore(btnPrevClips, document.querySelector('#search'));\n}\n\nfunction prevPages(arrayObjectsResponse, wordRequest) {\n  document.querySelector('#prev').setAttribute('disabled', 'disabled');\n  Object(_create_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _getVariables = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      arrayResponse = _getVariables.arrayResponse;\n\n  var _getVariables2 = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      API_YOUTUBE = _getVariables2.API_YOUTUBE,\n      DISCOVERY_DOCS = _getVariables2.DISCOVERY_DOCS;\n\n  function nextChunk() {\n    var pageTokenPrev = arrayObjectsResponse[0].prevPage;\n    gapi.client.init({\n      'apiKey': API_YOUTUBE,\n      'discoveryDocs': DISCOVERY_DOCS\n    }).then(function () {\n      return gapi.client.youtube.search.list({\n        maxResults: '15',\n        q: wordRequest,\n        part: 'snippet',\n        type: 'video',\n        pageToken: pageTokenPrev,\n        fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode'\n      });\n    }).then(function (response) {\n      arrayResponse = response.result;\n      arrayObjectsResponse = Object(_create_responseArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayResponse);\n      var length = arrayObjectsResponse.length;\n\n      for (var i = 0; i < length; i += 1) {\n        Object(_request_viewsCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, i);\n      }\n\n      setTimeout(function () {\n        var targetElement = document.querySelector('#answer');\n        Object(_delete_buttons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        Object(_check_widthScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayObjectsResponse);\n        window.addEventListener('resize', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"controlScreen\"].bind(null, arrayObjectsResponse));\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousedown touchstart', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeStart\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousemove touchmove', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeMove\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mouseup touchend', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeEnd\"].bind(null, arrayObjectsResponse));\n        Object(_create_btnNextChunk__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrayObjectsResponse, wordRequest);\n\n        if (arrayObjectsResponse[0].prevPage !== 'none') {\n          createBtnPrev(arrayObjectsResponse, wordRequest);\n        }\n      }, 1000);\n    }, function (reason) {\n      console.log(\"Error: \".concat(reason.result.error.message));\n    });\n  }\n\n  gapi.load('client', nextChunk.bind(null, arrayObjectsResponse, wordRequest));\n}\n\n//# sourceURL=webpack:///./js/components/create-btnPrevChunk.js?");

/***/ }),

/***/ "./js/components/create-btnSearch.js":
/*!*******************************************!*\
  !*** ./js/components/create-btnSearch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createBtnSearch; });\nfunction createBtnSearch() {\n  document.querySelector('#search').remove();\n  var btnSearch = document.createElement('button');\n  btnSearch.id = 'search';\n  btnSearch.type = 'button';\n  btnSearch.innerHTML = 'Search <i class=\"fa fa-search\" aria-hidden=\"true\"></i>';\n\n  if (document.querySelector('#next')) {\n    document.querySelector('header').insertBefore(btnSearch, document.querySelector('#next'));\n  } else {\n    document.querySelector('header').appendChild(btnSearch);\n  }\n}\n\n//# sourceURL=webpack:///./js/components/create-btnSearch.js?");

/***/ }),

/***/ "./js/components/create-elementPage.js":
/*!*********************************************!*\
  !*** ./js/components/create-elementPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createDivs; });\nfunction createDivs(arrayObjectsResponse, start, count) {\n  document.querySelector('#answer').innerHTML = '';\n\n  for (var i = start; i < count + start; i += 1) {\n    if (arrayObjectsResponse[i] === undefined) break;else {\n      var div = document.createElement('div');\n      div.innerHTML = \"\\n              <div class=\\\"picture\\\">\\n                <img src=\".concat(arrayObjectsResponse[i].img, \" alt=\\\"img\\\">\\n              </div>\\n              <div class=\\\"title\\\">\\n                <a href=\\\"https://www.youtube.com/watch?v=\").concat(arrayObjectsResponse[i].id, \"\\\">\").concat(arrayObjectsResponse[i].title, \"</a>\\n              </div>\\n              <div class=\\\"about\\\">\\n                <p><i class=\\\"fa fa-user\\\" aria-hidden=\\\"true\\\"></i><span id=\\\"author\\\">\").concat(arrayObjectsResponse[i].author, \"</span></p>\\n                <p><i class=\\\"fa fa-calendar\\\" aria-hidden=\\\"true\\\"></i><span id=\\\"date\\\">\").concat(arrayObjectsResponse[i].date, \"</span></p>\\n                <p><i class=\\\"fa fa-eye\\\" aria-hidden=\\\"true\\\"></i><span id=\\\"views\\\">\").concat(arrayObjectsResponse[i].views, \"</span></p>      \\n                <p class=\\\"description\\\">\").concat(arrayObjectsResponse[i].description, \"</p>\\n              </div>\");\n      div.classList.add('item');\n      document.querySelector('#answer').appendChild(div);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/components/create-elementPage.js?");

/***/ }),

/***/ "./js/components/create-main.js":
/*!**************************************!*\
  !*** ./js/components/create-main.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createMain; });\nfunction createMain() {\n  if (document.querySelector('main')) {\n    document.querySelector('main').remove();\n  }\n\n  var main = document.createElement('main');\n  main.innerHTML = \"<div class=\\\"answer-block\\\" id=\\\"answer\\\"></div>\\n                      <div class=\\\"paging\\\" id=\\\"pagination\\\"></div>\";\n  document.querySelector('body').appendChild(main);\n  document.querySelector('#pagination').innerHTML = '';\n}\n\n//# sourceURL=webpack:///./js/components/create-main.js?");

/***/ }),

/***/ "./js/components/create-pagination.js":
/*!********************************************!*\
  !*** ./js/components/create-pagination.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createPagination; });\n/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-page */ \"./js/components/event-page.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-pages */ \"./js/components/control-pages.js\");\n\n\nfunction createPagination(arrayObjectsResponse, start, count) {\n  var countPages = Math.round(arrayObjectsResponse.length / count);\n\n  for (var i = start; i <= countPages; i += 1) {\n    var div = document.createElement('div');\n    div.classList.add('page');\n\n    if (i === 1) {\n      div.classList.add('active');\n    }\n\n    div.addEventListener('mousedown', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"showPage\"]);\n    div.addEventListener('mouseup', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"hidePage\"]);\n    div.addEventListener('mouseout', _event_page__WEBPACK_IMPORTED_MODULE_0__[\"hidePage\"]);\n    div.addEventListener('mouseup', _control_pages__WEBPACK_IMPORTED_MODULE_1__[\"pagination\"].bind(null, arrayObjectsResponse));\n    div.innerHTML = \"\".concat(i, \"<span class=\\\"popuptext\\\" onmousedown=\\\"event.stopImmediatePropagation()\\\"\\n                        onmouseup=\\\"event.stopImmediatePropagation()\\\" onmouseout=\\\"event.stopImmediatePropagation()\\\">Go to page \").concat(i, \"</span>\");\n    document.querySelector('#pagination').appendChild(div);\n  }\n}\n\n//# sourceURL=webpack:///./js/components/create-pagination.js?");

/***/ }),

/***/ "./js/components/create-responseArray.js":
/*!***********************************************!*\
  !*** ./js/components/create-responseArray.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newArrayResponse; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./js/components/variables.js\");\n\n\nvar _getVariables = Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    arrayObjectsResponse = _getVariables.arrayObjectsResponse;\n\nfunction newArrayResponse(arrayResponse) {\n  var length = arrayResponse.items.length;\n\n  for (var i = 0; i < length; i += 1) {\n    arrayObjectsResponse[i] = {\n      img: arrayResponse.items[i].snippet.thumbnails.medium.url,\n      id: arrayResponse.items[i].id.videoId,\n      title: arrayResponse.items[i].snippet.title,\n      author: arrayResponse.items[i].snippet.channelTitle,\n      date: arrayResponse.items[i].snippet.publishedAt.substring(0, 10),\n      description: arrayResponse.items[i].snippet.description,\n      nextPage: arrayResponse.nextPageToken,\n      prevPage: arrayResponse.prevPageToken || 'none'\n    };\n  }\n\n  return arrayObjectsResponse;\n}\n\n//# sourceURL=webpack:///./js/components/create-responseArray.js?");

/***/ }),

/***/ "./js/components/delete-buttons.js":
/*!*****************************************!*\
  !*** ./js/components/delete-buttons.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteBtn; });\nfunction deleteBtn() {\n  document.querySelector('#pagination').innerHTML = '';\n\n  if (document.querySelector('#next')) {\n    document.querySelector('#next').remove();\n  }\n\n  if (document.querySelector('#prev')) {\n    document.querySelector('#prev').remove();\n  }\n}\n\n//# sourceURL=webpack:///./js/components/delete-buttons.js?");

/***/ }),

/***/ "./js/components/event-page.js":
/*!*************************************!*\
  !*** ./js/components/event-page.js ***!
  \*************************************/
/*! exports provided: showPage, hidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPage\", function() { return showPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePage\", function() { return hidePage; });\nfunction showPage(event) {\n  event.target.querySelector('span').classList.add('show');\n}\nfunction hidePage(event) {\n  event.target.querySelector('span').classList.remove('show');\n}\n\n//# sourceURL=webpack:///./js/components/event-page.js?");

/***/ }),

/***/ "./js/components/request-search.js":
/*!*****************************************!*\
  !*** ./js/components/request-search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\n/* harmony import */ var _create_responseArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-responseArray */ \"./js/components/create-responseArray.js\");\n/* harmony import */ var _request_viewsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-viewsCount */ \"./js/components/request-viewsCount.js\");\n/* harmony import */ var _check_widthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-widthScreen */ \"./js/components/check-widthScreen.js\");\n/* harmony import */ var _control_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-pages */ \"./js/components/control-pages.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables */ \"./js/components/variables.js\");\n/* harmony import */ var _create_btnNextChunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-btnNextChunk */ \"./js/components/create-btnNextChunk.js\");\n/* harmony import */ var _delete_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-buttons */ \"./js/components/delete-buttons.js\");\n/* harmony import */ var _create_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-main */ \"./js/components/create-main.js\");\n/* harmony import */ var _create_btnSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-btnSearch */ \"./js/components/create-btnSearch.js\");\n/* global gapi */\n\n\n\n\n\n\n\n\n\nfunction search() {\n  document.querySelector('#search').setAttribute('disabled', 'disabled');\n  Object(_create_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  Object(_delete_buttons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  var _getVariables = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      arrayResponse = _getVariables.arrayResponse;\n\n  var _getVariables2 = Object(_variables__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      API_YOUTUBE = _getVariables2.API_YOUTUBE,\n      DISCOVERY_DOCS = _getVariables2.DISCOVERY_DOCS;\n\n  function requestSearch() {\n    var wordRequest = document.querySelector('input').value;\n    gapi.client.init({\n      'apiKey': API_YOUTUBE,\n      'discoveryDocs': DISCOVERY_DOCS\n    }).then(function () {\n      return gapi.client.youtube.search.list({\n        maxResults: '15',\n        q: wordRequest,\n        part: 'snippet',\n        type: 'video',\n        fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode'\n      });\n    }).then(function (response) {\n      arrayResponse = response.result;\n      var arrayObjectsResponse = Object(_create_responseArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayResponse);\n      var length = arrayObjectsResponse.length;\n\n      for (var i = 0; i < length; i += 1) {\n        Object(_request_viewsCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arrayObjectsResponse, i);\n      }\n\n      setTimeout(function () {\n        var targetElement = document.querySelector('main');\n        Object(_delete_buttons__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        Object(_check_widthScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayObjectsResponse);\n        window.addEventListener('resize', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"controlScreen\"].bind(null, arrayObjectsResponse));\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousedown touchstart', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeStart\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mousemove touchmove', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeMove\"]);\n        Object(_control_pages__WEBPACK_IMPORTED_MODULE_3__[\"addMultipleListeners\"])(targetElement, 'mouseup touchend', _control_pages__WEBPACK_IMPORTED_MODULE_3__[\"swipeEnd\"].bind(null, arrayObjectsResponse));\n        Object(_create_btnNextChunk__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrayObjectsResponse, wordRequest);\n        Object(_create_btnSearch__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n        document.querySelector('#search').addEventListener('click', search);\n      }, 1000);\n    }, function (reason) {\n      console.log(\"Error: \".concat(reason.result.error.message));\n    });\n  }\n\n  gapi.load('client', requestSearch);\n}\n\n//# sourceURL=webpack:///./js/components/request-search.js?");

/***/ }),

/***/ "./js/components/request-viewsCount.js":
/*!*********************************************!*\
  !*** ./js/components/request-viewsCount.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return requestViews; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./js/components/variables.js\");\n/* global gapi */\n\nfunction requestViews(arrayObjectsResponse, i) {\n  var _getVariables = Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n      API_YOUTUBE = _getVariables.API_YOUTUBE,\n      DISCOVERY_DOCS = _getVariables.DISCOVERY_DOCS;\n\n  function setViewCount(responseViewCount) {\n    arrayObjectsResponse[i].views = responseViewCount;\n  }\n\n  function viewsCount() {\n    gapi.client.init({\n      'apiKey': API_YOUTUBE,\n      'discoveryDocs': DISCOVERY_DOCS\n    }).then(function () {\n      return gapi.client.youtube.videos.list({\n        id: arrayObjectsResponse[i].id,\n        part: 'statistics',\n        fields: 'items/statistics/viewCount'\n      });\n    }).then(function (response) {\n      var responseViewCount = response.result.items[0].statistics.viewCount;\n      setViewCount(responseViewCount, i);\n    }, function (reason) {\n      console.log(\"Error: \".concat(reason.result.error.message));\n    });\n  }\n\n  gapi.load('client', viewsCount);\n}\n\n//# sourceURL=webpack:///./js/components/request-viewsCount.js?");

/***/ }),

/***/ "./js/components/variables.js":
/*!************************************!*\
  !*** ./js/components/variables.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getVariables; });\nfunction getVariables() {\n  var arrayObjectsResponse = [];\n  var arrayResponse = [];\n  var API_YOUTUBE = 'AIzaSyCVrwwoyqYxMZ4xXDIQnZVaGFkyLlJO2AM';\n  var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];\n  return {\n    arrayObjectsResponse: arrayObjectsResponse,\n    arrayResponse: arrayResponse,\n    API_YOUTUBE: API_YOUTUBE,\n    DISCOVERY_DOCS: DISCOVERY_DOCS\n  };\n}\n\n//# sourceURL=webpack:///./js/components/variables.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_request_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/request-search */ \"./js/components/request-search.js\");\n\n\nwindow.onload = function () {\n  var head = document.createElement('header');\n  head.innerHTML = \"<h1>Youtube client</h1>\\n    <p>Please, set name of the clip for search</p>\\n    <form id=\\\"data\\\">\\n      <input type=\\\"text\\\" placeholder=\\\"Clip name\\\">\\n    </form>   \\n    <button id=\\\"search\\\" type=\\\"button\\\" form=\\\"data\\\">Search <i class=\\\"fa fa-search\\\" aria-hidden=\\\"true\\\"></i></button>\";\n  document.querySelector('body').appendChild(head);\n  document.querySelector('#search').addEventListener('click', _components_request_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });