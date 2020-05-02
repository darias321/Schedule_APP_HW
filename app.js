$(document).ready(function () {
  $("#day").html(moment().format("MMM DD, YYYY"));
  $(".time").each(function () {
    var currentHour = moment().startOf("hour");
    var comparedHour = moment().hour($(this).attr("data-time")).startOf("hour");

    // add local storage value
    $(this)
      .children("form")
      .children("textarea")
      .val(localStorage.getItem($(this).attr("data-time")));

    if (currentHour > comparedHour) {
      // make the background of the div gray
      $(this).addClass("past");
    } else if (currentHour.isSame(comparedHour, "hour")) {
      // make bkgrnd red
      $(this).addClass("present");
    } else {
      // green background
      $(this).addClass("future");
    }
  });

  $("form").click(function (event) {
    event.preventDefault();
    var task = $(this).children("textarea").val();
    var hour = $(this).parent().attr("data-time");

    localStorage.setItem(hour, task);

    // resest button //
    document.getElementById("myForm").reset();
  });
});
