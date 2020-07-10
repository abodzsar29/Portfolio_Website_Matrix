// Loading bar and decryption in progress text to disappear

setTimeout(function () {
  document.getElementById("insidelyr4").style.visibility = "hidden";
  document.getElementById("insidelyr3").style.visibility = "hidden";
}, 3500);

// Loading screen to fade out in to the main screen

const loader = document.querySelector(".loader");
function add() {
  loader.className += " hidden";
}
function timeFunction() {
  setTimeout(add, 5500);
}
timeFunction();

// Script so that the page jumps to the top on refresh 

$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

// Script for loading bar to load

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {

        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

      }
    }
  }
}

move();

// Script for the pills to float

//  Blue pill

var tl1 = gsap.timeline({ repeat: -1 })

tl1.to('#bluepill', { y: -50, duration: 1.5, ease: 'Power1.easeInOut' });
tl1.to('#bluepill', { y: 0, duration: 1.5, ease: 'Power1.easeInOut' });

// Red pill

var tl2 = gsap.timeline({ repeat: -1 })

tl2.to('#redpill', { y: -50, duration: 1.5, ease: 'Power1.easeInOut' });
tl2.to('#redpill', { y: 0, duration: 1.5, ease: 'Power1.easeInOut' });

// Arrow

var tl29 = gsap.timeline({ repeat: -1 })

tl29.to('#Layer_247', { y: -75, duration: 1.5, ease: 'Power1.easeInOut' });
tl29.to('#Layer_247', { y: 0, duration: 1.5, ease: 'Power1.easeInOut' });


// Script for section icons to draw out on scroll

var $doc = $(document),
  $win = $(window),
  $svgone = $('#Layer_1').drawsvg(),
  $svgtwo = $('#Layer_2').drawsvg(),
  $svgthree = $('#Layer_3').drawsvg(),
  $svgfour = $('#Layer_4').drawsvg(),
  max = (($doc.height()) / 2) - $win.height();

$win.on('scroll', function () {
  var p1 = $win.scrollTop() / (max * 0.7);
  var p2 = $win.scrollTop() / (max * 0.75);
  var p3 = $win.scrollTop() / (max * 1.35);

  $svgone.drawsvg('progress', p1);
  $svgtwo.drawsvg('progress', p2);
  $svgthree.drawsvg('progress', p3);
});

// Script for the accordion

jQuery(document).ready(function ($) {
  //Set default open/close settings
  //Hide/close all containers
  var divs = $('.accordion #bottom').hide();
  var divs2 = $('.accordion #bottom2').hide();
  var divs3 = $('.accordion #bottom3').hide();
  var divs4 = $('.accordion #bottom4').hide();

  $('.accordion .link').click(function () {
    $('#bottom').slideToggle()
    return false; //Prevents the browser to jump to the link anchor
  });

  $('.accordion .link2').click(function () {
    $('#bottom2').slideToggle()
    return false; //Prevents the browser to jump to the link anchor
  });

  $('.accordion .link3').click(function () {
    $('#bottom3').slideToggle()
    return false; //Prevents the browser to jump to the link anchor
  });

});

// Script for the menu points to be cleared off their effects when hovered

$(document).ready(function () {

  $("#view2").hover(
    function () {
      $("#backgr2").removeClass("blur");
    },
    function () {
      $("#backgr2").addClass("blur");
    }
  );

  $("#view3").hover(
    function () {
      $("#backgr3").removeClass("blur");
    },
    function () {
      $("#backgr3").addClass("blur");
    }
  );

  $("#view").hover(
    function () {
      $("#backgr").removeClass("blur");
    },
    function () {
      $("#backgr").addClass("blur");
    }
  );

});

// Script for the skills tree to get drawn out on click

$(document).ready(function () {

  var $svg = $('#Layer_699').drawsvg({
    duration: 300,
    stagger: 80
  });

  $('#view').one('click', function () {
    $svg.drawsvg('animate');
  });

});

// Script for the project menu to be interactive

$(document).ready(function () {

  $("#prjctsmiddle").hover(
    function () {
      $("#added").addClass("animated-title");
    },
    function () {
      $("#added").removeClass("animated-title");
    }
  );

});

// Script for the background effects on the pills

var $bploader = document.querySelector('.BPloader2')

var $loader = document.querySelector('.loader2')

document.querySelector('.btn2').addEventListener('click', function () {
  $bploader.classList.add('BPloader--active')
});

document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
});

// ---------------------------------------------------


// This is for the pills to fly off the screen when clicked

var tl987 = gsap.timeline({ paused: true })

tl987.to('#bluepill', { y: -1000, x: 1000, duration: 1, rotation: 720 });

var tl988 = gsap.timeline({ paused: true })

tl988.to('#redpill', { y: -1000, x: -1000, duration: 1, rotation: 720 });

document.querySelector('.btn2').addEventListener('click', playBlue);
function playBlue() {
  tl1.pause();
  tl987.play();
}

document.querySelector('.btn').addEventListener('click', playRed);
function playRed() {
  tl2.pause();
  tl988.play();
}

// Ease in vertical effect for the content of the accordions  ----------------

var tl1001 = gsap.timeline({ paused: true })

tl1001.from('#tree, #treetext, #skillslist', { y: -75, opacity: 0, duration: 2, delay: 0.15, ease: 'expo.out' });

document.querySelector('#view').addEventListener('click', PlaySkillsFadeIn);
function PlaySkillsFadeIn() {
  tl1001.play();
};



var tl1003 = gsap.timeline({ paused: true })

tl1003
  .from('#info', { y: -65, opacity: 0, duration: 2, ease: 'expo.out' })
  .from('#bottominfo', { y: 65, opacity: 0, duration: 2, ease: 'expo.out', delay: -2 });


document.querySelector('#view2').addEventListener('click', PlayAboutFadeIn);
function PlayAboutFadeIn() {
  tl1003.play();
}