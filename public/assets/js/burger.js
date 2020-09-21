$(document).ready(function () {
  $(".change-devoured").on("click", function () {
      var id = $(this).data("id");

      var newBurgerState = {
          devoured: true
      };

      //going to burgers/update route putting new data there so update devour-state
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
      }).then(
          function () {
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("order a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
          type: "DELETE"
      }).then(
          function () {
              console.log("deleted burger", id);
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });
});