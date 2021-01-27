$(document).ready(function () {
    $("#saveBtn900").on("click", function () {
        var taskInformation = $("#task9am").val();
        console.log("taskinfo:", taskInformation);
        // 1. figure out how to get time of right row - grab an attribute from parent component
        // parent component of the textarea is the div in html, and div has a unique id, grab the unique id 
        // 2. create a "time" variable, store the time of each row in time var
        // put time variable in local storage - local storage.setitem is last line of each funciton
        
        // 3.
        localStorage.setItem("time9am",taskInformation);
    // get item by time (9am) out of local storage, and then place in html
    //then store item as a valeu of a text area
    $("idOf9amtextarea").val("place the items from local storage") // getItem("9am")
    $("idOf9amtextarea").val("place the items from local storage") // getItem("9am")
    $("idOf9amtextarea").val("place the items from local storage") // getItem("9am")
});
    // Display current day upon opening browser
    // referencing moment.js 
    var date = moment().format("MMM Do YY");
    // console.log("date:", date);
    $("#currentDay").text(date);
    // color code time blocks to represent past, present, future
    



    // save button saves textbox contents to local storage
    // saved contents remain on page during refresh
    // figure out how to save local content, similar to 04 todos exercise



});

