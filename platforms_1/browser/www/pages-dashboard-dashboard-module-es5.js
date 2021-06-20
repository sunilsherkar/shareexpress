function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n    <div class=\"page\">\r\n        <div class=\"marvel-device nexus5\">\r\n            <div class=\"top-bar\"></div>\r\n            <div class=\"sleep\"></div>\r\n            <div class=\"volume\"></div>\r\n            <div class=\"camera\"></div>\r\n            <div class=\"screen\">\r\n                <div class=\"screen-container\">\r\n                    <div class=\"status-bar\">\r\n                        <div class=\"time\"></div>\r\n                        <div class=\"battery\">\r\n                            <i class=\"zmdi zmdi-battery\"></i>\r\n                        </div>\r\n                        <div class=\"network\">\r\n                            <i class=\"zmdi zmdi-network\"></i>\r\n                        </div>\r\n                        <div class=\"wifi\">\r\n                            <i class=\"zmdi zmdi-wifi-alt-2\"></i>\r\n                        </div>\r\n                        <div class=\"star\">\r\n                            <i class=\"zmdi zmdi-star\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat\">\r\n                        <div class=\"chat-container\">\r\n                            <div class=\"user-bar\">\r\n                                \r\n                                    <ion-segment scrollable (ionChange)=\"segmentChanged($event)\" value=\"1\">\r\n                                        <ion-segment-button value=\"1\">\r\n                                            <ion-label>Popular</ion-label>\r\n                                        </ion-segment-button>\r\n                                        <ion-segment-button value=\"2\">\r\n                                            <ion-label>Following</ion-label>\r\n                                        </ion-segment-button>\r\n                                        <ion-segment-button value=\"3\">\r\n                                            <ion-label>Fun</ion-label>\r\n                                        </ion-segment-button>\r\n                                    </ion-segment>\r\n\r\n\r\n                                \r\n                                <!--<div class=\"\">\r\n        <ion-icon name=\"arrow-back-outline\" (click)=\"close()\"></ion-icon>\r\n\r\n    </div>\r\n    <div class=\"avatar\">\r\n           <img src=\"\" alt=\"Avatar\">\r\n    </div>\r\n    <div class=\"name\">\r\n        <span>My Post</span>\r\n        <span class=\"status\">online</span>\r\n    </div>\r\n    <div class=\"actions more\">\r\n        <ion-icon name=\"close\" (click)=\"close()\"></ion-icon>\r\n    </div>\r\n    <div class=\"actions attachment\">\r\n        <i class=\"zmdi zmdi-attachment-alt\"></i>\r\n    </div>\r\n    <div class=\"actions\">\r\n        <i class=\"zmdi zmdi-phone\"></i>\r\n    </div>-->\r\n                            </div>\r\n                            <div class=\"conversation\">\r\n                                <div class=\"conversation-container\">\r\n\r\n                                    <div id=\"first\">\r\n                                        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh1($event)\">\r\n                                            <ion-refresher-content></ion-refresher-content>\r\n                                        </ion-refresher>\r\n\r\n                                        <ion-card *ngFor=\"let f of cloudFiles1\">\r\n                                            <ion-item (click)=\"ShowProfile(f.UserID)\">\r\n                                                <ion-avatar item-start>\r\n                                                    <img src=\"{{f.UploadUserProfilePath}}\" />\r\n\r\n                                                </ion-avatar>\r\n                                                <span style=\"margin-left: 10px\"> {{f.UploadUserName}}  </span>\r\n                                            </ion-item>\r\n                                            <ion-card-content>\r\n                                                <p>Life.</p>\r\n                                                <div class=\"container\">\r\n                                                    <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n                                                    src=\"{{f.FilePath}}\" (click)=\"CommentLoad(f)\" />\r\n                                                    <img *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\" class=\"img-responsive\" (click)=\"ShowVideos(f,cloudFiles1)\" />\r\n                                                    <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n                                                        <ion-icon class=\"icon\" name=\"play-circle-outline\" (click)=\"ShowVideos(f,cloudFiles1)\"></ion-icon>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-card-content>\r\n                                            <ion-row>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button (click)=\"whatsappShare(f.UploadID,f.FileName,f.FilePath)\">\r\n                                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isShareStart\">\r\n                                                        </ion-spinner>\r\n                                                        <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\"\r\n                                                                  [ngClass]=\"{'green': f.isShare == true}\">\r\n                                                        </ion-icon>\r\n                                                        Share\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button>\r\n                                                        <ion-icon name=\"happy-outline\"\r\n                                                                  [ngClass]=\"{'green': f.isLike == true}\"\r\n                                                                  (click)=\"like(f.UploadID,false,true,false)\"></ion-icon>\r\n                                                        Like\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button>\r\n                                                        <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"></ion-icon>  Comments\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button (click)=\"download(f.UploadID,f.name,f.FilePath)\">\r\n                                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isDownloadStart\">\r\n                                                        </ion-spinner>\r\n                                                        <ion-icon name=\"cloud-download-outline\" *ngIf=\"!f.isDownloadStart\" [ngClass]=\"{'green': f.isDownload == true}\"></ion-icon>\r\n                                                        Download\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-card>\r\n                                        <div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"second\">\r\n                                        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh2($event)\">\r\n                                            <ion-refresher-content></ion-refresher-content>\r\n                                        </ion-refresher>\r\n                                        <ion-card *ngFor=\"let f of cloudFiles2\">\r\n                                            <ion-item (click)=\"ShowProfile(f.UserID)\">\r\n                                                <ion-avatar item-start>\r\n                                                    <img src=\"{{f.UploadUserProfilePath}}\" />\r\n                                                </ion-avatar>\r\n                                                <span style=\"margin-left: 10px\"> {{f.UploadUserName}} </span>\r\n                                            </ion-item>\r\n                                            <ion-card-content>\r\n                                                <p>Life.</p>\r\n                                                <div class=\"container\">\r\n                                                    <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n                                                    src=\"{{f.FilePath}}\" (click)=\"CommentLoad(f)\" />\r\n                                                    <img *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\" class=\"img-responsive\" (click)=\"ShowVideos(f,cloudFiles2)\" />\r\n                                                    <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n                                                        <ion-icon class=\"icon\" name=\"play-circle-outline\" (click)=\"ShowVideos(f,cloudFiles2)\"></ion-icon>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-card-content>\r\n                                            <ion-row>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button (click)=\"whatsappShare(f.UploadID,f.FileName,f.FilePath)\">\r\n                                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isShareStart\">\r\n                                                        </ion-spinner>\r\n                                                        <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\"\r\n                                                                  [ngClass]=\"{'green': f.isShare == true}\">\r\n                                                        </ion-icon>\r\n                                                        Share\r\n                                                    </ion-tab-button>\r\n\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button>\r\n                                                        <ion-icon name=\"happy-outline\"\r\n                                                                  [ngClass]=\"{'green': f.isLike == true}\"\r\n                                                                  (click)=\"like(f.UploadID,false,true,false)\"></ion-icon>\r\n                                                        Like\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button>\r\n                                                        <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"></ion-icon>  Comments\r\n                                                    </ion-tab-button>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <ion-tab-button (click)=\"download(f.UploadID,f.name,f.FilePath)\">\r\n                                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isDownloadStart\">\r\n                                                        </ion-spinner>\r\n                                                        <ion-icon name=\"cloud-download-outline\" *ngIf=\"!f.isDownloadStart\" [ngClass]=\"{'green': f.isDownload == true}\"></ion-icon>\r\n                                                        Download\r\n                                                    </ion-tab-button>\r\n\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-card>\r\n                                        <div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"third\">\r\n                                        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh3($event)\">\r\n                                            <ion-refresher-content></ion-refresher-content>\r\n                                        </ion-refresher>\r\n                                        <ion-card *ngFor=\"let f of cloudFiles3\">\r\n                                        <ion-item >\r\n                                        <ion-avatar item-start (click)=\"ShowProfile(f.UserID)\">\r\n                                        <img src=\"{{f.UploadUserProfilePath}}\" />\r\n                                        </ion-avatar>\r\n                                        <span style=\"margin-left: 10px\"> {{f.UploadUserName}}  </span>\r\n                                         <ion-tab-button (click)=\"AddFilterEffect(f)\">\r\n                                       \r\n                                        <ion-icon name=\"cloud-download-outline\"  ></ion-icon>\r\n                                       <!--  Download -->\r\n                                        </ion-tab-button>\r\n                                        </ion-item>\r\n\r\n\r\n                                        <ion-card-content>\r\n                                        <p>Life.</p>\r\n                                        \r\n                                        <div class=\"container\">\r\n                                        <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n                                        src=\"{{f.FilePath}}\" (click)=\"CommentLoad(f)\" />\r\n                                        <img *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\" class=\"img-responsive\" (click)=\"ShowVideos(f,cloudFiles3)\" />\r\n                                        <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n                                        <ion-icon class=\"icon\" name=\"play-circle-outline\" (click)=\"ShowVideos(f,cloudFiles3)\"></ion-icon>\r\n                                        </div>\r\n                                        </div>\r\n                                        </ion-card-content>\r\n                                        <ion-row>\r\n                                        <ion-col>\r\n                                        <ion-tab-button (click)=\"whatsappShare(f.UploadID,f.FileName,f.FilePath)\">\r\n                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isShareStart\">\r\n                                        </ion-spinner>\r\n                                        <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\"\r\n                                        [ngClass]=\"{'green': f.isShare == true }\">\r\n                                        </ion-icon>\r\n                                        Share\r\n                                        </ion-tab-button>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n\r\n                                        <ion-tab-button>\r\n                                        <ion-icon name=\"happy-outline\"\r\n                                        [ngClass]=\"{'green': f.isLike == true}\"\r\n                                        (click)=\"like(f.UploadID,false,true,false)\"></ion-icon>\r\n                                        Like\r\n                                        </ion-tab-button>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                        <ion-tab-button>\r\n                                        <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"></ion-icon>  Comments\r\n                                        </ion-tab-button>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                        <ion-tab-button (click)=\"download(f.UploadID,f.name,f.FilePath)\">\r\n                                        <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isDownloadStart\">\r\n                                        </ion-spinner>\r\n                                        <ion-icon name=\"cloud-download-outline\" *ngIf=\"!f.isDownloadStart\" [ngClass]=\"{'green': f.isDownload == true}\"></ion-icon>\r\n                                        Download\r\n                                        </ion-tab-button>\r\n\r\n                                        </ion-col>\r\n                                        </ion-row>\r\n                                        </ion-card>\r\n                                        <div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n\r\n\r\n\r\n                                </div>\r\n                                <!--<form class=\"conversation-compose\">\r\n\r\n                                </form>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n\r\n    <ion-toolbar>\r\n        <ion-tab-button tab=\"about\" slot=\"start\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" routerLink=\"Capture\">\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n            <ion-label>Capture</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" routerLink=\"profile\" slot=\"end\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>Setting</ion-label>\r\n        </ion-tab-button>\r\n    </ion-toolbar>\r\n</ion-footer> ";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }, {
      path: 'Capture',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~home-home-module~pages-chat-chat-module~pages-dashboard-dashboard-module~pages-dashboard-hom~2713fb20"), __webpack_require__.e("default~home-home-module~pages-dashboard-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/pages/dashboard/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/pages/dashboard/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'main-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | main-list-main-list-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./main-list/main-list.module */
        "./src/app/pages/dashboard/main-list/main-list.module.ts")).then(function (m) {
          return m.MainListPageModule;
        });
      }
    }, {
      path: 'thumbnail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | thumbnail-thumbnail-module */
        "default~pages-dashboard-thumbnail-thumbnail-module~thumbnail-thumbnail-module").then(__webpack_require__.bind(null,
        /*! ./thumbnail/thumbnail.module */
        "./src/app/pages/dashboard/thumbnail/thumbnail.module.ts")).then(function (m) {
          return m.ThumbnailPageModule;
        });
      }
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment-button {\n  color: white;\n}\n\n.Show {\n  display: block;\n}\n\n.Hide {\n  display: none;\n}\n\n.ionButton {\n  height: 30px;\n  width: 80px;\n  font-size: 0.8em;\n  background-color: transparent;\n  -webkit-text-fill-color: white;\n}\n\n.mainContent {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n\n.mainContent span {\n  position: relative;\n  top: 50%;\n}\n\n.top-overlay-visible {\n  height: 20%;\n  width: 100%;\n  left: 0;\n  margin-left: 0%;\n  /* background-color: #4e4949; */\n  background: linear-gradient(to top, transparent 0%, black 100%);\n  background: -o-linear-gradient(to top, transparent 0%, black 100%);\n  position: fixed;\n  z-index: 20;\n}\n\n.bottom-overlay-visible {\n  height: 20%;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  margin-bottom: 0%;\n  margin-left: 0%;\n  background: linear-gradient(to bottom, transparent 0%, black);\n  background: -o-linear-gradient(to bottom, transparent 0%, black);\n  position: fixed;\n}\n\n.topOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  top: 80px;\n  text-align: center;\n  color: #6434c1;\n}\n\n.topOverlayElements span {\n  font-size: 1.5em;\n}\n\n.heart1 {\n  display: inline-block;\n  position: fixed;\n  width: 20%;\n  font-size: 2em;\n  line-height: 1em;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.heart1 span {\n  font-size: 1.5em;\n}\n\n.heart {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 220px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.download {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 290px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeVideo {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 1em;\n  top: 20px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.share {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 360px;\n  left: 140px;\n  text-align: center;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n\n.back {\n  display: inline-block;\n  position: fixed;\n  font-size: 2em;\n  line-height: 2em;\n  top: 20px;\n  left: 2px;\n  text-align: left;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n\n.bottomOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  bottom: 20px;\n  text-align: center;\n  color: white;\n}\n\n.bottomOverlayElements span {\n  font-size: 1.5em;\n}\n\n.top-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bottom-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.closeFab {\n  display: inline-block;\n  position: fixed;\n  width: 15px;\n  height: 15px;\n  font-size: 2em;\n  line-height: 1em;\n  top: 10px;\n  left: 140px;\n  text-align: r;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeFab span {\n  font-size: 1.5em;\n}\n\n.Fullpage {\n  height: 80%;\n}\n\n.List {\n  max-height: 90%;\n}\n\nion-tabs {\n  height: 10% !important;\n  top: 90%;\n}\n\n.item-block {\n  height: auto;\n}\n\n.item-ios.item-block .item-inner {\n  height: auto;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n/* new  */\n\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  background-color: transparent;\n}\n\n.icon {\n  color: white;\n  font-size: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.fa-user:hover {\n  color: #eee;\n}\n\n.green {\n  color: green;\n}\n\n.white {\n  color: white;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  height: 100vh;\n  background: linear-gradient(135deg, #121721, #000);\n  font: 1em verdana, sans-serif;\n}\n\n/* new css */\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #092503;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\n/* Conversation */\n\n.conversation {\n  height: calc(100% - 12px);\n  position: relative;\n  background: #efe7dd url(\"/assets/pattern.svg\") repeat;\n  z-index: 0;\n}\n\n.conversation ::-webkit-scrollbar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 5px;\n  height: 1px;\n  z-index: 10;\n}\n\n.conversation ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.conversation ::-webkit-scrollbar-thumb {\n  background: #b3ada7;\n}\n\n.conversation .conversation-container {\n  height: calc(100% - 68px);\n  box-shadow: inset 0 10px 10px -10px #000000;\n  overflow-x: hidden;\n  padding: 0 0;\n  margin-bottom: 5px;\n}\n\n.conversation .conversation-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Messages */\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1;\n}\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.metadata {\n  display: inline-block;\n  float: right;\n  padding: 0 0 0 7px;\n  position: relative;\n  bottom: -4px;\n}\n\n.metadata .time {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 11px;\n  display: inline-block;\n}\n\n.metadata .tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.metadata .tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.metadata .tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.metadata .tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.metadata .tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.metadata .tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\n.message:first-child {\n  margin: 16px 0 8px;\n}\n\n.message.received {\n  background: #fff;\n  border-radius: 0px 5px 5px 5px;\n  float: left;\n}\n\n.message.received .metadata {\n  padding: 0 0 0 16px;\n}\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right;\n}\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n}\n\n/* Compose */\n\n.conversation-compose {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  z-index: 2;\n}\n\n.conversation-compose div,\n.conversation-compose ion-input {\n  background: #fff;\n  height: 100%;\n}\n\n.conversation-compose .emoji {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 5px 0 0 5px;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  width: 48px;\n}\n\n.conversation-compose .input-msg {\n  border: 0;\n  flex: 1 1 auto;\n  font-size: 16px;\n  margin: 0;\n  outline: none;\n  min-width: 50px;\n}\n\n.conversation-compose .photo {\n  flex: 0 0 auto;\n  border-radius: 0 0 5px 0;\n  text-align: center;\n  position: relative;\n  width: 48px;\n}\n\n.conversation-compose .photo:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  border-style: solid;\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 0;\n  right: -10px;\n}\n\n.conversation-compose .photo i {\n  display: block;\n  color: #6d7e39;\n  /* color: #7d8488; */\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n\n.conversation-compose .send {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding: 0;\n  position: relative;\n  outline: none;\n}\n\n.conversation-compose .send .circle {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.conversation-compose .send .circle i {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n/* Small Screens */\n\n@media (max-width: 768px) {\n  .marvel-device.nexus5 {\n    border-radius: 0;\n    flex: none;\n    padding: 0;\n    max-width: none;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n\n  .marvel-device > .screen .chat {\n    visibility: visible;\n  }\n\n  .marvel-device {\n    visibility: hidden;\n  }\n\n  .marvel-device .status-bar {\n    display: none;\n  }\n\n  .screen-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .conversation {\n    height: calc(100vh - 55px);\n  }\n\n  .conversation .conversation-container {\n    height: calc(100vh - 120px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxJb25pYyBQcm9qZWN0XFxTaGFyZUV4cHJlc3NcXFNoYXJlRXhwcmVzcy9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQyxZQUFBO0FDQUY7O0FERUE7RUFDQyxjQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxhQUFBO0FDRUQ7O0FERUM7RUFFTyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0FSOztBREVJO0VBRUssWUFBQTtFQUNELFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FEQ1E7RUFFSSxrQkFBQTtFQUNBLFFBQUE7QUNBWjs7QURHSTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBRUEsT0FBQTtFQUNBLGVBQUE7RUFFRiwrQkFBQTtFQUNFLCtEQUFBO0VBR0Esa0VBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hOOztBREtJO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZEQUFBO0VBR0EsZ0VBQUE7RUFDQSxlQUFBO0FDSE47O0FES0k7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0hOOztBRElNO0VBRUUsZ0JBQUE7QUNIUjs7QURNSztFQUVDLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtFQUNBLFlBQUE7RUFLQSxlQUFBO0VBQ0EsV0FBQTtB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QkFBQTtFQUNBLHVCQUFBO0FDdkNGOztBRDBDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ3ZDRjs7QUQwQ0Esa0JBQUE7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ3hDRjs7RUQyQ0E7SUFDRSxtQkFBQTtFQ3hDRjs7RUQyQ0E7SUFDRSxrQkFBQTtFQ3hDRjs7RUQyQ0E7SUFDRSxhQUFBO0VDeENGOztFRDJDQTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtFQ3hDRjs7RUQyQ0E7SUFDRSwwQkFBQTtFQ3hDRjs7RUQwQ0E7SUFDRSwyQkFBQTtFQ3ZDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLXNlZ21lbnQtYnV0dG9uXHJcbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG4uU2hvdyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkhpZGV7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbiAuaW9uQnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLm1haW5Db250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHNwYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRvcC1vdmVybGF5LXZpc2libGVcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OjIwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgXHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSA7XHJcbiAgICBcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0ZTQ5NDk7ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7ICBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIC5ib3R0b20tb3ZlcmxheS12aXNpYmxlXHJcbiAgICB7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCUgO1xyXG4gICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcbiAgICAudG9wT3ZlcmxheUVsZW1lbnRzXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRvcDo4MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNjQzNGMxO1xyXG4gICAgICBzcGFuXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgLmhlYXJ0MVxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH0gXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFydCBcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgdG9wOjIyMHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kb3dubG9hZFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjkwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZVZpZGVvXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRvcDoyMHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgIC5zaGFyZVxyXG4gICAgICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgdG9wOjM2MHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgIH1cclxuIC5iYWNrXHJcbiAgICAgICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgIFxyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgdG9wOjIwcHg7XHJcbiAgICAgIGxlZnQ6MnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbU92ZXJsYXlFbGVtZW50c1xyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBzcGFuXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLW92ZXJsYXktaGlkZGVuXHJcbiAgICB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5ib3R0b20tb3ZlcmxheS1oaWRkZW5cclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiBcclxuXHJcbiAuY2xvc2VGYWJcclxue1xyXG5cdCAgIFxyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRvcDoxMHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH0gXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICBcclxufVxyXG5cclxuLkZ1bGxwYWdlXHJcbntcclxuXHRoZWlnaHQ6ODAlO1xyXG59XHJcbi5MaXN0XHJcbntcclxuXHRtYXgtaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbmlvbi10YWJzXHJcbntcclxuXHRoZWlnaHQ6IDEwJSFpbXBvcnRhbnQ7XHJcblx0dG9wOjkwJTtcclxufVxyXG4gXHJcbiAuaXRlbS1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIG5ldyAgKi9cclxuLm92ZXJsYXkxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAxO1xyXG4gLy8gdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIFxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmEtdXNlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuIFxyXG4gLmdyZWVuXHJcbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gfVxyXG4gLndoaXRlXHJcbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG4gXHJcbiBcclxuIGJvZHkge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEyMTcyMSwgIzAwMCk7XHJcbiAgZm9udDogMWVtIHZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiAgIFxyXG5cclxuIFxyXG4vKiBuZXcgY3NzICovXHJcbiBcclxuXHJcbiAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcnZlbC1kZXZpY2UgLnNjcmVlbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNjcmVlbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhciAqL1xyXG5cclxuLnN0YXR1cy1iYXIge1xyXG4gIGhlaWdodDogMjVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDA0ZTQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAwIDhweDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyIGRpdiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogQ2hhdCAqL1xyXG5cclxuLmNoYXQge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjlweCk7XHJcbn1cclxuXHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBVc2VyIEJhciAqL1xyXG5cclxuLnVzZXItYmFyIHtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYmFja2dyb3VuZDogIzA5MjUwMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51c2VyLWJhcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnVzZXItYmFyIGRpdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxufVxyXG5cclxuLnVzZXItYmFyIC5hY3Rpb25zIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMubW9yZSB7XHJcbiAgbWFyZ2luOiAwIDEycHggMCAzMnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCB7XHJcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCBpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciB7XHJcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLmF2YXRhciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVzZXItYmFyIC5uYW1lIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiBDb252ZXJzYXRpb24gKi9cclxuXHJcbi5jb252ZXJzYXRpb24ge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBiYWNrZ3JvdW5kOiAjZWZlN2RkIHVybChcIi9hc3NldHMvcGF0dGVybi5zdmdcIikgcmVwZWF0O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNiM2FkYTc7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDEwcHggLTEwcHggIzAwMDAwMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogTWVzc2FnZXMgKi9cclxuXHJcbi5tZXNzYWdlIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBjbGVhcjogYm90aDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIG1heC13aWR0aDogODUlO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1lc3NhZ2U6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4ubWV0YWRhdGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC00cHg7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGltZSB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQ1KTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayBzdmc6Zmlyc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxufVxyXG5cclxuLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMTZweCAwIDhweDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmVjZWl2ZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yZWNlaXZlZCAubWV0YWRhdGEge1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJlY2VpdmVkOmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAxMHB4IDEwcHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5zZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZTFmZmM3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggNXB4IDVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2UxZmZjNztcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4vKiBDb21wb3NlICovXHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGRpdixcclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuZW1vamkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmlucHV0LW1zZyB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8ge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvOmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG8gaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM2ZDdlMzk7XHJcbiAgLyogY29sb3I6ICM3ZDg0ODg7ICovXHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA4YTdjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIC5jaXJjbGUgaSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8qIFNtYWxsIFNjcmVlbnMgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYXJ2ZWwtZGV2aWNlLm5leHVzNSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSA+IC5zY3JlZW4gLmNoYXQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC5tYXJ2ZWwtZGV2aWNlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5tYXJ2ZWwtZGV2aWNlIC5zdGF0dXMtYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuY29udmVyc2F0aW9uIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xyXG4gIH1cclxuICAuY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcclxuICB9XHJcbn0iLCJpb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5TaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5IaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlvbkJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYWluQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluQ29udGVudCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbn1cblxuLnRvcC1vdmVybGF5LXZpc2libGUge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRlNDk0OTsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmJvdHRvbS1vdmVybGF5LXZpc2libGUge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4udG9wT3ZlcmxheUVsZW1lbnRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdG9wOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjQzNGMxO1xufVxuLnRvcE92ZXJsYXlFbGVtZW50cyBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmhlYXJ0MSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjAlO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG59XG4uaGVhcnQxIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaGVhcnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDIyMHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG59XG5cbi5kb3dubG9hZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHRvcDogMjkwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNsb3NlVmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLnNoYXJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdG9wOiAzNjBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvdHRvbU92ZXJsYXlFbGVtZW50cyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYm90dG9tT3ZlcmxheUVsZW1lbnRzIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4udG9wLW92ZXJsYXktaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYm90dG9tLW92ZXJsYXktaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2xvc2VGYWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IHI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cbi5jbG9zZUZhYiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLkZ1bGxwYWdlIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5MaXN0IHtcbiAgbWF4LWhlaWdodDogOTAlO1xufVxuXG5pb24tdGFicyB7XG4gIGhlaWdodDogMTAlICFpbXBvcnRhbnQ7XG4gIHRvcDogOTAlO1xufVxuXG4uaXRlbS1ibG9jayB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogbmV3ICAqL1xuLm92ZXJsYXkxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhLXVzZXI6aG92ZXIge1xuICBjb2xvcjogI2VlZTtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTIxNzIxLCAjMDAwKTtcbiAgZm9udDogMWVtIHZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi8qIG5ldyBjc3MgKi9cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hcnZlbC1kZXZpY2UgLnNjcmVlbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zY3JlZW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTdGF0dXMgQmFyICovXG4uc3RhdHVzLWJhciB7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogIzAwNGU0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5zdGF0dXMtYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc3RhdHVzLWJhciBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIENoYXQgKi9cbi5jaGF0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcbn1cblxuLmNoYXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBVc2VyIEJhciAqL1xuLnVzZXItYmFyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udXNlci1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi51c2VyLWJhciBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zLm1vcmUge1xuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi51c2VyLWJhciAuYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItYmFyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBtYXJnaW46IDAgMCAwIDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4udXNlci1iYXIgLnN0YXR1cyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBDb252ZXJzYXRpb24gKi9cbi5jb252ZXJzYXRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiL2Fzc2V0cy9wYXR0ZXJuLnN2Z1wiKSByZXBlYXQ7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYjNhZGE3O1xufVxuXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDEwcHggLTEwcHggIzAwMDAwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogTWVzc2FnZXMgKi9cbi5tZXNzYWdlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGNsZWFyOiBib3RoO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tZXNzYWdlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWV0YWRhdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTRweDtcbn1cblxuLm1ldGFkYXRhIC50aW1lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmc6Zmlyc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG59XG5cbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xufVxuXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbn1cblxuLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDE2cHggMCA4cHg7XG59XG5cbi5tZXNzYWdlLnJlY2VpdmVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQgLm1ldGFkYXRhIHtcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4IDEwcHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ubWVzc2FnZS5zZW50IHtcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFmZmM3O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLyogQ29tcG9zZSAqL1xuLmNvbnZlcnNhdGlvbi1jb21wb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgZGl2LFxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5lbW9qaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5pbnB1dC1tc2cge1xuICBib3JkZXI6IDA7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmQ3ZTM5O1xuICAvKiBjb2xvcjogIzdkODQ4ODsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMwMDhhN2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIFNtYWxsIFNjcmVlbnMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFydmVsLWRldmljZS5uZXh1czUge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlID4gLnNjcmVlbiAuY2hhdCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFydmVsLWRldmljZSAuc3RhdHVzLWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zY3JlZW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLmNvbnZlcnNhdGlvbiB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XG4gIH1cblxuICAuY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/File/ngx */
    "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/pages/service/authentication.service.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/downloader/ngx */
    "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../pages/chat/chat.page */
    "./src/app/pages/chat/chat.page.ts");
    /* harmony import */


    var _pages_dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../pages/dashboard/main-list/main-list.page */
    "./src/app/pages/dashboard/main-list/main-list.page.ts");
    /* harmony import */


    var _pages_effect_effect_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../pages/effect/effect.page */
    "./src/app/pages/effect/effect.page.ts");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(plt, alertCtrl, fileOpener, router, route, toastCtrl, api, file, storage, fileChooser, database, socialSharing, downloader, filePathobject, base64, httpClient, http, modal) {
        _classCallCheck(this, DashboardPage);

        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.file = file;
        this.storage = storage;
        this.fileChooser = fileChooser;
        this.database = database;
        this.socialSharing = socialSharing;
        this.downloader = downloader;
        this.filePathobject = filePathobject;
        this.base64 = base64;
        this.httpClient = httpClient;
        this.http = http;
        this.modal = modal;
        this.apiKey = '';
        this.cloudFiles1 = [];
        this.cloudFiles2 = [];
        this.cloudFiles3 = [];
        this.FileName = "";
        this.FilePath = "";
        this.isDownloadStart = false;
        this.isDownload = false;
        this.isShareStart = false;
        this.isShare = false;
        this.isLike = false;
        this.green = "green";
        this.Current = 1;
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.api.checkToken();
          this.GetMedisList1();
          this.GetMedisList2();
          this.GetMedisList3();
          this.Current = 1;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.api.checkToken();
        }
      }, {
        key: "GetMedisList1",
        value: function GetMedisList1() {
          var _this = this;

          var data = 'id=' + this.api.UserID + '&CategoryID=1&isSelf=0';
          var url = this.api.baseUrl + "Media?" + data;
          this.ResultData = this.httpClient.get(url);
          this.ResultData.subscribe(function (data) {
            _this.cloudFiles1 = data;
          });
        }
      }, {
        key: "GetMedisList2",
        value: function GetMedisList2() {
          var _this2 = this;

          var data = 'id=' + this.api.UserID + '&CategoryID=2&isSelf=0';
          var url = this.api.baseUrl + "Media?" + data;
          this.ResultData = this.httpClient.get(url);
          this.ResultData.subscribe(function (data) {
            _this2.cloudFiles2 = data;
          });
        }
      }, {
        key: "GetMedisList3",
        value: function GetMedisList3() {
          var _this3 = this;

          var data = 'id=' + this.api.UserID + '&CategoryID=3&isSelf=0';
          var url = this.api.baseUrl + "Media?" + data;
          this.ResultData = this.httpClient.get(url);
          this.ResultData.subscribe(function (data) {
            _this3.cloudFiles3 = data;
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          if (ev.detail.value == 1) {
            this.Current = 1;
            document.getElementById("first").style.display = "block";
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "none";
          }

          if (ev.detail.value == 2) {
            this.Current = 2;
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "block";
            document.getElementById("third").style.display = "none";
          }

          if (ev.detail.value == 3) {
            this.Current = 3;
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "block";
          }
        }
      }, {
        key: "download1",
        value: function download1() {
          this.download(this.UploadID, this.FileName, this.FilePath);
        }
      }, {
        key: "download",
        value: function download(UploadID, fileName, FilePath) {
          var _this4 = this;

          this.UploadID = UploadID;
          this.FilePath = FilePath;
          this.getcurrentFiles("Curindex");
          this.Downloadloader(true);
          this.isDownloadStart = true;
          var request = {
            uri: FilePath,
            title: 'ShareExpress Download',
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileName
            }
          };
          this.downloader.download(request).then(function (location) {
            //alert('File downloaded at:'+location);
            _this4.like(_this4.UploadID, false, false, true);

            _this4.Downloadloader(false);

            _this4.isDownloadStart = false;
          })["catch"](function (error) {
            console.log(error);
            alert(error);

            _this4.Downloadloader(false);
          });
        }
      }, {
        key: "whatsappShare1",
        value: function whatsappShare1() {
          this.isShareStart = true;
          this.getcurrentFiles("FilePath");
          this.getcurrentFiles("FileName");
          this.whatsappShare(this.UploadID, this.FileName, this.FilePath);
        }
      }, {
        key: "whatsappShare",
        value: function whatsappShare(UploadID, fileNames, filePath) {
          var _this5 = this;

          this.UploadID = UploadID;
          this.getcurrentFiles("Curindex");
          this.Shareloader(true);
          var request = {
            uri: filePath,
            title: 'ShareExpress Download',
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileNames
            }
          };
          this.downloader.download(request).then(function (location) {
            _this5.toBaseImg(location);
          })["catch"](function (error) {
            alert(error);

            _this5.Shareloader(false);

            _this5.isShareStart = false;
          });
        }
      }, {
        key: "toBaseImg",
        value: function toBaseImg(location) {
          var _this6 = this;

          var New = "data:video/mp4;base64";
          this.filePathobject.resolveNativePath(location).then(function (nativepath) {
            _this6.base64.encodeFile(nativepath).then(function (base64File) {
              var str = base64File.split(',');
              var headerString = str[0];
              _this6.thumbnailData = base64File.replace(headerString, New);

              _this6.Shareloader(false);

              _this6.isShareStart = false;

              _this6.socialSharing.shareViaWhatsApp("", _this6.thumbnailData, null).then(function () {
                _this6.like(_this6.UploadID, true, false, false);
              })["catch"](function (error) {
                alert(error);

                _this6.Shareloader(false);
              });
            })["catch"](function (error) {
              alert(error);

              _this6.Shareloader(false);
            });
          })["catch"](function (error) {
            alert(error);

            _this6.Shareloader(false);
          });
        }
      }, {
        key: "like1",
        value: function like1(isShare, isLike, isDownload) {
          this.like(this.UploadID, isShare, isLike, isDownload);
        }
      }, {
        key: "like",
        value: function like(UploadID, isShare, isLike, isDownload) {
          var _this7 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var options = {
            headers: headers
          };
          var param = {
            "UploadID": UploadID,
            "ActionBy": this.api.UserID,
            "isLike": isLike,
            "IsDownload": isDownload,
            "isShare": isShare
          };
          var url = this.api.baseUrl + "Home/PostSaveLikes";
          this.http.post(url, param, {}).then(function (data) {
            var index = _this7.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == UploadID;
            });

            if (isLike == true) {
              var Arrlike = _this7.cloudFiles1[index]["isLike"];

              if (Arrlike == 0) {
                _this7.cloudFiles1[index].isLike = 1;
                _this7.isLike = true;
              } else {
                _this7.cloudFiles1[index].isLike = 0;
                _this7.isLike = false;
              }
            }

            if (isShare == true) {
              var ArrShare = _this7.cloudFiles1[index]["isShare"];

              if (ArrShare == 0) {
                _this7.cloudFiles1[index].isShare = 1;
                _this7.isShare = false;
              } else {
                _this7.cloudFiles1[index].isShare = 0;
                _this7.isShare = false;
              }
            }

            if (isDownload == true) {
              var ArrDownload = _this7.cloudFiles1[index]["isDownload"];

              if (ArrDownload == 0) {
                _this7.cloudFiles1[index].isDownload = 1;
                _this7.isDownload = false;
              } else {
                _this7.cloudFiles1[index].isDownload = 0;
                _this7.isDownload = false;
              }
            }

            console.log(data.status);
          })["catch"](function (error) {
            console.log(error.status);
          });
        }
      }, {
        key: "doRefresh1",
        value: function doRefresh1(event) {
          this.Current = 1;
          this.GetMedisList1();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "doRefresh2",
        value: function doRefresh2(event) {
          this.Current = 2;
          this.GetMedisList2();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "doRefresh3",
        value: function doRefresh3(event) {
          this.Current = 3;
          this.GetMedisList3();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "getcurrentFiles",
        value: function getcurrentFiles(fieldname) {
          var _this8 = this;

          if (this.Current == 1) {
            if (fieldname == "UploadID") {
              this.UploadID = this.cloudFiles1[this.Curindex].UploadID;
            } else if (fieldname == "FileName") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FileName = this.cloudFiles1[this.Curindex].FileName;
            } else if (fieldname == "ThumbPath") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.ThumbPath = this.cloudFiles1[this.Curindex].ThumbPath;
            } else if (fieldname == "Curindex") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
            } else if (fieldname == "FilePath") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FilePath = this.cloudFiles1[this.Curindex].FilePath;
            } else if (fieldname == "isDownload") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isDownload = this.cloudFiles1[this.Curindex].isDownload;
            } else if (fieldname == "isShare") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isShare = this.cloudFiles1[this.Curindex].isShare;
            } else if (fieldname == "isLike") {
              this.Curindex = this.cloudFiles1.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isLike = this.cloudFiles1[this.Curindex].isLike;
            }
          } else if (this.Current == 2) {
            if (fieldname == "UploadID") {
              this.UploadID = this.cloudFiles2[this.Curindex].UploadID;
            } else if (fieldname == "FileName") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FileName = this.cloudFiles2[this.Curindex].FileName;
            } else if (fieldname == "ThumbPath") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.ThumbPath = this.cloudFiles2[this.Curindex].ThumbPath;
            } else if (fieldname == "Curindex") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
            } else if (fieldname == "FilePath") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FilePath = this.cloudFiles2[this.Curindex].FilePath;
            } else if (fieldname == "isDownload") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isDownload = this.cloudFiles2[this.Curindex].isDownload;
            } else if (fieldname == "isShare") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isShare = this.cloudFiles2[this.Curindex].isShare;
            } else if (fieldname == "isLike") {
              this.Curindex = this.cloudFiles2.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isLike = this.cloudFiles2[this.Curindex].isLike;
            }
          } else if (this.Current == 3) {
            if (fieldname == "UploadID") {
              this.UploadID = this.cloudFiles3[this.Curindex].UploadID;
            } else if (fieldname == "FileName") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FileName = this.cloudFiles3[this.Curindex].FileName;
            } else if (fieldname == "ThumbPath") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.ThumbPath = this.cloudFiles3[this.Curindex].ThumbPath;
            } else if (fieldname == "Curindex") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
            } else if (fieldname == "FilePath") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.FilePath = this.cloudFiles3[this.Curindex].FilePath;
            } else if (fieldname == "isDownload") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isDownload = this.cloudFiles3[this.Curindex].isDownload;
            } else if (fieldname == "isShare") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isShare = this.cloudFiles3[this.Curindex].isShare;
            } else if (fieldname == "isLike") {
              this.Curindex = this.cloudFiles3.findIndex(function (obj) {
                return obj.UploadID == _this8.UploadID;
              });
              this.isLike = this.cloudFiles3[this.Curindex].isLike;
            }
          }
        }
      }, {
        key: "Shareloader",
        value: function Shareloader(val) {
          if (this.Current == 1) {
            this.cloudFiles1[this.Curindex].isShareStart = val;
          } else if (this.Current == 2) {
            this.cloudFiles2[this.Curindex].isShareStart = val;
          } else if (this.Current == 3) {
            this.cloudFiles3[this.Curindex].isShareStart = val;
          }
        }
      }, {
        key: "Downloadloader",
        value: function Downloadloader(val) {
          if (this.Current == 1) {
            this.cloudFiles1[this.Curindex].isDownloadStart = val;
          } else if (this.Current == 2) {
            this.cloudFiles2[this.Curindex].isDownloadStart = val;
          } else if (this.Current == 3) {
            this.cloudFiles3[this.Curindex].isDownloadStart = val;
          }
        }
      }, {
        key: "ShowProfile",
        value: function ShowProfile(UserID) {
          this.api.ToUserID = UserID;
          this.router.navigate(['thumbnail']);
        }
      }, {
        key: "CommentLoad",
        value: function CommentLoad(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modal.create({
                      component: _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_16__["ChatPage"],
                      animated: true,
                      componentProps: data
                    }).then(function (modal) {
                      modal.present();
                      modal.onDidDismiss().then(function () {//this.getEmployeeList();
                      });
                    });

                  case 2:
                    modal = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ShowVideos",
        value: function ShowVideos(data, list) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.api.CurrentDatalist = list;
                    this.api.UploadID = data.UploadID;
                    _context2.next = 4;
                    return this.modal.create({
                      component: _pages_dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_17__["MainListPage"],
                      animated: true,
                      componentProps: list
                    }).then(function (modal) {
                      modal.present();
                      modal.onDidDismiss().then(function () {//this.getEmployeeList();
                      });
                    });

                  case 4:
                    modal = _context2.sent;

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "RedirectCapture",
        value: function RedirectCapture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['home']);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "RedirectProfile",
        value: function RedirectProfile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.router.navigate(['profile']);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "AddFilterEffect",
        value: function AddFilterEffect(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modal.create({
                      component: _pages_effect_effect_page__WEBPACK_IMPORTED_MODULE_18__["EffectPage"],
                      animated: true,
                      componentProps: data
                    }).then(function (modal) {
                      modal.present();
                      modal.onDidDismiss().then(function () {//this.getEmployeeList();
                      });
                    });

                  case 2:
                    modal = _context5.sent;

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]
      }, {
        type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]
      }, {
        type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_11__["Downloader"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__["Base64"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss"))["default"]]
    })], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map