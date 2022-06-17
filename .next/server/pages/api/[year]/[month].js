"use strict";
(() => {
var exports = {};
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_calendarLoops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(458);

function calendar(request, response) {
    const year = request.query.year;
    const month = request.query.month;
    response.json((0,_utils_calendarLoops__WEBPACK_IMPORTED_MODULE_0__/* .genCalendarMonth */ .q2)(year, month));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458], () => (__webpack_exec__(31)));
module.exports = __webpack_exports__;

})();