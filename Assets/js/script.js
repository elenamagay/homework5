$(document).ready(function(){
    var today = moment().format("MMMM Do YYYY")
    $("#currentDate").text(today);
        
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
            var key = $(this).attr("id").val();
            var value = $(this).attr("id").v
            savedEvent.push(eventDescription.val());
            localStorage.setItem("event", savedEvent)
            
            localStorage.getItem("event", savedEvent);
        }
    })
    
})