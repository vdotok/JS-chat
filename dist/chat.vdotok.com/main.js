"use strict";
(self["webpackChunkvdotok"] = self["webpackChunkvdotok"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/chat/chat.component */ 3203);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ 5233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'signup',
  component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
}, {
  path: 'chat',
  component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
  canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: '**',
  redirectTo: 'login'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat/chat.component */ 3203);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/app-material/app-material.module */ 2859);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/add-group/add-group.component */ 4718);
/* harmony import */ var _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/new-chat/new-chat.component */ 5844);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__.AppMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot({
    maxOpened: 1,
    preventDuplicates: true
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent, _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__.AddGroupComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__.NewChatComponent, _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__.AppMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule]
  });
})();

/***/ }),

/***/ 4718:
/*!******************************************************************!*\
  !*** ./src/app/components/chat/add-group/add-group.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGroupComponent": () => (/* binding */ AddGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















const _c0 = ["searchInput"];
function AddGroupComponent_ng_container_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddGroupComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_container_18_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const user_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.selectContact(user_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddGroupComponent_ng_container_18_div_6_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r5.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r5["selected"]);
  }
}
function AddGroupComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.closemodel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddGroupComponent_div_19_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 35)(12, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx_r2.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.loading);
  }
}
function AddGroupComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "div", 38)(2, "div", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_img_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 32)(7, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddGroupComponent_ng_template_20_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 35)(11, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx_r4.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.loading);
  }
}
class AddGroupComponent {
  constructor(pubsubService, svc, toastr, _fb, changeDetector) {
    this.pubsubService = pubsubService;
    this.svc = svc;
    this.toastr = toastr;
    this._fb = _fb;
    this.changeDetector = changeDetector;
    this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername();
    this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); //<string>
    this.loading = true;
    this.addGroupModel = false;
    this.AllUsers = [];
    this.activeChat = {
      chatHistory: []
    };
    this.message = "";
    this.group_title = "";
    this.groupnameError = "";
    this.selectedUsers = [];
    this.CopyAllUsers = [];
    this.u_users = [];
    this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.form = this._fb.group({
      group_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)])
    }, {
      updateOn: "change"
    });
    document.addEventListener("keyup", event => {
      if (event.code === "Enter" && !this.loading) {
        this.addGroup();
      }
    });
  }
  ngAfterViewInit() {
    if (this.searchInput) {
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.searchInput.nativeElement, "input").pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(""), (0,rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(value => {
        this.loading = true;
        if (!value) {
          const data = {
            sorting: "ORDER BY full_name ASC",
            search_field: "full_name",
            search_value: "",
            condition: "contains"
          };
          return this.svc.post("AllUsers", data).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__.map)(res => {
            console.log("**** Res of All users (group chat):\n\n", res);
            this.u_users = res.users.filter(u => u.ref_id !== src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData().ref_id);
            if (!(this.u_users && this.u_users.length)) {
              this.u_users = [];
            }
            this.CopyAllUsers = [...this.u_users];
            return res;
          }));
        }
        const temparaay = [...this.CopyAllUsers];
        const filteruser = temparaay.filter(user => {
          const searchValue = value.toLowerCase();
          if (user.full_name.toLowerCase().startsWith(searchValue)) {
            return -1;
          }
        });
        const returnData = {
          users: filteruser
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(returnData);
      })).subscribe(res => {
        this.loading = false;
        this.u_users = res.users.filter(u => u.ref_id !== src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData().ref_id);
        if (!this.u_users || !this.u_users.length) {
          this.toastr.error("Opps!", "No contacts found");
          this.AllUsers = [];
        } else {
          this.AllUsers = this.u_users;
        }
        this.setAlreadySelected();
      });
    }
  }
  setAlreadySelected() {
    this.selectedUsers.map(user => {
      const userIndex = this.AllUsers.find(alluser => alluser.user_id == user.user_id);
      if (userIndex) userIndex["selected"] = true;
    });
    this.changeDetector.detectChanges();
  }
  selectContact(contact) {
    this.groupnameError = "";
    contact["selected"] = !contact["selected"];
    this.changeDetector.detectChanges();
    this.selectedUsers.push(contact);
    this.selectedUsers = this.selectedUsers.filter(user => user.selected);
    this.selectedUsers = [...new Set(this.selectedUsers)];
    if (!this.selectedUsers.length) {
      this.groupnameError = "Please Select Contacts";
    } else if (this.selectedUsers.length > 4) {
      this.groupnameError = "Participants cannot be more than 4";
    }
    console.error("groupnameError", this.groupnameError);
    this.changeDetector.detectChanges();
  }
  openDialog(content) {
    console.log("**** openDialog:\n\n");
    this.groupnameError = "";
    this.selectedUsers = this.selectedUsers.filter(user => user.selected);
    console.log("**** selected users length\n\n", this.selectedUsers);
    this.changeDetector.detectChanges();
    if (!this.selectedUsers.length) {
      this.groupnameError = "Please Select Contacts";
      return;
    } else if (this.selectedUsers.length > 4) {
      this.groupnameError = "Participants cannot be more than 4";
      return;
    }
    if (this.selectedUsers.length == 0) {
      const useridArray = this.selectedUsers.map(user => user.user_id);
      const data = {
        participants: useridArray,
        auto_created: useridArray.length > 1 ? 0 : 1,
        group_title: "One to One chat"
      };
      this.svc.post("CreateGroup", data).subscribe(v => {
        this.changeDetector.detectChanges();
        if (v && v.status == 200) {
          this.groupnameError = "";
          this.setActiveChat.emit(v.group);
          this.form.reset();
        }
        this.selectedUsers = [];
        this.changeDetector.detectChanges();
        this.loading = false;
        this.changeEvent.emit({
          event: "THREAD",
          group: v.group
        });
      });
    } else {
      this.addGroupModel = true;
    }
  }
  //Called when user clicks on done button
  addGroup() {
    src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateForm(this.form);
    const useridArray = this.selectedUsers.map(user => user.user_id);
    if (this.form.invalid || !useridArray.length || this.loading) return;
    if (useridArray.length > 5) {
      this.toastr.error("OPPS!", "participants Can not be more than 5!");
      return;
    }
    this.loading = true;
    this.changeDetector.detectChanges();
    let data = {
      participants: useridArray,
      auto_created: 0 //useridArray.length > 1 ? 0 : 1
      //commented this because in case of group chat auto_created is always equal to 0:  useridArray.length > 1 ? 0 : 1,
    };

    data = {
      ...data,
      ...this.form.value
    };
    console.log("**** group case:\n\n  ", data);
    this.svc.post("CreateGroup", data).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        //ABM - M2M GROUP CASE:
        let participants_ref_ids = [];
        this.selectedUsers.map(p => {
          participants_ref_ids.push(p.ref_id);
        });
        //participants_ref_ids.push(StorageService.getUserData().ref_id);
        const groupInfo = {
          from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "new",
          groupModel: v
        };
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //
        this.changeEvent.emit({
          event: "THREAD",
          group: v.group
        }); //added this because after creating m2m group, no group list is showing
        //
        this.groupnameError = "";
        this.setActiveChat.emit(v.group);
        this.toastr.success("Success!", "The group has been created!");
        this.closemodel();
        this.form.reset();
      }
      this.selectedUsers = [];
      this.changeDetector.detectChanges();
      this.loading = false;
    });
  }
  closemodel() {
    this.selectedUsers = [];
    this.addGroupModel = false;
    this.AllUsers.forEach(element => element["selected"] = false);
    this.changeEvent.emit({
      event: "THREAD",
      group: {}
    });
    this.changeDetector.detectChanges();
  }
  backScreen() {
    console.log("backScreen  - addp-group");
    this.changeEvent.emit({
      event: "CHAT",
      group: {}
    });
  }
}
AddGroupComponent.ɵfac = function AddGroupComponent_Factory(t) {
  return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_2__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};
AddGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddGroupComponent,
  selectors: [["add-group"]],
  viewQuery: function AddGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
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
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_Template_img_click_3_listener() {
        return ctx.backScreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create Group Chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_Template_div_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openDialog(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddGroupComponent_ng_container_18_Template, 7, 2, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddGroupComponent_div_19_Template, 15, 3, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddGroupComponent_ng_template_20_Template, 14, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.groupnameError ? "text-danger" : "cntct");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.groupnameError ? ctx.groupnameError : "Select Contacts", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addGroupModel);
    }
  },
  dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
  styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cbi5jaGF0YnRuIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcbn1cblxuLnNlbGVjdHVzZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3203:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helpers/helpersFunctions */ 8288);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ 2111);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-group/add-group.component */ 4718);
/* harmony import */ var _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-chat/new-chat.component */ 5844);
/* harmony import */ var _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipe/safeurl */ 3686);
























