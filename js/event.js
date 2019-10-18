/* for sports */

var sports = document.querySelector('#sports');
var place = document.querySelector('#place');
sports.addEventListener('click', function(){
  place.style.display="block";
});
var area=document.querySelector("#area");
area.addEventListener('change',function(){
  console.log(this.value);
  let a= this.value;
  var darwin="https://api.myjson.com/bins/175lka";
  var palmerston="https://api.myjson.com/bins/16x8my";
  var humptydoo="https://api.myjson.com/bins/xitrm";

  if(a.toLowerCase() === "darwin"){
  loadDoc(darwin);
  place.style.display="none";
  setTimeout(loaddetailpage,1000);

}else if(a.toLowerCase() === "palmerston"){
  loadDoc(palmerston);
  place.style.display="none";
}else if(a.toLowerCase() === "humptydoo"){
  loadDoc(humptydoo);
  place.style.display="none";
}

});




/* for music */

var music = document.querySelector('#music');
var place1 = document.querySelector('#place1');
music.addEventListener('click', function(){
  place1.style.display="block";
});
var area1=document.querySelector("#area1");
area1.addEventListener('change',function(){
  console.log(this.value);
  let b= this.value;
  var darwin="https://api.myjson.com/bins/du0si";
  var palmerston="https://api.myjson.com/bins/mriv6";
  var humptydoo="https://api.myjson.com/bins/7xtwi";

  if(b.toLowerCase() === "darwin"){
  loadDoc(darwin);
  place1.style.display="none";
  setTimeout(loaddetailpage,1000);

}else if(b.toLowerCase() === "palmerston"){
  loadDoc(palmerston);
  place1.style.display="none";
}else if(b.toLowerCase() === "humptydoo"){
  loadDoc(humptydoo);
  place1.style.display="none";
}

});


/* for cultural */

var cultural = document.querySelector('#cultural');
var place2 = document.querySelector('#place2');
cultural.addEventListener('click', function(){
  place2.style.display="block";
});
var area2=document.querySelector("#area2");
area2.addEventListener('change',function(){
  console.log(this.value);
  let b= this.value;
  var darwin="https://api.myjson.com/bins/qv782";
  var palmerston="https://api.myjson.com/bins/6367m";
  var humptydoo="https://api.myjson.com/bins/1gizea";
  if(b.toLowerCase() === "darwin"){
  loadDoc(darwin);
  place2.style.display="none";
  setTimeout(loaddetailpage,1000);

}else if(b.toLowerCase() === "palmerston"){
  loadDoc(palmerston);
  place2.style.display="none";
}else if(b.toLowerCase() === "humptydoo"){
  loadDoc(humptydoo);
  place2.style.display="none";
}

});

//
function loaddetailpage(){
  var cdudetailpage=document.querySelector("#cdudetailpage");
  document.querySelector("#CDU").addEventListener('click',function(){
  cdudetailpage.style.display="block";

  });

}

function loaddetailpage(){
  var cdudetailpage=document.querySelector("#cdudetailpage");
  document.querySelector("#CDU").addEventListener('click',function(){
  cdudetailpage.style.display="block";

  });

}


/* for Child Event */

var child = document.querySelector('#child');
var place3 = document.querySelector('#place3');
child.addEventListener('click', function(){
  place3.style.display="block";
});
var area3=document.querySelector("#area3");
area3.addEventListener('change',function(){
  console.log(this.value);
  let b= this.value;
  var darwin="https://api.myjson.com/bins/1hfciq";
  var palmerston="https://api.myjson.com/bins/jzfi1";
  var humptydoo="https://api.myjson.com/bins/jzfi1";

  if(b.toLowerCase() === "darwin"){
  loadDoc(darwin);
  place3.style.display="none";
  setTimeout(loaddetailpage,1000);

}else if(b.toLowerCase() === "palmerston"){
  loadDoc(palmerston);
  place3.style.display="none";
}else if(b.toLowerCase() === "humptydoo"){
  loadDoc(humptydoo);
  place3.style.display="none";
}

});


// Ajax request to match data
function loadDoc(place) {
  var xhttp = new XMLHttpRequest();
  var result='';
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      result =JSON.parse(this.responseText);
        for(let i=0; i<result.length; i++){
          var eve = document.querySelector("#event");
          var eventDiv = document.createElement("DIV");
          var eventDivAtt = document.createAttribute("id");
          eventDivAtt.value=result[i].name;
          eventDiv.setAttributeNode(eventDivAtt);
          var eventHeading = document.createElement("H2");
          var eventImg = document.createElement("IMG");
          var eventDetail= document.createElement("P")
          var eventTime = document.createElement("P");

          var resultHeading = document.createTextNode(result[i].name);
          var resultDetail = document.createTextNode(result[i].shortdetail);
          var resultTime = document.createTextNode(result[i].time);
          var resultImg = document.createAttribute("src");
          resultImg.value=result[i].image;
          eventHeading.appendChild(resultHeading);
          eventDetail.appendChild(resultDetail);
          eventTime.appendChild(resultTime);
          eventImg.setAttributeNode(resultImg);
          eventDiv.appendChild(eventHeading);
          eventDiv.appendChild(eventImg);
          eventDiv.appendChild(eventDetail);
          eventDiv.appendChild(eventTime);

          eve.appendChild(eventDiv);
          eve.style.display="block";
        // console.log(result[i].name);
        // console.log(result[i].detail);

      }
    }
  };

  xhttp.open("GET", place, true);
  xhttp.send();

}

//*         *//
function loaddetailpage(){
  var cdudetailpage=document.querySelector("#cdudetailpage");
  document.querySelector("#Diwali").addEventListener('click',function(){
  cdudetailpage.style.display="block";

  });

}



// for hamburger menu //

  function openNav() {
document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

// to scroll down div page //

(function() {
  for (div=0; div < document.querySelectorAll('div').length; div++) {
    document.querySelectorAll('div')[div].style.overflow = "auto";
  };
})();

//function to close the block //

document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);


document.getElementById('closeButton1').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);


document.getElementById('closeButton2').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);


document.getElementById('closeButton3').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

document.getElementById('closeButton4').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);

document.getElementById('closeButton5').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);


function clearf() {
  location.reload();
}


function initMap() {
  // The location of Uluru
  var uluru = {lat: -12.463485, lng: 130.837635};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
