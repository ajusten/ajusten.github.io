(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/data/data.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/data/data.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Goal State</h2>\n\n<pre>{{ state | json }}</pre>\n\n<mat-divider></mat-divider>\n\n<h2>Goal Configuration</h2>\n\n<pre>{{ goal | json }}</pre>\n\n<div *ngFor=\"let form of forms\">\n    <h2>{{ form.id }}</h2>\n    <div *ngFor=\"let entry of form.entries\">\n        <h3>{{entry.id}}\n            <a mat-button [routerLink]=\"['/goals', goalId, 'form', form.id, 'entries', entry.id]\">Edit</a>\n        </h3>\n        <pre>{{entry.data | json}}</pre>\n    </div>\n    <mat-divider></mat-divider>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/form/form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/form/form.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<json-schema-form\n  [schema]=\"form.schema\"\n  [(data)]=\"form.data\"\n  [framework]=\"form.framework\"\n  (onSubmit)=\"onSubmit()\">\n</json-schema-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/getstarted/getstarted.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/getstarted/getstarted.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper linear=\"false\" #stepper>\n    <mat-step *ngFor=\"let step of steps\" [stepControl]=\"step.id\">\n        <ng-template matStepLabel>{{ step.title }}</ng-template>\n        <p>{{ step.description }}</p>\n    </mat-step>\n</mat-vertical-stepper>\n\n<a mat-raised-button color=\"accent\" [routerLink]=\"['../steps']\">Get Started now</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n    <h1>{{ goal.title }}</h1>\n\n    <mat-divider></mat-divider>\n\n    <!-- <nav mat-tab-nav-bar>\n        <a mat-tab-link *ngFor=\"let link of links\" [routerLink]=\"link.path\" routerLinkActive #rla=\"routerLinkActive\"\n            [routerLinkActiveOptions]=\"{exact: true}\" [active]=\"rla.isActive\">\n            {{link.label}}\n        </a>\n    </nav> -->\n\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/overview/overview.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/overview/overview.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Overview</h2>\n\n<p>ToDo</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/steps/steps.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/steps/steps.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{ currentStep.title }}</h2>\n\n<div [ngSwitch]=\"currentStep.type\">\n    <div *ngSwitchCase=\"'form'\">\n        <json-schema-form [schema]=\"currentStep.form.schema\" [(data)]=\"currentStep.form.data\"\n            [framework]=\"currentStep.form.framework\" (onSubmit)=\"onSubmit(currentStep)\">\n        </json-schema-form>\n    </div>\n    <div *ngSwitchCase=\"'reminder'\">\n        <a mat-button color=\"accent\" id=\"create_calendar_event\" [attr.href]=\"currentStep.googleCalendar\"\n            target=\"_blank\">\n            <mat-icon>calendar_today</mat-icon> Google Calendar\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\r\n  <h2>Current Goals</h2>\r\n\r\n  <mat-grid-list cols=\"4\" rowHeight=\"300px\">\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"goal-card\">\r\n        <mat-toolbar fxLayout=\"row\">\r\n          <span fxFlex=\"fill\">{{card.title}}</span>\r\n\r\n          <span>\r\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <a mat-menu-item [routerLink]=\"'/goals/' + card.id\">Overview</a>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </span>\r\n        </mat-toolbar>\r\n\r\n        <mat-card-content class=\"goal-card-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <ngx-gauge type=\"full\" thick=\"6\" foregroundColor=\"#00bcd4\" append=\"%\" size=\"150\" [value]=\"card.visualization.value\"\r\n            [max]=\"card.visualization.max\" [min]=\"card.visualization.min\" [label]=\"card.visualization.title\">\r\n          </ngx-gauge>\r\n          <a mat-button color=\"primary\" [routerLink]=\"'/goals/' + card.id + '/step'\">Next Step</a>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <h2>Start A New Goal</h2>\r\n  <mat-grid-list cols=\"4\" rowHeight=\"250px\">\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"goal-card\">\r\n        <mat-toolbar fxLayout=\"row\">\r\n          <span fxFlex=\"fill\">{{card.title}}</span>\r\n\r\n          <span>\r\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </span>\r\n        </mat-toolbar>\r\n        <mat-card-content class=\"goal-card-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <mat-icon>{{card.icon}}</mat-icon>\r\n          <a mat-button color=\"primary\" [routerLink]=\"'/goals/' + card.id\">Get Started</a>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"'dialog'\"\n      mode=\"over\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Link 1</a>\n      <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <!-- <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button> -->\n      <a mat-button href=\"/\">get stuff done</a>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals/goals.component */ "./src/app/goals/goals.component.ts");
/* harmony import */ var _services_goals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/goals.service */ "./src/app/services/goals.service.ts");
/* harmony import */ var _goals_form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goals/form/form.component */ "./src/app/goals/form/form.component.ts");
/* harmony import */ var _goals_steps_steps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goals/steps/steps.component */ "./src/app/goals/steps/steps.component.ts");
/* harmony import */ var _goals_data_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goals/data/data.component */ "./src/app/goals/data/data.component.ts");
/* harmony import */ var _goals_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goals/overview/overview.component */ "./src/app/goals/overview/overview.component.ts");
/* harmony import */ var _goals_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./goals/getstarted/getstarted.component */ "./src/app/goals/getstarted/getstarted.component.ts");











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'goals/:goalId',
        resolve: {
            goal: _services_goals_service__WEBPACK_IMPORTED_MODULE_5__["GoalResolver"],
        },
        component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__["GoalsComponent"],
        children: [
            { path: '', component: _goals_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__["OverviewComponent"] },
            { path: 'step', component: _goals_steps_steps_component__WEBPACK_IMPORTED_MODULE_7__["StepsComponent"] },
            { path: 'data', component: _goals_data_data_component__WEBPACK_IMPORTED_MODULE_8__["DataComponent"] },
            { path: 'getstarted', component: _goals_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_10__["GetstartedComponent"] },
            { path: 'form/:formId/entries/:entryId', component: _goals_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'getstuffdone';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./goals/goals.component */ "./src/app/goals/goals.component.ts");
/* harmony import */ var angular6_json_schema_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular6-json-schema-form */ "./node_modules/angular6-json-schema-form/fesm2015/angular6-json-schema-form.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _goals_form_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./goals/form/form.component */ "./src/app/goals/form/form.component.ts");
/* harmony import */ var _goals_steps_steps_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./goals/steps/steps.component */ "./src/app/goals/steps/steps.component.ts");
/* harmony import */ var _goals_data_data_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./goals/data/data.component */ "./src/app/goals/data/data.component.ts");
/* harmony import */ var _goals_overview_overview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./goals/overview/overview.component */ "./src/app/goals/overview/overview.component.ts");
/* harmony import */ var _goals_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./goals/getstarted/getstarted.component */ "./src/app/goals/getstarted/getstarted.component.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm2015/ngx-gauge.js");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
            _goals_goals_component__WEBPACK_IMPORTED_MODULE_22__["GoalsComponent"],
            _goals_form_form_component__WEBPACK_IMPORTED_MODULE_25__["FormComponent"],
            _goals_steps_steps_component__WEBPACK_IMPORTED_MODULE_26__["StepsComponent"],
            _goals_data_data_component__WEBPACK_IMPORTED_MODULE_27__["DataComponent"],
            _goals_overview_overview_component__WEBPACK_IMPORTED_MODULE_28__["OverviewComponent"],
            _goals_getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_29__["GetstartedComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            angular6_json_schema_form__WEBPACK_IMPORTED_MODULE_23__["MaterialDesignFrameworkModule"],
            ngx_gauge__WEBPACK_IMPORTED_MODULE_30__["NgxGaugeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/goals/data/data.component.scss":
/*!************************************************!*\
  !*** ./src/app/goals/data/data.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2RhdGEvZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/goals/data/data.component.ts":
/*!**********************************************!*\
  !*** ./src/app/goals/data/data.component.ts ***!
  \**********************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/goals.service */ "./src/app/services/goals.service.ts");




let DataComponent = class DataComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    getFormEntries(goalId, formId) {
        this.state = this.service.getState(goalId);
        var entries = this.service.getFormEntries(goalId, formId);
        return Object.keys(entries).map(k => ({
            id: k,
            data: entries[k]
        }));
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            this.goalId = this.route.parent.snapshot.params.goalId;
            this.goal = this.service.get(this.goalId);
            this.forms = Object.keys(this.goal.forms).map(k => ({
                id: k,
                entries: this.getFormEntries(this.goalId, k)
            }));
        });
    }
};
DataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }
];
DataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/data/data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data.component.scss */ "./src/app/goals/data/data.component.scss")).default]
    })
], DataComponent);



