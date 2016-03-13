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


$(document).on('touchend click', '#glider .link1', function(){
  $('#glider').attr('class','stage1');
  $('#glider .link1').addClass('active');
  $('#glider .link2').removeClass('active');
  $('#glider .link3').removeClass('active');
});

$(document).on('touchend click', '#glider .link2', function(){
  $('#glider').attr('class','stage2');
  $('#glider .link1').removeClass('active');
  $('#glider .link2').addClass('active');
  $('#glider .link3').removeClass('active');
});

$(document).on('touchend click', '#glider .link3', function(){
  $('#glider').attr('class','stage3');
  $('#glider .link1').removeClass('active');
  $('#glider .link2').removeClass('active');
  $('#glider .link3').addClass('active');
});


$(document).on('touchend click', '#spaces .link1', function(){
  $('#spaces').attr('class','stage1');
  $('#spaces .link1').addClass('active');
  $('#spaces .link2').removeClass('active');
  $('#spaces .link3').removeClass('active');
});

$(document).on('touchend click', '#spaces .link2', function(){
  $('#spaces').attr('class','stage2');
  $('#spaces .link1').removeClass('active');
  $('#spaces .link2').addClass('active');
  $('#spaces .link3').removeClass('active');
});

$(document).on('touchend click', '#spaces .link3', function(){
  $('#spaces').attr('class','stage3');
  $('#spaces .link1').removeClass('active');
  $('#spaces .link2').removeClass('active');
  $('#spaces .link3').addClass('active');
});



var range = 300;

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
   $(".particles").css('transform',  'translate3d(0px,-' + 0.8 * scroll + 'px, 0px)');
   $("canvas").css('transform',  'translate3d(0px,' + 0.1 * scroll + 'px, 0px)');
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

(function fadeInDiv(){
    var divs = $('.fadeIn');
    var posx = (Math.random() * 1400).toFixed();
    var posy = (Math.random() * 1000).toFixed();
    var maxSize = 1;
    var minSize = 0.5;
    var size = Math.round((Math.random()*maxSize+minSize)*10)/10;
    var elem = divs.eq(Math.floor(Math.random()*divs.length));
    if (!elem.is(':visible')){
        elem.fadeIn(Math.floor(Math.random()*250),fadeInDiv);
        elem.css({
            'transform': 'translate3d(' + posx +'px, ' + posy + 'px, 0px) scale(' + size + ')',
            'position':'absolute',
            //'font-size': size+'px',
        });
    } else {
        elem.fadeOut(Math.floor(Math.random()*500),fadeInDiv);
    }
})();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 3206
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
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
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
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
        "enable": true,
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

//------------Member info------------//

$(document).on('touchend click','.js-show-desc', function(e){
  var targ = $(e.target);
  var holder = targ.parents('.member-hover');

  holder.toggleClass('show-description');
});

console.log("App ready");
