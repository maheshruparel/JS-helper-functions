
// function to remove weekend and holidays from the selected date range
// required library : moment-timezone

/**
* let weekendDays = [6, 7];
* let holidays = [
*   "2020-06-23",
* ];
* 
* console.log(
*   "numberOfDays => ",
*   removeWeekendAndHolidays("2020-06-11", "2020-06-30", weekendDays, holidays)
* );
*/

const moment = require("moment-timezone");

function removeWeekendAndHolidays(startdate, enddate, weekend, holidays) {
  holidays = holidays.map((holiday) => moment(holiday).format());
  startdate = moment(startdate);
  enddate = moment(enddate);
  let numberOfDays = 0;
  while (startdate <= enddate) {
    if (
      !weekend.includes(startdate.isoWeekday()) &&
      !holidays.includes(startdate.format())
    ) {
      numberOfDays++;
    }
    startdate = startdate.add(1, "days");
  }
  return numberOfDays;
}

export default removeWeekendAndHolidays