/***/ }),

/***/ "./src/app/goals/form/form.component.scss":
/*!************************************************!*\
  !*** ./src/app/goals/form/form.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/goals/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/goals/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/goals.service */ "./src/app/services/goals.service.ts");




let FormComponent = class FormComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            var goalId = this.route.parent.snapshot.params.goalId;
            var formId = this.route.snapshot.params.formId;
            var entryId = this.route.snapshot.params.entryId;
            this.form = this.service.getForm(goalId, formId, entryId);
        });
    }
    onSubmit() {
        var goalId = this.route.parent.snapshot.params.goalId;
        var formId = this.route.snapshot.params.formId;
        var entryId = this.route.snapshot.params.entryId;
        return this.service.saveForm(goalId, formId, entryId, this.form.data);
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/goals/form/form.component.scss")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/goals/getstarted/getstarted.component.scss":
/*!************************************************************!*\
  !*** ./src/app/goals/getstarted/getstarted.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2dldHN0YXJ0ZWQvZ2V0c3RhcnRlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/goals/getstarted/getstarted.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/goals/getstarted/getstarted.component.ts ***!
  \**********************************************************/
/*! exports provided: GetstartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedComponent", function() { return GetstartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/goals.service */ "./src/app/services/goals.service.ts");




let GetstartedComponent = class GetstartedComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            var goalId = this.route.parent.snapshot.params.goalId;
            this.steps = this.service.getSteps(goalId);
        });
    }
};
GetstartedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }
];
GetstartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getstarted',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./getstarted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/getstarted/getstarted.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./getstarted.component.scss */ "./src/app/goals/getstarted/getstarted.component.scss")).default]
    })
], GetstartedComponent);



