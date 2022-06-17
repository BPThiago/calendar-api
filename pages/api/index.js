import { genCalendarWithYearInterval } from "../../utils/calendarLoops";

function calendar(request, response) {
    const initialYear = request.query.initial && !isNaN(request.query.initial) ? parseInt(request.query.initial) : new Date().getFullYear();
    const finalYear = request.query.final && !isNaN(request.query.initial) && request.query.final >= initialYear && request.query.final <= initialYear + 2500 ? parseInt(request.query.final) : initialYear + 10;

    const calendar = genCalendarWithYearInterval(initialYear, finalYear);
    response.json(calendar);
};


export default calendar;