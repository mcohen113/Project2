$(function() {
  $('form').submit( function(e) {
    e.preventDefault();
    var source   = $("#search-result-template").html();
    var template = Handlebars.compile(source);
    // get holiday year from user
    let year = $('#yearInput').val();
    // get holiday name from user
    let holiday = $('#holidayInput').val();
    $.get('http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&month=x&year=' + year, function(data) {
      // console.log(data);
      let userHoliday = holiday.toUpperCase();
      // console.log('this is the api holiday response! ' , holidaysObject);
      let holidays = data.items.filter(item => {
       // console.log(item);
//grabbing last word in link for holiday using lastIndexOf & substring method, remove dashes from link
        var itemName = item.link.substring(item.link.lastIndexOf('/') + 1);
        itemName = itemName.replace('-', ' ');
        itemName = itemName.toUpperCase();

        // console.log('comparing', itemName, 'to', userHoliday);
//https://en.wikipedia.org/wiki/Levenshtein_distance
//https://www.npmjs.com/package/levenshtein to measure edit distance between words, changing one word into another


        var distance = levenshtein(itemName, userHoliday);
        console.log('distance determined to be', distance);
        if (distance > 3) return false;
        else {
          var html = template(item);
          console.log(html);
          $('#search-results').append(html);
        return true;
        }
      });
    })
    // get request to API
    // update the DOM with holiday info
  })
})
