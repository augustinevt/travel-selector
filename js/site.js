$(function() {


  var img = {
    rookIsland: 'http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/6a/72/6a72583132ee38b97ed5391751d12513.jpg?itok=DBVIu3dA',
    dubai: "http://www.visitdubai.com/-/media/images/landing-page/desktop/1-discover-all-that-is-possible-in-dubai.jpg",
    tokyo: "http://s1.it.atcdn.net/wp-content/uploads/2015/08/6-Tokyo.jpg",
    whawha: "https://upload.wikimedia.org/wikipedia/commons/4/48/Branson-mo-map.png",
    paris: "http://www.dentons.com/~/media/Images/Website/Background%20Images/Offices/Paris/Paris%20Option%203.jpg"
  };

  var text = {
    rookIsland: "The Rook Islands were once considered a tropical paradise. They are filled with lush tropical jungles, rolling grasslands, thick swamps and steep mountains but years of violence and neglect have caused them to fall into a state of permanent turmoil. The once peaceful archipelago once belonged to the thriving native tribes, most notably the Rakyat, who once controlled the islands in their entirety. However, lawless pirates and militiamen have since violently taken over the archipelago.In the 15th Century Zheng He, a Chinese warlord, passed the islands during a voyage to map the oceans. They proved an ideal location for one of his most loyal warriors - Lin Cong. After Zheng He left the islands Lin Cong stole one of his colossal treasure ships, the Chaoyang, which contained massive amounts of gold and treasure collected by Zheng on his many voyages and promised his crew wealth and power which he promptly delivered.",

    dubai: "The Burj Khalifa is a stunning feat of architecture and engineering, with two observation decks on the 124th and 148th floors and a restaurant-bar on the 122nd. The world’s tallest building pierces the sky at 828m and opened in January 2010, six years after excavations began. To avoid wait times or expensive fast-track admission, book tickets online as far as 30 days in advance. Note that high humidity often cloaks Dubai in a dense haze, making views less than breathtaking.The most popular ticket is the one to the At the Top observation deck on the 124th floor (452m), where high-powered telescopes (extra fee) help bring even distant developments into focus (at least on clear days) and cleverly simulate the same view at night and 35 years back in time. Getting to the deck means passing various multimedia exhibits until a double-decker lift whisks you up at 10m per second.",

    tokyo: "This Tokyo itinerary should be perfect for travelers who will be in Tokyo for 7 days. For 3 days, 4 days, 5 days or 6 days trip, just cherry-pick on what you want to do from this 7 day Tokyo itinerary. I was fortunate enough to visit Tokyo twice on two separate trips. The first one was April and I was totally blown away by the beauty of Tokyo’s cherry blossoms! I flew back to Tokyo in May for 5 days to attend a commitment but was able to manage a day for sightseeing. If your schedule is flexible, I strongly suggest you to visit Japan during cherry blossoms typically between the last week of March up to the first week of April. The cherry blossoms period really takes the beauty of Tokyo to the next level and is highly worthy of the premium “peak season” price tag.",

    whawha: "An onomatopoetic phrase, when spoken aloud sounds like the two trumpet notes used on tv shows when a bad joke is told or something particularly cheesy happens. However, contrary to a number of 'definitions on this site, the term 'Wawa' is not an onomatopoeia for goose noise and such. The town of Wawa (as with many, many places in the United States) got its name from the American Indians that resided there. In this case, the tribe was known as the Lenni (LEN-eye) Lenape (LEN-uh-pee). According to the corporate site www.wawa.com (and anybody who grew up in the area and has paid attention)",

    paris: "Paris, the cosmopolitan capital of France, is one of the largest agglomerations in Europe, with 2.2 million people living in the dense, central city and almost 12 million people living in the whole metropolitan area. Located in the north of France on the river Seine, Paris has the well deserved reputation of being the most beautiful and romantic of all cities, brimming with historic associations and remaining vastly influential in the realms of culture, art, fashion, food and design. Dubbed the City of Light (la Ville Lumière) and Capital of Fashion, it is home to the world's finest and most luxurious fashion designers and cosmetics, such as Chanel, Dior, Yves Saint-Laurent, Guerlain, Lancôme, L'Oréal, Clarins, etc. A large part of the city, including the River Seine, is a UNESCO World Heritage Site. The city has the second highest number of Michelin restaurants in the world (after Tokyo) and contains numerous iconic landmarks, such as the world's most visited tourist site the Eiffel Tower, the Arc de Triomphe, the Notre-Dame Cathedral, the Louvre Museum, Moulin Rouge, and Lido, making it the most popular tourist destination in the world with 45 million tourists annually."
  };











  $('form').submit(function(event) {
    event.preventDefault();

    var q1 = parseInt( $('input:radio[name=q1]:checked').val() );
    var q2 = parseInt( $('input:radio[name=q2]:checked').val() );
    var q3 = parseInt( $('input:radio[name=q3]:checked').val() );
    var q4 = parseInt( $('input:radio[name=q4]:checked').val() );
    var q5 = parseInt( $('input:radio[name=q5]:checked').val() );
    var result = q1 + q2 + q3 + q4 + q5


  //  alert(q1);
  //  alert(q2);
  //  alert(q3);
  //  alert(q4);
  //  alert(q5);
  //   alert(result);

    var outputH2 = $('#output h2');
    var outputImg = $('#output img');
    var outputText = $('#output p span');


    $('#form-div').fadeOut(500, function() {
      $('#output').fadeIn();
    });

    if (result < -3) {
      outputH2.text('Rook Island');
      outputImg.attr('src', img.rookIsland );
      outputText.text(text.rookIsland);
    }
    else if (result < 0 && result > -4) {
      $('#output h1').text('Dubai');
      outputImg.attr('src', img.dubai );
      outputText.text(text.dubai);
    }
    else if (result === 0) {
      $('#output h1').text('Wha Wha');
      outputImg.attr('src', img.whawha);
      outputText.text(text.whawha);
    }
    else if (result > 0 && result < 4) {
      $('#output h1').text('Tokyo');
      outputImg.attr('src', img.tokyo );
      outputText.text(text.tokyo);
    }
    else if (result > 4) {
      $('#output h1').text('Paris');
      outputImg.attr('src', img.paris );
      outputText.text(text.paris);
    }




  });

});
