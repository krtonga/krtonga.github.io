
// NAV BAR AUTO-SCROLL
  $(".nav-t").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 'slow');
  });
  $(".nav-p").click(function(event){
    // event.preventDefault();
      $('html,body').animate({scrollTop:$('.portfolio-blob').offset().top -50 }, 'slow')
  });
  $(".nav-r").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 'slow');
  });
  $(".nav-c").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 'slow');
  });

  function centerNavBar(){
    var windowWidth = $( window ).width();
    var newMargin = (windowWidth - 960)/2;
    $('.nav').animate({marginLeft: newMargin}, 0);
    $('.show-all').animate({marginRight: newMargin}, 0);
  };

  function closeDialog(){
    $('.close-button').on({
      click: function(){
        $('.disclaimer').hide("fade", 200);
      }
    });
  };


// SKETCH ANIMATIONS
function growAppleTrees(){
  drawTreeAndMe('paint');
  drawTreeLines('paint');
  drawRoots('paint');
  $( ".roots-blob" ).delay(2000).show("fade", 2000, function() {
    $( ".text" ).show("drop", 4000);

    $( ".portfolio-blob" ).delay(200).show("fade", 4000);
    $(".text-portfolio").show("fade", 1000, function(){
      $(".grey-blob").show("fade", 3000);
      $( ".code" ).delay(1000).show("drop", {direction: "up"}, 1000, function(){
        $( ".paper" ).show("drop", {direction:"up"}, 1000, function(){

        $(".leaves").show("fade", 1000);
        // $(".web").delay(500).show("drop", {direction: "right"}, 1000)
        drawApple('paint');
          $(".apple-blob").show("fade", 2000 );
    });
            // $( ".black-box" ).show("fade", 2000);
        });
      });
    });
  // });
};

function bringInTheNets(){
  drawNet('paint');
  drawFishLine('paint');
};

function endAnimation(){
    console.log('click');
    drawTreeAndMe('erase');
    drawTreeAndMe('stamp');
    drawTreeLines('erase');
    drawTreeLines('stamp');
    drawRoots('erase');
    drawRoots('stamp');
    drawApple('erase');
    drawApple('stamp');
    $( ".roots-blob" ).show("fade", 100);
    $( ".text" ).show("drop", 100);
    $(".leaves").show("fade", 100);
    $(".text-portfolio").show("fade", 100);
    $(".apple-blob").show("fade", 100);
    $(".grey-blob").show("fade", 100);
    $(".portfolio-blob" ).show("fade", 100);
    // $(".black-box").show("fade", 200);
    $( ".paper" ).show("drop", {direction:"up"}, 500, function(){
      $( ".code" ).show("drop", {direction: "up"}, 500);
    });
};


// PORTFOLIO TABS & RESUME HOVER
function codeTab(){
  $('.code').on({
    mouseenter: function(){
      $(this).animate({
        backgroundColor: "#88F78B",
        borderColor: "black"
      },200);
    }, mouseleave: function(){
      $(this).animate({
        backgroundColor: "transparent",
        borderColor: "transparent"
      },1000);
    }, click: function(){
      $('html,body').animate({scrollTop:$('.portfolio-blob').offset().top -50 }, 'slow'),
      $(".paper").removeClass("open", 100),
      $(".print").hide("drop", 100, function(){
        $(".code").toggleClass( "open", 100),
        $(".web").toggle("drop", {direction: "right"}, 100)
      });
    }
  });
};
function paperTab(){
  $('.paper').on({
    mouseenter: function(){
      $(this).animate({
        backgroundColor: "#303759"
      },1000);
    }, mouseleave: function(){
      $(this).animate({
        backgroundColor: "transparent"
      },200);
    }, click: function(){
      $('html,body').animate({scrollTop:$('.portfolio-blob').offset().top -50 }, 'slow'),
      $(".code").removeClass("open", 100),
      $(".web").hide("drop", {direction: "right"}, 100, function(){
        $(".paper").toggleClass( "open", 100),
        $(".print").toggle("drop", 100)
      });
    }
  });
};
function resumeExpand(){
  $('.resume').on({
    mouseenter: function(){
      $(this).animate({
        height: "200px"
      }, 1000)
    },
    mouseleave: function(){
      $(this).animate({
        height: "120px"
      }, 1000)
    }
  });
};


// SCROLLEX
function updateBannerImagePosition(){
  var scrollTop = $(window).scrollTop();
  $('.para-image').each(function(idx, ele){
    var imageBanner = $(ele).parent();
    var imageStart = imageBanner.position().top;
    var newTop = .9*(scrollTop - imageStart);
    $(ele).css('top', newTop)
  });
};

// function wiggle(ele){ ele
//   .animate({'left':(pos[0]-10)+'px'},200)
//   .animate({'left':(pos[0]+10)+'px'},200)
//   .animate({'left':(pos[0])+'px'},200);
// };

// // function appleRipensandDrops(){
// //   var scrollTop = $(window).scrollTop();
// //   if (scrollTop<100)
// //     $('.apple-cage').wiggle;
// function apple(){
//   $('.apple-cage').on({
//     mouseenter: function(){
//       $(this).wiggle()
//     }
//   })
// }



$(document).ready(function(){
  growAppleTrees();

  paperTab();
  codeTab();
  closeDialog();
  $(".show-all").on({
    click: function(){
      endAnimation();
    }
  });
  $(".contact-me").click(function(event){
    console.log('click')
    event.preventDefault();
    $('html,body').animate({scrollTop:$('.contact').offset().top}, 'slow');
  });
  centerNavBar();
});

$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  // fadeBackgroundColor();
  updateBannerImagePosition();
  if(scrollTop>1450)
    bringInTheNets();
})

$(window).resize(function(){
  centerNavBar();
})
