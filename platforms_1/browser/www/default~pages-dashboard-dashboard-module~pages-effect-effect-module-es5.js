function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-effect-effect-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/effect/effect.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/effect/effect.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEffectEffectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n<ion-content>\n        <div class=\"page\">\n  <div class=\"marvel-device nexus5\">\n    <div class=\"top-bar\"></div>\n    <div class=\"sleep\"></div>\n    <div class=\"volume\"></div>\n    <div class=\"camera\"></div>\n    <div class=\"screen\">\n      <div class=\"screen-container\">\n        <div class=\"status-bar\">\n          <div class=\"time\"></div>\n          <div class=\"battery\">\n            <i class=\"zmdi zmdi-battery\"></i>\n          </div>\n          <div class=\"network\">\n            <i class=\"zmdi zmdi-network\"></i>\n          </div>\n          <div class=\"wifi\">\n            <i class=\"zmdi zmdi-wifi-alt-2\"></i>\n          </div>\n          <div class=\"star\">\n            <i class=\"zmdi zmdi-star\"></i>\n          </div>\n        </div>\n        <div class=\"chat\">\n          <div class=\"chat-container\">\n            <div class=\"user-bar\">\n                <div class=\"back\">\n                    <ion-icon name=\"arrow-back-outline\"  (click)=\"close()\"></ion-icon>\n                     \n                </div>\n              <div class=\"avatar\">\n                 <ion-icon name=\"musical-notes\" (click)=\"ApplyFilter(data)\"></ion-icon>\n              \n               <!--  <img src=\"\" alt=\"Avatar\"> -->\n              </div>\n              <div class=\"name\">\n                <span>Comment</span>\n                <!--<span class=\"status\">online</span>-->\n              </div>\n              <div class=\"actions more\">\n                  <ion-icon name=\"close\"  (click)=\"close()\"></ion-icon> \n              </div>\n              <div class=\"actions attachment\">\n                <i class=\"zmdi zmdi-attachment-alt\"></i>\n              </div>\n              <div class=\"actions\">\n                <i class=\"zmdi zmdi-phone\"></i>\n              </div>\n            </div>\n            <div class=\"conversation\">\n              <div class=\"conversation-container\">\n\n\n  \n<ion-card> \n   \n   \n  <ion-card-content> \n  \n  <div class=\"container\" >\n\n    <img *ngIf=\"data.Extension == 'jpg' || data.Extension == 'jpeg'||data.Extension == 'png'\"\n  src=\"{{data.FilePath}}\"  />  \n  <img  *ngIf=\"data.Extension != 'jpg' && data.Extension != 'jpeg'&& data.Extension != 'png' \" \n  src=\"{{data.ThumbPath}}\"   /> \n\n      \n  </div> \n  <div>\n   \n \n  </div>\n  <div>\n     <video class=\"mainContent\"   #myvideo1  poster=\"assets/load.gif\" controls=\"controls\" preload=\"auto\" webkit-playsinline=\"webkit-playsinline\">\n     <span class= \"overlay-visible top-overlay-visible\"> \n     </span> \n    <source id='mp4Source'/> \n  </video>\n</div>\n  </ion-card-content> \n</ion-card>\n  \n               </div>\n                <form class=\"conversation-compose\">\n\n                \n                 \n                 \n                <button class=\"send\">\n                    <div class=\"circle\">\n                        <ion-icon name=\"send\" (click)=\"CreateFilter()\"></ion-icon>\n                           \n                         \n                    </div>\n                  </button>\n                   <button class=\"send\">\n                    <div class=\"circle\">\n                         \n                          <ion-icon    class=\"icon\" name=\"play-circle-outline\" (click)=\"playVideo()\"></ion-icon>\n                         \n                    </div>\n                  </button>\n              </form>\n       \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/effect/effect.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/effect/effect.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEffectEffectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail {\n  margin-right: 0px;\n  margin-bottom: 0px;\n}\n\nion-item {\n  --padding-start: 5px;\n}\n\nion-img {\n  height: 45px;\n  width: 45px;\n}\n\n.head {\n  font-size: 12px;\n  color: gray;\n}\n\n.detail {\n  font-size: 13px;\n  font-style: normal;\n}\n\nion-avatar {\n  height: 40px;\n  width: 40px;\n}\n\n/* ion-card {\n\tmax-height:  86%;\n\toverflow: scroll;\n} */\n\nion-footer {\n  display: block;\n  position: fixed;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n  bottom: 0;\n}\n\n/* new css */\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.marvel-device .screen {\n  text-align: left;\n}\n\n.screen-container {\n  height: 100%;\n}\n\n/* Status Bar */\n\n.status-bar {\n  height: 25px;\n  background: #004e45;\n  color: #fff;\n  font-size: 14px;\n  padding: 0 8px;\n}\n\n.status-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.status-bar div {\n  float: right;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 0 0 8px;\n  font-weight: 600;\n}\n\n/* Chat */\n\n.chat {\n  height: calc(100% - 69px);\n}\n\n.chat-container {\n  height: 100%;\n}\n\n/* User Bar */\n\n.user-bar {\n  height: 55px;\n  background: #092503;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 24px;\n  position: relative;\n  z-index: 1;\n}\n\n.user-bar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.user-bar div {\n  float: left;\n  transform: translateY(-50%);\n  position: relative;\n  top: 50%;\n}\n\n.user-bar .actions {\n  float: right;\n  margin: 0 0 0 20px;\n}\n\n.user-bar .actions.more {\n  margin: 0 12px 0 32px;\n}\n\n.user-bar .actions.attachment {\n  margin: 0 0 0 30px;\n}\n\n.user-bar .actions.attachment i {\n  display: block;\n  transform: rotate(-45deg);\n}\n\n.user-bar .avatar {\n  margin: 0 0 0 5px;\n  width: 36px;\n  height: 36px;\n}\n\n.user-bar .avatar img {\n  border-radius: 50%;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n  display: block;\n  width: 100%;\n}\n\n.user-bar .name {\n  font-size: 17px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  letter-spacing: 0.3px;\n  margin: 0 0 0 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 110px;\n}\n\n.user-bar .status {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\n/* Conversation */\n\n.conversation {\n  height: calc(100% - 12px);\n  position: relative;\n  background: #efe7dd url(\"/assets/pattern.svg\") repeat;\n  z-index: 0;\n}\n\n.conversation ::-webkit-scrollbar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 5px;\n  height: 1px;\n  z-index: 10;\n}\n\n.conversation ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.conversation ::-webkit-scrollbar-thumb {\n  background: #b3ada7;\n}\n\n.conversation .conversation-container {\n  height: calc(100% - 68px);\n  box-shadow: inset 0 10px 10px -10px #000000;\n  overflow-x: hidden;\n  padding: 0 0;\n  margin-bottom: 5px;\n}\n\n.conversation .conversation-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Messages */\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1;\n}\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.metadata {\n  display: inline-block;\n  float: right;\n  padding: 0 0 0 7px;\n  position: relative;\n  bottom: -4px;\n}\n\n.metadata .time {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 11px;\n  display: inline-block;\n}\n\n.metadata .tick {\n  display: inline-block;\n  margin-left: 2px;\n  position: relative;\n  top: 4px;\n  height: 16px;\n  width: 16px;\n}\n\n.metadata .tick svg {\n  position: absolute;\n  transition: 0.5s ease-in-out;\n}\n\n.metadata .tick svg:first-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(180deg);\n}\n\n.metadata .tick svg:last-child {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: perspective(800px) rotateY(0deg);\n}\n\n.metadata .tick-animation svg:first-child {\n  transform: perspective(800px) rotateY(0);\n}\n\n.metadata .tick-animation svg:last-child {\n  transform: perspective(800px) rotateY(-179.9deg);\n}\n\n.message:first-child {\n  margin: 16px 0 8px;\n}\n\n.message.received {\n  background: #fff;\n  border-radius: 0px 5px 5px 5px;\n  float: left;\n}\n\n.message.received .metadata {\n  padding: 0 0 0 16px;\n}\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 0;\n  left: -10px;\n}\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right;\n}\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px;\n}\n\n/* Compose */\n\n.conversation-compose {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  overflow: hidden;\n  height: 50px;\n  width: 100%;\n  z-index: 2;\n}\n\n.conversation-compose div,\n.conversation-compose ion-input {\n  background: #fff;\n  height: 100%;\n}\n\n.conversation-compose .emoji {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 5px 0 0 5px;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  width: 48px;\n}\n\n.conversation-compose .input-msg {\n  border: 0;\n  flex: 1 1 auto;\n  font-size: 16px;\n  margin: 0;\n  outline: none;\n  min-width: 50px;\n}\n\n.conversation-compose .photo {\n  flex: 0 0 auto;\n  border-radius: 0 0 5px 0;\n  text-align: center;\n  position: relative;\n  width: 48px;\n}\n\n.conversation-compose .photo:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #fff;\n  border-style: solid;\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 0;\n  right: -10px;\n}\n\n.conversation-compose .photo i {\n  display: block;\n  color: #6d7e39;\n  /* color: #7d8488; */\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n\n.conversation-compose .send {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  margin-left: 8px;\n  margin-right: 8px;\n  padding: 0;\n  position: relative;\n  outline: none;\n}\n\n.conversation-compose .send .circle {\n  background: #008a7c;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.conversation-compose .send .circle i {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n/* Small Screens */\n\n@media (max-width: 768px) {\n  .marvel-device.nexus5 {\n    border-radius: 0;\n    flex: none;\n    padding: 0;\n    max-width: none;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n\n  .marvel-device > .screen .chat {\n    visibility: visible;\n  }\n\n  .marvel-device {\n    visibility: hidden;\n  }\n\n  .marvel-device .status-bar {\n    display: none;\n  }\n\n  .screen-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .conversation {\n    height: calc(100vh - 55px);\n  }\n\n  .conversation .conversation-container {\n    height: calc(100vh - 120px);\n  }\n}\n\n.popover-content, .sc-ion-popover-md, .sc-ion-popover-md-h {\n  --min-height: 10vh !important;\n  --max-height: 10vh !important;\n  --width: 100%;\n}\n\n.popover-content {\n  top: 84% !important;\n  width: 100% !important;\n}\n\n.sc-ion-popover-md {\n  top: 84% !important;\n  width: 100% !important;\n}\n\n.select-modal {\n  background: rgba(0, 0, 0, 0.5) !important;\n  padding: 20% 10% !important;\n}\n\n.mainContent {\n  width: 100%;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  overflow: hidden;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWZmZWN0L0Q6XFxJb25pYyBQcm9qZWN0XFxTaGFyZUV4cHJlc3NcXFNoYXJlRXhwcmVzcy9zcmNcXGFwcFxccGFnZXNcXGVmZmVjdFxcZWZmZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWZmZWN0L2VmZmVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUM7RUFDQyxvQkFBQTtBQ0NGOztBREVDO0VBQ0MsWUFBQTtFQUNHLFdBQUE7QUNDTDs7QURFQTtFQUVPLGVBQUE7RUFDTCxXQUFBO0FDQUY7O0FERUM7RUFDQyxlQUFBO0VBQ0Msa0JBQUE7QUNDSDs7QURFQztFQUVDLFlBQUE7RUFDTSxXQUFBO0FDQVI7O0FERUM7OztHQUFBOztBQUtBO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFFQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0EsWUFBQTs7QUFHQztFQUNDLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBLGVBQUE7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7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QkFBQTtFQ1ZGOztFRFlBO0lBQ0UsMkJBQUE7RUNURjtBQUNGOztBRFlFO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUNWSjs7QURZQTtFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUNWRjs7QURZQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURZQTtFQUVHLHlDQUFBO0VBQ0EsMkJBQUE7QUNWSDs7QURhQztFQUdPLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZmZlY3QvZWZmZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWx7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG5cdH1cclxuXHJcblx0aW9uLWltZyB7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0ICAgIHdpZHRoOiA0NXB4O1xyXG5cdH1cclxuXHJcbi5oZWFkXHJcbiAgICAgIHtcdFxyXG4gICAgICBcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiBncmF5O1xyXG5cdCAgfVxyXG5cdC5kZXRhaWwge1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0IGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHR9XHJcblxyXG5cdGlvbi1hdmF0YXJcclxuXHR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcblx0fVxyXG5cdC8qIGlvbi1jYXJkIHtcclxuXHRcdG1heC1oZWlnaHQ6ICA4NiU7XHJcblx0XHRvdmVyZmxvdzogc2Nyb2xsO1xyXG5cdH0gKi9cclxuXHRcclxuXHRpb24tZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi8qIG5ldyBjc3MgKi9cclxuIFxyXG5cclxuICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFydmVsLWRldmljZSAuc2NyZWVuIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2NyZWVuLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFyICovXHJcblxyXG4uc3RhdHVzLWJhciB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDRlNDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXIgZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBDaGF0ICovXHJcblxyXG4uY2hhdCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFVzZXIgQmFyICovXHJcblxyXG4udXNlci1iYXIge1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVzZXItYmFyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udXNlci1iYXIgZGl2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLmFjdGlvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5tb3JlIHtcclxuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcclxuICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIHtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1iYXIgLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4udXNlci1iYXIgLnN0YXR1cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIENvbnZlcnNhdGlvbiAqL1xyXG5cclxuLmNvbnZlcnNhdGlvbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiL2Fzc2V0cy9wYXR0ZXJuLnN2Z1wiKSByZXBlYXQ7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2IzYWRhNztcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDEwcHggMTBweCAtMTBweCAjMDAwMDAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBNZXNzYWdlcyAqL1xyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWVzc2FnZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAwIDAgMCA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogLTRweDtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aW1lIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNDUpO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrIHN2ZzpmaXJzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljayBzdmc6bGFzdC1jaGlsZCB7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwZGVnKTtcclxufVxyXG5cclxuLm1ldGFkYXRhIC50aWNrLWFuaW1hdGlvbiBzdmc6Zmlyc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmxhc3QtY2hpbGQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG59XHJcblxyXG4ubWVzc2FnZTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS5yZWNlaXZlZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCA1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnJlY2VpdmVkIC5tZXRhZGF0YSB7XHJcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcclxufVxyXG5cclxuLm1lc3NhZ2UucmVjZWl2ZWQ6YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHggMTBweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLnNlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNlMWZmYzc7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2Uuc2VudDphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFmZmM3O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTEwcHg7XHJcbn1cclxuXHJcbi8qIENvbXBvc2UgKi9cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgZGl2LFxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgaW9uLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5lbW9qaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAuaW5wdXQtbXNnIHtcclxuICBib3JkZXI6IDA7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbi5jb252ZXJzYXRpb24tY29tcG9zZSAucGhvdG86YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byBpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzZkN2UzOTtcclxuICAvKiBjb2xvcjogIzdkODQ4ODsgKi9cclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5zZW5kIC5jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDhhN2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSBpIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLyogU21hbGwgU2NyZWVucyAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1hcnZlbC1kZXZpY2UubmV4dXM1IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXJ2ZWwtZGV2aWNlID4gLnNjcmVlbiAuY2hhdCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLm1hcnZlbC1kZXZpY2Uge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLm1hcnZlbC1kZXZpY2UgLnN0YXR1cy1iYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zY3JlZW4tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5jb252ZXJzYXRpb24ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XHJcbiAgfVxyXG4gIC5jb252ZXJzYXRpb24gLmNvbnZlcnNhdGlvbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xyXG4gIH0gXHJcbn1cclxuIFxyXG4gIC5wb3BvdmVyLWNvbnRlbnQgICwuc2MtaW9uLXBvcG92ZXItbWQgLC5zYy1pb24tcG9wb3Zlci1tZC1oe1xyXG4gICAgLS1taW4taGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAtLW1heC1oZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcclxuICAgIC0td2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvcG92ZXItY29udGVudFxyXG57XHJcbiAgdG9wOjg0JSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcbi5zYy1pb24tcG9wb3Zlci1tZHtcclxuICB0b3A6ODQlIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QtbW9kYWwgXHJcbntcclxuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmc6IDIwJSAxMCUgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAubWFpbkNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgIH0iLCJpb24tdGh1bWJuYWlsIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5oZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLyogaW9uLWNhcmQge1xuXHRtYXgtaGVpZ2h0OiAgODYlO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xufSAqL1xuaW9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xuICBvcmRlcjogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDA7XG59XG5cbi8qIG5ldyBjc3MgKi9cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hcnZlbC1kZXZpY2UgLnNjcmVlbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zY3JlZW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTdGF0dXMgQmFyICovXG4uc3RhdHVzLWJhciB7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogIzAwNGU0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5zdGF0dXMtYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc3RhdHVzLWJhciBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIENoYXQgKi9cbi5jaGF0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OXB4KTtcbn1cblxuLmNoYXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBVc2VyIEJhciAqL1xuLnVzZXItYmFyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kOiAjMDkyNTAzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udXNlci1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi51c2VyLWJhciBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLnVzZXItYmFyIC5hY3Rpb25zLm1vcmUge1xuICBtYXJnaW46IDAgMTJweCAwIDMycHg7XG59XG5cbi51c2VyLWJhciAuYWN0aW9ucy5hdHRhY2htZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xufVxuXG4udXNlci1iYXIgLmFjdGlvbnMuYXR0YWNobWVudCBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi51c2VyLWJhciAuYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi51c2VyLWJhciAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItYmFyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBtYXJnaW46IDAgMCAwIDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4udXNlci1iYXIgLnN0YXR1cyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBDb252ZXJzYXRpb24gKi9cbi5jb252ZXJzYXRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmU3ZGQgdXJsKFwiL2Fzc2V0cy9wYXR0ZXJuLnN2Z1wiKSByZXBlYXQ7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb252ZXJzYXRpb24gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udmVyc2F0aW9uIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYjNhZGE3O1xufVxuXG4uY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDEwcHggLTEwcHggIzAwMDAwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbnZlcnNhdGlvbiAuY29udmVyc2F0aW9uLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogTWVzc2FnZXMgKi9cbi5tZXNzYWdlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGNsZWFyOiBib3RoO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tZXNzYWdlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWV0YWRhdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTRweDtcbn1cblxuLm1ldGFkYXRhIC50aW1lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZXRhZGF0YSAudGljayBzdmc6Zmlyc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCkgcm90YXRlWSgxODBkZWcpO1xufVxuXG4ubWV0YWRhdGEgLnRpY2sgc3ZnOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoMGRlZyk7XG59XG5cbi5tZXRhZGF0YSAudGljay1hbmltYXRpb24gc3ZnOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKDApO1xufVxuXG4ubWV0YWRhdGEgLnRpY2stYW5pbWF0aW9uIHN2ZzpsYXN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbn1cblxuLm1lc3NhZ2U6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDE2cHggMCA4cHg7XG59XG5cbi5tZXNzYWdlLnJlY2VpdmVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQgLm1ldGFkYXRhIHtcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcbn1cblxuLm1lc3NhZ2UucmVjZWl2ZWQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAxMHB4IDEwcHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ubWVzc2FnZS5zZW50IHtcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlLnNlbnQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZTFmZmM3O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLyogQ29tcG9zZSAqL1xuLmNvbnZlcnNhdGlvbi1jb21wb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgZGl2LFxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5lbW9qaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogNDhweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5pbnB1dC1tc2cge1xuICBib3JkZXI6IDA7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnBob3RvOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmNvbnZlcnNhdGlvbi1jb21wb3NlIC5waG90byBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmQ3ZTM5O1xuICAvKiBjb2xvcjogIzdkODQ4ODsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udmVyc2F0aW9uLWNvbXBvc2UgLnNlbmQgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMwMDhhN2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb252ZXJzYXRpb24tY29tcG9zZSAuc2VuZCAuY2lyY2xlIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIFNtYWxsIFNjcmVlbnMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFydmVsLWRldmljZS5uZXh1czUge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlID4gLnNjcmVlbiAuY2hhdCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXJ2ZWwtZGV2aWNlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubWFydmVsLWRldmljZSAuc3RhdHVzLWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zY3JlZW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLmNvbnZlcnNhdGlvbiB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XG4gIH1cblxuICAuY29udmVyc2F0aW9uIC5jb252ZXJzYXRpb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gIH1cbn1cbi5wb3BvdmVyLWNvbnRlbnQsIC5zYy1pb24tcG9wb3Zlci1tZCwgLnNjLWlvbi1wb3BvdmVyLW1kLWgge1xuICAtLW1pbi1oZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IDEwMCU7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQge1xuICB0b3A6IDg0JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLXBvcG92ZXItbWQge1xuICB0b3A6IDg0JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LW1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwJSAxMCUgIWltcG9ydGFudDtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/effect/effect.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/effect/effect.page.ts ***!
    \*********************************************/

  /*! exports provided: EffectPage */

  /***/
  function srcAppPagesEffectEffectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EffectPage", function () {
      return EffectPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/pages/service/authentication.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pages_emoji_emoji_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/emoji/emoji.page */
    "./src/app/pages/emoji/emoji.page.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var EffectPage = /*#__PURE__*/function () {
      function EffectPage(popoverCtrl, storage, navParams, toastCtrl, modal1, router, api, httpClient, http, loadingController) {
        _classCallCheck(this, EffectPage);

        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modal1 = modal1;
        this.router = router;
        this.api = api;
        this.httpClient = httpClient;
        this.http = http;
        this.loadingController = loadingController;
        this.toggled = false;
        this.message = '';
        this.CommentData = [];
        this.comment = "";
        this.CommentID = 0;
        this.commentType = 1;
        this.DownloadPath = "";
        this.data = this.navParams.data;
        this.GetCommentList();
      }

      _createClass(EffectPage, [{
        key: "GetCommentList",
        value: function GetCommentList() {
          var _this = this;

          var data1 = 'UploadID=' + this.data.UploadID + '&UserID=' + this.api.UserID;
          var url = this.api.baseUrl + "Comments?" + data1;
          this.ResultData = this.httpClient.get(url);
          this.ResultData.subscribe(function (result) {
            _this.CommentData = result;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modal1.dismiss();
        }
      }, {
        key: "CreateFilter",
        value: function CreateFilter() {
          var _this2 = this;

          this.loadingpopup();
          var param = {
            "FilterID": 1,
            "UserID": this.api.UserID,
            "music": "",
            "backimage": this.data.FilePath
          };
          var url = this.api.baseUrl + "fftool/PostCreateFilter";
          this.http.post(url, param, {}).then(function (data) {
            debugger; //this.DownloadPath=data[DownloadPath];

            _this2.play(_this2.api.baseUrl + "/Media/" + _this2.api.UserID + "/final.mp4");

            _this2.loading1.dismiss();

            console.log(data.status);
          })["catch"](function (error) {
            console.log(error.status);

            _this2.loading1.dismiss();
          });
        }
      }, {
        key: "play",
        value: function play(url) {
          var video = this.myvideo1.nativeElement;
          video.src = url;
          video.poster = "assets/load.gif";
          video.play();
        }
      }, {
        key: "loadingpopup",
        value: function loadingpopup() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...'
                    });

                  case 2:
                    this.loading1 = _context.sent;
                    _context.next = 5;
                    return this.loading1.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.loading1.dismiss();
        }
      }, {
        key: "addReply",
        value: function addReply(data) {
          this.CommentID = data.CommentID;
        }
      }, {
        key: "handleSelection",
        value: function handleSelection(event) {
          console.log(event["char"]);
          this.message += event["char"];
        }
      }, {
        key: "playVideo",
        value: function playVideo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var paths;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    paths = this.api.basePath + "/Media/" + this.api.UserID + "/final.mp4"; // this.uploadOnServer(paths);

                    this.play(paths);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ApplyFilter",
        value: function ApplyFilter(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal2;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverCtrl.create({
                      cssClass: 'select-modal',
                      component: _pages_emoji_emoji_page__WEBPACK_IMPORTED_MODULE_7__["EmojiPage"],
                      animated: true,
                      componentProps: data
                    }).then(function (modal2) {
                      modal2.present();
                      modal2.onDidDismiss().then(function () {//this.getEmployeeList(); 
                      });
                    });

                  case 2:
                    modal2 = _context3.sent;

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "uploadOnServer",
        value: function uploadOnServer(FilePaths) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var folder, exts1, VideoFilepath, fileRef;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.loadingpopup();
                    folder = "Filter/"; //File reference

                    exts1 = FilePaths.split('.').pop();
                    VideoFilepath = this.api.UserID + "filer1";
                    fileRef = this.storage.ref(folder + VideoFilepath); // const dataUrl = URL.createObjectURL(event.item(0)); 
                    //  this.add(dataUrl);

                    this.storage.upload(folder + VideoFilepath, FilePaths).then(function (snapshot) {
                      var exts = snapshot.ref.name.split('.').pop(); //this.uploadThumb(); 
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return EffectPage;
    }();

    EffectPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myvideo1')], EffectPage.prototype, "myvideo1", void 0);
    EffectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-effect',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./effect.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/effect/effect.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./effect.page.scss */
      "./src/app/pages/effect/effect.page.scss"))["default"]]
    })], EffectPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-effect-effect-module-es5.js.map