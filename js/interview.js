$(document).ready(function() {
    let name = sessionStorage.getItem('name');
    console.log(name);
    $.getJSON('./../interviews.json', function(data) {
      let div = $('#interview');
      $.each(data.interviews, function(i, artist) {
        if (artist.name === name) {
          let artistInfo = $('<p>').text(`${artist.month}: ${artist.name}`);
          let artistSummary = $('<p>').text(artist.summary);
          let artistBio = $('<p>').text(artist.bio);
          let writtenLink = $('<a>', {
            text: 'interview text',
            href: artist.link,
            target: '_blank'
          });
          let artistCredits = $('<ul>');
          $.each(artist.credits, function(j, credit) {
            let creditItem = $('<li>').text(credit.name);
            artistCredits.append(creditItem);
          });
          div.append(artistInfo, artistSummary, artistBio, artistCredits, writtenLink);
        }
      });
    });
  });
