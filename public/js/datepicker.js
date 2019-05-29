document.addEventListener("DOMContentLoaded", function(event) {
  const rfpDateRange = flatpickr("#pick", { mode: "range" });
  const rfpDateMultiple = flatpickr("#pick_multi", { mode: "multiple" });
  const rfpDecisionDate = flatpickr("#decision_date");
  const rfpProposalDeadline = flatpickr("#proposal_deadline");
  rfpDateRange.config.onClose.push(function(selectedDate) {
    var a = moment(selectedDate[0]);
    var b = moment(selectedDate[1]);
    var daysDiff = b.diff(a, "days") + 1; // = diff in days including start
    var headingTarget = document.querySelector("#date-row");
    var programDates = [];
    var enumerateDaysBetweenDates = function(startDate, endDate) {
      var now = startDate,
        dates = [];
      while (now.isSameOrBefore(endDate)) {
        dates.push(now.format("M/D/YYYY"));
        now.add(1, "days");
      }
      dates.reverse();
      return dates;
    };
    var fromDate = moment(selectedDate[0]);
    var toDate = moment(selectedDate[1]);
    var results = enumerateDaysBetweenDates(fromDate, toDate);
    for (let idx = 0; idx < results.length; idx++) {
      var element = results[idx];
      var heading = document.createElement("td");
      heading.innerHTML = `<div class="tc ph3 pv4">${moment(element).format(
        "M"
      )}/${moment(element).format(
        "D"
      )}<br/><input class="tc" type="number"/></div>`;
      headingTarget.parentNode.insertBefore(heading, headingTarget.nextSibling);
    }
  });
});
