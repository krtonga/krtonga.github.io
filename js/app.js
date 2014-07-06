
 $(document).ready(function(){

  $('#treeAndMeBW').lazylinepainter({
        "svgData": treeAndMe,
        "strokeWidth": 2,
        "strokeColor": "#e09b99",
    }).lazylinepainter('paint');
  $('#treeLines').lazylinepainter({
            "svgData": treeLines,
            "strokeWidth": 2,
            "strokeColor": "#d3d3d3",
            "strokeDash": "--.",
            "delay":1000
        }).lazylinepainter('paint');
  $('#roots').lazylinepainter({
      "svgData": root,
      "strokeWidth": 2,
      "strokeColor": "#e09b99"
    }).lazylinepainter('paint');

  $( ".roots-blob" ).delay(2000).show("fade", 2000, function() {
    $( ".text" ).show("drop", 4000, function(){
      $(".text-portfolio").show("fade", 3000, function(){
        $(".grey-blob").show("fade", 1000);
        $( ".portfolio-blob" ).delay(200).show("fade", 2000);
        $( ".paper" ).show("drop", {direction:"up"}, 1000, function(){
            $( ".code" ).show("drop", {direction: "up"}, 1000, function(){
              $(".leaves").show("fade", 2000, function(){
                $('#apple').lazylinepainter({
                    "svgData": apple,
                    "strokeWidth": 1,
                    "strokeColor": "#000000"
                }).lazylinepainter('paint');$(".apple-blob").show("fade", 2000, function(){
                $( ".black-box" ).show("fade", 2000);
              });
            });
          });
        });
      });
    });


  $('#frame-left').lazylinepainter({
    "svgData": frameLeft,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
  }).lazylinepainter('paint');

});







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
      $(".web").hide("drop", 1000),
      $(".code").removeClass("open", 500),
      $(".print").toggle("drop", {direction: "down"}, 1000),
      $(".paper").toggleClass( "open", 1000)
    }
  })

  $('.code').on({
    mouseenter: function(){
      $(this).animate({
        backgroundColor: "#88F78B"
      },200);
    }, mouseleave: function(){
      $(this).animate({
        backgroundColor: "transparent"
      },1000);
    }, click: function(){
      $(".print").hide("drop", 1000),
      $(".paper").removeClass("open", 500),
      $(".web").toggle("drop", 1000),
      $(".code").toggleClass( "open", 1000)
    }
  })

  $(".show-all").on({
    click: function(){
      console.log('click')
      $('#treeAndMeBW').lazylinepainter({
        "svgData": treeAndMe,
        "strokeWidth": 2,
        "strokeColor": "#e09b99",
      }).lazylinepainter('erase').lazylinepainter('stamp');
      $('#treeLines').lazylinepainter({
            "svgData": treeLines,
            "strokeWidth": 2,
            "strokeColor": "#d3d3d3",
            "strokeDash": "--.",
      }).lazylinepainter('erase').lazylinepainter('stamp');
      $('#roots').lazylinepainter({
        "svgData": root,
        "strokeWidth": 2,
        "strokeColor": "#e09b99"
      }).lazylinepainter('erase').lazylinepainter('stamp');
      $('#apple').lazylinepainter({
          "svgData": apple,
          "strokeWidth": 1,
          "strokeColor": "#000000"
        }).lazylinepainter('erase').lazylinepainter('stamp');

      $( ".roots-blob" ).show("fade", 100);
      $( ".text" ).show("drop", 100);
      $(".leaves").show("fade", 100);
      $(".text-portfolio").show("fade", 100);
      $(".apple-blob").show("fade", 100);
      $(".grey-blob").show("fade", 100);
      $( ".portfolio-blob" ).show("fade", 100);
      $( ".paper" ).show("drop", {direction:"up"}, 500, function(){
        $( ".code" ).show("drop", {direction: "up"}, 500);
      });

    }
  })

})

