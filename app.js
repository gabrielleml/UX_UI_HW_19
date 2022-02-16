var backgroundColor = "ffffff";
var dotColor = "#EE2A4C";
var rbd = 6;  



/// FUNCTIONS ///

//random integer
function rib( min, max ) {
  return Math.floor( Math.random() * ( Math.floor(max) - Math.ceil(min) + 1 ) ) + Math.ceil(min);
}

//places divs for liquid arms to swirl around base circle
function placeLiquidArmDivs() {
  for ( i=0; i<7; i++ ) {
    var size = i == 10 ? 75 : rib(55,75);
    $( ".dot" ).prepend( `<div class="arm-${i+1} arm" style="width:${size}%; height:${size}%"></div>` );
  }
}

//liquifies dots
function liquify() {
    var le = Linear.easeNone;  // linear easing
    TweenMax.to( ".text", 1.5, { opacity: 0} );
    TweenMax.to( ".arm-1", rbd*0.7, { ease: le, rotation: "360", repeat: -1, transformOrigin: "50% 25%" });
    TweenMax.to( ".arm-2", rbd*0.5, { ease: le, rotation: "-360", repeat: -1, transformOrigin: "72% 32%" });
    TweenMax.to( ".arm-3", rbd*1.1, { ease: le, rotation: "360", repeat: -1, transformOrigin: "72% 63%" });
    TweenMax.to( ".arm-4", rbd*0.6, { ease: le, rotation: "-360", repeat: -1, transformOrigin: "50% 75%" });
    TweenMax.to( ".arm-5", rbd*0.8, { ease: le, rotation: "360", repeat: -1, transformOrigin: "28% 63%" });
    TweenMax.to( ".arm-6", rbd*0.7, { ease: le, rotation: "-360", repeat: -1, transformOrigin: "28% 37%" });
    TweenMax.to( ".arm-7", rbd*0.8, { ease: le, rotation: "360", repeat: -1, transformOrigin: "50% 60%", 
      delay: 0.2 });
}

//re-solidifies dots
function solidify() {
  $( ".arm" ).each( ( i, arm )=> {
    TweenMax.to( ".text", 4, { opacity: 1} );
    if ( arm._gsTransform ) TweenMax.to( arm, rbd*0.5, { rotation: "0" } );
    TweenMax.to( ".arm-7", rbd*0.5, { rotation: "0", delay: 0.2 } );
  });
}


$( ".dot" ).hover( ()=> {  }, ()=> { solidify() } );


$( ()=> { 
  placeLiquidArmDivs(); 
  liquify() });