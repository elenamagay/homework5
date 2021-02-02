$(document).ready(function(){
    var today = moment().format("MMMM Do YYYY")
    $("#currentDay").text(today);
   
    console.log(today)
    function currentTime() {
        var realTime = moment().hour()
        $("textarea").each(function (){
        var currTime = parseInt($(this).attr("id"));

            if (currTime < realTime) {
                $(this).removeClass("present future");
                $(this).addClass("past");
            } else if (currTime > realTime) {
                $(this).removeClass("past present");
                $(this).addClass("future");
            } else {
                $(this).removeClass("past future");
                $(this).addClass("present");
            }    
        })
    }
    currentTime();

    $(".saveBtn").on("click", function(event) {
        event.preventDefault ();
      
        var eventDescription = $(".eventDescription");
        
        for (var i = 0; i < eventDescription.length; i++) {
            var savedEvent = [];
            var key = $(this).attr("id");
            
            var val = $(this).siblings(".eventDescription").val();
            savedEvent.push(eventDescription.val());
            localStorage.setItem(key, val);
        }
        // console.log(key);
        // console.log(val);
    })

    var nineAM = localStorage.getItem("timeblock_9");
    $("#nineam").text(nineAM);
    console.log(localStorage.getItem("timeblock_9"));

    var tenAM = localStorage.getItem("timeblock_10");
    $("#tenam").text(tenAM);
    console.log(localStorage.getItem("timeblock_10"));

    var elevenAM = localStorage.getItem("timeblock_11");
    $("#elevenam").text(elevenAM);
    console.log(localStorage.getItem("timeblock_11"));

    var twelvePM = localStorage.getItem("timeblock_12");
    $("#twelvepm").text(twelvePM);
    console.log(localStorage.getItem("timeblock_12"));

    var onePM = localStorage.getItem("timeblock_13");
    $("#onepm").text(onePM);
    console.log(localStorage.getItem("timeblock_13"));

    var twoPM = localStorage.getItem("timeblock_14");
    $("#twopm").text(twoPM);
    console.log(localStorage.getItem("timeblock_14"));

    var threePM = localStorage.getItem("timeblock_15");
    $("#threepm").text(threePM);
    console.log(localStorage.getItem("timeblock_15"));

    var fourPM = localStorage.getItem("timeblock_16");
    $("#fourpm").text(fourPM);
    console.log(localStorage.getItem("timeblock_16"));
    
    var fivePM = localStorage.getItem("timeblock_17");
    $("#fivepm").text(fivePM);
    console.log(localStorage.getItem("timeblock_17"));
})