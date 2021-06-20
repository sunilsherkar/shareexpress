function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-dashboard-home-home-module~pages-dashboard-main-list-~c6908d57"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/main-list/main-list.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/main-list/main-list.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardMainListMainListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n \n<ion-content    >\n  \n<div class=\"mainContent\" >  \n   <div class= \"overlay-visible top-overlay-visible\" id=\"topOverlay\"  >\n    <div class=\"topOverlayElements\"> \n    </div> \n</div>\n \n  <div class=\"back\" (click)=\"close()\" > \n  <ion-icon name=\"arrow-back-outline\"></ion-icon> \n</div> \n <div class=\"heart\" (click)=\"like1(false,true,false)\" > \n <ion-icon name=\"happy-outline\" [ngClass]=\"{'green': isLike == true}\" ></ion-icon>  \n</div> \n    <div class=\"closeVideo\">\n   <ion-icon slot=\"icon-only\" name=\"close-outline\" (click)=\"close()\"></ion-icon> \n    </div>  \n      <div class=\"download primary\" (click)=\"download1()\">\n          <ion-spinner name=\"crescent\" color=\"success\"  *ngIf=\"isDownloadStart\">  \n          </ion-spinner>\n            <ion-icon  name=\"cloud-download-outline\" *ngIf=\"!isDownloadStart\" \n             [ngClass]=\"{'green': isDownload == true}\"    ></ion-icon>  \n    </div>   \n      <div class=\"share\">  \n         <ion-spinner name=\"crescent\" color=\"success\"  *ngIf=\"isShareStart\">  \n          </ion-spinner>\n     <ion-icon name=\"logo-whatsapp\" *ngIf=\"!isShareStart\" \n             [ngClass]=\"{'green': isShare == true}\" (click)=\"whatsappShare1()\"></ion-icon>  \n    </div>\n     <video class=\"mainContent\"   #myvideo1  poster=\"assets/load.gif\" controls=\"controls\" preload=\"auto\" webkit-playsinline=\"webkit-playsinline\">\n     <span class= \"overlay-visible top-overlay-visible\">Top Overlay Text or Buttons\n     </span> \n    <source id='mp4Source'/> \n  </video>\n  </div>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/main-list/main-list.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/main-list/main-list.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardMainListMainListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* video {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto; \n    background-size: cover;\n} */\n.Show {\n  display: block;\n}\n.Hide {\n  display: none;\n}\n.ionButton {\n  height: 30px;\n  width: 80px;\n  font-size: 0.8em;\n  background-color: transparent;\n  -webkit-text-fill-color: white;\n}\n.mainContent {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n.mainContent span {\n  position: relative;\n  top: 50%;\n}\n.top-overlay-visible {\n  height: 20%;\n  width: 100%;\n  left: 0;\n  margin-left: 0%;\n  /* background-color: #4e4949; */\n  background: linear-gradient(to top, transparent 0%, black 100%);\n  background: -o-linear-gradient(to top, transparent 0%, black 100%);\n  position: fixed;\n  z-index: 20;\n}\n.bottom-overlay-visible {\n  height: 20%;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  margin-bottom: 0%;\n  margin-left: 0%;\n  background: linear-gradient(to bottom, transparent 0%, black);\n  background: -o-linear-gradient(to bottom, transparent 0%, black);\n  position: fixed;\n}\n.topOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  top: 80px;\n  text-align: center;\n  color: #6434c1;\n}\n.topOverlayElements span {\n  font-size: 1.5em;\n}\n.heart1 {\n  display: inline-block;\n  position: fixed;\n  width: 20%;\n  font-size: 2em;\n  line-height: 1em;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n.heart1 span {\n  font-size: 1.5em;\n}\n.heart {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 220px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n.download {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 290px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n.closeVideo {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 1em;\n  top: 20px;\n  left: 140px;\n  text-align: center;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n.share {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 2em;\n  line-height: 2em;\n  top: 360px;\n  left: 140px;\n  text-align: center;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n.back {\n  display: inline-block;\n  position: fixed;\n  font-size: 2em;\n  line-height: 2em;\n  top: 20px;\n  left: 2px;\n  text-align: left;\n  position: fixed;\n  z-index: 20;\n  color: white;\n}\n.bottomOverlayElements {\n  display: inline-block;\n  position: fixed;\n  width: 100%;\n  font-size: 1em;\n  line-height: 1em;\n  bottom: 20px;\n  text-align: center;\n  color: white;\n}\n.bottomOverlayElements span {\n  font-size: 1.5em;\n}\n.top-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n.bottom-overlay-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n/*  .fadeOut\n {\n   visibility: hidden;\n   opacity: 0;\n   transition: visibility 0s 5s, opacity 5s linear;\n }\n .fadeIn\n {\n   visibility: visible;\n   opacity: 1;\n   transition: opacity 1s linear;\n } */\n.closeFab {\n  display: inline-block;\n  position: fixed;\n  width: 15px;\n  height: 15px;\n  font-size: 2em;\n  line-height: 1em;\n  top: 10px;\n  left: 140px;\n  text-align: r;\n  color: white;\n  position: fixed;\n  z-index: 20;\n}\n.closeFab span {\n  font-size: 1.5em;\n}\n.Fullpage {\n  height: 80%;\n}\n.List {\n  max-height: 90%;\n}\nion-tabs {\n  height: 10% !important;\n  top: 90%;\n}\n.item-block {\n  height: auto;\n}\n.item-ios.item-block .item-inner {\n  height: auto;\n}\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n/* new  */\n.overlay1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  background-color: transparent;\n}\n.icon {\n  color: white;\n  font-size: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.fa-user:hover {\n  color: #eee;\n}\n.green {\n  color: green;\n}\n.white {\n  color: white;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  height: 100vh;\n  background: linear-gradient(135deg, #121721, #000);\n  font: 1em verdana, sans-serif;\n}\n[id=toggle-heart] {\n  position: absolute;\n  left: -100vw;\n}\n[id=toggle-heart]:checked + label {\n  color: #e2264d;\n  -webkit-filter: none;\n  filter: none;\n  will-change: font-size;\n  -webkit-animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);\n  animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);\n}\n[id=toggle-heart]:checked + label:before, [id=toggle-heart]:checked + label:after {\n  -webkit-animation: inherit;\n  animation: inherit;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n[id=toggle-heart]:checked + label:before {\n  will-change: transform, border-width, border-color;\n  -webkit-animation-name: bubble;\n  animation-name: bubble;\n}\n[id=toggle-heart]:checked + label:after {\n  will-change: opacity, box-shadow;\n  -webkit-animation-name: sparkles;\n  animation-name: sparkles;\n}\n[id=toggle-heart]:focus + label {\n  text-shadow: 0 0 3px white, 0 1px 1px white, 0 -1px 1px white, 1px 0 1px white, -1px 0 1px white;\n}\n[for=toggle-heart] {\n  align-self: center;\n  position: relative;\n  color: #888;\n  font-size: 1.2em;\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n[for=toggle-heart]:before, [for=toggle-heart]:after {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  content: \"\";\n}\n[for=toggle-heart]:before {\n  box-sizing: border-box;\n  margin: -2.25rem;\n  border: solid 2.25rem #e2264d;\n  width: 4.5rem;\n  height: 4.5rem;\n  transform: scale(0);\n}\n[for=toggle-heart]:after {\n  margin: -0.1875rem;\n  width: 0.375rem;\n  height: 0.375rem;\n  box-shadow: 0.32476rem -3rem 0 -0.1875rem #ff8080, -0.32476rem -2.625rem 0 -0.1875rem #ffed80, 2.54798rem -1.61656rem 0 -0.1875rem #ffed80, 1.84982rem -1.89057rem 0 -0.1875rem #a4ff80, 2.85252rem 0.98418rem 0 -0.1875rem #a4ff80, 2.63145rem 0.2675rem 0 -0.1875rem #80ffc8, 1.00905rem 2.84381rem 0 -0.1875rem #80ffc8, 1.43154rem 2.22414rem 0 -0.1875rem #80c8ff, -1.59425rem 2.562rem 0 -0.1875rem #80c8ff, -0.84635rem 2.50595rem 0 -0.1875rem #a480ff, -2.99705rem 0.35095rem 0 -0.1875rem #a480ff, -2.48692rem 0.90073rem 0 -0.1875rem #ff80ed, -2.14301rem -2.12438rem 0 -0.1875rem #ff80ed, -2.25479rem -1.38275rem 0 -0.1875rem #ff8080;\n}\n@-webkit-keyframes heart {\n  0%, 17.5% {\n    font-size: 0;\n  }\n}\n@keyframes heart {\n  0%, 17.5% {\n    font-size: 0;\n  }\n}\n@-webkit-keyframes bubble {\n  15% {\n    transform: scale(1);\n    border-color: #cc8ef5;\n    border-width: 2.25rem;\n  }\n  30%, 100% {\n    transform: scale(1);\n    border-color: #cc8ef5;\n    border-width: 0;\n  }\n}\n@keyframes bubble {\n  15% {\n    transform: scale(1);\n    border-color: #cc8ef5;\n    border-width: 2.25rem;\n  }\n  30%, 100% {\n    transform: scale(1);\n    border-color: #cc8ef5;\n    border-width: 0;\n  }\n}\n@-webkit-keyframes sparkles {\n  0%, 20% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n    box-shadow: 0.32476rem -2.4375rem 0 0rem #ff8080, -0.32476rem -2.0625rem 0 0rem #ffed80, 2.1082rem -1.26585rem 0 0rem #ffed80, 1.41004rem -1.53985rem 0 0rem #a4ff80, 2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8, 0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff, -1.35019rem 2.0552rem 0 0rem #80c8ff, -0.60229rem 1.99916rem 0 0rem #a480ff, -2.44865rem 0.22578rem 0 0rem #a480ff, -1.93852rem 0.77557rem 0 0rem #ff80ed, -1.70323rem -1.77366rem 0 0rem #ff80ed, -1.81501rem -1.03204rem 0 0rem #ff8080;\n  }\n}\n@keyframes sparkles {\n  0%, 20% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n    box-shadow: 0.32476rem -2.4375rem 0 0rem #ff8080, -0.32476rem -2.0625rem 0 0rem #ffed80, 2.1082rem -1.26585rem 0 0rem #ffed80, 1.41004rem -1.53985rem 0 0rem #a4ff80, 2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8, 0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff, -1.35019rem 2.0552rem 0 0rem #80c8ff, -0.60229rem 1.99916rem 0 0rem #a480ff, -2.44865rem 0.22578rem 0 0rem #a480ff, -1.93852rem 0.77557rem 0 0rem #ff80ed, -1.70323rem -1.77366rem 0 0rem #ff80ed, -1.81501rem -1.03204rem 0 0rem #ff8080;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL21haW4tbGlzdC9EOlxcSW9uaWMgUHJvamVjdFxcU2hhcmVFeHByZXNzXFxTaGFyZUV4cHJlc3Mvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXG1haW4tbGlzdFxcbWFpbi1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL21haW4tbGlzdC9tYWluLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FBQTtBQVVBO0VBQ0MsY0FBQTtBQ0NEO0FEQ0E7RUFDQyxhQUFBO0FDRUQ7QURFQztFQUVPLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQVI7QURFSTtFQUVLLFlBQUE7RUFDRCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFFSSxrQkFBQTtFQUNBLFFBQUE7QUNBWjtBREdJO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFFQSxPQUFBO0VBQ0EsZUFBQTtFQUVGLCtCQUFBO0VBQ0UsK0RBQUE7RUFHQSxrRUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSE47QURLSTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUdBLGdFQUFBO0VBQ0EsZUFBQTtBQ0hOO0FES0k7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0hOO0FESU07RUFFRSxnQkFBQTtBQ0hSO0FETUs7RUFFQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFDQSxZQUFBO0VBS0EsZUFBQTtFQUNBLFdBQUE7QUNWTjtBREtNO0VBRUUsZ0JBQUE7QUNKUjtBRFVJO0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSTjtBRFdJO0VBRUUscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQyxZQUFBO0VBQ0QsZUFBQTtFQUNBLFdBQUE7QUNUTjtBRFlRO0VBRUYscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWTjtBRGFPO0VBRUQscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYTjtBRGFDO0VBRUsscUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pOO0FEZUk7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2JOO0FEY007RUFFRSxnQkFBQTtBQ2JSO0FEZ0JJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0FDZE47QURnQkk7RUFFRSxrQkFBQTtFQUNBLFVBQUE7QUNkTjtBRGlCRzs7Ozs7Ozs7Ozs7SUFBQTtBQWNGO0VBR0sscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBS0EsZUFBQTtFQUNBLFdBQUE7QUN0Qk47QURpQk07RUFFRSxnQkFBQTtBQ2hCUjtBRHVCQTtFQUVDLFdBQUE7QUNyQkQ7QUR1QkE7RUFFQyxlQUFBO0FDckJEO0FEd0JBO0VBRUMsc0JBQUE7RUFDQSxRQUFBO0FDdEJEO0FEeUJDO0VBQ0csWUFBQTtBQ3RCSjtBRHlCQTtFQUNJLFlBQUE7QUN0Qko7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQSxTQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtBQ3RCRjtBRDJCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ3hCRjtBRDJCQTtFQUNFLFdBQUE7QUN4QkY7QUQyQkM7RUFFQyxZQUFBO0FDekJGO0FEMkJDO0VBRUMsWUFBQTtBQ3pCRjtBRDZCQztFQUVDLGFBQUE7RUFFUSx1QkFBQTtFQUNSLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSw2QkFBQTtBQzFCRjtBRDZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDRCQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNRLFlBQUE7RUFDUixzQkFBQTtFQUNBLGdFQUFBO0VBQ1Esd0RBQUE7QUN6QlY7QUQyQkE7RUFDRSwwQkFBQTtFQUNRLGtCQUFBO0VBQ1IsMkNBQUE7RUFDUSxtQ0FBQTtBQ3hCVjtBRDBCQTtFQUNFLGtEQUFBO0VBQ0EsOEJBQUE7RUFDUSxzQkFBQTtBQ3ZCVjtBRHlCQTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDUSx3QkFBQTtBQ3RCVjtBRHdCQTtFQUNFLGdHQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ1Esb0JBQUE7RUFDUix5QkFBQTtFQUNHLHNCQUFBO0VBQ0MscUJBQUE7RUFDSSxpQkFBQTtFQUNSLGVBQUE7QUNyQkY7QUR1QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHNCQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBRVEsbUJBQUE7QUNuQlY7QURxQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9uQkFBQTtBQ2xCRjtBRHFCQTtFQUNFO0lBQ0UsWUFBQTtFQ2xCRjtBQUNGO0FEcUJBO0VBQ0U7SUFDRSxZQUFBO0VDbkJGO0FBQ0Y7QURxQkE7RUFDRTtJQUVVLG1CQUFBO0lBQ1IscUJBQUE7SUFDQSxxQkFBQTtFQ25CRjtFRHFCQTtJQUVVLG1CQUFBO0lBQ1IscUJBQUE7SUFDQSxlQUFBO0VDbkJGO0FBQ0Y7QURxQkE7RUFDRTtJQUVVLG1CQUFBO0lBQ1IscUJBQUE7SUFDQSxxQkFBQTtFQ25CRjtFRHFCQTtJQUVVLG1CQUFBO0lBQ1IscUJBQUE7SUFDQSxlQUFBO0VDbkJGO0FBQ0Y7QURxQkE7RUFDRTtJQUNFLFVBQUE7RUNuQkY7RURxQkE7SUFDRSxVQUFBO0lBQ0EsdWlCQUFBO0VDbkJGO0FBQ0Y7QURxQkE7RUFDRTtJQUNFLFVBQUE7RUNuQkY7RURxQkE7SUFDRSxVQUFBO0lBQ0EsdWlCQUFBO0VDbkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvbWFpbi1saXN0L21haW4tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bzsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovXHJcbi5TaG93IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGlkZXtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuIC5pb25CdXR0b25cclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLW92ZXJsYXktdmlzaWJsZVxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICBcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAlIDtcclxuICAgIFxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRlNDk0OTsgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1vdmVybGF5LXZpc2libGVcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSA7XHJcbiAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcclxuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICAgIC50b3BPdmVybGF5RWxlbWVudHNcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjgwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM2NDM0YzE7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAuaGVhcnQxXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgc3BhblxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgfSBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYXJ0IFxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRvd25sb2FkXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgIHRvcDoyOTBweDtcclxuICAgICAgbGVmdDoxNDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlVmlkZW9cclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOjIwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgLnNoYXJlXHJcbiAgICAgICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MzYwcHg7XHJcbiAgICAgIGxlZnQ6MTQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgfVxyXG4gLmJhY2tcclxuICAgICAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICB0b3A6MjBweDtcclxuICAgICAgbGVmdDoycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICBcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tT3ZlcmxheUVsZW1lbnRzXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50b3Atb3ZlcmxheS1oaWRkZW5cclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1vdmVybGF5LWhpZGRlblxyXG4gICAge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAvKiAgLmZhZGVPdXRcclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDVzLCBvcGFjaXR5IDVzIGxpbmVhcjtcclxuICAgIH1cclxuICAgIC5mYWRlSW5cclxuICAgIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XHJcbiAgICB9ICovXHJcbiBcclxuXHJcbiAuY2xvc2VGYWJcclxue1xyXG5cdCAgIFxyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHRvcDoxMHB4O1xyXG4gICAgICBsZWZ0OjE0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH0gXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMjA7XHJcbiAgICBcclxufVxyXG5cclxuLkZ1bGxwYWdlXHJcbntcclxuXHRoZWlnaHQ6ODAlO1xyXG59XHJcbi5MaXN0XHJcbntcclxuXHRtYXgtaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbmlvbi10YWJzXHJcbntcclxuXHRoZWlnaHQ6IDEwJSFpbXBvcnRhbnQ7XHJcblx0dG9wOjkwJTtcclxufVxyXG4gXHJcbiAuaXRlbS1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIG5ldyAgKi9cclxuLm92ZXJsYXkxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAxO1xyXG4gLy8gdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIFxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmEtdXNlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuIFxyXG4gLmdyZWVuXHJcbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gfVxyXG4gLndoaXRlXHJcbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG4gXHJcbiBcclxuIGJvZHkge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEyMTcyMSwgIzAwMCk7XHJcbiAgZm9udDogMWVtIHZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbltpZD0ndG9nZ2xlLWhlYXJ0J10ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTAwdnc7XHJcbn1cclxuW2lkPSd0b2dnbGUtaGVhcnQnXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjZTIyNjRkO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xyXG4gICAgICAgICAgZmlsdGVyOiBub25lO1xyXG4gIHdpbGwtY2hhbmdlOiBmb250LXNpemU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0IDFzIGN1YmljLWJlemllcigwLjE3LCAwLjg5LCAwLjMyLCAxLjQ5KTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogaGVhcnQgMXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODksIDAuMzIsIDEuNDkpO1xyXG59XHJcbltpZD0ndG9nZ2xlLWhlYXJ0J106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSwgW2lkPSd0b2dnbGUtaGVhcnQnXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5baWQ9J3RvZ2dsZS1oZWFydCddOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJvcmRlci13aWR0aCwgYm9yZGVyLWNvbG9yO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJ1YmJsZTtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBidWJibGU7XHJcbn1cclxuW2lkPSd0b2dnbGUtaGVhcnQnXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCBib3gtc2hhZG93O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNwYXJrbGVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwYXJrbGVzO1xyXG59XHJcbltpZD0ndG9nZ2xlLWhlYXJ0J106Zm9jdXMgKyBsYWJlbCB7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggd2hpdGUsICAwIDFweCAxcHggd2hpdGUsIDAgLTFweCAxcHggd2hpdGUsICAxcHggMCAxcHggd2hpdGUsIC0xcHggMCAxcHggd2hpdGU7XHJcbn1cclxuXHJcbltmb3I9J3RvZ2dsZS1oZWFydCddIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbltmb3I9J3RvZ2dsZS1oZWFydCddOmJlZm9yZSwgW2Zvcj0ndG9nZ2xlLWhlYXJ0J106YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcbltmb3I9J3RvZ2dsZS1oZWFydCddOmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IC0yLjI1cmVtO1xyXG4gIGJvcmRlcjogc29saWQgMi4yNXJlbSAjZTIyNjRkO1xyXG4gIHdpZHRoOiA0LjVyZW07XHJcbiAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5bZm9yPSd0b2dnbGUtaGVhcnQnXTphZnRlciB7XHJcbiAgbWFyZ2luOiAtMC4xODc1cmVtO1xyXG4gIHdpZHRoOiAwLjM3NXJlbTtcclxuICBoZWlnaHQ6IDAuMzc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuMzI0NzZyZW0gLTNyZW0gMCAtMC4xODc1cmVtICNmZjgwODAsIC0wLjMyNDc2cmVtIC0yLjYyNXJlbSAwIC0wLjE4NzVyZW0gI2ZmZWQ4MCwgMi41NDc5OHJlbSAtMS42MTY1NnJlbSAwIC0wLjE4NzVyZW0gI2ZmZWQ4MCwgMS44NDk4MnJlbSAtMS44OTA1N3JlbSAwIC0wLjE4NzVyZW0gI2E0ZmY4MCwgMi44NTI1MnJlbSAwLjk4NDE4cmVtIDAgLTAuMTg3NXJlbSAjYTRmZjgwLCAyLjYzMTQ1cmVtIDAuMjY3NXJlbSAwIC0wLjE4NzVyZW0gIzgwZmZjOCwgMS4wMDkwNXJlbSAyLjg0MzgxcmVtIDAgLTAuMTg3NXJlbSAjODBmZmM4LCAxLjQzMTU0cmVtIDIuMjI0MTRyZW0gMCAtMC4xODc1cmVtICM4MGM4ZmYsIC0xLjU5NDI1cmVtIDIuNTYycmVtIDAgLTAuMTg3NXJlbSAjODBjOGZmLCAtMC44NDYzNXJlbSAyLjUwNTk1cmVtIDAgLTAuMTg3NXJlbSAjYTQ4MGZmLCAtMi45OTcwNXJlbSAwLjM1MDk1cmVtIDAgLTAuMTg3NXJlbSAjYTQ4MGZmLCAtMi40ODY5MnJlbSAwLjkwMDczcmVtIDAgLTAuMTg3NXJlbSAjZmY4MGVkLCAtMi4xNDMwMXJlbSAtMi4xMjQzOHJlbSAwIC0wLjE4NzVyZW0gI2ZmODBlZCwgLTIuMjU0NzlyZW0gLTEuMzgyNzVyZW0gMCAtMC4xODc1cmVtICNmZjgwODA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBoZWFydCB7XHJcbiAgMCUsIDE3LjUlIHtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGVhcnQge1xyXG4gIDAlLCAxNy41JSB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUge1xyXG4gIDE1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYzhlZjU7XHJcbiAgICBib3JkZXItd2lkdGg6IDIuMjVyZW07XHJcbiAgfVxyXG4gIDMwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYzhlZjU7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYnViYmxlIHtcclxuICAxNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2M4ZWY1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyLjI1cmVtO1xyXG4gIH1cclxuICAzMCUsIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2M4ZWY1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BhcmtsZXMge1xyXG4gIDAlLCAyMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAwLjMyNDc2cmVtIC0yLjQzNzVyZW0gMCAwcmVtICNmZjgwODAsIC0wLjMyNDc2cmVtIC0yLjA2MjVyZW0gMCAwcmVtICNmZmVkODAsIDIuMTA4MnJlbSAtMS4yNjU4NXJlbSAwIDByZW0gI2ZmZWQ4MCwgMS40MTAwNHJlbSAtMS41Mzk4NXJlbSAwIDByZW0gI2E0ZmY4MCwgMi4zMDQxMnJlbSAwLjg1OTAxcmVtIDAgMHJlbSAjYTRmZjgwLCAyLjA4MzA1cmVtIDAuMTQyMzNyZW0gMCAwcmVtICM4MGZmYzgsIDAuNzY0OTlyZW0gMi4zMzcwMnJlbSAwIDByZW0gIzgwZmZjOCwgMS4xODc0OHJlbSAxLjcxNzM0cmVtIDAgMHJlbSAjODBjOGZmLCAtMS4zNTAxOXJlbSAyLjA1NTJyZW0gMCAwcmVtICM4MGM4ZmYsIC0wLjYwMjI5cmVtIDEuOTk5MTZyZW0gMCAwcmVtICNhNDgwZmYsIC0yLjQ0ODY1cmVtIDAuMjI1NzhyZW0gMCAwcmVtICNhNDgwZmYsIC0xLjkzODUycmVtIDAuNzc1NTdyZW0gMCAwcmVtICNmZjgwZWQsIC0xLjcwMzIzcmVtIC0xLjc3MzY2cmVtIDAgMHJlbSAjZmY4MGVkLCAtMS44MTUwMXJlbSAtMS4wMzIwNHJlbSAwIDByZW0gI2ZmODA4MDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGFya2xlcyB7XHJcbiAgMCUsIDIwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IDAuMzI0NzZyZW0gLTIuNDM3NXJlbSAwIDByZW0gI2ZmODA4MCwgLTAuMzI0NzZyZW0gLTIuMDYyNXJlbSAwIDByZW0gI2ZmZWQ4MCwgMi4xMDgycmVtIC0xLjI2NTg1cmVtIDAgMHJlbSAjZmZlZDgwLCAxLjQxMDA0cmVtIC0xLjUzOTg1cmVtIDAgMHJlbSAjYTRmZjgwLCAyLjMwNDEycmVtIDAuODU5MDFyZW0gMCAwcmVtICNhNGZmODAsIDIuMDgzMDVyZW0gMC4xNDIzM3JlbSAwIDByZW0gIzgwZmZjOCwgMC43NjQ5OXJlbSAyLjMzNzAycmVtIDAgMHJlbSAjODBmZmM4LCAxLjE4NzQ4cmVtIDEuNzE3MzRyZW0gMCAwcmVtICM4MGM4ZmYsIC0xLjM1MDE5cmVtIDIuMDU1MnJlbSAwIDByZW0gIzgwYzhmZiwgLTAuNjAyMjlyZW0gMS45OTkxNnJlbSAwIDByZW0gI2E0ODBmZiwgLTIuNDQ4NjVyZW0gMC4yMjU3OHJlbSAwIDByZW0gI2E0ODBmZiwgLTEuOTM4NTJyZW0gMC43NzU1N3JlbSAwIDByZW0gI2ZmODBlZCwgLTEuNzAzMjNyZW0gLTEuNzczNjZyZW0gMCAwcmVtICNmZjgwZWQsIC0xLjgxNTAxcmVtIC0xLjAzMjA0cmVtIDAgMHJlbSAjZmY4MDgwO1xyXG4gIH1cclxufVxyXG4gIiwiLyogdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSAqL1xuLlNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW9uQnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5Db250ZW50IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xufVxuXG4udG9wLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0OTQ5OyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrIDEwMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uYm90dG9tLW92ZXJsYXktdmlzaWJsZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsIGJsYWNrKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2spO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50b3BPdmVybGF5RWxlbWVudHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NDM0YzE7XG59XG4udG9wT3ZlcmxheUVsZW1lbnRzIHNwYW4ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaGVhcnQxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cbi5oZWFydDEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5oZWFydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHRvcDogMjIwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmRvd25sb2FkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdG9wOiAyOTBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2xvc2VWaWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uc2hhcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDM2MHB4O1xuICBsZWZ0OiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tT3ZlcmxheUVsZW1lbnRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ib3R0b21PdmVybGF5RWxlbWVudHMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50b3Atb3ZlcmxheS1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ib3R0b20tb3ZlcmxheS1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qICAuZmFkZU91dFxuIHtcbiAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIG9wYWNpdHk6IDA7XG4gICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDVzLCBvcGFjaXR5IDVzIGxpbmVhcjtcbiB9XG4gLmZhZGVJblxuIHtcbiAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICBvcGFjaXR5OiAxO1xuICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XG4gfSAqL1xuLmNsb3NlRmFiIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiByO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjA7XG59XG4uY2xvc2VGYWIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5GdWxscGFnZSB7XG4gIGhlaWdodDogODAlO1xufVxuXG4uTGlzdCB7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbn1cblxuaW9uLXRhYnMge1xuICBoZWlnaHQ6IDEwJSAhaW1wb3J0YW50O1xuICB0b3A6IDkwJTtcbn1cblxuLml0ZW0tYmxvY2sge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIG5ldyAgKi9cbi5vdmVybGF5MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS11c2VyOmhvdmVyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEyMTcyMSwgIzAwMCk7XG4gIGZvbnQ6IDFlbSB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5baWQ9dG9nZ2xlLWhlYXJ0XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMHZ3O1xufVxuXG5baWQ9dG9nZ2xlLWhlYXJ0XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogI2UyMjY0ZDtcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XG4gIGZpbHRlcjogbm9uZTtcbiAgd2lsbC1jaGFuZ2U6IGZvbnQtc2l6ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0IDFzIGN1YmljLWJlemllcigwLjE3LCAwLjg5LCAwLjMyLCAxLjQ5KTtcbiAgYW5pbWF0aW9uOiBoZWFydCAxcyBjdWJpYy1iZXppZXIoMC4xNywgMC44OSwgMC4zMiwgMS40OSk7XG59XG5cbltpZD10b2dnbGUtaGVhcnRdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIFtpZD10b2dnbGUtaGVhcnRdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmhlcml0O1xuICBhbmltYXRpb246IGluaGVyaXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5baWQ9dG9nZ2xlLWhlYXJ0XTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm9yZGVyLXdpZHRoLCBib3JkZXItY29sb3I7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJ1YmJsZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGJ1YmJsZTtcbn1cblxuW2lkPXRvZ2dsZS1oZWFydF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIGJveC1zaGFkb3c7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNwYXJrbGVzO1xuICBhbmltYXRpb24tbmFtZTogc3BhcmtsZXM7XG59XG5cbltpZD10b2dnbGUtaGVhcnRdOmZvY3VzICsgbGFiZWwge1xuICB0ZXh0LXNoYWRvdzogMCAwIDNweCB3aGl0ZSwgMCAxcHggMXB4IHdoaXRlLCAwIC0xcHggMXB4IHdoaXRlLCAxcHggMCAxcHggd2hpdGUsIC0xcHggMCAxcHggd2hpdGU7XG59XG5cbltmb3I9dG9nZ2xlLWhlYXJ0XSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW2Zvcj10b2dnbGUtaGVhcnRdOmJlZm9yZSwgW2Zvcj10b2dnbGUtaGVhcnRdOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5bZm9yPXRvZ2dsZS1oZWFydF06YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAtMi4yNXJlbTtcbiAgYm9yZGVyOiBzb2xpZCAyLjI1cmVtICNlMjI2NGQ7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbltmb3I9dG9nZ2xlLWhlYXJ0XTphZnRlciB7XG4gIG1hcmdpbjogLTAuMTg3NXJlbTtcbiAgd2lkdGg6IDAuMzc1cmVtO1xuICBoZWlnaHQ6IDAuMzc1cmVtO1xuICBib3gtc2hhZG93OiAwLjMyNDc2cmVtIC0zcmVtIDAgLTAuMTg3NXJlbSAjZmY4MDgwLCAtMC4zMjQ3NnJlbSAtMi42MjVyZW0gMCAtMC4xODc1cmVtICNmZmVkODAsIDIuNTQ3OThyZW0gLTEuNjE2NTZyZW0gMCAtMC4xODc1cmVtICNmZmVkODAsIDEuODQ5ODJyZW0gLTEuODkwNTdyZW0gMCAtMC4xODc1cmVtICNhNGZmODAsIDIuODUyNTJyZW0gMC45ODQxOHJlbSAwIC0wLjE4NzVyZW0gI2E0ZmY4MCwgMi42MzE0NXJlbSAwLjI2NzVyZW0gMCAtMC4xODc1cmVtICM4MGZmYzgsIDEuMDA5MDVyZW0gMi44NDM4MXJlbSAwIC0wLjE4NzVyZW0gIzgwZmZjOCwgMS40MzE1NHJlbSAyLjIyNDE0cmVtIDAgLTAuMTg3NXJlbSAjODBjOGZmLCAtMS41OTQyNXJlbSAyLjU2MnJlbSAwIC0wLjE4NzVyZW0gIzgwYzhmZiwgLTAuODQ2MzVyZW0gMi41MDU5NXJlbSAwIC0wLjE4NzVyZW0gI2E0ODBmZiwgLTIuOTk3MDVyZW0gMC4zNTA5NXJlbSAwIC0wLjE4NzVyZW0gI2E0ODBmZiwgLTIuNDg2OTJyZW0gMC45MDA3M3JlbSAwIC0wLjE4NzVyZW0gI2ZmODBlZCwgLTIuMTQzMDFyZW0gLTIuMTI0MzhyZW0gMCAtMC4xODc1cmVtICNmZjgwZWQsIC0yLjI1NDc5cmVtIC0xLjM4Mjc1cmVtIDAgLTAuMTg3NXJlbSAjZmY4MDgwO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnQge1xuICAwJSwgMTcuNSUge1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydCB7XG4gIDAlLCAxNy41JSB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYnViYmxlIHtcbiAgMTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3JkZXItY29sb3I6ICNjYzhlZjU7XG4gICAgYm9yZGVyLXdpZHRoOiAyLjI1cmVtO1xuICB9XG4gIDMwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2M4ZWY1O1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBidWJibGUge1xuICAxNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJvcmRlci1jb2xvcjogI2NjOGVmNTtcbiAgICBib3JkZXItd2lkdGg6IDIuMjVyZW07XG4gIH1cbiAgMzAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3JkZXItY29sb3I6ICNjYzhlZjU7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BhcmtsZXMge1xuICAwJSwgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAwLjMyNDc2cmVtIC0yLjQzNzVyZW0gMCAwcmVtICNmZjgwODAsIC0wLjMyNDc2cmVtIC0yLjA2MjVyZW0gMCAwcmVtICNmZmVkODAsIDIuMTA4MnJlbSAtMS4yNjU4NXJlbSAwIDByZW0gI2ZmZWQ4MCwgMS40MTAwNHJlbSAtMS41Mzk4NXJlbSAwIDByZW0gI2E0ZmY4MCwgMi4zMDQxMnJlbSAwLjg1OTAxcmVtIDAgMHJlbSAjYTRmZjgwLCAyLjA4MzA1cmVtIDAuMTQyMzNyZW0gMCAwcmVtICM4MGZmYzgsIDAuNzY0OTlyZW0gMi4zMzcwMnJlbSAwIDByZW0gIzgwZmZjOCwgMS4xODc0OHJlbSAxLjcxNzM0cmVtIDAgMHJlbSAjODBjOGZmLCAtMS4zNTAxOXJlbSAyLjA1NTJyZW0gMCAwcmVtICM4MGM4ZmYsIC0wLjYwMjI5cmVtIDEuOTk5MTZyZW0gMCAwcmVtICNhNDgwZmYsIC0yLjQ0ODY1cmVtIDAuMjI1NzhyZW0gMCAwcmVtICNhNDgwZmYsIC0xLjkzODUycmVtIDAuNzc1NTdyZW0gMCAwcmVtICNmZjgwZWQsIC0xLjcwMzIzcmVtIC0xLjc3MzY2cmVtIDAgMHJlbSAjZmY4MGVkLCAtMS44MTUwMXJlbSAtMS4wMzIwNHJlbSAwIDByZW0gI2ZmODA4MDtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGFya2xlcyB7XG4gIDAlLCAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IDAuMzI0NzZyZW0gLTIuNDM3NXJlbSAwIDByZW0gI2ZmODA4MCwgLTAuMzI0NzZyZW0gLTIuMDYyNXJlbSAwIDByZW0gI2ZmZWQ4MCwgMi4xMDgycmVtIC0xLjI2NTg1cmVtIDAgMHJlbSAjZmZlZDgwLCAxLjQxMDA0cmVtIC0xLjUzOTg1cmVtIDAgMHJlbSAjYTRmZjgwLCAyLjMwNDEycmVtIDAuODU5MDFyZW0gMCAwcmVtICNhNGZmODAsIDIuMDgzMDVyZW0gMC4xNDIzM3JlbSAwIDByZW0gIzgwZmZjOCwgMC43NjQ5OXJlbSAyLjMzNzAycmVtIDAgMHJlbSAjODBmZmM4LCAxLjE4NzQ4cmVtIDEuNzE3MzRyZW0gMCAwcmVtICM4MGM4ZmYsIC0xLjM1MDE5cmVtIDIuMDU1MnJlbSAwIDByZW0gIzgwYzhmZiwgLTAuNjAyMjlyZW0gMS45OTkxNnJlbSAwIDByZW0gI2E0ODBmZiwgLTIuNDQ4NjVyZW0gMC4yMjU3OHJlbSAwIDByZW0gI2E0ODBmZiwgLTEuOTM4NTJyZW0gMC43NzU1N3JlbSAwIDByZW0gI2ZmODBlZCwgLTEuNzAzMjNyZW0gLTEuNzczNjZyZW0gMCAwcmVtICNmZjgwZWQsIC0xLjgxNTAxcmVtIC0xLjAzMjA0cmVtIDAgMHJlbSAjZmY4MDgwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/main-list/main-list.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/main-list/main-list.page.ts ***!
    \*************************************************************/

  /*! exports provided: MainListPage */

  /***/
  function srcAppPagesDashboardMainListMainListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainListPage", function () {
      return MainListPage;
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

    var MainListPage = /*#__PURE__*/function () {
      function MainListPage(plt, alertCtrl, fileOpener, router, route, toastCtrl, imagePicker, api, file, storage, fileChooser, database, socialSharing, downloader, filePathobject, base64, httpClient, http, gestureCtrl, zone, modal, navParams) {
        _classCallCheck(this, MainListPage);

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
        this.gestureCtrl = gestureCtrl;
        this.zone = zone;
        this.modal = modal;
        this.navParams = navParams;
        this.apiKey = '';
        this.toggle = 'slider';
        this.className = 'Hide';
        this.className2 = 'Show';
        this.className3 = 'Show';
        this.dataList = [];
        this.cloudFiles2 = [];
        this.cloudFiles3 = [];
        this.uploadProgress = 0;
        this.FileName = "";
        this.FilePath = "";
        this.isDownloadStart = false;
        this.isDownload = false;
        this.isShareStart = false;
        this.isShare = false;
        this.isLike = false;
        this.green = "green";
        this.randomNo = 0;
        this.Current = 1;
        this.panCount = 0;
        this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delay = 1500;
        this.longPressActive = false;
        this.UploadID = this.api.UploadID;
        this.getcurrentFiles("FilePath");
      }

      _createClass(MainListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadLongPressOnElement();
          this.PlayVideo(this.FilePath, this.UploadID);
        }
      }, {
        key: "Reset",
        value: function Reset() {
          this.className = 'Hide';
          this.className2 = 'Show';
          var video = this.myvideo1.nativeElement;
          video.src = "";
        }
      }, {
        key: "nextVideo",
        value: function nextVideo(i) {
          this.isDownload = false;
          this.isShare = false;
          this.isLike = false;
          this.getcurrentFiles("Curindex");

          if (i == 1) {
            this.Curindex = this.Curindex + 1;
            this.getcurrentFiles("UploadID");
          } else {
            if (this.Curindex >= 0) {
              this.Curindex = this.Curindex - 1;
              this.getcurrentFiles("UploadID");
            }
          }

          var video = this.myvideo1.nativeElement;
          video.poster = "assets/load.gif";
          var max = 0;

          if (this.Current == 1) {
            max = this.api.CurrentDatalist.length;
          } else if (this.Current == 2) {
            max = this.cloudFiles2.length;
          } else if (this.Current == 3) {
            max = this.cloudFiles3.length;
          }

          this.getcurrentFiles("Curindex");

          if (this.Curindex <= max) {
            this.getcurrentFiles("FilePath");

            if (this.FilePath.includes('.jpg') || this.FilePath.includes('.jpeg') || this.FilePath.includes('.png') || this.FilePath.includes('.gif')) {
              if (i == 1) {
                this.Curindex = this.Curindex + 1;
                this.getcurrentFiles("UploadID");

                if (this.Curindex < max) {
                  this.nextVideo(1);
                }
              } else {
                this.Curindex = this.Curindex - 1;
                this.getcurrentFiles("UploadID");

                if (this.Curindex > 0) {
                  this.nextVideo(0);
                }
              }
            } else {
              this.getcurrentFiles("FileName");
              this.getcurrentFiles("ThumbPath");
              this.getcurrentFiles("isLike");
              this.getcurrentFiles("isDownload");
              this.getcurrentFiles("isShare");
              this.getcurrentFiles("FilePath");
              video.src = this.FilePath;
              video.poster = this.ThumbPath;
              video.play(); //this.getcurStatus();
            }
          } else {}
        }
      }, {
        key: "play1",
        value: function play1(url) {
          var video = this.myvideo1.nativeElement;
          video.src = url;
          video.poster = "assets/load.gif";
          video.play();
          this.className = 'Show';
          this.className2 = 'Hide';
        }
      }, {
        key: "PlayVideo",
        value: function PlayVideo(url, UploadID) {
          this.UploadID = UploadID;
          this.FilePath = url;
          this.getcurrentFiles("isDownload");
          this.getcurrentFiles("isShare");
          this.getcurrentFiles("isLike");
          this.getcurrentFiles("FileName");

          if (url.indexOf('.MOV') > -1 || url.indexOf('.mp4') > -1) {
            this.play1(url);
          }
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
          var _this = this;

          this.UploadID = UploadID;
          this.FilePath = FilePath;
          this.getcurrentFiles("Curindex");
          this.Downloadloader(true);
          this.isDownloadStart = true;
          var request = {
            uri: FilePath,
            title: 'Smate Download',
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
            _this.like(_this.UploadID, false, false, true);

            _this.Downloadloader(false);

            _this.isDownloadStart = false;
          })["catch"](function (error) {
            console.log(error);
            alert(error);

            _this.Downloadloader(false);
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
          var _this2 = this;

          this.UploadID = UploadID;
          this.getcurrentFiles("Curindex");
          this.Shareloader(true);
          var request = {
            uri: filePath,
            title: 'Smate Download',
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
            _this2.toBaseImg(location);
          })["catch"](function (error) {
            alert(error);

            _this2.Shareloader(false);

            _this2.isShareStart = false;
          });
        }
      }, {
        key: "toBaseImg",
        value: function toBaseImg(location) {
          var _this3 = this;

          var New = "data:video/mp4;base64";
          this.filePathobject.resolveNativePath(location).then(function (nativepath) {
            _this3.base64.encodeFile(nativepath).then(function (base64File) {
              var str = base64File.split(',');
              var headerString = str[0];
              _this3.thumbnailData = base64File.replace(headerString, New);

              _this3.Shareloader(false);

              _this3.isShareStart = false;

              _this3.socialSharing.shareViaWhatsApp("", _this3.thumbnailData, null).then(function () {
                _this3.like(_this3.UploadID, true, false, false);
              })["catch"](function (error) {
                alert(error);

                _this3.Shareloader(false);
              });
            })["catch"](function (error) {
              alert(error);

              _this3.Shareloader(false);
            });
          })["catch"](function (error) {
            alert(error);

            _this3.Shareloader(false);
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
          var _this4 = this;

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
            var index = _this4.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == UploadID;
            });

            if (isLike == true) {
              var Arrlike = _this4.api.CurrentDatalist[index]["isLike"];

              if (Arrlike == 0) {
                _this4.api.CurrentDatalist[index].isLike = 1;
                _this4.isLike = true;
              } else {
                _this4.api.CurrentDatalist[index].isLike = 0;
                _this4.isLike = false;
              }
            }

            if (isShare == true) {
              var ArrShare = _this4.api.CurrentDatalist[index]["isShare"];

              if (ArrShare == 0) {
                _this4.api.CurrentDatalist[index].isShare = 1;
                _this4.isShare = false;
              } else {
                _this4.api.CurrentDatalist[index].isShare = 0;
                _this4.isShare = false;
              }
            }

            if (isDownload == true) {
              var ArrDownload = _this4.api.CurrentDatalist[index]["isDownload"];

              if (ArrDownload == 0) {
                _this4.api.CurrentDatalist[index].isDownload = 1;
                _this4.isDownload = false;
              } else {
                _this4.api.CurrentDatalist[index].isDownload = 0;
                _this4.isDownload = false;
              }
            }

            console.log(data.status);
          })["catch"](function (error) {
            console.log(error.status);
          });
        }
      }, {
        key: "loadLongPressOnElement",
        value: function loadLongPressOnElement() {
          var _this5 = this;

          var video = this.myvideo1.nativeElement;
          this.style = video.style;
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var gesture = this.gestureCtrl.create({
            el: video,
            threshold: 100,
            maxAngle: 100,
            gestureName: 'long-press',
            direction: undefined,
            onStart: function onStart() {
              _this5.style.transition = "none";
            },
            onMove: function onMove(ev) {
              _this5.panCount = _this5.panCount + 1;
              _this5.style.transform = "translateY(".concat(ev.deltaY, "px) rotate(").concat(ev.deltaX / 20, "deg)"); //  console.log(ev.deltaY); 
            },
            onEnd: function onEnd(ev) {
              /* console.log('start end');
               console.log(ev.deltaY);*/
              _this5.style.transform = '';

              if (ev.deltaY > 10) {
                _this5.nextVideo(0);
              } else {
                _this5.nextVideo(1);
              }
            }
          });
          gesture.enable(true);
        }
      }, {
        key: "getcurrentFiles",
        value: function getcurrentFiles(fieldname) {
          var _this6 = this;

          if (fieldname == "UploadID") {
            this.UploadID = this.api.CurrentDatalist[this.Curindex].UploadID;
          } else if (fieldname == "FileName") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.FileName = this.api.CurrentDatalist[this.Curindex].FileName;
          } else if (fieldname == "ThumbPath") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.ThumbPath = this.api.CurrentDatalist[this.Curindex].ThumbPath;
          } else if (fieldname == "Curindex") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
          } else if (fieldname == "FilePath") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.FilePath = this.api.CurrentDatalist[this.Curindex].FilePath;
          } else if (fieldname == "isDownload") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isDownload = this.api.CurrentDatalist[this.Curindex].isDownload;
          } else if (fieldname == "isShare") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isShare = this.api.CurrentDatalist[this.Curindex].isShare;
          } else if (fieldname == "isLike") {
            this.Curindex = this.api.CurrentDatalist.findIndex(function (obj) {
              return obj.UploadID == _this6.UploadID;
            });
            this.isLike = this.api.CurrentDatalist[this.Curindex].isLike;
          }
        }
      }, {
        key: "Shareloader",
        value: function Shareloader(val) {
          this.api.CurrentDatalist[this.Curindex].isShareStart = val;
        }
      }, {
        key: "Downloadloader",
        value: function Downloadloader(val) {
          this.api.CurrentDatalist[this.Curindex].isDownloadStart = val;
        }
      }, {
        key: "close",
        value: function close() {
          this.modal.dismiss();
        }
      }]);

      return MainListPage;
    }();

    MainListPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MainListPage.prototype, "press", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("delay")], MainListPage.prototype, "delay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myvideo1')], MainListPage.prototype, "myvideo1", void 0);
    MainListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/main-list/main-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-list.page.scss */
      "./src/app/pages/dashboard/main-list/main-list.page.scss"))["default"]]
    })], MainListPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-dashboard-home-home-module~pages-dashboard-main-list-~c6908d57-es5.js.map