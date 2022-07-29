function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sign-up/sign-up.component */
    "./src/app/components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/auth/auth-guard.service */
    "./src/app/shared/auth/auth-guard.service.ts");

    var routes = [{
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'chat',
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
      canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<router-outlet></router-outlet>"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sign-up/sign-up.component */
    "./src/app/components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/app-material/app-material.module */
    "./src/app/shared/app-material/app-material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/chat/add-group/add-group.component */
    "./src/app/components/chat/add-group/add-group.component.ts");
    /* harmony import */


    var _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/chat/new-chat/new-chat.component */
    "./src/app/components/chat/new-chat/new-chat.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
        maxOpened: 1,
        preventDuplicates: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
            maxOpened: 1,
            preventDuplicates: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat/add-group/add-group.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/chat/add-group/add-group.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddGroupComponent */

  /***/
  function srcAppComponentsChatAddGroupAddGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function () {
      return AddGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/FormsHandler/FormsHandler */
    "./src/app/shared/FormsHandler/FormsHandler.ts");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/observable/fromEvent */
    "./node_modules/rxjs/internal/observable/fromEvent.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/internal/operators/debounceTime */
    "./node_modules/rxjs/internal/operators/debounceTime.js");
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/operators/distinctUntilChanged */
    "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/internal/operators/mergeMap */
    "./node_modules/rxjs/internal/operators/mergeMap.js");
    /* harmony import */


    var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/pubsub.service */
    "./src/app/shared/services/pubsub.service.ts");
    /* harmony import */


    var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/FormsHandler/get-errors.component */
    "./src/app/shared/FormsHandler/get-errors.component.ts");

    var _c0 = ["searchInput"];

    function AddGroupComponent_ng_container_18_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddGroupComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_container_18_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var user_r78 = ctx.$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.selectContact(user_r78);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddGroupComponent_ng_container_18_div_6_Template, 2, 0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r78 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r78.full_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r78["selected"]);
      }
    }

    function AddGroupComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create a group chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.closemodel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddGroupComponent_div_19_Template_form_submit_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.addGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name your group chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.addGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " DONE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r75.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r75.form.get("group_title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r75.loading);
      }
    }

    function AddGroupComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create a group chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_img_click_5_listener() {
          var modal_r86 = ctx.$implicit;
          return modal_r86.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddGroupComponent_ng_template_20_Template_form_submit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.addGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name your group chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-errors", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.addGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " DONE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r77.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r77.form.get("group_title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r77.loading);
      }
    }

    var AddGroupComponent =
    /*#__PURE__*/
    function () {
      function AddGroupComponent(pubsubService, svc, toastr, _fb, changeDetector) {
        _classCallCheck(this, AddGroupComponent);

        this.pubsubService = pubsubService;
        this.svc = svc;
        this.toastr = toastr;
        this._fb = _fb;
        this.changeDetector = changeDetector;
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getUserData();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
        this.addGroupModel = false;
        this.AllUsers = [];
        this.activeChat = {
          chatHistory: []
        };
        this.message = '';
        this.group_title = '';
        this.groupnameError = '';
        this.selectedUsers = [];
        this.CopyAllUsers = [];
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AddGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.form = this._fb.group({
            'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])
          }, {
            updateOn: 'change'
          });
          document.addEventListener("keyup", function (event) {
            if (event.code === 'Enter' && !_this.loading) {
              _this.addGroup();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'input').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
              return event.target.value;
            }), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (value) {
              _this2.loading = true;

              if (!value) {
                var data = {
                  sorting: "ORDER BY full_name ASC",
                  search_field: "full_name",
                  search_value: '',
                  condition: "contains"
                };
                return _this2.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                  if (!(res.users && res.users.length)) {
                    res.users = [];
                  }

                  _this2.CopyAllUsers = _toConsumableArray(res.users);
                  return res;
                }));
              }

              var temparaay = _toConsumableArray(_this2.CopyAllUsers);

              var filteruser = temparaay.filter(function (user) {
                var searchValue = value.toLowerCase();

                if (user.full_name.toLowerCase().startsWith(searchValue)) {
                  return -1;
                }
              });
              var returnData = {
                users: filteruser
              };
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(returnData);
            })).subscribe(function (res) {
              _this2.loading = false;

              if (!res.users || !res.users.length) {
                _this2.toastr.error("Opps!", "No contacts found");

                _this2.AllUsers = [];
              } else {
                _this2.AllUsers = res.users;
              }

              _this2.setAlreadySelected();
            });
          }
        }
      }, {
        key: "setAlreadySelected",
        value: function setAlreadySelected() {
          var _this3 = this;

          this.selectedUsers.map(function (user) {
            var userIndex = _this3.AllUsers.find(function (alluser) {
              return alluser.user_id == user.user_id;
            });

            if (userIndex) userIndex['selected'] = true;
          });
          this.changeDetector.detectChanges();
        }
      }, {
        key: "selectContact",
        value: function selectContact(contact) {
          this.groupnameError = '';
          contact['selected'] = !contact['selected'];
          this.changeDetector.detectChanges();
          this.selectedUsers.push(contact);
          this.selectedUsers = this.selectedUsers.filter(function (user) {
            return user.selected;
          });
          this.selectedUsers = _toConsumableArray(new Set(this.selectedUsers));

          if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
          } else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
          }

          console.error('groupnameError', this.groupnameError);
          this.changeDetector.detectChanges();
        }
      }, {
        key: "openDialog",
        value: function openDialog(content) {
          var _this4 = this;

          this.groupnameError = '';
          this.selectedUsers = this.selectedUsers.filter(function (user) {
            return user.selected;
          });
          this.changeDetector.detectChanges();

          if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
            return;
          } else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
            return;
          }

          if (this.selectedUsers.length == 1) {
            var useridArray = this.selectedUsers.map(function (user) {
              return user.user_id;
            });
            var data = {
              participants: useridArray,
              auto_created: useridArray.length > 1 ? 0 : 1,
              group_title: "One to One chat"
            };
            this.svc.post('CreateGroup', data).subscribe(function (v) {
              _this4.changeDetector.detectChanges();

              if (v && v.status == 200) {
                _this4.groupnameError = '';

                _this4.setActiveChat.emit(v.group);

                _this4.form.reset();
              }

              _this4.selectedUsers = [];

              _this4.changeDetector.detectChanges();

              _this4.loading = false;

              _this4.changeEvent.emit("THREAD");
            });
          } else {
            this.addGroupModel = true;
          }
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          var _this5 = this;

          src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.form);
          var useridArray = this.selectedUsers.map(function (user) {
            return user.user_id;
          });
          if (this.form.invalid || !useridArray.length || this.loading) return;

          if (useridArray.length > 5) {
            this.toastr.error('OPPS!', 'participants Can not be more than 5!');
            return;
          }

          this.loading = true;
          this.changeDetector.detectChanges();
          var data = {
            participants: useridArray,
            auto_created: useridArray.length > 1 ? 0 : 1
          };
          data = Object.assign(Object.assign({}, data), this.form.value);
          this.svc.post('CreateGroup', data).subscribe(function (v) {
            _this5.changeDetector.detectChanges();

            if (v && v.status == 200) {
              _this5.groupnameError = '';

              _this5.setActiveChat.emit(v.group);

              _this5.toastr.success('Success!', 'The group has been created!');

              _this5.closemodel();

              _this5.form.reset();
            }

            _this5.selectedUsers = [];

            _this5.changeDetector.detectChanges();

            _this5.loading = false;
          });
        }
      }, {
        key: "closemodel",
        value: function closemodel() {
          this.selectedUsers = [];
          this.addGroupModel = false;
          this.AllUsers.forEach(function (element) {
            return element['selected'] = false;
          });
          this.changeEvent.emit("THREAD");
          this.changeDetector.detectChanges();
        }
      }, {
        key: "backScreen",
        value: function backScreen() {
          this.changeEvent.emit("CHAT");
        }
      }]);

      return AddGroupComponent;
    }();

    AddGroupComponent.ɵfac = function AddGroupComponent_Factory(t) {
      return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AddGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddGroupComponent,
      selectors: [["add-group"]],
      viewQuery: function AddGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      outputs: {
        changeEvent: "changeEvent",
        setActiveChat: "setActiveChat"
      },
      decls: 22,
      vars: 4,
      consts: [[1, "newChatContainer"], [1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand", 3, "click"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "newGrpChat"], [3, "ngClass"], [1, "newListContainer", "max-height"], [4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["content", ""], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], ["class", "selectuser contactListCardRight", 4, "ngIf"], [1, "selectuser", "contactListCardRight"], ["src", "./assets/images/checkmark-circle.png", 1, "ListCardButton"], ["id", "myModal", 1, "modal"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], [1, "chatPopupContent"]],
      template: function AddGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_Template_img_click_3_listener() {
            return ctx.backScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Group Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return ctx.openDialog(_r76);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddGroupComponent_ng_container_18_Template, 7, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddGroupComponent_div_19_Template, 15, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddGroupComponent_ng_template_20_Template, 14, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.groupnameError ? "text-danger" : "cntct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.groupnameError ? ctx.groupnameError : "Select Contacts", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addGroupModel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__["GetErrorsComponent"]],
      styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcanNfY2hhdFxcSlMtY2hhdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdFxcYWRkLWdyb3VwXFxhZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9hZGQtZ3JvdXAvYWRkLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLCtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMzMTM5NGQ7XHJcbn1cclxuLmNoYXRidG4ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG59XHJcblxyXG4uc2VsZWN0dXNlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiIsIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuXG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5zZWxlY3R1c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'add-group',
          templateUrl: './add-group.component.html',
          styleUrls: ['./add-group.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"]
        }, {
          type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }],
        setActiveChat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/observable/fromEvent */
    "./node_modules/rxjs/internal/observable/fromEvent.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/debounceTime */
    "./node_modules/rxjs/internal/operators/debounceTime.js");
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators/distinctUntilChanged */
    "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/helpers/helpersFunctions */
    "./src/app/shared/helpers/helpersFunctions.ts");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/FormsHandler/FormsHandler */
    "./src/app/shared/FormsHandler/FormsHandler.ts");
    /* harmony import */


    var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/pubsub.service */
    "./src/app/shared/services/pubsub.service.ts");
    /* harmony import */


    var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-group/add-group.component */
    "./src/app/components/chat/add-group/add-group.component.ts");
    /* harmony import */


    var _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./new-chat/new-chat.component */
    "./src/app/components/chat/new-chat/new-chat.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/FormsHandler/get-errors.component */
    "./src/app/shared/FormsHandler/get-errors.component.ts");
    /* harmony import */


    var _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/pipe/safeurl */
    "./src/app/shared/pipe/safeurl.ts");

    var _c0 = ["messageInputElement"];

    function ChatComponent_ng_container_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Available ChatRoom");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tap and hold on any message to star it, so you can easily find it later.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r14.unReadCount, "");
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r14 == null ? null : group_r14.userTypingContent);
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_p_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", group_r14.unReadCount ? "misreadMsg" : "readMsg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.getLastMessage(group_r14), " ");
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", group_r14.Online ? "cardOnlineStatus" : "cardOfflineStatus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r14.Online ? "Online" : "Offline", " ");
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r14.onlineParticipants + "/" + group_r14.TotalParticipants, " Online ");
      }
    }

    function ChatComponent_ng_container_5_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var group_r14 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.setActiveChat(group_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_5_ng_container_9_span_6_Template, 2, 1, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ng_container_5_ng_container_9_p_7_Template, 2, 1, "p", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ng_container_5_ng_container_9_p_8_Template, 2, 2, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var group_r14 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.openModal(group_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EDIT GROUP NAME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var group_r14 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.deleteGroup(group_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DELETE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_ng_container_5_ng_container_9_p_17_Template, 2, 2, "p", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatComponent_ng_container_5_ng_container_9_p_18_Template, 2, 1, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var group_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r14.chatTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r14.unReadCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r14.userTyping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r14.userTyping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r14.auto_created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r14.auto_created);
      }
    }

    function ChatComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CHATROOMS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_Template_h4_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.newChat();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create +");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_5_div_6_Template, 5, 0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_ng_container_5_ng_container_9_Template, 19, 6, "ng-container", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.AllGroups.length && !ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.AllGroups);
      }
    }

    function ChatComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "add-group", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_6_Template_add_group_setActiveChat_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.setchat($event);
        })("changeEvent", function ChatComponent_ng_container_6_Template_add_group_changeEvent_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.changeSidebar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ChatComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "new-chat", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_7_Template_new_chat_setActiveChat_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.setchat($event);
        })("changeEvent", function ChatComponent_ng_container_7_Template_new_chat_changeEvent_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.changeSidebar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ChatComponent_img_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_img_17_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.backScreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.activeChat.chatTitle, " ");
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_h4_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r40.messageBy);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r40.content);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 80);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_20_ng_container_1_div_5_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.openImage(chat_r40.content);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r40.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 80);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r54.checkFileType(chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r40.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.content);
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Read ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ChatComponent_ng_container_20_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_container_20_ng_container_1_h4_2_Template, 2, 1, "h4", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_ng_container_20_ng_container_1_div_4_Template, 3, 1, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_container_20_ng_container_1_div_5_Template, 4, 4, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_20_ng_container_1_div_6_Template, 3, 2, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var chat_r40 = ctx.$implicit;

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", chat_r40.from == ctx_r39.currentUserName ? "senderChatContainer" : "receiverChatContainer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.from != ctx_r39.currentUserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.type == "text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.type == "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.type != "text" && chat_r40.type != "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r40.readCount && chat_r40.from == ctx_r39.currentUserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, chat_r40.date, "shortTime"), " ");
      }
    }

    function ChatComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_Template, 12, 10, "ng-container", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.activeChat["chatHistory"]);
      }
    }

    function ChatComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No Conversation Yet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_21_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.newChat();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " NEW CHAT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_21_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.getAllGroups();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " REFRESH ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatComponent_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_24_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.removeAttachment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.fileToSend.name);
      }
    }

    function ChatComponent_input_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 99, 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatComponent_input_25_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.typingmessage($event);
        })("ngModelChange", function ChatComponent_input_25_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.message = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.message);
      }
    }

    function ChatComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_42_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.closeImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safeUrl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r10.popupimagesrc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChatComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit group ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_43_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatComponent_div_43_Template_form_submit_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.editGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name your group ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_43_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.editGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " DONE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r11.groupForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r11.groupForm.get("group_title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.loading);
      }
    }

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(pubsubService, svc, router, elRef, dialog, toastr, changeDetector, _fb) {
        _classCallCheck(this, ChatComponent);

        this.pubsubService = pubsubService;
        this.svc = svc;
        this.router = router;
        this.elRef = elRef;
        this.dialog = dialog;
        this.toastr = toastr;
        this.changeDetector = changeDetector;
        this._fb = _fb;
        this.editGroupModel = false;
        this.loading = true;
        this.AllGroups = [];
        this.activeChat = {
          chatHistory: []
        };
        this.message = '';
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getUserData();
        this.threadType = 'THREAD';
        this.fileToSend = null;
        this.isActiveThread = false;
        this.popupimagesrc = '';
        this.screen = 'CHAT';
        this.sdkconnected = false;
        this.setToActive = null;
        this.groupForm = this._fb.group({
          'group_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])
        }, {
          updateOn: 'change'
        });
        this.pubsubService.initConfigure();
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.pubsubService.Client.on("connect", function (response) {
            console.error("connect", response);
            _this6.sdkconnected = true;

            if (!_this6.AllGroups.length) {
              _this6.getAllGroups();
            }
          });
          this.pubsubService.Client.on("disconnect", function (response) {
            console.log("disconnect", response);
            _this6.sdkconnected = false;
          });
          document.addEventListener("keyup", function (event) {
            if (event.code === 'Enter') {
              _this6.sendTextMessage();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.pubsubService.Client.on("authentication_error", function (res) {
            console.log("authentication_error", res);
          });
          this.pubsubService.Client.on("offline", function (response) {
            console.log("offline", response);

            _this7.setOfflineStatus(response);
          });
          this.pubsubService.Client.on("online", function (response) {
            console.log("online", response);

            _this7.setOnlineStatus(response);
          });
          this.pubsubService.Client.on("message", function (response) {
            response = JSON.parse(JSON.stringify(response));
            console.trace("new message", response);

            if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
              _this7.scroll();

              var chatthread = _this7.findChatThread(response.to);

              var isActiveThread = chatthread.id == _this7.activeChat.id;
              chatthread['unReadCount'] = isActiveThread ? 0 : (chatthread['unReadCount'] || 0) + 1;
              response = _this7.messageBy(chatthread, response);
              response['isRead'] = isActiveThread;
              response['auto_created'] = chatthread['auto_created'];
              chatthread['lastMessage'] = response.content;
              chatthread['time'] = new Date(response.id);
              chatthread['type'] = response.type;

              _this7.pushMessage(chatthread, response);

              _this7.readSingleMessage(response, isActiveThread);

              setTimeout(function () {
                _this7.AllGroups.sort(function (a, b) {
                  return a.id == chatthread.id ? -1 : 1;
                });
              }, 500);

              _this7.changeDetector.detectChanges();
            } else if (response.type == 'typing') {
              _this7.setUserTyping(response);
            } else if (response.receiptType == 3) {
              var chName = response.topic || response.to;
              if (response.to != undefined) chName = response.to;

              var _chatthread = _this7.findChatThread(chName);

              var message = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(_chatthread.chatHistory, 'id', response.messageId);

              if (message) {
                message['readCount'] = (message['readCount'] || 0) + 1;
              }

              _this7.changeDetector.detectChanges();
            }
          });
          this.pubsubService.Client.on("subscribed", function (response) {
            console.log("subscribed", response);

            _this7.setOnlineStatusforSubscribe(response);
          });

          if (this.messageInputElement) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.messageInputElement.nativeElement, 'input').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
              return event.target.value;
            }), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(3000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (data) {
              var sendMessage = {
                status: 0,
                size: 0,
                type: "typing",
                isGroupMessage: false,
                from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                content: '0',
                id: new Date().getTime().toString(),
                key: _this7.activeChat.channel_key,
                to: _this7.activeChat.channel_name,
                date: new Date().getTime()
              };

              _this7.pubsubService.sendMessage(sendMessage);
            });
          }
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup(group) {
          var _this8 = this;

          this.loading = true;
          var playload = {
            group_id: group.id
          };
          this.svc.post('DeleteGroup', playload).subscribe(function (v) {
            _this8.changeDetector.detectChanges();

            if (v && v.status == 200) {
              _this8.loading = false;

              _this8.getAllGroups();

              _this8.toastr.success('The group has been deleted!', 'Success!');
            } else {
              console.error(v.message);
              alert(v.message);

              _this8.changeDetector.detectChanges();
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal(group) {
          if (group.auto_created) {
            alert('Can not change One to one group title');
            return;
          }

          group['group_id'] = group.id;
          this.groupForm.reset(group);
          this.editGroupModel = true;
          this.changeDetector.detectChanges();
        }
      }, {
        key: "editGroup",
        value: function editGroup() {
          var _this9 = this;

          src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__["default"].validateForm(this.groupForm);
          console.error("this.groupForm.", this.groupForm.invalid);
          if (this.groupForm.invalid || this.loading) return;
          var playload = this.groupForm.value;
          this.loading = true;
          this.svc.post('RenameGroup', playload).subscribe(function (v) {
            if (v && v.status == 200) {
              _this9.getAllGroups();

              _this9.editGroupModel = false;
              _this9.loading = false;

              _this9.toastr.success('The group has been updated!', 'Success!');
            }
          });
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups() {
          var _this10 = this;

          this.loading = true;
          this.svc.get('AllGroups').subscribe(function (v) {
            _this10.loading = false;

            if (v && v.status == 200) {
              _this10.AllGroups = v.groups.map(function (chat) {
                if (chat['participants'].length) {
                  chat['participants'] = chat['participants'].map(function (r) {
                    r['username'] = r['username'] || r['full_name'];
                    return r;
                  });
                }

                chat['chatTitle'] = chat.auto_created ? chat['participants'][0]['full_name'] : chat.group_title;
                chat['Online'] = false;
                chat['key'] = chat.channel_key;
                chat['channel'] = chat.channel_name;
                chat['chatHistory'] = [];
                chat['TotalParticipants'] = chat['participants'].length;
                chat['onlineParticipants'] = 1;
                chat['isSeen'] = true;
                return chat;
              });
              console.error("this.activeChat.chatTitle", _this10.activeChat);

              if (!_this10.activeChat.chatTitle) {
                _this10.activeChat = _this10.AllGroups.length ? _this10.AllGroups['0'] : {};
              }

              if (_this10.setToActive) {
                var indexchat = _this10.AllGroups.find(function (group) {
                  return group.id == _this10.setToActive;
                });

                _this10.activeChat = indexchat ? indexchat : _this10.AllGroups['0'];
                _this10.setToActive = null;
              }

              _this10.isActiveThread = true;

              _this10.pubsubService.subscribeToChat(_this10.AllGroups);
            }

            setTimeout(function () {
              _this10.sortThread();
            }, 500);

            _this10.changeDetector.detectChanges();
          });
        }
      }, {
        key: "checkFileType",
        value: function checkFileType(content) {
          var preview = content.includes('text/plain') ? './assets/images/txt.png' : content.includes('/pdf') ? './assets/images/pdf.png' : content.includes('/json') ? './assets/images/json.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
          if (content.includes('video/')) preview = './assets/images/video.png';
          if (content.includes('audio/')) preview = './assets/images/audio.png';
          return preview;
        }
      }, {
        key: "fileType",
        value: function fileType(content) {
          return content.split(";")[0].split(":")[1];
        }
      }, {
        key: "findChatThread",
        value: function findChatThread(channel) {
          return Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', channel);
        }
      }, {
        key: "setActiveChat",
        value: function setActiveChat(group) {
          this.isActiveThread = group.id == this.activeChat.id;
          if (!this.isActiveThread) this.message = '';
          this.activeChat = group;
          group['unReadCount'] = 0;
          this.screen = 'MSG';
          this.scroll();
          group.chatHistory = group.chatHistory || [];
          this.readsendMessage(group.chatHistory);
          this.changeDetector.detectChanges();
        }
      }, {
        key: "setchat",
        value: function setchat(chat) {
          this.setToActive = chat.id;
        }
      }, {
        key: "readSingleMessage",
        value: function readSingleMessage(response, isActiveThread) {
          if (response.from == this.currentUserName || !isActiveThread) return;
          var chatobj = {
            messageId: response.id,
            receiptType: 3,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            key: response.key,
            to: response.to,
            date: new Date().getTime()
          };
          this.pubsubService.readSingleMessage(chatobj);
        }
      }, {
        key: "readsendMessage",
        value: function readsendMessage(chatHistory) {
          var unreadchatHistory = chatHistory.filter(function (chat) {
            return !chat.isRead;
          }).map(function (chat) {
            var chatobj = {
              messageId: chat.id,
              receiptType: 3,
              from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
              key: chat.key,
              to: chat.to,
              date: new Date().getTime()
            };
            return chatobj;
          });
          if (unreadchatHistory.length) this.pubsubService.readMessage(unreadchatHistory);
          chatHistory = chatHistory.map(function (chat) {
            chat.isRead = true;
            return chat;
          });
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToSend = files.item(0);
        }
      }, {
        key: "invalidSize",
        value: function invalidSize() {
          return this.fileToSend.size / 1024 > 6144;
        }
      }, {
        key: "removeAttachment",
        value: function removeAttachment() {
          this.fileToSend = null;
        }
      }, {
        key: "getFileType",
        value: function getFileType(fileR) {
          var type = "file";
          var filetype = fileR.type;
          if (filetype.includes('image')) type = "image";else if (filetype.includes('audio')) type = "audio";else if (filetype.includes('video')) type = "video";
          return type;
        }
      }, {
        key: "sendTextMessage",
        value: function sendTextMessage() {
          if (!/\S/.test(this.message) && !this.fileToSend) {
            return;
          } else if (this.message.length > 400) {
            this.toastr.error("Message can not be more than 400 characters", "Opps!");
            return;
          } else if (this.fileToSend && this.invalidSize()) {
            this.toastr.error("The maximum size of file should be 6MBs.", "Opps!");
            this.fileToSend = null;
            return;
          }

          this.scroll();
          if (!this.message && !this.fileToSend) return;

          if (this.fileToSend) {
            var option = {
              id: new Date().getTime().toString(),
              from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
              topic: this.activeChat.channel_name,
              to: this.activeChat.channel_name,
              key: this.activeChat.channel_key,
              type: this.getFileType(this.fileToSend),
              date: new Date().getTime()
            };
            this.pubsubService.Client.SendFile(this.fileToSend, option);
            this.fileToSend = null;
          }

          if (!this.message) return;
          var sendMessage = {
            status: 1,
            size: 0,
            type: "text",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: this.message,
            id: new Date().getTime().toString(),
            date: new Date().getTime(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name
          };
          this.pubsubService.sendMessage(sendMessage);
          this.message = '';
          this.scroll();

          if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
            this.sortThread();
          }
        }
      }, {
        key: "typingmessage",
        value: function typingmessage($event) {
          if ($event.key === "Enter") {
            this.sendTextMessage();
            return;
          }

          var sendMessage = {
            status: 0,
            size: 0,
            type: "typing",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: "1",
            id: new Date().getTime().toString(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name,
            date: new Date().getTime()
          };
          this.pubsubService.sendMessage(sendMessage);
        }
      }, {
        key: "setOnlineStatusforSubscribe",
        value: function setOnlineStatusforSubscribe(response) {
          var indexchat = this.findChatThread(response.channel);

          if (indexchat) {
            var onlineNumbers = _toConsumableArray(new Set(response.who.map(function (n) {
              return n.username;
            })));

            indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
            if (indexchat && indexchat.auto_created) indexchat['Online'] = onlineNumbers.length > 1;
          }

          this.changeDetector.detectChanges();
        }
      }, {
        key: "setOnlineStatus",
        value: function setOnlineStatus(response) {
          var indexchat = this.findChatThread(response.channel);
          if (!indexchat) return;
          if (indexchat.auto_created) indexchat['Online'] = true;

          if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
          }

          this.changeDetector.detectChanges();
        }
      }, {
        key: "setOfflineStatus",
        value: function setOfflineStatus(response) {
          var indexchat = this.findChatThread(response.channel);
          if (indexchat && indexchat.auto_created) indexchat['Online'] = false;

          if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
          }

          this.changeDetector.detectChanges();
        }
      }, {
        key: "setUserTyping",
        value: function setUserTyping(response) {
          if (response.from == this.currentUserData.ref_id) return;
          var indexchat = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', response.to);
          var typinguser = indexchat["participants"].find(function (e) {
            return e.ref_id == response.from;
          });

          if (response.content == '1') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'] || [];
            indexchat['TypingUserList'] = _toConsumableArray(new Set([typinguser]));
          } else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(function (e) {
              return e.ref_id != response.from;
            });
          }

          indexchat['userTyping'] = indexchat['TypingUserList'].length && response.content != '0';
          var nameList = indexchat['TypingUserList'].map(function (userObj) {
            return userObj.full_name;
          });

          if (nameList.length == 1) {
            indexchat['userTypingContent'] = nameList + ' ' + 'is typing...';
          } else if (nameList.length == 2) {
            indexchat['userTypingContent'] = nameList.join() + ' ' + 'are typing...';
          } else if (nameList.length > 2) {
            indexchat['userTypingContent'] = nameList.filter(function (i, j) {
              return j < 2;
            }).join() + ' ' + 'and other are typing...';
          } // if (indexchat && indexchat.auto_created) {
          //   indexchat['userTyping'] = response.content != '0' && response.from != this.currentUserData.ref_id;
          //   indexchat['userTypingContent'] = (response.content == '1') ? sender + " is typing..." : "";
          // } else if (indexchat && !indexchat.auto_created) {
          //   this.setMultiUserTyping(response, typinguser, indexchat);
          // }


          this.changeDetector.detectChanges();
        }
      }, {
        key: "setMultiUserTyping",
        value: function setMultiUserTyping(response, typinguser, indexchat) {
          if (response.content == '1') {
            indexchat['TypingUserList'] = _toConsumableArray(new Set(typinguser));
          } else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(function (e) {
              return e.ref_id != response.from;
            });
          }

          this.changeDetector.detectChanges();
        }
      }, {
        key: "scroll",
        value: function scroll() {
          var _this11 = this;

          setTimeout(function () {
            _this11.elRef.nativeElement.querySelector('.messagesBox').scrollTop = _this11.elRef.nativeElement.querySelector('.messagesBox').scrollHeight;
          }, 500);
        }
      }, {
        key: "changeSidebar",
        value: function changeSidebar($event) {
          this.threadType = $event;

          if (this.threadType == 'THREAD') {
            this.getAllGroups();
          }
        }
      }, {
        key: "newChat",
        value: function newChat() {
          this.threadType = 'CHAT';
          this.changeDetector.detectChanges();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.pubsubService.Disconnect();
          src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].clearLocalStorge();
          this.router.navigate(['login']);
        }
      }, {
        key: "sortThread",
        value: function sortThread() {
          var _this12 = this;

          if (this.activeChat.id) {
            this.AllGroups.sort(function (a, b) {
              return a.id == _this12.activeChat.id ? -1 : 1;
            });
          }
        }
      }, {
        key: "messageBy",
        value: function messageBy(chatthread, response) {
          if (this.isShowName(chatthread, response)) {
            var messageByObj = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(chatthread.participants, 'ref_id', response.from);
            response['messageBy'] = messageByObj && messageByObj.full_name || '';
          }

          return response;
        }
      }, {
        key: "isShowName",
        value: function isShowName(chatthread, response) {
          if (chatthread['chatHistory'].length && response.from) {
            var previourmessage = chatthread['chatHistory'][chatthread['chatHistory'].length - 1];
            return previourmessage.from != response.from;
          }

          return true;
        }
      }, {
        key: "pushMessage",
        value: function pushMessage(thread, response) {
          var newResponse = {};
          newResponse = JSON.parse(JSON.stringify(response));

          if (response.type == 'text' || !response.content) {
            thread['chatHistory'].push(newResponse);
          } else {
            var foundIndex = thread.chatHistory.findIndex(function (x) {
              return x.id == response.id;
            });
            thread.chatHistory[foundIndex] = response;
          }
        }
      }, {
        key: "getLastMessage",
        value: function getLastMessage(group) {
          var isactivethread = group.id == this.activeChat.id;

          if (!isactivethread && group.unReadCount) {
            return "Misread messages";
          } else if (group.type != 'text') {
            return group.type;
          }

          return group.lastMessage;
        }
      }, {
        key: "openImage",
        value: function openImage(imagesrc) {
          this.popupimagesrc = imagesrc;
          this.changeDetector.detectChanges();
        }
      }, {
        key: "closeImage",
        value: function closeImage() {
          this.popupimagesrc = null;
          this.changeDetector.detectChanges();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.editGroupModel = false;
          this.changeDetector.detectChanges();
        }
      }, {
        key: "isHideThread",
        value: function isHideThread() {
          return this.isMobile() ? this.screen != 'CHAT' : false;
        }
      }, {
        key: "isHideChatScreen",
        value: function isHideChatScreen() {
          return this.isMobile() ? this.screen != 'MSG' : false;
        }
      }, {
        key: "backScreen",
        value: function backScreen() {
          this.threadType = "THREAD";
          this.screen = "CHAT";
          this.changeDetector.detectChanges();
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return window.innerWidth < 768;
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageInputElement = _t.first);
        }
      },
      decls: 44,
      vars: 16,
      consts: [[1, "row", "dashboardContainer"], [1, "col-sm-4", "leftSide", 3, "hidden"], [1, "leftSideHeader"], ["src", "./assets/images/logo2.png", 1, "dashboardLogo"], [1, "leftSideListContainer"], [4, "ngIf"], [1, "leftSideFooter"], [1, "logoutContainer", 3, "click"], ["src", "./assets/images/log-out.png", 1, "logoutLogo"], [1, "logoutText"], [1, "ml-1", 3, "ngClass"], [1, "col-sm-8", "rightSide", 3, "hidden"], [1, "rightSideHeader", "alignBottom", "chatholder"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], ["src", "./assets/images/arrow-left.png", "class", "arrowLeft hand", 3, "click", 4, "ngIf"], ["class", "roomNameText text-capitalize", 4, "ngIf"], [1, "messagesBox"], ["class", "chatRoomContainer", 4, "ngIf"], [1, "sendInputContainer", 3, "hidden"], [1, "sendInputWrapper"], ["type", "text", "class", "form-control", "placeholder", "Type to reply..", 3, "ngModel", "keyup", "ngModelChange", 4, "ngIf"], [1, "sendInputButtonContainer", "dropup", 2, "border-right", "1px solid #ebedf4"], ["src", "./assets/images/attachment.png", "data-toggle", "dropdown", 1, "sendIcon", "dropdown-toggle"], [1, "attachmentpopup", "dropdown-menu", "dropdown-menu-right", "selectOptionContainer"], [1, "attachmentPopHeader", "mx-3"], [1, "attachmentHeading"], [1, "attachmentPopContent", 3, "click"], [1, "attachmentTool"], [1, "attachmentToolIcon"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon"], ["type", "file", "id", "fileinput", 1, "d-none", 3, "change"], ["fileuploader", ""], [1, "sendInputButtonContainer", 3, "click"], ["src", "./assets/images/send.png", 1, "sendIcon"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "leftSectionHeader", 2, "align-items", "center", "margin", "0px"], [1, "leftHeading"], [1, "createText", 3, "click"], ["class", "leftSectionEmptyContainer", 4, "ngIf"], [1, "listingContainer", "fullHeight"], [1, "chatListContainer", "noHorizontalPadding"], [4, "ngFor", "ngForOf"], [1, "leftSectionEmptyContainer"], [1, "noAvailableText"], [1, "tapText"], [1, "chatsCardContainer", "hand", 3, "click"], [1, "chatsCardLeft"], [1, "chatsNameWrap"], [1, "chatName", "text-capitalize"], ["class", "unreadBadge", 4, "ngIf"], ["class", "misreadMsg", 4, "ngIf"], ["class", "misreadMsg text-capitalize", 3, "ngClass", 4, "ngIf"], [1, "chatsCardRight", "mr-1"], [1, "dropdown", "mt-1", 2, "align-self", "flex-end"], ["src", "./assets/images/more.png", 1, "moreIcon"], [1, "dropdown-content"], [1, "edit", 3, "click"], [1, "delete", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "cardOnlineStatus", 4, "ngIf"], [1, "unreadBadge"], [1, "misreadMsg"], [1, "misreadMsg", "text-capitalize", 3, "ngClass"], [3, "ngClass"], [1, "cardOnlineStatus"], [3, "setActiveChat", "changeEvent"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "roomNameText", "text-capitalize"], ["class", "msgBy text-capitalize", 4, "ngIf"], [1, "bubbleContainer"], ["class", "bubble", 4, "ngIf"], ["class", "imgbubble", 4, "ngIf"], ["class", "imgbubble file-attachment", 4, "ngIf"], [1, "time"], [1, "msgBy", "text-capitalize"], [1, "bubble"], [1, "msgText"], [1, "imgbubble"], [3, "diameter", 4, "ngIf"], [1, "w-100", "msgImage", "img-thumbnail", "img-fluid", 3, "src", "click"], [3, "diameter"], [1, "imgbubble", "file-attachment"], [1, "w-100", "msgImage", "thumbnail", "img-fluid", 3, "src"], ["download", "", 3, "href"], [1, "chatRoomContainer"], [1, "listingContainer", 2, "height", "100%"], [1, "emptyListContainer"], [1, "emptyListTop"], ["src", "./assets/images/shipping.png", 1, "shippingIcon"], [1, "noConvoTextWrapper"], [1, "noConvoText"], [1, "noConvoSub", 2, "max-width", "200px"], [1, "emptyListBottom"], ["type", "submit", 1, "btn", "newChatButton", 3, "click"], ["type", "submit", 1, "btn", "refreshButton", 3, "click"], [1, "w-100"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon", "ml-4"], [1, "ml-2"], [1, "font-weight-bolder", "hand", "ml-2", "text-danger", 3, "click"], ["type", "text", "placeholder", "Type to reply..", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["messageInputElement", ""], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_container_5_Template, 10, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_6_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ng_container_7_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_9_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_img_17_Template, 1, 0, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatComponent_p_18_Template, 2, 1, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_ng_container_20_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChatComponent_div_21_Template, 16, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChatComponent_ng_container_24_Template, 7, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChatComponent_input_25_Template, 2, 1, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ADD ATTACHMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return _r9.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChatComponent_Template_input_change_38_listener($event) {
            return ctx.handleFileInput($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_40_listener() {
            return ctx.sendTextMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChatComponent_div_42_Template, 5, 3, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChatComponent_div_43_Template, 15, 3, "div", 34);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHideThread());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "THREAD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "GROUP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "CHAT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("LOG OUT ", ctx.currentUserData.full_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sdkconnected ? "online" : "offline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHideChatScreen());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activeChat.chatTitle && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.activeChat.chatTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileToSend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileToSend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupimagesrc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editGroupModel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_15__["AddGroupComponent"], _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_16__["NewChatComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_18__["GetErrorsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_19__["SafeUrlPipe"]],
      styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.attachmentpopup[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 15px 5px;\n}\n\n.msgText[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  padding: 0;\n  margin: 0;\n  font-family: inter-regular;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: block;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 100px;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.9);\n  \n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  border-radius: 6px !important;\n}\n\n@-webkit-keyframes zoom {\n  from {\n    -webkit-transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n@media only screen and (max-width: 700px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.editgroup[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: auto;\n}\n\n.chatholder[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.online[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtVQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QURBQSwyQkFBQTs7QUFDQTtFQUNFLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLG9DQUFBO0VBQXNDLHFCQUFBO0FDWXhDOztBRFRBLDBCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ1lGOztBRFRBO0VBQ0U7SUFDRSwyQkFBQTtFQ1lGO0VEVkE7SUFDRSwyQkFBQTtFQ1lGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLG1CQUFBO0VDV0Y7RURUQTtJQUNFLG1CQUFBO0VDV0Y7QUFDRjs7QURSQSxxQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEEsd0NBQUE7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLDJCQUFBO0FDU0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1FGOztBREpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMzMTM5NGQ7XHJcbn1cclxuLmNoYXRidG4ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG59XHJcblxyXG4uYXR0YWNobWVudHBvcHVwIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggNXB4O1xyXG59XHJcblxyXG4ubXNnVGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgaHlwaGVuczogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogaW50ZXItcmVndWxhcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNiYmI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXRncm91cCB7XHJcbiAgd2lkdGg6IDQ4NXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNoYXRob2xkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuXHJcbi5vbmxpbmUge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLm9mZmxpbmUge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuXG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5hdHRhY2htZW50cG9wdXAge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbn1cblxuLm1zZ1RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbnRlci1yZWd1bGFyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50aHVtYm5haWwge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMzVweDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjYmJiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZWRpdGdyb3VwIHtcbiAgd2lkdGg6IDQ4NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0aG9sZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ub25saW5lIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub2ZmbGluZSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"]
        }, {
          type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      }, {
        messageInputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['messageInputElement']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat/new-chat/new-chat.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/chat/new-chat/new-chat.component.ts ***!
    \****************************************************************/

  /*! exports provided: NewChatComponent */

  /***/
  function srcAppComponentsChatNewChatNewChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewChatComponent", function () {
      return NewChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/observable/fromEvent */
    "./node_modules/rxjs/internal/observable/fromEvent.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/debounceTime */
    "./node_modules/rxjs/internal/operators/debounceTime.js");
    /* harmony import */


    var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators/distinctUntilChanged */
    "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
    /* harmony import */


    var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/operators/mergeMap */
    "./node_modules/rxjs/internal/operators/mergeMap.js");
    /* harmony import */


    var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/pubsub.service */
    "./src/app/shared/services/pubsub.service.ts");
    /* harmony import */


    var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["searchInput"];

    function NewChatComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var user_r94 = ctx.$implicit;

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.startChat(user_r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var user_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r94.full_name);
      }
    }

    var NewChatComponent =
    /*#__PURE__*/
    function () {
      function NewChatComponent(pubsubService, svc, dialog, toastr) {
        _classCallCheck(this, NewChatComponent);

        this.pubsubService = pubsubService;
        this.svc = svc;
        this.dialog = dialog;
        this.toastr = toastr;
        this.loading = true;
        this.AllUsers = [];
        this.CopyAllUsers = [];
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NewChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this13 = this;

          if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'input').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
              return event.target.value;
            }), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (value) {
              _this13.loading = true;

              if (!value) {
                var data = {
                  sorting: "ORDER BY full_name ASC",
                  search_field: "full_name",
                  search_value: '',
                  condition: "contains"
                };
                return _this13.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                  if (!(res.users && res.users.length)) {
                    res.users = [];
                  }

                  _this13.CopyAllUsers = _toConsumableArray(res.users);
                  return res;
                }));
              }

              var temparaay = _toConsumableArray(_this13.CopyAllUsers);

              var filteruser = temparaay.filter(function (user) {
                var searchValue = value.toLowerCase();

                if (user.full_name.toLowerCase().startsWith(searchValue)) {
                  return -1;
                }
              });
              var returnData = {
                users: filteruser
              };
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(returnData);
            })).subscribe(function (res) {
              _this13.loading = false;

              if (!res.users || !res.users.length) {
                _this13.toastr.error("No contacts found", "Opps!");

                _this13.AllUsers = [];
              } else {
                _this13.AllUsers = res.users;
              }
            });
          }
        }
      }, {
        key: "backScreen",
        value: function backScreen() {
          this.changeEvent.emit("THREAD");
        }
      }, {
        key: "addGroupEvent",
        value: function addGroupEvent() {
          this.changeEvent.emit("GROUP");
        }
      }, {
        key: "startChat",
        value: function startChat(user) {
          var _this14 = this;

          if (this.loading) return;
          this.loading = true;
          var data = {
            group_title: user.full_name,
            participants: [user.user_id],
            auto_created: 1
          };
          this.svc.post('CreateGroup', data).subscribe(function (v) {
            if (v && v.status == 200) {
              var subscribedata = Object.assign(Object.assign({}, v.group), {
                key: v.group['channel_key'],
                channel: v.group['channel_name']
              });
              var _data = [];

              _data.push(subscribedata);

              _this14.pubsubService.subscribeToChat(_data);

              _this14.changeEvent.emit("THREAD");

              _this14.setActiveChat.emit(v.group);

              _this14.loading = false;
            }
          });
        }
      }]);

      return NewChatComponent;
    }();

    NewChatComponent.ɵfac = function NewChatComponent_Factory(t) {
      return new (t || NewChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]));
    };

    NewChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewChatComponent,
      selectors: [["new-chat"]],
      viewQuery: function NewChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      outputs: {
        changeEvent: "changeEvent",
        setActiveChat: "setActiveChat"
      },
      decls: 23,
      vars: 1,
      consts: [[1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "addGrpChat"], [1, "addGrpChatTop", "hand", 3, "click"], ["src", "./assets/images/Group Chat.png", 1, "addgrpIcon"], [1, "addGrpTitle"], [1, "addGrpSep"], [1, "cntct"], [1, "contactListContainer", "max-height"], [4, "ngFor", "ngForOf"], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], [1, "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/chat.png", 1, "pl-1", "ListCardButton", "hand"]],
      template: function NewChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_Template_img_click_2_listener() {
            return ctx.backScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_Template_div_click_14_listener() {
            return ctx.addGroupEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Group Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewChatComponent_ng_container_22_Template, 8, 1, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
      styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L25ldy1jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxuZXctY2hhdFxcbmV3LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tTmFtZVRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcclxuICBjb2xvcjogIzMxMzk0ZDtcclxufVxyXG4uY2hhdGJ0biB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5zZWxlY3R1c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iLCIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cblxuLmNoYXRidG4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xufVxuXG4uc2VsZWN0dXNlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'new-chat',
          templateUrl: './new-chat.component.html',
          styleUrls: ['./new-chat.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"]
        }, {
          type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
        }];
      }, {
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }],
        setActiveChat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/FormsHandler/FormsHandler */
    "./src/app/shared/FormsHandler/FormsHandler.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/FormsHandler/get-errors.component */
    "./src/app/shared/FormsHandler/get-errors.component.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, _fb, auth) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
        this.formError = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          if (this.auth.islogin()) {
            this.router.navigate(['chat']);
          }

          this.buildForm();
          document.addEventListener("keyup", function (event) {
            if (event.code === 'Enter') {
              _this15.onLogin();
            }
          });
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.loginForm = this._fb.group({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14)])
          }, {
            updateOn: 'change'
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this16 = this;

          _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__["default"].validateForm(this.loginForm);

          if (this.loginForm.invalid) return;
          var saveData = this.loginForm.value;
          saveData.project_id = '123DGDVB';
          this.loading = true;
          this.formError = null;
          this.auth.login(saveData).subscribe(function (v) {
            _this16.loading = false;

            if (v && v.status == 200) {
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setUserData(v);
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthToken(v.auth_token);
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthUsername(v.ref_id);

              _this16.router.navigate(['chat']);

              _this16.loginForm.reset();
            } else {
              _this16.formError = v.message;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loginForm.reset();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ngx-login"]],
      decls: 21,
      vars: 5,
      consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "email", "placeholder", "Email/Username", "formControlName", "email", 1, "form-control"], [3, "control"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/signup"], [1, "text-muted"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-errors", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Version:2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcanNfY2hhdFxcSlMtY2hhdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlckhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgICBjb2xvcjogIzE3MTcyNTtcclxufSIsIi53cmFwcGVySGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzE3MTcyNTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/FormsHandler/FormsHandler */
    "./src/app/shared/FormsHandler/FormsHandler.ts");
    /* harmony import */


    var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/validators */
    "./src/app/shared/validators.ts");
    /* harmony import */


    var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/FormsHandler/get-errors.component */
    "./src/app/shared/FormsHandler/get-errors.component.ts");

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(router, _fb, auth) {
        _classCallCheck(this, SignUpComponent);

        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.buildForm();
          document.addEventListener("keyup", function (event) {
            if (event.code === 'Enter') {
              _this17.onLogin();
            }
          });
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.loginForm = this._fb.group({
            'full_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].usernameValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'device_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_model': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_os_ver': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](navigator.platform, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          }, {
            updateOn: 'change'
          });
          console.log('this.signupForm', this.loginForm);
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this18 = this;

          _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.loginForm);

          if (this.loginForm.invalid) return;
          var saveData = this.loginForm.value;
          saveData.project_id = '123DGDVB';
          this.loading = true;
          this.formError = null;
          this.auth.signup(saveData).subscribe(function (v) {
            _this18.loading = false;

            if (v && v.status == 200) {
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setUserData(v);
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthToken(v.auth_token);
              src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthUsername(v.ref_id);

              _this18.router.navigate(['chat']);

              _this18.loginForm.reset();
            } else {
              _this18.formError = v.message;
            }
          });
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["sign-up"]],
      decls: 21,
      vars: 6,
      consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "text", "placeholder", "Your Username", "formControlName", "full_name", 1, "form-control"], [3, "control"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/login"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up to your account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_8_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-errors", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-errors", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_16_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("full_name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVySGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMxNzE3MjU7XHJcbn0iLCIud3JhcHBlckhlYWRpbmcge1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6ICMxNzE3MjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/FormsHandler/FormsHandler.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/FormsHandler/FormsHandler.ts ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFormsHandlerFormsHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return FormsHandler;
    });

    var FormsHandler =
    /*#__PURE__*/
    function () {
      function FormsHandler() {
        _classCallCheck(this, FormsHandler);
      }

      _createClass(FormsHandler, null, [{
        key: "validateForm",
        value:
        /**
         * This method is use to validate Form
         * @param formErrors string
         * @param form  form instance | object
         * @return errors as string
         * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
         **/
        function validateForm(form) {
          if (form.valid) {
            return true;
          } else {
            if (form.controls) {
              for (var field in form.controls) {
                var control = form.get(field);

                if (control.invalid) {
                  control.markAsTouched({
                    onlySelf: true
                  });
                }
              }
            }

            return false;
          }
        }
        /**
        * this method is use to validate Form Array
        * @param formErrors string
        * @param form  form instance | object
        * @return errors as string
        * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
        **/

      }, {
        key: "validateFormArray",
        value: function validateFormArray(form) {
          if (form.valid) {
            return true;
          } else {
            if (form.controls) {
              for (var group in form.controls) {
                var groupFiled = form.get(group);

                for (var field in groupFiled.controls) {
                  var control = groupFiled.get(field);

                  if (control.invalid) {
                    control.markAsTouched({
                      onlySelf: true
                    });
                  }
                }
              }
            }

            return false;
          }
        }
      }, {
        key: "deleteEmptyFileds",
        value: function deleteEmptyFileds(data) {
          if (data) {
            for (var key in data) {
              if (data[key] == '' || data[key] == null) {
                delete data[key];
              }

              if (data[key] && typeof data[key] === 'string') {
                data[key] = data[key].trim();
              }
            }

            return data;
          }
        }
      }]);

      return FormsHandler;
    }();
    /***/

  },

  /***/
  "./src/app/shared/FormsHandler/get-errors.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/FormsHandler/get-errors.component.ts ***!
    \*************************************************************/

  /*! exports provided: GetErrorsComponent */

  /***/
  function srcAppSharedFormsHandlerGetErrorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetErrorsComponent", function () {
      return GetErrorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GetErrorsComponent =
    /*#__PURE__*/
    function () {
      function GetErrorsComponent() {
        _classCallCheck(this, GetErrorsComponent);
      }

      _createClass(GetErrorsComponent, [{
        key: "hasErrors",
        value: function hasErrors() {
          return this.control && this.control.errors && (this.control.dirty || this.control.touched);
        }
      }, {
        key: "listOfErrors",
        value: function listOfErrors() {
          var _this19 = this;

          var errors = Object.keys(this.control.errors).map(function (field) {
            return _this19.getMessage(field, _this19.control.errors[field]);
          });
          return errors.length ? errors[0] : errors;
        }
      }, {
        key: "getMessage",
        value: function getMessage(type, params) {
          return GetErrorsComponent.errorMessages[type](params);
        }
      }]);

      return GetErrorsComponent;
    }();

    GetErrorsComponent.errorMessages = {
      'required': function required() {
        return 'The specified information is required.';
      },
      'minlength': function minlength(params) {
        return 'The min number of characters is ' + params.requiredLength;
      },
      'maxlength': function maxlength(params) {
        return 'The max allowed number of characters is ' + params.requiredLength;
      },
      'pattern': function pattern(params) {
        return 'The required pattern is: ' + params.requiredPattern;
      },
      'years': function years(params) {
        return params.message;
      },
      'countryCity': function countryCity(params) {
        return params.message;
      },
      'uniqueName': function uniqueName(params) {
        return params.message;
      },
      'telephoneNumbers': function telephoneNumbers(params) {
        return params.message;
      },
      'telephoneNumber': function telephoneNumber(params) {
        return params.message;
      },
      'invalidNumber': function invalidNumber() {
        return 'The specified information is invalid.';
      },
      'emptySpaces': function emptySpaces() {
        return 'The specified information is invalid.';
      },
      'email': function email() {
        return 'Email is not valid';
      },
      'invalidPassword': function invalidPassword() {
        return 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value';
      },
      'invalidUsernameCharacters': function invalidUsernameCharacters() {
        return 'invalid user name';
      },
      'invalidInputCharacters': function invalidInputCharacters() {
        return 'The specified information is invalid.';
      },
      'invalidEmailAddress': function invalidEmailAddress() {
        return 'Email is not valid';
      }
    };

    GetErrorsComponent.ɵfac = function GetErrorsComponent_Factory(t) {
      return new (t || GetErrorsComponent)();
    };

    GetErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GetErrorsComponent,
      selectors: [["form-errors"]],
      inputs: {
        control: "control"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "text-danger"]],
      template: function GetErrorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hasErrors() ? ctx.listOfErrors() : "", " ");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'form-errors',
          template: "\n    <p class='text-danger'>\n     {{hasErrors() ? listOfErrors() : ''}}\n    </p>"
        }]
      }], null, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-material/app-material.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/app-material/app-material.module.ts ***!
    \************************************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppSharedAppMaterialAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var globalRippleConfig = {
      disabled: true
    };

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };

    AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppMaterialModule
    });
    AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppMaterialModule_Factory(t) {
        return new (t || AppMaterialModule)();
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"],
        useValue: globalRippleConfig
      }],
      imports: [[_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, {
        imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]],
        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]],
          declarations: [],
          entryComponents: [],
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"],
            useValue: globalRippleConfig
          }],
          exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth/auth-guard.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/auth/auth-guard.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var isAuthenticated = this.authService.isAuthenticated();

          if (!isAuthenticated) {
            this.router.navigate(['login']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth/auth.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/auth/auth.service.ts ***!
    \*********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(data) {
          return this.http.post('Login', data);
        }
      }, {
        key: "signup",
        value: function signup(data) {
          return this.http.post('SignUp', data);
        }
      }, {
        key: "logout",
        value: function logout() {
          _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].clearLocalStorge();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getAuthToken();
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.getToken();
        }
      }, {
        key: "islogin",
        value: function islogin() {
          return !!this.getToken();
        }
      }, {
        key: "resetUser",
        value: function resetUser() {
          this.currentUserId = null;
          this.userRequest = null;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          var userdata = _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getUserData();

          return userdata._id;
        }
      }, {
        key: "isAuthUser",
        value: function isAuthUser() {
          return this.http.get('users/current-user');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/helpersFunctions.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/helpers/helpersFunctions.ts ***!
    \****************************************************/

  /*! exports provided: isEmptyObj, isEmptyArray, isEmail, FindObjectByValue, FindArrayObject, AutoUnsubscribe, isMobile */

  /***/
  function srcAppSharedHelpersHelpersFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isEmptyObj", function () {
      return isEmptyObj;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isEmptyArray", function () {
      return isEmptyArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isEmail", function () {
      return isEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindObjectByValue", function () {
      return FindObjectByValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindArrayObject", function () {
      return FindArrayObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function () {
      return AutoUnsubscribe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isMobile", function () {
      return isMobile;
    });

    function isEmptyObj(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }

      return true;
    }

    function isEmptyArray(array) {
      if (!Array.isArray(array) || !array.length) {
        return true;
      } else {
        return false;
      }
    }

    function isEmail(email) {
      var emailLowercase = email.toLowerCase();

      if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
        return true;
      } else {
        return false;
      }
    }

    function FindObjectByValue(inputArray, value) {
      return inputArray.find(function (e) {
        return e == value;
      });
    }

    function FindArrayObject(inputArray, key, value) {
      return inputArray.find(function (e) {
        return e[key] == value;
      });
    }

    function AutoUnsubscribe(constructor) {
      var original = constructor.prototype.ngOnDestroy;

      constructor.prototype.ngOnDestroy = function () {
        for (var prop in this) {
          if (prop) {
            var property = this[prop];

            if (property && typeof property.unsubscribe === 'function') {
              property.unsubscribe();
            }
          }
        }

        if (original && typeof original === 'function') {
          original.apply(this, arguments);
        }

        ;
      };
    }

    function isMobile() {
      return window.innerWidth < 768;
    }
    /***/

  },

  /***/
  "./src/app/shared/pipe/filter.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/pipe/filter.ts ***!
    \***************************************/

  /*! exports provided: filterPipe */

  /***/
  function srcAppSharedPipeFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterPipe", function () {
      return filterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/base.service */
    "./src/app/shared/services/base.service.ts");

    var filterPipe =
    /*#__PURE__*/
    function () {
      function filterPipe(toastr, svc) {
        _classCallCheck(this, filterPipe);

        this.toastr = toastr;
        this.svc = svc;
      }

      _createClass(filterPipe, [{
        key: "transform",
        value: function transform(items, value) {
          var _this20 = this;

          if (!items) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          if (!value) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
          var data = {
            "search_field": "full_name",
            "search_value": value,
            "condition": "contains"
          };
          return this.svc.post('AllUsers', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status == 400) {
              _this20.toastr.error("No contacts found", "Opps!");

              return [];
            }

            return res.users;
          }));
        }
      }]);

      return filterPipe;
    }();

    filterPipe.ɵfac = function filterPipe_Factory(t) {
      return new (t || filterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));
    };

    filterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: filterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](filterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipe/safeurl.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/pipe/safeurl.ts ***!
    \****************************************/

  /*! exports provided: SafeUrlPipe */

  /***/
  function srcAppSharedPipeSafeurlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function () {
      return SafeUrlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeUrlPipe =
    /*#__PURE__*/
    function () {
      function SafeUrlPipe(domSanitizer) {
        _classCallCheck(this, SafeUrlPipe);

        this.domSanitizer = domSanitizer;
      }

      _createClass(SafeUrlPipe, [{
        key: "transform",
        value: function transform(url) {
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafeUrlPipe;
    }();

    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
      return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeUrl",
      type: SafeUrlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeUrl'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/base.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/base.service.ts ***!
    \*************************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppSharedServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BaseService =
    /*#__PURE__*/
    function () {
      function BaseService(http) {
        _classCallCheck(this, BaseService);

        this.http = http;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.userData$ = this.userData.asObservable();
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLoadingResponse = this.isLoading.asObservable();
      }
      /**
      * This method is used to Call API using Http GET method.
      * @param URL
      * @return obserables responsce
      * @author  Muhammad Mukhtiar  <muhammad.mukhtiar@norgic.com>
      **/


      _createClass(BaseService, [{
        key: "get",
        value: function get(URL) {
          return this.http.get(URL);
        }
        /**
        * This method is use to add or update data using API
        * @param formData
        * @return obserables responsce
        * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
        **/

      }, {
        key: "save",
        value: function save(URL) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http.post(URL, data);
        }
        /**
        * This method is used to Call API using Http Post method.
        * @param URL
        * @param URL
        * @return obserables responsce
        * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
        **/

      }, {
        key: "post",
        value: function post(URL) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http.post(URL, payload);
        }
      }]);

      return BaseService;
    }();

    BaseService.ɵfac = function BaseService_Factory(t) {
      return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BaseService,
      factory: BaseService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/http.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/http.service.ts ***!
    \*************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/shared/services/base.service.ts");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(router, svc) {
        _classCallCheck(this, HttpService);

        this.router = router;
        this.svc = svc;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl;
      }

      _createClass(HttpService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this21 = this;

          req = this.getModifiedReq(req);
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              if (event && event.body) {
                var serRes = event.body;

                _this21.svc.isLoading.next(false);

                if (serRes.code === 401) {
                  _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].clearLocalStorge();

                  _this21.showErrorMsg(serRes.message);

                  _this21.router.navigate(['/login']);
                } else if (serRes.code === 407) {
                  // StorageService.clearLocalStorge();
                  _this21.showErrorMsg(serRes.message); // this.router.navigate(['/auth/login']);

                } else if (serRes.code === 200 || serRes.code === 201) {} else {
                  _this21.showErrorMsg(serRes.message);
                }
              }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorRes) {
            _this21.svc.isLoading.next(false);

            console.log('this should print your error!', errorRes.error);

            if (errorRes instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              if (errorRes.status === 500) {// this.toastrService.danger('Opps!', "Something went wrong");
              } else {
                _this21.showErrorMsg(errorRes.message);
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
          }));
        }
      }, {
        key: "getModifiedReq",
        value: function getModifiedReq(req) {
          req = req.clone({
            url: this.baseUrl + req.url
          });
          var formdata = JSON.stringify(req.body);

          var auth_token = _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].getAuthToken();

          if (auth_token) req = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + auth_token)
          });
          req = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
          });
          req = req.clone({
            body: formdata
          });
          return req;
        }
      }, {
        key: "showErrorMsg",
        value: function showErrorMsg(errorResponse) {
          if (typeof errorResponse == 'string') {// this.toastrService.danger('Opps!', errorResponse);
          }
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/pubsub.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/pubsub.service.ts ***!
    \***************************************************/

  /*! exports provided: PubsubService */

  /***/
  function srcAppSharedServicesPubsubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PubsubService", function () {
      return PubsubService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/shared/services/storage.service.ts");

    var PubsubService =
    /*#__PURE__*/
    function () {
      function PubsubService() {
        _classCallCheck(this, PubsubService);
      }

      _createClass(PubsubService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.wsSubscription.unsubscribe();
        }
      }, {
        key: "initConfigure",
        value: function initConfigure() {
          var user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();

          this.Client = new MVDOTOK.Client({
            projectID: "123DGDVB",
            secret: "462a4b478d515fd35eae075eea059d89",
            host: "".concat(user.messaging_server_map.protocol, "://").concat(user.messaging_server_map.host, ":").concat(user.messaging_server_map.port)
          });
          this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          this.Client.SendMessage(message);
        }
      }, {
        key: "subscribeToChat",
        value: function subscribeToChat(groups) {
          var _this22 = this;

          groups.map(function (chanelObj) {
            _this22.Client.Subscribe(chanelObj);
          });
        }
      }, {
        key: "unsubscribeToChat",
        value: function unsubscribeToChat(groups) {
          this.Client.UnSubscribe(groups);
        }
      }, {
        key: "Disconnect",
        value: function Disconnect() {
          this.Client.Disconnect();
        }
      }, {
        key: "readMessage",
        value: function readMessage(chatMessages) {
          var _this23 = this;

          chatMessages.map(function (chat) {
            _this23.Client.SendReceipt(chat);
          });
        }
      }, {
        key: "readSingleMessage",
        value: function readSingleMessage(chatMessages) {
          this.Client.SendReceipt(chatMessages);
        }
      }]);

      return PubsubService;
    }();

    PubsubService.ɵfac = function PubsubService_Factory(t) {
      return new (t || PubsubService)();
    };

    PubsubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PubsubService,
      factory: PubsubService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PubsubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, {
        wsSubscription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/storage.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/storage.service.ts ***!
    \****************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, null, [{
        key: "clearLocalStorge",
        value: function clearLocalStorge() {
          localStorage.clear();
          sessionStorage.clear();
          return;
        }
      }, {
        key: "getAuthToken",
        value: function getAuthToken() {
          return localStorage.getItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
        }
      }, {
        key: "setAuthToken",
        value: function setAuthToken(token) {
          localStorage.setItem(StorageService.STORAGE_KEY_AUTH_TOKEN, token);
        }
      }, {
        key: "removeAuthToken",
        value: function removeAuthToken() {
          localStorage.removeItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
        }
      }, {
        key: "getAuthUsername",
        value: function getAuthUsername() {
          return localStorage.getItem(StorageService.STORAGE_KEY_USER_NAME);
        }
      }, {
        key: "setAuthUsername",
        value: function setAuthUsername(username) {
          localStorage.setItem(StorageService.STORAGE_KEY_USER_NAME, username);
        }
      }, {
        key: "removeAuthUsername",
        value: function removeAuthUsername() {
          localStorage.removeItem(StorageService.STORAGE_KEY_USER_NAME);
        }
      }, {
        key: "setUserData",
        value: function setUserData(userData) {
          localStorage.setItem(StorageService.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_USER_DATA));
        }
      }, {
        key: "removeUserData",
        value: function removeUserData() {
          localStorage.removeItem(StorageService.STORAGE_KEY_USER_DATA);
        }
      }]);

      return StorageService;
    }();

    StorageService.STORAGE_KEY_AUTH_TOKEN = 'auth_token';
    StorageService.STORAGE_KEY_USER_NAME = 'username';
    StorageService.STORAGE_KEY_USER_DATA = 'user_data';
    /***/
  },

  /***/
  "./src/app/shared/services/websocket.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/websocket.service.ts ***!
    \******************************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppSharedServicesWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var WebsocketService =
    /*#__PURE__*/
    function () {
      function WebsocketService() {
        _classCallCheck(this, WebsocketService);

        this.ready = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(WebsocketService, [{
        key: "initSocket",
        value: function initSocket(url) {
          var _this24 = this;

          this.webSocket = new WebSocket('wss://' + 'vtest3.vdotok.com:8443' + '/call');

          this.webSocket.onopen = function () {
            return _this24.ready.next();
          };

          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this24.webSocket.onmessage = function (event) {
              return observer.next(event);
            };

            _this24.webSocket.onerror = function (event) {
              return observer.error(event);
            };

            _this24.webSocket.onclose = function (event) {
              return observer.complete();
            }; // Callback invoked on unsubscribe


            return function () {
              return _this24.webSocket.close();
            };
          });
        }
      }, {
        key: "send",
        value: function send(message) {// if (this.webSocket.readyState === WebSocket.OPEN) {
          //   this.webSocket.send(message);
          // }
        }
      }, {
        key: "initPUBSUBSocket",
        value: function initPUBSUBSocket() {
          return new PUBSUB.Client({
            host: "ws://emit1.togee.io",
            port: "8080",
            credentials: {
              username: "john",
              password: ""
            },
            clientId: "12345",
            reConnectivity: true,
            secret: "cWV91camkwd99XO9rvHmamvXxGdyeHK5"
          });
        }
      }]);

      return WebsocketService;
    }();

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)();
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, {
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/websocket.service */
    "./src/app/shared/services/websocket.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/shared/auth/auth.service.ts");
    /* harmony import */


    var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth-guard.service */
    "./src/app/shared/auth/auth-guard.service.ts");
    /* harmony import */


    var _services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/base.service */
    "./src/app/shared/services/base.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/http.service */
    "./src/app/shared/services/http.service.ts");
    /* harmony import */


    var _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/pubsub.service */
    "./src/app/shared/services/pubsub.service.ts");
    /* harmony import */


    var _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./FormsHandler/get-errors.component */
    "./src/app/shared/FormsHandler/get-errors.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _pipe_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipe/filter */
    "./src/app/shared/pipe/filter.ts");
    /* harmony import */


    var _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pipe/safeurl */
    "./src/app/shared/pipe/safeurl.ts");

    var components = [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"], _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"], _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"], _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"], _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], {
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DEFAULT_OPTIONS"],
        useValue: {
          hasBackdrop: false
        }
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        multi: true
      }],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"], _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"], _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"], _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"], _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [].concat(components),
          exports: [].concat(components),
          providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"], _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"], _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DEFAULT_OPTIONS"],
            useValue: {
              hasBackdrop: false
            }
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/validators.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/validators.ts ***!
    \**************************************/

  /*! exports provided: ValidationService */

  /***/
  function srcAppSharedValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
      return ValidationService;
    });

    var ValidationService =
    /*#__PURE__*/
    function () {
      function ValidationService() {
        _classCallCheck(this, ValidationService);
      }

      _createClass(ValidationService, null, [{
        key: "specialCharValidator",
        value: function specialCharValidator(control) {
          if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
            return null;
          } else {
            return {
              'invalidCharacters': true
            };
          }
        }
      }, {
        key: "uppercaseCharacterRule",
        value: function uppercaseCharacterRule(amount) {
          return function validate(control) {
            var value = control.value;

            if (value.length === 0) {
              return undefined;
            }

            var pattern = /[^A-Z]+/g;
            var stripped = value.replace(pattern, '');

            if (stripped.length < amount) {
              return {
                'uppercaseCharacterRule': true
              };
            }

            return undefined;
          };
        }
      }, {
        key: "creditCardValidator",
        value: function creditCardValidator(control) {
          // Visa, MasterCard, American Express, Diners Club, Discover, JCB
          if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
          } else {
            return {
              'invalidCreditCard': true
            };
          }
        }
      }, {
        key: "emailValidator",
        value: function emailValidator(control) {
          // RFC 2822 compliant regex
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var emailLowercase = control.value.toLowerCase();

          if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
            return null;
          } else {
            return {
              'invalidEmailAddress': true
            };
          }
        }
      }, {
        key: "isEmptyInputValue",
        value: function isEmptyInputValue(value) {
          // we don't check for string here so it also works with arrays
          return value == null || value.length === 0;
        }
      }, {
        key: "emptySpacesValidator",
        value: function emptySpacesValidator(control) {
          console.log('emptySpacesValidator', control, control.value);

          if (control.value.match(/([^\s])/)) {
            return null;
          } else {
            return {
              'emptySpaces': true
            };
          }
        }
      }, {
        key: "removeSpace",
        value: function removeSpace(value) {
          return value.trim();
        }
      }, {
        key: "englishWordsValidator",
        value: function englishWordsValidator(control) {
          console.log('englishWordsValidator', control);
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var tempstring = ValidationService.removeSpace(control.value);

          if (tempstring.match(/^[a-zA-Z]+( [\&a-zA-Z]+)*$/)) {
            return null;
          } else {
            return {
              'invalidCharacters': true
            };
          }
        }
      }, {
        key: "nameValidator",
        value: function nameValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
            return null;
          } else {
            return {
              'invalidNameCharacters': true
            };
          }
        }
      }, {
        key: "whiteSpaceValidator",
        value: function whiteSpaceValidator(control) {
          // RFC 2822 compliant regex
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
            return null;
          } else {
            return {
              'invalidWhiteSpace': true
            };
          }
        }
      }, {
        key: "phoneValidator",
        value: function phoneValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^\+?[0-9]+$/g)) {
            return null;
          } else {
            return {
              'invalidPhone': true
            };
          }
        }
      }, {
        key: "phoneUsernameEmailValidator",
        value: function phoneUsernameEmailValidator(control) {
          if (control.value == null) return;
          var validEmail = true,
              validPhone = true,
              validUsername = true;

          if (ValidationService.emailValidator(control) != null) {
            validEmail = false;
          }

          if (!control.value.match(/^[a-zA-Z0-9]{5,17}$/)) {
            validUsername = false;
          }

          if (!control.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            validPhone = false;
          }

          console.log('phoneUsernameEmailValidator', ValidationService.emailValidator(control), validEmail, validUsername, validPhone);
          if (validEmail || validUsername || validPhone) return null;
          return {
            'invalidUsernameEmail': true
          };
        }
      }, {
        key: "usernameValidator",
        value: function usernameValidator(control) {
          // RFC 2822 compliant regex
          if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
            return null;
          } else {
            return {
              'invalidUsernameCharacters': true
            };
          }
        }
      }, {
        key: "passwordValidator",
        value: function passwordValidator(control) {
          // {8,100}           - Assert password is between 8 and 100 characters
          // (?=.*[0-9])       - Assert a string has at least one number
          if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
          } else {
            return {
              'invalidPassword': true
            };
          }
        }
      }, {
        key: "MatchPassword",
        value: function MatchPassword(control, crud) {
          if (control.value == null) return null;
          return control.root.get('password').value != control.value ? {
            passworMismatch: true
          } : null;
        }
      }, {
        key: "pinCodeValidator",
        value: function pinCodeValidator(control) {
          if (control.value && control.value.match(/^[0-9]{4}$/)) {
            return null;
          } else {
            return {
              'invalidPinCode': true
            };
          }
        }
      }, {
        key: "trimData",
        value: function trimData(data) {
          if (data) {
            for (var key in data) {
              if (data[key] && typeof data[key] == "string") {
                data[key] = data[key].trim();
              }
            }

            return data;
          }
        }
      }, {
        key: "checkInteger",
        value: function checkInteger(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
            return null;
          } else {
            return {
              'invalidNumber': true
            };
          }
        }
      }, {
        key: "alphnumericValidator",
        value: function alphnumericValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          if (ValidationService.whiteSpaceValidator(control.value)) return; // if (control.value.match(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,500}$/)) {

          if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
          } else {
            return {
              'invalidInputCharacters': true
            };
          }
        }
      }, {
        key: "stringvalidator",
        value: function stringvalidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
          } else {
            return {
              'invalidInputCharacters': true
            };
          }
        }
      }, {
        key: "disallowspecial",
        value: function disallowspecial(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
            return null;
          } else {
            return {
              'invalidInputCharacters': true
            };
          }
        }
      }, {
        key: "alphValidator",
        value: function alphValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;

          if (control.value.match(/^\+?[A-Za-z]+$/g)) {
            return null;
          } else {
            return {
              'invalidString': true
            };
          }
        }
      }, {
        key: "numericValidator",
        value: function numericValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          if (ValidationService.whiteSpaceValidator(control.value)) return;
          var value = control.value.toString();

          if (value.match(/^\+?[0-9]+$/g)) {
            return null;
          } else {
            return {
              'invalidNumeric': true
            };
          }
        }
      }, {
        key: "floatNumberValidator",
        value: function floatNumberValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var value = control.value.toString();

          if (value.match(/^[+-]?\d+(\.\d+)?$/g)) {
            return null;
          } else {
            return {
              'invalidNumeric': true
            };
          }
        }
      }, {
        key: "mackAddressValidator",
        value: function mackAddressValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var value = control.value.toString();

          if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
          } else {
            return {
              'invalidMackAddress': true
            };
          }
        }
      }, {
        key: "gatewayAddressValidator",
        value: function gatewayAddressValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var value = control.value.toString();

          if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
          } else {
            return {
              'invalidMackAddress': true
            };
          }
        }
      }, {
        key: "ipValidator",
        value: function ipValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var value = control.value.toString();

          if (value.match(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g)) {
            return null;
          } else {
            return {
              'invalidIp': true
            };
          }
        }
      }, {
        key: "domainNameValidator",
        value: function domainNameValidator(control) {
          if (ValidationService.isEmptyInputValue(control.value)) return null;
          var value = control.value.toString();

          if (value.match(/^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/g)) {
            return null;
          } else {
            return {
              'invalidDomainName': true
            };
          }
        }
      }]);

      return ValidationService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiBaseUrl: 'https://s-tenant.vdotok.dev/API/v0/'
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Summen Zahid\Desktop\call vdotok angular\js_chat\JS-chat\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map