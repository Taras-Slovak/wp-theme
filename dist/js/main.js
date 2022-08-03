/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var getBody = document.querySelector('.body');
var getNav = document.querySelector('.nav');
var getBurger = document.querySelector('.burger');
getBurger.addEventListener('click', function () {
  getBurger.classList.toggle('active');
  getNav.classList.toggle('active');
  getBody.classList.toggle('active');
});

/***/ }),

/***/ "./src/blocks/components/cloud/cloud.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/cloud/cloud.js ***!
  \**********************************************/
/***/ (function() {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getCloudContent = document.querySelector('.cloud__content');
var tagList = ['Governments', 'Net', 'Neutrality', 'ukraine', 'News', 'Guides', 'Governments', 'ukraine', 'Networking', 'Open Source', 'Privacy', 'security', 'ukraine', 'bitcoin', 'bittorrent', 'ukraine', 'irc', 'news', 'privacy', 'programming', 'security', 'Copyright', 'war', 'News', 'Open Source', 'Privacy', 'Facebook', 'war', 'google', 'kingdom', 'china', 'surveillance', 'war', 'amazon', 'twitter', 'apple', 'samsung', 'china', 'surveillance', 'amazon', 'twitter', 'apple', 'samsung', 'ukraine', 'war', 'wpn', 'administration', 'oil', 'clay', 'chemistry', 'communication', 'activity', 'restaurant', 'perspective', 'bath', 'editor', 'guidance', 'bread', 'role', 'actor', 'wedding', 'writer', 'statement', 'family', 'grandmother', 'indication', 'member', 'variety', 'winner', 'family', 'grandmother', 'indication', 'member', 'variety', 'winner'];
var list = {};

function filterTags() {
  tagList.forEach(function (element) {
    list[element.toLowerCase()] = (list[element.toLowerCase()] || 0) + 1;
  });
  return list;
}

filterTags();

function generateTagsList() {
  for (var _i = 0, _Object$entries = Object.entries(list); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var linkTag = document.createElement('a');
    linkTag.classList.add("font-".concat(value));
    linkTag.href = '#';
    linkTag.innerHTML = key;
    getCloudContent.appendChild(linkTag);
  }
}

generateTagsList();

/***/ }),

/***/ "./src/blocks/components/message/message.js":
/*!**************************************************!*\
  !*** ./src/blocks/components/message/message.js ***!
  \**************************************************/
/***/ (function() {

"use strict";


var closeBtn = document.querySelector('.message__close');
var message = document.querySelector('.message');

closeBtn.onclick = function () {
  message.remove();
};

/***/ }),

/***/ "./src/blocks/components/posts/posts.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/posts/posts.js ***!
  \**********************************************/
