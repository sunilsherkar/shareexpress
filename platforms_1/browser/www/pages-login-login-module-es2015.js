(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar  >\n        <ion-buttons slot=\"start\" class=\"btnBack\">\n            <ion-button  >\n                <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> \n   <div class=\"card\">\n  <div class=\"header\">\n    <div class=\"avatar\" style=\"margin-left: 26%; margin-top: 40px;\">\n      <img src=\"../../assets/avatar.png\" alt=\"\">\n    </div>\n  </div>\n  <div style=\"margin-left: 26%; \"> Share Express</div>\n   <div style=\"margin-left: 30%; \"><small> Made in India</small></div>\n</div>\n <div>\n </div>\n  </ion-title>\n    </ion-toolbar> \n</ion-header>\n  <ion-content> \n<ion-grid>\n  <ion-row>\n   <ion-col>\n <ion-list style=\"padding-top:20px;\">\n            <ion-item *ngIf=\"ErrorMessage\">\n                <label  style=\"padding-left: 20px;color:red;\">{{ErrorMessage}}</label>   \n            </ion-item>\n            <ion-item  [class]=\"NewUserClass\"> \n               <ion-icon name=\"person\"></ion-icon> \n                <ion-input type=\"string\" step=\"any\"  [(ngModel)]=\"Name\"   placeHolder=\"Name\"></ion-input>\n            </ion-item> \n            <ion-item> \n              <ion-icon name=\"call-sharp\"></ion-icon>\n                <ion-input type=\"string\" step=\"any\"  [(ngModel)]=\"Mobile\"   placeHolder=\"Mobile\"></ion-input> \n            </ion-item>\n              \n             <ion-item> \n            <ion-icon name=\"key\"></ion-icon>\n                <ion-input type=\"string\" step=\"any\"  [(ngModel)]=\"Password\"  type=\"password\" placeHolder=\"Password\"></ion-input>\n            </ion-item>\n        </ion-list>\n     <ion-button shape=\"round\" expand=\"full\"   color=\"success\" [class]=\"ExistingUserClass\"\n      (click)=\"LoginExist()\">Login</ion-button> \n      <ion-button shape=\"round\" expand=\"full\"   color=\"success\"  [class]=\"NewUserClass\" (click)=\"CreateUser()\">Regster</ion-button> \n   </ion-col>\n  </ion-row>\n    <ion-row>\n\n      <ion-col align-self-center>\n        \n\n        <span class=\"divider line one-line\" >or</span>\n\n        <a   (click)=\"NewUser()\" [class]=\"ExistingUserClass\"  >New user?</a>\n        <a  (click)=\"SignIn()\" [class]=\"NewUserClass\" > Sign In</a>\n        \n  \n      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    \n    </ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.native-input.sc-ion-input-md {\n  padding-left: 20px !important;\n}\n\nion-input {\n  padding-left: 20px !important;\n}\n\nion-icon {\n  color: lightgray;\n}\n\nion-labelHeader {\n  padding-left: 20px !important;\n  font-size: 15px !important;\n  font-weight: 200 !important;\n  color: darkgray;\n}\n\nion-toolbar {\n  height: 257px !important;\n  --background: #125454;\n  color: white;\n}\n\n.btnBack {\n  margin-top: -37px !important;\n}\n\n.btnok {\n  margin-top: 98px !important;\n}\n\n.fabbtn {\n  margin-top: 78px;\n  background-color: transparent;\n}\n\n.button-native {\n  background-color: white !important;\n}\n\nion-title {\n  padding-top: 20px;\n  font-size: 15px;\n}\n\n.headerInput {\n  font-size: 24px;\n  padding-top: 8px !important;\n  padding-left: 11px !important;\n}\n\nion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.button-native {\n  background: green;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 100px;\n}\n\n.card .header .avatar {\n  width: 90px;\n  height: 13px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  background-color: transparent;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.Show {\n  display: block;\n}\n\n.Hide {\n  display: none;\n}\n\n.divider {\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\na {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n  color: #125454;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXElvbmljIFByb2plY3RcXFNoYXJlRXhwcmVzc1xcU2hhcmVFeHByZXNzL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0FDQUo7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLDRCQUFBO0FDRko7O0FES0E7RUFDSSwyQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0NBQUE7QUNGSjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUNMSjs7QURhQztFQUVHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYSjs7QURjQztFQUVHLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxjQUFBO0FDWko7O0FEY0k7RUFDSSxhQUFBO0FDWlI7O0FEY1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1paOztBRGNZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLDZCQUFBO0FDYmhCOztBRGtCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURpQkk7RUFDSSxpQkFBQTtBQ2ZSOztBRGlCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNmWjs7QURrQlE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2hCWjs7QURvQkM7RUFDRyxjQUFBO0FDakJKOztBRG1CQTtFQUNJLGFBQUE7QUNoQko7O0FEc0JBO0VBQ0ksYUFBQTtBQ25CSjs7QURxQkk7RUFFRSxXQUFBO0VBQ0EsT0FBQTtBQ3BCTjs7QUR3QkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3JCSjs7QUR1Qkk7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ3RCTjs7QUQyQkk7RUFFRyxtQkFBQTtBQ3pCUDs7QUQ2QkE7O0VBRUksWUFBQTtFQUNBLHVCQUFBO0FDMUJKOztBRDZCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuaW9uLWxhYmVsSGVhZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGhlaWdodDogMjU3cHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogIzEyNTQ1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bkJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogLTM3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bm9rIHtcclxuICAgIG1hcmdpbi10b3A6IDk4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhYmJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA3OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tbmF0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiBcclxuaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4gXHJcblxyXG4uaGVhZGVySW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiBpb24tY29udGVudCB7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gXHJcbiAuYnV0dG9uLW5hdGl2ZVxyXG4ge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiB9XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAudXNlci1tZXRhIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcbiAgICAgICAgLnBsYXllcm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gLlNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5saW5lIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAtMWVtO1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICBcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBtYXJnaW46IDAgMWVtO1xyXG4gICAgfVxyXG59IFxyXG5cclxuLm9uZS1saW5lIHtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxyXG4uYXV0aC1mb3JtIGlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICMxMjU0NTQ7XHJcbn1cclxuXHJcbiBcclxuICIsImlucHV0Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW9uLWxhYmVsSGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDI1N3B4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzEyNTQ1NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuQmFjayB7XG4gIG1hcmdpbi10b3A6IC0zN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5vayB7XG4gIG1hcmdpbi10b3A6IDk4cHggIWltcG9ydGFudDtcbn1cblxuLmZhYmJ0biB7XG4gIG1hcmdpbi10b3A6IDc4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5oZWFkZXJJbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDExcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uU2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uSGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXZpZGVyOmJlZm9yZSwgLmRpdmlkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxO1xufVxuXG4ubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtIC0xZW07XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuLmxpbmU6YmVmb3JlLCAubGluZTphZnRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDAgMWVtO1xufVxuXG4ub25lLWxpbmU6YmVmb3JlLCAub25lLWxpbmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG4uYXV0aC1mb3JtIGlvbi1ncmlkLFxuLmF1dGgtZm9ybSBpb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzEyNTQ1NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/pages/service/authentication.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");










