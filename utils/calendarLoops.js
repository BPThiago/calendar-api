import calcDayFromDate from "./calcDayFromDate";

function genCalendarWithYearInterval(initial, final) {
    const calendar = {}
    for (let y = initial; y <= final; y++) {
        calendar[y] = genCalendarYear(y);
    }
    return calendar
}

function genCalendarYear(y) {
    const yearCalendar = {}
    for (let m = 1; m <= 12; m++) {
        yearCalendar[m] = genCalendarMonth(y, m)
    }
    return yearCalendar
}


function genCalendarMonth(y, m) {
    const monthCalendar = {};
    const defaultMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthDays = (m == 2 && y % 4 == 0 && (y % 100 != 0 || y % 400 == 0) ? 29 : defaultMonthDays[m - 1]);

    for (let d = 1; d <= monthDays; d++) {
        const dayName = calcDayFromDate(y, m - 1, d);
        monthCalendar[d] = dayName;
    };
    return monthCalendar;
}

export {genCalendarWithYearInterval, genCalendarYear, genCalendarMonth};