/***/ (function() {

"use strict";


var createPosts = function createPosts() {
  var posts = "\n  <div class=\"post\" data-aos=\"zoom-in\">\n    <a href=\"#\" href class=\"post__img-link\">\n    <figure class=\"post__figure\">\n      <img  class=\"post__img\" class=\"post__img\"src=\"img/pic/posts/Bitmap-0.webp\" alt=\"post\">\n    </figure>\n    </a>\n    <div class=\"post__content\">\n      <a href=\"#\" class=\"post__title\">The Internet Cannot be Trusted \u2013 Beamsplitters, Backdoors, and Broken Promises</a>\n      <p class=\"post__txt\">Derek Zimmer <span>| JUL 25, 2018</span></p>\n      <div class=\"post__tags\"><a href=\"#\">Governments,</a><a href=\"#\">Networking,</a><a href=\"#\">Open Source, </a><a href=\"#\">Privacy, </a><a href=\"#\">Security    </a></div>\n      <div class=\"post__comments\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z\" stroke=\"#889099\" stroke-width=\"1.5\"></path>\n        </svg><span>0</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\" data-aos=\"zoom-in\">    \n    <a href=\"#\"  class=\"post__img-link\">\n      <figure class=\"post__figure\">\n        <img  class=\"post__img\"src=\"img/pic/posts/Bitmap-1.webp\" alt=\"post\">          \n      </figure>\n    </a>  \n\n    <div class=\"post__content\">\n      <a href=\"#\" class=\"post__title\">How to get cheaper flights using a VPN</a>\n      <p class=\"post__txt\">Jayson <span>| JUL 24, 2018</span></p>\n      <div class=\"post__tags\"><a href=\"#\">Guides </a></div>\n      <div class=\"post__comments\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z\" stroke=\"#889099\" stroke-width=\"1.5\"></path>\n        </svg><span>0</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"post\" data-aos=\"zoom-in\">\n    \n    <a href=\"#\" class=\"post__img-link\"> \n      <figure class=\"post__figure\">\n        <img class=\"post__img\"src=\"img/pic/posts/Bitmap-2.webp\" alt=\"post\">\n      </figure>\n    </a>\n    \n    <div class=\"post__content\">\n      <a href=\"#\" class=\"post__title\">Net Neutrality was repealed, but the fight is far from over</a>\n      <p class=\"post__txt\">Chris Miller <span>| JUL 22, 2018</span></p>\n      <div class=\"post__tags\"><a href=\"#\">Governments,</a><a href=\"#\">Net Neutrality,</a><a href=\"#\">News    </a></div>\n      <div class=\"post__comments\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.75001 11.3334V10.5834H4.00001H3.41667V3.41669H12.5833V10.5834H8.18667H8.00365L7.8412 10.6677L4.75001 12.2719V11.3334Z\" stroke=\"#889099\" stroke-width=\"1.5\"></path>\n        </svg><span>0    </span>\n      </div>\n    </div>\n  </div>\n";
  var getAllPosts = document.querySelector('.posts');
  var getBtn = document.querySelector('.older-posts');
  var counter = 3;

  function renderPosts() {
    var olderPosts = document.createElement('div');
    olderPosts.innerHTML = posts;
    getAllPosts.append(olderPosts);
  }

  function showEndPosts() {
    var message = document.createElement('div');
    message.className = 'end-posts';
    message.innerHTML = "<p>There are no more posts to show ! &#128562</p>";
    getAllPosts.append(message);
    getBtn.remove();
  }

  renderPosts();
  renderPosts();
  getBtn.addEventListener('click', function () {
    if (counter !== 0) {
      counter--;
      renderPosts();
    } else {
      showEndPosts();
    }
  });
};

createPosts();

var hoverPost = function hoverPost() {
  var main = document.querySelector('.main');
  var titles = document.querySelectorAll('.post__title');
  var images = document.querySelectorAll('.post__img');
  main.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('post__title')) {
      e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.add('img-hover');
      e.target.classList.add('title-hover');
    } else if (e.target.classList.contains('post__img')) {
      e.target.classList.add('img-hover');
      e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('title-hover');
    } else {
      titles.forEach(function (el) {
        el.classList.remove('title-hover');
      });
      images.forEach(function (el) {
        el.classList.remove('img-hover');
      });
    }
  });
};

hoverPost();

/***/ }),

/***/ "./src/blocks/components/search/search.js":
/*!************************************************!*\
  !*** ./src/blocks/components/search/search.js ***!
  \************************************************/
/***/ (function() {

"use strict";


function searchHovering() {
  var getInput = document.querySelector('.search__input');
  var body = document.querySelector('body');
  body.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('hovering')) {
      getInput.classList.add('shadow');
    } else {
      getInput.classList.remove('shadow');
    }
  });
}

searchHovering();

function moveSearchInput() {
  var getArticles = document.querySelector('.article'),
      getAside = document.querySelector('.aside'),
      getSearch = document.querySelector('.search');
  var width = window.innerWidth;

  if (width < 770) {
    getArticles.prepend(getSearch);
  } else {
    getAside.prepend(getSearch);
  }
}

moveSearchInput();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {

function moveElement() {
  var getFooterNav = document.querySelector('.footer__nav'),
      getSocial = document.querySelector('.footer__social'),
      getFooterAbout = document.querySelector('.footer__about');
  var width = window.innerWidth;

  if (width > 1200) {
    getFooterAbout.append(getSocial);
  } else {
    getFooterNav.append(getSocial);
  }
}

moveElement();
window.addEventListener('resize', moveElement);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/message/message */ "./src/blocks/components/message/message.js");
/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_message_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_posts_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/posts/posts */ "./src/blocks/components/posts/posts.js");
/* harmony import */ var _components_posts_posts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_posts_posts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/search/search */ "./src/blocks/components/search/search.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_search_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cloud_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/cloud/cloud */ "./src/blocks/components/cloud/cloud.js");
/* harmony import */ var _components_cloud_cloud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_cloud_cloud__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



aos__WEBPACK_IMPORTED_MODULE_2___default().init({
  duration: 1000,
  offset: 50,
  // offset (in px) from the original trigger point
  startEvent: 'DOMContentLoaded' // name of the event dispatched on the document, that AOS should initialize on

});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_theme"] = self["webpackChunkwp_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map