let LoginPage = class LoginPage {
    constructor(router, api, afs, database, storage, httpClient, http, loadingController) {
        this.router = router;
        this.api = api;
        this.afs = afs;
        this.database = database;
        this.storage = storage;
        this.httpClient = httpClient;
        this.http = http;
        this.loadingController = loadingController;
        this.ErrorMessage = "";
        this.NewUserClass = 'Hide';
        this.ExistingUserClass = 'Show';
        this.userlist = [];
        this.isaccountExist = 0;
        this.Token = 'UserID';
    }
    ngOnInit() {
        //this.getmobile();
    }
    ionViewWillEnter() {
        this.storage.get(this.Token).then(res => {
            if (!res) {
                //this.route.navigateByUrl('login');
            }
            else {
                this.api.isLogout.next(false);
                this.api.UserID = res;
                this.router.navigateByUrl('dashboard');
            }
        });
    }
    LoginExist() {
        this.loadingpopup();
        this.ErrorMessage = "";
        if (this.Password != "" && this.Password != undefined && this.Mobile != "" && this.Mobile != undefined) {
            let data = 'MobileNo=' + this.Mobile + '&Password=' + this.Password;
            let url = this.api.baseUrl + "Login/GetUserLogin?" + data;
            this.films = this.httpClient.get(url);
            this.films
                .subscribe(data => {
                this.loginData = data;
                if (data != null) {
                    this.api.UserID = data["UserID"];
                    this.storage.set('UserID', data["UserID"]);
                    this.storage.set('fullName', data["Name"]).then(() => {
                        this.api.authenticationState.next(true);
                        this.closePopup();
                        this.router.navigate(['dashboard']);
                        return true;
                    });
                }
                else {
                    this.ErrorMessage = "Invalid Login";
                    this.closePopup();
                }
            });
        }
        else {
            this.ErrorMessage = "Please enter info";
            this.closePopup();
        }
    }
    CreateUser() {
        this.loadingpopup();
        if (this.Name != "" && this.Password != "" && this.Mobile != "" && this.Mobile != undefined && this.Password != undefined && this.Name != undefined) {
            let param = {
                "UserID": 0,
                "Name": this.Name,
                "MobileNo": this.Mobile,
                "Password": this.Password,
                "Gender": 0,
                "IsActive": true
            };
            let url = this.api.baseUrl + "Login/PostCreateLogin";
            this.http.post(url, param, {})
                .then(data => {
                this.loginData = data;
                if (data != null) {
                    this.api.UserID = data["UserID"];
                    this.storage.set('UserID', data["UserID"]);
                    this.storage.set('fullName', data["Name"]).then(() => {
                        this.api.authenticationState.next(true);
                        this.closePopup();
                        this.router.navigate(['dashboard']);
                        return true;
                    });
                }
                console.log(data.status);
            })
                .catch(error => {
                this.closePopup();
                alert(error.error);
                alert(error);
            });
        }
        else {
            this.ErrorMessage = "Enter info";
            this.closePopup();
        }
    }
    RedirectMain() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['dashboard']);
        });
    }
    NewUser() {
        this.ErrorMessage = "";
        this.ExistingUserClass = "Hide";
        this.NewUserClass = "Show";
    }
    SignIn() {
        this.ErrorMessage = "";
        this.ExistingUserClass = "Show";
        this.NewUserClass = "Hide";
    }
    loadingpopup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...'
            });
            yield this.loading.present();
        });
    }
    closePopup() {
        this.loading.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map