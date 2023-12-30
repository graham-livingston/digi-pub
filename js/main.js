$(document).ready(function() {
  // click handler
    // $("*").click(function(event) {
    //   event.stopPropagation();
    //   console.log(this.id);
    // });

    // keypress handler for command prompt
    $('#searchBar').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
          console.log($(this).val());
          $(this).val('');
          event.preventDefault(); // Prevent form submission
        }
      });

    $.getJSON('./interviews.json', function(data) {
      let div = $('#interviewsContainer');
      $.each(data.interviews, function(i, artist) {
        let artistInfo = $('<p>').text(`${artist.month}: ${artist.name}`);
        artistInfo.click(function() {
          sessionStorage.setItem('name', artist.name);
          window.location.href = '/templates/interview.html';
        });
        div.append(artistInfo);
      });
    });
    
    // sessionStorage.setItem('name', 'Artist 1');
  });
