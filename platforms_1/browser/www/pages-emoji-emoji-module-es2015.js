(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emoji-emoji-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emoji/emoji.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emoji/emoji.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<ion-content>\n\n\n <video class=\"mainContent\"   #myvideo2  poster=\"assets/load.gif\" controls=\"controls\" \n preload=\"auto\" webkit-playsinline=\"webkit-playsinline\" autoplay=\"true\">\n     <span class= \"overlay-visible top-overlay-visible\">Top Overlay Text or Buttons\n     </span> \n    <source id='mp4Source' src={{filterPath}} /> \n  </video>\n<!-- <button  (click)=\"convert()\" ion-button small round icon-only>convert</button> -->\n<!-- <ion-grid>\n        <ion-row >\n            <ion-col col-2>\n                <button   ion-button small round icon-only><ion-icon name=\"happy\"></ion-icon></button>\n            </ion-col>\n            <ion-col col-2>\n                <button   ion-button small round icon-only><ion-icon name=\"wine\"></ion-icon></button>\n            </ion-col>\n            <ion-col col-2>\n                <button (click)=\"share()\" ion-button small round icon-only><ion-icon name=\"heart\"></ion-icon></button>\n            </ion-col>\n            <ion-col col-2>\n                <button (click)=\"share()\" ion-button small round icon-only><ion-icon name=\"sad\"></ion-icon></button>\n            </ion-col>\n            <ion-col col-2>\n                <button (click)=\"share()\" ion-button small round icon-only><ion-icon name=\"outlet\"></ion-icon></button>\n            </ion-col>\n            <ion-col col-2>\n                <button (click)=\"share()\" ion-button small round icon-only><ion-icon name=\"star\"></ion-icon></button>\n            </ion-col>\n        </ion-row>\n      </ion-grid>  -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/emoji/emoji-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/emoji/emoji-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmojiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPageRoutingModule", function() { return EmojiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _emoji_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emoji.page */ "./src/app/pages/emoji/emoji.page.ts");




const routes = [
    {
        path: '',
        component: _emoji_page__WEBPACK_IMPORTED_MODULE_3__["EmojiPage"]
    }
];
let EmojiPageRoutingModule = class EmojiPageRoutingModule {
};
EmojiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmojiPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/emoji/emoji.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/emoji/emoji.module.ts ***!
  \*********************************************/
/*! exports provided: EmojiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPageModule", function() { return EmojiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _emoji_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emoji-routing.module */ "./src/app/pages/emoji/emoji-routing.module.ts");
/* harmony import */ var _emoji_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emoji.page */ "./src/app/pages/emoji/emoji.page.ts");







let EmojiPageModule = class EmojiPageModule {
};
EmojiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _emoji_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmojiPageRoutingModule"]
        ],
        declarations: [_emoji_page__WEBPACK_IMPORTED_MODULE_6__["EmojiPage"]]
    })
], EmojiPageModule);



/***/ }),

/***/ "./src/app/pages/emoji/emoji.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/emoji/emoji.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vtb2ppL2Vtb2ppLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/emoji/emoji.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/emoji/emoji.page.ts ***!
  \*******************************************/
/*! exports provided: EmojiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPage", function() { return EmojiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let EmojiPage = class EmojiPage {
    constructor(navParams) {
        this.navParams = navParams;
        debugger;
        this.data = this.navParams.data;
        this.FilePath = this.data.FilePath;
        this.filterPath = "https://firebasestorage.googleapis.com/v0/b/smade-fe848.appspot.com/o/filter%2F1.mp4?alt=media&token=cefd509b-47b5-4d92-ba69-7a9631fc44ba";
    }
    ngOnInit() {
    }
};
EmojiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
EmojiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emoji',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./emoji.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emoji/emoji.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./emoji.page.scss */ "./src/app/pages/emoji/emoji.page.scss")).default]
    })
], EmojiPage);

/*convert()
{
    this.videoEditor.transcodeVideo({
  fileUri: 'asset/1.mov',
  outputFileName: 'output.mp4'
  , outputFileType: VideoEditorOptions.OutputFileType.MPEG4, // android is always mp4
 
})
.then((fileUri: string) => console.log('video transcode success', fileUri))
.catch((error: any) => console.log('video transcode error', error));
}*/


/***/ })

}]);
//# sourceMappingURL=pages-emoji-emoji-module-es2015.js.map