/***/ }),

/***/ "./src/app/goals/goals.component.scss":
/*!********************************************!*\
  !*** ./src/app/goals/goals.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/goals/goals.component.ts":
/*!******************************************!*\
  !*** ./src/app/goals/goals.component.ts ***!
  \******************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GoalsComponent = class GoalsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.goal = data.goal;
            var goalId = this.route.snapshot.params.goalId;
            this.links = [
                { path: `../${goalId}`, label: 'Overview' },
                { path: `../${goalId}/steps`, label: 'All Steps' },
                { path: `../${goalId}/getstarted`, label: 'Get Started' },
                { path: `../${goalId}/data`, label: 'Data' }
            ];
        });
    }
};
GoalsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goals.component.scss */ "./src/app/goals/goals.component.scss")).default]
    })
], GoalsComponent);



/***/ }),

/***/ "./src/app/goals/overview/overview.component.scss":
/*!********************************************************!*\
  !*** ./src/app/goals/overview/overview.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/goals/overview/overview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/goals/overview/overview.component.ts ***!
  \******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OverviewComponent = class OverviewComponent {
    ngOnInit() {
    }
};
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/overview/overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overview.component.scss */ "./src/app/goals/overview/overview.component.scss")).default]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/goals/steps/steps.component.scss":
/*!**************************************************!*\
  !*** ./src/app/goals/steps/steps.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/goals/steps/steps.component.ts":
/*!************************************************!*\
  !*** ./src/app/goals/steps/steps.component.ts ***!
  \************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/goals.service */ "./src/app/services/goals.service.ts");




let StepsComponent = class StepsComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.route.parent.data.subscribe(data => {
            var goalId = this.route.parent.snapshot.params.goalId;
            this.currentStep = this.service.getNextStep(goalId);
        });
    }
    onSubmit() {
        this.currentStep = this.service.advanceStep(this.currentStep);
    }
};
StepsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }
];
StepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-steps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./steps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/steps/steps.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./steps.component.scss */ "./src/app/goals/steps/steps.component.scss")).default]
    })
], StepsComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".goal-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  padding: 0;\n}\n.goal-card .mat-toolbar {\n  background-color: inherit;\n}\n.goal-card-content {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcc291cmNlXFxnZXRzdHVmZmRvbmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREdBO0VBQ0Usa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb2FsLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBcclxuICAubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5nb2FsLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5nb2FsLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMDtcbn1cbi5nb2FsLWNhcmQgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmdvYWwtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_goals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/goals.service */ "./src/app/services/goals.service.ts");



