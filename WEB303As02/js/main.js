// WEB303 Assignment 2


$(document).ready(function() {
    // use load function by using AJAX
    function load(file) {
        $.ajax({
            url: file,
            type: "GET",
            dataType: "html"
        })
        .done(function(data) {
            $("#content").html(data);
            // animation for display 
            $("#content").slideDown();
        })
        .fail(function() {
            console.error("Error loading content.");
        });
    }
  
    $("#prospect").click(function() {
        $("#content").slideUp(function() {
            load("prospect.html");
        });
    });
  
    $("#convert").click(function() {
        $("#content").slideUp(function() {
            load("convert.html");
        });
    });
  
    $("#retain").click(function() {
        $("#content").slideUp(function() {
            load("retain.html");
      });
    });
  });



