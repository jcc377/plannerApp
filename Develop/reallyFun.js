$(document).ready(function () {
    $("#saveBtn900").on("click", function () {
        var taskInformation = $("#task9am").val();
        console.log("taskinfo:", taskInformation);
        // 1. figure out how to get time of right row - grab an attribute from parent component
        // parent component of the textarea is the div in html, and div has a unique id, grab the unique id 
        // 2. create a "time" variable, store the time of each row in time var
        // put time variable in local storage - local storage.setitem is last line of each funciton
        // 3.
        localStorage.setItem("9am",taskInformation);
    // get item by time (9am) out of local storage, and then place in html
    //then store item as a valeu of a text area
    $("9am").val(taskInformation) // getItem("9am")
    
});

$("#saveBtn1000").on("click", function () {
    var taskInformation = $("#task10am").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("10am",taskInformation);
$("10am").val(taskInformation)
});

$("#saveBtn1100").on("click", function () {
    var taskInformation = $("#task11am").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("11am",taskInformation);
$("11am").val(taskInformation)
});

$("#saveBtn1200").on("click", function () {
    var taskInformation = $("#task12pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("12pm",taskInformation);
$("12pm").val(taskInformation)
});

$("#saveBtn1300").on("click", function () {
    var taskInformation = $("#task1pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("1pm",taskInformation);
$("1pm").val(taskInformation)
});

$("#saveBtn1400").on("click", function () {
    var taskInformation = $("#task2pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("2pm",taskInformation);
$("2pm").val(taskInformation)
});

$("#saveBtn1500").on("click", function () {
    var taskInformation = $("#task3pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("3pm",taskInformation);
$("3pm").val(taskInformation)
});

$("#saveBtn1600").on("click", function () {
    var taskInformation = $("#task4pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("4pm",taskInformation);
$("4pm").val(taskInformation)
});

$("#saveBtn1700").on("click", function () {
    var taskInformation = $("#task5pm").val();
    console.log("taskinfo:", taskInformation);
    localStorage.setItem("5pm",taskInformation);
$("5pm").val(taskInformation)
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

