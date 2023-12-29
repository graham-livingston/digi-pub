// click handler
$(document).ready(function() {
    $("*").click(function(event) {
      event.stopPropagation();
      console.log(this.id);
    });

    // keypress handler for command prompt
    $('#searchBar').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
          console.log($(this).val());
          $(this).val('');
          event.preventDefault(); // Prevent form submission
        }
      });

  });