let HomeComponent = class HomeComponent {
    constructor(service) {
        this.cards = service.getAllGoals();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_goals_service__WEBPACK_IMPORTED_MODULE_2__["GoalsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxzb3VyY2VcXGdldHN0dWZmZG9uZS9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let NavComponent = class NavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/services/goals.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/goals.service.ts ***!
  \*******************************************/
/*! exports provided: GoalsService, GoalResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsService", function() { return GoalsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalResolver", function() { return GoalResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repository.service */ "./src/app/services/repository.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/services/notification.service.ts");




let GoalsService = class GoalsService {
    constructor(repo, notification) {
        this.repo = repo;
        this.notification = notification;
    }
    advanceStep(step) {
        var goalId = step.goalId;
        var state = this.getState(goalId);
        if (step.type == 'form') {
            this.saveForm(goalId, step.form.id, step.form.entryId, step.form.data);
        }
        state.nextStep = step.next;
        this.saveState(goalId, state);
        return this.getNextStep(goalId);
    }
    getState(goalId) {
        return this.repo.getEntry(`${goalId}`, 'state') || {};
    }
    saveState(goalId, state) {
        return this.repo.saveEntry(`${goalId}`, 'state', state);
    }
    getNextStep(goalId) {
        var goal = this.get(goalId);
        var state = this.getState(goalId);
        var nextStep = 'start';
        if (state.nextStep) {
            nextStep = state.nextStep;
        }
        return this.getStep(goalId, goal, nextStep);
    }
    getStep(goalId, goal, stepName) {
        var step = Object.assign({}, goal.steps[stepName], { goalId, id: stepName });
        if (step.type === 'form') {
            step.form = this.getForm(goalId, step.form, null);
        }
        else if (step.type === 'reminder') {
            const base = 'http://www.google.com/calendar/event';
            const start = '20191031T130000Z';
            const end = '20191031T140000Z';
            const title = '';
            const location = '';
            const body = '';
            const url = `${base}?action=TEMPLATE&dates=${start}%2F${end}&text=${title}&location=${location}&details=${body}`;
            step.googleCalendar = url;
        }
        return step;
    }
    getSteps(goalId) {
        var goal = this.get(goalId);
        var steps = [];
        var nextStep = 'start';
        var index = 0;
        do {
            var step = this.getStep(goalId, goal, nextStep);
            step.isFirst = index === 0;
            step.isLast = nextStep === undefined;
            steps.push(step);
            nextStep = step.next;
            index++;
        } while (nextStep);
        return steps;
    }
    saveForm(goalId, formId, entryId, data) {
        this.repo.saveEntry(`${goalId}/forms/${formId}`, entryId, data);
        this.notification.info(`Saved successfully`);
    }
    getFormCurrent(goalId, formId) {
        return this.getForm(goalId, formId, null);
    }
    getFormEntry(scope) {
        switch (scope) {
            case 'global': return scope;
            case 'byDay':
                var today = new Date();
                var dd = String(today.getDate());
                var mm = String(today.getMonth() + 1);
                var yyyy = today.getFullYear();
                return mm + '/' + dd + '/' + yyyy;
        }
    }
    getFormEntries(goalId, formId) {
        var entries = this.repo.getEntries(`${goalId}/forms/${formId}`);
        return entries;
    }
    getForm(goalId, formId, entryId) {
        var goal = this.get(goalId);
        var form = goal.forms[formId];
        if (entryId === null) {
            entryId = this.getFormEntry(form.scope);
        }
        var entry = this.repo.getEntry(`${goalId}/forms/${formId}`, entryId) || {};
        return {
            id: formId,
            entryId: entryId,
            schema: Object.assign({}, form.schema),
            data: Object.assign({}, entry),
            framework: 'material-design'
        };
    }
    getAllGoals() {
        const allGoals = [calorieCount, readBook];
        return allGoals.map(g => ({
            title: g.title,
            icon: g.icon,
            id: g.id,
            visualization: g.visualization,
        }));
    }
    get(id) {
        switch (id) {
            case 'caloriecount': return calorieCount;
            case 'readbook': return readBook;
            default: throw 'not implemented';
        }
    }
};
GoalsService.ctorParameters = () => [
    { type: _repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
GoalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GoalsService);

let GoalResolver = class GoalResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        return this.service.get(route.paramMap.get('goalId'));
    }
};
GoalResolver.ctorParameters = () => [
    { type: GoalsService }
];
GoalResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GoalResolver);

