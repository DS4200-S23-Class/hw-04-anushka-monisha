


// add border class to svg circle 
function circBorder(circPt) {
    circPt.classList.toggle('bordered');
};
  

// displays the coordinates of the selected circle point 
function circCoord(circPt) {

    // get cx and cy attributes to calculate point
    let xVal = circPt.getAttribute('cx') / 50
    let yVal = (500 - circPt.getAttribute('cy')) / 50

    // add text of the point 
    let coordText = 'The coordinates of this point are: (' + xVal + ',' + yVal + ')';
    document.getElementById('select-coor').innerHTML = coordText;
};



// function to set border + produce coordinates for each point
function ptClicked() {

    // gather all circle points
    let circPts = document.getElementsByTagName("circle");

    // iterate through circles to call border and coordinate appearance functions
    for (let i = 0; i < circPts.length; i++){
        circPts[i].addEventListener('click', function(){circBorder(circPts[i])});
        circPts[i].addEventListener('click', function(){circCoord(circPts[i])});
    }
};


ptClicked();


 // Add the point from dropdown selection of coordinates
  function addCirc() {

    // gather x and y value from id 
    let X = document.getElementById("xVal");
    let Y = document.getElementById("yVal");

    // convert value to int
    let numX = Number(X.value);
    let numY = Number(Y.value);

    // gather svg frame
    let frame = document.getElementById('frame')

    // create new svg circle
    let newCirc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    // calculate and set new cx/cy/r
    let cx = (numX * 50);
    let cy = (500 - (numY * 50));

    newCirc.setAttribute("cx", cx);
    newCirc.setAttribute("cy", cy); 
    newCirc.setAttribute("r", 10); 


    // add new svg to frame + add click functions
    frame.appendChild(newCirc);

    newCirc.addEventListener('click', function(){circBorder(newCirc)});
    newCirc.addEventListener('click', function(){circCoord(newCirc)});

  };
  

  // add Event Listener to button to submit new coordinates 
  document.getElementById("coorButton").addEventListener("click", addCirc);

  

