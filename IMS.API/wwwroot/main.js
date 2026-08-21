"use strict";
(self["webpackChunkIMS_Angular_Frontend"] = self["webpackChunkIMS_Angular_Frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_components_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/preloader.component */ 8582);
/* harmony import */ var _core_components_toast_host_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/toast-host.component */ 5576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-preloader")(1, "app-toast-host")(2, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _core_components_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _core_components_toast_host_component__WEBPACK_IMPORTED_MODULE_1__.ToastHostComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ 3622);





const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withInterceptors)([_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor])), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)()]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _features_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/login/login.component */ 8670);
/* harmony import */ var _features_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/layout/layout.component */ 8472);
/* harmony import */ var _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/dashboard/dashboard.component */ 1626);
/* harmony import */ var _features_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/products/products.component */ 5644);
/* harmony import */ var _features_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/categories/categories.component */ 8344);
/* harmony import */ var _features_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/transactions/transactions.component */ 9762);
/* harmony import */ var _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/payments/payments.component */ 6174);
/* harmony import */ var _features_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/reports/reports.component */ 7530);
/* harmony import */ var _features_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/alerts/alerts.component */ 9678);
/* harmony import */ var _features_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/users/users.component */ 2726);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);











const routes = [{
  path: 'login',
  component: _features_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: '',
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard],
  component: _features_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  children: [{
    path: 'dashboard',
    component: _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
  }, {
    path: 'products',
    component: _features_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent
  }, {
    path: 'categories',
    component: _features_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesComponent
  }, {
    path: 'transactions',
    component: _features_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__.TransactionsComponent
  }, {
    path: 'payments',
    component: _features_payments_payments_component__WEBPACK_IMPORTED_MODULE_6__.PaymentsComponent
  }, {
    path: 'reports',
    component: _features_reports_reports_component__WEBPACK_IMPORTED_MODULE_7__.ReportsComponent
  }, {
    path: 'alerts',
    component: _features_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__.AlertsComponent
  }, {
    path: 'users',
    component: _features_users_users_component__WEBPACK_IMPORTED_MODULE_9__.UsersComponent
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];

/***/ }),

/***/ 8582:
/*!********************************************************!*\
  !*** ./src/app/core/components/preloader.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloaderComponent: () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);




function PreloaderComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", bar_r2.h, "px")("width", bar_r2.w, "px");
  }
}
function PreloaderComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
}
class PreloaderComponent {
  constructor(router) {
    this.router = router;
    this.done = false;
    this.ticketNo = '';
    this.bars = [];
    this.trackBars = Array.from({
      length: 20
    });
  }
  ngOnInit() {
    const seed = Math.floor(Math.random() * 8999 + 1000);
    this.ticketNo = String(seed);
    const widths = [2, 2, 4, 2, 6, 3];
    for (let i = 0; i < 40; i++) {
      const w = widths[Math.floor(Math.random() * widths.length)];
      const h = 8 + Math.floor(Math.random() * 18);
      this.bars.push({
        w,
        h
      });
    }
    setTimeout(() => {
      this.done = true;
    }, 2000);
  }
  static {
    this.ɵfac = function PreloaderComponent_Factory(t) {
      return new (t || PreloaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreloaderComponent,
      selectors: [["app-preloader"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 5,
      consts: [[1, "preloader"], [1, "preloader-inner"], ["aria-hidden", "true", 1, "preloader-art"], [1, "preloader-brand"], [1, "barcode"], [3, "height", "width", 4, "ngFor", "ngForOf"], [1, "ticket"], [1, "ticket-line"], [1, "ticket-no"], [1, "preloader-label"], ["aria-hidden", "true", 1, "preloader-track"], ["class", "bar", 4, "ngFor", "ngForOf"], [1, "bar"]],
      template: function PreloaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreloaderComponent_span_6_Template, 1, 4, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inventory control");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PreloaderComponent_span_14_Template, 1, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.done);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bars);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2116 ", ctx.ticketNo, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trackBars);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: [".preloader[_ngcontent-%COMP%] {\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n      background: #EDEFEA;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: opacity .5s ease, visibility .5s ease;\n      opacity: 1;\n      visibility: visible;\n    }\n    .preloader.hidden[_ngcontent-%COMP%] {\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    }\n    .preloader-inner[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 22px;\n    }\n    .preloader-art[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 14px;\n    }\n    .preloader-brand[_ngcontent-%COMP%] {\n      font-family: 'Space Grotesk', sans-serif;\n      font-weight: 700;\n      font-size: 56px;\n      letter-spacing: -0.02em;\n      color: #1C2321;\n    }\n    .barcode[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 2px;\n      align-items: flex-end;\n      height: 26px;\n      opacity: .9;\n    }\n    .barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      display: block;\n      width: 2px;\n      background: #5B655F;\n      border-radius: 1px;\n    }\n    .ticket[_ngcontent-%COMP%] {\n      position: relative;\n      padding-top: 14px;\n      margin-top: 4px;\n      border-top: 1.5px dashed #D8DAD3;\n      min-width: 180px;\n      text-align: center;\n    }\n    .ticket-no[_ngcontent-%COMP%] {\n      font-family: 'IBM Plex Mono', monospace;\n      font-size: 11px;\n      color: #5B655F;\n      letter-spacing: 0.08em;\n    }\n    .preloader-label[_ngcontent-%COMP%] {\n      font-family: 'IBM Plex Mono', monospace;\n      font-size: 11px;\n      letter-spacing: 0.14em;\n      text-transform: uppercase;\n      color: #5B655F;\n    }\n    .preloader-track[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 4px;\n      align-items: flex-end;\n      height: 24px;\n    }\n    .bar[_ngcontent-%COMP%] {\n      width: 3px;\n      background: #1F6F63;\n      border-radius: 2px;\n      animation: _ngcontent-%COMP%_barPulse 1s ease-in-out infinite;\n    }\n    @keyframes _ngcontent-%COMP%_barPulse {\n      0%, 100% { height: 5px; opacity: .3; }\n      50% { height: 20px; opacity: 1; }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3ByZWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZUFBZTtNQUNmLFFBQVE7TUFDUixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGlEQUFpRDtNQUNqRCxVQUFVO01BQ1YsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0lBQ0E7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixTQUFTO0lBQ1g7SUFDQTtNQUNFLHdDQUF3QztNQUN4QyxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsUUFBUTtNQUNSLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztJQUNiO0lBQ0E7TUFDRSxjQUFjO01BQ2QsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdDQUFnQztNQUNoQyxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSx1Q0FBdUM7TUFDdkMsZUFBZTtNQUNmLGNBQWM7TUFDZCxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHVDQUF1QztNQUN2QyxlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLHlCQUF5QjtNQUN6QixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsUUFBUTtNQUNSLHFCQUFxQjtNQUNyQixZQUFZO0lBQ2Q7SUFDQTtNQUNFLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLDJDQUEyQztJQUM3QztJQUNBO01BQ0UsV0FBVyxXQUFXLEVBQUUsV0FBVyxFQUFFO01BQ3JDLE1BQU0sWUFBWSxFQUFFLFVBQVUsRUFBRTtJQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5wcmVsb2FkZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgYmFja2dyb3VuZDogI0VERUZFQTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLCB2aXNpYmlsaXR5IC41cyBlYXNlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICAgIC5wcmVsb2FkZXIuaGlkZGVuIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLnByZWxvYWRlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDIycHg7XG4gICAgfVxuICAgIC5wcmVsb2FkZXItYXJ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTRweDtcbiAgICB9XG4gICAgLnByZWxvYWRlci1icmFuZCB7XG4gICAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgY29sb3I6ICMxQzIzMjE7XG4gICAgfVxuICAgIC5iYXJjb2RlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIG9wYWNpdHk6IC45O1xuICAgIH1cbiAgICAuYmFyY29kZSBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6ICM1QjY1NUY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgfVxuICAgIC50aWNrZXQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBib3JkZXItdG9wOiAxLjVweCBkYXNoZWQgI0Q4REFEMztcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC50aWNrZXQtbm8ge1xuICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgY29sb3I6ICM1QjY1NUY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIH1cbiAgICAucHJlbG9hZGVyLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6ICM1QjY1NUY7XG4gICAgfVxuICAgIC5wcmVsb2FkZXItdHJhY2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAuYmFyIHtcbiAgICAgIHdpZHRoOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMUY2RjYzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYW5pbWF0aW9uOiBiYXJQdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBiYXJQdWxzZSB7XG4gICAgICAwJSwgMTAwJSB7IGhlaWdodDogNXB4OyBvcGFjaXR5OiAuMzsgfVxuICAgICAgNTAlIHsgaGVpZ2h0OiAyMHB4OyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5576:
/*!*********************************************************!*\
  !*** ./src/app/core/components/toast-host.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastHostComponent: () => (/* binding */ ToastHostComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);





function ToastHostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.safeIcon(t_r1.iconSvg), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r1.message);
  }
}
class ToastHostComponent {
  constructor(toastService, cdr, sanitizer) {
    this.toastService = toastService;
    this.cdr = cdr;
    this.sanitizer = sanitizer;
    this.toasts = [];
    this.sub = null;
  }
  ngOnInit() {
    this.sub = this.toastService.toasts$.subscribe(items => {
      this.toasts = items;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  safeIcon(iconSvg) {
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
  static {
    this.ɵfac = function ToastHostComponent_Factory(t) {
      return new (t || ToastHostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastHostComponent,
      selectors: [["app-toast-host"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "toast-host"], ["class", "toast", 4, "ngFor", "ngForOf"], [1, "toast"], ["aria-hidden", "true", 1, "toast-icon", 3, "innerHTML"], [1, "toast-message"]],
      template: function ToastHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastHostComponent_div_1_Template, 4, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toasts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api.service */ 6344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(api, router) {
    this.api = api;
    this.router = router;
  }
  canActivate() {
    const token = localStorage.getItem('ims_token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);

const AuthInterceptor = (req, next) => {
  const token = localStorage.getItem('ims_token');
  if (!token) return next(req);
  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(cloned).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
    if (err.status === 401) {
      localStorage.removeItem('ims_token');
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
  }));
};

/***/ }),

/***/ 6344:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE: () => (/* binding */ API_BASE),
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);






const API_BASE = 'http://localhost:5150';
class ApiService {
  get logoutLoading$() {
    return this.logoutLoadingSubject.asObservable();
  }
  get userEmail() {
    return this.emailSubject.value;
  }
  get userRole() {
    return this.roleSubject.value;
  }
  constructor(http, router) {
    this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.token$ = this.tokenSubject.asObservable();
    this.emailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.roleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.userEmail$ = this.emailSubject.asObservable();
    this.userRole$ = this.roleSubject.asObservable();
    this.logoutLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.http = http;
    this.router = router;
    const saved = localStorage.getItem('ims_token');
    if (saved) this.tokenSubject.next(saved);
    const savedEmail = localStorage.getItem('ims_email');
    if (savedEmail) this.emailSubject.next(savedEmail);
    const savedRole = localStorage.getItem('ims_role');
    if (savedRole) this.roleSubject.next(savedRole);
  }
  authHeaders() {
    const token = this.tokenSubject.value;
    return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
  }
  logout() {
    this.logoutLoadingSubject.next(true);
    this.tokenSubject.next(null);
    this.emailSubject.next(null);
    this.roleSubject.next(null);
    localStorage.removeItem('ims_token');
    localStorage.removeItem('ims_email');
    localStorage.removeItem('ims_role');
    setTimeout(() => {
      this.logoutLoadingSubject.next(false);
      this.router.navigate(['/login']);
    }, 2000);
  }
  login(payload) {
    return this.http.post(`${API_BASE}/api/Auth/Login`, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.tokenSubject.next(res.token);
      localStorage.setItem('ims_token', res.token);
      if (res.email) {
        this.emailSubject.next(res.email);
        localStorage.setItem('ims_email', res.email);
      }
      const role = Array.isArray(res.roles) && res.roles.length ? res.roles[0] : 'Admin';
      this.roleSubject.next(role);
      localStorage.setItem('ims_role', role);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err)));
  }
  getProducts() {
    return this.http.get(`${API_BASE}/api/Products`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  createProduct(payload) {
    return this.http.post(`${API_BASE}/api/Products`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  updateProduct(id, payload) {
    return this.http.put(`${API_BASE}/api/Products/${id}`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  deleteProduct(id) {
    return this.http.delete(`${API_BASE}/api/Products/${id}`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getCategories() {
    return this.http.get(`${API_BASE}/api/Categories`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  createCategory(payload) {
    return this.http.post(`${API_BASE}/api/Categories`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  updateCategory(id, payload) {
    return this.http.put(`${API_BASE}/api/Categories/${id}`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  deleteCategory(id) {
    return this.http.delete(`${API_BASE}/api/Categories/${id}`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getTransactions() {
    return this.http.get(`${API_BASE}/api/Transactions`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  createTransaction(tx) {
    return this.http.post(`${API_BASE}/api/Transactions`, tx, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getPayments() {
    return this.http.get(`${API_BASE}/api/Payments`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  createPayment(payload) {
    return this.http.post(`${API_BASE}/api/Payments`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  updatePayment(id, payload) {
    return this.http.put(`${API_BASE}/api/Payments/${id}`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  deletePayment(id) {
    return this.http.delete(`${API_BASE}/api/Payments/${id}`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getReport() {
    return this.http.get(`${API_BASE}/api/Reports`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getAlerts() {
    return this.http.get(`${API_BASE}/api/LowStockAlerts`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  setAlert(payload) {
    return this.http.post(`${API_BASE}/api/LowStockAlerts`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  createUser(payload) {
    return this.http.post(`${API_BASE}/api/Users`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  updateUser(id, payload) {
    return this.http.put(`${API_BASE}/api/Users/${id}`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  deleteUser(id) {
    return this.http.delete(`${API_BASE}/api/Users/${id}`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  provisionUser(id, payload) {
    return this.http.post(`${API_BASE}/api/Users/${id}/provision`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  changePassword(payload) {
    return this.http.put(`${API_BASE}/api/AdminSettings/profile`, payload, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  getUsers() {
    return this.http.get(`${API_BASE}/api/users`, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  exportProductsCsv() {
    return this.http.get(`${API_BASE}/api/Products/export`, {
      headers: this.authHeaders(),
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  importProductsCsv(csv) {
    const blob = new Blob([csv], {
      type: 'text/csv'
    });
    const form = new FormData();
    form.append('file', blob, 'products_import.csv');
    return this.http.post(`${API_BASE}/api/Products/import`, form, {
      headers: this.authHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      if (err.status === 401) this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
    }));
  }
  static {
    this.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5343:
/*!**************************************************!*\
  !*** ./src/app/core/services/stagger.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaggerService: () => (/* binding */ StaggerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class StaggerService {
  constructor(zone) {
    this.zone = zone;
  }
  animate(selector, container, delayStep = 60) {
    this.zone.runOutsideAngular(() => {
      const items = (container || document).querySelectorAll(selector);
      if (!items.length) return;
      const now = performance.now();
      items.forEach((el, idx) => {
        const delay = idx * delayStep;
        el.animate([{
          opacity: '0',
          transform: 'translateY(14px) scale(0.98)'
        }, {
          opacity: '1',
          transform: 'translateY(0) scale(1)'
        }], {
          duration: 450,
          delay,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'backwards'
        });
      });
    });
  }
  static {
    this.ɵfac = function StaggerService_Factory(t) {
      return new (t || StaggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StaggerService,
      factory: StaggerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5423:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  constructor() {
    this.nextId = 1;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.toasts$ = this.subject.asObservable();
  }
  static {
    this.ICONS = {
      check: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>`
    };
  }
  show(message, type = 'success') {
    const current = this.subject.value;
    const toast = {
      id: this.nextId++,
      message,
      type,
      iconSvg: ToastService.ICONS.check
    };
    this.subject.next([...current, toast]);
    setTimeout(() => {
      const updated = this.subject.value.filter(t => t.id !== toast.id);
      this.subject.next(updated);
    }, 4200);
  }
  showError(err, fallback = 'Request failed.') {
    const status = err?.status;
    const url = typeof err?.url === 'string' ? err.url.split('/').pop() : '';
    const backendMsg = typeof err?.error === 'string' ? err.error : err?.error?.message;
    const detail = backendMsg || err?.message || fallback;
    const prefix = status ? `[${status}]` : '';
    const endpoint = url ? ` ${url}` : '';
    const message = `${prefix}${detail}${endpoint}`;
    this.show(message, 'error');
  }
  static {
    this.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9678:
/*!*****************************************************!*\
  !*** ./src/app/features/alerts/alerts.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertsComponent: () => (/* binding */ AlertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);








function AlertsComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", p_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4.name);
  }
}
function AlertsComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r1.message.includes("configured"))("err", !ctx_r1.message.includes("configured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.message);
  }
}
function AlertsComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r5.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("badge-danger", a_r5.currentStock < a_r5.threshold)("badge-teal", a_r5.currentStock >= a_r5.threshold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r5.currentStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r5.threshold);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 8, a_r5.alertDate, "short"));
  }
}
function AlertsComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No active alerts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class AlertsComponent {
  constructor(api, stagger, toast, cdr) {
    this.api = api;
    this.stagger = stagger;
    this.toast = toast;
    this.cdr = cdr;
    this.alerts = [];
    this.products = [];
    this.selectedProductId = null;
    this.threshold = null;
    this.message = '';
    this.messageColor = 'var(--brick)';
    this.okColor = 'var(--teal)';
    this.errColor = 'var(--brick)';
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  load() {
    this.api.getAlerts().subscribe({
      next: list => {
        this.alerts = list ?? [];
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.alerts = [];
        this.cdr.markForCheck();
      }
    });
    this.api.getProducts().subscribe({
      next: list => {
        this.products = list ?? [];
        this.cdr.markForCheck();
      },
      error: () => {
        this.products = [];
        this.cdr.markForCheck();
      }
    });
  }
  set() {
    this.message = '';
    if (!this.selectedProductId || this.threshold == null) {
      this.message = 'Select a product and threshold.';
      this.messageColor = this.errColor;
      return;
    }
    this.api.setAlert({
      productId: this.selectedProductId,
      threshold: this.threshold
    }).subscribe({
      next: () => {
        this.toast.show('Alert configured.', 'success');
        this.load();
      },
      error: err => {
        this.toast.showError(err, 'Failed to configure alert.');
      }
    });
  }
  static {
    this.ɵfac = function AlertsComponent_Factory(t) {
      return new (t || AlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__.StaggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AlertsComponent,
      selectors: [["app-alerts"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 48,
      vars: 7,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "alert-form", 3, "ngSubmit"], ["name", "selectedProductId", "required", "", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "threshold", "placeholder", "Minimum stock level", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "status", 3, "ok", "err", 4, "ngIf"], [1, "panel", 2, "margin-top", "16px"], [1, "table-wrap", "stagger-target"], ["class", "stagger-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "status"], [1, "stagger-item"], [1, "badge"], ["colspan", "4", 1, "empty"]],
      template: function AlertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Low stock warnings and thresholds.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Set alert threshold");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AlertsComponent_Template_form_ngSubmit_12_listener() {
            return ctx.set();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label")(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AlertsComponent_Template_select_ngModelChange_16_listener($event) {
            return ctx.selectedProductId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Select product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AlertsComponent_option_19_Template, 2, 2, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label")(21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Threshold");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AlertsComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.threshold = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12)(25, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Set Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AlertsComponent_p_27_Template, 2, 5, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "div", 5)(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Active alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6)(33, "div", 16)(34, "table")(35, "thead")(36, "tr")(37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Current Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Threshold");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AlertsComponent_tr_46_Template, 11, 11, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, AlertsComponent_tr_47_Template, 3, 0, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedProductId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.threshold);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.alerts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alerts.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".alerts-page[_ngcontent-%COMP%] { padding: 24px; font-family: var(--font-body); color: var(--ink); }\n.alerts-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0 0 16px; font-size: 22px; }\n.toolbar[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }\nlabel[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: var(--muted); }\nselect[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; font-family: inherit; outline: none; }\nselect[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(31,111,99,0.18); }\n.actions[_ngcontent-%COMP%] { display: flex; gap: 10px; flex-wrap: wrap; }\n.status[_ngcontent-%COMP%] { margin-top: 10px; font-size: 13px; color: var(--brick); }\n.btn-primary[_ngcontent-%COMP%] { padding: 10px 14px; border: none; border-radius: 8px; background: var(--teal); color: var(--surface); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }\n.table-card[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }\n.table-wrap[_ngcontent-%COMP%] { overflow: auto; max-height: 520px; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; }\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { text-align: left; padding: 10px; border-bottom: 1px solid var(--border); }\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: var(--sidebar); color: var(--sidebar-ink); font-weight: 700; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: var(--bg); }\n.empty[_ngcontent-%COMP%] { text-align: center; color: var(--muted); padding: 18px; }\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: var(--teal-light); cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsYUFBYSxFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFO0FBQ2hGLGtCQUFrQixnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDckQsV0FBVywwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSx1Q0FBdUMsRUFBRTtBQUM1TixRQUFRLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFO0FBQ2pILGdCQUFnQixrQkFBa0IsRUFBRSwrQkFBK0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFO0FBQy9JLDRCQUE0Qix5QkFBeUIsRUFBRSwwQ0FBMEMsRUFBRTtBQUNuRyxXQUFXLGFBQWEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO0FBQ3RELFVBQVUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFO0FBQ2xFLGVBQWUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUU7QUFDL0wsY0FBYywwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsdUNBQXVDLEVBQUU7QUFDeEosY0FBYyxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7QUFDakQsUUFBUSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFO0FBQ2pFLFNBQVMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLHNDQUFzQyxFQUFFO0FBQ2xGLFdBQVcsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDcEYsaUJBQWlCLHFCQUFxQixFQUFFO0FBQ3hDLFNBQVMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFOztBQUVqRSxpQkFBaUIsNkJBQTZCLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0cy1wYWdlIHsgcGFkZGluZzogMjRweDsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XHJcbi5hbGVydHMtcGFnZSBoMSB7IG1hcmdpbjogMCAwIDE2cHg7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG4udG9vbGJhciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA0KTsgfVxyXG5sYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cclxuc2VsZWN0LCBpbnB1dCB7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBvdXRsaW5lOiBub25lOyB9XHJcbnNlbGVjdDpmb2N1cywgaW5wdXQ6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLXRlYWwpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwxMTEsOTksMC4xOCk7IH1cclxuLmFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4uc3RhdHVzIHsgbWFyZ2luLXRvcDogMTBweDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tYnJpY2spOyB9XHJcbi5idG4tcHJpbWFyeSB7IHBhZGRpbmc6IDEwcHggMTRweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6IHZhcigtLXRlYWwpOyBjb2xvcjogdmFyKC0tc3VyZmFjZSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDsgfVxyXG4udGFibGUtY2FyZCB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxNnB4OyBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNCk7IH1cclxuLnRhYmxlLXdyYXAgeyBvdmVyZmxvdzogYXV0bzsgbWF4LWhlaWdodDogNTIwcHg7IH1cclxudGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgZm9udC1zaXplOiAxM3B4OyB9XHJcbnRoLCB0ZCB7IHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XHJcbnRoZWFkIHRoIHsgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhcik7IGNvbG9yOiB2YXIoLS1zaWRlYmFyLWluayk7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxudGJvZHkgdHI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IH1cclxuLmVtcHR5IHsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBwYWRkaW5nOiAxOHB4OyB9XHJcblxyXG50Ym9keSB0cjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRlYWwtbGlnaHQpOyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8344:
/*!*************************************************************!*\
  !*** ./src/app/features/categories/categories.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesComponent: () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);








function CategoriesComponent_div_11_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_11_tr_12_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const c_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.edit(c_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 16)(9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_11_tr_12_Template_button_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const c_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.remove(c_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", (ctx_r5.editing == null ? null : ctx_r5.editing.id) === c_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r7.description || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r7.productCount);
  }
}
function CategoriesComponent_div_11_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No categories yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CategoriesComponent_div_11_tr_12_Template, 11, 5, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CategoriesComponent_div_11_tr_13_Template, 3, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.categories.length === 0);
  }
}
function CategoriesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading categories...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CategoriesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.loadError);
  }
}
function CategoriesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_14_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23)(3, "span", 24)(4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 27)(7, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_14_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "line", 31)(12, "line", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CategoriesComponent_div_14_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 34)(16, "label")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_div_14_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 36)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_div_14_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 38)(25, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.editing ? "Edit category" : "New category", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.editing ? "Update" : "Create");
  }
}
function CategoriesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Delete category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 31)(8, "line", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 41)(11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 44)(14, "path", 45)(15, "path", 46)(16, "line", 47)(17, "line", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "? This cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 38)(24, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_15_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.deleteTargetName);
  }
}
class CategoriesComponent {
  constructor(api, cdr, toast, stagger) {
    this.api = api;
    this.cdr = cdr;
    this.toast = toast;
    this.stagger = stagger;
    this.categories = [];
    this.editing = null;
    this.name = '';
    this.description = '';
    this.loading = false;
    this.loadError = '';
    this.showModal = false;
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
    this.originalCategory = null;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  isDirty(current, original) {
    if (!original) return true;
    return Object.keys(current).some(key => current[key] !== original[key]);
  }
  load() {
    this.loading = true;
    this.loadError = '';
    this.api.getCategories().subscribe({
      next: list => {
        this.categories = list ?? [];
        this.loading = false;
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.loading = false;
        this.loadError = err?.error?.message || 'Failed to load categories.';
        this.categories = [];
        this.cdr.markForCheck();
      }
    });
  }
  addNew() {
    this.showModal = true;
    this.editing = null;
    this.name = '';
    this.description = '';
    this.originalCategory = null;
  }
  edit(c) {
    this.showModal = true;
    this.editing = c;
    this.name = c.name;
    this.description = c.description ?? '';
    this.originalCategory = {
      ...c
    };
  }
  closeModal() {
    this.showModal = false;
    this.editing = null;
    this.name = '';
    this.description = '';
  }
  save() {
    if (!this.name.trim()) return this.toast.show('Name is required.', 'error');
    const payload = {
      name: this.name.trim(),
      description: this.description.trim() || undefined
    };
    if (this.editing && this.editing.id) {
      if (!this.isDirty(payload, this.originalCategory)) {
        this.toast.show('No changes detected.', 'error');
        return;
      }
      this.api.updateCategory(this.editing.id, payload).subscribe({
        next: () => {
          this.toast.show('Category updated', 'success');
          this.load();
          this.closeModal();
        },
        error: err => this.toast.showError(err, 'Update failed.')
      });
    } else {
      this.api.createCategory(payload).subscribe({
        next: () => {
          this.toast.show('Category added', 'success');
          this.load();
          this.closeModal();
        },
        error: err => this.toast.showError(err, 'Create failed.')
      });
    }
  }
  remove(id) {
    const category = this.categories.find(c => c.id === id);
    this.deleteTargetId = id;
    this.deleteTargetName = category?.name || 'this category';
    this.showDeleteModal = true;
  }
  closeDelete() {
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
  }
  confirmDelete() {
    if (this.deleteTargetId == null) return;
    const id = this.deleteTargetId;
    this.closeDelete();
    this.api.deleteCategory(id).subscribe({
      next: () => {
        this.toast.show('Category deleted', 'success');
        this.load();
      },
      error: err => this.toast.showError(err, 'Delete failed.')
    });
  }
  static {
    this.ɵfac = function CategoriesComponent_Factory(t) {
      return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__.StaggerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 5,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn", "btn-add", 3, "click"], [1, "panel"], [1, "panel-body"], ["class", "table-wrap stagger-target", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "empty-state error", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "table-wrap", "stagger-target"], ["class", "clickable stagger-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "clickable", "stagger-item", 3, "click"], [1, "badge", "badge-teal"], [1, "actions"], [1, "btn", "btn-delete", 3, "click"], ["colspan", "4", 1, "empty"], [1, "empty-state"], [1, "empty-state", "error"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-header-title"], ["aria-hidden", "true", 1, "modal-header-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2Z"], ["cx", "7", "cy", "7", "r", "2"], ["type", "button", "aria-label", "Close", 1, "modal-header-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "product-form", 3, "ngSubmit"], [1, "form-grid"], ["name", "name", "placeholder", "Category name", "required", "", 3, "ngModel", "ngModelChange"], [1, "full"], ["name", "description", "placeholder", "Description", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], [1, "modal-card", "modal-card--danger", 3, "click"], [1, "confirm-body"], [1, "confirm-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "confirm-text"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Group products for reporting and filters.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_7_listener() {
            return ctx.addNew();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2795 Add category");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CategoriesComponent_div_11_Template, 14, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CategoriesComponent_div_12_Template, 2, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CategoriesComponent_div_13_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CategoriesComponent_div_14_Template, 27, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CategoriesComponent_div_15_Template, 26, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".categories-page[_ngcontent-%COMP%] { padding: 24px; font-family: var(--font-body); color: var(--ink); }\n.categories-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0 0 16px; font-size: 22px; }\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(31,111,99,0.18);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n.status[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  background: var(--teal);\n  color: var(--surface);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--surface);\n  color: var(--muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 520px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px;\n  border-bottom: 1px solid var(--border);\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--sidebar);\n  color: var(--sidebar-ink);\n  font-weight: 700;\n  position: sticky;\n  top: 0;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--teal-light);\n}\ntbody[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--muted);\n  padding: 18px;\n}\n\n\n\ntd[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease, color 120ms ease;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--ink);\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  border-color: #d97706;\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #7f1d1d;\n  transform: translateY(-1px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGFBQWEsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsRUFBRTtBQUNwRixzQkFBc0IsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFOztBQUV6RDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlIQUF5SDtBQUMzSDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllcy1wYWdlIHsgcGFkZGluZzogMjRweDsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XHJcbi5jYXRlZ29yaWVzLXBhZ2UgaDEgeyBtYXJnaW46IDAgMCAxNnB4OyBmb250LXNpemU6IDIycHg7IH1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGVhbCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzEsMTExLDk5LDAuMTgpO1xyXG59XHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uc3RhdHVzIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYWwpO1xyXG4gIGNvbG9yOiB2YXIoLS1zdXJmYWNlKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG4udGFibGUtd3JhcCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNTIwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcbnRoZWFkIHRoIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyKTtcclxuICBjb2xvcjogdmFyKC0tc2lkZWJhci1pbmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxudGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYWwtbGlnaHQpO1xyXG59XHJcbnRib2R5IHRyLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRib2R5IHRyLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsLWxpZ2h0KTtcclxufVxyXG4uZW1wdHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuXHJcbi8qIFRhYmxlIGFjdGlvbiBidXR0b25zICovXHJcbnRkIC5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBnYXA6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnRkIC5idG4tZ2hvc3QsXHJcbnRkIC5idG4tZWRpdCxcclxudGQgLmJ0bi1kZWxldGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBlYXNlLCBib3gtc2hhZG93IDEyMG1zIGVhc2UsIGJhY2tncm91bmQgMTIwbXMgZWFzZSwgYm9yZGVyLWNvbG9yIDEyMG1zIGVhc2UsIGNvbG9yIDEyMG1zIGVhc2U7XHJcbn1cclxudGQgLmJ0bi1naG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcbnRkIC5idG4tZ2hvc3Q6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5rKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmYmViO1xyXG4gIGNvbG9yOiAjOTI0MDBlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNTllMGI7XHJcbn1cclxudGQgLmJ0bi1lZGl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gIGJvcmRlci1jb2xvcjogI2Q5NzcwNjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1kZWxldGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgY29sb3I6ICM5OTFiMWI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcclxufVxyXG50ZCAuYnRuLWRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiAgY29sb3I6ICM3ZjFkMWQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);






function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13)(16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Low stock items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Est. stock value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Price \u00D7 quantity on hand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.productCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.categoryCount, " categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.categoryCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Grouping ", ctx_r0.productCount, " products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.lowStockCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.lowStockCount === 0 ? "All items healthy" : "Needs attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 7, ctx_r0.stockValue, "1.0-0"));
  }
}
function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.loadError);
  }
}
function DashboardComponent_div_10_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r6.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r6.currentStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r6.threshold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r4.gaugePct(a_r6.currentStock), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("warn", a_r6.currentStock < a_r6.threshold && a_r6.currentStock >= 5)("danger", a_r6.currentStock < 5);
  }
}
function DashboardComponent_div_10_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 26)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No active alerts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Recent low stock alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "View all");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19)(7, "div", 20)(8, "table")(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Current stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DashboardComponent_div_10_tr_20_Template, 10, 9, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DashboardComponent_div_10_tr_21_Template, 6, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.alerts.length === 0);
  }
}
class DashboardComponent {
  constructor(api, cdr, stagger) {
    this.api = api;
    this.cdr = cdr;
    this.stagger = stagger;
    this.products = [];
    this.categories = [];
    this.alerts = [];
    this.loading = false;
    this.loadError = '';
    this.productCount = 0;
    this.categoryCount = 0;
    this.lowStockCount = 0;
    this.stockValue = 0;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('.stat-card.stagger-item');
    this.stagger.animate('tbody tr.stagger-item');
  }
  load() {
    this.loading = true;
    this.loadError = '';
    this.api.getProducts().subscribe({
      next: list => {
        this.products = list ?? [];
        this.productCount = this.products.length;
        this.stockValue = this.products.reduce((s, p) => s + p.price * p.quantityInStock, 0);
        this.lowStockCount = this.products.filter(p => p.quantityInStock < 10).length;
        this.loading = false;
        this.cdr.markForCheck();
        this.stagger.animate('.stat-card.stagger-item');
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.loading = false;
        this.loadError = err?.error?.message || 'Failed to load dashboard data.';
        this.cdr.markForCheck();
      }
    });
    this.api.getCategories().subscribe({
      next: list => {
        this.categories = list ?? [];
        this.categoryCount = this.categories.length;
        this.cdr.markForCheck();
      },
      error: err => {
        this.categoryCount = 0;
        this.cdr.markForCheck();
      }
    });
    this.api.getAlerts().subscribe({
      next: list => {
        this.alerts = (list ?? []).slice(0, 5);
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: () => {
        this.alerts = [];
        this.cdr.markForCheck();
      }
    });
  }
  gaugePct(value) {
    return Math.min(100, Math.max(0, value));
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__.StaggerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 4,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "stat-grid stagger-target", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "empty-state error", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [1, "stat-grid", "stagger-target"], [1, "stat-card", "stagger-item"], [1, "stat-label"], [1, "stat-value"], [1, "stat-sub"], [1, "stat-card"], [1, "empty-state"], [1, "empty-state", "error"], [1, "panel"], [1, "panel-head"], ["routerLink", "/alerts", 1, "btn", "btn-outline"], [1, "panel-body"], [1, "table-wrap", "stagger-target"], ["class", "stagger-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "stagger-item"], [1, "gauge"], [1, "gauge-fill"], ["colspan", "4", 1, "empty"], ["aria-hidden", "true", 1, "empty-icon"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Live snapshot of stock and activity.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 30, 10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 22, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: ["\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 180ms ease, box-shadow 180ms ease;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ink);\n  margin-top: 6px;\n  font-family: var(--font-head);\n  transition: color 180ms ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-value[_ngcontent-%COMP%] {\n  color: var(--teal);\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 4px;\n}\n\n.panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--ink);\n}\n.panel-body[_ngcontent-%COMP%] { padding: 0; }\n.panel-body[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] { overflow: auto; max-height: 520px; }\n.panel-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] { font-size: 13px; }\n.panel-body[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .panel-body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); }\n.panel-body[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: var(--sidebar); color: var(--sidebar-ink); font-weight: 700; position: sticky; top: 0; z-index: 1; }\n.panel-body[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 120ms ease;\n}\n.panel-body[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--teal-light);\n  cursor: pointer;\n}\n.panel-body[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] { text-align: center; color: var(--muted); padding: 18px; }\n\n.gauge[_ngcontent-%COMP%] { height: 8px; border-radius: 999px; background: var(--bg); overflow: hidden; }\n.gauge-fill[_ngcontent-%COMP%] { height: 100%; border-radius: 999px; background: var(--teal); transition: width var(--transition); }\n.gauge-fill.warn[_ngcontent-%COMP%] { background: var(--amber); }\n.gauge-fill.danger[_ngcontent-%COMP%] { background: var(--brick); }\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--muted);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 2px dashed var(--border);\n  border-radius: 8px;\n  opacity: .8;\n}\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 50;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow: auto;\n}\n\n.product-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.product-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\n.product-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .product-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .product-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  outline: none;\n  background: var(--surface);\n  color: var(--ink);\n}\n.product-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .product-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .product-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px var(--teal-light);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.form-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.alert-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.alert-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\n.alert-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .alert-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  outline: none;\n  background: var(--surface);\n  color: var(--ink);\n}\n.alert-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .alert-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px var(--teal-light);\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg);\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n\n.stock-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.stock-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--bg);\n  overflow: hidden;\n}\n.stock-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--teal);\n  transition: width 180ms ease;\n}\n.stock-fill.warn[_ngcontent-%COMP%] { background: var(--amber); }\n.stock-fill.danger[_ngcontent-%COMP%] { background: var(--brick); }\n.stock-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink);\n  min-width: 28px;\n  text-align: right;\n  font-family: var(--font-mono);\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--ink);\n}\n.product-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.status[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n}\n.status.ok[_ngcontent-%COMP%] { color: var(--teal); font-weight: 700; }\n.status.err[_ngcontent-%COMP%] { color: var(--brick); font-weight: 700; }\n\n.badge-ok[_ngcontent-%COMP%] { background: var(--teal-light); color: var(--teal); }\n.badge-warn[_ngcontent-%COMP%] { background: var(--amber-bg); color: var(--amber); }\n.badge-danger[_ngcontent-%COMP%] { background: var(--brick-bg); color: var(--brick); }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsdURBQXVEO0VBQ3ZELGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQSxjQUFjLFVBQVUsRUFBRTtBQUMxQiwwQkFBMEIsY0FBYyxFQUFFLGlCQUFpQixFQUFFO0FBQzdELG9CQUFvQixlQUFlLEVBQUU7QUFDckMsaUNBQWlDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLHNDQUFzQyxFQUFFO0FBQy9HLHVCQUF1QiwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQ3RJO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBLHFCQUFxQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUU7O0FBRTdFLFNBQVMsV0FBVyxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFO0FBQ3JGLGNBQWMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG1DQUFtQyxFQUFFO0FBQ2hILG1CQUFtQix3QkFBd0IsRUFBRTtBQUM3QyxxQkFBcUIsd0JBQXdCLEVBQUU7O0FBRS9DO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBQ0E7OztFQUdFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5QjtBQUNBLG1CQUFtQix3QkFBd0IsRUFBRTtBQUM3QyxxQkFBcUIsd0JBQXdCLEVBQUU7QUFDL0M7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0EsYUFBYSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRTtBQUNuRCxjQUFjLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFOztBQUVyRCxZQUFZLDZCQUE2QixFQUFFLGtCQUFrQixFQUFFO0FBQy9ELGNBQWMsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUU7QUFDaEUsZ0JBQWdCLDJCQUEyQixFQUFFLG1CQUFtQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkIHBhZ2UgKi9cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnN0YXQtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTgwbXMgZWFzZSwgYm94LXNoYWRvdyAxODBtcyBlYXNlO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uc3RhdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG4uc3RhdC12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWQpO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDE4MG1zIGVhc2U7XHJcbn1cclxuLnN0YXQtY2FyZDpob3ZlciAuc3RhdC12YWx1ZSB7XHJcbiAgY29sb3I6IHZhcigtLXRlYWwpO1xyXG59XHJcbi5zdGF0LXN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnBhbmVsLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcbi5wYW5lbC1ib2R5IHsgcGFkZGluZzogMDsgfVxyXG4ucGFuZWwtYm9keSAudGFibGUtd3JhcCB7IG92ZXJmbG93OiBhdXRvOyBtYXgtaGVpZ2h0OiA1MjBweDsgfVxyXG4ucGFuZWwtYm9keSB0YWJsZSB7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4ucGFuZWwtYm9keSB0aCwgLnBhbmVsLWJvZHkgdGQgeyB0ZXh0LWFsaWduOiBsZWZ0OyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XHJcbi5wYW5lbC1ib2R5IHRoZWFkIHRoIHsgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhcik7IGNvbG9yOiB2YXIoLS1zaWRlYmFyLWluayk7IGZvbnQtd2VpZ2h0OiA3MDA7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgei1pbmRleDogMTsgfVxyXG4ucGFuZWwtYm9keSB0Ym9keSB0ciB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMjBtcyBlYXNlO1xyXG59XHJcbi5wYW5lbC1ib2R5IHRib2R5IHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsLWxpZ2h0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhbmVsLWJvZHkgLmVtcHR5IHsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBwYWRkaW5nOiAxOHB4OyB9XHJcblxyXG4uZ2F1Z2UgeyBoZWlnaHQ6IDhweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uZ2F1Z2UtZmlsbCB7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGJhY2tncm91bmQ6IHZhcigtLXRlYWwpOyB0cmFuc2l0aW9uOiB3aWR0aCB2YXIoLS10cmFuc2l0aW9uKTsgfVxyXG4uZ2F1Z2UtZmlsbC53YXJuIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpOyB9XHJcbi5nYXVnZS1maWxsLmRhbmdlciB7IGJhY2tncm91bmQ6IHZhcigtLWJyaWNrKTsgfVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG4uZW1wdHktaWNvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA1MDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5tb2RhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9kdWN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuLnByb2R1Y3QtZm9ybSBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbn1cclxuLnByb2R1Y3QtZm9ybSBpbnB1dCxcclxuLnByb2R1Y3QtZm9ybSBzZWxlY3QsXHJcbi5wcm9kdWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbn1cclxuLnByb2R1Y3QtZm9ybSBpbnB1dDpmb2N1cyxcclxuLnByb2R1Y3QtZm9ybSBzZWxlY3Q6Zm9jdXMsXHJcbi5wcm9kdWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGVhbCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLXRlYWwtbGlnaHQpO1xyXG59XHJcbi5mb3JtLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZm9ybS1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmFsZXJ0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuLmFsZXJ0LWZvcm0gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcbi5hbGVydC1mb3JtIGlucHV0LFxyXG4uYWxlcnQtZm9ybSBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbn1cclxuLmFsZXJ0LWZvcm0gaW5wdXQ6Zm9jdXMsXHJcbi5hbGVydC1mb3JtIHNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZWFsKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tdGVhbC1saWdodCk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xyXG59XHJcbi5zZWFyY2gtYmFyIC5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbi5zdG9jay1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5zdG9jay1iYXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN0b2NrLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxODBtcyBlYXNlO1xyXG59XHJcbi5zdG9jay1maWxsLndhcm4geyBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7IH1cclxuLnN0b2NrLWZpbGwuZGFuZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tYnJpY2spOyB9XHJcbi5zdG9jay1jb3VudCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgbWluLXdpZHRoOiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcbi5wcm9kdWN0LW1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxufVxyXG4uc3RhdHVzLm9rIHsgY29sb3I6IHZhcigtLXRlYWwpOyBmb250LXdlaWdodDogNzAwOyB9XHJcbi5zdGF0dXMuZXJyIHsgY29sb3I6IHZhcigtLWJyaWNrKTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG5cclxuLmJhZGdlLW9rIHsgYmFja2dyb3VuZDogdmFyKC0tdGVhbC1saWdodCk7IGNvbG9yOiB2YXIoLS10ZWFsKTsgfVxyXG4uYmFkZ2Utd2FybiB7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWJnKTsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG4uYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tYnJpY2stYmcpOyBjb2xvcjogdmFyKC0tYnJpY2spOyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8472:
/*!*****************************************************!*\
  !*** ./src/app/features/layout/layout.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);







function LayoutComponent_main_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function LayoutComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span")(4, "span")(5, "span")(6, "span")(7, "span")(8, "span")(9, "span")(10, "span")(11, "span")(12, "span")(13, "span")(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cleaning your inventory while you\u2019re away\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "We\u2019ll be waiting for you \u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LayoutComponent {
  constructor(api, router, cdr) {
    this.api = api;
    this.router = router;
    this.cdr = cdr;
    this.routeName = '';
    this.logoutLoading = false;
    const initial = this.router.url || '';
    const parts = initial.split('/').filter(Boolean);
    this.routeName = parts[0] || '';
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(e => {
      const url = e.urlAfterRedirects || e.url || '';
      const parts = url.split('/').filter(Boolean);
      const next = parts[0] || '';
      if (next !== this.routeName) {
        this.routeName = next;
      }
      this.playRouteTransition();
    });
  }
  ngAfterViewInit() {
    this.playRouteTransition();
    this.initSidebarHover();
  }
  ngOnDestroy() {
    this.cleanup?.();
  }
  playRouteTransition() {
    const panel = document.querySelector('.page-transition');
    if (!panel) return;
    panel.animate([{
      opacity: '0',
      transform: 'translateY(8px) scale(0.995)'
    }, {
      opacity: '1',
      transform: 'translateY(0) scale(1)'
    }], {
      duration: 420,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'backwards'
    });
  }
  initSidebarHover() {
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
      const enter = () => {
        const anim = link.animate([{
          transform: 'translateX(0)'
        }, {
          transform: 'translateX(4px)'
        }], {
          duration: 250,
          easing: 'ease-out',
          fill: 'backwards'
        });
        this.cleanup = () => anim.cancel();
      };
      const leave = () => {
        const anim = link.animate([{
          transform: 'translateX(4px)'
        }, {
          transform: 'translateX(0)'
        }], {
          duration: 250,
          easing: 'ease-in',
          fill: 'backwards'
        });
        this.cleanup = () => anim.cancel();
      };
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
    });
  }
  logout() {
    if (this.logoutLoading) return;
    this.logoutLoading = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.api.logout();
    }, 2000);
  }
  routeAnimationName() {
    return this.routeName;
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 4,
      consts: [[1, "sidebar"], [1, "sidebar-brand"], [1, "brand-main"], [1, "brand-sub"], [1, "role-tag"], [1, "nav-group"], [1, "nav-eyebrow"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/reports", "routerLinkActive", "active"], ["routerLink", "/products", "routerLinkActive", "active"], ["routerLink", "/categories", "routerLinkActive", "active"], ["routerLink", "/alerts", "routerLinkActive", "active"], ["routerLink", "/transactions", "routerLinkActive", "active"], ["routerLink", "/payments", "routerLinkActive", "active"], ["routerLink", "/users", "routerLinkActive", "active"], [1, "sidebar-footer"], [1, "user-email"], [1, "logout-btn", 3, "click"], ["class", "main", 4, "ngIf"], ["class", "logout-loader", 4, "ngIf"], [1, "main"], [1, "page-transition"], [1, "logout-loader"], [1, "logout-loader-inner"], [1, "logout-barcode"], [1, "logout-text"], [1, "logout-sub"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "IMS STOCK CTRL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inventory Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "OVERVIEW");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "STOCK");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Low stock alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5)(25, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ACTIVITY");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5)(32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15)(37, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_39_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Log out");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, LayoutComponent_main_41_Template, 3, 0, "main", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, LayoutComponent_div_42_Template, 19, 0, "div", 19);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SIGNED IN \u2014 ", (ctx.api.userRole == null ? null : ctx.api.userRole.toUpperCase()) || "ADMIN", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.api.userEmail || "admin@ims.local");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.logoutLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logoutLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 240px;\n  background: #171D1B;\n  color: #C9D1CB;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 14px 14px;\n  gap: 6px;\n  font-family: 'Inter', sans-serif;\n  z-index: 10;\n  overflow-y: auto;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 10px;\n  padding: 0 10px;\n}\n.brand-main[_ngcontent-%COMP%] {\n  font-family: 'Space Grotesk', sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 0.4px;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 10px;\n  font-weight: 600;\n  color: #D98E2B;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n}\n.role-tag[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: #C9D1CB;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 6px;\n  padding: 7px 10px;\n  margin-bottom: 8px;\n}\n.nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-eyebrow[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(201,209,203,0.55);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  padding: 10px 10px 4px;\n}\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #C9D1CB;\n  text-decoration: none;\n  padding: 9px 10px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  border-left: 3px solid transparent;\n  transition: transform 140ms ease, background 140ms ease, color 140ms ease, border-color 140ms ease;\n}\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.06);\n  color: #ffffff;\n  transform: translateX(4px);\n}\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(31,111,99,0.18);\n  color: #ffffff;\n  border-left-color: #D98E2B;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid rgba(255,255,255,0.08);\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 11px;\n  color: #C9D1CB;\n  word-break: break-all;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: rgba(255,255,255,0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 120ms ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.14); }\n.main[_ngcontent-%COMP%] {\n  margin-left: 240px;\n  min-height: 100vh;\n  background: var(--bg);\n  position: relative;\n  overflow: hidden;\n}\n.main[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(circle at 15% 25%, rgba(45,212,191,0.28) 0%, transparent 28%),\n    radial-gradient(circle at 80% 70%, rgba(245,158,11,0.24) 0%, transparent 30%),\n    radial-gradient(circle at 45% 55%, rgba(244,63,94,0.20) 0%, transparent 26%),\n    radial-gradient(circle at 20% 75%, rgba(45,212,191,0.20) 0%, transparent 22%),\n    radial-gradient(circle at 75% 20%, rgba(245,158,11,0.22) 0%, transparent 24%);\n  animation: _ngcontent-%COMP%_blobDrift 18s ease-in-out infinite alternate;\n  pointer-events: none;\n  z-index: 0;\n}\n.main[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: -40%;\n  background-image:\n    radial-gradient(circle at 30% 40%, rgba(255,255,255,0.14) 0%, transparent 4px),\n    radial-gradient(circle at 70% 20%, rgba(255,255,255,0.12) 0%, transparent 3px),\n    radial-gradient(circle at 50% 70%, rgba(255,255,255,0.10) 0%, transparent 5px),\n    radial-gradient(circle at 15% 60%, rgba(255,255,255,0.12) 0%, transparent 3px),\n    radial-gradient(circle at 85% 80%, rgba(255,255,255,0.10) 0%, transparent 4px),\n    radial-gradient(circle at 40% 90%, rgba(255,255,255,0.11) 0%, transparent 3px),\n    radial-gradient(circle at 90% 45%, rgba(255,255,255,0.13) 0%, transparent 5px),\n    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.09) 0%, transparent 4px);\n  background-size: 320px 320px, 280px 280px, 360px 360px, 240px 240px, 300px 300px, 260px 260px, 340px 340px, 220px 220px;\n  animation:\n    _ngcontent-%COMP%_drift1 18s linear infinite,\n    _ngcontent-%COMP%_drift2 22s linear infinite reverse,\n    _ngcontent-%COMP%_drift3 20s linear infinite;\n  opacity: .7;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes _ngcontent-%COMP%_blobDrift {\n  0% { transform: translate(0,0) rotate(0deg); }\n  50% { transform: translate(30px,-25px) rotate(1.5deg); }\n  100% { transform: translate(-20px,20px) rotate(-1deg); }\n}\n@keyframes _ngcontent-%COMP%_drift1 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: 180px 140px, -140px 160px, 120px -80px, -60px 100px, 90px -120px, -110px 60px, 150px -40px, -30px 80px; }\n}\n@keyframes _ngcontent-%COMP%_drift2 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: -160px 120px, 130px -100px, -90px 70px, 50px -60px, -70px 90px, 100px -30px, -140px 50px, 60px -90px; }\n}\n@keyframes _ngcontent-%COMP%_drift3 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: 100px -80px, -120px 90px, 80px -40px, -50px 60px, 70px -70px, -80px 40px, 110px -50px, -40px 70px; }\n}\n.page-transition[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.logout-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  z-index: 50;\n}\n.logout-loader-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.logout-barcode[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 3px;\n  height: 40px;\n  margin-bottom: 18px;\n}\n.logout-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 3px;\n  height: 18px;\n  background: rgba(201,209,203,0.8);\n  border-radius: 1px;\n  animation: _ngcontent-%COMP%_barcodePulse 1.2s ease-in-out infinite;\n}\n.logout-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(odd) { animation-duration: 1.4s; }\n.logout-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n) { animation-duration: 1.1s; }\n.logout-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4n) { animation-duration: 1.6s; }\n.logout-text[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 14px;\n  color: var(--ink);\n  margin: 0;\n}\n.logout-sub[_ngcontent-%COMP%] {\n  font-family: 'IBM Plex Mono', monospace;\n  font-size: 12px;\n  color: var(--muted);\n  margin: 6px 0 0;\n}\n@keyframes _ngcontent-%COMP%_barcodePulse {\n  0%, 100% { transform: scaleY(1); opacity: .7; }\n  50% { transform: scaleY(2.2); opacity: 1; }\n}\n@media (max-width: 860px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: relative;\n    width: auto;\n    height: auto;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 14px 16px;\n  }\n  .nav-group[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n  .nav-eyebrow[_ngcontent-%COMP%] { display: none; }\n  .sidebar-footer[_ngcontent-%COMP%] { margin: 0 0 0 auto; padding: 0; border: none; }\n  .brand-main[_ngcontent-%COMP%], .role-tag[_ngcontent-%COMP%] { display: none; }\n  .main[_ngcontent-%COMP%] { margin-left: 0; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxrR0FBa0c7QUFDcEc7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBQ0Esb0JBQW9CLGtDQUFrQyxFQUFFO0FBQ3hEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7Ozs7O2lGQUsrRTtFQUMvRSx1REFBdUQ7RUFDdkQsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7Ozs7Ozs7O2tGQVFnRjtFQUNoRix1SEFBdUg7RUFDdkg7Ozs4QkFHNEI7RUFDNUIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7QUFDQTtFQUNFLEtBQUssc0NBQXNDLEVBQUU7RUFDN0MsTUFBTSwrQ0FBK0MsRUFBRTtFQUN2RCxPQUFPLDhDQUE4QyxFQUFFO0FBQ3pEO0FBQ0E7RUFDRSxLQUFLLDJEQUEyRCxFQUFFO0VBQ2xFLE9BQU8sMkhBQTJILEVBQUU7QUFDdEk7QUFDQTtFQUNFLEtBQUssMkRBQTJELEVBQUU7RUFDbEUsT0FBTyx5SEFBeUgsRUFBRTtBQUNwSTtBQUNBO0VBQ0UsS0FBSywyREFBMkQsRUFBRTtFQUNsRSxPQUFPLHNIQUFzSCxFQUFFO0FBQ2pJO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsaURBQWlEO0FBQ25EO0FBQ0Esc0NBQXNDLHdCQUF3QixFQUFFO0FBQ2hFLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUMvRCxxQ0FBcUMsd0JBQXdCLEVBQUU7QUFDL0Q7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVcsb0JBQW9CLEVBQUUsV0FBVyxFQUFFO0VBQzlDLE1BQU0sc0JBQXNCLEVBQUUsVUFBVSxFQUFFO0FBQzVDO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0EsYUFBYSxhQUFhLEVBQUUsUUFBUSxFQUFFO0VBQ3RDLGVBQWUsYUFBYSxFQUFFO0VBQzlCLGtCQUFrQixrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFO0VBQ2hFLHlCQUF5QixhQUFhLEVBQUU7RUFDeEMsUUFBUSxjQUFjLEVBQUU7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZDogIzE3MUQxQjtcbiAgY29sb3I6ICNDOUQxQ0I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggMTRweCAxNHB4O1xuICBnYXA6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIHotaW5kZXg6IDEwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNpZGViYXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmJyYW5kLW1haW4ge1xuICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG4uYnJhbmQtc3ViIHtcbiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjRDk4RTJCO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG59XG4ucm9sZS10YWcge1xuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNDOUQxQ0I7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5uYXYtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cbi5uYXYtZXllYnJvdyB7XG4gIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubycsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiYSgyMDEsMjA5LDIwMywwLjU1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNHB4O1xufVxuLnNpZGViYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0M5RDFDQjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNDBtcyBlYXNlLCBiYWNrZ3JvdW5kIDE0MG1zIGVhc2UsIGNvbG9yIDE0MG1zIGVhc2UsIGJvcmRlci1jb2xvciAxNDBtcyBlYXNlO1xufVxuLnNpZGViYXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbn1cbi5zaWRlYmFyIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwxMTEsOTksMC4xOCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdC1jb2xvcjogI0Q5OEUyQjtcbn1cbi5zaWRlYmFyLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLnVzZXItZW1haWwge1xuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNDOUQxQ0I7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5sb2dvdXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTIwbXMgZWFzZTtcbn1cbi5sb2dvdXQtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE0KTsgfVxuLm1haW4ge1xuICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTMwJTtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSAyNSUsIHJnYmEoNDUsMjEyLDE5MSwwLjI4KSAwJSwgdHJhbnNwYXJlbnQgMjglKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSA3MCUsIHJnYmEoMjQ1LDE1OCwxMSwwLjI0KSAwJSwgdHJhbnNwYXJlbnQgMzAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQ1JSA1NSUsIHJnYmEoMjQ0LDYzLDk0LDAuMjApIDAlLCB0cmFuc3BhcmVudCAyNiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDc1JSwgcmdiYSg0NSwyMTIsMTkxLDAuMjApIDAlLCB0cmFuc3BhcmVudCAyMiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzUlIDIwJSwgcmdiYSgyNDUsMTU4LDExLDAuMjIpIDAlLCB0cmFuc3BhcmVudCAyNCUpO1xuICBhbmltYXRpb246IGJsb2JEcmlmdCAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cbi5tYWluOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtNDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDQwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSAwJSwgdHJhbnNwYXJlbnQgNHB4KSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDcwJSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xMikgMCUsIHRyYW5zcGFyZW50IDNweCksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNzAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTApIDAlLCB0cmFuc3BhcmVudCA1cHgpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDYwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEyKSAwJSwgdHJhbnNwYXJlbnQgM3B4KSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDg1JSA4MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xMCkgMCUsIHRyYW5zcGFyZW50IDRweCksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA0MCUgOTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTEpIDAlLCB0cmFuc3BhcmVudCAzcHgpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTAlIDQ1JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEzKSAwJSwgdHJhbnNwYXJlbnQgNXB4KSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAyMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4wOSkgMCUsIHRyYW5zcGFyZW50IDRweCk7XG4gIGJhY2tncm91bmQtc2l6ZTogMzIwcHggMzIwcHgsIDI4MHB4IDI4MHB4LCAzNjBweCAzNjBweCwgMjQwcHggMjQwcHgsIDMwMHB4IDMwMHB4LCAyNjBweCAyNjBweCwgMzQwcHggMzQwcHgsIDIyMHB4IDIyMHB4O1xuICBhbmltYXRpb246XG4gICAgZHJpZnQxIDE4cyBsaW5lYXIgaW5maW5pdGUsXG4gICAgZHJpZnQyIDIycyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZSxcbiAgICBkcmlmdDMgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgb3BhY2l0eTogLjc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAwO1xufVxuQGtleWZyYW1lcyBibG9iRHJpZnQge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDBkZWcpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsLTI1cHgpIHJvdGF0ZSgxLjVkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwyMHB4KSByb3RhdGUoLTFkZWcpOyB9XG59XG5Aa2V5ZnJhbWVzIGRyaWZ0MSB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDE4MHB4IDE0MHB4LCAtMTQwcHggMTYwcHgsIDEyMHB4IC04MHB4LCAtNjBweCAxMDBweCwgOTBweCAtMTIwcHgsIC0xMTBweCA2MHB4LCAxNTBweCAtNDBweCwgLTMwcHggODBweDsgfVxufVxuQGtleWZyYW1lcyBkcmlmdDIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggMTIwcHgsIDEzMHB4IC0xMDBweCwgLTkwcHggNzBweCwgNTBweCAtNjBweCwgLTcwcHggOTBweCwgMTAwcHggLTMwcHgsIC0xNDBweCA1MHB4LCA2MHB4IC05MHB4OyB9XG59XG5Aa2V5ZnJhbWVzIGRyaWZ0MyB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMHB4IC04MHB4LCAtMTIwcHggOTBweCwgODBweCAtNDBweCwgLTUwcHggNjBweCwgNzBweCAtNzBweCwgLTgwcHggNDBweCwgMTEwcHggLTUwcHgsIC00MHB4IDcwcHg7IH1cbn1cbi5wYWdlLXRyYW5zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4ubG9nb3V0LWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIHotaW5kZXg6IDUwO1xufVxuLmxvZ291dC1sb2FkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nb3V0LWJhcmNvZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmxvZ291dC1iYXJjb2RlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMSwyMDksMjAzLDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYW5pbWF0aW9uOiBiYXJjb2RlUHVsc2UgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5sb2dvdXQtYmFyY29kZSBzcGFuOm50aC1jaGlsZChvZGQpIHsgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzOyB9XG4ubG9nb3V0LWJhcmNvZGUgc3BhbjpudGgtY2hpbGQoM24pIHsgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzOyB9XG4ubG9nb3V0LWJhcmNvZGUgc3BhbjpudGgtY2hpbGQoNG4pIHsgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjZzOyB9XG4ubG9nb3V0LXRleHQge1xuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dvdXQtc3ViIHtcbiAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbjogNnB4IDAgMDtcbn1cbkBrZXlmcmFtZXMgYmFyY29kZVB1bHNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlWSgxKTsgb3BhY2l0eTogLjc7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZVkoMi4yKTsgb3BhY2l0eTogMTsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgfVxuICAubmF2LWdyb3VwIHsgZGlzcGxheTogZmxleDsgZ2FwOiA2cHg7IH1cbiAgLm5hdi1leWVicm93IHsgZGlzcGxheTogbm9uZTsgfVxuICAuc2lkZWJhci1mb290ZXIgeyBtYXJnaW46IDAgMCAwIGF1dG87IHBhZGRpbmc6IDA7IGJvcmRlcjogbm9uZTsgfVxuICAuYnJhbmQtbWFpbiwgLnJvbGUtdGFnIHsgZGlzcGxheTogbm9uZTsgfVxuICAubWFpbiB7IG1hcmdpbi1sZWZ0OiAwOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8670:
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function LoginComponent_div_68_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function LoginComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 17)(5, "span", 17)(6, "span", 17)(7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18)(9, "div", 19)(10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "IMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "STOCK CTRL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24)(18, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sign in to access your inventory workspace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_68_Template_form_ngSubmit_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label")(22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_68_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label")(26, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_68_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_div_68_p_31_Template, 2, 1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2116 ", ctx_r0.ticketNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Signing in..." : "Log in", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
  }
}
function LoginComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span")(4, "span")(5, "span")(6, "span")(7, "span")(8, "span")(9, "span")(10, "span")(11, "span")(12, "span")(13, "span")(14, "span")(15, "span")(16, "span")(17, "span")(18, "span")(19, "span")(20, "span")(21, "span")(22, "span")(23, "span")(24, "span")(25, "span")(26, "span")(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Loading your inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Preparing your workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoginComponent {
  constructor(api, router, el) {
    this.api = api;
    this.router = router;
    this.el = el;
    this.email = '';
    this.password = '';
    this.error = '';
    this.loading = false;
    this.postLoginLoading = false;
    this.ticketNo = '';
  }
  ngOnInit() {
    this.ticketNo = String(Math.floor(1000 + Math.random() * 9000));
  }
  ngAfterViewInit() {
    // non-interactive login animation handled by CSS
  }
  submit() {
    this.error = '';
    this.loading = true;
    this.api.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.loading = false;
        this.postLoginLoading = true;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      },
      error: err => {
        this.error = err?.error?.Message || 'Invalid email or password';
        this.loading = false;
      },
      complete: () => this.loading = false
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 70,
      vars: 2,
      consts: [[1, "auth-page"], [1, "auth-brandpanel"], [1, "brandpanel-inner"], [1, "eyebrow"], [1, "eyebrow-dash"], [1, "brand-heading"], [1, "brand-lede"], [1, "manifest-list"], [1, "manifest-num"], ["aria-hidden", "true", 1, "barcode"], [1, "brand-footer"], ["class", "auth-formpanel", 4, "ngIf"], ["class", "post-login-loader", "aria-live", "polite", 4, "ngIf"], [1, "auth-formpanel"], [1, "auth-card"], [1, "ticket-stub"], [1, "ticket-marks"], [1, "ticket-mark"], [1, "ticket-header"], [1, "ticket-brand"], [1, "ticket-logo"], [1, "ticket-sub"], [1, "ticket-number"], ["aria-hidden", "true", 1, "perforation"], [1, "auth-body"], [1, "auth-desc"], [1, "auth-form", 3, "ngSubmit"], [1, "field-label"], ["type", "email", "name", "email", "placeholder", "you@company.com", "required", "", "autocomplete", "email", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "autocomplete", "current-password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-primary", "auth-submit", 3, "disabled"], ["class", "auth-error", 4, "ngIf"], [1, "auth-error"], ["aria-live", "polite", 1, "post-login-loader"], [1, "post-login-card"], ["aria-hidden", "true", 1, "loader-barcode"], [1, "loader-text"], [1, "loader-sub"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "MANIFEST / ACCESS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Every unit, accounted for.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " A clean, auditable inventory system for modern operations. Track stock, manage products, and stay ahead of low-stock events. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 7)(12, "li")(13, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "01");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Real-time stock tracking");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "02");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Category-driven organization");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Low-stock alerts & reporting");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span")(29, "span")(30, "span")(31, "span")(32, "span")(33, "span")(34, "span")(35, "span")(36, "span")(37, "span")(38, "span")(39, "span")(40, "span")(41, "span")(42, "span")(43, "span")(44, "span")(45, "span")(46, "span")(47, "span")(48, "span")(49, "span")(50, "span")(51, "span")(52, "span")(53, "span")(54, "span")(55, "span")(56, "span")(57, "span")(58, "span")(59, "span")(60, "span")(61, "span")(62, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10)(64, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "IMS \u00B7 Rev. 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Clean Architecture / .NET 8");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, LoginComponent_div_68_Template, 32, 6, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, LoginComponent_div_69_Template, 32, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.postLoginLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.postLoginLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-family: var(--font-body);\n  background: var(--bg);\n}\n\n\n\n.auth-brandpanel[_ngcontent-%COMP%] {\n  background: var(--sidebar);\n  color: var(--sidebar-ink);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  position: relative;\n  overflow: hidden;\n}\n.auth-brandpanel[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: -50%;\n  background-image: repeating-linear-gradient(\n    45deg,\n    rgba(255,255,255,0.10) 0px,\n    rgba(255,255,255,0.10) 1px,\n    transparent 1px,\n    transparent 12px\n  );\n  background-size: 200% 200%;\n  animation: _ngcontent-%COMP%_gridDrift 14s linear infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_gridDrift {\n  0% { transform: translate(0, 0); }\n  100% { transform: translate(50%, 50%); }\n}\n.brandpanel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: _ngcontent-%COMP%_fadeUp 0.8s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from { opacity: 0; transform: translateY(18px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-family: var(--font-mono);\n  font-size: 11px;\n  font-weight: 600;\n  color: #8a9390;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n}\n.eyebrow-dash[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 2px;\n  background: var(--amber);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_dashPulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_dashPulse {\n  0%, 100% { transform: scaleX(1); opacity: 0.8; }\n  50% { transform: scaleX(1.4); opacity: 1; }\n}\n.brand-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-head);\n  font-size: 40px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.1;\n  letter-spacing: -0.4px;\n}\n.brand-lede[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.55;\n  color: #a8b5af;\n  margin: 0;\n}\n.manifest-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.manifest-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: #d3dcd6;\n}\n.manifest-num[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--amber);\n  background: rgba(217,142,43,0.12);\n  border: 1px solid rgba(217,142,43,0.25);\n  border-radius: var(--radius-sm);\n  padding: 2px 8px;\n}\n.barcode[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  margin-top: 6px;\n  position: relative;\n}\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 3px;\n  background: rgba(201,209,203,0.7);\n  border-radius: 1px;\n  animation: _ngcontent-%COMP%_barcodePulse 1.8s ease-in-out infinite;\n}\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(odd) { height: 28px; }\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(even) { height: 18px; }\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n) { animation-delay: 0.3s; }\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5n) { animation-delay: 0.7s; }\n.barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7n) { animation-delay: 1.1s; }\n\n@keyframes _ngcontent-%COMP%_barcodePulse {\n  0%, 100% { opacity: 0.5; }\n  50% { opacity: 1; }\n}\n.brand-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-family: var(--font-mono);\n  font-size: 10px;\n  color: #6b7570;\n  letter-spacing: 0.6px;\n}\n\n\n\n.auth-formpanel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.auth-formpanel[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: -60%;\n  background:\n    radial-gradient(circle at 15% 25%, rgba(45,212,191,0.32) 0%, transparent 28%),\n    radial-gradient(circle at 80% 70%, rgba(245,158,11,0.28) 0%, transparent 30%),\n    radial-gradient(circle at 45% 55%, rgba(244,63,94,0.24) 0%, transparent 26%),\n    radial-gradient(circle at 20% 75%, rgba(45,212,191,0.22) 0%, transparent 22%),\n    radial-gradient(circle at 75% 20%, rgba(245,158,11,0.24) 0%, transparent 24%);\n  animation: _ngcontent-%COMP%_blobDrift 18s ease-in-out infinite alternate;\n  pointer-events: none;\n}\n.auth-formpanel[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: -40%;\n  background-image:\n    radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 0%, transparent 4px),\n    radial-gradient(circle at 70% 20%, rgba(255,255,255,0.10) 0%, transparent 3px),\n    radial-gradient(circle at 50% 70%, rgba(255,255,255,0.08) 0%, transparent 5px),\n    radial-gradient(circle at 15% 60%, rgba(255,255,255,0.11) 0%, transparent 3px),\n    radial-gradient(circle at 85% 80%, rgba(255,255,255,0.09) 0%, transparent 4px),\n    radial-gradient(circle at 40% 90%, rgba(255,255,255,0.10) 0%, transparent 3px),\n    radial-gradient(circle at 90% 45%, rgba(255,255,255,0.12) 0%, transparent 5px),\n    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 4px);\n  background-size: 320px 320px, 280px 280px, 360px 360px, 240px 240px, 300px 300px, 260px 260px, 340px 340px, 220px 220px;\n  animation:\n    _ngcontent-%COMP%_drift1 18s linear infinite,\n    _ngcontent-%COMP%_drift2 22s linear infinite reverse,\n    _ngcontent-%COMP%_drift3 20s linear infinite;\n  opacity: .7;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_blobDrift {\n  0% { transform: translate(0,0) rotate(0deg); }\n  50% { transform: translate(30px,-25px) rotate(1.5deg); }\n  100% { transform: translate(-20px,20px) rotate(-1deg); }\n}\n@keyframes _ngcontent-%COMP%_drift1 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: 180px 140px, -140px 160px, 120px -80px, -60px 100px, 90px -120px, -110px 60px, 150px -40px, -30px 80px; }\n}\n@keyframes _ngcontent-%COMP%_drift2 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: -160px 120px, 130px -100px, -90px 70px, 50px -60px, -70px 90px, 100px -30px, -140px 50px, 60px -90px; }\n}\n@keyframes _ngcontent-%COMP%_drift3 {\n  0% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }\n  100% { background-position: 100px -80px, -120px 90px, 80px -40px, -50px 60px, 70px -70px, -80px 40px, 110px -50px, -40px 70px; }\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n}\n.ticket-stub[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 18px 20px 0;\n}\n.ticket-marks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 4px;\n  margin-bottom: 10px;\n}\n.ticket-mark[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--border);\n  animation: _ngcontent-%COMP%_ticketPulse 2.4s ease-in-out infinite;\n}\n.ticket-mark[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.4s; }\n.ticket-mark[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.8s; }\n.ticket-mark[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 1.2s; }\n\n@keyframes _ngcontent-%COMP%_ticketPulse {\n  0%, 100% { opacity: 0.4; transform: scale(0.85); }\n  50% { opacity: 1; transform: scale(1); }\n}\n.ticket-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ticket-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ticket-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-head);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ink);\n  letter-spacing: 0.4px;\n}\n.ticket-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n}\n.ticket-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--muted);\n}\n.perforation[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 14px 0 0;\n  background-image: linear-gradient(to right, var(--border) 50%, transparent 50%);\n  background-size: 8px 1px;\n  background-repeat: repeat-x;\n}\n\n.auth-body[_ngcontent-%COMP%] {\n  padding: 20px 20px 24px;\n}\n.auth-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--muted);\n  margin: 0 0 16px;\n  line-height: 1.5;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  outline: none;\n  background: var(--surface);\n  color: var(--ink);\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px var(--teal-light);\n}\n.auth-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: var(--teal);\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.auth-submit[_ngcontent-%COMP%]:hover:not(:disabled) { background: var(--teal-dark); }\n.auth-submit[_ngcontent-%COMP%]:disabled { opacity: .7; cursor: not-allowed; }\n.auth-error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--brick);\n  text-align: center;\n}\n\n@media (max-width: 860px) {\n  .auth-page[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .auth-brandpanel[_ngcontent-%COMP%] { display: none; }\n}\n\n\n\n.post-login-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(237, 239, 234, 0.92);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_loaderFadeIn 260ms ease;\n}\n.post-login-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  text-align: center;\n}\n.loader-barcode[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 3px;\n  border-radius: 1px;\n  background: var(--teal);\n  animation: _ngcontent-%COMP%_loaderBar 1.4s ease-in-out infinite;\n}\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(odd) { height: 26px; }\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(even) { height: 16px; }\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3n) { animation-delay: 0.25s; }\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5n) { animation-delay: 0.55s; }\n.loader-barcode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7n) { animation-delay: 0.85s; }\n\n@keyframes _ngcontent-%COMP%_loaderBar {\n  0%, 100% { opacity: 0.35; transform: scaleY(0.9); }\n  50% { opacity: 1; transform: scaleY(1.05); }\n}\n@keyframes _ngcontent-%COMP%_loaderFadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.loader-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-head);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ink);\n  letter-spacing: -0.2px;\n}\n.loader-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--muted);\n  letter-spacing: 0.4px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7Ozs7OztHQU1DO0VBQ0QsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLEtBQUssMEJBQTBCLEVBQUU7RUFDakMsT0FBTyw4QkFBOEIsRUFBRTtBQUN6QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUM3QztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFdBQVcsb0JBQW9CLEVBQUUsWUFBWSxFQUFFO0VBQy9DLE1BQU0sc0JBQXNCLEVBQUUsVUFBVSxFQUFFO0FBQzVDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGlEQUFpRDtBQUNuRDtBQUNBLCtCQUErQixZQUFZLEVBQUU7QUFDN0MsZ0NBQWdDLFlBQVksRUFBRTtBQUM5Qyw4QkFBOEIscUJBQXFCLEVBQUU7QUFDckQsOEJBQThCLHFCQUFxQixFQUFFO0FBQ3JELDhCQUE4QixxQkFBcUIsRUFBRTs7QUFFckQ7RUFDRSxXQUFXLFlBQVksRUFBRTtFQUN6QixNQUFNLFVBQVUsRUFBRTtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYOzs7OztpRkFLK0U7RUFDL0UsdURBQXVEO0VBQ3ZELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7Ozs7Ozs7O2tGQVFnRjtFQUNoRix1SEFBdUg7RUFDdkg7Ozs4QkFHNEI7RUFDNUIsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsS0FBSyxzQ0FBc0MsRUFBRTtFQUM3QyxNQUFNLCtDQUErQyxFQUFFO0VBQ3ZELE9BQU8sOENBQThDLEVBQUU7QUFDekQ7QUFDQTtFQUNFLEtBQUssMkRBQTJELEVBQUU7RUFDbEUsT0FBTywySEFBMkgsRUFBRTtBQUN0STtBQUNBO0VBQ0UsS0FBSywyREFBMkQsRUFBRTtFQUNsRSxPQUFPLHlIQUF5SCxFQUFFO0FBQ3BJO0FBQ0E7RUFDRSxLQUFLLDJEQUEyRCxFQUFFO0VBQ2xFLE9BQU8sc0hBQXNILEVBQUU7QUFDakk7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0RBQWdEO0FBQ2xEO0FBQ0EsNEJBQTRCLHFCQUFxQixFQUFFO0FBQ25ELDRCQUE0QixxQkFBcUIsRUFBRTtBQUNuRCw0QkFBNEIscUJBQXFCLEVBQUU7O0FBRW5EO0VBQ0UsV0FBVyxZQUFZLEVBQUUsc0JBQXNCLEVBQUU7RUFDakQsTUFBTSxVQUFVLEVBQUUsbUJBQW1CLEVBQUU7QUFDekM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwrRUFBK0U7RUFDL0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrRkFBa0Y7QUFDcEY7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZDQUE2QztBQUMvQztBQUNBLG9DQUFvQyw0QkFBNEIsRUFBRTtBQUNsRSx3QkFBd0IsV0FBVyxFQUFFLG1CQUFtQixFQUFFO0FBQzFEO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYSwwQkFBMEIsRUFBRTtFQUN6QyxtQkFBbUIsYUFBYSxFQUFFO0FBQ3BDOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsOENBQThDO0FBQ2hEO0FBQ0Esc0NBQXNDLFlBQVksRUFBRTtBQUNwRCx1Q0FBdUMsWUFBWSxFQUFFO0FBQ3JELHFDQUFxQyxzQkFBc0IsRUFBRTtBQUM3RCxxQ0FBcUMsc0JBQXNCLEVBQUU7QUFDN0QscUNBQXFDLHNCQUFzQixFQUFFOztBQUU3RDtFQUNFLFdBQVcsYUFBYSxFQUFFLHNCQUFzQixFQUFFO0VBQ2xELE1BQU0sVUFBVSxFQUFFLHVCQUF1QixFQUFFO0FBQzdDO0FBQ0E7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixLQUFLLFVBQVUsRUFBRTtBQUNuQjtBQUNBO0VBQ0UsU0FBUztFQUNULDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcclxufVxyXG5cclxuLyogQnJhbmQgcGFuZWwgKGxlZnQpICovXHJcbi5hdXRoLWJyYW5kcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXIpO1xyXG4gIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWluayk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmF1dGgtYnJhbmRwYW5lbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IC01MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnLFxyXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwwLjEwKSAwcHgsXHJcbiAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMTApIDFweCxcclxuICAgIHRyYW5zcGFyZW50IDFweCxcclxuICAgIHRyYW5zcGFyZW50IDEycHhcclxuICApO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xyXG4gIGFuaW1hdGlvbjogZ3JpZERyaWZ0IDE0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuQGtleWZyYW1lcyBncmlkRHJpZnQge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpOyB9XHJcbn1cclxuLmJyYW5kcGFuZWwtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMThweDtcclxuICBhbmltYXRpb246IGZhZGVVcCAwLjhzIGVhc2Utb3V0IGJvdGg7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlVXAge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMThweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcbi5leWVicm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzhhOTM5MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxufVxyXG4uZXllYnJvdy1kYXNoIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGFuaW1hdGlvbjogZGFzaFB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgZGFzaFB1bHNlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyBvcGFjaXR5OiAwLjg7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpOyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuLmJyYW5kLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWhlYWQpO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufVxyXG4uYnJhbmQtbGVkZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xyXG4gIGNvbG9yOiAjYThiNWFmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWFuaWZlc3QtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5tYW5pZmVzdC1saXN0IGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2QzZGNkNjtcclxufVxyXG4ubWFuaWZlc3QtbnVtIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE3LDE0Miw0MywwLjEyKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNywxNDIsNDMsMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG59XHJcbi5iYXJjb2RlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJhcmNvZGUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDNweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMSwyMDksMjAzLDAuNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGFuaW1hdGlvbjogYmFyY29kZVB1bHNlIDEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuLmJhcmNvZGUgc3BhbjpudGgtY2hpbGQob2RkKSB7IGhlaWdodDogMjhweDsgfVxyXG4uYmFyY29kZSBzcGFuOm50aC1jaGlsZChldmVuKSB7IGhlaWdodDogMThweDsgfVxyXG4uYmFyY29kZSBzcGFuOm50aC1jaGlsZCgzbikgeyBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cclxuLmJhcmNvZGUgc3BhbjpudGgtY2hpbGQoNW4pIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjdzOyB9XHJcbi5iYXJjb2RlIHNwYW46bnRoLWNoaWxkKDduKSB7IGFuaW1hdGlvbi1kZWxheTogMS4xczsgfVxyXG5cclxuQGtleWZyYW1lcyBiYXJjb2RlUHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC41OyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcbi5icmFuZC1mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzZiNzU3MDtcclxuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gcGFuZWwgKHJpZ2h0KSAqL1xyXG4uYXV0aC1mb3JtcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5hdXRoLWZvcm1wYW5lbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IC02MCU7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDI1JSwgcmdiYSg0NSwyMTIsMTkxLDAuMzIpIDAlLCB0cmFuc3BhcmVudCAyOCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgNzAlLCByZ2JhKDI0NSwxNTgsMTEsMC4yOCkgMCUsIHRyYW5zcGFyZW50IDMwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQ1JSA1NSUsIHJnYmEoMjQ0LDYzLDk0LDAuMjQpIDAlLCB0cmFuc3BhcmVudCAyNiUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNzUlLCByZ2JhKDQ1LDIxMiwxOTEsMC4yMikgMCUsIHRyYW5zcGFyZW50IDIyJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc1JSAyMCUsIHJnYmEoMjQ1LDE1OCwxMSwwLjI0KSAwJSwgdHJhbnNwYXJlbnQgMjQlKTtcclxuICBhbmltYXRpb246IGJsb2JEcmlmdCAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5hdXRoLWZvcm1wYW5lbDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogLTQwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgNDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpIDAlLCB0cmFuc3BhcmVudCA0cHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3MCUgMjAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTApIDAlLCB0cmFuc3BhcmVudCAzcHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNzAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIDAlLCB0cmFuc3BhcmVudCA1cHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxNSUgNjAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTEpIDAlLCB0cmFuc3BhcmVudCAzcHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4NSUgODAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDkpIDAlLCB0cmFuc3BhcmVudCA0cHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA0MCUgOTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTApIDAlLCB0cmFuc3BhcmVudCAzcHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgNDUlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpIDAlLCB0cmFuc3BhcmVudCA1cHgpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMjAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIDAlLCB0cmFuc3BhcmVudCA0cHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzIwcHggMzIwcHgsIDI4MHB4IDI4MHB4LCAzNjBweCAzNjBweCwgMjQwcHggMjQwcHgsIDMwMHB4IDMwMHB4LCAyNjBweCAyNjBweCwgMzQwcHggMzQwcHgsIDIyMHB4IDIyMHB4O1xyXG4gIGFuaW1hdGlvbjpcclxuICAgIGRyaWZ0MSAxOHMgbGluZWFyIGluZmluaXRlLFxyXG4gICAgZHJpZnQyIDIycyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZSxcclxuICAgIGRyaWZ0MyAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbkBrZXlmcmFtZXMgYmxvYkRyaWZ0IHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwtMjVweCkgcm90YXRlKDEuNWRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsMjBweCkgcm90YXRlKC0xZGVnKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZHJpZnQxIHtcclxuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDE4MHB4IDE0MHB4LCAtMTQwcHggMTYwcHgsIDEyMHB4IC04MHB4LCAtNjBweCAxMDBweCwgOTBweCAtMTIwcHgsIC0xMTBweCA2MHB4LCAxNTBweCAtNDBweCwgLTMwcHggODBweDsgfVxyXG59XHJcbkBrZXlmcmFtZXMgZHJpZnQyIHtcclxuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAxMjBweCwgMTMwcHggLTEwMHB4LCAtOTBweCA3MHB4LCA1MHB4IC02MHB4LCAtNzBweCA5MHB4LCAxMDBweCAtMzBweCwgLTE0MHB4IDUwcHgsIDYwcHggLTkwcHg7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGRyaWZ0MyB7XHJcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMCwgMCAwLCAwIDAsIDAgMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDBweCAtODBweCwgLTEyMHB4IDkwcHgsIDgwcHggLTQwcHgsIC01MHB4IDYwcHgsIDcwcHggLTcwcHgsIC04MHB4IDQwcHgsIDExMHB4IC01MHB4LCAtNDBweCA3MHB4OyB9XHJcbn1cclxuLmF1dGgtY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50aWNrZXQtc3R1YiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE4cHggMjBweCAwO1xyXG59XHJcbi50aWNrZXQtbWFya3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRpY2tldC1tYXJrIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpO1xyXG4gIGFuaW1hdGlvbjogdGlja2V0UHVsc2UgMi40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG4udGlja2V0LW1hcms6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcbi50aWNrZXQtbWFyazpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuOHM7IH1cclxuLnRpY2tldC1tYXJrOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMS4yczsgfVxyXG5cclxuQGtleWZyYW1lcyB0aWNrZXRQdWxzZSB7XHJcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjQ7IHRyYW5zZm9ybTogc2NhbGUoMC44NSk7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbn1cclxuLnRpY2tldC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRpY2tldC1icmFuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbi50aWNrZXQtbG9nbyB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaGVhZCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG59XHJcbi50aWNrZXQtc3ViIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG59XHJcbi50aWNrZXQtbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcbi5wZXJmb3JhdGlvbiB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiAxNHB4IDAgMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWJvcmRlcikgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDFweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbn1cclxuXHJcbi5hdXRoLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyNHB4O1xyXG59XHJcbi5hdXRoLWRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uYXV0aC1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcbi5hdXRoLWZvcm0gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcbi5hdXRoLWZvcm0gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxufVxyXG4uYXV0aC1mb3JtIGlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXRlYWwpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS10ZWFsLWxpZ2h0KTtcclxufVxyXG4uYXV0aC1zdWJtaXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVhbCk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxufVxyXG4uYXV0aC1zdWJtaXQ6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsLWRhcmspOyB9XHJcbi5hdXRoLXN1Ym1pdDpkaXNhYmxlZCB7IG9wYWNpdHk6IC43OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcbi5hdXRoLWVycm9yIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1icmljayk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAuYXV0aC1wYWdlIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAuYXV0aC1icmFuZHBhbmVsIHsgZGlzcGxheTogbm9uZTsgfVxyXG59XHJcblxyXG4vKiBQb3N0LWxvZ2luIGxvYWRlciAqL1xyXG4ucG9zdC1sb2dpbi1sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzcsIDIzOSwgMjM0LCAwLjkyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGFuaW1hdGlvbjogbG9hZGVyRmFkZUluIDI2MG1zIGVhc2U7XHJcbn1cclxuLnBvc3QtbG9naW4tY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9hZGVyLWJhcmNvZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzcHg7XHJcbn1cclxuLmxvYWRlci1iYXJjb2RlIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYWwpO1xyXG4gIGFuaW1hdGlvbjogbG9hZGVyQmFyIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuLmxvYWRlci1iYXJjb2RlIHNwYW46bnRoLWNoaWxkKG9kZCkgeyBoZWlnaHQ6IDI2cHg7IH1cclxuLmxvYWRlci1iYXJjb2RlIHNwYW46bnRoLWNoaWxkKGV2ZW4pIHsgaGVpZ2h0OiAxNnB4OyB9XHJcbi5sb2FkZXItYmFyY29kZSBzcGFuOm50aC1jaGlsZCgzbikgeyBhbmltYXRpb24tZGVsYXk6IDAuMjVzOyB9XHJcbi5sb2FkZXItYmFyY29kZSBzcGFuOm50aC1jaGlsZCg1bikgeyBhbmltYXRpb24tZGVsYXk6IDAuNTVzOyB9XHJcbi5sb2FkZXItYmFyY29kZSBzcGFuOm50aC1jaGlsZCg3bikgeyBhbmltYXRpb24tZGVsYXk6IDAuODVzOyB9XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlckJhciB7XHJcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjM1OyB0cmFuc2Zvcm06IHNjYWxlWSgwLjkpOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZVkoMS4wNSk7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlckZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG4ubG9hZGVyLXRleHQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkKTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG59XHJcbi5sb2FkZXItc3ViIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6174:
/*!*********************************************************!*\
  !*** ./src/app/features/payments/payments.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentsComponent: () => (/* binding */ PaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);








function PaymentsComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_tr_26_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const p_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.edit(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 13)(15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_tr_26_Template_button_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const p_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.edit(p_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u270F\uFE0F Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.transactionReference);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 11, p_r3.amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("badge-ok", p_r3.status.toLowerCase() === "completed")("badge-warn", p_r3.status.toLowerCase() === "pending")("badge-danger", p_r3.status.toLowerCase() === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 14, p_r3.paymentDate, "short"));
  }
}
function PaymentsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No payments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function PaymentsComponent_div_28_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r7.message.includes("updated") || ctx_r7.message.includes("created"))("err", !ctx_r7.message.includes("updated") && !ctx_r7.message.includes("created"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.message);
  }
}
function PaymentsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_div_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_div_28_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 21)(8, "line", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentsComponent_div_28_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 24)(12, "label")(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_28_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.amount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_28_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.paymentMethod = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Transaction Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_28_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.transactionReference = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label")(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_28_Template_select_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 29)(35, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, PaymentsComponent_div_28_p_37_Template, 2, 5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.editingId ? "Edit payment" : "New payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.transactionReference);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.editingId ? "Update" : "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.message);
  }
}
class PaymentsComponent {
  constructor(api, stagger, cdr, toast) {
    this.api = api;
    this.stagger = stagger;
    this.cdr = cdr;
    this.toast = toast;
    this.payments = [];
    this.amount = '';
    this.paymentMethod = '';
    this.transactionReference = '';
    this.status = 'pending';
    this.message = '';
    this.messageColor = 'var(--brick)';
    this.okColor = 'var(--teal)';
    this.errColor = 'var(--brick)';
    this.showModal = false;
    this.editingId = null;
    this.originalPayment = null;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  isDirty(current, original) {
    if (!original) return true;
    return Object.keys(current).some(key => current[key] !== original[key]);
  }
  load() {
    this.api.getPayments().subscribe({
      next: list => {
        this.payments = list;
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      }
    });
  }
  save() {
    this.message = '';
    if (!this.amount || parseFloat(this.amount) <= 0) return this.setMessage('Amount must be greater than 0.', this.errColor);
    if (!this.paymentMethod.trim()) return this.setMessage('PaymentMethod is required.', this.errColor);
    if (!this.transactionReference.trim()) return this.setMessage('TransactionReference is required.', this.errColor);
    const payload = {
      amount: parseFloat(this.amount || '0'),
      paymentMethod: this.paymentMethod.trim(),
      transactionReference: this.transactionReference.trim(),
      status: this.status
    };
    if (this.editingId) {
      if (!this.isDirty(payload, this.originalPayment)) {
        this.setMessage('No changes detected.', this.errColor);
        return;
      }
      this.api.updatePayment(this.editingId, payload).subscribe({
        next: () => {
          this.toast.show('Payment updated.', 'success');
          this.closeModal();
          this.load();
        },
        error: err => {
          this.toast.showError(err, 'Update failed.');
        }
      });
    } else {
      this.api.createPayment({
        amount: parseFloat(this.amount),
        paymentMethod: this.paymentMethod.trim(),
        transactionReference: this.transactionReference.trim()
      }).subscribe({
        next: () => {
          this.toast.show('Payment created.', 'success');
          this.closeModal();
          this.load();
        },
        error: err => {
          this.toast.showError(err, 'Create failed.');
        }
      });
    }
  }
  addNew() {
    this.showModal = true;
    this.editingId = null;
    this.amount = '';
    this.paymentMethod = '';
    this.transactionReference = '';
    this.status = 'pending';
    this.message = '';
    this.originalPayment = null;
  }
  edit(p) {
    this.showModal = true;
    this.editingId = p.id;
    this.amount = String(p.amount);
    this.paymentMethod = p.paymentMethod;
    this.transactionReference = p.transactionReference;
    this.status = (p.status || 'pending').toLowerCase();
    this.message = '';
    this.originalPayment = {
      ...p
    };
  }
  closeModal() {
    this.showModal = false;
    this.editingId = null;
    this.amount = '';
    this.paymentMethod = '';
    this.transactionReference = '';
    this.status = 'pending';
    this.message = '';
  }
  setMessage(text, color = this.errColor) {
    this.message = text;
    this.messageColor = color;
  }
  static {
    this.ɵfac = function PaymentsComponent_Factory(t) {
      return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__.StaggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PaymentsComponent,
      selectors: [["app-payments"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 3,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn", "btn-add", 3, "click"], [1, "panel"], [1, "panel-body"], [1, "table-wrap", "stagger-target"], ["class", "stagger-item", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "stagger-item", 3, "click"], [1, "badge"], [1, "actions"], [1, "btn", "btn-edit", 3, "click"], ["colspan", "6", 1, "empty"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-header-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "product-form", 3, "ngSubmit"], [1, "form-grid"], ["type", "number", "name", "amount", "placeholder", "0.00", "required", "", 3, "ngModel", "ngModelChange"], ["name", "paymentMethod", "placeholder", "Payment method", "required", "", 3, "ngModel", "ngModelChange"], ["name", "transactionReference", "placeholder", "Reference", "required", "", 3, "ngModel", "ngModelChange"], ["name", "status", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "status", 3, "ok", "err", 4, "ngIf"], [1, "status"]],
      template: function PaymentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Track payment status against transactions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentsComponent_Template_button_click_7_listener() {
            return ctx.addNew();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2795 Add payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "table")(13, "thead")(14, "tr")(15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Method");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, PaymentsComponent_tr_26_Template, 17, 17, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, PaymentsComponent_tr_27_Template, 3, 0, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PaymentsComponent_div_28_Template, 38, 7, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.payments);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.payments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".payments-page[_ngcontent-%COMP%] { padding: 24px; font-family: var(--font-body); color: var(--ink); }\n.payments-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0 0 16px; font-size: 22px; }\n.layout[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(280px, 340px) 1fr; gap: 16px; align-items: start; }\n.form-card[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 12px; font-size: 15px; font-weight: 700; color: var(--ink); }\nlabel[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; font-size: 13px; font-weight: 600; color: var(--muted); }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; font-family: inherit; outline: none; }\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(31,111,99,0.18); }\n.actions[_ngcontent-%COMP%] { display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap; }\n.status[_ngcontent-%COMP%] { margin-top: 10px; font-size: 13px; }\n.btn-primary[_ngcontent-%COMP%] { padding: 10px 14px; border: none; border-radius: 8px; background: var(--teal); color: var(--surface); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }\n.btn-secondary[_ngcontent-%COMP%] { padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); color: var(--muted); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }\n.table-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; font-weight: 700; margin-bottom: 10px; font-size: 14px; }\n.table-wrap[_ngcontent-%COMP%] { overflow: auto; max-height: 520px; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; }\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { text-align: left; padding: 10px; border-bottom: 1px solid var(--border); }\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: var(--sidebar); color: var(--sidebar-ink); font-weight: 700; position: sticky; top: 0; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: var(--teal-light); cursor: pointer; }\n.empty[_ngcontent-%COMP%] { text-align: center; color: var(--muted); padding: 18px; }\n\n\n\ntd[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease, color 120ms ease;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--ink);\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  border-color: #d97706;\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #7f1d1d;\n  transform: translateY(-1px);\n}\n\n.badge[_ngcontent-%COMP%] { display: inline-block; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: capitalize; }\n.badge-ok[_ngcontent-%COMP%] { background: var(--teal-light); color: var(--teal); }\n.badge-warn[_ngcontent-%COMP%] { background: var(--amber-bg); color: var(--amber); }\n.badge-danger[_ngcontent-%COMP%] { background: var(--brick-bg); color: var(--brick); }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsYUFBYSxFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFO0FBQ2xGLG9CQUFvQixnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDdkQsVUFBVSxhQUFhLEVBQUUsK0NBQStDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0FBQ3pHLDBCQUEwQiwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsdUNBQXVDLEVBQUU7QUFDcEssZ0JBQWdCLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRTtBQUN4RixRQUFRLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFO0FBQ3RJLGdCQUFnQixrQkFBa0IsRUFBRSwrQkFBK0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFO0FBQy9JLDRCQUE0Qix5QkFBeUIsRUFBRSwwQ0FBMEMsRUFBRTtBQUNuRyxXQUFXLGFBQWEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRTtBQUN2RSxVQUFVLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtBQUM3QyxlQUFlLGtCQUFrQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFO0FBQy9MLGlCQUFpQixrQkFBa0IsRUFBRSwrQkFBK0IsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFO0FBQ3JOLGdCQUFnQixhQUFhLEVBQUUsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFO0FBQzVJLGNBQWMsY0FBYyxFQUFFLGlCQUFpQixFQUFFO0FBQ2pELFFBQVEsV0FBVyxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRTtBQUNqRSxTQUFTLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxzQ0FBc0MsRUFBRTtBQUNsRixXQUFXLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtBQUM5RyxpQkFBaUIsNkJBQTZCLEVBQUUsZUFBZSxFQUFFO0FBQ2pFLFNBQVMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFOztBQUVqRSx5QkFBeUI7QUFDekI7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlIQUF5SDtBQUMzSDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUEsU0FBUyxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsMEJBQTBCLEVBQUU7QUFDeEksWUFBWSw2QkFBNkIsRUFBRSxrQkFBa0IsRUFBRTtBQUMvRCxjQUFjLDJCQUEyQixFQUFFLG1CQUFtQixFQUFFO0FBQ2hFLGdCQUFnQiwyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50cy1wYWdlIHsgcGFkZGluZzogMjRweDsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XHJcbi5wYXltZW50cy1wYWdlIGgxIHsgbWFyZ2luOiAwIDAgMTZweDsgZm9udC1zaXplOiAyMnB4OyB9XHJcbi5sYXlvdXQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyODBweCwgMzQwcHgpIDFmcjsgZ2FwOiAxNnB4OyBhbGlnbi1pdGVtczogc3RhcnQ7IH1cclxuLmZvcm0tY2FyZCwgLnRhYmxlLWNhcmQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMTJweDsgcGFkZGluZzogMTZweDsgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDQpOyB9XHJcbi5mb3JtLWNhcmQgaDMgeyBtYXJnaW46IDAgMCAxMnB4OyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS1pbmspOyB9XHJcbmxhYmVsIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IG1hcmdpbi1ib3R0b206IDEycHg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxyXG5pbnB1dCwgc2VsZWN0IHsgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTRweDsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG91dGxpbmU6IG5vbmU7IH1cclxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tdGVhbCk7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLDExMSw5OSwwLjE4KTsgfVxyXG4uYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogOHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnN0YXR1cyB7IG1hcmdpbi10b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4uYnRuLXByaW1hcnkgeyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsKTsgY29sb3I6IHZhcigtLXN1cmZhY2UpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cclxuLmJ0bi1zZWNvbmRhcnkgeyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDsgfVxyXG4udGFibGUtaGVhZGVyIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAxMHB4OyBmb250LXNpemU6IDE0cHg7IH1cclxuLnRhYmxlLXdyYXAgeyBvdmVyZmxvdzogYXV0bzsgbWF4LWhlaWdodDogNTIwcHg7IH1cclxudGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgZm9udC1zaXplOiAxM3B4OyB9XHJcbnRoLCB0ZCB7IHRleHQtYWxpZ246IGxlZnQ7IHBhZGRpbmc6IDEwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XHJcbnRoZWFkIHRoIHsgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhcik7IGNvbG9yOiB2YXIoLS1zaWRlYmFyLWluayk7IGZvbnQtd2VpZ2h0OiA3MDA7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgfVxyXG50Ym9keSB0cjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRlYWwtbGlnaHQpOyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuLmVtcHR5IHsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBwYWRkaW5nOiAxOHB4OyB9XHJcblxyXG4vKiBUYWJsZSBhY3Rpb24gYnV0dG9ucyAqL1xyXG50ZCAuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG50ZCAuYnRuLWdob3N0LFxyXG50ZCAuYnRuLWVkaXQsXHJcbnRkIC5idG4tZGVsZXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgYm94LXNoYWRvdyAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2UsIGJvcmRlci1jb2xvciAxMjBtcyBlYXNlLCBjb2xvciAxMjBtcyBlYXNlO1xyXG59XHJcbnRkIC5idG4tZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxufVxyXG50ZCAuYnRuLWdob3N0OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWluayk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbnRkIC5idG4tZWRpdCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYjtcclxuICBjb2xvcjogIzkyNDAwZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjU5ZTBiO1xyXG59XHJcbnRkIC5idG4tZWRpdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICBib3JkZXItY29sb3I6ICNkOTc3MDY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbnRkIC5idG4tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG4gIGNvbG9yOiAjOTkxYjFiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XHJcbn1cclxudGQgLmJ0bi1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xyXG4gIGNvbG9yOiAjN2YxZDFkO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJhZGdlIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiA0cHggMTBweDsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuLmJhZGdlLW9rIHsgYmFja2dyb3VuZDogdmFyKC0tdGVhbC1saWdodCk7IGNvbG9yOiB2YXIoLS10ZWFsKTsgfVxyXG4uYmFkZ2Utd2FybiB7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWJnKTsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG4uYmFkZ2UtZGFuZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tYnJpY2stYmcpOyBjb2xvcjogdmFyKC0tYnJpY2spOyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5644:
/*!*********************************************************!*\
  !*** ./src/app/features/products/products.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);








function ProductsComponent_div_18_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_18_tr_16_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const p_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.edit(p_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td")(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "div", 21)(13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 26)(21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_18_tr_16_Template_button_click_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const p_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.remove(p_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", (ctx_r5.editing == null ? null : ctx_r5.editing.id) === p_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r7.supplier || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.categoriesMap[p_r7.categoryId] || p_r7.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 20, p_r7.price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r5.stockPct(p_r7), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("warn", p_r7.quantityInStock < 30)("danger", p_r7.quantityInStock < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r7.quantityInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("badge-ok", p_r7.quantityInStock >= 30)("badge-warn", p_r7.quantityInStock >= 10 && p_r7.quantityInStock < 30)("badge-danger", p_r7.quantityInStock < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r7.quantityInStock >= 30 ? "IN STOCK" : p_r7.quantityInStock >= 10 ? "LOW" : "CRITICAL", " ");
  }
}
function ProductsComponent_div_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No products found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductsComponent_div_18_tr_16_Template, 23, 23, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProductsComponent_div_18_tr_17_Template, 3, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.filtered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.filtered.length === 0);
  }
}
function ProductsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.loadError);
  }
}
function ProductsComponent_div_21_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", c_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r12.name);
  }
}
function ProductsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 33)(3, "span", 34)(4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 37)(7, "path", 38)(8, "path", 39)(9, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_21_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "line", 43)(14, "line", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ProductsComponent_div_21_Template_form_ngSubmit_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 46)(18, "label")(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label")(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label")(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label")(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.supplier = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 51)(35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_select_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.categoryId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Select category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ProductsComponent_div_21_option_40_Template, 2, 2, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 51)(42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "textarea", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_21_Template_textarea_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 56)(46, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.editing ? "Edit product" : "New product", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.editing ? "Update" : "Create");
  }
}
function ProductsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_22_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_22_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 33)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Delete product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_22_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 43)(8, "line", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 59)(11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 62)(14, "path", 63)(15, "path", 64)(16, "line", 65)(17, "line", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "? This cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 56)(24, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_div_22_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.deleteTargetName);
  }
}
class ProductsComponent {
  constructor(api, cdr, toast, stagger) {
    this.api = api;
    this.cdr = cdr;
    this.toast = toast;
    this.stagger = stagger;
    this.products = [];
    this.categories = [];
    this.editing = null;
    this.name = '';
    this.price = '';
    this.quantity = '';
    this.supplier = '';
    this.description = '';
    this.categoryId = null;
    this.search = '';
    this.filtered = [];
    this.loading = false;
    this.loadError = '';
    this.showModal = false;
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
    this.originalPayload = null;
  }
  ngOnInit() {
    this.load();
    this.loadCategories();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  isDirty(current, original) {
    if (!original) return true;
    return Object.keys(current).some(key => current[key] !== original[key]);
  }
  load() {
    this.loading = true;
    this.loadError = '';
    this.api.getProducts().subscribe({
      next: list => {
        this.products = list ?? [];
        this.applyFilter();
        this.loading = false;
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.loading = false;
        this.loadError = err?.error?.message || 'Failed to load products.';
        this.products = [];
        this.filtered = [];
        this.cdr.markForCheck();
      }
    });
  }
  loadCategories() {
    this.api.getCategories().subscribe({
      next: cats => {
        this.categories = cats ?? [];
        this.applyFilter();
        this.cdr.markForCheck();
      },
      error: () => {
        this.categories = [];
        this.applyFilter();
        this.cdr.markForCheck();
      }
    });
  }
  applyFilter() {
    const q = this.search.trim().toLowerCase();
    this.filtered = q ? this.products.filter(p => p.name.toLowerCase().includes(q) || (p.supplier || '').toLowerCase().includes(q)) : [...this.products];
  }
  get categoriesMap() {
    const map = {};
    for (const c of this.categories) map[c.id] = c.name;
    return map;
  }
  onSearch() {
    this.applyFilter();
  }
  stockPct(p) {
    return Math.min(100, Math.max(0, p.quantityInStock));
  }
  addNew() {
    this.showModal = true;
    this.editing = null;
    this.name = '';
    this.price = '';
    this.quantity = '';
    this.supplier = '';
    this.description = '';
    this.categoryId = null;
    this.originalPayload = null;
  }
  edit(p) {
    this.showModal = true;
    this.editing = p;
    this.name = p.name;
    this.price = String(p.price);
    this.quantity = String(p.quantityInStock);
    this.supplier = p.supplier ?? '';
    this.description = p.description ?? '';
    this.categoryId = p.categoryId;
    this.originalPayload = {
      name: p.name,
      description: p.description ?? '',
      price: p.price,
      quantityInStock: p.quantityInStock,
      supplier: p.supplier ?? '',
      categoryId: p.categoryId
    };
  }
  closeModal() {
    this.showModal = false;
    this.editing = null;
    this.name = '';
    this.price = '';
    this.quantity = '';
    this.supplier = '';
    this.description = '';
    this.categoryId = null;
  }
  save() {
    if (!this.name.trim()) return this.toast.show('Name is required.', 'error');
    const price = parseFloat(this.price);
    const quantity = parseInt(this.quantity, 10);
    const categoryId = this.categoryId ?? 0;
    if (isNaN(price) || price <= 0) return this.toast.show('Price must be a positive number.', 'error');
    if (Number.isNaN(quantity) || quantity < 0) return this.toast.show('Quantity must be non-negative.', 'error');
    if (!categoryId) return this.toast.show('Select a category.', 'error');
    const payload = {
      name: this.name.trim(),
      description: this.description.trim() || undefined,
      price,
      quantityInStock: quantity,
      supplier: this.supplier.trim() || undefined,
      categoryId
    };
    if (this.editing && this.editing.id) {
      if (!this.isDirty(payload, this.originalPayload)) {
        this.toast.show('No changes detected.', 'error');
        return;
      }
      this.api.updateProduct(this.editing.id, payload).subscribe({
        next: () => {
          this.toast.show('Product updated', 'success');
          this.load();
          this.closeModal();
        },
        error: err => this.toast.showError(err, 'Update failed.')
      });
    } else {
      this.api.createProduct(payload).subscribe({
        next: () => {
          this.toast.show('Product added', 'success');
          this.load();
          this.closeModal();
        },
        error: err => this.toast.showError(err, 'Create failed.')
      });
    }
  }
  remove(id) {
    const product = this.products.find(p => p.id === id);
    this.deleteTargetId = id;
    this.deleteTargetName = product?.name || 'this product';
    this.showDeleteModal = true;
  }
  closeDelete() {
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
  }
  confirmDelete() {
    if (this.deleteTargetId == null) return;
    const id = this.deleteTargetId;
    this.closeDelete();
    this.api.deleteProduct(id).subscribe({
      next: () => {
        this.toast.show('Product deleted', 'success');
        this.load();
      },
      error: err => this.toast.showError(err, 'Delete failed.')
    });
  }
  select(p) {
    this.edit(p);
  }
  exportCsv() {
    this.api.exportProductsCsv().subscribe({
      next: csv => {
        const blob = new Blob([csv], {
          type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'products.csv';
        a.click();
        URL.revokeObjectURL(url);
        this.toast.show('Export downloaded', 'success');
      },
      error: err => this.toast.showError(err, 'Export failed.')
    });
  }
  importCsv() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = ev => {
      const file = ev.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const csv = e.target.result;
        this.api.importProductsCsv(csv).subscribe({
          next: () => {
            this.toast.show('CSV import completed.', 'success');
            this.load();
          },
          error: err => this.toast.showError(err, 'Import failed.')
        });
      };
      reader.readAsText(file);
    };
    input.click();
  }
  parseCsv(csv) {
    const lines = csv.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const row = {};
      headers.forEach((h, idx) => {
        if (h.includes('name')) row.name = values[idx] || '';else if (h.includes('price')) row.price = parseFloat(values[idx]) || 0;else if (h.includes('stock') || h.includes('quantity')) row.quantityInStock = parseInt(values[idx], 10) || 0;else if (h.includes('supplier')) row.supplier = values[idx] || '';else if (h.includes('category')) row.categoryId = parseInt(values[idx], 10) || null;else row[h] = values[idx] || '';
      });
      if (row.name) rows.push(row);
    }
    return rows;
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__.StaggerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 6,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "page-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-add", 3, "click"], [1, "panel"], [1, "panel-body"], [1, "search-bar"], ["placeholder", "Filter by name...", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], ["class", "table-wrap stagger-target", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "empty-state error", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "table-wrap", "stagger-target"], ["class", "clickable stagger-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "clickable", "stagger-item", 3, "click"], [1, "product-name"], [1, "product-meta"], [1, "stock-cell"], [1, "stock-bar"], [1, "stock-fill"], [1, "stock-count"], [1, "badge"], [1, "actions"], [1, "btn", "btn-delete", 3, "click"], ["colspan", "6", 1, "empty"], [1, "empty-state"], [1, "empty-state", "error"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-header-title"], ["aria-hidden", "true", 1, "modal-header-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m7.5 4.27 9 5.15"], ["d", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["d", "m3.3 7 8.7 5 8.7-5"], ["d", "M12 22V12"], ["type", "button", "aria-label", "Close", 1, "modal-header-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "product-form", 3, "ngSubmit"], [1, "form-grid"], ["name", "name", "placeholder", "Product name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "price", "placeholder", "0.00", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "quantity", "placeholder", "0", "required", "", 3, "ngModel", "ngModelChange"], ["name", "supplier", "placeholder", "Supplier", 3, "ngModel", "ngModelChange"], [1, "full"], ["name", "categoryId", "required", "", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "description", "rows", "3", "placeholder", "Description", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], [1, "modal-card", "modal-card--danger", 3, "click"], [1, "confirm-body"], [1, "confirm-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "confirm-text"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Every item tracked in inventory.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_8_listener() {
            return ctx.importCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Import CSV");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_10_listener() {
            return ctx.exportCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Export CSV");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_12_listener() {
            return ctx.addNew();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u2795 Add product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.search = $event;
          })("input", function ProductsComponent_Template_input_input_17_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProductsComponent_div_18_Template, 18, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProductsComponent_div_19_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ProductsComponent_div_20_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ProductsComponent_div_21_Template, 48, 10, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProductsComponent_div_22_Template, 26, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".products-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  font-family: var(--font-body);\n  color: var(--ink);\n}\n.products-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 22px;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(280px, 320px) 1fr;\n  gap: 16px;\n  align-items: start;\n}\n.form-card[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.04);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(31,111,99,0.18);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n.status[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  background: var(--teal);\n  color: var(--surface);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  background: var(--brick);\n  color: var(--surface);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--surface);\n  color: var(--muted);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 520px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px;\n  border-bottom: 1px solid var(--border);\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--sidebar);\n  color: var(--sidebar-ink);\n  font-weight: 700;\n  position: sticky;\n  top: 0;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--muted);\n  padding: 18px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--muted);\n  padding: 24px;\n  font-size: 14px;\n}\n.empty-state.error[_ngcontent-%COMP%] {\n  color: var(--brick);\n  font-weight: 600;\n}\n\n\ntd[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease, color 120ms ease;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--ink);\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  border-color: #d97706;\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #7f1d1d;\n  transform: translateY(-1px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBLHlCQUF5QjtBQUN6QjtFQUNFLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUhBQXlIO0FBQzNIO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy1wYWdlIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcbi5wcm9kdWN0cy1wYWdlIGgxIHtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubGF5b3V0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI4MHB4LCAzMjBweCkgMWZyO1xyXG4gIGdhcDogMTZweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuLmZvcm0tY2FyZCwgLnRhYmxlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA0KTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxufVxyXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXRlYWwpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLDExMSw5OSwwLjE4KTtcclxufVxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsKTtcclxuICBjb2xvcjogdmFyKC0tc3VyZmFjZSk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcbi5idG4tZGFuZ2VyIHtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icmljayk7XHJcbiAgY29sb3I6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcbi50YWJsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGFibGUtd3JhcCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNTIwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcbnRoZWFkIHRoIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyKTtcclxuICBjb2xvcjogdmFyKC0tc2lkZWJhci1pbmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxudGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxudGJvZHkgdHIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYWwtbGlnaHQpO1xyXG59XHJcbi5lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgcGFkZGluZzogMThweDtcclxufVxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5lbXB0eS1zdGF0ZS5lcnJvciB7XHJcbiAgY29sb3I6IHZhcigtLWJyaWNrKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi8qIFRhYmxlIGFjdGlvbiBidXR0b25zICovXHJcbnRkIC5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBnYXA6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnRkIC5idG4tZ2hvc3QsXHJcbnRkIC5idG4tZWRpdCxcclxudGQgLmJ0bi1kZWxldGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBlYXNlLCBib3gtc2hhZG93IDEyMG1zIGVhc2UsIGJhY2tncm91bmQgMTIwbXMgZWFzZSwgYm9yZGVyLWNvbG9yIDEyMG1zIGVhc2UsIGNvbG9yIDEyMG1zIGVhc2U7XHJcbn1cclxudGQgLmJ0bi1naG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcbnRkIC5idG4tZ2hvc3Q6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5rKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmYmViO1xyXG4gIGNvbG9yOiAjOTI0MDBlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNTllMGI7XHJcbn1cclxudGQgLmJ0bi1lZGl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gIGJvcmRlci1jb2xvcjogI2Q5NzcwNjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1kZWxldGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgY29sb3I6ICM5OTFiMWI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcclxufVxyXG50ZCAuYnRuLWRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiAgY29sb3I6ICM3ZjFkMWQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7530:
/*!*******************************************************!*\
  !*** ./src/app/features/reports/reports.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);





function ReportsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ReportsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.loadError);
  }
}
function ReportsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total stock value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Products tracked");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Payments total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Receipts total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 4, ctx_r2.report.totalStockValue, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.report.totalProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 7, ctx_r2.report.payments.totalAmount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 10, ctx_r2.report.receipts.totalAmount, "1.0-0"));
  }
}
function ReportsComponent_div_10_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r6.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r6.quantitySold);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, t_r6.revenue, "1.0-0"));
  }
}
const _c0 = function () {
  return [];
};
function ReportsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Top products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16)(5, "div", 17)(6, "table")(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ReportsComponent_div_10_tr_16_Template, 8, 6, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (ctx_r3.report == null ? null : ctx_r3.report.topSellingProducts) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function ReportsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No top products yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ReportsComponent {
  constructor(api, cdr, stagger) {
    this.api = api;
    this.cdr = cdr;
    this.stagger = stagger;
    this.report = null;
    this.loading = false;
    this.loadError = '';
  }
  ngOnInit() {
    this.loading = true;
    this.loadError = '';
    this.api.getReport().subscribe({
      next: r => {
        this.report = r ?? null;
        this.loading = false;
        this.cdr.markForCheck();
        this.stagger.animate('.stat-card.stagger-item');
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.loading = false;
        this.loadError = err?.error?.message || 'Failed to load report.';
        this.report = null;
        this.cdr.markForCheck();
      }
    });
  }
  ngAfterViewInit() {
    this.stagger.animate('.stat-card.stagger-item');
    this.stagger.animate('tbody tr.stagger-item');
  }
  static {
    this.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__.StaggerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["app-reports"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 5,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["class", "empty-state", 4, "ngIf"], ["class", "empty-state error", 4, "ngIf"], ["class", "stat-grid stagger-target", 4, "ngIf"], ["class", "panel", 4, "ngIf"], [1, "empty-state"], [1, "empty-state", "error"], [1, "stat-grid", "stagger-target"], [1, "stat-card", "stagger-item"], [1, "stat-label"], [1, "stat-value"], [1, "panel"], [1, "panel-head"], [1, "panel-body"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "empty-icon"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Inventory summary and analytics.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ReportsComponent_div_7_Template, 2, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ReportsComponent_div_8_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ReportsComponent_div_9_Template, 24, 13, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReportsComponent_div_10_Template, 17, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ReportsComponent_div_11_Template, 4, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError && ctx.report);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError && (ctx.report == null ? null : ctx.report.topSellingProducts == null ? null : ctx.report.topSellingProducts.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError && !(ctx.report == null ? null : ctx.report.topSellingProducts == null ? null : ctx.report.topSellingProducts.length));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      styles: ["\n\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: transform 180ms ease, box-shadow 180ms ease;\n  cursor: default;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--ink);\n  margin-top: 6px;\n  font-family: var(--font-head);\n  transition: color 180ms ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover   .stat-value[_ngcontent-%COMP%] {\n  color: var(--teal);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCOztBQUVqQjtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsdURBQXVEO0VBQ3ZELGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXBvcnRzIHBhZ2UgKi9cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE4MG1zIGVhc2UsIGJveC1zaGFkb3cgMTgwbXMgZWFzZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuLnN0YXQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuLnN0YXQtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1oZWFkKTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxODBtcyBlYXNlO1xyXG59XHJcbi5zdGF0LWNhcmQ6aG92ZXIgLnN0YXQtdmFsdWUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZWFsKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9762:
/*!*****************************************************************!*\
  !*** ./src/app/features/transactions/transactions.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionsComponent: () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);








function TransactionsComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading transactions\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransactionsComponent_div_13_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 15)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r7.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("badge-teal", t_r7.type === "receipt")("badge-amber", t_r7.type === "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 9, t_r7.totalAmount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 12, t_r7.date, "short"));
  }
}
function TransactionsComponent_div_13_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No transactions yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TransactionsComponent_div_13_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.message);
  }
}
function TransactionsComponent_div_13_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionsComponent_div_13_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.load());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransactionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TransactionsComponent_div_13_tr_15_Template, 14, 15, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, TransactionsComponent_div_13_tr_16_Template, 3, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TransactionsComponent_div_13_p_17_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TransactionsComponent_div_13_button_18_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.message);
  }
}
function TransactionsComponent_div_14_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", p_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r12.name);
  }
}
function TransactionsComponent_div_14_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r11.message.includes("added"))("err", !ctx_r11.message.includes("added"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.message);
  }
}
function TransactionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionsComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionsComponent_div_14_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Record transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionsComponent_div_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 25)(8, "line", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function TransactionsComponent_div_14_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 28)(12, "label")(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransactionsComponent_div_14_Template_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.selectedProductId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Select product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TransactionsComponent_div_14_option_18_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label")(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransactionsComponent_div_14_Template_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label")(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransactionsComponent_div_14_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 34)(32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, TransactionsComponent_div_14_p_34_Template, 2, 5, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.selectedProductId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.message);
  }
}
class TransactionsComponent {
  constructor(api, stagger, cdr, toast) {
    this.api = api;
    this.stagger = stagger;
    this.cdr = cdr;
    this.toast = toast;
    this.products = [];
    this.transactions = [];
    this.selectedProductId = null;
    this.quantity = 1;
    this.type = 'payment';
    this.message = '';
    this.messageColor = 'var(--brick)';
    this.okColor = 'var(--teal)';
    this.errColor = 'var(--brick)';
    this.showModal = false;
    this.loading = false;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  load() {
    this.loading = true;
    this.message = '';
    console.log('[TX] load() start');
    this.api.getProducts().subscribe({
      next: list => {
        this.products = list;
        console.log('[TX] products loaded', list.length);
      },
      error: err => console.error('[TX] products error', err)
    });
    this.api.getTransactions().subscribe({
      next: list => {
        console.log('[TX] transactions next', list);
        this.transactions = list || [];
        console.log('[TX] transactions assigned', this.transactions.length);
        this.loading = false;
        this.cdr.markForCheck();
        this.message = '';
        console.log('[TX] loading set false');
        setTimeout(() => {
          console.log('[TX] stagger after tick', this.transactions.length, 'rows in DOM');
        }, 50);
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        console.error('[TX] transactions error', err);
        this.loading = false;
        this.transactions = [];
        const endpoint = 'GET /api/Transactions';
        const status = err?.status ?? 'ERR';
        this.message = `[${status}] ${endpoint} — ${err?.error?.message || err?.message || 'Failed to load transactions.'}`;
        this.messageColor = 'var(--brick)';
      }
    });
    setTimeout(() => {
      if (this.loading) {
        console.warn('[TX] load() timeout — still loading after 8s');
        this.loading = false;
        this.message = 'Loading timed out. Check network tab.';
      }
    }, 8000);
  }
  openModal() {
    this.showModal = true;
    this.selectedProductId = null;
    this.quantity = 1;
    this.type = 'payment';
    this.message = '';
  }
  closeModal() {
    this.showModal = false;
    this.message = '';
  }
  add() {
    this.message = '';
    if (!this.selectedProductId) return this.toast.show('Select a product.', 'error');
    const product = this.products.find(p => p.id === this.selectedProductId);
    if (!product) return this.toast.show('Selected product not found.', 'error');
    if (!this.quantity || this.quantity < 1) return this.setMessage('Quantity must be at least 1.');
    const totalAmount = product.price * this.quantity;
    this.api.createTransaction({
      productId: this.selectedProductId,
      quantity: this.quantity,
      type: this.type.toLowerCase()
    }).subscribe({
      next: () => {
        this.toast.show('Transaction added.', 'success');
        this.quantity = 1;
        this.load();
        this.closeModal();
      },
      error: err => {
        this.toast.showError(err, 'Server rejected transaction.');
      }
    });
  }
  setMessage(text, color = 'var(--brick)') {
    this.message = text;
    this.messageColor = color;
  }
  static {
    this.ɵfac = function TransactionsComponent_Factory(t) {
      return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_1__.StaggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TransactionsComponent,
      selectors: [["app-transactions"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 3,
      consts: [[1, "page", "debug-rows"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn", "btn-add", 3, "click"], [1, "panel"], [1, "panel-body"], [1, "table-wrap", "stagger-target"], ["class", "status", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "status"], ["class", "stagger-item", 4, "ngFor", "ngForOf"], ["class", "status err", 4, "ngIf"], ["class", "btn btn-outline", 3, "click", 4, "ngIf"], [1, "stagger-item"], [1, "badge"], ["colspan", "5", 1, "empty"], [1, "status", "err"], [1, "btn", "btn-outline", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-header-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "product-form", 3, "ngSubmit"], [1, "form-grid"], ["name", "selectedProductId", "required", "", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "type", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "quantity", "min", "1", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "status", 3, "ok", "err", 4, "ngIf"]],
      template: function TransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Payments and receipts.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_7_listener() {
            return ctx.openModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2795 Record transaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TransactionsComponent_p_12_Template, 2, 0, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TransactionsComponent_div_13_Template, 19, 4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TransactionsComponent_div_14_Template, 35, 6, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".transactions-page[_ngcontent-%COMP%] { padding: 24px; font-family: var(--font-body); color: var(--ink); }\n.transactions-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0 0 16px; font-size: 22px; }\n.toolbar[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }\nlabel[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: var(--muted); }\nselect[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; font-family: inherit; outline: none; }\nselect[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(31,111,99,0.18); }\n.actions[_ngcontent-%COMP%] { display: flex; gap: 10px; flex-wrap: wrap; }\n.status[_ngcontent-%COMP%] { margin-top: 10px; font-size: 13px; }\n.btn-primary[_ngcontent-%COMP%] { padding: 10px 14px; border: none; border-radius: 8px; background: var(--teal); color: var(--surface); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }\n.btn-secondary[_ngcontent-%COMP%] { padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); color: var(--muted); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }\n.table-card[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); }\n.table-wrap[_ngcontent-%COMP%] { overflow: auto; max-height: 520px; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; }\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { text-align: left; padding: 10px; border-bottom: 1px solid var(--border); }\n.debug-rows[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] { outline: 2px dashed red !important; background: rgba(255,0,0,0.05) !important; opacity: 1 !important; color: red !important; }\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: var(--sidebar); color: var(--sidebar-ink); font-weight: 700; position: sticky; top: 0; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: var(--bg); }\n.empty[_ngcontent-%COMP%] { text-align: center; color: var(--muted); padding: 18px; }\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background: var(--teal-light); cursor: pointer; }\n\n\n\ntd[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease, color 120ms ease;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--ink);\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  border-color: #d97706;\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #7f1d1d;\n  transform: translateY(-1px);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixhQUFhLEVBQUUsNkJBQTZCLEVBQUUsaUJBQWlCLEVBQUU7QUFDdEYsd0JBQXdCLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtBQUMzRCxXQUFXLDBCQUEwQixFQUFFLCtCQUErQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLHVDQUF1QyxFQUFFO0FBQzVOLFFBQVEsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7QUFDakgsZ0JBQWdCLGtCQUFrQixFQUFFLCtCQUErQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUU7QUFDL0ksNEJBQTRCLHlCQUF5QixFQUFFLDBDQUEwQyxFQUFFO0FBQ25HLFdBQVcsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7QUFDdEQsVUFBVSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDN0MsZUFBZSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRTtBQUMvTCxpQkFBaUIsa0JBQWtCLEVBQUUsK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRTtBQUNyTixjQUFjLDBCQUEwQixFQUFFLCtCQUErQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSx1Q0FBdUMsRUFBRTtBQUN4SixjQUFjLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtBQUNqRCxRQUFRLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUU7QUFDakUsU0FBUyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsc0NBQXNDLEVBQUU7QUFDbEYsbUNBQW1DLGtDQUFrQyxFQUFFLHlDQUF5QyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFO0FBQ2hLLFdBQVcsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO0FBQzlHLGlCQUFpQixxQkFBcUIsRUFBRTtBQUN4QyxTQUFTLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRTs7QUFFakUsaUJBQWlCLDZCQUE2QixFQUFFLGVBQWUsRUFBRTs7QUFFakUseUJBQXlCO0FBQ3pCO0VBQ0Usb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5SEFBeUg7QUFDM0g7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9ucy1wYWdlIHsgcGFkZGluZzogMjRweDsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYm9keSk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XHJcbi50cmFuc2FjdGlvbnMtcGFnZSBoMSB7IG1hcmdpbjogMCAwIDE2cHg7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG4udG9vbGJhciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA0KTsgfVxyXG5sYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cclxuc2VsZWN0LCBpbnB1dCB7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBvdXRsaW5lOiBub25lOyB9XHJcbnNlbGVjdDpmb2N1cywgaW5wdXQ6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLXRlYWwpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwxMTEsOTksMC4xOCk7IH1cclxuLmFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4uc3RhdHVzIHsgbWFyZ2luLXRvcDogMTBweDsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5idG4tcHJpbWFyeSB7IHBhZGRpbmc6IDEwcHggMTRweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6IHZhcigtLXRlYWwpOyBjb2xvcjogdmFyKC0tc3VyZmFjZSk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogaW5oZXJpdDsgfVxyXG4uYnRuLXNlY29uZGFyeSB7IHBhZGRpbmc6IDEwcHggMTRweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XHJcbi50YWJsZS1jYXJkIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDE2cHg7IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA0KTsgfVxyXG4udGFibGUtd3JhcCB7IG92ZXJmbG93OiBhdXRvOyBtYXgtaGVpZ2h0OiA1MjBweDsgfVxyXG50YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBmb250LXNpemU6IDEzcHg7IH1cclxudGgsIHRkIHsgdGV4dC1hbGlnbjogbGVmdDsgcGFkZGluZzogMTBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cclxuLmRlYnVnLXJvd3MgLnRhYmxlLXdyYXAgdGJvZHkgdHIgeyBvdXRsaW5lOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4wNSkgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7IH1cclxudGhlYWQgdGggeyBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyKTsgY29sb3I6IHZhcigtLXNpZGViYXItaW5rKTsgZm9udC13ZWlnaHQ6IDcwMDsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwOyB9XHJcbnRib2R5IHRyOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyB9XHJcbi5lbXB0eSB7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHZhcigtLW11dGVkKTsgcGFkZGluZzogMThweDsgfVxyXG5cclxudGJvZHkgdHI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10ZWFsLWxpZ2h0KTsgY3Vyc29yOiBwb2ludGVyOyB9XHJcblxyXG4vKiBUYWJsZSBhY3Rpb24gYnV0dG9ucyAqL1xyXG50ZCAuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG50ZCAuYnRuLWdob3N0LFxyXG50ZCAuYnRuLWVkaXQsXHJcbnRkIC5idG4tZGVsZXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgYm94LXNoYWRvdyAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2UsIGJvcmRlci1jb2xvciAxMjBtcyBlYXNlLCBjb2xvciAxMjBtcyBlYXNlO1xyXG59XHJcbnRkIC5idG4tZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxufVxyXG50ZCAuYnRuLWdob3N0OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWluayk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbnRkIC5idG4tZWRpdCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmJlYjtcclxuICBjb2xvcjogIzkyNDAwZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjU5ZTBiO1xyXG59XHJcbnRkIC5idG4tZWRpdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICBib3JkZXItY29sb3I6ICNkOTc3MDY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbnRkIC5idG4tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG4gIGNvbG9yOiAjOTkxYjFiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XHJcbn1cclxudGQgLmJ0bi1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xyXG4gIGNvbG9yOiAjN2YxZDFkO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2726:
/*!***************************************************!*\
  !*** ./src/app/features/users/users.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 6344);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);
/* harmony import */ var _core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/stagger.service */ 5343);








function UsersComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.addNew());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2795 Add user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_13_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r12.roles[0]);
  }
}
function UsersComponent_div_13_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_13_tr_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 31);
  }
}
function UsersComponent_div_13_tr_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.keyStatus(u_r12).meta);
  }
}
function UsersComponent_div_13_tr_16_div_18_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_13_tr_16_div_18_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.editKeyExpiry(u_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_13_tr_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UsersComponent_div_13_tr_16_div_18_button_4_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 2, u_r12.apiKey == null ? null : u_r12.apiKey.expiresAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.isSuperAdmin);
  }
}
function UsersComponent_div_13_tr_16_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Requests using this key are rejected until it is renewed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_13_tr_16_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_13_tr_16_button_21_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.openProvision(u_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Provision");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_13_tr_16_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_13_tr_16_button_22_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.remove(u_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_13_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_13_tr_16_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const u_r12 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.isSuperAdmin && ctx_r34.edit(u_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UsersComponent_div_13_tr_16_span_7_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UsersComponent_div_13_tr_16_span_8_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UsersComponent_div_13_tr_16_span_9_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "div", 22)(14, "div", 23)(15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UsersComponent_div_13_tr_16_div_17_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UsersComponent_div_13_tr_16_div_18_Template, 5, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UsersComponent_div_13_tr_16_div_19_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UsersComponent_div_13_tr_16_button_21_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, UsersComponent_div_13_tr_16_button_22_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r12.fullName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r12.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", u_r12.roles == null ? null : u_r12.roles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(u_r12.roles == null ? null : u_r12.roles.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.isSecured(u_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](u_r12.phoneNumber || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("badge-ok", ctx_r10.keyStatus(u_r12).class === "ok")("badge-warn", ctx_r10.keyStatus(u_r12).class === "warn")("badge-danger", ctx_r10.keyStatus(u_r12).class === "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.keyStatus(u_r12).text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.keyStatus(u_r12).meta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", u_r12.apiKey == null ? null : u_r12.apiKey.expiresAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.keyStatus(u_r12).class === "danger" && ctx_r10.keyStatus(u_r12).text === "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.isSuperAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.isSuperAdmin);
  }
}
function UsersComponent_div_13_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No managed users found. Use Settings to manage your own password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "API key");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UsersComponent_div_13_tr_16_Template, 23, 18, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UsersComponent_div_13_tr_17_Template, 3, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.managedUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.managedUsers.length === 0);
  }
}
function UsersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading users...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.loadError);
  }
}
function UsersComponent_div_16_label_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_label_40_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r36.password);
  }
}
function UsersComponent_div_16_label_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 68)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "API key expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_label_41_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.apiKeyExpiry = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r37.apiKeyExpiry);
  }
}
function UsersComponent_div_16_p_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r38.messageColor === ctx_r38.okColor)("err", ctx_r38.messageColor === ctx_r38.errColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r38.message);
  }
}
function UsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_16_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 43)(3, "span", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 47)(7, "circle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "line", 51)(12, "line", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "form", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UsersComponent_div_16_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 54)(16, "label")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r48.fullName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label")(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.phoneNumber = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label")(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_16_Template_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.selectedRole = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Select role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, UsersComponent_div_16_label_40_Template, 4, 1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, UsersComponent_div_16_label_41_Template, 4, 1, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 64)(43, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, UsersComponent_div_16_p_45_Template, 2, 5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.editing ? "Edit user" : "New user", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.email)("readonly", !!ctx_r4.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.selectedRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.adding);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.adding);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.editing ? "Update" : "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.message);
  }
}
function UsersComponent_div_17_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r52.messageColor === ctx_r52.okColor)("err", ctx_r52.messageColor === ctx_r52.errColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r52.message);
  }
}
function UsersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.closeProvision());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 43)(3, "span", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 47)(7, "circle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.closeProvision());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "line", 51)(12, "line", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "form", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UsersComponent_div_17_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r57.saveProvision());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 54)(16, "label", 68)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Expiry datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_17_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.provisionExpiry = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 64)(21, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, UsersComponent_div_17_p_23_Template, 2, 5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.provisionTitle(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.provisionExpiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.message);
  }
}
function UsersComponent_div_18_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r59.messageColor === ctx_r59.okColor)("err", ctx_r59.messageColor === ctx_r59.errColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r59.message);
  }
}
function UsersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.showSettingsModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_18_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 43)(3, "span", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 47)(7, "circle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_18_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r63.showSettingsModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "line", 51)(12, "line", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "form", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UsersComponent_div_18_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r64.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 54)(16, "label", 68)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Current password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_18_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r65.currentPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 68)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_18_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r66.newPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 68)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Confirm new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_18_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r67.confirmPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 64)(29, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, UsersComponent_div_18_p_31_Template, 2, 5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.currentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.message);
  }
}
function UsersComponent_div_19_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ok", ctx_r68.messageColor === ctx_r68.okColor)("err", ctx_r68.messageColor === ctx_r68.errColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r68.message);
  }
}
function UsersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r69.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 43)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Delete user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r72.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 51)(8, "line", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 76)(11, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 79)(14, "path", 80)(15, "path", 81)(16, "line", 82)(17, "line", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "? This cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 64)(24, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r73.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, UsersComponent_div_19_p_26_Template, 2, 5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.deleteTargetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.message);
  }
}
class UsersComponent {
  constructor(api, cdr, toast, stagger) {
    this.api = api;
    this.cdr = cdr;
    this.toast = toast;
    this.stagger = stagger;
    this.users = [];
    this.editing = null;
    this.adding = false;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.selectedRole = null;
    this.password = '';
    this.apiKeyExpiry = '';
    this.message = '';
    this.messageColor = 'var(--brick)';
    this.okColor = 'var(--teal)';
    this.errColor = 'var(--brick)';
    this.showModal = false;
    this.provisioningUser = null;
    this.provisionExpiry = '';
    this.showProvisionModal = false;
    this.loading = false;
    this.loadError = '';
    this.isSuperAdmin = false;
    this.showSettingsModal = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
    this.originalPayload = null;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    this.stagger.animate('tbody tr.stagger-item');
  }
  isDirty(current, original) {
    if (!original) return true;
    return Object.keys(current).some(key => current[key] !== original[key]);
  }
  canAddUser() {
    return this.isSuperAdmin;
  }
  canManage(u) {
    if (u.email === 'MarioMedhat899@gmail.com') return false;
    return true;
  }
  isSecured(u) {
    return u.email === 'MarioMedhat899@gmail.com';
  }
  isAdmin(u) {
    return Array.isArray(u.roles) && u.roles.includes('Admin');
  }
  get managedUsers() {
    return this.users.filter(u => !this.isSecured(u));
  }
  provisionTitle() {
    const email = this.provisioningUser?.email;
    return email ? 'Edit expiry: ' + email : 'Provision API key';
  }
  load() {
    this.loading = true;
    this.loadError = '';
    this.api.getUsers().subscribe({
      next: res => {
        const items = res ?? [];
        this.isSuperAdmin = items.some(u => u.email === 'MarioMedhat899@gmail.com' && Array.isArray(u.roles) && u.roles.includes('Admin'));
        this.users = items.map(u => ({
          id: String(u.id ?? u.userId ?? ''),
          email: u.email ?? '',
          fullName: u.fullName ?? '',
          phoneNumber: u.phoneNumber ?? '',
          roles: Array.isArray(u.roles) ? u.roles : u.role ? [u.role] : [],
          apiKey: u.apiKey ? {
            isActive: u.apiKey.isActive ?? false,
            expiresAt: u.apiKey.expiresAt ?? u.apiKey.expiration ?? null
          } : null
        }));
        this.loading = false;
        this.cdr.markForCheck();
        this.stagger.animate('tbody tr.stagger-item');
      },
      error: err => {
        this.loading = false;
        this.loadError = err?.error?.message || 'Failed to load users.';
        this.users = [];
        this.cdr.markForCheck();
      }
    });
  }
  addNew() {
    this.showModal = true;
    this.adding = true;
    this.editing = null;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.selectedRole = null;
    this.password = '';
    this.apiKeyExpiry = '';
    this.message = '';
    this.originalPayload = null;
  }
  edit(u) {
    this.showModal = true;
    this.adding = false;
    this.editing = u;
    this.fullName = u.fullName ?? '';
    this.email = u.email;
    this.phoneNumber = u.phoneNumber ?? '';
    this.selectedRole = u.roles?.[0] ?? null;
    this.password = '';
    this.message = '';
    this.originalPayload = {
      fullName: u.fullName ?? '',
      email: u.email,
      phoneNumber: u.phoneNumber ?? '',
      role: u.roles?.[0] ?? null,
      apiKeyExpiry: u.apiKey?.expiresAt ?? null
    };
  }
  closeModal() {
    this.showModal = false;
    this.adding = false;
    this.editing = null;
    this.fullName = '';
    this.email = '';
    this.phoneNumber = '';
    this.selectedRole = null;
    this.password = '';
    this.apiKeyExpiry = '';
    this.message = '';
  }
  openProvision(u) {
    this.provisioningUser = u;
    this.provisionExpiry = u.apiKey?.expiresAt ? new Date(u.apiKey.expiresAt).toISOString().slice(0, 16) : '';
    this.message = '';
    this.showProvisionModal = true;
  }
  closeProvision() {
    this.showProvisionModal = false;
    this.provisioningUser = null;
    this.provisionExpiry = '';
    this.message = '';
  }
  save() {
    this.message = '';
    const trimmedEmail = this.email.trim();
    const trimmedFullName = this.fullName.trim();
    if (!trimmedFullName) return this.setMessage('Full name is required.', this.errColor);
    if (!trimmedEmail) return this.setMessage('Email is required.', this.errColor);
    if (!this.selectedRole) return this.setMessage('Select a role.', this.errColor);
    const payload = {
      fullName: trimmedFullName,
      email: trimmedEmail,
      phoneNumber: this.phoneNumber.trim(),
      role: this.selectedRole,
      shareTenantWithUserId: undefined,
      isStandalone: false,
      apiKeyExpiry: this.apiKeyExpiry ? new Date(this.apiKeyExpiry).toISOString() : null,
      ...(this.adding ? {
        password: this.password || undefined
      } : {})
    };
    if (this.adding) {
      this.api.createUser(payload).subscribe({
        next: created => {
          this.toast.show('User created.', 'success');
          const createdId = created?.id ?? created?.userId;
          if (createdId && this.apiKeyExpiry) {
            this.api.provisionUser(String(createdId), {
              expiresAtUtc: new Date(this.apiKeyExpiry).toISOString()
            }).subscribe({
              next: () => {
                this.closeModal();
                this.load();
              },
              error: err => {
                this.toast.showError(err, 'User created, but key provisioning failed.');
                this.closeModal();
                this.load();
              }
            });
          } else {
            this.closeModal();
            this.load();
          }
        },
        error: err => this.toast.showError(err, 'Create failed.')
      });
    } else if (this.editing) {
      if (!this.isDirty(payload, this.originalPayload)) {
        this.setMessage('No changes detected.', this.errColor);
        return;
      }
      this.api.updateUser(this.editing.id, payload).subscribe({
        next: () => {
          this.toast.show('User updated.', 'success');
          this.closeModal();
          this.cdr.markForCheck();
          setTimeout(() => this.load(), 60);
        },
        error: err => this.toast.showError(err, 'Update failed.')
      });
    }
  }
  saveProvision() {
    this.message = '';
    if (!this.provisioningUser) return;
    const trimmed = this.provisionExpiry.trim();
    if (!trimmed) return this.setMessage('Expiry datetime is required.', this.errColor);
    this.api.provisionUser(this.provisioningUser.id, {
      expiresAtUtc: new Date(trimmed).toISOString()
    }).subscribe({
      next: () => {
        this.toast.show('API key saved.', 'success');
        this.closeProvision();
        this.load();
      },
      error: err => this.toast.showError(err, 'Save failed.')
    });
  }
  editKeyExpiry(u) {
    this.provisioningUser = u;
    this.provisionExpiry = u.apiKey?.expiresAt ? new Date(u.apiKey.expiresAt).toISOString().slice(0, 16) : '';
    this.message = '';
    this.showProvisionModal = true;
  }
  remove(id) {
    const user = this.users.find(u => u.id === id);
    this.deleteTargetId = id;
    this.deleteTargetName = user?.fullName || user?.email || 'this user';
    this.showDeleteModal = true;
  }
  closeDelete() {
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
  }
  confirmDelete() {
    if (!this.deleteTargetId) return;
    const id = this.deleteTargetId;
    this.closeDelete();
    this.api.deleteUser(id).subscribe({
      next: () => {
        this.toast.show('User deleted.', 'success');
        this.load();
      },
      error: err => this.toast.showError(err, 'Delete failed.')
    });
  }
  openSettings() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.message = '';
    this.showSettingsModal = true;
  }
  saveSettings() {
    this.message = '';
    if (!this.newPassword || this.newPassword.length < 8) return this.setMessage('New password must be at least 8 characters.', this.errColor);
    if (this.newPassword !== this.confirmPassword) return this.setMessage('Passwords do not match.', this.errColor);
    if (!this.currentPassword) return this.setMessage('Current password is required.', this.errColor);
    this.api.changePassword({
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    }).subscribe({
      next: () => {
        this.toast.show('Password changed.', 'success');
        this.showSettingsModal = false;
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
      },
      error: err => {
        this.toast.showError(err, 'Password change failed.');
      }
    });
  }
  keyStatus(u) {
    const key = u.apiKey;
    if (!key || !key.isActive) return {
      text: 'No active key',
      class: 'danger',
      meta: null
    };
    const expiresAt = key.expiresAt ? new Date(key.expiresAt) : null;
    if (!expiresAt) return {
      text: 'Active',
      class: 'ok',
      meta: 'No expiry'
    };
    const now = new Date();
    const diffMs = expiresAt.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (diffMs <= 0) return {
      text: 'Expired',
      class: 'danger',
      meta: `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`
    };
    if (diffDays <= 7) return {
      text: 'Expiring soon',
      class: 'warn',
      meta: `Expires in ${diffDays} day${diffDays === 1 ? '' : 's'}`
    };
    return {
      text: 'Active',
      class: 'ok',
      meta: `Expires in ${diffDays} days`
    };
  }
  keyExpiryText(u) {
    const expiresAt = u.apiKey?.expiresAt;
    if (!expiresAt) return null;
    return new Date(expiresAt).toLocaleString();
  }
  openProvisionForNewUser(email) {
    this.provisioningUser = {
      id: '',
      email,
      fullName: email,
      roles: []
    };
    this.provisionExpiry = this.apiKeyExpiry ? new Date(this.apiKeyExpiry).toISOString().slice(0, 16) : '';
    this.showProvisionModal = true;
  }
  setMessage(text, color = this.errColor) {
    this.message = text;
    this.messageColor = color;
  }
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_stagger_service__WEBPACK_IMPORTED_MODULE_2__.StaggerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 8,
      consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [2, "display", "flex", "align-items", "center", "gap", "12px"], ["class", "btn btn-add", 3, "click", 4, "ngIf"], [1, "btn", "btn-ghost", "edit", 3, "click"], [1, "panel"], [1, "panel-body"], ["class", "table-wrap stagger-target", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "empty-state error", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "btn", "btn-add", 3, "click"], [1, "table-wrap", "stagger-target"], ["class", "clickable stagger-item", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "clickable", "stagger-item", 3, "click"], [1, "role-group"], ["class", "badge badge-teal", 4, "ngIf"], ["class", "badge", 4, "ngIf"], ["class", "badge badge-secured", 4, "ngIf"], [1, "api-key-cell"], [1, "api-key-row"], [1, "badge"], ["class", "api-key-meta", 4, "ngIf"], ["class", "expired-note", 4, "ngIf"], [1, "actions"], ["class", "btn btn-ghost", 3, "click", 4, "ngIf"], ["class", "btn btn-delete", 3, "click", 4, "ngIf"], [1, "badge", "badge-teal"], [1, "badge", "badge-secured"], [1, "api-key-meta"], [1, "muted"], ["class", "btn btn-ghost edit", 3, "click", 4, "ngIf"], [1, "expired-note"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-delete", 3, "click"], ["colspan", "6", 1, "empty"], [1, "empty-state"], [1, "empty-state", "error"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-header-title"], ["aria-hidden", "true", 1, "modal-header-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["type", "button", "aria-label", "Close", 1, "modal-header-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "product-form", 3, "ngSubmit"], [1, "form-grid"], ["name", "fullName", "placeholder", "Full name", "required", "", 3, "ngModel", "ngModelChange"], ["name", "email", "placeholder", "user@example.com", "required", "", 3, "ngModel", "readonly", "ngModelChange"], ["name", "phoneNumber", "placeholder", "Phone number", 3, "ngModel", "ngModelChange"], ["name", "selectedRole", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["value", "Admin"], ["value", "Manager"], ["value", "Staff"], ["class", "full", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "status", 3, "ok", "err", 4, "ngIf"], ["name", "password", "type", "text", "placeholder", "Leave blank for random", 3, "ngModel", "ngModelChange"], [1, "full"], ["type", "datetime-local", "name", "apiKeyExpiry", "placeholder", "Optional", 3, "ngModel", "ngModelChange"], [1, "status"], ["type", "datetime-local", "name", "provisionExpiry", "required", "", 3, "ngModel", "ngModelChange"], ["name", "currentPassword", "type", "password", "placeholder", "Current password", "required", "", 3, "ngModel", "ngModelChange"], ["name", "newPassword", "type", "password", "placeholder", "New password", "required", "", "minlength", "8", 3, "ngModel", "ngModelChange"], ["name", "confirmPassword", "type", "password", "placeholder", "Confirm new password", "required", "", 3, "ngModel", "ngModelChange"], [1, "modal-card", "modal-card--danger", 3, "click"], [1, "confirm-body"], [1, "confirm-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "confirm-text"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Access and role management.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UsersComponent_button_8_Template, 2, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_9_listener() {
            return ctx.openSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, UsersComponent_div_13_Template, 18, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UsersComponent_div_14_Template, 2, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UsersComponent_div_15_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UsersComponent_div_16_Template, 46, 11, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UsersComponent_div_17_Template, 24, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UsersComponent_div_18_Template, 32, 4, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UsersComponent_div_19_Template, 27, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canAddUser());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showProvisionModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSettingsModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".users-page[_ngcontent-%COMP%] { padding: 24px; font-family: var(--font-body); color: var(--ink); }\n.users-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0 0 16px; font-size: 22px; }\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--muted);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(31,111,99,0.18);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n.status[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13px;\n}\n.expired-note[_ngcontent-%COMP%] {\n  color: var(--brick);\n  font-size: 12px;\n  margin-top: 6px;\n}\n.expired-note[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--brick);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 520px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  table-layout: auto;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--sidebar);\n  color: var(--sidebar-ink);\n  font-weight: 700;\n  position: sticky;\n  top: 0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--teal-light);\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--muted);\n  padding: 18px;\n}\n\n\n\ntd[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: nowrap;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease, border-color 120ms ease, color 120ms ease;\n  white-space: nowrap;\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--muted);\n  border: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--ink);\n  border-color: var(--ink);\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n}\ntd[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  border-color: #d97706;\n  transform: translateY(-1px);\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\ntd[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #7f1d1d;\n  transform: translateY(-1px);\n}\n.page-header[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: #052e16;\n  color: #fff;\n  border: 1px solid #15803d;\n  box-shadow: 0 2px 0 #14532d, 0 6px 18px rgba(5,46,22,0.25);\n}\n.page-header[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background: #064e3b;\n  border-color: #16a34a;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 0 #14532d, 0 10px 22px rgba(5,46,22,0.35);\n}\n.api-key-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 180px;\n}\n.api-key-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.api-key-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.api-key-meta[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n}\n.badge-secured[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n  white-space: nowrap;\n}\n.badge-warn[_ngcontent-%COMP%] {\n  background: var(--amber-bg);\n  color: var(--amber);\n}\n.expired-note[_ngcontent-%COMP%] {\n  color: var(--brick);\n  font-size: 12px;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.expired-note[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: var(--brick);\n}\n\n\n\n.role-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGFBQWEsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsRUFBRTtBQUMvRSxpQkFBaUIsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFOztBQUVwRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTs7OztFQUlFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5SEFBeUg7RUFDekgsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMERBQTBEO0FBQzVEO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwyREFBMkQ7QUFDN0Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLXBhZ2UgeyBwYWRkaW5nOiAyNHB4OyBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTsgY29sb3I6IHZhcigtLWluayk7IH1cclxuLnVzZXJzLXBhZ2UgaDEgeyBtYXJnaW46IDAgMCAxNnB4OyBmb250LXNpemU6IDIycHg7IH1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG59XHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXRlYWwpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLDExMSw5OSwwLjE4KTtcclxufVxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnN0YXR1cyB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmV4cGlyZWQtbm90ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJyaWNrKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5leHBpcmVkLW5vdGUgLm11dGVkIHtcclxuICBjb2xvcjogdmFyKC0tYnJpY2spO1xyXG59XHJcbi50YWJsZS13cmFwIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MjBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50aGVhZCB0aCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhcik7XHJcbiAgY29sb3I6IHZhcigtLXNpZGViYXItaW5rKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxudGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlYWwtbGlnaHQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50Ym9keSB0ci5jbGlja2FibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50Ym9keSB0ci5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVhbC1saWdodCk7XHJcbn1cclxuLmVtcHR5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcblxyXG4vKiBUYWJsZSBhY3Rpb24gYnV0dG9ucyAqL1xyXG50ZCAuYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG50ZCAuYnRuLWdob3N0LFxyXG50ZCAuYnRuLWVkaXQsXHJcbnRkIC5idG4tZGVsZXRlLFxyXG4ucGFnZS1oZWFkZXIgLmJ0bi1hZGQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgYm94LXNoYWRvdyAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2UsIGJvcmRlci1jb2xvciAxMjBtcyBlYXNlLCBjb2xvciAxMjBtcyBlYXNlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxudGQgLmJ0bi1naG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcbnRkIC5idG4tZ2hvc3Q6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5rKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmYmViO1xyXG4gIGNvbG9yOiAjOTI0MDBlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNTllMGI7XHJcbn1cclxudGQgLmJ0bi1lZGl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gIGJvcmRlci1jb2xvcjogI2Q5NzcwNjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxudGQgLmJ0bi1kZWxldGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZWYyZjI7XHJcbiAgY29sb3I6ICM5OTFiMWI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcclxufVxyXG50ZCAuYnRuLWRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiAgY29sb3I6ICM3ZjFkMWQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcbi5wYWdlLWhlYWRlciAuYnRuLWFkZCB7XHJcbiAgYmFja2dyb3VuZDogIzA1MmUxNjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTU4MDNkO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgIzE0NTMyZCwgMCA2cHggMThweCByZ2JhKDUsNDYsMjIsMC4yNSk7XHJcbn1cclxuLnBhZ2UtaGVhZGVyIC5idG4tYWRkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDY0ZTNiO1xyXG4gIGJvcmRlci1jb2xvcjogIzE2YTM0YTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMCAjMTQ1MzJkLCAwIDEwcHggMjJweCByZ2JhKDUsNDYsMjIsMC4zNSk7XHJcbn1cclxuLmFwaS1rZXktY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbn1cclxuLmFwaS1rZXktcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5hcGkta2V5LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG4uYXBpLWtleS1tZXRhIC5tdXRlZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbn1cclxuLmJhZGdlLXNlY3VyZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZWYzYzc7XHJcbiAgY29sb3I6ICM5MjQwMGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1OWUwYjtcclxuICBwYWRkaW5nOiAycHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uYmFkZ2Utd2FybiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXItYmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hbWJlcik7XHJcbn1cclxuLmV4cGlyZWQtbm90ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJyaWNrKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuLmV4cGlyZWQtbm90ZSAubXV0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1icmljayk7XHJcbn1cclxuXHJcbi8qIFJvbGUgKyBzZWN1cmVkIGlubGluZSBncm91cGluZyAqL1xyXG4ucm9sZS1ncm91cCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map