const _c0 = ["messageInputElement"];
function ChatComponent_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42)(1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Available ChatRoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Tap and hold on any message to star it, so you can easily find it later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_ng_container_5_ng_container_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", group_r14.unReadCount, "");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r14 == null ? null : group_r14.userTypingContent);
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", group_r14.unReadCount ? "misreadMsg" : "readMsg");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r17.getLastMessage(group_r14), " ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", group_r14.Online ? "cardOnlineStatus" : "cardOfflineStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", group_r14.Online ? "Online" : "Offline", " ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", group_r14.onlineParticipants + "/" + group_r14.TotalParticipants, " Online ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const group_r14 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.setActiveChat(group_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 46)(3, "div", 47)(4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ChatComponent_ng_container_5_ng_container_9_span_6_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ChatComponent_ng_container_5_ng_container_9_p_7_Template, 2, 1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ChatComponent_ng_container_5_ng_container_9_p_8_Template, 2, 2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 52)(10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 55)(13, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const group_r14 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.openModal(group_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "EDIT GROUP NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const group_r14 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.deleteGroup(group_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ChatComponent_ng_container_5_ng_container_9_p_17_Template, 2, 2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ChatComponent_ng_container_5_ng_container_9_p_18_Template, 2, 1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r14.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r14.unReadCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r14.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !group_r14.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r14.auto_created);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !group_r14.auto_created);
  }
}
function ChatComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 35)(2, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "CHATROOMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_Template_h4_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.newChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Create +");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ChatComponent_ng_container_5_div_6_Template, 5, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 39)(8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ChatComponent_ng_container_5_ng_container_9_Template, 19, 6, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.AllGroups.length && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.AllGroups);
  }
}
function ChatComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "add-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_6_Template_add_group_setActiveChat_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.setchat($event));
    })("changeEvent", function ChatComponent_ng_container_6_Template_add_group_changeEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.changeSidebar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "new-chat", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_7_Template_new_chat_setActiveChat_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.setchat($event));
    })("changeEvent", function ChatComponent_ng_container_7_Template_new_chat_changeEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.changeSidebar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_img_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_img_17_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.backScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ChatComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r4.activeChat.chatTitle, " ");
  }
}
function ChatComponent_ng_container_20_ng_container_1_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](chat_r40.messageBy);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74)(1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](chat_r40.content);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 77);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 50);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !chat_r40.content);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 77);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 50);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 84);
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", chat_r40.content, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_audio_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "audio", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "source", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", chat_r40.content, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "video", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "source", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", chat_r40.content, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r55.checkFileType(chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_img_1_Template, 1, 1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_audio_2_Template, 2, 1, "audio", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_video_3_Template, 2, 1, "video", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_img_4_Template, 1, 1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.subType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.subType == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.subType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.subType == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_container_20_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template, 8, 7, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !chat_r40.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.content);
  }
}
function ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Read ", chat_r40.readCount, " ");
  }
}
function ChatComponent_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ChatComponent_ng_container_20_ng_container_1_h4_2_Template, 2, 1, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ChatComponent_ng_container_20_ng_container_1_div_4_Template, 3, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ChatComponent_ng_container_20_ng_container_1_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ChatComponent_ng_container_20_ng_container_1_div_6_Template, 3, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", chat_r40.from == ctx_r39.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.from != ctx_r39.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !chat_r40.content && chat_r40.type === "ftp");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.type !== "text" && chat_r40.type === "ftp");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", chat_r40.readCount && chat_r40.from == ctx_r39.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 7, chat_r40.date, "shortTime"), " ");
  }
}
function ChatComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChatComponent_ng_container_20_ng_container_1_Template, 12, 10, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.activeChat["chatHistory"]);
  }
}
function ChatComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div")(5, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 86)(7, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 89)(12, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChatComponent_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r55.newChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChatComponent_div_21_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.getAllGroups());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
}
function ChatComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_ng_container_24_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.removeAttachment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.fileToSend.name);
  }
}
function ChatComponent_input_25_Template(rf, ctx) {
  if (rf & 1) {

    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 104, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function ChatComponent_input_25_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r68.typingmessage($event));
    })("ngModelChange", function ChatComponent_input_25_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.message = $event);

    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r8.message);
  }
}
function ChatComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {

    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 106)(1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_div_42_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r71.closeImage());

    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, ctx_r10.popupimagesrc), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 106)(1, "div", 109)(2, "div", 110)(3, "div", 111)(4, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Edit group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_div_43_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 114)(8, "form", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function ChatComponent_div_43_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.editGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Name your group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 117)(12, "form-errors", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_div_43_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r76.editGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r11.groupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r11.groupForm.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r11.loading);
  }
}
class ChatComponent {
  constructor(pubsubService, svc, router, elRef, dialog, toastr, changeDetector, _fb) {
    this.pubsubService = pubsubService;
    this.svc = svc;
    this.router = router;
    this.elRef = elRef;
    this.dialog = dialog;
    this.toastr = toastr;
    this.changeDetector = changeDetector;
    this._fb = _fb;
    this.setActiveChatt = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.editGroupModel = false;
    this.loading = true;
    this.AllGroups = [];
    this.activeChat = {
      chatHistory: []
    };
    this.message = "";
    this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername();
    this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData();
    this.threadType = "THREAD";
    this.fileToSend = null;
    this.isActiveThread = false;
    this.popupimagesrc = "";
    this.screen = "CHAT";
    this.sdkconnected = false;
    this.setToActive = null;
    this.groupForm = this._fb.group({
      group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      group_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)])
    }, {
      updateOn: "change"
    });
    this.pubsubService.initConfigure();
  }
  ngOnInit() {
    this.pubsubService.Client.on("connect", response => {
      console.log("*** on-connect response:\n", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });
    this.pubsubService.Client.on("register", response => {
      console.log("*** on-register response:\n", response);
    });
    this.pubsubService.Client.on("disconnect", response => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });
    document.addEventListener("keyup", event => {
      if (event.code === "Enter") {
        this.sendTextMessage();
      }
    });
  }
  ngAfterViewInit() {
    this.pubsubService.Client.on("authentication_error", res => {
      console.log("authentication_error", res);
    });
    this.pubsubService.Client.on("offline", response => {
      console.log("*** on-offline", response);
      this.setOfflineStatus(response);
    });
    this.pubsubService.Client.on("online", response => {
      console.log("*** on-online", response);
      this.setOnlineStatus(response);
    });
    this.pubsubService.Client.on("subscribed", response => {
      console.log("subscribed", response);
      this.setOnlineStatusforSubscribe(response);
    });
    this.pubsubService.Client.on("message", response => {
      response = JSON.parse(JSON.stringify(response));
      console.log("**** on-message response: \n\n", response);
      //console.trace("new message", response);
      if (response.data) {
        this.updateGroup(response);
      }
      if (response.type == "text" || response.type == "ftp" || response.type == "file" || response.type == "image" || response.type == "audio" || response.type == "video") {
        //console.log("**** on-message response: \n\n", response);
        this.scroll();
        const chatthread = this.findChatThread(response.to);
        const isActiveThread = chatthread.id == this.activeChat.id;
        chatthread["unReadCount"] = isActiveThread ? 0 : (chatthread["unReadCount"] || 0) + 1;
        response = this.messageBy(chatthread, response);
        response["isRead"] = isActiveThread;
        response["auto_created"] = chatthread["auto_created"];
        chatthread["lastMessage"] = response.content;
        chatthread["time"] = new Date(response.id);
        chatthread["type"] = response.type;
        if (response.subType) {
          response["subType"] = response.subType;
          chatthread["subType"] = response.subType;
        }
        //console.log("****asdfghjkjhgfds:\n", {response}, {chatthread});
        this.pushMessage(chatthread, response);
        this.readSingleMessage(response, isActiveThread);
        setTimeout(() => {
          this.AllGroups.sort((a, b) => {
            return a.id == chatthread.id ? -1 : 1;
          });
        }, 500);
        this.changeDetector.detectChanges();
      }
      //---------------------------------//
      else if (response.type == "typing") {
        this.setUserTyping(response);
      } else if (response.receiptType == 3) {
        let chName = response.topic || response.to;
        if (response.to != undefined) chName = response.to;
        const chatthread = this.findChatThread(chName);
        const message = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(chatthread.chatHistory, "id", response.messageId);
        console.log("**** message:\n\n", message);
        if (message) {
          message["readCount"] = (message["readCount"] || 0) + 1;
        }
        this.changeDetector.detectChanges();
      }
    });
    if (this.messageInputElement) {
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this.messageInputElement.nativeElement, "input").pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_13__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(800),
      //3000 => changed this because 0 for typing goes after some seconds to the receiver
      (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(data => {
        const sendMessage = {
          type: "typing",
          content: "0",
          to: this.activeChat.channel_name,
          key: this.activeChat.channel_key,
          status: 0,
          size: 0,
          isGroupMessage: false,
          from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
          id: new Date().getTime().toString(),
          date: new Date().getTime()
        };
        this.pubsubService.sendMessage(sendMessage);
      });
    }
  }
  updateGroup(grp_info) {
    let new_group = grp_info.data.groupModel.group;
    console.log("**** in update group function \n\n", {
      grp_info
    }, {
      new_group
    });
    if (grp_info.data.action == "new") {
      let i = this.AllGroups.findIndex(grp => grp.channel_name == new_group.channel_name);
      if (i === -1) {
        let chat = grp_info.data.groupModel.group;
        let subscribedata = {
          key: chat.channel_key,
          channel: chat.channel_name
        };
        let data = [];
        data.push(subscribedata);
        console.log("**** new incoming grp subs:\n\n", data);
        this.pubsubService.subscribeToChat(data);
        //this.pubsubService.subscribeToChat(data);
        if (chat["participants"].length) {
          chat["participants"] = chat["participants"].map(r => {
            r["username"] = r["username"] || r["full_name"];
            return r;
          });
        }
        chat["chatTitle"] = chat.auto_created ? chat.group_title.split("-")[0] //chat["participants"][0]["full_name"]
        : chat.group_title;
        chat["Online"] = false;
        chat["key"] = chat.channel_key;
        chat["channel"] = chat.channel_name;
        chat["chatHistory"] = [];
        chat["TotalParticipants"] = chat["participants"].length;
        chat["onlineParticipants"] = 1;
        chat["isSeen"] = true;
        console.log("!!!mmmmmmmmmm final grp before pushing: \n\n",
        // this,
        "\n", chat, "\n\n");
        this.AllGroups.push(chat);
        // this.setActiveChat(chat);
        this.changeEvent.emit("THREAD");
        //chat.clicked_item = "chat";
        this.setActiveChatt.emit(chat);
        this.loading = false;
        // console.log("** group added successfully\n", grp_info, "\n");  //{new_group}, {index}, this.AllGroups
      }
    }

    if (grp_info.data.action == "delete") {
      //console.log("$$ group deleted successfully-before\n" , this.AllGroups);
      // let cn = grp_info.data.groupModel;
      let index = this.AllGroups.findIndex(grp => grp.channel_name == new_group.channel_name);
      if (index > -1) {
        this.AllGroups.splice(index, 1);
        this.pubsubService.unsubscribeToChat({
          key: new_group.channel_key,
          channel: new_group.channel_name
        });
        this.activeChat = {};
        this.changeDetector.detectChanges();
      }
      console.log("1234** group deleted successfully\n", grp_info, "\n", this.activeChat, this.loading, !this.activeChat.chatTitle && !this.loading); //{new_group}, {index}, this.AllGroups
    }

    if (grp_info.data.action == "modify") {
      let grp_ind = this.AllGroups.findIndex(g => g.channel_name === new_group.channel_name);
      // console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n");
      if (grp_ind > -1) {
        this.AllGroups[grp_ind].group_title = new_group.group_title;
        this.AllGroups[grp_ind].chatTitle = new_group.group_title;
        //console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n",new_group.group.group_title);
      }
    }
  }

  editGroup() {
    src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.groupForm);
    console.error("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post("RenameGroup", playload).subscribe(v => {
      if (v && v.status == 200) {
        //this.getAllGroups(); //Commented this on 22-May-23 because chat history removed when rename group called
        if (this.activeChat.group_id === playload.group_id && this.activeChat.auto_created === 0) {
          console.log("&& rename group api calleds", this.activeChat, playload);
          this.activeChat.group_title = playload.group_title;
          this.activeChat.chatTitle = playload.group_title;
        }
        //ABM
        let participants_ref_ids = [];
        v.group.participants.map(p => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "modify",
          groupModel: v
        };
        console.log("TT *** edit grppp  -sending side:\n", groupInfo, "/nAPI response:", v);
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM
        this.editGroupModel = false;
        this.loading = false;
        this.toastr.success("The group has been updated!", "Success!");
      }
    });
  }
  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id
    };
    this.svc.post("DeleteGroup", playload).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.loading = false;
        let i = this.AllGroups.findIndex(g => g.id === group.id);
        this.AllGroups.splice(i, 1);
        console.log("TTTT ** delete group: ", this.AllGroups, {
          group
        }, i);
        //AMB
        let participants_ref_ids = [];
        group.participants.map(p => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "delete",
          groupModel: v
        };
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM
        //this.getAllGroups(); //commented because all groups updated and chat removed
        this.activeChat = {};
        this.loading = false;
        this.toastr.success("The group has been deleted!", "Success!");
      } else {
        console.error(v.message);
        alert(v.message);
        this.changeDetector.detectChanges();
      }
    });
  }
  addNewGroupToAllGroup(group) {
    this.setToActive = group.id; //jugaar
    console.log("aaaa - addNewGroupToAllGroup:  ", group, "\n", this.setToActive);
    let chat = group;
    if (chat["participants"].length) {
      chat["participants"] = chat["participants"].map(r => {
        r["username"] = r["username"] || r["full_name"];
        return r;
      });
    }
    chat["chatTitle"] = chat.auto_created ? chat.group_title.split("-")[1] : chat.group_title;
    //chat.auto_created? chat["participants"][0]["full_name"] : chat.group_title;
    chat["Online"] = false;
    chat["key"] = chat.channel_key;
    chat["channel"] = chat.channel_name;
    chat["chatHistory"] = [];
    chat["TotalParticipants"] = chat["participants"].length;
    chat["onlineParticipants"] = 1;
    chat["isSeen"] = true;
    this.AllGroups.push(chat);
    console.log("aaa allgroups:\n\n", this.AllGroups, chat["participants"][0]["full_name"]);
    //======================//
    // **** Subscribing group ****:
    let subscribedata = {
      key: chat.channel_key,
      channel: chat.channel_name
    };
    let data = [];
    data.push(subscribedata);
    this.pubsubService.subscribeToChat(data);
    // **** Subscribing group ****:
    //======================//
    if (!this.activeChat.chatTitle) {
      this.activeChat = this.AllGroups.length ? this.AllGroups["0"] : {};
    }
    if (this.setToActive) {
      const indexchat = this.AllGroups.find(group => group.id == this.setToActive);
      this.activeChat = indexchat ? indexchat : this.AllGroups["0"];
      this.setToActive = null;
    }
    this.isActiveThread = true;
    setTimeout(() => {
      this.sortThread();
    }, 500);
    this.changeDetector.detectChanges();
  }
  getAllGroups() {
    this.loading = true;
    this.svc.get("AllGroups").subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        this.AllGroups = v.groups.map(chat => {
          if (chat["participants"].length) {
            chat["participants"] = chat["participants"].map(r => {
              r["username"] = r["username"] || r["full_name"];
              return r;
            });
          }
          chat["chatTitle"] = chat.auto_created ? chat["participants"][0]["full_name"] : chat.group_title;
          chat["Online"] = false;
          chat["key"] = chat.channel_key;
          chat["channel"] = chat.channel_name;
          chat["chatHistory"] = [];
          chat["TotalParticipants"] = chat["participants"].length;
          chat["onlineParticipants"] = 1;
          chat["isSeen"] = true;
          return chat;
        });
        console.log("this.activeChat.chatTitle", this.activeChat);
        if (!this.activeChat.chatTitle) {
          this.activeChat = this.AllGroups.length ? this.AllGroups["0"] : {};
        }
        if (this.setToActive) {
          const indexchat = this.AllGroups.find(group => group.id == this.setToActive);
          this.activeChat = indexchat ? indexchat : this.AllGroups["0"];
          this.setToActive = null;
        }
        this.isActiveThread = true;
        this.pubsubService.subscribeToChat(this.AllGroups);
      }
      setTimeout(() => {
        this.sortThread();
      }, 500);
      this.changeDetector.detectChanges();
    });
  }
  /* ======================================================================================================================= */
  changeSidebar($event) {
    this.threadType = $event.event;
    console.log("changeSidebar:  ", $event);
    if (this.threadType == "THREAD") {
      this.addNewGroupToAllGroup($event.group);
      //this.getAllGroups(); //commented on 24-May-23 because all chat removed
    }
  }

  setActiveChat(group) {
    console.log("aaaa - setActiveChat:  , ", group);
    this.isActiveThread = group.id == this.activeChat.id;
    if (!this.isActiveThread) this.message = "";
    this.activeChat = group;
    group["unReadCount"] = 0;
    this.screen = "MSG";
    this.scroll();
    group.chatHistory = group.chatHistory || [];
    this.readsendMessage(group.chatHistory);
    this.changeDetector.detectChanges();
  }
  //Called when group created:
  setchat(chat) {
    console.log("**** aaaa - setChat: ", chat);
    this.setToActive = chat.id; //chat.id
    this.addNewGroupToAllGroup(chat);
  }
  openModal(group) {
    if (group.auto_created) {
      alert("Can not change One to one group title");
      return;
    }
    group["group_id"] = group.id;
    this.groupForm.reset(group);
    this.editGroupModel = true;
    this.changeDetector.detectChanges();
  }
  checkFileType(content) {
    let preview = content.includes("txt") //text/plain
    ? "./assets/images/txt.png" : content.includes("pdf") ? "./assets/images/pdf.png" : content.includes("json") ? "./assets/images/json.png" : "./assets/images/Document.png"; //"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png";
    //if (content.includes("video/")) preview = "./assets/images/video.png";
    //if (content.includes("audio/")) preview = "./assets/images/audio.png";
    //console.log("**** file preview: ", content, "\n", preview);
    return preview;
  }
  fileType(content) {
    return content.split(";")[0].split(":")[1];
  }
  findChatThread(channel) {
    return (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(this.AllGroups, "channel_name", channel);
  }
  readSingleMessage(response, isActiveThread) {
    if (response.from == this.currentUserName || !isActiveThread) return;
    const chatobj = {
      messageId: response.id,
      receiptType: 3,
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
      key: response.key,
      to: response.to,
      date: new Date().getTime()
    };
    this.pubsubService.readSingleMessage(chatobj);
  }
  readsendMessage(chatHistory) {
    const unreadchatHistory = chatHistory.filter(chat => !chat.isRead).map(chat => {
      const chatobj = {
        receiptType: 3,
        messageId: chat.id,
        from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
        key: chat.key,
        to: chat.to,
        date: new Date().getTime()
      };
      return chatobj;
    });
    if (unreadchatHistory.length) this.pubsubService.readMessage(unreadchatHistory);
    chatHistory = chatHistory.map(chat => {
      chat.isRead = true;
      return chat;
    });
  }
  handleFileInput(files) {
    this.fileToSend = files.item(0);
  }
  invalidSize() {
    return this.fileToSend.size / 1024 > 6144;
  }
  removeAttachment() {
    this.fileToSend = null;
  }
  sendTextMessage() {
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
    // ************ Sending file here ************ : 
    if (this.fileToSend) {
      //------- Changing File Sharing Procedure to FTP -------//
      let formData = new FormData(); // Currently empty
      let ext = this.getExtension(this.fileToSend.name);
      let subtype = this.getFileType(this.fileToSend);
      let sizeOfFile = this.fileToSend.size;
      formData.append("type", "ftp");
      formData.append("uploadFile", this.fileToSend);
      formData.append("auth_token", this.currentUserData.auth_token);
      formData.append("request_type", "web");
      formData.append("extension", ext);
      // subtype = this.getFileType(this.fileToSend);
      // sizeOfFile = this.fileToSend.size;
      console.log("**** Name of the selected file:    ", this.fileToSend.name, "\n\nFile:  ", this.fileToSend.size, "\n\nSubType:     ", subtype, "\n\nExtention:     ", ext);
      axios__WEBPACK_IMPORTED_MODULE_16__["default"].post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl}s3upload/`, formData).then(response => {
        if (response.data.status === 200) {
          const option = {
            type: "ftp",
            content: response.data.file_name,
            to: this.activeChat.channel_name,
            key: this.activeChat.channel_key,
            subType: subtype,
            id: new Date().getTime().toString(),
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
            topic: this.activeChat.channel_name,
            date: new Date().getTime(),
            status: 1,
            isGroupMessage: false,
            size: sizeOfFile //0,
          };

          console.log("**** OPTIONS:  \n\n", option);
          this.pubsubService.sendMessage(option);
        }
      });
      this.fileToSend = null;
      //------- Changing File Sharing Procedure to FTP -------//
      return;
      // this.pubsubService.Client.SendFile(this.fileToSend, option);
    }

    if (!this.message) return;
    const sendMessage = {
      type: "text",
      content: this.message,
      to: this.activeChat.channel_name,
      key: this.activeChat.channel_key,
      status: 1,
      size: 0,
      isGroupMessage: false,
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
      id: new Date().getTime().toString(),
      date: new Date().getTime()
    };
    this.pubsubService.sendMessage(sendMessage);
    this.message = "";
    this.scroll();
    if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
      this.sortThread();
    }
  }
  getExtension(filename) {
    return filename.split(".").pop();
  }
  getFileType(fileR) {
    //All cross platforms following these ENUMS:
    // int image = 0;
    // int audio = 1;
    // int video = 2; 
    // int file = 3; 
    let type = 3; //"file";
    const filetype = fileR.type;
    // console.log("*** file type", fileR, filetype);
    if (filetype.includes("image")) type = 0; //"image";
    else if (filetype.includes("audio")) type = 1; //"audio";
    else if (filetype.includes("video")) type = 2; //"video";
    return type;
  }
  typingmessage($event) {
    if ($event.key === "Enter") {
      this.sendTextMessage();
      return;
    }
    const sendMessage = {
      type: "typing",
      content: "1",
      to: this.activeChat.channel_name,
      key: this.activeChat.channel_key,
      status: 0,
      size: 0,
      isGroupMessage: false,
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
      id: new Date().getTime().toString(),
      date: new Date().getTime()
    };
    this.pubsubService.sendMessage(sendMessage);
  }
  setOnlineStatusforSubscribe(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat) {
      const onlineNumbers = [...new Set(response.who.map(n => n.username))];
      indexchat["onlineParticipants"] = onlineNumbers && onlineNumbers.length || 1;
      if (indexchat && indexchat.auto_created) indexchat["Online"] = onlineNumbers.length > 1;
    }
    this.changeDetector.detectChanges();
  }
  setOnlineStatus(response) {
    const indexchat = this.findChatThread(response.channel);
    if (!indexchat) return;
    if (indexchat.auto_created) indexchat["Online"] = true;
    if (!indexchat.auto_created) {
      indexchat["onlineParticipants"] = indexchat["onlineParticipants"] < indexchat["TotalParticipants"] ? indexchat["onlineParticipants"] + 1 : indexchat["onlineParticipants"];
    }
    this.changeDetector.detectChanges();
  }
  setOfflineStatus(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat && indexchat.auto_created) indexchat["Online"] = false;
    if (!indexchat.auto_created) {
      indexchat["onlineParticipants"] = indexchat["onlineParticipants"] > 2 ? indexchat["onlineParticipants"] - 1 : 1;
    }
    this.changeDetector.detectChanges();
  }
  setUserTyping(response) {
    if (response.from == this.currentUserData.ref_id) return;
    const indexchat = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(this.AllGroups, "channel_name", response.to);
    const typinguser = indexchat["participants"].find(e => e.ref_id == response.from);
    if (response.content == "1") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"] || [];
      indexchat["TypingUserList"] = [...new Set([typinguser])];
    } else if (response.content == "0") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"].filter(e => e.ref_id != response.from);
    }
    indexchat["userTyping"] = indexchat["TypingUserList"].length && response.content != "0";
    const nameList = indexchat["TypingUserList"].map(userObj => userObj.full_name);
    if (nameList.length == 1) {
      indexchat["userTypingContent"] = nameList + " " + "is typing...";
    } else if (nameList.length == 2) {
      indexchat["userTypingContent"] = nameList.join() + " " + "are typing...";
    } else if (nameList.length > 2) {
      indexchat["userTypingContent"] = nameList.filter((i, j) => j < 2).join() + " " + "and other are typing...";
    }
    // if (indexchat && indexchat.auto_created) {
    //   indexchat['userTyping'] = response.content != '0' && response.from != this.currentUserData.ref_id;
    //   indexchat['userTypingContent'] = (response.content == '1') ? sender + " is typing..." : "";
    // } else if (indexchat && !indexchat.auto_created) {
    //   this.setMultiUserTyping(response, typinguser, indexchat);
    // }
    this.changeDetector.detectChanges();
  }
  setMultiUserTyping(response, typinguser, indexchat) {
    if (response.content == "1") {
      indexchat["TypingUserList"] = [...new Set(typinguser)];
    } else if (response.content == "0") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"].filter(e => e.ref_id != response.from);
    }
    this.changeDetector.detectChanges();
  }
  scroll() {
    setTimeout(() => {
      this.elRef.nativeElement.querySelector(".messagesBox").scrollTop = this.elRef.nativeElement.querySelector(".messagesBox").scrollHeight;
    }, 500);
  }
  newChat() {
    this.threadType = "CHAT";
    this.changeDetector.detectChanges();
  }
  logout() {
    this.pubsubService.Disconnect();
    src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.clearLocalStorge();
    this.router.navigate(["login"]);
  }
  sortThread() {
    if (this.activeChat.id) {
      this.AllGroups.sort((a, b) => {
        return a.id == this.activeChat.id ? -1 : 1;
      });
    }
  }
  messageBy(chatthread, response) {
    if (this.isShowName(chatthread, response)) {
      const messageByObj = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(chatthread.participants, "ref_id", response.from);
      response["messageBy"] = messageByObj && messageByObj.full_name || "";
    }
    return response;
  }
  isShowName(chatthread, response) {
    if (chatthread["chatHistory"].length && response.from) {
      const previourmessage = chatthread["chatHistory"][chatthread["chatHistory"].length - 1];
      return previourmessage.from != response.from;
    }
    return true;
  }
  pushMessage(thread, response) {
    let newResponse = {};
    newResponse = JSON.parse(JSON.stringify(response));
    if (response.type == "text" || response.content) {
      //!response.content
      thread["chatHistory"].push(newResponse);
    } else {
      const foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
      thread.chatHistory[foundIndex] = response;
    }
  }
  getLastMessage(group) {
    const isactivethread = group.id == this.activeChat.id;
    if (!isactivethread && group.unReadCount) {
      return "Misread messages";
    } else if (group.type === "ftp") {
      return "File";
    }
    //Commented due to change of file sharing method ftp:=
    // else if (group.type != "text") {
    //   return group.type;
    // }
    return group.lastMessage;
  }
  openImage(imagesrc) {
    this.popupimagesrc = imagesrc;
    this.changeDetector.detectChanges();
  }
  closeImage() {
    this.popupimagesrc = null;
    this.changeDetector.detectChanges();
  }
  closeModal() {
    this.editGroupModel = false;
    this.changeDetector.detectChanges();
  }
  isHideThread() {
    return this.isMobile() ? this.screen != "CHAT" : false;
  }
  isHideChatScreen() {
    return this.isMobile() ? this.screen != "MSG" : false;
  }
  backScreen() {
    this.threadType = "THREAD";
    this.screen = "CHAT";
    this.changeDetector.detectChanges();
  }
  isMobile() {
    return window.innerWidth < 768;
  }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) {
  return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_4__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_5__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_18__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder));
};
ChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ChatComponent,
  selectors: [["chat"]],
  viewQuery: function ChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.messageInputElement = _t.first);
    }
  },
  outputs: {
    setActiveChatt: "setActiveChatt",
    changeEvent: "changeEvent"
  },
  decls: 44,
  vars: 16,
  consts: [[1, "row", "dashboardContainer"], [1, "col-sm-4", "leftSide", 3, "hidden"], [1, "leftSideHeader"], ["src", "./assets/images/logo2.png", 1, "dashboardLogo"], [1, "leftSideListContainer"], [4, "ngIf"], [1, "leftSideFooter"], [1, "logoutContainer", 3, "click"], ["src", "./assets/images/log-out.png", 1, "logoutLogo"], [1, "logoutText"], [1, "ml-1", 3, "ngClass"], [1, "col-sm-8", "rightSide", 3, "hidden"], [1, "rightSideHeader", "alignBottom", "chatholder"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], ["src", "./assets/images/arrow-left.png", "class", "arrowLeft hand", 3, "click", 4, "ngIf"], ["class", "roomNameText text-capitalize", 4, "ngIf"], [1, "messagesBox"], ["class", "chatRoomContainer", 4, "ngIf"], [1, "sendInputContainer", 3, "hidden"], [1, "sendInputWrapper"], ["type", "text", "class", "form-control", "placeholder", "Type to reply..", 3, "ngModel", "keyup", "ngModelChange", 4, "ngIf"], [1, "sendInputButtonContainer", "dropup", 2, "border-right", "1px solid #ebedf4"], ["src", "./assets/images/attachment.png", "data-toggle", "dropdown", 1, "sendIcon", "dropdown-toggle"], [1, "attachmentpopup", "dropdown-menu", "dropdown-menu-right", "selectOptionContainer"], [1, "attachmentPopHeader", "mx-3"], [1, "attachmentHeading"], [1, "attachmentPopContent", 3, "click"], [1, "attachmentTool"], [1, "attachmentToolIcon"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon"], ["type", "file", "id", "fileinput", 1, "d-none", 3, "change"], ["fileuploader", ""], [1, "sendInputButtonContainer", 3, "click"], ["src", "./assets/images/send.png", 1, "sendIcon"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "leftSectionHeader", 2, "align-items", "center", "margin", "0px"], [1, "leftHeading"], [1, "createText", 3, "click"], ["class", "leftSectionEmptyContainer", 4, "ngIf"], [1, "listingContainer", "fullHeight"], [1, "chatListContainer", "noHorizontalPadding"], [4, "ngFor", "ngForOf"], [1, "leftSectionEmptyContainer"], [1, "noAvailableText"], [1, "tapText"], [1, "chatsCardContainer", "hand", 3, "click"], [1, "chatsCardLeft"], [1, "chatsNameWrap"], [1, "chatName", "text-capitalize"], ["class", "unreadBadge", 4, "ngIf"], ["class", "misreadMsg", 4, "ngIf"], ["class", "misreadMsg text-capitalize", 3, "ngClass", 4, "ngIf"], [1, "chatsCardRight", "mr-1"], [1, "dropdown", "mt-1", 2, "align-self", "flex-end"], ["src", "./assets/images/more.png", 1, "moreIcon"], [1, "dropdown-content"], [1, "edit", 3, "click"], [1, "delete", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "cardOnlineStatus", 4, "ngIf"], [1, "unreadBadge"], [1, "misreadMsg"], [1, "misreadMsg", "text-capitalize", 3, "ngClass"], [3, "ngClass"], [1, "cardOnlineStatus"], [3, "setActiveChat", "changeEvent"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "roomNameText", "text-capitalize"], ["class", "msgBy text-capitalize", 4, "ngIf"], [1, "bubbleContainer"], ["class", "bubble", 4, "ngIf"], ["class", "imgbubble file-attachment", 4, "ngIf"], [1, "time"], [1, "msgBy", "text-capitalize"], [1, "bubble"], [1, "msgText"], [3, "diameter", 4, "ngIf"], [3, "diameter"], [1, "imgbubble", "file-attachment"], ["style", "width: 220px; height: 120px;", 3, "src", 4, "ngIf"], ["controls", "true", 4, "ngIf"], ["controls", "true", "style", "width: 220px; height: 120px;", 4, "ngIf"], ["class", "w-100 msgImage thumbnail img-fluid", 3, "src", 4, "ngIf"], ["download", "", 3, "href"], [2, "width", "220px", "height", "120px", 3, "src"], ["controls", "true"], [3, "src"], ["controls", "true", 2, "width", "220px", "height", "120px"], [1, "w-100", "msgImage", "thumbnail", "img-fluid", 3, "src"], [1, "chatRoomContainer"], [1, "listingContainer", 2, "height", "100%"], [1, "emptyListContainer"], [1, "emptyListTop"], ["src", "./assets/images/shipping.png", 1, "shippingIcon"], [1, "noConvoTextWrapper"], [1, "noConvoText"], [1, "noConvoSub", 2, "max-width", "200px"], [1, "emptyListBottom"], ["type", "submit", 1, "btn", "newChatButton", 3, "click"], ["type", "submit", 1, "btn", "refreshButton", 3, "click"], [1, "w-100"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon", "ml-4"], [1, "ml-2"], [1, "font-weight-bolder", "hand", "ml-2", "text-danger", 3, "click"], ["type", "text", "placeholder", "Type to reply..", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["messageInputElement", ""], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"]],
  template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {

      const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ChatComponent_ng_container_5_Template, 10, 2, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ChatComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ChatComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_9_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ChatComponent_img_17_Template, 1, 0, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ChatComponent_p_18_Template, 2, 1, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ChatComponent_ng_container_20_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ChatComponent_div_21_Template, 16, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 18)(23, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ChatComponent_ng_container_24_Template, 7, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ChatComponent_input_25_Template, 2, 1, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 23)(29, "div", 24)(30, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "ADD ATTACHMENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "X");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_34_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r77);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](39);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r9.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 27)(36, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "input", 30, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ChatComponent_Template_input_change_38_listener($event) {
        return ctx.handleFileInput($event.target.files);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_40_listener() {
        return ctx.sendTextMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ChatComponent_div_42_Template, 5, 3, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, ChatComponent_div_43_Template, 15, 3, "div", 34);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.isHideThread());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.threadType === "THREAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.threadType === "GROUP");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.threadType === "CHAT");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("LOG OUT ", ctx.currentUserData.full_name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.sdkconnected ? "online" : "offline");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.isHideChatScreen());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isMobile());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.activeChat.chatTitle && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !ctx.activeChat.chatTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.fileToSend);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.fileToSend);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.popupimagesrc);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.editGroupModel);
    }
  },
  dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressSpinner, _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__.AddGroupComponent, _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__.NewChatComponent, _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__.SafeUrlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
  styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.attachmentpopup[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 15px 5px;\n}\n\n.msgText[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  padding: 0;\n  margin: 0;\n  font-family: inter-regular;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n\n.modal[_ngcontent-%COMP%] {\n  display: block; \n  position: fixed; \n  z-index: 1; \n  padding-top: 100px; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0, 0, 0); \n  background-color: rgba(0, 0, 0, 0.9); \n}\n\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  border-radius: 6px !important;\n}\n@keyframes _ngcontent-%COMP%_zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n@media only screen and (max-width: 700px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.editgroup[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: auto;\n}\n\n.chatholder[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.online[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBQUEsMkJBQUE7QUFDQTtFQUNFLGNBQUEsRUFBQSxzQkFBQTtFQUNBLGVBQUEsRUFBQSxrQkFBQTtFQUNBLFVBQUEsRUFBQSxlQUFBO0VBQ0Esa0JBQUEsRUFBQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQSxFQUFBLGVBQUE7RUFDQSxZQUFBLEVBQUEsZ0JBQUE7RUFDQSxjQUFBLEVBQUEsNEJBQUE7RUFDQSw4QkFBQSxFQUFBLG1CQUFBO0VBQ0Esb0NBQUEsRUFBQSxxQkFBQTtBQUdGOztBQUFBLDBCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBR0Y7QUFTQTtFQUNFO0lBQ0UsbUJBQUE7RUFFRjtFQUFBO0lBQ0UsbUJBQUE7RUFFRjtBQUNGO0FBQ0EscUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUEsd0NBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuLmNoYXRidG4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xufVxuXG4uYXR0YWNobWVudHBvcHVwIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG5cbi5tc2dUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW50ZXItcmVndWxhcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnRodW1ibmFpbCB7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB6b29tIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2JiYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZWRpdGdyb3VwIHtcbiAgd2lkdGg6IDQ4NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0aG9sZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5cbi5vbmxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuLm9mZmxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5844:
/*!****************************************************************!*\
  !*** ./src/app/components/chat/new-chat/new-chat.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewChatComponent": () => (/* binding */ NewChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ 1353);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/storage.service */ 1303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);















const _c0 = ["searchInput"];
function NewChatComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const user_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.startChat(user_r2, "chat"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r2.full_name);
  }
}
class NewChatComponent {
  constructor(pubsubService, svc, dialog, toastr) {
    this.pubsubService = pubsubService;
    this.svc = svc;
    this.dialog = dialog;
    this.toastr = toastr;
    this.loading = true;
    this.AllUsers = [];
    this.CopyAllUsers = [];
    this.u_users = [];
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); //<string>
    this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (this.searchInput) {
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.searchInput.nativeElement, "input").pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(1000), (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(""), (0,rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(value => {
        this.loading = true;
        if (!value) {
          const data = {
            sorting: "ORDER BY full_name ASC",
            search_field: "full_name",
            search_value: "",
            condition: "contains"
          };
          return this.svc.post("AllUsers", data).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            this.u_users = res.users.filter(u => u.ref_id !== _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData().ref_id);
            console.log("**** Res of All users (single chat):\n\n", res, this.u_users);
            if (!(this.u_users && this.u_users.length)) {
              this.u_users = [];
            }
            this.CopyAllUsers = [...this.u_users];
            return res;
          }));
        }
        const temparaay = [...this.CopyAllUsers];
        const filteruser = temparaay.filter(user => {
          const searchValue = value.toLowerCase();
          if (user.full_name.toLowerCase().startsWith(searchValue)) {
            return -1;
          }
        });
        const returnData = {
          users: filteruser
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(returnData);
      })).subscribe(res => {
        this.loading = false;
        this.u_users = res.users.filter(u => u.ref_id !== _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData().ref_id);
        if (!this.u_users || !this.u_users.length) {
          this.toastr.error("No contacts found", "Opps!");
          this.AllUsers = [];
        } else {
          this.AllUsers = this.u_users;
        }
      });
    }
  }
  backScreen() {
    console.log("backscreen - new-chat");
    this.changeEvent.emit({
      event: "THREAD",
      group: {}
    });
  }
  //Called when "Add Group Chat" heading clicked
  addGroupEvent() {
    this.changeEvent.emit({
      event: "GROUP",
      group: {}
    });
  }
  startChat(user, val) {
    if (this.loading) return;
    this.loading = true;
    const data = {
      group_title: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData().username + "-" + user.full_name,
      participants: [user.user_id],
      auto_created: 1
    };
    console.log("** new group creation: ", _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData());
    this.svc.post("CreateGroup", data).subscribe(v => {
      if (v && v.status == 200) {
        const subscribedata = {
          ...v.group,
          key: v.group["channel_key"],
          channel: v.group["channel_name"]
        };
        const data = [];
        data.push(subscribedata);
        this.pubsubService.subscribeToChat(data);
        //ABM
        const groupInfo = {
          from: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData().ref_id,
          to: [user.ref_id],
          action: "new",
          groupModel: v
        };
        console.log("** notification send on group creation :\n\n", groupInfo, "\n\n\n\n", v, "\n", val);
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //
        this.changeEvent.emit({
          event: "THREAD",
          group: v.group
        });
        v.group.clicked_item = val;
        this.setActiveChat.emit(v.group);
        this.loading = false;
      }
    });
  }
}
NewChatComponent.ɵfac = function NewChatComponent_Factory(t) {
  return new (t || NewChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_1__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
};
NewChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NewChatComponent,
  selectors: [["new-chat"]],
  viewQuery: function NewChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewChatComponent_Template_img_click_2_listener() {
        return ctx.backScreen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "New Chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewChatComponent_Template_div_click_14_listener() {
        return ctx.addGroupEvent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Add Group Chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Contacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, NewChatComponent_ng_container_22_Template, 8, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf],
  styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L25ldy1jaGF0L25ldy1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLCtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21OYW1lVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6ICMzMTM5NGQ7XG59XG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5zZWxlY3R1c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var src_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants/const */ 5250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth/auth.service */ 866);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ 8967);









class LoginComponent {
  constructor(router, _fb, auth) {
    this.router = router;
    this._fb = _fb;
    this.auth = auth;
    this.loading = false;
    this.formError = '';
  }
  ngOnInit() {
    if (this.auth.islogin()) {
      this.router.navigate(['chat']);
    }
    this.buildForm();
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.onLogin();
      }
    });
  }
  buildForm() {
    this.loginForm = this._fb.group({
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(14)])
    }, {
      updateOn: 'change'
    });
  }
  onLogin() {
    _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_1__["default"].validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = src_constants_const__WEBPACK_IMPORTED_MODULE_2__.project_id; //'1RN1RP';
    this.loading = true;
    this.formError = null;
    this.auth.login(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setUserData(v);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setAuthToken(v.auth_token);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['chat']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
      }
    });
  }
  ngOnDestroy() {
    this.loginForm.reset();
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["ngx-login"]],
  decls: 21,
  vars: 5,
  consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "email", "placeholder", "Email/Username", "formControlName", "email", 1, "form-control"], [3, "control"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/signup"], [1, "text-muted"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 7)(10, "form-errors", 8)(11, "input", 9)(12, "form-errors", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "SIGN IN");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h5", 12)(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "SIGN UP");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Version:2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formError);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.loginForm.get("username"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loading);
    }
  },
  dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlckhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICAgIGNvbG9yOiAjMTcxNzI1O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9166:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/validators */ 5060);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var src_constants_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants/const */ 5250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/auth/auth.service */ 866);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ 8967);










class SignUpComponent {
  constructor(router, _fb, auth) {
    this.router = router;
    this._fb = _fb;
    this.auth = auth;
    this.loading = false;
  }
  ngOnInit() {
    this.buildForm();
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.onLogin();
      }
    });
  }
  buildForm() {
    this.loginForm = this._fb.group({
      'full_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__.ValidationService.usernameValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]),
      'device_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      'device_model': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      'device_os_ver': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(navigator.platform, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__.ValidationService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    }, {
      updateOn: 'change'
    });
    console.log('this.signupForm', this.loginForm);
  }
  onLogin() {
    _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = src_constants_const__WEBPACK_IMPORTED_MODULE_3__.project_id; //'1RN1RP';
    this.loading = true;
    this.formError = null;
    this.auth.signup(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setUserData(v);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setAuthToken(v.auth_token);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['chat']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
      }
    });
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["sign-up"]],
  decls: 21,
  vars: 6,
  consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "text", "placeholder", "Your Username", "formControlName", "full_name", 1, "form-control"], [3, "control"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/login"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Sign Up to your account");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_8_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 7)(10, "form-errors", 8)(11, "input", 9)(12, "form-errors", 8)(13, "input", 10)(14, "form-errors", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_16_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " SIGN UP");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "h5", 13)(19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "SIGN IN");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formError);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.loginForm.get("full_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.loginForm.get("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
    }
  },
  dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_5__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJIZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMTcxNzI1O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7724:
/*!*****************************************************!*\
  !*** ./src/app/shared/FormsHandler/FormsHandler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormsHandler)
/* harmony export */ });
class FormsHandler {
  /**
   * This method is use to validate Form
   * @param formErrors string
   * @param form  form instance | object
   * @return errors as string
   * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
   **/
  static validateForm(form) {
    if (form.valid) {
      return true;
    } else {
      if (form.controls) {
        for (const field in form.controls) {
          const control = form.get(field);
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
  static validateFormArray(form) {
    if (form.valid) {
      return true;
    } else {
      if (form.controls) {
        for (const group in form.controls) {
          const groupFiled = form.get(group);
          for (const field in groupFiled.controls) {
            const control = groupFiled.get(field);
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
  static deleteEmptyFileds(data) {
    if (data) {
      for (const key in data) {
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
}

/***/ }),

/***/ 8967:
/*!*************************************************************!*\
  !*** ./src/app/shared/FormsHandler/get-errors.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetErrorsComponent": () => (/* binding */ GetErrorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GetErrorsComponent {
  hasErrors() {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }
  listOfErrors() {
    const errors = Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
    return errors.length ? errors[0] : errors;
  }
  getMessage(type, params) {
    return GetErrorsComponent.errorMessages[type](params);
  }
}
GetErrorsComponent.errorMessages = {
  'required': () => 'The specified information is required.',
  'minlength': params => 'The min number of characters is ' + params.requiredLength,
  'maxlength': params => 'The max allowed number of characters is ' + params.requiredLength,
  'pattern': params => 'The required pattern is: ' + params.requiredPattern,
  'years': params => params.message,
  'countryCity': params => params.message,
  'uniqueName': params => params.message,
  'telephoneNumbers': params => params.message,
  'telephoneNumber': params => params.message,
  'invalidNumber': () => 'The specified information is invalid.',
  'emptySpaces': () => 'The specified information is invalid.',
  'email': () => 'Email is not valid',
  'invalidPassword': () => 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value',
  'invalidUsernameCharacters': () => 'invalid user name',
  'invalidInputCharacters': () => 'The specified information is invalid.',
  'invalidEmailAddress': () => 'Email is not valid'
};
GetErrorsComponent.ɵfac = function GetErrorsComponent_Factory(t) {
  return new (t || GetErrorsComponent)();
};
GetErrorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 2859:
/*!************************************************************!*\
  !*** ./src/app/shared/app-material/app-material.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMaterialModule": () => (/* binding */ AppMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-radio */ 3493);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 3921);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


























const globalRippleConfig = {
  disabled: true
};
class AppMaterialModule {}
AppMaterialModule.ɵfac = function AppMaterialModule_Factory(t) {
  return new (t || AppMaterialModule)();
};
AppMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppMaterialModule
});
AppMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS,
    useValue: globalRippleConfig
  }],
  imports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__.MatLegacyMenuModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__.LayoutModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, {
    imports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__.MatLegacyMenuModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule],
    exports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__.LayoutModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule]
  });
})();

/***/ }),

/***/ 5233:
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});

/***/ }),

/***/ 866:
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
  constructor(http) {
    this.http = http;
    this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  }
  login(data) {
    return this.http.post('Login', data);
  }
  signup(data) {
    return this.http.post('SignUp', data);
  }
  logout() {
    _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.clearLocalStorge();
  }
  getToken() {
    return _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getAuthToken();
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  islogin() {
    return !!this.getToken();
  }
  resetUser() {
    this.currentUserId = null;
    this.userRequest = null;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  }
  getUserId() {
    const userdata = _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
    return userdata._id;
  }
  isAuthUser() {
    return this.http.get('users/current-user');
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac
});

/***/ }),

/***/ 8288:
/*!****************************************************!*\
  !*** ./src/app/shared/helpers/helpersFunctions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoUnsubscribe": () => (/* binding */ AutoUnsubscribe),
/* harmony export */   "FindArrayObject": () => (/* binding */ FindArrayObject),
/* harmony export */   "FindObjectByValue": () => (/* binding */ FindObjectByValue),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyObj": () => (/* binding */ isEmptyObj),
/* harmony export */   "isMobile": () => (/* binding */ isMobile)
/* harmony export */ });
function isEmptyObj(obj) {
  for (const key in obj) {
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
  const emailLowercase = email.toLowerCase();
  if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
    return true;
  } else {
    return false;
  }
}
function FindObjectByValue(inputArray, value) {
  return inputArray.find(e => e == value);
}
function FindArrayObject(inputArray, key, value) {
  return inputArray.find(e => e[key] == value);
}
function AutoUnsubscribe(constructor) {
  const original = constructor.prototype.ngOnDestroy;
  constructor.prototype.ngOnDestroy = function () {
    for (const prop in this) {
      if (prop) {
        const property = this[prop];
        if (property && typeof property.unsubscribe === 'function') {
          property.unsubscribe();
        }
      }
    }
    if (original && typeof original === 'function') {
      original.apply(this, arguments);
    }
  };
}
function isMobile() {
  return window.innerWidth < 768;
}

/***/ }),

/***/ 6241:
/*!***************************************!*\
  !*** ./src/app/shared/pipe/filter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPipe": () => (/* binding */ filterPipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/base.service */ 2365);





class filterPipe {
  constructor(toastr, svc) {
    this.toastr = toastr;
    this.svc = svc;
  }
  transform(items, value) {
    if (!items) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    if (!value) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(items);
    const data = {
      "search_field": "full_name",
      "search_value": value,
      "condition": "contains"
    };
    return this.svc.post('AllUsers', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.status == 400) {
        this.toastr.error("No contacts found", "Opps!");
        return [];
      }
      return res.users;
    }));
  }
}
filterPipe.ɵfac = function filterPipe_Factory(t) {
  return new (t || filterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService, 16));
};
filterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
  name: "filter",
  type: filterPipe,
  pure: true
});

/***/ }),

/***/ 3686:
/*!****************************************!*\
  !*** ./src/app/shared/pipe/safeurl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeUrlPipe {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
  return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeUrlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeUrl",
  type: SafeUrlPipe,
  pure: true
});

/***/ }),

/***/ 2365:
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class BaseService {
  constructor(http) {
    this.http = http;
    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    this.userData$ = this.userData.asObservable();
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isLoadingResponse = this.isLoading.asObservable();
  }
  /**
  * This method is used to Call API using Http GET method.
  * @param URL
  * @return obserables responsce
  * @author  Muhammad Mukhtiar  <muhammad.mukhtiar@norgic.com>
  **/
  get(URL) {
    return this.http.get(URL);
  }
  /**
  * This method is use to add or update data using API
  * @param formData
  * @return obserables responsce
  * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
  **/
  save(URL, data = {}) {
    return this.http.post(URL, data);
  }
  /**
  * This method is used to Call API using Http Post method.
  * @param URL
  * @param URL
  * @return obserables responsce
  * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
  **/
  post(URL, payload = {}) {
    return this.http.post(URL, payload);
  }
}
BaseService.ɵfac = function BaseService_Factory(t) {
  return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
BaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: BaseService,
  factory: BaseService.ɵfac
});

/***/ }),

/***/ 4691:
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 2365);








class HttpService {
  constructor(router, svc) {
    this.router = router;
    this.svc = svc;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
  }
  intercept(req, next) {
    req = this.getModifiedReq(req);
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
        if (event && event.body) {
          const serRes = event.body;
          this.svc.isLoading.next(false);
          if (serRes.code === 401) {
            _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.clearLocalStorge();
            this.showErrorMsg(serRes.message);
            this.router.navigate(['/login']);
          } else if (serRes.code === 407) {
            // StorageService.clearLocalStorge();
            this.showErrorMsg(serRes.message);
            // this.router.navigate(['/auth/login']);
          } else if (serRes.code === 200 || serRes.code === 201) {} else {
            this.showErrorMsg(serRes.message);
          }
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(errorRes => {
      this.svc.isLoading.next(false);
      console.log('this should print your error!', errorRes.error);
      if (errorRes instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
        if (errorRes.status === 500) {
          // this.toastrService.danger('Opps!', "Something went wrong");
        } else {
          this.showErrorMsg(errorRes.message);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errorRes);
    }));
  }
  getModifiedReq(req) {
    req = req.clone({
      url: this.baseUrl + req.url
    });
    const formdata = JSON.stringify(req.body);
    const auth_token = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getAuthToken();
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
  showErrorMsg(errorResponse) {
    if (typeof errorResponse == 'string') {
      // this.toastrService.danger('Opps!', errorResponse);
    }
  }
}
HttpService.ɵfac = function HttpService_Factory(t) {
  return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService));
};
HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: HttpService,
  factory: HttpService.ɵfac
});

/***/ }),

/***/ 235:
/*!***************************************************!*\
  !*** ./src/app/shared/services/pubsub.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubsubService": () => (/* binding */ PubsubService)
/* harmony export */ });
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var src_constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants/const */ 5250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class PubsubService {
  constructor() {}
  ngOnDestroy() {
    this.wsSubscription.unsubscribe();
  }
  initConfigure() {
    const user = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
    this.Client = new MVDOTOK.Client({
      projectID: src_constants_const__WEBPACK_IMPORTED_MODULE_1__.project_id,
      host: `${user.messaging_server_map.complete_address}`,
      stunServer: `${user.stun_server_map ? user.stun_server_map.complete_address : ''}`
    });
    this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
  }
  sendMessage(message) {
    this.Client.SendMessage(message);
  }
  subscribeToChat(groups) {
    groups.map(chanelObj => {
      this.Client.Subscribe(chanelObj);
    });
  }
  unsubscribeToChat(groups) {
    this.Client.UnSubscribe(groups);
  }
  Disconnect() {
    this.Client.Disconnect();
  }
  readMessage(chatMessages) {
    chatMessages.map(chat => {
      this.Client.SendReceipt(chat);
    });
  }
  readSingleMessage(chatMessages) {
    this.Client.SendReceipt(chatMessages);
  }
  sendNotificationOnGroupUpdation(obj) {
    console.log("** sendNotificationOnGroupUpdation");
    this.Client.SendNotification(obj);
  }
}
PubsubService.ɵfac = function PubsubService_Factory(t) {
  return new (t || PubsubService)();
};
PubsubService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PubsubService,
  factory: PubsubService.ɵfac
});

/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StorageService {
  static clearLocalStorge() {
    localStorage.clear();
    sessionStorage.clear();
    return;
  }
  static getAuthToken() {
    return localStorage.getItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
  }
  static setAuthToken(token) {
    localStorage.setItem(StorageService.STORAGE_KEY_AUTH_TOKEN, token);
  }
  static removeAuthToken() {
    localStorage.removeItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
  }
  static getAuthUsername() {
    return localStorage.getItem(StorageService.STORAGE_KEY_USER_NAME);
  }
  static setAuthUsername(username) {
    localStorage.setItem(StorageService.STORAGE_KEY_USER_NAME, username);
  }
  static removeAuthUsername() {
    localStorage.removeItem(StorageService.STORAGE_KEY_USER_NAME);
  }
  static setUserData(userData) {
    localStorage.setItem(StorageService.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
  }
  static getUserData() {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_USER_DATA));
  }
  static removeUserData() {
    localStorage.removeItem(StorageService.STORAGE_KEY_USER_DATA);
  }
}
StorageService.STORAGE_KEY_AUTH_TOKEN = 'auth_token';
StorageService.STORAGE_KEY_USER_NAME = 'username';
StorageService.STORAGE_KEY_USER_DATA = 'user_data';
StorageService.ɵfac = function StorageService_Factory(t) {
  return new (t || StorageService)();
};
StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: StorageService,
  factory: StorageService.ɵfac
});

/***/ }),

/***/ 3722:
/*!******************************************************!*\
  !*** ./src/app/shared/services/websocket.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


class WebsocketService {
  constructor() {
    this.ready = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  initSocket(url) {
    this.webSocket = new WebSocket('wss://' + 'vtest3.vdotok.com:8443' + '/call');
    this.webSocket.onopen = () => this.ready.next();
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.webSocket.onmessage = event => observer.next(event);
      this.webSocket.onerror = event => observer.error(event);
      this.webSocket.onclose = event => observer.complete();
      // Callback invoked on unsubscribe
      return () => this.webSocket.close();
    });
  }
  send(message) {
    // if (this.webSocket.readyState === WebSocket.OPEN) {
    //   this.webSocket.send(message);
    // }
  }
  initPUBSUBSocket() {
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
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) {
  return new (t || WebsocketService)();
};
WebsocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WebsocketService,
  factory: WebsocketService.ɵfac
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/websocket.service */ 3722);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/storage.service */ 1303);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ 866);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.service */ 5233);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/base.service */ 2365);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/http.service */ 4691);
/* harmony import */ var _services_pubsub_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/pubsub.service */ 235);
/* harmony import */ var _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _pipe_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/filter */ 6241);
/* harmony import */ var _pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/safeurl */ 3686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















const components = [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_8__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__.SafeUrlPipe];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService, _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_base_service__WEBPACK_IMPORTED_MODULE_4__.BaseService, _services_pubsub_service__WEBPACK_IMPORTED_MODULE_6__.PubsubService, _services_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService, {
    provide: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_LEGACY_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: false
    }
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService,
    multi: true
  }],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_8__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__.SafeUrlPipe],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule],
    exports: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_8__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_9__.SafeUrlPipe]
  });
})();

/***/ }),

/***/ 5060:
/*!**************************************!*\
  !*** ./src/app/shared/validators.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
class ValidationService {
  static specialCharValidator(control) {
    if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
      return null;
    } else {
      return {
        'invalidCharacters': true
      };
    }
  }
  static uppercaseCharacterRule(amount) {
    return function validate(control) {
      const value = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[^A-Z]+/g;
      const stripped = value.replace(pattern, '');
      if (stripped.length < amount) {
        return {
          'uppercaseCharacterRule': true
        };
      }
      return undefined;
    };
  }
  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return {
        'invalidCreditCard': true
      };
    }
  }
  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const emailLowercase = control.value.toLowerCase();
    if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
      return null;
    } else {
      return {
        'invalidEmailAddress': true
      };
    }
  }
  static isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
  }
  static emptySpacesValidator(control) {
    console.log('emptySpacesValidator', control, control.value);
    if (control.value.match(/([^\s])/)) {
      return null;
    } else {
      return {
        'emptySpaces': true
      };
    }
  }
  static removeSpace(value) {
    return value.trim();
  }
  static englishWordsValidator(control) {
    console.log('englishWordsValidator', control);
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const tempstring = ValidationService.removeSpace(control.value);
    if (tempstring.match(/^[a-zA-Z]+( [\&a-zA-Z]+)*$/)) {
      return null;
    } else {
      return {
        'invalidCharacters': true
      };
    }
  }
  static nameValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
      return null;
    } else {
      return {
        'invalidNameCharacters': true
      };
    }
  }
  static whiteSpaceValidator(control) {
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
  static phoneValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^\+?[0-9]+$/g)) {
      return null;
    } else {
      return {
        'invalidPhone': true
      };
    }
  }
  static phoneUsernameEmailValidator(control) {
    if (control.value == null) return;
    let validEmail = true,
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
  static usernameValidator(control) {
    // RFC 2822 compliant regex
    if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
      return null;
    } else {
      return {
        'invalidUsernameCharacters': true
      };
    }
  }
  static passwordValidator(control) {
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
  static MatchPassword(control, crud) {
    if (control.value == null) return null;
    return control.root.get('password').value != control.value ? {
      passworMismatch: true
    } : null;
  }
  static pinCodeValidator(control) {
    if (control.value && control.value.match(/^[0-9]{4}$/)) {
      return null;
    } else {
      return {
        'invalidPinCode': true
      };
    }
  }
  static trimData(data) {
    if (data) {
      for (const key in data) {
        if (data[key] && typeof data[key] == "string") {
          data[key] = data[key].trim();
        }
      }
      return data;
    }
  }
  static checkInteger(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
      return null;
    } else {
      return {
        'invalidNumber': true
      };
    }
  }
  static alphnumericValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (ValidationService.whiteSpaceValidator(control.value)) return;
    // if (control.value.match(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,500}$/)) {
    if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static stringvalidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static disallowspecial(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static alphValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^\+?[A-Za-z]+$/g)) {
      return null;
    } else {
      return {
        'invalidString': true
      };
    }
  }
  static numericValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (ValidationService.whiteSpaceValidator(control.value)) return;
    const value = control.value.toString();
    if (value.match(/^\+?[0-9]+$/g)) {
      return null;
    } else {
      return {
        'invalidNumeric': true
      };
    }
  }
  static floatNumberValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^[+-]?\d+(\.\d+)?$/g)) {
      return null;
    } else {
      return {
        'invalidNumeric': true
      };
    }
  }
  static mackAddressValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
      return null;
    } else {
      return {
        'invalidMackAddress': true
      };
    }
  }
  static gatewayAddressValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
      return null;
    } else {
      return {
        'invalidMackAddress': true
      };
    }
  }
  static ipValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g)) {
      return null;
    } else {
      return {
        'invalidIp': true
      };
    }
  }
  static domainNameValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/g)) {
      return null;
    } else {
      return {
        'invalidDomainName': true
      };
    }
  }
}

/***/ }),

/***/ 5250:
/*!********************************!*\
  !*** ./src/constants/const.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project_id": () => (/* binding */ project_id)
/* harmony export */ });
const project_id = "1RN1RP";

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiBaseUrl: "https://q-tenant.vdotok.dev/API/v0/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map