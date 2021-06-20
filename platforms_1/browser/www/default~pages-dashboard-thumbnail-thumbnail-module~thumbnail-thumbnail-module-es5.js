function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-thumbnail-thumbnail-module~thumbnail-thumbnail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/thumbnail/thumbnail.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/thumbnail/thumbnail.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardThumbnailThumbnailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \r\n<!--<ion-content class=\"List\">\r\n   \r\n  <div id=\"first\" >\r\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh1($event)\">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n \r\n  <ion-card *ngFor=\"let f of cloudFiles1\"  > \r\n  <ion-item >\r\n    <ion-avatar item-start> \r\n          <img src=\"{{f.UploadUserProfilePath}}\" />\r\n    </ion-avatar>\r\n    <span style=\"margin-left: 10px\" > {{f.UploadUserName}}  </span> \r\n  </ion-item> \r\n  <ion-card-content> \r\n     <p>Life.</p> \r\n  <div class=\"container\" >\r\n <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n  src=\"{{f.FilePath}}\" (click)=\"CommentLoad(f)\"/>  \r\n  <img  *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\"  class=\"img-responsive\"  (click)=\"ShowVideos(f,cloudFiles1)\"/> \r\n  <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n    <ion-icon class=\"icon\" name=\"play-circle-outline\"  (click)=\"ShowVideos(f,cloudFiles1)\"></ion-icon>\r\n  </div>\r\n</div> \r\n  </ion-card-content> \r\n  <ion-row>\r\n    <ion-col> \r\n       <ion-tab-button (click)=\"whatsappShare(f.UploadID,f.FileName,f.FilePath)\" >\r\n          <ion-spinner name=\"crescent\" color=\"success\"  *ngIf=\"f.isShareStart\">  \r\n          </ion-spinner>\r\n            <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\" \r\n             [ngClass]=\"{'green': f.isShare == true}\" >\r\n            </ion-icon>  \r\n             <small>{{f.TotalShare}} share</small>\r\n          </ion-tab-button> \r\n          </ion-col>\r\n   <ion-col> \r\n<ion-tab-button>\r\n       <ion-icon name=\"happy-outline\"  \r\n          [ngClass]=\"{'green': f.isLike == true}\" \r\n          (click)=\"like(f.UploadID,false,true,false)\" ></ion-icon> \r\n               <small> {{f.TotalLikes}} likes </small>  \r\n            </ion-tab-button>   \r\n    </ion-col>\r\n    <ion-col>\r\n         <ion-tab-button> \r\n            <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"   ></ion-icon>  \r\n                 <small> {{f.TotalComments}} Comments </small>\r\n            </ion-tab-button> \r\n    </ion-col>\r\n     <ion-col>\r\n         <ion-tab-button  (click)=\"download(f.UploadID,f.name,f.FilePath)\" > \r\n          <ion-spinner name=\"crescent\" color=\"success\"  *ngIf=\"f.isDownloadStart\">  \r\n          </ion-spinner>\r\n            <ion-icon name=\"cloud-download-outline\" *ngIf=\"!f.isDownloadStart\" [ngClass]=\"{'green': f.isDownload == true}\" ></ion-icon>  \r\n             <small> {{f.TotalDownload}} save </small>\r\n        </ion-tab-button> \r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card>\r\n    <div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n </ion-content>  \r\n <ion-footer  > \r\n   \r\n <ion-toolbar> \r\n <ion-tab-button tab=\"about\" slot=\"start\" (click)=\"RedirectDashboard()\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button> \r\n     <ion-tab-button tab=\"about\"  (click)=\"RedirectCapture()\" >\r\n       <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n      <ion-label>Capture</ion-label>\r\n    </ion-tab-button>\r\n  <ion-tab-button tab=\"about\"   slot=\"end\" (click)=\"RedirectSetting()\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>Setting</ion-label>\r\n    </ion-tab-button> \r\n      </ion-toolbar> \r\n  </ion-footer>--> \r\n\r\n\r\n<ion-content>\r\n    <div class=\"page\">\r\n        <div class=\"marvel-device nexus5\">\r\n            <div class=\"top-bar\"></div>\r\n            <div class=\"sleep\"></div>\r\n            <div class=\"volume\"></div>\r\n            <div class=\"camera\"></div>\r\n            <div class=\"screen\">\r\n                <div class=\"screen-container\">\r\n                    <div class=\"status-bar\">\r\n                        <div class=\"time\"></div>\r\n                        <div class=\"battery\">\r\n                            <i class=\"zmdi zmdi-battery\"></i>\r\n                        </div>\r\n                        <div class=\"network\">\r\n                            <i class=\"zmdi zmdi-network\"></i>\r\n                        </div>\r\n                        <div class=\"wifi\">\r\n                            <i class=\"zmdi zmdi-wifi-alt-2\"></i>\r\n                        </div>\r\n                        <div class=\"star\">\r\n                            <i class=\"zmdi zmdi-star\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat\">\r\n                        <div class=\"chat-container\">\r\n                            <div class=\"user-bar\">\r\n                                <div class=\"avatar\">\r\n                                    <img src=\"{{ProfilePath}}\"  alt=\"...\"/> \r\n                                </div>\r\n                                <div class=\"name\">\r\n                                    <span>{{ProfileUserName}}</span>\r\n                                    <!--<span class=\"status\">online</span>-->\r\n                                </div>\r\n                                <div class=\"actions more\">\r\n                                    <ion-icon name=\"close\" (click)=\"RedirectDashboard()\"></ion-icon>\r\n                                </div>\r\n                                <div class=\"actions attachment\">\r\n                                    <i class=\"zmdi zmdi-attachment-alt\"></i>\r\n                                </div>\r\n                                <div class=\"actions\">\r\n                                    <i class=\"zmdi zmdi-phone\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"conversation\">\r\n                                <div class=\"conversation-container\">\r\n                                    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh1($event)\">\r\n                                        <ion-refresher-content></ion-refresher-content>\r\n                                    </ion-refresher>\r\n\r\n                                    <ion-card *ngFor=\"let f of cloudFiles1\">\r\n                                         \r\n                                        <ion-card-content>\r\n                                            <!--<p>Life.</p>-->\r\n                                            <div class=\"container\">\r\n                                                <img *ngIf=\"f.Extension == 'jpg' || f.Extension == 'jpeg'|| f.Extension == 'png'\"\r\n                                                     src=\"{{f.FilePath}}\" (click)=\"CommentLoad(f)\" />\r\n                                                <img *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \" src=\"{{f.ThumbPath}}\" class=\"img-responsive\" (click)=\"ShowVideos(f,cloudFiles1)\" />\r\n                                                <div class=\"overlay1\" *ngIf=\"f.Extension != 'jpg' && f.Extension != 'jpeg'&& f.Extension != 'png' \">\r\n                                                    <ion-icon class=\"icon\" name=\"play-circle-outline\" (click)=\"ShowVideos(f,cloudFiles1)\"></ion-icon>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ion-card-content>\r\n                                        <ion-row>\r\n                                            <ion-col>\r\n                                                <ion-tab-button (click)=\"whatsappShare(f.UploadID,f.FileName,f.FilePath)\">\r\n                                                    <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isShareStart\">\r\n                                                    </ion-spinner>\r\n                                                    <ion-icon class=\"share-icon\" name=\"logo-whatsapp\" *ngIf=\"!f.isShareStart\"\r\n                                                              [ngClass]=\"{'green': f.isShare == true}\">\r\n                                                    </ion-icon>\r\n                                                    <small>{{f.TotalShare}} share</small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-icon name=\"happy-outline\"\r\n                                                              [ngClass]=\"{'green': f.isLike == true}\"\r\n                                                              (click)=\"like(f.UploadID,false,true,false)\"></ion-icon>\r\n                                                    <small> {{f.TotalLikes}} likes </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button>\r\n                                                    <ion-icon name=\"document-text-outline\" (click)=\"CommentLoad(f)\"></ion-icon>\r\n                                                    <small> {{f.TotalComments}} Comments </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <ion-tab-button (click)=\"download(f.UploadID,f.name,f.FilePath)\">\r\n                                                    <ion-spinner name=\"crescent\" color=\"success\" *ngIf=\"f.isDownloadStart\">\r\n                                                    </ion-spinner>\r\n                                                    <ion-icon name=\"cloud-download-outline\" *ngIf=\"!f.isDownloadStart\" [ngClass]=\"{'green': f.isDownload == true}\"></ion-icon>\r\n                                                    <small> {{f.TotalDownload}} save </small>\r\n                                                </ion-tab-button>\r\n                                            </ion-col>\r\n                                        </ion-row>\r\n                                    </ion-card>\r\n                                </div>\r\n                                 \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n\r\n    <ion-toolbar>\r\n        <ion-tab-button tab=\"about\" slot=\"start\" (click)=\"RedirectDashboard()\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" (click)=\"RedirectCapture()\">\r\n            <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n            <ion-label>Capture</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about\" slot=\"end\" (click)=\"RedirectSetting()\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <ion-label>Setting</ion-label>\r\n        </ion-tab-button>\r\n    </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/thumbnail/thumbnail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/dashboard/thumbnail/thumbnail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ThumbnailPageRoutingModule */

  /***/
  function srcAppPagesDashboardThumbnailThumbnailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThumbnailPageRoutingModule", function () {
      return ThumbnailPageRoutingModule;
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


    var _thumbnail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./thumbnail.page */
    "./src/app/pages/dashboard/thumbnail/thumbnail.page.ts");

    var routes = [{
      path: '',
      component: _thumbnail_page__WEBPACK_IMPORTED_MODULE_3__["ThumbnailPage"]
    }];

    var ThumbnailPageRoutingModule = function ThumbnailPageRoutingModule() {
      _classCallCheck(this, ThumbnailPageRoutingModule);
    };

    ThumbnailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ThumbnailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/thumbnail/thumbnail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/thumbnail/thumbnail.module.ts ***!
    \***************************************************************/

  /*! exports provided: ThumbnailPageModule */

  /***/
  function srcAppPagesDashboardThumbnailThumbnailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThumbnailPageModule", function () {
      return ThumbnailPageModule;
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


    var _thumbnail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./thumbnail-routing.module */
    "./src/app/pages/dashboard/thumbnail/thumbnail-routing.module.ts");
    /* harmony import */


    var _thumbnail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thumbnail.page */
    "./src/app/pages/dashboard/thumbnail/thumbnail.page.ts");

    var ThumbnailPageModule = function ThumbnailPageModule() {
      _classCallCheck(this, ThumbnailPageModule);
    };

    ThumbnailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _thumbnail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThumbnailPageRoutingModule"]],
      declarations: [_thumbnail_page__WEBPACK_IMPORTED_MODULE_6__["ThumbnailPage"]]
    })], ThumbnailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/thumbnail/thumbnail.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/thumbnail/thumbnail.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardThumbnailThumbnailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Show {\n  display: block;\n}\n\n.Hide {\n  display: none;\n}\n\n.ionButton {\n  height: 30px;\n  width: 80px;\n  font-size: 0.8em;\n  background-color: transparent;\n  -webkit-text-fill-color: white;\n}\n\n.mainContent {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n\n.mainContent span {\n  position: relative;\n  top: 50%;\n}\n\n.top-overlay-visible {\n  height: 20%;\n  width: 100%;\n  left: 0;\n  margin-left: 0%;\n  /* background-color: #4e4949; */\n  background: linear-gradient(to top, transparent 0%, black 100%);\n  background: -o-linear-gradient(to top, transparent 0%, black 100%);\n  position: fixed;\n  z-index: 20;\n}\n\n.bottom-overlay-visible {\n  height: 20%;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  margin-bottom: 0%;\n  margin-left: 0%;\n  background: linear-gradient(to bottom, transparent 0%, black);\n  background: -o-linear-gradient(to bottom, transparent 0%, black);\n  position: fixed;\n}\n\n.topOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  top: 80px;\n  text-align: center;\n  color: #6434c1;\n}\n\n.topOverlayElements span {\n  font-size: 1.5em;\n}\n\n.heart1 {\n  display: inline-block;\n  position: fixed;\n  width: 20%;\n  font-size: 2em;\n  line-height: 1em;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.heart1 span {\n  font-size: 1.5em;\n}\n\n.heart {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 220px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.download {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 290px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeVideo {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 1em;\n  top: 20px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.share {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 360px;\n  left: 140px;\n  text-align: center;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n\n.bottomOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  bottom: 20px;\n  text-align: center;\n  color: white;\n}\n\n.bottomOverlayElements span {\n  font-size: 1.5em;\n}\n\n.top-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bottom-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.closeFab {\n  display: inline-block;\n  position: fixed;\n  width: 15px;\n  height: 15px;\n  font-size: 2em;\n  line-height: 1em;\n  top: 10px;\n  left: 140px;\n  text-align: r;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n\n.closeFab span {\n  font-size: 1.5em;\n}\n\n.Fullpage {\n  height: 80%;\n}\n\n.List {\n  max-height: 90%;\n}\n\nion-tabs {\n  height: 10% !important;\n  top: 90%;\n}\n\n.item-block {\n  height: auto;\n}\n\n.item-ios.item-block .item-inner {\n  height: auto;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n/* new  */\n\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  background-color: transparent;\n}\n\n/* .container:hover .overlay1 {\n  opacity: 1;\n} */\n\n.icon {\n  color: white;\n  font-size: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.fa-user:hover {\n  color: #eee;\n}\n\n.green {\n  color: green;\n}\n\n.white {\n  color: white;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  height: 100vh;\n  background: linear-gradient(135deg, #121721, #000);\n  font: 1em verdana, sans-serif;\n}\n\n/* new css */\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #092503;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n  height: inherit;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\n/* Conversation */\n\n.conversation {\n  height: calc(100% - 12px);\n  position: relative;\n  background: #efe7dd url(\"/assets/pattern.svg\") repeat;\n  z-index: 0;\n}\n\n.conversation ::-webkit-scrollbar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 5px;\n  height: 1px;\n  z-index: 10;\n}\n\n.conversation ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.conversation ::-webkit-scrollbar-thumb {\n  background: #b3ada7;\n}\n\n.conversation .conversation-container {\n  height: calc(100% - 68px);\n  box-shadow: inset 0 10px 10px -10px #000000;\n  overflow-x: hidden;\n  padding: 0 0;\n  margin-bottom: 5px;\n}\n\n.conversation .conversation-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Messages */\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1;\n}\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.metadata {\n  display: inline-block;\n  float: right;\n  padding: 0 0 0 7px;\n  position: relative;\n  bottom: -4px;\n}\n\n.metadata .time {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 11px;\n  display: inline-block;\n}\n\n.metadata .tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.metadata .tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.metadata .tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.metadata .tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.metadata .tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.metadata .tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\n.message:first-child {\n  margin: 16px 0 8px;\n}\n\n.message.received {\n  background: #fff;\n  border-radius: 0px 5px 5px 5px;\n  float: left;\n}\n\n.message.received .metadata {\n  padding: 0 0 0 16px;\n}\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right;\n}\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n}\n\n/* Compose */\n\n.conversation-compose {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  z-index: 2;\n}\n\n.conversation-compose div,\n.conversation-compose ion-input {\n  background: #fff;\n  height: 100%;\n}\n\n.conversation-compose .emoji {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 5px 0 0 5px;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  width: 48px;\n}\n\n.conversation-compose .input-msg {\n  border: 0;\n  flex: 1 1 auto;\n  font-size: 16px;\n  margin: 0;\n  outline: none;\n  min-width: 50px;\n}\n\n.conversation-compose .photo {\n  flex: 0 0 auto;\n  border-radius: 0 0 5px 0;\n  text-align: center;\n  position: relative;\n  width: 48px;\n}\n\n.conversation-compose .photo:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  border-style: solid;\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 0;\n  right: -10px;\n}\n\n.conversation-compose .photo i {\n  display: block;\n  color: #6d7e39;\n  /* color: #7d8488; */\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n\n.conversation-compose .send {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding: 0;\n  position: relative;\n  outline: none;\n}\n\n.conversation-compose .send .circle {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.conversation-compose .send .circle i {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n/* Small Screens */\n\n@media (max-width: 768px) {\n  .marvel-device.nexus5 {\n    border-radius: 0;\n    flex: none;\n    padding: 0;\n    max-width: none;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n\n  .marvel-device > .screen .chat {\n    visibility: visible;\n  }\n\n  .marvel-device {\n    visibility: hidden;\n  }\n\n  .marvel-device .status-bar {\n    display: none;\n  }\n\n  .screen-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .conversation {\n    height: calc(100vh - 55px);\n  }\n\n  .conversation .conversation-container {\n    height: calc(100vh - 120px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RodW1ibmFpbC9EOlxcSW9uaWMgUHJvamVjdFxcU2hhcmVFeHByZXNzXFxTaGFyZUV4cHJlc3Mvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXHRodW1ibmFpbFxcdGh1bWJuYWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RodW1ibmFpbC90aHVtYm5haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdDO0VBRU8sWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNEUjs7QURHSTtFQUVLLFlBQUE7RUFDRCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREVRO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FDRFo7O0FESUk7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLE9BQUE7RUFDQSxlQUFBO0VBRUYsK0JBQUE7RUFDRSwrREFBQTtFQUdBLGtFQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNKTjs7QURNSTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUdBLGdFQUFBO0VBQ0EsZUFBQTtBQ0pOOztBRE1JO0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNKTjs7QURLTTtFQUVFLGdCQUFBO0FDSlI7O0FET0s7RUFFQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFDQSxZQUFBO0VBS0EsZUFBQTtF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Q0UsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDcENGOztFRHVDQTtJQUNFLG1CQUFBO0VDcENGOztFRHVDQTtJQUNFLGtCQUFBO0VDcENGOztFRHVDQTtJQUNFLGFBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDcENGOztFRHVDQTtJQUNFLDBCQUFBO0VDcENGOztFRHNDQTtJQUNFLDJCQUFBO0VDbkNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdGh1bWJuYWlsL3RodW1ibmFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5TaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGlkZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuIC5pb25CdXR0b25cclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLW92ZXJsYXktdmlzaWJsZVxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICBcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAlIDtcclxuICAgIFxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRlNDk0OTsgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1vdmVybGF5LXZpc2libGVcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSA7XHJcbiAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcclxuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICAgIC50b3BPdmVybGF5RWxlbWVudHNcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjgwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM2NDM0YzE7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAuaGVhcnQxXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgc3BhblxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgfSBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYXJ0IFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRvd25sb2FkXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgIHRvcDoyOTBweDtcclxuICAgICAgbGVmdDoxNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlVmlkZW9cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgLnNoYXJlXHJcbiAgICAgICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MzYwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgLmJvdHRvbU92ZXJsYXlFbGVtZW50c1xyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBzcGFuXHJcbiAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLW92ZXJsYXktaGlkZGVuXHJcbiAgICB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5ib3R0b20tb3ZlcmxheS1oaWRkZW5cclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gXHJcbiAuY2xvc2VGYWJcclxue1xyXG4gICAgIFxyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRvcDoxMHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH0gXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICBcclxufVxyXG5cclxuLkZ1bGxwYWdlXHJcbntcclxuICBoZWlnaHQ6ODAlO1xyXG59XHJcbi5MaXN0XHJcbntcclxuICBtYXgtaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbmlvbi10YWJzXHJcbntcclxuICBoZWlnaHQ6IDEwJSFpbXBvcnRhbnQ7XHJcbiAgdG9wOjkwJTtcclxufVxyXG4gXHJcbiAuaXRlbS1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIG5ldyAgKi9cclxuLm92ZXJsYXkxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAxO1xyXG4gLy8gdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheTEge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0gKi9cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLXVzZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcbiBcclxuIC5ncmVlblxyXG4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuIH1cclxuIC53aGl0ZVxyXG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuIFxyXG4gXHJcbiBib2R5IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMjE3MjEsICMwMDApO1xyXG4gIGZvbnQ6IDFlbSB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbiBcclxuXHJcbi8qIG5ldyBjc3MgKi9cclxuIFxyXG5cclxuICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFyICovXHJcblxyXG4uc3RhdHVzLWJhciB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXIgZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBDaGF0ICovXHJcblxyXG4uY2hhdCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVzZXItYmFyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udXNlci1iYXIgZGl2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcclxuICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIHtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5uYW1lIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLnVzZXItYmFyIC5zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiBDb252ZXJzYXRpb24gKi9cclxuXHJcbi5jb252ZXJzYXRpb24ge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBiYWNrZ3JvdW5kOiAjZWZlN2RkIHVybChcIi9hc3NldHMvcGF0dGVybi5zdmdcIikgcmVwZWF0O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcblxyXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjYjNhZGE3O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxMHB4IC0xMHB4ICMwMDAwMDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIE1lc3NhZ2VzICovXHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBtYXgtd2lkdGg6IDg1JTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLm1ldGFkYXRhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtNHB4O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpbWUge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmZpcnN0LWNoaWxkIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHN2ZzpsYXN0LWNoaWxkIHtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG59XHJcblxyXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrLWFuaW1hdGlvbiBzdmc6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbn1cclxuXHJcbi5tZXNzYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW46IDE2cHggMCA4cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJlY2VpdmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDVweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmVjZWl2ZWQgLm1ldGFkYXRhIHtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yZWNlaXZlZDphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uuc2VudCB7XHJcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcclxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVzc2FnZS5zZW50OmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlMWZmYzc7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuLyogQ29tcG9zZSAqL1xyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSBkaXYsXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSBpb24taW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLmVtb2ppIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5pbnB1dC1tc2cge1xyXG4gIGJvcmRlcjogMDtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90bzphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTEwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNmQ3ZTM5O1xyXG4gIC8qIGNvbG9yOiAjN2Q4NDg4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwOGE3YztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKiBTbWFsbCBTY3JlZW5zICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFydmVsLWRldmljZS5uZXh1czUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hcnZlbC1kZXZpY2UgPiAuc2NyZWVuIC5jaGF0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubWFydmVsLWRldmljZSAuc3RhdHVzLWJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnZlcnNhdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcclxuICB9XHJcbiAgLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbiAgfVxyXG59IiwiLlNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW9uQnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5Db250ZW50IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xufVxuXG4udG9wLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0OTQ5OyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uYm90dG9tLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50b3BPdmVybGF5RWxlbWVudHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NDM0YzE7XG59XG4udG9wT3ZlcmxheUVsZW1lbnRzIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaGVhcnQxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cbi5oZWFydDEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5oZWFydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHRvcDogMjIwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmRvd25sb2FkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdG9wOiAyOTBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2xvc2VWaWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uc2hhcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDM2MHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b21PdmVybGF5RWxlbWVudHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJvdHRvbU92ZXJsYXlFbGVtZW50cyBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRvcC1vdmVybGF5LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJvdHRvbS1vdmVybGF5LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNsb3NlRmFiIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiByO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG59XG4uY2xvc2VGYWIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5GdWxscGFnZSB7XG4gIGhlaWdodDogODAlO1xufVxuXG4uTGlzdCB7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbn1cblxuaW9uLXRhYnMge1xuICBoZWlnaHQ6IDEwJSAhaW1wb3J0YW50O1xuICB0b3A6IDkwJTtcbn1cblxuLml0ZW0tYmxvY2sge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIG5ldyAgKi9cbi5vdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheTEge1xuICBvcGFjaXR5OiAxO1xufSAqL1xuLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS11c2VyOmhvdmVyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEyMTcyMSwgIzAwMCk7XG4gIGZvbnQ6IDFlbSB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBuZXcgY3NzICovXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXJ2ZWwtZGV2aWNlIC5zY3JlZW4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2NyZWVuLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogU3RhdHVzIEJhciAqL1xuLnN0YXR1cy1iYXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uc3RhdHVzLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnN0YXR1cy1iYXIgZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG1hcmdpbjogMCAwIDAgOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBDaGF0ICovXG4uY2hhdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjlweCk7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogVXNlciBCYXIgKi9cbi51c2VyLWJhciB7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZDogIzA5MjUwMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnVzZXItYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udXNlci1iYXIgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcbiAgbWFyZ2luOiAwIDEycHggMCAzMnB4O1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCB7XG4gIG1hcmdpbjogMCAwIDAgMzBweDtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zLmF0dGFjaG1lbnQgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4udXNlci1iYXIgLmF2YXRhciB7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4udXNlci1iYXIgLmF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnVzZXItYmFyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBtYXJnaW46IDAgMCAwIDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4udXNlci1iYXIgLnN0YXR1cyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBDb252ZXJzYXRpb24gKi9cbi5jb252ZXJzYXRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiL2Fzc2V0cy9wYXR0ZXJuLnN2Z1wiKSByZXBlYXQ7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYjNhZGE3O1xufVxuXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDEwcHggLTEwcHggIzAwMDAwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogTWVzc2FnZXMgKi9cbi5tZXNzYWdlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGNsZWFyOiBib3RoO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tZXNzYWdlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWV0YWRhdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTRweDtcbn1cblxuLm1ldGFkYXRhIC50aW1lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmc6Zmlyc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG59XG5cbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xufVxuXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbn1cblxuLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDE2cHggMCA4cHg7XG59XG5cbi5tZXNzYWdlLnJlY2VpdmVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQgLm1ldGFkYXRhIHtcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4IDEwcHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ubWVzc2FnZS5zZW50IHtcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFmZmM3O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLyogQ29tcG9zZSAqL1xuLmNvbnZlcnNhdGlvbi1jb21wb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgZGl2LFxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5lbW9qaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5pbnB1dC1tc2cge1xuICBib3JkZXI6IDA7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmQ3ZTM5O1xuICAvKiBjb2xvcjogIzdkODQ4ODsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMwMDhhN2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIFNtYWxsIFNjcmVlbnMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFydmVsLWRldmljZS5uZXh1czUge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlID4gLnNjcmVlbiAuY2hhdCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFydmVsLWRldmljZSAuc3RhdHVzLWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zY3JlZW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLmNvbnZlcnNhdGlvbiB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XG4gIH1cblxuICAuY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/thumbnail/thumbnail.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/thumbnail/thumbnail.page.ts ***!
    \*************************************************************/

  /*! exports provided: ThumbnailPage */

  /***/
  function srcAppPagesDashboardThumbnailThumbnailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThumbnailPage", function () {
      return ThumbnailPage;
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


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/File/ngx */
    "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../service/authentication.service */
    "./src/app/pages/service/authentication.service.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/downloader/ngx */
    "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../pages/chat/chat.page */
    "./src/app/pages/chat/chat.page.ts");
    /* harmony import */


    var _pages_dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../pages/dashboard/main-list/main-list.page */
    "./src/app/pages/dashboard/main-list/main-list.page.ts");

    var ThumbnailPage =
    /*#__PURE__*/

    /*@Directive({
        selector: "[long-press]"
    })*/
    function () {
      function ThumbnailPage(plt, alertCtrl, fileOpener, router, route, toastCtrl, imagePicker, api, file, storage, fileChooser, database, socialSharing, downloader, filePathobject, base64, httpClient, http, modal) {
        _classCallCheck(this, ThumbnailPage);

        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.router = router;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
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
        this.uploadProgress = 0;
        this.FileName = "";
        this.FilePath = "";
        this.isDownloadStart = false;
        this.isDownload = false;
        this.isShareStart = false;
        this.isShare = false;
        this.isLike = false;
        this.green = "green";
      }

      _createClass(ThumbnailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.GetMyPost();
        }
      }, {
        key: "GetMyPost",
        value: function GetMyPost() {
          var _this = this;

          var data = 'id=' + this.api.ToUserID + '&CategoryID=1&isSelf=1';
          var url = this.api.baseUrl + "Media?" + data;
          this.ResultData = this.httpClient.get(url);
          this.ResultData.subscribe(function (data) {
            _this.cloudFiles1 = data;
            _this.ProfilePath = _this.cloudFiles1[0]["UploadUserProfilePath"];
            _this.ProfileUserName = _this.cloudFiles1[0]["UploadUserName"];
          }), function (err) {};
        }
      }, {
        key: "download1",
        value: function download1() {
          this.download(this.UploadID, this.FileName, this.FilePath);
        }
      }, {
        key: "download",
        value: function download(UploadID, fileName, FilePath) {
          var _this2 = this;

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
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_12__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileName
            }
          };
          this.downloader.download(request).then(function (location) {
            //alert('File downloaded at:'+location);
            _this2.like(_this2.UploadID, false, false, true);

            _this2.Downloadloader(false);

            _this2.isDownloadStart = false;
          })["catch"](function (error) {
            console.log(error);
            alert(error);

            _this2.Downloadloader(false);
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
          var _this3 = this;

          this.UploadID = UploadID;
          this.getcurrentFiles("Curindex");
          this.Shareloader(true);
          var request = {
            uri: filePath,
            title: 'ShareExpress Download',
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_12__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileNames
            }
          };
          this.downloader.download(request).then(function (location) {
            _this3.toBaseImg(location);
          })["catch"](function (error) {
            alert(error);

            _this3.Shareloader(false);

            _this3.isShareStart = false;
          });
        }
      }, {
        key: "toBaseImg",
        value: function toBaseImg(location) {
          var _this4 = this;

          var New = "data:video/mp4;base64";
          this.filePathobject.resolveNativePath(location).then(function (nativepath) {
            _this4.base64.encodeFile(nativepath).then(function (base64File) {
              var str = base64File.split(',');
              var headerString = str[0];
              _this4.thumbnailData = base64File.replace(headerString, New);

              _this4.Shareloader(false);

              _this4.isShareStart = false;

              _this4.socialSharing.shareViaWhatsApp("", _this4.thumbnailData, null).then(function () {
                _this4.like(_this4.UploadID, true, false, false);
              })["catch"](function (error) {
                alert(error);

                _this4.Shareloader(false);
              });
            })["catch"](function (error) {
              alert(error);

              _this4.Shareloader(false);
            });
          })["catch"](function (error) {
            alert(error);

            _this4.Shareloader(false);
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
          var _this5 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHeaders"]({
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
            var index = _this5.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == UploadID;
            });

            if (isLike == true) {
              var Arrlike = _this5.cloudFiles1[index]["isLike"];

              if (Arrlike == 0) {
                _this5.cloudFiles1[index].isLike = 1;
                _this5.isLike = true;
              } else {
                _this5.cloudFiles1[index].isLike = 0;
                _this5.isLike = false;
              }
            }

            if (isShare == true) {
              var ArrShare = _this5.cloudFiles1[index]["isShare"];

              if (ArrShare == 0) {
                _this5.cloudFiles1[index].isShare = 1;
                _this5.isShare = false;
              } else {
                _this5.cloudFiles1[index].isShare = 0;
                _this5.isShare = false;
              }
            }

            if (isDownload == true) {
              var ArrDownload = _this5.cloudFiles1[index]["isDownload"];

              if (ArrDownload == 0) {
                _this5.cloudFiles1[index].isDownload = 1;
                _this5.isDownload = false;
              } else {
                _this5.cloudFiles1[index].isDownload = 0;
                _this5.isDownload = false;
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
          this.GetMyPost();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "getcurrentFiles",
        value: function getcurrentFiles(fieldname) {
          var _this6 = this;

          if (fieldname == "UploadID") {
            this.UploadID = this.cloudFiles1[this.Curindex].UploadID;
          } else if (fieldname == "FileName") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.FileName = this.cloudFiles1[this.Curindex].FileName;
          } else if (fieldname == "ThumbPath") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.ThumbPath = this.cloudFiles1[this.Curindex].ThumbPath;
          } else if (fieldname == "Curindex") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
          } else if (fieldname == "FilePath") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.FilePath = this.cloudFiles1[this.Curindex].FilePath;
          } else if (fieldname == "isDownload") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isDownload = this.cloudFiles1[this.Curindex].isDownload;
          } else if (fieldname == "isShare") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isShare = this.cloudFiles1[this.Curindex].isShare;
          } else if (fieldname == "isLike") {
            this.Curindex = this.cloudFiles1.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isLike = this.cloudFiles1[this.Curindex].isLike;
          }
        }
      }, {
        key: "Shareloader",
        value: function Shareloader(val) {
          this.cloudFiles1[this.Curindex].isShareStart = val;
        }
      }, {
        key: "Downloadloader",
        value: function Downloadloader(val) {
          this.cloudFiles1[this.Curindex].isDownloadStart = val;
        }
      }, {
        key: "RedirectSetting",
        value: function RedirectSetting() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.router.navigate(['profile']);

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
        key: "ShowVideos",
        value: function ShowVideos(data, list) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.api.CurrentDatalist = list;
                    this.api.UploadID = data.UploadID;
                    _context4.next = 4;
                    return this.modal.create({
                      component: _pages_dashboard_main_list_main_list_page__WEBPACK_IMPORTED_MODULE_18__["MainListPage"],
                      animated: true,
                      componentProps: list
                    }).then(function (modal) {
                      modal.present();
                      modal.onDidDismiss().then(function () {//this.getEmployeeList();
                      });
                    });

                  case 4:
                    modal = _context4.sent;

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "CommentLoad",
        value: function CommentLoad(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modal.create({
                      component: _pages_chat_chat_page__WEBPACK_IMPORTED_MODULE_17__["ChatPage"],
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

      return ThumbnailPage;
    }();

    ThumbnailPage.ctorParameters = function () {
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
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"]
      }, {
        type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
      }, {
        type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"]
      }, {
        type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_12__["Downloader"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_14__["Base64"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ThumbnailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thumbnail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./thumbnail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/thumbnail/thumbnail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./thumbnail.page.scss */
      "./src/app/pages/dashboard/thumbnail/thumbnail.page.scss"))["default"]]
    })
    /*@Directive({
        selector: "[long-press]"
    })*/
    ], ThumbnailPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-dashboard-thumbnail-thumbnail-module~thumbnail-thumbnail-module-es5.js.map