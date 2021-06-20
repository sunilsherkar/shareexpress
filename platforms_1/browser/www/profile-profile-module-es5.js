function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n<ion-header >\r\n    <ion-toolbar color=\"primary\" [myScrollVanish]=\"scrollArea\">\r\n      <div class=\"overlay1\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink=\"/dashboard\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </div>\r\n\r\n\r\n   <div class=\"overlay2\" >\r\n   <ion-buttons slot=\"end\" (click)=\"logout()\" >\r\n      <ion-button  >\r\n     <ion-icon name=\"settings-outline\" slot=\"end\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n</div>\r\n<div class=\"container\" >\r\n\r\n <div class=\"card\">\r\n  <div class=\"header\">\r\n\r\n    <div class=\"\" style=\"margin-left: 0%; margin-top: 1px;text-align: center;\">\r\n      <img src=\"{{ThumbPath}}\" alt=\"loading image...\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"overlay3\" >\r\n   <ion-icon  name=\"camera\" (click)=\"toBaseImg()\" class=\"icon\"></ion-icon>\r\n\r\n  </div>\r\n  </div>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n   <ion-content   #scrollArea scrollEvents=\"true\" >\r\n\r\n <ion-card    >\r\n  <ion-item >\r\n    <span style=\"margin-left: 10px\" >   {{FullName}}   </span>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <span style=\"margin-left: 10px\" >  Post :  {{TotalPost}}  </span>\r\n  </ion-item>\r\n  <ion-item >\r\n    <span style=\"margin-left: 10px\" > Likes :  {{TotalLikes}} </span>\r\n  </ion-item>\r\n  <ion-item >\r\n    <span style=\"margin-left: 10px\" > Shares :  {{TotalShare}}  </span>\r\n  </ion-item>\r\n   <ion-item >\r\n    <span style=\"margin-left: 10px\" > Download :  {{TotalDownload}}   </span>\r\n  </ion-item>\r\n\r\n  <ion-row>\r\n    </ion-row>\r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n  <ion-footer  >\r\n <ion-toolbar>\r\n <ion-tab-button tab=\"about\" slot=\"start\" (click)=\"RedirectDashboard()\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n     <ion-tab-button tab=\"about\"  (click)=\"RedirectCapture()\" >\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n      <ion-label>Capture</ion-label>\r\n    </ion-tab-button>\r\n  <ion-tab-button tab=\"about\"   slot=\"end\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>Setting</ion-label>\r\n    </ion-tab-button>\r\n      </ion-toolbar>\r\n  </ion-footer>  -->\r\n\r\n\r\n<ion-content>\r\n    <div class=\"page\">\r\n        <div class=\"marvel-device nexus5\">\r\n            <div class=\"top-bar\"></div>\r\n            <div class=\"sleep\"></div>\r\n            <div class=\"volume\"></div>\r\n            <div class=\"camera\"></div>\r\n            <div class=\"screen\">\r\n                <div class=\"screen-container\">\r\n                    <div class=\"status-bar\">\r\n                        <div class=\"time\"></div>\r\n                        <div class=\"battery\">\r\n                            <i class=\"zmdi zmdi-battery\"></i>\r\n                        </div>\r\n                        <div class=\"network\">\r\n                            <i class=\"zmdi zmdi-network\"></i>\r\n                        </div>\r\n                        <div class=\"wifi\">\r\n                            <i class=\"zmdi zmdi-wifi-alt-2\"></i>\r\n                        </div>\r\n                        <div class=\"star\">\r\n                            <i class=\"zmdi zmdi-star\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat\">\r\n                        <div class=\"chat-container\">\r\n                            <div class=\"user-bar\">\r\n                                <div class=\"back\" routerLink=\"/dashboard\">\r\n                                    <ion-icon name=\"arrow-back-outline\"  ></ion-icon>\r\n\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <!--  <img src=\"\" alt=\"Avatar\"> -->\r\n                                </div>\r\n                                <div class=\"name\">\r\n                                    <span>My Profile</span>\r\n                                    <!--<span class=\"status\">online</span>-->\r\n                                </div>\r\n                                <div class=\"actions more\">\r\n                                   <!--  <ion-icon name=\"settings-outline\" (click)=\"logout()\" slot=\"end\"></ion-icon> -->\r\n                                </div>\r\n                                <div class=\"actions attachment\">\r\n                                   <ion-icon name=\"home\" (click)=\"emoji()\" slot=\"end\">e</ion-icon>\r\n                                     \r\n                                </div>\r\n                                <div class=\"actions\">\r\n                                    <i class=\"zmdi zmdi-phone\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"conversation\">\r\n                                <div class=\"conversation-container\">\r\n                                    <div class=\"container\">\r\n                                        <div class=\"card\">\r\n                                            <div class=\"header\">\r\n                                                <div class=\"\" style=\"margin-left: 0%; margin-top: 1px;text-align: center;\">\r\n                                                    <img src=\"{{ThumbPath}}\" alt=\"loading image...\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"overlay3\">\r\n                                            <ion-icon name=\"camera\" (click)=\"toBaseImg()\" class=\"icon\"></ion-icon>\r\n                                        </div>\r\n                                    </div>\r\n                                    <ion-card >\r\n                                        <ion-item>\r\n                                            <span style=\"margin-left: 10px\">   {{FullName}}   </span>\r\n                                        </ion-item>\r\n\r\n                                        <ion-item>\r\n                                            <span style=\"margin-left: 10px\">  Post :  {{TotalPost}}  </span>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                            <span style=\"margin-left: 10px\"> Likes :  {{TotalLikes}} </span>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                            <span style=\"margin-left: 10px\"> Shares :  {{TotalShare}}  </span>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                            <span style=\"margin-left: 10px\"> Download :  {{TotalDownload}}   </span>\r\n                                        </ion-item>\r\n\r\n                                        <ion-row>\r\n                                        </ion-row>\r\n                                    </ion-card>\r\n\r\n                                </div> \r\n                                   </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar>\r\n        <ion-tab-button tab=\"about\" slot=\"start\" (click)=\"RedirectDashboard()\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" (click)=\"RedirectCapture()\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n            <ion-label>Capture</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" slot=\"end\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>Setting</ion-label>\r\n        </ion-tab-button>\r\n    </ion-toolbar>\r\n</ion-footer> ";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/profile/profile-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/dashboard/profile/profile-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesDashboardProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/dashboard/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/profile/profile.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/dashboard/profile/profile.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesDashboardProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/dashboard/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/dashboard/profile/profile.page.ts");
    /* harmony import */


    var _directives_expandable_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/expandable-header.directive */
    "./src/app/pages/directives/expandable-header.directive.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _directives_expandable_header_directive__WEBPACK_IMPORTED_MODULE_7__["ExpandableHeaderDirective"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/profile/profile.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/dashboard/profile/profile.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background-color: #1db7a5;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 200px;\n}\n\n.card .header .avatar {\n  width: 100%;\n  height: auto;\n  position: relative;\n  text-align: center;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #128c7e;\n  background-color: #fff;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n/* new */\n\n.overlay1 {\n  position: absolute;\n  top: 10px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 10%;\n  width: 100%;\n  opacity: 1;\n  z-index: 20;\n  background-color: transparent;\n}\n\n.overlay2 {\n  position: absolute;\n  top: 10px;\n  bottom: 0;\n  left: 85%;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  z-index: 20;\n}\n\n.icon {\n  color: white;\n  font-size: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n/* new  */\n\n.overlay3 {\n  position: absolute;\n  top: 30px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  width: 100%;\n  opacity: 1;\n  color: white;\n  background-color: transparent;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n/* new css */\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #092503;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\n/* Conversation */\n\n.conversation {\n  height: calc(100% - 12px);\n  position: relative;\n  background: #efe7dd url(\"/assets/pattern.svg\") repeat;\n  z-index: 0;\n}\n\n.conversation ::-webkit-scrollbar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 5px;\n  height: 1px;\n  z-index: 10;\n}\n\n.conversation ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.conversation ::-webkit-scrollbar-thumb {\n  background: #b3ada7;\n}\n\n.conversation .conversation-container {\n  height: calc(100% - 68px);\n  box-shadow: inset 0 10px 10px -10px #000000;\n  overflow-x: hidden;\n  padding: 0 0;\n  margin-bottom: 5px;\n}\n\n.conversation .conversation-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Messages */\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1;\n}\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.metadata {\n  display: inline-block;\n  float: right;\n  padding: 0 0 0 7px;\n  position: relative;\n  bottom: -4px;\n}\n\n.metadata .time {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 11px;\n  display: inline-block;\n}\n\n.metadata .tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.metadata .tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.metadata .tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.metadata .tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.metadata .tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.metadata .tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\n.message:first-child {\n  margin: 16px 0 8px;\n}\n\n.message.received {\n  background: #fff;\n  border-radius: 0px 5px 5px 5px;\n  float: left;\n}\n\n.message.received .metadata {\n  padding: 0 0 0 16px;\n}\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right;\n}\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n}\n\n/* Compose */\n\n.conversation-compose {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  z-index: 2;\n}\n\n.conversation-compose div,\n.conversation-compose ion-input {\n  background: #fff;\n  height: 100%;\n}\n\n.conversation-compose .emoji {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 5px 0 0 5px;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  width: 48px;\n}\n\n.conversation-compose .input-msg {\n  border: 0;\n  flex: 1 1 auto;\n  font-size: 16px;\n  margin: 0;\n  outline: none;\n  min-width: 50px;\n}\n\n.conversation-compose .photo {\n  flex: 0 0 auto;\n  border-radius: 0 0 5px 0;\n  text-align: center;\n  position: relative;\n  width: 48px;\n}\n\n.conversation-compose .photo:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  border-style: solid;\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 0;\n  right: -10px;\n}\n\n.conversation-compose .photo i {\n  display: block;\n  color: #6d7e39;\n  /* color: #7d8488; */\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n\n.conversation-compose .send {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding: 0;\n  position: relative;\n  outline: none;\n}\n\n.conversation-compose .send .circle {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.conversation-compose .send .circle i {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n/* Small Screens */\n\n@media (max-width: 768px) {\n  .marvel-device.nexus5 {\n    border-radius: 0;\n    flex: none;\n    padding: 0;\n    max-width: none;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n\n  .marvel-device > .screen .chat {\n    visibility: visible;\n  }\n\n  .marvel-device {\n    visibility: hidden;\n  }\n\n  .marvel-device .status-bar {\n    display: none;\n  }\n\n  .screen-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .conversation {\n    height: calc(100vh - 55px);\n  }\n\n  .conversation .conversation-container {\n    height: calc(100vh - 120px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUvRDpcXElvbmljIFByb2plY3RcXFNoYXJlRXhwcmVzc1xcU2hhcmVFeHByZXNzL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyx5QkFBQTtBQ0FIOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ1o7O0FEQ1k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHSTtFQUNJLGlCQUFBO0FDRFI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQVo7O0FERVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0FaOztBRElDLFFBQUE7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDRCxXQUFBO0VBQ0MsNkJBQUE7QUNGRjs7QURLQztFQUNDLGtCQUFBO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtC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QUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNYRjs7QURlQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDWkY7O0FEZUE7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDWkY7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEZUEsa0JBQUE7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ2JGOztFRGdCQTtJQUNFLG1CQUFBO0VDYkY7O0VEZ0JBO0lBQ0Usa0JBQUE7RUNiRjs7RURnQkE7SUFDRSxhQUFBO0VDYkY7O0VEZ0JBO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsMEJBQUE7RUNiRjs7RURlQTtJQUNFLDJCQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5pb24taGVhZGVyIHsgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICAjMWRiN2E1O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjs7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICMxMjhjN2U7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAudXNlci1tZXRhIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDsgXHJcbiAgICAgICAgLnBsYXllcm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gLyogbmV3ICovXHJcblxyXG4gLm92ZXJsYXkxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiB6LWluZGV4OiAyMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4gLm92ZXJsYXkyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA4NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogbmV3ICAqL1xyXG4ub3ZlcmxheTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMTtcclxuY29sb3I6IHdoaXRlO1xyXG4gLy8gdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcbi8qIG5ldyBjc3MgKi9cclxuIFxyXG5cclxuICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFyICovXHJcblxyXG4uc3RhdHVzLWJhciB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXIgZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBDaGF0ICovXHJcblxyXG4uY2hhdCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVzZXItYmFyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udXNlci1iYXIgZGl2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcclxuICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIHtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLnN0YXR1cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIENvbnZlcnNhdGlvbiAqL1xyXG4uY29udmVyc2F0aW9uIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgYmFja2dyb3VuZDogI2VmZTdkZCB1cmwoXCIvYXNzZXRzL3BhdHRlcm4uc3ZnXCIpIHJlcGVhdDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjYjNhZGE3O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxMHB4IC0xMHB4ICMwMDAwMDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIE1lc3NhZ2VzICovXHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBtYXgtd2lkdGg6IDg1JTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLm1ldGFkYXRhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtNHB4O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpbWUge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHN2ZzpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrLWFuaW1hdGlvbiBzdmc6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW46IDE2cHggMCA4cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJlY2VpdmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDVweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmVjZWl2ZWQgLm1ldGFkYXRhIHtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yZWNlaXZlZDphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uuc2VudCB7XHJcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcclxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVzc2FnZS5zZW50OmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWZmYzc7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuLyogQ29tcG9zZSAqL1xyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSBkaXYsXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSBpb24taW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmVtb2ppIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5pbnB1dC1tc2cge1xyXG4gIGJvcmRlcjogMDtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90bzphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTEwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNmQ3ZTM5O1xyXG4gIC8qIGNvbG9yOiAjN2Q4NDg4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwOGE3YztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKiBTbWFsbCBTY3JlZW5zICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFydmVsLWRldmljZS5uZXh1czUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hcnZlbC1kZXZpY2UgPiAuc2NyZWVuIC5jaGF0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSAuc3RhdHVzLWJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnZlcnNhdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcclxuICB9XHJcbiAgLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbiAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGI3YTU7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gIGJvcmRlcjogOHB4IHNvbGlkICMxMjhjN2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBuZXcgKi9cbi5vdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm92ZXJsYXkyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogODUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIG5ldyAgKi9cbi5vdmVybGF5MyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4vKiBuZXcgY3NzICovXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXJ2ZWwtZGV2aWNlIC5zY3JlZW4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2NyZWVuLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogU3RhdHVzIEJhciAqL1xuLnN0YXR1cy1iYXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uc3RhdHVzLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnN0YXR1cy1iYXIgZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG1hcmdpbjogMCAwIDAgOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBDaGF0ICovXG4uY2hhdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjlweCk7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogVXNlciBCYXIgKi9cbi51c2VyLWJhciB7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZDogIzA5MjUwMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnVzZXItYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udXNlci1iYXIgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcbiAgbWFyZ2luOiAwIDEycHggMCAzMnB4O1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCB7XG4gIG1hcmdpbjogMCAwIDAgMzBweDtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zLmF0dGFjaG1lbnQgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4udXNlci1iYXIgLmF2YXRhciB7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4udXNlci1iYXIgLmF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWJhciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLnVzZXItYmFyIC5zdGF0dXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLyogQ29udmVyc2F0aW9uICovXG4uY29udmVyc2F0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZWZlN2RkIHVybChcIi9hc3NldHMvcGF0dGVybi5zdmdcIikgcmVwZWF0O1xuICB6LWluZGV4OiAwO1xufVxuXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2IzYWRhNztcbn1cblxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxMHB4IC0xMHB4ICMwMDAwMDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIE1lc3NhZ2VzICovXG4ubWVzc2FnZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBjbGVhcjogYm90aDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogOHB4IDA7XG4gIG1heC13aWR0aDogODUlO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubWVzc2FnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm1ldGFkYXRhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgMCAwIDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC00cHg7XG59XG5cbi5tZXRhZGF0YSAudGltZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1ldGFkYXRhIC50aWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4ubWV0YWRhdGEgLnRpY2sgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLm1ldGFkYXRhIC50aWNrIHN2ZzpsYXN0LWNoaWxkIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xufVxuXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwKTtcbn1cblxuLm1ldGFkYXRhIC50aWNrLWFuaW1hdGlvbiBzdmc6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgtMTc5LjlkZWcpO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XG59XG5cbi5tZXNzYWdlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuXG4ubWVzc2FnZS5yZWNlaXZlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZXNzYWdlLnJlY2VpdmVkIC5tZXRhZGF0YSB7XG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XG59XG5cbi5tZXNzYWdlLnJlY2VpdmVkOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLm1lc3NhZ2Uuc2VudCB7XG4gIGJhY2tncm91bmQ6ICNlMWZmYzc7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS5zZW50OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2UxZmZjNztcbiAgdG9wOiAwO1xuICByaWdodDogLTEwcHg7XG59XG5cbi8qIENvbXBvc2UgKi9cbi5jb252ZXJzYXRpb24tY29tcG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGRpdixcbi5jb252ZXJzYXRpb24tY29tcG9zZSBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuZW1vamkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuaW5wdXQtbXNnIHtcbiAgYm9yZGVyOiAwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDhweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90bzphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICByaWdodDogLTEwcHg7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8gaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzZkN2UzOTtcbiAgLyogY29sb3I6ICM3ZDg0ODg7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMDA4YTdjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBTbWFsbCBTY3JlZW5zICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1hcnZlbC1kZXZpY2UubmV4dXM1IHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWFydmVsLWRldmljZSA+IC5zY3JlZW4gLmNoYXQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAubWFydmVsLWRldmljZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLm1hcnZlbC1kZXZpY2UgLnN0YXR1cy1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuXG4gIC5jb252ZXJzYXRpb24ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xuICB9XG5cbiAgLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/profile/profile.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/dashboard/profile/profile.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesDashboardProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/authentication.service */
    "./src/app/pages/service/authentication.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _service_image_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/image.service */
    "./src/app/pages/service/image.service.ts");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(storage, database, api, router, httpClient, http, loadingController, ImageService, filePathobject, base64, fileChooser) {
        _classCallCheck(this, ProfilePage);

        this.storage = storage;
        this.database = database;
        this.api = api;
        this.router = router;
        this.httpClient = httpClient;
        this.http = http;
        this.loadingController = loadingController;
        this.ImageService = ImageService;
        this.filePathobject = filePathobject;
        this.base64 = base64;
        this.fileChooser = fileChooser;
        this.data = [];
        this.UserID = '';
        this.password = "";
        this.userlist = [];
        this.fullName = "";
        this.thumbFile = [];
        this.saveFile = [];
        this.thumbnailData = "";
        this.thumbImageName = "";
        this.VideoFilepath = "";
        this.savefiles1 = [];
        this.savefiles2 = [];
        this.bigImg = null;
        this.bigSize = '0';
        this.smallImg = null;
        this.smallSize = '0';
        this.ThumbPath = "";
        this.FullName = "";
        this.TotalPost = "";
        this.TotalLikes = "";
        this.TotalShare = "";
        this.TotalDownload = "";
        this.toggled = false;
        this.fullName = this.api.fullName;
        this.UserID = this.api.UserID;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.api.checkToken();
          this.GetMyPosts();
        }
      }, {
        key: "GetMyPosts",
        value: function GetMyPosts() {
          var _this = this;

          this.loadingpopup();
          var data = 'UserID=' + this.api.UserID;
          var url = this.api.baseUrl + "ProfileImages/getStatistics?" + data;
          this.SelfData = this.httpClient.get(url);
          this.SelfData.subscribe(function (data) {
            _this.MyFiles = data;

            _this.closePopup();

            _this.FullName = _this.MyFiles["FullName"];
            _this.ThumbPath = _this.MyFiles["ThumbPath"];
            _this.TotalPost = _this.MyFiles["TotalPost"];
            _this.TotalLikes = _this.MyFiles["TotalLikes"];
            _this.TotalShare = _this.MyFiles["TotalShare"];
            _this.TotalDownload = _this.MyFiles["TotalDownload"];
          }), function (err) {
            _this.closePopup();
          };
        }
      }, {
        key: "getlogin",
        value: function getlogin() {
          var s = this.api.fullName;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          this.api.readUsers(this.UserID, this.password);

          if (this.api.UserID != 0) {
            this.api.isLogout.next(false);
            this.router.navigate(['dashboard']);
          }
        }
      }, {
        key: "RedirectThumb",
        value: function RedirectThumb() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.router.navigate(['thumbnail']);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "RedirectCapture",
        value: function RedirectCapture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.router.navigate(['home']);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "RedirectDashboard",
        value: function RedirectDashboard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['dashboard']);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.api.logout().then(function (res) {
                      if (res == true) {
                        _this2.router.navigateByUrl('login');

                        window.location.reload();
                      }
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "play",
        value: function play() {
          console.log("Loading..");
        }
      }, {
        key: "loadingpopup",
        value: function loadingpopup() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...'
                    });

                  case 2:
                    this.loading = _context5.sent;
                    _context5.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.loading.dismiss();
        }
      }, {
        key: "add",
        value: function add(url) {
          var _this3 = this;

          this.ImageService.generateThumbnail1(url).then(function (thumbnailData) {
            _this3.thumbnailData = thumbnailData;
          });
        }
      }, {
        key: "geturlBigImage",
        value: function geturlBigImage() {
          var _this4 = this;

          this.saveFile = [];
          var vurl = 'Profile/' + this.bigImageName;
          var starsRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(vurl);
          starsRef.getDownloadURL().then(function (result) {
            _this4.saveFile.push({
              path: result
            });

            _this4.saveImagetodb();
          });
        }
      }, {
        key: "geturlThumb",
        value: function geturlThumb() {
          var _this5 = this;

          this.thumbFile = [];
          var vurl = 'ThumbProfile/' + this.thumbImageName;
          var starsRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref().child(vurl);
          starsRef.getDownloadURL().then(function (result) {
            _this5.thumbFile.push({
              path: result
            });

            _this5.geturlBigImage(); //this.savetodb();

          });
        }
      }, {
        key: "saveImagetodb",
        value: function saveImagetodb() {
          var _this6 = this;

          var exts = "jpg";
          var param = {
            "UserID": this.api.UserID,
            "Extension": exts,
            "FilePath": this.saveFile[0].path,
            "FileName": this.bigImageName,
            "FileFolder": "Profile",
            "ThumbPath": this.thumbFile[0].path,
            "ThumbName": this.thumbImageName,
            "ThumbFolder": "ThumbProfile"
          };
          var url = this.api.baseUrl + "ProfileImages/PostProfileImage";
          this.http.post(url, param, {}).then(function (data) {
            _this6.loading.dismiss();

            console.log(data.status);

            _this6.GetMyPosts();

            alert("Profile picture updated successfully");
          })["catch"](function (error) {
            alert(error);

            _this6.loading.dismiss();
          });
        }
      }, {
        key: "uploadThumb",
        value: function uploadThumb() {
          var _this7 = this;

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
          var filename = Math.floor(Date.now() / 1000);
          this.thumbImageName = filename + ".jpg";
          var imageRef = storageRef.child("ThumbProfile/".concat(filename, ".jpg"));
          imageRef.putString(this.smallImg, firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
            _this7.uploadBigImage(); // this.geturlVideo(); 

          });
        }
      }, {
        key: "uploadBigImage",
        value: function uploadBigImage() {
          var _this8 = this;

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
          var filename = Math.floor(Date.now() / 1000);
          this.bigImageName = filename + ".jpg";
          var imageRef = storageRef.child("Profile/".concat(filename, ".jpg"));
          imageRef.putString(this.thumbnailData, firebase_app__WEBPACK_IMPORTED_MODULE_9__["storage"].StringFormat.DATA_URL).then(function (snapshot) {
            _this8.geturlThumb(); //alert("done"); 

          });
        }
        /*for image thumbnail*/

      }, {
        key: "createThumbnail",
        value: function createThumbnail() {
          var _this9 = this;

          this.generateFromImage(this.thumbnailData, 200, 200, 0.5, function (data) {
            // alert("image generated");
            _this9.smallImg = data;
            _this9.smallSize = _this9.getImageSize(_this9.smallImg);

            _this9.uploadThumb();
          });
        }
      }, {
        key: "generateFromImage",
        value: function generateFromImage(img) {
          var MAX_WIDTH = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;
          var MAX_HEIGHT = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 700;
          var quality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var callback = arguments.length > 4 ? arguments[4] : undefined;
          var canvas = document.createElement("canvas");
          var image = new Image();
          debugger;

          image.onload = function () {
            var width = image.width;
            var height = image.height;

            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }

            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height); // alert('inside data url');
            // IMPORTANT: 'jpeg' NOT 'jpg'

            var dataUrl = canvas.toDataURL('image/jpeg', quality);
            callback(dataUrl);
          };

          image.src = img;
        }
      }, {
        key: "getImageSize",
        value: function getImageSize(data_url) {
          var head = 'data:image/jpeg;base64,';
          return ((data_url.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
        }
      }, {
        key: "toBaseImg",
        value: function toBaseImg() {
          var _this10 = this;

          debugger;
          var New = "data:image/jpeg;base64";
          this.fileChooser.open().then(function (uri) {
            _this10.loadingpopup();

            _this10.filePathobject.resolveNativePath(uri).then(function (nativepath) {
              _this10.nativePathImg = nativepath;

              _this10.base64.encodeFile(nativepath).then(function (base64File) {
                var str = base64File.split(',');
                var headerString = str[0];
                _this10.thumbnailData = base64File.replace(headerString, New);

                _this10.createThumbnail();

                console.log(uri);
              })["catch"](function (e) {
                alert(e);

                _this10.closePopup();
              });
            });
          });
        }
      }, {
        key: "handleSelection",
        value: function handleSelection(event) {
          this.emojitext = this.emojitext + " " + event["char"];
        }
      }, {
        key: "emoji",
        value: function emoji() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.router.navigateByUrl('emoji');

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: _service_image_service__WEBPACK_IMPORTED_MODULE_10__["ImageService"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__["FileChooser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btn1')], ProfilePage.prototype, "btn1", void 0);
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/dashboard/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  },

  /***/
  "./src/app/pages/directives/expandable-header.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/directives/expandable-header.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: ExpandableHeaderDirective */

  /***/
  function srcAppPagesDirectivesExpandableHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpandableHeaderDirective", function () {
      return ExpandableHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); //Important for managing DOM events


    var ExpandableHeaderDirective = /*#__PURE__*/function () {
      function ExpandableHeaderDirective(element, renderer, domCtrl) {
        _classCallCheck(this, ExpandableHeaderDirective);

        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl; // To detect what position the header is in so that you don't trigger too many events into the dom

        this.hidden = false;
        this.triggerDistance = 20;
      }

      _createClass(ExpandableHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          console.log(this.scrollArea); // Wait until 'ion-scroll' element is added to 'ion-content'

          this.initStyles();
          this.scrollArea.ionScroll.subscribe(function (scrollEvent) {
            var delta = scrollEvent.detail.deltaY;

            if (scrollEvent.detail.currentY === 0 && _this11.hidden) {
              _this11.show();
            } else if (!_this11.hidden && delta > _this11.triggerDistance) {
              _this11.hide();
            } else if (_this11.hidden && delta < -_this11.triggerDistance) {
              _this11.show();
            }
          });
        }
      }, {
        key: "initStyles",
        value: function initStyles() {
          var _this12 = this;

          this.domCtrl.write(function () {
            _this12.renderer.setStyle(_this12.element.nativeElement, 'transition', '0.3s linear');
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this13 = this;

          this.domCtrl.write(function () {
            _this13.renderer.setStyle(_this13.element.nativeElement, 'min-height', '80px');

            _this13.renderer.setStyle(_this13.element.nativeElement, 'height', '80px');

            _this13.renderer.setStyle(_this13.element.nativeElement, 'opacity', '0.4');

            _this13.renderer.setStyle(_this13.element.nativeElement, 'padding', '0');
          });
          this.hidden = true;
        }
      }, {
        key: "show",
        value: function show() {
          var _this14 = this;

          this.domCtrl.write(function () {
            _this14.renderer.setStyle(_this14.element.nativeElement, 'height', '230px');

            _this14.renderer.removeStyle(_this14.element.nativeElement, 'opacity');

            _this14.renderer.removeStyle(_this14.element.nativeElement, 'min-height');

            _this14.renderer.removeStyle(_this14.element.nativeElement, 'padding');
          });
          this.hidden = false;
        }
      }]);

      return ExpandableHeaderDirective;
    }();

    ExpandableHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myScrollVanish')], ExpandableHeaderDirective.prototype, "scrollArea", void 0);
    ExpandableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[myScrollVanish]'
    })], ExpandableHeaderDirective);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map