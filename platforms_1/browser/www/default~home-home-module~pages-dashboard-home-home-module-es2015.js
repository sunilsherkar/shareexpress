(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-dashboard-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/home/home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/home/home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content>\r\n    <div class=\"page\">\r\n        <div class=\"marvel-device nexus5\">\r\n            <div class=\"top-bar\"></div>\r\n            <div class=\"sleep\"></div>\r\n            <div class=\"volume\"></div>\r\n            <div class=\"camera\"></div>\r\n            <div class=\"screen\">\r\n                <div class=\"screen-container\">\r\n                    <div class=\"status-bar\">\r\n                        <div class=\"time\"></div>\r\n                        <div class=\"battery\">\r\n                            <i class=\"zmdi zmdi-battery\"></i>\r\n                        </div>\r\n                        <div class=\"network\">\r\n                            <i class=\"zmdi zmdi-network\"></i>\r\n                        </div>\r\n                        <div class=\"wifi\">\r\n                            <i class=\"zmdi zmdi-wifi-alt-2\"></i>\r\n                        </div>\r\n                        <div class=\"star\">\r\n                            <i class=\"zmdi zmdi-star\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat\">\r\n                        <div class=\"chat-container\">\r\n                            <div class=\"user-bar\">\r\n                                <div class=\"\">\r\n                                    \r\n\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <!--  <img src=\"\" alt=\"Avatar\"> -->\r\n                                </div>\r\n                                <div class=\"name\">\r\n                                    <span>My Post</span>\r\n                                    <!--<span class=\"status\">online</span>-->\r\n                                </div>\r\n                                <div class=\"actions more\">\r\n                                  <!--   <ion-icon name=\"close\" (click)=\"close()\"></ion-icon> -->\r\n                                </div>\r\n                                <div class=\"actions attachment\">\r\n                                    <i class=\"zmdi zmdi-attachment-alt\"></i>\r\n                                </div>\r\n                                <div class=\"actions\">\r\n                                    <i class=\"zmdi zmdi-phone\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"conversation\">\r\n                                <div class=\"conversation-container\">\r\n\r\n                                    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n                                        <ion-refresher-content></ion-refresher-content>\r\n                                    </ion-refresher>\r\n\r\n                                    <ion-card *ngFor=\"let f of MyFiles\">\r\n                                        <ion-item>\r\n                                            <ion-avatar item-start>\r\n                                                <img src=\"{{f.UploadUserProfilePath}}\" />\r\n                                            </ion-avatar>\r\n                                            <span style=\"margin-left: 10px\"> {{f.UploadUserName}}  </span>\r\n                                        </ion-item>\r\n                                        <ion-card-content>\r\n                                            <p>Life.</p>\r\n                                            <div class=\"container\">\r\n                                                <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n                                                     src=\"{{f.FilePath}}\" (click)=\"ShowVideos(f,MyFiles)\" />\r\n                                                <img *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\"\r\n                                                     class=\"img-responsive\" (click)=\"ShowVideos(f,MyFiles)\" />\r\n                                                <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n                                                    <ion-icon class=\"icon\" name=\"play-circle-outline\" (click)=\"ShowVideos(f,MyFiles)\"></ion-icon>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ion-card-content>\r\n                                        <ion-row>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isShareStart\">\r\n                                                    </ion-spinner>\r\n                                                    <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\"\r\n                                                              [ngClass]=\"{'green': f.isShare == true}\">\r\n                                                    </ion-icon>\r\n                                                    <small>{{f.TotalShare}} share</small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-icon name=\"happy-outline\"></ion-icon>\r\n                                                    <small> {{f.TotalLikes}} likes </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"></ion-icon> <small>   Comments </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isDownloadStart\">\r\n                                                    </ion-spinner>\r\n                                                    <ion-icon name=\"cloud-download-outline\"></ion-icon>\r\n                                                    <small> {{f.TotalDownload}} save </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                        </ion-row>\r\n                                    </ion-card>\r\n\r\n                                </div>\r\n                                <!--<form class=\"conversation-compose\">\r\n\r\n                                </form>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n\r\n    <ion-toolbar>\r\n        <ion-tab-button slot=\"start\" (click)=\"RedirectDashboard()\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button>\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n            <input id=\"uploadBtn\" type=\"file\" class=\"upload\"\r\n                   (change)=\"uploadOnServer($event.target.files)\" />\r\n            Upload\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"about\" (click)=\"RedirectProfile()\" slot=\"end\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>Setting</ion-label>\r\n        </ion-tab-button>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/dashboard/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/dashboard/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/dashboard/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/dashboard/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/home/home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#uploadBtn {\n  position: absolute;\n  opacity: 0;\n}\n\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  transition: 0.3s ease;\n  background-color: transparent;\n}\n\n.icon {\n  color: white;\n  font-size: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\nShow {\n  display: block;\n}\n\n.Hide {\n  display: none;\n}\n\n.ionButton {\n  height: 30px;\n  width: 80px;\n  font-size: 0.8em;\n  background-color: transparent;\n  -webkit-text-fill-color: white;\n}\n\n.mainContent {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n\n.mainContent span {\n  position: relative;\n  top: 50%;\n}\n\n.top-overlay-visible {\n  height: 20%;\n  width: 100%;\n  left: 0;\n  margin-left: 0%;\n  /* background-color: #4e4949; */\n  background: linear-gradient(to top, transparent 0%, black 100%);\n  background: -o-linear-gradient(to top, transparent 0%, black 100%);\n  position: fixed;\n  z-index: 20;\n}\n\n.bottom-overlay-visible {\n  height: 20%;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  margin-bottom: 0%;\n  margin-left: 0%;\n  background: linear-gradient(to bottom, transparent 0%, black);\n  background: -o-linear-gradient(to bottom, transparent 0%, black);\n  position: fixed;\n}\n\n.topOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  top: 80px;\n  text-align: center;\n  color: #6434c1;\n}\n\n.topOverlayElements span {\n  font-size: 1.5em;\n}\n\n.heart1 {\n  display: inline-block;\n  position: fixed;\n  width: 20%;\n  font-size: 2em;\n  line-height: 1em;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.heart1 span {\n  font-size: 1.5em;\n}\n\n.heart {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 220px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.download {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 290px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeVideo {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 1em;\n  top: 20px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.share {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 360px;\n  left: 140px;\n  text-align: center;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n\n.back {\n  display: inline-block;\n  position: fixed;\n  font-size: 2em;\n  line-height: 2em;\n  top: 20px;\n  left: 2px;\n  text-align: left;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n\n.bottomOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  bottom: 20px;\n  text-align: center;\n  color: white;\n}\n\n.bottomOverlayElements span {\n  font-size: 1.5em;\n}\n\n.top-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bottom-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.closeFab {\n  display: inline-block;\n  position: fixed;\n  width: 15px;\n  height: 15px;\n  font-size: 2em;\n  line-height: 1em;\n  top: 10px;\n  left: 140px;\n  text-align: r;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeFab span {\n  font-size: 1.5em;\n}\n\n.Fullpage {\n  height: 80%;\n}\n\n.List {\n  max-height: 90%;\n}\n\nion-tabs {\n  height: 10% !important;\n  top: 90%;\n}\n\n.item-block {\n  height: auto;\n}\n\n.item-ios.item-block .item-inner {\n  height: auto;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.green {\n  color: green;\n}\n\n.white {\n  color: white;\n}\n\n/* new css */\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #092503;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\n/* Conversation */\n\n.conversation {\n  height: calc(100% - 12px);\n  position: relative;\n  background: #efe7dd url(\"/assets/pattern.svg\") repeat;\n  z-index: 0;\n}\n\n.conversation ::-webkit-scrollbar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 5px;\n  height: 1px;\n  z-index: 10;\n}\n\n.conversation ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.conversation ::-webkit-scrollbar-thumb {\n  background: #b3ada7;\n}\n\n.conversation .conversation-container {\n  height: calc(100% - 68px);\n  box-shadow: inset 0 10px 10px -10px #000000;\n  overflow-x: hidden;\n  padding: 0 0;\n  margin-bottom: 5px;\n}\n\n.conversation .conversation-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Messages */\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1;\n}\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.metadata {\n  display: inline-block;\n  float: right;\n  padding: 0 0 0 7px;\n  position: relative;\n  bottom: -4px;\n}\n\n.metadata .time {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 11px;\n  display: inline-block;\n}\n\n.metadata .tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.metadata .tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.metadata .tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.metadata .tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.metadata .tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.metadata .tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\n.message:first-child {\n  margin: 16px 0 8px;\n}\n\n.message.received {\n  background: #fff;\n  border-radius: 0px 5px 5px 5px;\n  float: left;\n}\n\n.message.received .metadata {\n  padding: 0 0 0 16px;\n}\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right;\n}\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n}\n\n/* Compose */\n\n.conversation-compose {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  z-index: 2;\n}\n\n.conversation-compose div,\n.conversation-compose ion-input {\n  background: #fff;\n  height: 100%;\n}\n\n.conversation-compose .emoji {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 5px 0 0 5px;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  width: 48px;\n}\n\n.conversation-compose .input-msg {\n  border: 0;\n  flex: 1 1 auto;\n  font-size: 16px;\n  margin: 0;\n  outline: none;\n  min-width: 50px;\n}\n\n.conversation-compose .photo {\n  flex: 0 0 auto;\n  border-radius: 0 0 5px 0;\n  text-align: center;\n  position: relative;\n  width: 48px;\n}\n\n.conversation-compose .photo:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  border-style: solid;\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 0;\n  right: -10px;\n}\n\n.conversation-compose .photo i {\n  display: block;\n  color: #6d7e39;\n  /* color: #7d8488; */\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n\n.conversation-compose .send {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding: 0;\n  position: relative;\n  outline: none;\n}\n\n.conversation-compose .send .circle {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.conversation-compose .send .circle i {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n/* Small Screens */\n\n@media (max-width: 768px) {\n  .marvel-device.nexus5 {\n    border-radius: 0;\n    flex: none;\n    padding: 0;\n    max-width: none;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n\n  .marvel-device > .screen .chat {\n    visibility: visible;\n  }\n\n  .marvel-device {\n    visibility: hidden;\n  }\n\n  .marvel-device .status-bar {\n    display: none;\n  }\n\n  .screen-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .conversation {\n    height: calc(100vh - 55px);\n  }\n\n  .conversation .conversation-container {\n    height: calc(100vh - 120px);\n  }\n\n  .popover-wrapper, .ion-overlay-wrapper, .sc-ion-popover-md {\n    top: 84% !important;\n    width: 100% !important;\n  }\n\n  .popover-content {\n    top: 84% !important;\n    width: 100% !important;\n  }\n\n  .sc-ion-popover-md {\n    top: 84% !important;\n    width: 100% !important;\n  }\n\n  .select-modal {\n    background: rgba(0, 0, 0, 0.5) !important;\n    padding: 20% 10% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2hvbWUvRDpcXElvbmljIFByb2plY3RcXFNoYXJlRXhwcmVzc1xcU2hhcmVFeHByZXNzL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBRElDO0VBRU8sWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNGUjs7QURJSTtFQUVLLFlBQUE7RUFDRCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREdRO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FDRlo7O0FES0k7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLE9BQUE7RUFDQSxlQUFBO0VBRUYsK0JBQUE7RUFDRSwrREFBQTtFQUdBLGtFQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNMTjs7QURPSTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUdBLGdFQUFBO0VBQ0Es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Q0UsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDdENGOztFRHlDQTtJQUNFLG1CQUFBO0VDdENGOztFRHlDQTtJQUNFLGtCQUFBO0VDdENGOztFRHlDQTtJQUNFLGFBQUE7RUN0Q0Y7O0VEeUNBO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDdENGOztFRHlDQTtJQUNFLDBCQUFBO0VDdENGOztFRHdDQTtJQUNFLDJCQUFBO0VDckNGOztFRHdDRDtJQUVBLG1CQUFBO0lBQ0Msc0JBQUE7RUN0Q0E7O0VEd0NGO0lBRUUsbUJBQUE7SUFDQSxzQkFBQTtFQ3RDQTs7RUR3Q0Y7SUFDRSxtQkFBQTtJQUNBLHNCQUFBO0VDckNBOztFRHdDRjtJQUVHLHlDQUFBO0lBQ0EsMkJBQUE7RUN0Q0Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VwbG9hZEJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuICAgICBcclxuLm92ZXJsYXkxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuIFxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5TaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGlkZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuIC5pb25CdXR0b25cclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLW92ZXJsYXktdmlzaWJsZVxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICBcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAlIDtcclxuICAgIFxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRlNDk0OTsgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1vdmVybGF5LXZpc2libGVcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSA7XHJcbiAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcclxuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICAgIC50b3BPdmVybGF5RWxlbWVudHNcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjgwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM2NDM0YzE7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAuaGVhcnQxXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgc3BhblxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgfSBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYXJ0IFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRvd25sb2FkXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgIHRvcDoyOTBweDtcclxuICAgICAgbGVmdDoxNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlVmlkZW9cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgLnNoYXJlXHJcbiAgICAgICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MzYwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgfVxyXG4gLmJhY2tcclxuICAgICAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjBweDtcclxuICAgICAgbGVmdDoycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tT3ZlcmxheUVsZW1lbnRzXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50b3Atb3ZlcmxheS1oaWRkZW5cclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1vdmVybGF5LWhpZGRlblxyXG4gICAge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gLmNsb3NlRmFiXHJcbntcclxuICAgICBcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICB0b3A6MTBweDtcclxuICAgICAgbGVmdDoxNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBzcGFuXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9IFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5GdWxscGFnZVxyXG57XHJcbiAgaGVpZ2h0OjgwJTtcclxufVxyXG4uTGlzdFxyXG57XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG59XHJcblxyXG5pb24tdGFic1xyXG57XHJcbiAgaGVpZ2h0OiAxMCUhaW1wb3J0YW50O1xyXG4gIHRvcDo5MCU7XHJcbn1cclxuIFxyXG4gLml0ZW0tYmxvY2sge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiBcclxuIC5ncmVlblxyXG4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuIH1cclxuIC53aGl0ZVxyXG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuIFxyXG5cclxuXHJcblxyXG4gXHJcbi8qIG5ldyBjc3MgKi9cclxuIFxyXG5cclxuICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFyICovXHJcblxyXG4uc3RhdHVzLWJhciB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXIgZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBDaGF0ICovXHJcblxyXG4uY2hhdCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVzZXItYmFyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udXNlci1iYXIgZGl2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcclxuICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIHtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLnN0YXR1cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIENvbnZlcnNhdGlvbiAqL1xyXG5cclxuLmNvbnZlcnNhdGlvbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiL2Fzc2V0cy9wYXR0ZXJuLnN2Z1wiKSByZXBlYXQ7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuXHJcbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNiM2FkYTc7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDEwcHggLTEwcHggIzAwMDAwMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogTWVzc2FnZXMgKi9cclxuXHJcbi5tZXNzYWdlIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBjbGVhcjogYm90aDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIG1heC13aWR0aDogODUlO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1lc3NhZ2U6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4ubWV0YWRhdGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC00cHg7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGltZSB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQ1KTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayBzdmc6Zmlyc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxufVxyXG5cclxuLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMTZweCAwIDhweDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmVjZWl2ZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yZWNlaXZlZCAubWV0YWRhdGEge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJlY2VpdmVkOmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAxMHB4IDEwcHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5zZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZTFmZmM3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggNXB4IDVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2UxZmZjNztcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4vKiBDb21wb3NlICovXHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGRpdixcclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuZW1vamkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmlucHV0LW1zZyB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8ge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvOmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8gaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM2ZDdlMzk7XHJcbiAgLyogY29sb3I6ICM3ZDg0ODg7ICovXHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA4YTdjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIC5jaXJjbGUgaSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8qIFNtYWxsIFNjcmVlbnMgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYXJ2ZWwtZGV2aWNlLm5leHVzNSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSA+IC5zY3JlZW4gLmNoYXQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC5tYXJ2ZWwtZGV2aWNlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5tYXJ2ZWwtZGV2aWNlIC5zdGF0dXMtYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuY29udmVyc2F0aW9uIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xyXG4gIH1cclxuICAuY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcclxuICB9XHJcblxyXG4gLnBvcG92ZXItd3JhcHBlciAsIC5pb24tb3ZlcmxheS13cmFwcGVyLCAuc2MtaW9uLXBvcG92ZXItbWRcclxuIHtcclxuIHRvcDo4NCUhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDsgfVxyXG4gXHJcbi5wb3BvdmVyLWNvbnRlbnRcclxue1xyXG4gIHRvcDo4NCUhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufVxyXG4uc2MtaW9uLXBvcG92ZXItbWR7XHJcbiAgdG9wOjg0JSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0LW1vZGFsIFxyXG57XHJcbiAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nOiAyMCUgMTAlICAhaW1wb3J0YW50O1xyXG59XHJcbn0iLCIjdXBsb2FkQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ub3ZlcmxheTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW9uQnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5Db250ZW50IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xufVxuXG4udG9wLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0OTQ5OyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uYm90dG9tLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50b3BPdmVybGF5RWxlbWVudHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NDM0YzE7XG59XG4udG9wT3ZlcmxheUVsZW1lbnRzIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaGVhcnQxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cbi5oZWFydDEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5oZWFydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHRvcDogMjIwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmRvd25sb2FkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdG9wOiAyOTBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2xvc2VWaWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uc2hhcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDM2MHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tT3ZlcmxheUVsZW1lbnRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ib3R0b21PdmVybGF5RWxlbWVudHMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50b3Atb3ZlcmxheS1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ib3R0b20tb3ZlcmxheS1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jbG9zZUZhYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuLmNsb3NlRmFiIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uRnVsbHBhZ2Uge1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLkxpc3Qge1xuICBtYXgtaGVpZ2h0OiA5MCU7XG59XG5cbmlvbi10YWJzIHtcbiAgaGVpZ2h0OiAxMCUgIWltcG9ydGFudDtcbiAgdG9wOiA5MCU7XG59XG5cbi5pdGVtLWJsb2NrIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogbmV3IGNzcyAqL1xuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNjcmVlbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFN0YXR1cyBCYXIgKi9cbi5zdGF0dXMtYmFyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA0ZTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLnN0YXR1cy1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5zdGF0dXMtYmFyIGRpdiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBtYXJnaW46IDAgMCAwIDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogQ2hhdCAqL1xuLmNoYXQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY5cHgpO1xufVxuXG4uY2hhdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFVzZXIgQmFyICovXG4udXNlci1iYXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6ICMwOTI1MDM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi51c2VyLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnVzZXItYmFyIGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMubW9yZSB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMzJweDtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zLmF0dGFjaG1lbnQge1xuICBtYXJnaW46IDAgMCAwIDMwcHg7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLnVzZXItYmFyIC5hdmF0YXIge1xuICBtYXJnaW46IDAgMCAwIDVweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLnVzZXItYmFyIC5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1iYXIgLm5hbWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIG1hcmdpbjogMCAwIDAgOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi51c2VyLWJhciAuc3RhdHVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIENvbnZlcnNhdGlvbiAqL1xuLmNvbnZlcnNhdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTJweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZTdkZCB1cmwoXCIvYXNzZXRzL3BhdHRlcm4uc3ZnXCIpIHJlcGVhdDtcbiAgei1pbmRleDogMDtcbn1cblxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMXB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNiM2FkYTc7XG59XG5cbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDEwcHggMTBweCAtMTBweCAjMDAwMDAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiBNZXNzYWdlcyAqL1xuLm1lc3NhZ2Uge1xuICBjb2xvcjogIzAwMDtcbiAgY2xlYXI6IGJvdGg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDhweCAwO1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm1lc3NhZ2U6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5tZXRhZGF0YSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDAgMCA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNHB4O1xufVxuXG4ubWV0YWRhdGEgLnRpbWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tZXRhZGF0YSAudGljayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuLm1ldGFkYXRhIC50aWNrIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLm1ldGFkYXRhIC50aWNrIHN2ZzpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmc6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcbn1cblxuLm1ldGFkYXRhIC50aWNrLWFuaW1hdGlvbiBzdmc6Zmlyc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XG59XG5cbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgtMTc5LjlkZWcpO1xufVxuXG4ubWVzc2FnZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMTZweCAwIDhweDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWVzc2FnZS5yZWNlaXZlZCAubWV0YWRhdGEge1xuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xufVxuXG4ubWVzc2FnZS5yZWNlaXZlZDphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHggMTBweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5tZXNzYWdlLnNlbnQge1xuICBiYWNrZ3JvdW5kOiAjZTFmZmM3O1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDVweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1lc3NhZ2Uuc2VudDphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWZmYzc7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0xMHB4O1xufVxuXG4vKiBDb21wb3NlICovXG4uY29udmVyc2F0aW9uLWNvbXBvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSBkaXYsXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmVtb2ppIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmlucHV0LW1zZyB7XG4gIGJvcmRlcjogMDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG86YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0xMHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM2ZDdlMzk7XG4gIC8qIGNvbG9yOiAjN2Q4NDg4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzAwOGE3YztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIC5jaXJjbGUgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLyogU21hbGwgU2NyZWVucyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYXJ2ZWwtZGV2aWNlLm5leHVzNSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hcnZlbC1kZXZpY2UgPiAuc2NyZWVuIC5jaGF0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hcnZlbC1kZXZpY2Uge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlIC5zdGF0dXMtYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNjcmVlbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cblxuICAuY29udmVyc2F0aW9uIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbiAgfVxuXG4gIC5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgfVxuXG4gIC5wb3BvdmVyLXdyYXBwZXIsIC5pb24tb3ZlcmxheS13cmFwcGVyLCAuc2MtaW9uLXBvcG92ZXItbWQge1xuICAgIHRvcDogODQlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wb3BvdmVyLWNvbnRlbnQge1xuICAgIHRvcDogODQlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zYy1pb24tcG9wb3Zlci1tZCB7XG4gICAgdG9wOiA4NCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlbGVjdC1tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjAlIDEwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/home/home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.page.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/image.service */ "./src/app/pages/service/image.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/pages/service/authentication.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../pages/chat/chat.page */ "./src/app/pages/chat/chat.page.ts");
/* harmony import */ var _dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dashboard/main-list/main-list.page */ "./src/app/pages/dashboard/main-list/main-list.page.ts");


