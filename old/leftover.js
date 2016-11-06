    <!--
    <table class="slider2column">
      <tr>
        <td>
          <div class="slidershell" id="slidershell3">
            <div class="sliderfill" id="sliderfill3"></div>
            <div class="slidertrack" id="slidertrack3"></div>
            <div class="sliderthumb" id="sliderthumb3"></div>
            <div class="slidervalue" id="slidervalue3"><span>0</span></div>
            <input class="slidervertical" id="slider3" type="range" min="0" max="100" value="0" oninput="showValue(value,3,true);getNumber();" orient="vertical" />
          </div>
        </td>
      </tr>
    </table>
    -->
                
                <!--
    <div class="topMessage">
        <p id="demo"></p>
    </div>
-->

/*    
    $( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 200,
      value: 0,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );
        */

function getNumber() {
    var x = document.getElementById("slider3").value;

    if(x<=25) {
        document.getElementById("demo").innerHTML = "Scroll up";
    } else if (x<=50) {
        document.getElementById("demo").innerHTML = "Halfway there!";
    } else if (x<=75) {
        document.getElementById("demo").innerHTML = "Getting closer!";
    } else if (x<=99) { 
        document.getElementById("demo").innerHTML = "Almost there!";
    } else {
        document.getElementById("demo").innerHTML = "Congratulations!";
    }
}


/* Code by Steven Estrella. http://www.shearspiremedia.com */
/* we need to change slider appearance oninput and onchange */
function showValue(val, slidernum, vertical) {
    /* setup variables for the elements of our slider */
    var thumb = document.getElementById("sliderthumb" + slidernum);
    var shell = document.getElementById("slidershell" + slidernum);
    var track = document.getElementById("slidertrack" + slidernum);
    var fill = document.getElementById("sliderfill" + slidernum);
    var rangevalue = document.getElementById("slidervalue" + slidernum);
    var slider = document.getElementById("slider" + slidernum);

    var pc = val / (slider.max - slider.min); /* the percentage slider value */
    var thumbsize = 100; /* must match the thumb size in your css */
    var smallval = 100; /* narrowest or shortest value depending on orientation */
    var bigval = 400; /* widest or tallest value depending on orientation */
    var tracksize = bigval - thumbsize;
    var fillsize = 4.5;
    var filloffset = 10;
    var bordersize = 35;
    var loc = vertical ? (1 - pc) * tracksize : pc * tracksize;
    var degrees = 360 * pc;
    var rotation = "rotate(" + degrees + "deg)";
    
    
    rangevalue.innerHTML = val;
    
    fill.style.opacity = pc + 0.2 > 1 ? 1 : pc + 0.2;

    rangevalue.style.top = (vertical ? loc : 0) + "px";
    rangevalue.style.left = (vertical ? 0 : loc) + "px";
    thumb.style.top = (vertical ? loc : 0) + "px";
    thumb.style.left = (vertical ? 0 : loc) + "px";
    fill.style.top = (vertical ? loc + (thumbsize / 2) : filloffset + bordersize) + "px";
    fill.style.left = (vertical ? filloffset + bordersize : 0) + "px";
    fill.style.width = (vertical ? fillsize : loc + (thumbsize / 2)) + "px";
    fill.style.height = (vertical ? bigval - filloffset - fillsize - loc : fillsize) + "px";
    shell.style.height = (vertical ? bigval : smallval) + "px";
    shell.style.width = (vertical ? smallval : bigval) + "px";
    track.style.height = (vertical ? bigval - 4 : fillsize) + "px"; /* adjust for border */
    track.style.width = (vertical ? fillsize : bigval - 4) + "px"; /* adjust for border */
    track.style.left = (vertical ? filloffset + bordersize : 0) + "px";
    track.style.top = (vertical ? 0 : filloffset + bordersize) + "px";
  }
  /* we often need a function to set the slider values on page load */
function setValue(val, num, vertical) {
  document.getElementById("slider" + num).value = val;
  showValue(val, num, vertical);
}

document.addEventListener("DOMContentLoaded", function() {
  setValue(50, 3, true);
});