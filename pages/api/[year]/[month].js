import { genCalendarMonth } from "../../../utils/calendarLoops";

function calendar(request, response) {
    const year = request.query.year;
    const month = request.query.month;
    response.json(genCalendarMonth(year, month))
}

export default calendar;