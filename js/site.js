$(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    var q1 = parseInt( $('input:radio[name=q1]:checked').val() );

    // alert(q1);
    // alert(q1);
    // alert(q1);

    var result = q1 //+ q2 + q2

    alert(result);

    if (result < -3) {
      alert('you should go to ');
    }
    else if (result < 0 && result > -4) {
      alert('you should go to Dubai');
    }
    else if (result === 0) {
      alert('you should go to Burg');
    }
    else if (result > 0 && result < 4) {
      alert('you should go to Tokyo ');
    }
    else if (result > 4) {
      alert('you should go to ');
    }

  });

});
