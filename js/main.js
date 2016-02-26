

$(document).on('touchend click', '#edulastic .link1', function(){
  $('#edulastic').attr('class','stage1');
  $('#edulastic .link1').addClass('active');
  $('#edulastic .link2').removeClass('active');
  $('#edulastic .link3').removeClass('active');

});

$(document).on('touchend click', '#edulastic .link2', function(){
  $('#edulastic').attr('class','stage2');
  $('#edulastic .link1').removeClass('active');
  $('#edulastic .link2').addClass('active');
  $('#edulastic .link3').removeClass('active');
});

$(document).on('touchend click', '#edulastic .link3', function(){
  $('#edulastic').attr('class','stage3');
  $('#edulastic .link1').removeClass('active');
  $('#edulastic .link2').removeClass('active');
  $('#edulastic .link3').addClass('active');
});

$(document).on('touchend click', '#edulastic .link3', function(){
  $('#edulastic').attr('class','stage3');
  $('#edulastic .link1').removeClass('active');
  $('#edulastic .link2').removeClass('active');
  $('#edulastic .link3').addClass('active');
});





var range = 200;

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#edulastic').offset().top;
    var height = $('#edulastic').outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;

    $('.bg-green').css({ 'opacity': calc });

    if ( calc > '1' ) {
      $('.bg-green').css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      $('.bg-green').css({ 'opacity': 0 });
    }
});

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#glider').offset().top;
    var height = $('#glider').outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;

    $('.bg-purple').css({ 'opacity': calc });

    if ( calc > '1' ) {
      $('.bg-purple').css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      $('.bg-purple').css({ 'opacity': 0 });
    }
});


$(window).scroll(function() {
   var scroll = $(window).scrollTop();
   $(".particles").css('transform',  'translate3d(0px,-' + 0.2 * scroll + 'px, 0px)');
});


// $( window ).load(function() {
//   $('.clouds').css('-webkit-animation', 'clouds 2s');
//   setTimeout(function(){
//    $('#simulator .card').removeClass('out');
// }, 300);
// });

// $( document ).on( "mousemove", function( event ) {
//   $('.parallax-0').css('transform', 'translate3d(0px,0px,0px)');
//   $('.parallax-1').css('transform', 'translate3d(-'+ event.pageX / 90 + "px, -" + event.pageY / 90 + "px, 0px");
//   $('.parallax-2').css('transform', 'translate3d(-'+ event.pageX / 70 + "px, -" + event.pageY / 90 + "px, 0px");
//   $('.parallax-3').css('transform', 'translate3d(-'+ event.pageX / 30 + "px, -" + event.pageY / 90 + "px, 0px");
//   $('.parallax-4').css('transform', 'translate3d(-'+ event.pageX / 10 + "px, -" + event.pageY / 90 + "px, 0px");
// });

// (function fadeInDiv(){
//     var divs = $('.fadeIn');
//     var divsize = ((Math.random()*3) + 1).toFixed();
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//     var maxSize = 8;
//     var minSize = 7;
//     var size = (Math.random()*maxSize+minSize);
//     var elem = divs.eq(Math.floor(Math.random()*divs.length));
//     if (!elem.is(':visible')){
//         elem.fadeIn(Math.floor(Math.random()*250),fadeInDiv);
//         elem.css({
//             'transform':'translate3d('+posx+'px, '+posy+'px, 0px',
//             'position':'absolute',
//             'font-size': size+'px',
//         });
//     } else {
//         elem.fadeOut(Math.floor(Math.random()*500),fadeInDiv);
//     }
// })();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 700,
      "density": {
        "enable": true,
        "value_area": 3206
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 9
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 5,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 70,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 640,
        "rotateY": 2970
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 2,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
