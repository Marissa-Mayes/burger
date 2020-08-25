$(document).ready (function(){

    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let newDevoured = $(this).data("devoured");
      let eaten = {
          devoured: newDevoured
      }
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("changed to eaten", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("newBurgerButton").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
  let newBurger = {
        burger_name: $("#bu").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  
