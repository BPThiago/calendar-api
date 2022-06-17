function calcDayFromDate(year, month, day) {
    const date = new Date(year, month, day);

    return date.getDay();

};

export default calcDayFromDate;