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
             var input = $(this).val();
      $(this).val('');
      event.preventDefault(); // Prevent form submission
      makeAPICall(input);
        }
      });

      

    $.getJSON('./interviews.json', function(data) {
      let div = $('#interviewsContainer');
      $.each(data.interviews, function(i, artist) {
        let artistInfo = $('<p>').text(`${artist.month}: ${artist.name}`);
        artistInfo.click(function() {
          sessionStorage.setItem('name', artist.name);
          window.location.href = './templates/interview.html';
        });
        div.append(artistInfo);
      });
    });
  });

  function makeAPICall(input) {
    $.getJSON('./search.json', function(data) {

      // Clear the previous response
      $('#resultsContainer').empty();


      // Assuming the response data is an array of items
      $.each(data.interviews, function(i, interview) {
        var name = interview.name;
        var summary = interview.summary;
        var link = interview.link;
        var usrInput = input;
        $('#resultsContainer').append('<p>Name: ' + name + '</p><p>Summary: ' + summary + '</p><a href="' + link + '" target="_blank">Interview Link</a><p>User Input: ' + usrInput + '</p><br>');
      });
    });
  }