/*import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
*/



















let HomePage = class HomePage {
    constructor(fileChooser, file, storage, plt, fileOpener, alertCtrl, route, toastCtrl, filePath, database, ImageService, api, socialSharing, base64, httpClient, http, router, loadingController, modal) {
        this.fileChooser = fileChooser;
        this.file = file;
        this.storage = storage;
        this.plt = plt;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.filePath = filePath;
        this.database = database;
        this.ImageService = ImageService;
        this.api = api;
        this.socialSharing = socialSharing;
        this.base64 = base64;
        this.httpClient = httpClient;
        this.http = http;
        this.router = router;
        this.loadingController = loadingController;
        this.modal = modal;
        this.FileName = "";
        this.FilePath = "";
        this.isDownloadStart = false;
        this.isDownload = false;
        this.isShareStart = false;
        this.isShare = false;
        this.isLike = false;
        this.green = "green";
        this.videoPath = '';
        this.videoName = '';
        this.MEDIA_FOLDER_NAME = 'my_media';
        this.videoDataUrl = '';
        this.directories = [];
        this.folder = '';
        this.MyFiles = [];
        this.uploadProgress = 0;
        this.savefiles1 = [];
        this.savefiles2 = [];
        this.thumbFile = [];
        this.saveFile = [];
        this.thumbnailData = "";
        this.thumbImagePath = "";
        this.VideoFilepath = "";
    }
    ngOnInit() {
        this.GetMyPosts();
    }
    GetMyPosts() {
        this.loadingpopup();
        let data = 'id=' + this.api.UserID + '&CategoryID=1&isSelf=1';
        let url = this.api.baseUrl + "Media?" + data;
        this.SelfData = this.httpClient.get(url);
        this.SelfData
            .subscribe(data => {
            this.closePopup();
            this.MyFiles = data;
        }), err => { this.closePopup(); };
    }
    doRefresh(event) {
        this.GetMyPosts();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    /*  pickImages () {
    
         this.fileChooser.open()
      .then(uri => {})
      .catch(e => alert(e));
      
       
      }
     
      captureImage() {
        this.mediaCapture.captureImage().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
             // alert(data[0].fullPath)
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }
     
      recordAudio() {
        this.mediaCapture.captureAudio().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
               //this.storeMediaFiles(data);
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }
     
      recordVideo() {
        this.mediaCapture.captureVideo().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
             // this.storeMediaFiles(data);
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }*/
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;
        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.dataDirectory + this.MEDIA_FOLDER_NAME;
        this.file.copyFile(copyFrom, name, copyTo, newName).then(success => {
            // this.loadFiles();
        }, error => {
        });
    }
    uploadFile(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            const ext = f.name.split('.').pop();
            const type = this.getMimeType(f.name.split('.').pop());
            const buffer = yield this.file.readAsArrayBuffer(path, f.name);
            const fileBlob = new Blob([buffer], type);
            alert(ext);
            const randomId = Math.random()
                .toString(36)
                .substring(2, 8) + '.' + ext;
            const uploadTask = this.storage.upload(`files/${new Date().getTime()}_${randomId}`, fileBlob);
            uploadTask.percentageChanges().subscribe(change => {
                // alert(change);
                this.uploadProgress = change;
            });
            uploadTask.catch((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // alert(res);
            }));
            uploadTask.then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //alert(res);
                const toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'File upload finished!'
                });
                toast.present();
            }));
        });
    }
    getMimeType(fileExt) {
        if (fileExt == 'wav')
            return { type: 'audio/wav' };
        else if (fileExt == 'jpg')
            return { type: 'image/jpg' };
        else if (fileExt == 'mp4')
            return { type: 'video/mp4' };
        else if (fileExt == 'MOV')
            return { type: 'video/quicktime' };
    }
    save() {
        this.database.collection('/Media').add({
            FileName: "s",
            filePath: "storageRef1.getDownloadURL()",
            Ext: "mp4",
            Thumbnail: ""
        })
            .then((res) => {
            alert("Account Created");
        });
    }
    add(url) {
        this.ImageService.generateThumbnail1(url)
            .then(thumbnailData => {
            this.thumbnailData = thumbnailData;
        });
    }
    uploadThumb() {
        let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
        // Create a timestamp as filename
        const filename = Math.floor(Date.now() / 1000);
        this.thumbImagePath = filename + ".jpg";
        const imageRef = storageRef.child(`Thumb/${filename}.jpg`);
        imageRef.putString(this.thumbnailData, firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"].StringFormat.DATA_URL)
            .then((snapshot) => {
            this.geturlVideo();
        });
    }
    saveImagetodb() {
        debugger;
        const exts = this.VideoFilepath.split('.').pop();
        let param = {
            "UploadID": 0,
            "Extension": exts,
            "UserID": this.api.UserID,
            "SecurityType": false,
            "FilePath": this.saveFile[0].path,
            "FileFolder": "Status",
            "FileName": this.VideoFilepath,
            "ThumbPath": "",
            "ThumbFolder": "",
            "ThumbName": ""
        };
        let url = this.api.baseUrl + "Media/PostSaveMedia";
        this.http.post(url, param, {})
            .then(data => {
            this.loading.dismiss();
            console.log(data.status);
            alert("Media Added Successfully");
        })
            .catch(error => {
            this.loading.dismiss();
            console.log(error.status);
        });
        this.database.collection('/Media').add({
            FileName: this.VideoFilepath,
            ThumbName: "",
            ThumbFolder: "",
            FileFolder: "Status",
            FilePath: this.saveFile[0].path,
            Ext: exts,
            ThumbPath: "",
            UserID: this.api.UserID
        })
            .then((res) => {
        });
    }
    UploadImgToDb() {
        const exts = this.VideoFilepath.split('.').pop();
        let param = {
            "UploadID": 0,
            "Extension": exts,
            "UserID": this.api.UserID,
            "SecurityType": false,
            "FilePath": this.saveFile[0].path,
            "FileFolder": "Status",
            "FileName": this.VideoFilepath,
            "ThumbPath": this.thumbFile[0].path,
            "ThumbFolder": "Thumbs",
            "ThumbName": this.thumbImagePath
        };
        let url = this.api.baseUrl + "Media/PostSaveMedia";
        this.http.post(url, param, {})
            .then(data => {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
        })
            .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    savetodb() {
        this.UploadImgToDb();
        const exts = this.VideoFilepath.split('.').pop();
        this.database.collection('/Media').add({
            FileName: this.VideoFilepath,
            ThumbName: this.thumbImagePath,
            ThumbFolder: "Thumbs",
            FileFolder: "Status",
            FilePath: this.saveFile[0].path,
            Ext: exts,
            ThumbPath: this.thumbFile[0].path,
            UserID: this.api.UserID
        })
            .then((res) => {
            alert("File Uploaded Successfully");
        });
    }
    geturlVideo() {
        this.saveFile = [];
        //const storageRef = firebase.storage().ref(); 
        const vurl = 'Status/' + this.VideoFilepath;
        var starsRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(vurl);
        starsRef.getDownloadURL().then(result => {
            this.saveFile.push({
                path: result
            });
            this.geturlThumb();
        });
    }
    geturlImage() {
        this.saveFile = [];
        //const storageRef = firebase.storage().ref(); 
        const vurl = 'Status/' + this.VideoFilepath;
        var starsRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(vurl);
        starsRef.getDownloadURL().then(result => {
            this.saveFile.push({
                path: result
            });
            this.saveImagetodb();
        });
    }
    geturlThumb() {
        this.thumbFile = [];
        const vurl = 'Thumb/' + this.thumbImagePath;
        var starsRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(vurl);
        starsRef.getDownloadURL().then(result => {
            this.thumbFile.push({
                path: result
            });
            this.savetodb();
        });
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
    uploadOnServer(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingpopup();
            this.savefiles1 = [];
            this.selectedfile = event.item(0);
            const folder = "Status/";
            this.VideoFilepath = `${new Date().getTime()}_${this.selectedfile.name}`;
            //File reference
            const exts1 = this.VideoFilepath.split('.').pop();
            if (exts1 == "jpg" || exts1 == "jpeg" || exts1 == "png" || exts1 == "gif") {
                this.uploadImage();
            }
            else {
                const fileRef = this.storage.ref(folder + this.VideoFilepath);
                const dataUrl = URL.createObjectURL(event.item(0));
                this.add(dataUrl);
                this.storage.upload(folder + this.VideoFilepath, this.selectedfile)
                    .then((snapshot) => {
                    const exts = snapshot.ref.name.split('.').pop();
                    this.uploadThumb();
                });
            }
        });
    }
    uploadImage() {
        const folder = "Status/";
        this.storage.upload(folder + this.VideoFilepath, this.selectedfile)
            .then((snapshot) => {
            this.geturlImage();
        });
    }
    RedirectDashboard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['dashboard']);
        });
    }
    RedirectProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['profile']);
        });
    }
    getcurrentFiles(fieldname) {
        if (fieldname == "UploadID") {
            this.UploadID = this.MyFiles[this.Curindex].UploadID;
        }
        else if (fieldname == "FileName") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName = this.MyFiles[this.Curindex].FileName;
        }
        else if (fieldname == "ThumbPath") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath = this.MyFiles[this.Curindex].ThumbPath;
        }
        else if (fieldname == "Curindex") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
        }
        else if (fieldname == "FilePath") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath = this.MyFiles[this.Curindex].FilePath;
        }
        else if (fieldname == "isDownload") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.isDownload = this.MyFiles[this.Curindex].isDownload;
        }
        else if (fieldname == "isShare") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.isShare = this.MyFiles[this.Curindex].isShare;
        }
        else if (fieldname == "isLike") {
            this.Curindex = this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike = this.MyFiles[this.Curindex].isLike;
        }
    }
    Shareloader(val) {
        this.MyFiles[this.Curindex].isShareStart = val;
    }
    Downloadloader(val) {
        this.MyFiles[this.Curindex].isDownloadStart = val;
    }
    CommentLoad(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_17__["ChatPage"],
                animated: true,
                componentProps: data
            }).then(modal => {
                modal.present();
                modal.onDidDismiss().then(() => {
                    //this.getEmployeeList();
                });
            });
        });
    }
    ShowVideos(data, list) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.api.CurrentDatalist = list;
            this.api.UploadID = data.UploadID;
            const modal = yield this.modal.create({
                component: _dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_18__["MainListPage"],
                animated: true,
                componentProps: list
            }).then(modal => {
                modal.present();
                modal.onDidDismiss().then(() => {
                    //this.getEmployeeList();
                });
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _service_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__["Base64"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/dashboard/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-dashboard-home-home-module-es2015.js.map