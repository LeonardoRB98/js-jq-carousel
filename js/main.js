

$(document).ready(
  function() {
    // foto successiva
    $('.next').click(
      function() {
        nextPhoto();
      }
    );
    // foto precedente
    $('.prev').click(
      function() {
        prevPhoto();
      }
    );

    // navigazione foto tramite pulsanti freccia della tastiera
    $(document).keydown(
      function() {
        if (event.which == 37) {
          prevPhoto();
        } else if (event.which == 39) {
          nextPhoto();
        }
      }
    )
  }
);


// -------------------------------------------------------




function nextPhoto() {
  // console.log('click freccia a destra');
  var activePhoto = $('.images img.active');
  console.log(activePhoto);
  var activeDot = $('.nav i.active');
  console.log(activeDot);

  activePhoto.removeClass('active');
  activeDot.removeClass('active');

  if (activePhoto.hasClass('last')) {

    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  } else {
    activePhoto.next().addClass('active');
    activeDot.next().addClass('active');
  }

}

function prevPhoto() {
  // console.log('click freccia a destra');
  var activePhoto = $('.images img.active');
  console.log(activePhoto);
  var activeDot = $('.nav i.active');
  console.log(activeDot);

  // rimuovo classe active da activePhoto e activeDot
  activePhoto.removeClass('active');
  activeDot.removeClass('active');

  // condizione se activePhot ha la classe first assegno la classe active a nav i.last e images img.last
  if (activePhoto.hasClass('first')) {
    $('.nav i.last').addClass('active');
    $('.images img.last').addClass('active');
  } else {
    activePhoto.prev().addClass('active');
    activeDot.prev().addClass('active');
  }

}
