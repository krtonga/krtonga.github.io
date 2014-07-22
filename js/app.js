
// NAV BAR AUTO-SCROLL
  $(".nav-t").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $(".nav-p").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $(".nav-r").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
  $(".nav-c").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

// SKETCH ANIMATIONS
function growAppleTrees(){
  drawTreeAndMe('paint');
  drawTreeLines('paint');
  drawRoots('paint');
  $( ".roots-blob" ).delay(2000).show("fade", 2000, function() {
    $( ".text" ).show("drop", 4000, function(){
      $(".text-portfolio").show("fade", 1000, function(){
        $(".grey-blob").show("fade", 1000);
        $(".leaves").show("fade", 1000);
        $( ".portfolio-blob" ).delay(200).show("fade", 2000);
        drawApple('paint');
        $( ".paper" ).show("drop", {direction:"up"}, 1000, function(){
          $( ".code" ).show("drop", {direction: "up"}, 1000, function(){$( ".black-box" ).show("fade", 2000);
            $(".apple-blob").show("fade", 2000 );
          });
        });
      });
    });
  });
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
    $(".black-box").show("fade", 200);
    $( ".paper" ).show("drop", {direction:"up"}, 500, function(){
      $( ".code" ).show("drop", {direction: "up"}, 500);
    });
};


// PORTFOLIO TABS & RESUME HOVER
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
      $(".code").removeClass("open", 500),
      $(".web").hide("drop", {direction: "right"}, 600, function(){
        $(".paper").toggleClass( "open", 1000),
        $(".print").toggle("drop", 1000)
      });
    }
  });
};
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
      $(".paper").removeClass("open", 500),
      $(".print").hide("drop", 600, function(){
        $(".code").toggleClass( "open", 1000),
        $(".web").toggle("drop", {direction: "right"}, 1000)
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


$(document).ready(function(){
  growAppleTrees();
  bringInTheNets();
  paperTab();
  codeTab();
  $(".show-all").on({
    click: function(){
      endAnimation();
    }
  });
});

$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  // fadeBackgroundColor();

  if(scrollTop<100) // just to move somewhat
   $('.apple-cage').css('left', scrollTop);
  updateBannerImagePosition();
})
