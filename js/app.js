
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
    }).lazylinepainter('paint')

   $( ".roots-blob" ).delay(2000).show("fade", 2000, function() {
    $( ".text" ).show("drop", 2000);
     $( ".portfolio-blob" ).delay(2000).show("fade", 2000, function(){

        $('#apple').lazylinepainter({
          "svgData": apple,
          "strokeWidth": 1,
          "strokeColor": "#000000"
        }).lazylinepainter('paint');
          $( ".paper" ).show("drop", {direction:"up"}, 1000, function(){
        $( ".code" ).show("drop", {direction: "up"}, 1000)
      })
     });
   });
});

