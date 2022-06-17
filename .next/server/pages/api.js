"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api)
});

;// CONCATENATED MODULE: ./utils/calcDayFromDate.js
function calcDayFromDate(year, month, day) {
    const date = new Date(year, month, day);
    return date.getDay();
}
;
/* harmony default export */ const utils_calcDayFromDate = (calcDayFromDate);

;// CONCATENATED MODULE: ./utils/calendarLoops.js

function genCalendarWithYearInterval(initial, final) {
    const calendar = {};
    for(let y = initial; y <= final; y++){
        calendar[y] = genCalendarYear(y);
    }
    return calendar;
}
function genCalendarYear(y) {
    const yearCalendar = {};
    for(let m = 1; m <= 12; m++){
        yearCalendar[m] = genCalendarMonth(y, m);
    }
    return yearCalendar;
}
function genCalendarMonth(y, m) {
    const monthCalendar = {};
    const defaultMonthDays = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    const monthDays = m == 2 && y % 4 == 0 && (y % 100 != 0 || y % 400 == 0) ? 29 : defaultMonthDays[m - 1];
    for(let d = 1; d <= monthDays; d++){
        const dayName = utils_calcDayFromDate(y, m - 1, d);
        monthCalendar[d] = dayName;
    }
    ;
    return monthCalendar;
}


;// CONCATENATED MODULE: ./pages/api/index.js

function calendar(request, response) {
    const initialYear = request.query.initial && !isNaN(request.query.initial) ? parseInt(request.query.initial) : new Date().getFullYear();
    const finalYear = request.query.final && !isNaN(request.query.initial) && request.query.final >= initialYear && request.query.final <= initialYear + 2500 ? parseInt(request.query.final) : initialYear + 10;
    const calendar1 = genCalendarWithYearInterval(initialYear, finalYear);
    response.json(calendar1);
}
;
/* harmony default export */ const api = (calendar);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(880));
module.exports = __webpack_exports__;

})();