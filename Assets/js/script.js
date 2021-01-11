$(document).ready(function(){
    $("#currentDate").text(moment().format("MMMM Do YYYY"));

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
            savedEvent.push(eventDescription.val());
            localStorage.setItem("event", savedEvent)
            
            localStorage.getItem("event", savedEvent);
        }
    })

})