

$(document).ready(
  function() {

    $('.next').click(
      function() {
        nextPhoto();
      }
    )

    $('.prev').click(
      function() {
        prevPhoto();
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

  activePhoto.removeClass('active');
  activeDot.removeClass('active');

  if (activePhoto.hasClass('first')) {
    $('.nav i.last').addClass('active');
    $('.images img.last').addClass('active');
  } else {
    activePhoto.prev().addClass('active');
    activeDot.prev().addClass('active');
  }

}
