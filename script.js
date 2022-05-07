let dateToday = document.getElementById("date-today");

let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year = today.getFullYear();

dateToday.textContent = '${day}/${month}/${year}'; 



$(document).ready(function () {
    $("saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker(){
        var timeNow = moment().hour();

        $(".time-block").each(function)) {
            var blockTime = parseInt(this).attr("id").split("hour"[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

timeTracker();

})
