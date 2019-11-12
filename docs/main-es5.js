(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row  mx-0 \">\r\n    <div class=\"col-sm-2 lateralCaract\">\r\n        <img src=\"./assets/logo.png\" alt=\"\" class=\"logoSFy\">\r\n        <nav class=\"nav flex-column navbarLateral\">\r\n            <a routerLink=\"/home\" class=\"nav-link  pointer\"><i class=\"fas fa-home\"></i>Inicio</a>\r\n            <a routerLink=\"/search\" class=\"nav-link  pointer\"><i class=\"fas fa-search\"></i>Buscar</a>\r\n            <a routerLink=\"/library\"  class=\"nav-link current pointer\"><i class=\"fas fa-book-open\"></i>Tu biblioteca</a>\r\n            <a class=\"nav-link\">PLAYLIST</a>\r\n            <a class=\"nav-link\"><button class=\"buttonMas\">+</button> Crear playlist</a>\r\n        </nav>\r\n\r\n        <div class=\"overflow-auto barraPlaylist\">\r\n            <ul>\r\n                <li *ngFor= \"let element of listaFavoritas\">\r\n            \r\n                   Titulo: {{element.title}} y Autor: {{element.autor}}\r\n\r\n                </li>\r\n            \r\n            \r\n            \r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-10  lateralGlobal \">\r\n\r\n        <h1 style=\"margin: 50px;  font-weight: bold;\">Elije tus canciones favoritas</h1>\r\n        \r\n\r\n        <div class=\"container\">\r\n            <div class=\"row \">\r\n                <div class=\"col-sm-12 col-md-12 col-lg-12 \" style=\"margin: 50px\" *ngFor='let song of listaCanciones, let i = index'>\r\n                    <div class=\" mb-3\" style=\"max-width: 540px;\">\r\n                        <div class=\"row no-gutters\">\r\n                          <div class=\"col-md-4 lateralGlobal\">\r\n                            <img routerLink=\"/player/{{song.id}}\" src='./assets/{{song.imagen}}' class=\"noBorderBlue pointer imagenCover\"\r\n                        alt=\"...\">\r\n                          </div>\r\n                          <div class=\"col-md-8 lateralGlobal\">\r\n                            <div class=\"card-body\">\r\n                              <h5 class=\"card-title\">{{song.autor}}</h5>\r\n                              <p class=\"card-text\">{{song.title}}</p>\r\n                              <i class=\"far fa-heart\" (click)=\"addFavoritas(song, i)\"></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row \">\r\n                <div class=\"col-sm-12, col-md-12, col-lg-12\" *ngFor='let song of songList'>\r\n\r\n                    <img routerLink=\"/player/{{song.id}}\" src='./assets/{{song.imagen}}' class=\"noBorderBlue pointer imagenCover\"\r\n                        alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                        <p style=\"font-weight: bold\">{{song.autor}}</p>\r\n                        <p>{{song.title}}</p>\r\n                    </div>\r\n                    <i class=\"far fa-heart corazon\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        \r\n\r\n\r\n    </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mx-0 fondobackgroung \">\r\n  <div class=\"col-sm-2 lateralCaract\">\r\n    <img src=\"./assets/logo.png\" alt=\"\" class=\"logoSFy\">\r\n    <nav class=\"nav flex-column navbarLateral noBorderBlue\">\r\n      <a routerLink=\"/home\" class=\"nav-link current pointer\"><i class=\"fas fa-home\"></i>Inicio</a>\r\n      <a routerLink=\"/search\" class=\"nav-link pointer\"><i class=\"fas fa-search\"></i>Buscar</a>\r\n      <a routerLink=\"/library\" class=\"nav-link\"><i class=\"fas fa-book-open\"></i>Tu biblioteca</a>\r\n      <a class=\"nav-link\">PLAYLIST</a>\r\n      <a class=\"nav-link\"><button class=\"buttonMas\">+</button> Crear playlist</a>\r\n    </nav>\r\n\r\n    <div class=\"overflow-auto barraPlaylist\">\r\n      <ul>\r\n        <li *ngFor= \"let element of listaFavoritas\">\r\n    \r\n           Titulo: {{element.title}} y Autor: {{element.autor}}\r\n\r\n        </li>\r\n    \r\n    \r\n    \r\n    </ul>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"col-2\">\r\n    <img src=\"./assets/{{songList[id].imagen}}\" class=\"card-img-top imagenCover\" alt=\"...\">\r\n    <h5 style=\"text-align: center; color: black\" class=\"\">{{songList[id].autor}}</h5>\r\n    <p style=\"text-align: center; color: black\" class=\"\">{{songList[id].title}}</p>\r\n    <button class=\"btn btn-primary btn-lg rounded-pill botonReproducir mx-auto\"\r\n      onclick=\"document.getElementById('idPlayer').play()\">Reproducir</button>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <h1 style=\"text-align: center; margin: 50px; font-weight: bold; color: black;\">Lyrics</h1>\r\n    <div class=\"lyric angular-with-newlines\" ng-repeat=\"item in items\">\r\n      <pre>{{songList[id].lyrics}}</pre>\r\n    </div>\r\n    <!-- <p class=\"lyric\">{{songList[id].lyrics}}</p> -->\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"row mx-0  reproductor\">\r\n\r\n  <div class=\"col-4\" style=\"text-align: center\">\r\n    <div class=\"card mb-3 fondoReproductor \" style=\"max-width: 540px;\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-2\">\r\n          <img src=\"./assets/{{songList[id].imagen}}\" class=\"card-img imagenReproductor\" alt=\"...\">\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{songList[id].title}}</h5>\r\n            <p class=\"card-text\">{{songList[id].autor}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"col-4 \">\r\n    <!-- <img src='../../assets/{{songList[id].imagen}}' class=\"imagenCover\"> -->\r\n    <audio id=\"idPlayer\" controls src=\"./assets/{{songList[id].cancion}}\" class=\"noBorderBlue\" preload=\"auto\"></audio>\r\n  </div>\r\n  <div class=\"col-4\"></div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row  mx-0 \">\r\n    <div class=\"col-sm-2 lateralCaract\">\r\n        <img src=\"./assets/logo.png\" alt=\"\" class=\"logoSFy\">\r\n        <nav class=\"nav flex-column navbarLateral\">\r\n            <a routerLink=\"/home\" class=\"nav-link  pointer\"><i class=\"fas fa-home\"></i>Inicio</a>\r\n            <a routerLink=\"/search\" class=\"nav-link current pointer\"><i class=\"fas fa-search\"></i>Buscar</a>\r\n            <a routerLink=\"/library\"  class=\"nav-link\"><i class=\"fas fa-book-open\"></i>Tu biblioteca</a>\r\n            <a class=\"nav-link\">PLAYLIST</a>\r\n            <a class=\"nav-link\"><button class=\"buttonMas\">+</button> Crear playlist</a>\r\n        </nav>\r\n\r\n        <div class=\"overflow-auto barraPlaylist\">\r\n            <ul>\r\n                <li *ngFor= \"let element of listaFavoritas\">\r\n            \r\n                   Titulo: {{element.title}} y Autor: {{element.autor}}\r\n\r\n                </li>\r\n            \r\n            \r\n            \r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-10  lateralGlobal \">\r\n\r\n        <h1 style=\"margin: 50px;  font-weight: bold;\">Search</h1>\r\n        \r\n        <input class=\"inputStyle \" type=\"text\" placeholder=\"Busca artistas, canciones o podcast\">\r\n        <h1 style=\"margin: 50px;  font-weight: bold;\">Tus géneros más escuchados</h1>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img class=\"imagenCategoria pointer\" src=\"./assets/POP.jpg\" alt=\"\">\r\n                <img class=\"imagenCategoria pointer\" src=\"./assets/ROCK.jpg\" alt=\"\">\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n\r\n                <img class=\"imagenCategoria pointer\" src=\"./assets/INDIE.jpg\" alt=\"\">\r\n                <img  class=\"imagenCategoria pointer\" src=\"./assets/HIP HOP.jpg\" alt=\"\">\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row  mx-0 \">\r\n    <div class=\"col-sm-2 lateralCaract\">\r\n        <img src=\"./assets/logo.png\" alt=\"\" class=\"logoSFy\">\r\n        <nav class=\"nav flex-column navbarLateral\">\r\n            <a routerLink=\"/home\" class=\"nav-link current pointer\"><i class=\"fas fa-home\"></i>Inicio</a>\r\n            <a routerLink=\"/search\" class=\"nav-link pointer\"><i class=\"fas fa-search\"></i>Buscar</a>\r\n            <a routerLink=\"/library\" class=\"nav-link\"><i class=\"fas fa-book-open\"></i>Tu biblioteca</a>\r\n            <a class=\"nav-link\">PLAYLIST</a>\r\n            <a class=\"nav-link\"><button class=\"buttonMas\">+</button> Crear playlist</a>\r\n        </nav>\r\n\r\n        <div class=\"overflow-auto barraPlaylist\">\r\n            <ul>\r\n                <li *ngFor= \"let element of listaFavoritas\">\r\n            \r\n                   Titulo: {{element.title}} y Autor: {{element.autor}}\r\n\r\n                </li>\r\n            \r\n            \r\n            \r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-10  lateralGlobal\">\r\n        <div class=\"row \">\r\n            <div class=\"col-sm \">\r\n                <ul class=\"nav navbarBorder justify-content-center\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active current\">SELECCIONADOS</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\">PODCAST</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\">LISTA DE EXITOS</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\">GENEROS Y ESTADOS DE ANIMO</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\">NOVEDADES</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row \">\r\n            <div class=\"col-sm\">\r\n                <h1 style=\"margin: 50px;  font-weight: bold;\">Recently played</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row \">\r\n                <div class=\"col-sm-6, col-md-4, col-lg-2\" *ngFor='let song of songList'>\r\n\r\n                    <img routerLink=\"/player/{{song.id}}\" src='./assets/{{song.imagen}}' class=\"noBorderBlue pointer imagenCover\"\r\n                        alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                        <p style=\"font-weight: bold\">{{song.autor}}</p>\r\n                        <p>{{song.title}}</p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row \">\r\n            <div class=\"col-sm\">\r\n                <h1 style=\"margin: 50px; font-weight: bold;\">Tus canciones favoritas</h1>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row \">\r\n                <div class=\"col-sm-6, col-md-4, col-lg-2\" *ngFor='let song of songList'>\r\n\r\n                    <img routerLink=\"/player/{{song.id}}\" src='./assets/{{song.imagen}}' class=\"noBorderBlue pointer imagenCover\"\r\n                        alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                        <p style=\"font-weight: bold\">{{song.autor}}</p>\r\n                        <p>{{song.title}}</p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"row border mx-0 reproductor\">\r\n    <div class=\"col-12\">\r\n        <img src='/assets/{{songList[id].imagen}}' class=\"imagenCover\">\r\n         <audio src=\"...\" preload=\"auto\"></audio> \r\n    </div>\r\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'musicFy';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
            /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
            var routerConfig = [
                { path: '', component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { path: 'home', component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
                { path: 'library', component: _library_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"] },
                { path: 'songList', component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { path: 'player/:id', component: _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"] },
                { path: '**', component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] } // vista para la página 404]
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"],
                        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                        _library_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routerConfig, { useHash: true })
                    ],
                    providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/library/library.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/library/library.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbarBorder nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarBorder a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarBorder a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarBorder .current {\r\n    border-bottom:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n.navbarLateral nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarLateral a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarLateral a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarLateral .current {\r\n    border-left:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n/* .buttonMas{\r\n    background-color: rgb(155, 155, 155);\r\n} */\r\n\r\n.lateralCaract{\r\n    background-color: black !important;\r\n\r\n\r\n    \r\n}\r\n\r\n.lateralGlobal {\r\n    background-color: rgb(35, 35, 35);\r\n}\r\n\r\n.logoSFy{\r\n    width: 140px;\r\n    height: 50px;\r\n}\r\n\r\n.imagenCover{\r\n    width: 160px;\r\n}\r\n\r\n.cardbackgroung {\r\n    background-color: black;\r\n}\r\n\r\n.reproductor {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.barraPlaylist{\r\n    font-size: 14px;\r\n    color: #A3A3A3;\r\n    height: 300px;\r\n\r\n}\r\n\r\n.barraPlaylist p{\r\n    margin-bottom: 0;\r\n\r\n}\r\n\r\n.noBorderBlue:focus{\r\n    border: none;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\na{\r\n    font-weight: bolder;\r\n    color: white !important;\r\n}\r\n\r\n/* ::-webkit-scrollbar{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);\r\n    border-radius: 10px;\r\n    background-color: #CCCCCC;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 10px;\r\n    background-color: #A3A3A3;\r\n    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)\r\n} */\r\n\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background-color: #A3A3A3; \r\n    background-image: -webkit-linear-gradient(90deg,rgba(255, 255, 255, .2) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%,transparent 75%,transparent)\r\n}\r\n\r\n.inputStyle{\r\n\r\n    width: 100%;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid #000000;\r\n    padding: 0 4px 0 4px;\r\n\r\n}\r\n\r\n.imagenCategoria{\r\n    width: 500px;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    border-radius: 10px;\r\n    padding: 0 4px 0 4px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7R0FNRzs7QUFDSDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQ0FBa0M7QUFDdEM7O0FBRUE7Ozs7OztHQU1HOztBQUNIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUNBOztHQUVHOztBQUlIOztHQUVHOztBQUVIO0lBQ0ksa0NBQWtDOzs7O0FBSXRDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBLFVBQVUsZUFBZSxDQUFDOztBQUUxQjtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFHZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFHWixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyQm9yZGVyIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbn1cclxuXHJcbi8qIC5uYXZiYXJCb3JkZXIgYSB7XHJcbiAgICBwYWRkaW5nOiAuOCUgMiU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjsgXHJcbn0gKi9cclxuLm5hdmJhckJvcmRlciBhOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyBcclxufVxyXG4ubmF2YmFyQm9yZGVyIC5jdXJyZW50IHtcclxuICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkIHJnYigyOSwgMTg1LCA4NCk7XHJcbn1cclxuLyogLm5hdmJhckJvcmRlciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTg1LCA4NCk7XHJcbn0gKi9cclxuXHJcbi5uYXZiYXJMYXRlcmFsIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbn1cclxuXHJcbi8qIC5uYXZiYXJMYXRlcmFsIGEge1xyXG4gICAgcGFkZGluZzogLjglIDIlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcywgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7IFxyXG59ICovXHJcbi5uYXZiYXJMYXRlcmFsIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IFxyXG59XHJcbi5uYXZiYXJMYXRlcmFsIC5jdXJyZW50IHtcclxuICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCByZ2IoMjksIDE4NSwgODQpO1xyXG59XHJcbi8qIC5uYXZiYXJCb3JkZXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE4NSwgODQpO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi8qIC5idXR0b25NYXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxNTUsIDE1NSk7XHJcbn0gKi9cclxuXHJcbi5sYXRlcmFsQ2FyYWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5sYXRlcmFsR2xvYmFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzUsIDM1KTtcclxufVxyXG5cclxuLmxvZ29TRnl7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbWFnZW5Db3ZlcntcclxuICAgIHdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLmNhcmRiYWNrZ3JvdW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucmVwcm9kdWN0b3Ige1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gXHJcbn0gXHJcblxyXG4uYmFycmFQbGF5bGlzdHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjQTNBM0EzO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbn1cclxuXHJcbi5iYXJyYVBsYXlsaXN0IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxufVxyXG5cclxuLm5vQm9yZGVyQmx1ZTpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuXHJcbmF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0EzQTM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCxyZ2JhKDAsIDAsIDAsIDAuNCkgNTAlLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50KVxyXG59ICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzQTNBMzsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSA1MCUscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudClcclxufVxyXG5cclxuLmlucHV0U3R5bGV7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIHBhZGRpbmc6IDAgNHB4IDAgNHB4O1xyXG5cclxufVxyXG5cclxuLmltYWdlbkNhdGVnb3JpYXtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCA0cHggMCA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/library/library.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/library/library.component.ts ***!
          \**********************************************/
        /*! exports provided: LibraryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () { return LibraryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var LibraryComponent = /** @class */ (function () {
                function LibraryComponent(_data) {
                    this._data = _data;
                    this.listaCanciones = this._data.listaCanciones;
                    this.listaFavoritas = this._data.ListaFavoritas;
                }
                LibraryComponent.prototype.addFavoritas = function (item, posicion) {
                    this._data.addFavoritas(item);
                    this._data.deleteFav(posicion);
                };
                return LibraryComponent;
            }());
            LibraryComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-library',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/library/library.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")).default]
                })
            ], LibraryComponent);
            /***/ 
        }),
        /***/ "./src/app/player/player.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/player/player.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fondobackgroung{\r\n    background-image: url(\"http://www.kanoalvarez.cl/wp-content/uploads/2017/08/Art-wallpaper-Background-Color-7-wallpaper-1920x1200-wallpaper-...-1.jpg\");\r\n    /* background-color: black; */\r\n    background-size: cover;\r\n\r\n    color: white;\r\n\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\na {\r\n    color:white !important;\r\n}\r\n\r\n.botonReproducir{\r\n    background-color: rgb(29, 185, 84);\r\n    border: none;\r\n    color: white;\r\n    width: 200px;\r\n}\r\n\r\n.noBorderBlue:focus{\r\n    border: none;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.imagenCover{\r\n    width: 180px;\r\n    margin: 50px;\r\n}\r\n\r\n.navbarBorder nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n.navbarBorder a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarBorder .current {\r\n    border-bottom:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n.lateralCaract{\r\n    background-color: black !important;\r\n\r\n\r\n    \r\n}\r\n\r\n.lateralGlobal {\r\n    background-color: rgb(35, 35, 35);\r\n}\r\n\r\n.logoSFy{\r\n    width: 140px;\r\n    height: 50px;\r\n}\r\n\r\n.imagenCover{\r\n    width: 160px;\r\n}\r\n\r\n.cardbackgroung {\r\n    background-color: black;\r\n}\r\n\r\n.reproductor {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    \r\n \r\n}\r\n\r\n.barraPlaylist{\r\n    font-size: 14px;\r\n    color: #A3A3A3;\r\n    height: 300px;\r\n\r\n}\r\n\r\n.barraPlaylist p{\r\n    margin-bottom: 0;\r\n\r\n}\r\n\r\n.fondoReproductor{\r\n    background-color: black;\r\n}\r\n\r\n.imagenReproductor {\r\n    width: 80px;\r\n}\r\n\r\n.lyric{\r\n    font-size: 20px;\r\n    text-align: justify;\r\n    margin: 50px;\r\n    padding: 30px;\r\n    color: white !important;\r\n}\r\n\r\n/* ::-webkit-scrollbar{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);\r\n    border-radius: 10px;\r\n    background-color: #CCCCCC;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 10px;\r\n    background-color: #A3A3A3;\r\n    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)\r\n} */\r\n\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background-color: #A3A3A3; \r\n    background-image: -webkit-linear-gradient(90deg,rgba(255, 255, 255, .2) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%,transparent 75%,transparent)\r\n}\r\n\r\na{\r\n    font-weight: bolder;\r\n}\r\n\r\n#idPlayer{\r\n    width: 200%;\r\n    margin: 30px;\r\n}\r\n\r\n.angular-with-newlines {\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.pre {\r\n    color: white !important;\r\n    font-size: 20px;\r\n    text-align: justify;\r\n    margin: 50px;\r\n    padding: 30px;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0pBQXNKO0lBQ3RKLDZCQUE2QjtJQUM3QixzQkFBc0I7O0lBRXRCLFlBQVk7O0FBRWhCOztBQUVBLFVBQVUsZUFBZSxDQUFDOztBQUUxQjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBSUE7SUFDSSxrQ0FBa0M7Ozs7QUFJdEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHOztBQUVIO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvYmFja2dyb3VuZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cua2Fub2FsdmFyZXouY2wvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDgvQXJ0LXdhbGxwYXBlci1CYWNrZ3JvdW5kLUNvbG9yLTctd2FsbHBhcGVyLTE5MjB4MTIwMC13YWxscGFwZXItLi4uLTEuanBnXCIpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3RvblJlcHJvZHVjaXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE4NSwgODQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiAgICBcclxuLm5vQm9yZGVyQmx1ZTpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2VuQ292ZXJ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXJCb3JkZXIgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxufVxyXG5cclxuLm5hdmJhckJvcmRlciBhOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyBcclxufVxyXG4ubmF2YmFyQm9yZGVyIC5jdXJyZW50IHtcclxuICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkIHJnYigyOSwgMTg1LCA4NCk7XHJcbn1cclxuXHJcblxyXG5cclxuLmxhdGVyYWxDYXJhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuLmxhdGVyYWxHbG9iYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xyXG59XHJcblxyXG4ubG9nb1NGeXtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmltYWdlbkNvdmVye1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4uY2FyZGJhY2tncm91bmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yZXByb2R1Y3RvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuIFxyXG59IFxyXG5cclxuLmJhcnJhUGxheWxpc3R7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0EzQTNBMztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG59XHJcblxyXG4uYmFycmFQbGF5bGlzdCBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbn1cclxuLmZvbmRvUmVwcm9kdWN0b3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmltYWdlblJlcHJvZHVjdG9yIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ubHlyaWN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNBM0EzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQscmdiYSgwLCAwLCAwLCAwLjQpIDUwJSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudClcclxufSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0EzQTM7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNTAlLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpXHJcbn1cclxuYXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbiNpZFBsYXllcntcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uYW5ndWxhci13aXRoLW5ld2xpbmVzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnByZSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/player/player.component.ts ***!
          \********************************************/
        /*! exports provided: PlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () { return PlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var PlayerComponent = /** @class */ (function () {
                function PlayerComponent(_path, _data) {
                    this._path = _path;
                    this._data = _data;
                    this.songList = [];
                    this.listaFavoritas = this._data.ListaFavoritas;
                    this.id = this._path.snapshot.params.id;
                    this.songList = this._data.songList;
                }
                return PlayerComponent;
            }());
            PlayerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
                })
            ], PlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/search/search.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/search/search.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbarBorder nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarBorder a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarBorder a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarBorder .current {\r\n    border-bottom:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n.navbarLateral nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarLateral a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarLateral a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarLateral .current {\r\n    border-left:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n/* .buttonMas{\r\n    background-color: rgb(155, 155, 155);\r\n} */\r\n\r\n.lateralCaract{\r\n    background-color: black !important;\r\n\r\n\r\n    \r\n}\r\n\r\n.lateralGlobal {\r\n    background-color: rgb(35, 35, 35);\r\n}\r\n\r\n.logoSFy{\r\n    width: 140px;\r\n    height: 50px;\r\n}\r\n\r\n.imagenCover{\r\n    width: 160px;\r\n}\r\n\r\n.cardbackgroung {\r\n    background-color: black;\r\n}\r\n\r\n.reproductor {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.barraPlaylist{\r\n    font-size: 14px;\r\n    color: #A3A3A3;\r\n    height: 300px;\r\n\r\n}\r\n\r\n.barraPlaylist p{\r\n    margin-bottom: 0;\r\n\r\n}\r\n\r\n.noBorderBlue:focus{\r\n    border: none;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\na{\r\n    font-weight: bolder;\r\n    color: white !important;\r\n}\r\n\r\n/* ::-webkit-scrollbar{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);\r\n    border-radius: 10px;\r\n    background-color: #CCCCCC;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 10px;\r\n    background-color: #A3A3A3;\r\n    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)\r\n} */\r\n\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background-color: #A3A3A3; \r\n    background-image: -webkit-linear-gradient(90deg,rgba(255, 255, 255, .2) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%,transparent 75%,transparent)\r\n}\r\n\r\n.inputStyle{\r\n\r\n    width: 100%;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid #000000;\r\n    padding: 0 4px 0 4px;\r\n\r\n}\r\n\r\n.imagenCategoria{\r\n    width: 500px;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    border-radius: 10px;\r\n    padding: 0 4px 0 4px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0dBTUc7O0FBQ0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBQ0E7O0dBRUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7R0FNRzs7QUFDSDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTs7R0FFRzs7QUFJSDs7R0FFRzs7QUFFSDtJQUNJLGtDQUFrQzs7OztBQUl0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQSxVQUFVLGVBQWUsQ0FBQzs7QUFFMUI7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaURBQWlEO0lBQ2pELHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBR2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBR1osbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJCb3JkZXIgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxufVxyXG5cclxuLyogLm5hdmJhckJvcmRlciBhIHtcclxuICAgIHBhZGRpbmc6IC44JSAyJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmOyBcclxufSAqL1xyXG4ubmF2YmFyQm9yZGVyIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IFxyXG59XHJcbi5uYXZiYXJCb3JkZXIgLmN1cnJlbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgcmdiKDI5LCAxODUsIDg0KTtcclxufVxyXG4vKiAubmF2YmFyQm9yZGVyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxODUsIDg0KTtcclxufSAqL1xyXG5cclxuLm5hdmJhckxhdGVyYWwgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxufVxyXG5cclxuLyogLm5hdmJhckxhdGVyYWwgYSB7XHJcbiAgICBwYWRkaW5nOiAuOCUgMiU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjsgXHJcbn0gKi9cclxuLm5hdmJhckxhdGVyYWwgYTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgXHJcbn1cclxuLm5hdmJhckxhdGVyYWwgLmN1cnJlbnQge1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIHJnYigyOSwgMTg1LCA4NCk7XHJcbn1cclxuLyogLm5hdmJhckJvcmRlciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTg1LCA4NCk7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLyogLmJ1dHRvbk1hc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDE1NSwgMTU1KTtcclxufSAqL1xyXG5cclxuLmxhdGVyYWxDYXJhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuLmxhdGVyYWxHbG9iYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAzNSwgMzUpO1xyXG59XHJcblxyXG4ubG9nb1NGeXtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmltYWdlbkNvdmVye1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4uY2FyZGJhY2tncm91bmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yZXByb2R1Y3RvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBcclxufSBcclxuXHJcbi5iYXJyYVBsYXlsaXN0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNBM0EzQTM7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxufVxyXG5cclxuLmJhcnJhUGxheWxpc3QgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG59XHJcblxyXG4ubm9Cb3JkZXJCbHVlOmZvY3Vze1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG5cclxuYXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC45KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzQTNBMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMCwgMCwgMCwgMC40KSA1MCUsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQpXHJcbn0gKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNBM0EzOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDUwJSxyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KVxyXG59XHJcblxyXG4uaW5wdXRTdHlsZXtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgcGFkZGluZzogMCA0cHggMCA0cHg7XHJcblxyXG59XHJcblxyXG4uaW1hZ2VuQ2F0ZWdvcmlhe1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweCAwIDRweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(_path, _data) {
                    this._path = _path;
                    this._data = _data;
                    this.songList = this._data.songList;
                    this.searchSong = this._data.searchSong;
                    this.listaFavoritas = this._data.ListaFavoritas;
                }
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/services/data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                    this.songList = [
                        {
                            id: 0,
                            autor: 'Blur',
                            title: 'Girls and Boys 1',
                            cancion: 'Blur (The Best Of) - Girls and Boys.mp3',
                            imagen: 'a_cover-02.jpg',
                            lyrics: "Street's like a jungle\n     So call the police\n     Following the herd\n     Down to Greece\n     On holiday\n     Love in the nineties\n     Is paranoid\n     On sunny beaches\n     Take your chances\n     Looking for \n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Avoiding all work\n     Because there's none available\n     Like battery thinkers\n     Count your thoughts\n     On one-two-three-four-five fingers\n     Nothing is wasted\n     Only reproduced\n     You get nasty blisters\n     Du bist sehr schan\n     But we haven't been introduced\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone to really love\n     Looking for girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone to really love"
                        },
                        {
                            id: 1,
                            autor: 'Queen',
                            title: 'Don t Stop Me Now',
                            cancion: 'Queen - Dont Stop Me Now.mp3',
                            imagen: 'a_cover-01.jpg',
                            lyrics: "Tonight, I'm gonna have myself a real good time\n     I feel alive and the world I'll turn it inside out, yeah\n     And floating around in ecstasy\n     So don't stop me now don't stop me\n     'Cause I'm having a good time, having a good time\n     I'm a shooting star, leaping through the sky\n     Like a tiger defying the laws of gravity\n     I'm a racing car, passing by like Lady Godiva\n     I'm gonna go, go, go\n     There's no stopping me\n     I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic man out of you\n     Don't stop me now, I'm having such a good time\n     I'm having a ball\n     Don't stop me now\n     If you wanna have a good time, just give me a call\n     Don't stop me now ('cause I'm having a good time)\n     Don't stop me now (yes, I'm havin' a good time)\n     I don't want to stop at all\n     Yeah, I'm a rocket ship on my way to Mars\n     On a collision course\n     I am a satellite, I'm out of control\n     I am a sex machine, ready to reload\n     Like an atom bomb about to\n     Oh, oh, oh, oh, oh explode\n     I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic woman of you\n     Don't stop me, don't stop me\n     Don't stop me, hey, hey, hey\n     Don't stop me, don't stop me\n     Ooh ooh ooh, I like it\n     Don't stop me, don't stop me\n     Have a good time, good time\n     Don't stop me, don't stop me, ah\n     Oh yeah\n     Alright\n     Oh, I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic man out of you\n     Don't stop me now, I'm having such a good time\n     I'm having a ball\n     Don't stop me now\n     If you wanna have a good time (wooh)\n     Just give me a call (alright)\n     Don't stop me now ('cause I'm having a good time, yeah yeah)\n     Don't stop me now (yes, I'm havin' a good time)\n     I don't want to stop at all\n     La da da da daah\n     Da da da haa\n     Ha da da ha ha haaa\n     Ha da daa ha da da aaa\n     Ooh ooh ooh"
                        },
                        {
                            id: 2,
                            autor: 'Ella F. and Louis Armstrong',
                            title: 'Lets Call the Whole Thing Off',
                            cancion: 'Ella F. and Louis Armstrong - Lets Call the Whole Thing Off.mp3',
                            imagen: 'a_cover-03.jpg',
                            lyrics: "Things have come to a pretty pass\n      Our romance is growing flat\n      For you like this and the other\n      While I go for this and that\n      Goodness knows what the end will be\n      Oh, I don't know where I'm at\n      It looks as if we two will never be one\n      Something must be done\n      You say either and I say either\n      You say neither and I say neither\n      Either, either, neither, neither\n      Let's call the whole thing off\n      You like potato and I like potahto\n      You like tomato and I like tomahto\n      Potato, potahto, tomato, tomahto\n      Let's call the whole thing off\n      But, oh, if we call the whole thing off\n      Then we must part\n      And, oh, if we ever part, then that might break my heart\n      So if you like pajamas and I like pajahmas\n      I'll wear pajamas and give up pajahmas\n      For we know we need each other so we\n      Better call the whole thing off\n      Let's call the whole thing off\n      You say laughter and I say larfter\n      You say after and I say arfter\n      Laughter, larfter, after, arfter\n      Let's call the whole thing off\n      You like vanilla and I like vanella\n      You sarsaparilla, and I sarsapirella\n      Vanilla, vanella, chocolate, strawberry\n      Let's call the whole thing off\n      But, oh, if we call the whole thing off, then we must part\n      And, oh, if we ever part, then that might break my heart\n      So if you go for oysters and I go for ersters\n      I'll order oysters and cancel the ersters\n      For we know we need each other so we\n      Better call the calling off off\n      Let's call the whole thing off\n      I say father, and you say pater\n      I saw mother and you say mater\n      Pater, mater, uncle, auntie\n      Let's call the whole thing off\n      I like bananas and you like banahnahs\n      I say Havana and I get Havahnah\n      Bananas, banahnahs, Havana, Havahnah\n      Go your way, I'll go mine\n      So if I go for scallops and you go for lobsters\n      So, all right, no contest, we'll order lobseter\n      For we know we need each other so we\n      Better call the calling off off\n      Let's call the whole thing off"
                        },
                        {
                            id: 3, autor: 'Frank Sinatra',
                            title: 'Fly Me To The Moon',
                            cancion: 'Frank Sinatra Fly Me To The Moon.mp3',
                            imagen: 'a_cover-04.jpg',
                            lyrics: "Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you\n      Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you"
                        },
                        {
                            id: 4,
                            autor: 'Guns N Roses',
                            title: 'Don t Cry',
                            cancion: 'Guns N Roses - Dont Cry.mp3',
                            imagen: 'a_cover-05.jpg',
                            lyrics: "If we could see tomorrow, what of your plans?\n      No one can live in sorrow, ask all your friends\n      Times that you took in stride, they're back in demand\n      I was the one who was washing blood off your hands\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I know the things you wanted, they're not what you have\n      With all the people talking, it's driving you mad\n      If I was standing by you, how would you feel\n      Knowing your love's decided, and all love is real?\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I thought I could live in your world\n      As years all went by, with all the voices I've heard\n      Something has died\n      And when you're in need of someone, my heart won't deny you\n      So many seem so lonely with no one left to cry to, baby\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight.\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I thought I could live in your world\n      As years all went by, with all the voices I've heard\n      Something has died\n      And when you're in need of someone, my heart won't deny you\n      So many seem so lonely with no one left to cry to, baby\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight.   "
                        },
                        {
                            id: 10,
                            autor: 'Lenny Kravitz',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-06.jpg'
                        },
                        {
                            id: 11,
                            autor: 'Antonio Carlos Jobim',
                            title: 'The Girl From Ipanema',
                            cancion: 'The_Girl_from_Ipanema.mp3',
                            imagen: 'a_cover-07.jpg',
                            lyrics: "Tall and tan and young and lovely\n      The girl from Ipanema goes walking\n      And when she passes, each one she passes\n      Goes \"a-a-a-h\"\n      When she walks she's like a samba\n      When she walks, she's like a samba\n      That swings so cool and sways so gentle\n      That when she passes, each one she passes\n      Goes \"a-a-a-h\"\n      Oh, but I watch her so sadly\n      How can I tell her I love her\n      Yes, I would give my heart gladly\n      But each day as she walks to the sea\n      She looks straight ahead, not at me\n      Tall and tan and young and lovely\n      The girl from Ipanema goes walking\n      And when she passes, I smile, but she\n      Doesn't see. She just doesn't see\n      No, she just doesn't \n      Tall and tan and young and lovely\n      The girl from Ipanema goes walking\n      And when she passes, each one she passes\n      Goes \"a-a-a-h\"\n      When she walks she's like a samba\n      When she walks, she's like a samba\n      That swings so cool and sways so gentle\n      That when she passes, each one she passes\n      Goes \"a-a-a-h\"\n      Oh, but I watch her so sadly\n      How can I tell her I love her\n      Yes, I would give my heart gladly\n      But each day as she walks to the sea\n      She looks straight ahead, not at me\n      Tall and tan and young and lovely\n      The girl from Ipanema goes walking\n      And when she passes, I smile, but she\n      Doesn't see. She just doesn't see\n      No, she just doesn't"
                        },
                        {
                            id: 12,
                            autor: 'HombresG',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-08.jpg'
                        },
                        {
                            id: 13,
                            autor: 'Joao Gilberto',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-09.jpg'
                        }
                    ];
                    this.searchSong = ['Blur', 'Girls and Boys 1', 'Queen', 'Don t Stop Me Now', 'Ella F. and Louis Armstrong', 'Lets Call the Whole Thing Off', 'Frank Sinatra', 'Fly Me To The Moon', 'Guns N Roses', 'Don t Cry', 'Lenny Kravitz', 'Antonio Carlos Jobim', 'HombresG', 'Joao Gilberto'];
                    // constructor() { }
                    this.songList1 = [
                        {
                            id: 0,
                            autor: 'Blur',
                            title: 'Girls and Boys 1',
                            cancion: 'Blur (The Best Of) - Girls and Boys.mp3',
                            imagen: 'a_cover-02.jpg',
                            lyrics: " Street's like a jungle\n     So call the police\n     Following the herd\n     Down to Greece\n     On holiday\n     Love in the nineties\n     Is paranoid\n     On sunny beaches\n     Take your chances\n     Looking for\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Avoiding all work\n     Because there's none available\n     Like battery thinkers\n     Count your thoughts\n     On one-two-three-four-five fingers\n     Nothing is wasted\n     Only reproduced\n     You get nasty blisters\n     Du bist sehr schan\n     But we haven't been introduced\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone to really love\n     Looking for girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone you really love\n     Girls who are boys\n     Who like boys to be girls\n     Who do boys like they're girls\n     Who do girls like they're boys\n     Always should be someone to really love"
                        },
                        {
                            id: 1,
                            autor: 'Queen',
                            title: 'Don t Stop Me Now',
                            cancion: 'Queen - Dont Stop Me Now.mp3',
                            imagen: 'a_cover-01.jpg',
                            lyrics: "Tonight, I'm gonna have myself a real good time\n     I feel alive and the world I'll turn it inside out, yeah\n     And floating around in ecstasy\n     So don't stop me now don't stop me\n     'Cause I'm having a good time, having a good time\n     I'm a shooting star, leaping through the sky\n     Like a tiger defying the laws of gravity\n     I'm a racing car, passing by like Lady Godiva\n     I'm gonna go, go, go\n     There's no stopping me\n     I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic man out of you\n     Don't stop me now, I'm having such a good time\n     I'm having a ball\n     Don't stop me now\n     If you wanna have a good time, just give me a call\n     Don't stop me now ('cause I'm having a good time)\n     Don't stop me now (yes, I'm havin' a good time)\n     I don't want to stop at all\n     Yeah, I'm a rocket ship on my way to Mars\n     On a collision course\n     I am a satellite, I'm out of control\n     I am a sex machine, ready to reload\n     Like an atom bomb about to\n     Oh, oh, oh, oh, oh explode\n     I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic woman of you\n     Don't stop me, don't stop me\n     Don't stop me, hey, hey, hey\n     Don't stop me, don't stop me\n     Ooh ooh ooh, I like it\n     Don't stop me, don't stop me\n     Have a good time, good time\n     Don't stop me, don't stop me, ah\n     Oh yeah\n     Alright\n     Oh, I'm burnin' through the sky, yeah\n     Two hundred degrees\n     That's why they call me Mister Fahrenheit\n     I'm traveling at the speed of light\n     I wanna make a supersonic man out of you\n     Don't stop me now, I'm having such a good time\n     I'm having a ball\n     Don't stop me now\n     If you wanna have a good time (wooh)\n     Just give me a call (alright)\n     Don't stop me now ('cause I'm having a good time, yeah yeah)\n     Don't stop me now (yes, I'm havin' a good time)\n     I don't want to stop at all\n     La da da da daah\n     Da da da haa\n     Ha da da ha ha haaa\n     Ha da daa ha da da aaa\n     Ooh ooh ooh"
                        },
                        {
                            id: 2,
                            autor: 'Ella F. and Louis Armstrong',
                            title: 'Lets Call the Whole Thing Off',
                            cancion: 'Ella F. and Louis Armstrong - Lets Call the Whole Thing Off.mp3',
                            imagen: 'a_cover-03.jpg',
                            lyrics: "Things have come to a pretty pass\n      Our romance is growing flat\n      For you like this and the other\n      While I go for this and that\n      Goodness knows what the end will be\n      Oh, I don't know where I'm at\n      It looks as if we two will never be one\n      Something must be done\n      You say either and I say either\n      You say neither and I say neither\n      Either, either, neither, neither\n      Let's call the whole thing off\n      You like potato and I like potahto\n      You like tomato and I like tomahto\n      Potato, potahto, tomato, tomahto\n      Let's call the whole thing off\n      But, oh, if we call the whole thing off\n      Then we must part\n      And, oh, if we ever part, then that might break my heart\n      So if you like pajamas and I like pajahmas\n      I'll wear pajamas and give up pajahmas\n      For we know we need each other so we\n      Better call the whole thing off\n      Let's call the whole thing off\n      You say laughter and I say larfter\n      You say after and I say arfter\n      Laughter, larfter, after, arfter\n      Let's call the whole thing off\n      You like vanilla and I like vanella\n      You sarsaparilla, and I sarsapirella\n      Vanilla, vanella, chocolate, strawberry\n      Let's call the whole thing off\n      But, oh, if we call the whole thing off, then we must part\n      And, oh, if we ever part, then that might break my heart\n      So if you go for oysters and I go for ersters\n      I'll order oysters and cancel the ersters\n      For we know we need each other so we\n      Better call the calling off off\n      Let's call the whole thing off\n      I say father, and you say pater\n      I saw mother and you say mater\n      Pater, mater, uncle, auntie\n      Let's call the whole thing off\n      I like bananas and you like banahnahs\n      I say Havana and I get Havahnah\n      Bananas, banahnahs, Havana, Havahnah\n      Go your way, I'll go mine\n      So if I go for scallops and you go for lobsters\n      So, all right, no contest, we'll order lobseter\n      For we know we need each other so we\n      Better call the calling off off\n      Let's call the whole thing off"
                        },
                        {
                            id: 3, autor: 'Frank Sinatra',
                            title: 'Fly Me To The Moon',
                            cancion: 'Frank Sinatra Fly Me To The Moon.mp3',
                            imagen: 'a_cover-04.jpg',
                            lyrics: "Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you\n      Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you Fly me to the moon\n      Let me play among the stars\n      Let me see what spring is like on\n      A-Jupiter and Mars\n      In other words, hold my hand\n      In other words, baby, kiss me\n      Fill my heart with song and let me sing for ever more\n      You are all I long for\n      All I worship and adore\n      In other words, please be true\n      In other words, I love you\n      Fill my heart with song\n      Let me sing for ever more\n      You are all I long for, all I worship and adore\n      In other words, please be true\n      In other words\n      In other words\n      I love you"
                        },
                        {
                            id: 4,
                            autor: 'Guns N Roses',
                            title: 'Don t Cry',
                            cancion: 'Guns N Roses - Dont Cry.mp3',
                            imagen: 'a_cover-05.jpg',
                            lyrics: "If we could see tomorrow, what of your plans?\n      No one can live in sorrow, ask all your friends\n      Times that you took in stride, they're back in demand\n      I was the one who was washing blood off your hands\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I know the things you wanted, they're not what you have\n      With all the people talking, it's driving you mad\n      If I was standing by you, how would you feel\n      Knowing your love's decided, and all love is real?\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I thought I could live in your world\n      As years all went by, with all the voices I've heard\n      Something has died\n      And when you're in need of someone, my heart won't deny you\n      So many seem so lonely with no one left to cry to, baby\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight.\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      I thought I could live in your world\n      As years all went by, with all the voices I've heard\n      Something has died\n      And when you're in need of someone, my heart won't deny you\n      So many seem so lonely with no one left to cry to, baby\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight\n      Don't you cry tonight\n      I still love you, baby\n      Don't you cry tonight\n      Don't you cry tonight\n      There's a heaven above you baby\n      And don't you cry tonight.   "
                        },
                        {
                            id: 10,
                            autor: 'Lenny Kravitz',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-06.jpg'
                        },
                        {
                            id: 11,
                            autor: 'Antonio Carlos Jobim',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'The Girl From Ipanema',
                            imagen: 'a_cover-07.jpg'
                        },
                        {
                            id: 12,
                            autor: 'HombresG',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-08.jpg'
                        },
                        {
                            id: 13,
                            autor: 'Joao Gilberto',
                            title: 'PROXIMAMENTE ESTARÁ A TU DISPOSICION, DISCULPE LAS MOLESTIAS',
                            cancion: 'No disponible temporalmente',
                            imagen: 'a_cover-09.jpg'
                        }
                    ];
                    this.listaCanciones = this.songList1;
                    this.ListaFavoritas = [];
                }
                DataService.prototype.addFavoritas = function (item) {
                    this.ListaFavoritas.push(item);
                    console.log(this.ListaFavoritas);
                };
                DataService.prototype.deleteFav = function (posicion) {
                    this.listaCanciones.splice(posicion, 1);
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/song-list/song-list.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbarBorder nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarBorder a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarBorder a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarBorder .current {\r\n    border-bottom:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n.navbarLateral nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n    transition: background-color 300ms;\r\n}\r\n\r\n/* .navbarLateral a {\r\n    padding: .8% 2%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 300ms, background-color 300ms;\r\n    border-right: 3px solid #fff; \r\n} */\r\n\r\n.navbarLateral a:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.navbarLateral .current {\r\n    border-left:5px solid rgb(29, 185, 84);\r\n}\r\n\r\n/* .navbarBorder a:hover {\r\n    background-color: rgb(29, 185, 84);\r\n} */\r\n\r\n/* .buttonMas{\r\n    background-color: rgb(155, 155, 155);\r\n} */\r\n\r\n.lateralCaract{\r\n    background-color: black !important;\r\n\r\n\r\n    \r\n}\r\n\r\n.lateralGlobal {\r\n    background-color: rgb(35, 35, 35);\r\n}\r\n\r\n.logoSFy{\r\n    width: 140px;\r\n    height: 50px;\r\n}\r\n\r\n.imagenCover{\r\n    width: 160px;\r\n}\r\n\r\n.cardbackgroung {\r\n    background-color: black;\r\n}\r\n\r\n.reproductor {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n \r\n}\r\n\r\n.barraPlaylist{\r\n    font-size: 14px;\r\n    color: #A3A3A3;\r\n    height: 300px;\r\n\r\n}\r\n\r\n.barraPlaylist p{\r\n    margin-bottom: 0;\r\n\r\n}\r\n\r\n.noBorderBlue:focus{\r\n    border: none;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\na{\r\n    font-weight: bolder;\r\n    color: white !important;\r\n}\r\n\r\n/* ::-webkit-scrollbar{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);\r\n    border-radius: 10px;\r\n    background-color: #CCCCCC;\r\n}\r\n::-webkit-scrollbar-thumb{\r\n    border-radius: 10px;\r\n    background-color: #A3A3A3;\r\n    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)\r\n} */\r\n\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background-color: #A3A3A3; \r\n    background-image: -webkit-linear-gradient(90deg,rgba(255, 255, 255, .2) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%,transparent 75%,transparent)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0dBTUc7O0FBQ0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBQ0E7O0dBRUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7R0FNRzs7QUFDSDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFDQTs7R0FFRzs7QUFJSDs7R0FFRzs7QUFFSDtJQUNJLGtDQUFrQzs7OztBQUl0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQSxVQUFVLGVBQWUsQ0FBQzs7QUFFMUI7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaURBQWlEO0lBQ2pELHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhckJvcmRlciBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG59XHJcblxyXG4vKiAubmF2YmFyQm9yZGVyIGEge1xyXG4gICAgcGFkZGluZzogLjglIDIlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcywgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7IFxyXG59ICovXHJcbi5uYXZiYXJCb3JkZXIgYTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgXHJcbn1cclxuLm5hdmJhckJvcmRlciAuY3VycmVudCB7XHJcbiAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCByZ2IoMjksIDE4NSwgODQpO1xyXG59XHJcbi8qIC5uYXZiYXJCb3JkZXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE4NSwgODQpO1xyXG59ICovXHJcblxyXG4ubmF2YmFyTGF0ZXJhbCBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG59XHJcblxyXG4vKiAubmF2YmFyTGF0ZXJhbCBhIHtcclxuICAgIHBhZGRpbmc6IC44JSAyJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmOyBcclxufSAqL1xyXG4ubmF2YmFyTGF0ZXJhbCBhOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyBcclxufVxyXG4ubmF2YmFyTGF0ZXJhbCAuY3VycmVudCB7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgcmdiKDI5LCAxODUsIDg0KTtcclxufVxyXG4vKiAubmF2YmFyQm9yZGVyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxODUsIDg0KTtcclxufSAqL1xyXG5cclxuXHJcblxyXG4vKiAuYnV0dG9uTWFze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTU1LCAxNTUpO1xyXG59ICovXHJcblxyXG4ubGF0ZXJhbENhcmFjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG4ubGF0ZXJhbEdsb2JhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNSk7XHJcbn1cclxuXHJcbi5sb2dvU0Z5e1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaW1hZ2VuQ292ZXJ7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5jYXJkYmFja2dyb3VuZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnJlcHJvZHVjdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIFxyXG59IFxyXG5cclxuLmJhcnJhUGxheWxpc3R7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0EzQTNBMztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG59XHJcblxyXG4uYmFycmFQbGF5bGlzdCBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbn1cclxuXHJcbi5ub0JvcmRlckJsdWU6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG5he1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNBM0EzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQscmdiYSgwLCAwLCAwLCAwLjQpIDUwJSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudClcclxufSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0EzQTM7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNTAlLHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/song-list/song-list.component.ts ***!
          \**************************************************/
        /*! exports provided: SongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function () { return SongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var SongListComponent = /** @class */ (function () {
                function SongListComponent(_data) {
                    this._data = _data;
                    this.songList = this._data.songList;
                    this.listaFavoritas = this._data.ListaFavoritas;
                }
                return SongListComponent;
            }());
            SongListComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-song-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")).default]
                })
            ], SongListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\sguer\Desktop\Neoland\para subir a git\ejercicio8_musicFy\musicFy\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map