var readBook = {
    "title": "Read a Book",
    "id": "readbook",
    "icon": "menu_book",
    "visualization": {
        "value": 25,
        "title": "Complete"
    },
    "forms": {
        "configuration": {
            "scope": "global",
            "schema": {
                "type": "object",
                "properties": {
                    "bookTitle": { "type": "string" },
                    "numberOfPages": { "type": "number" }
                }
            }
        },
        "pageEntry": {
            "scope": "byDay",
            "schema": {
                "type": "object",
                "properties": {
                    "currentPage": { "type": "number" }
                }
            }
        }
    },
    "steps": {
        "start": {
            "title": "Select your book",
            "description": "Enter your book so we can start tracking it for you",
            "type": "form",
            "form": "configuration",
            "next": "reminder"
        },
        "reminder": {
            "title": "Set a reminder",
            "description": "Set a reminder for the next time you will read",
            "type": "reminder",
            "next": "pageEntry"
        },
        "pageEntry": {
            "title": "What page are you on?",
            "description": "Enter the current page you are on to track your progress",
            "type": "form",
            "form": "pageEntry"
        }
    }
};
var calorieCount = {
    "title": "Lose Weight",
    "id": "caloriecount",
    "icon": "fitness_center",
    "visualization": {
        "value": 73,
        "title": "To Target Weight"
    },
    "forms": {
        "configuration": {
            "scope": "global",
            "schema": {
                "type": "object",
                "properties": {
                    "weight": { "type": "number" },
                    "height": { "type": "number" },
                    "gender": { "type": "string", "enum": ["Female", "Male"] }
                },
                "required": ["weight", "height", "gender"]
            }
        },
        "daily": {
            "scope": "byDay",
            "schema": {
                "type": "object",
                "properties": {
                    "calorieEntries": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "calories": { "type": "number" },
                                "note": { "type": "string" }
                            }
                        },
                        "required": ["calories", "notes"]
                    }
                }
            }
        }
    },
    "steps": {
        "start": {
            "title": "Enter your information",
            "description": "The first step is to get basic information on you.  This is used to calculate your daily target calories.",
            "type": "form",
            "form": "configuration",
            "next": "reminder"
        },
        "reminder": {
            "title": "Schedule a reminder",
            "description": "Schedule a reminder for the next time to enter calories",
            "type": "reminder",
            "next": "daily"
        },
        "daily": {
            "title": "Enter your daily calories",
            "description": "Everyday, record the amount of calories you consume.  You can create multiple entries for each day to organize your entries.  We recommend to start by creating one entry for each meal to start. ToDo will track your entries across days and allow you to quickly view your progress.",
            "type": "form",
            "form": "daily",
            "next": "reminder"
        }
    }
};


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let NotificationService = class NotificationService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.OPEN_DURATION = 5000;
    }
    info(message) {
        this._snackBar.open(message, this.MESSAGE_DISMISS, {
            duration: this.OPEN_DURATION,
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/services/repository.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/repository.service.ts ***!
  \************************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");



let RepositoryService = class RepositoryService {
    constructor(storage) {
        this.storage = storage;
        this.data = {};
    }
    getRepository(repositoryId) {
        var repository = this.data[repositoryId];
        if (!repository) {
            repository = this.storage.get(`repositories/${repositoryId}`) || {};
            this.data[repositoryId] = repository;
        }
        return repository;
    }
    saveRepository(repositoryId) {
        var repo = this.getRepository(repositoryId);
        return this.storage.set(`repositories/${repositoryId}`, repo);
    }
    getEntries(repositoryId) {
        return this.getRepository(repositoryId);
    }
    getEntry(repositoryId, entryId) {
        var repo = this.getRepository(repositoryId);
        return repo[entryId];
    }
    saveEntry(repositoryId, entryId, data) {
        var repo = this.getRepository(repositoryId);
        repo[entryId] = data;
        return this.saveRepository(repositoryId);
    }
};
RepositoryService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
];
RepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]))
], RepositoryService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\source\getstuffdone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map