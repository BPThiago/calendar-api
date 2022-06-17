import { genCalendarYear } from "../../../utils/calendarLoops";

function calendar(request, response) {
    console.log(request, response)
    const year = request.query.year
    response.json(genCalendarYear(year))
}

export default calendar;