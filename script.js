// function kukas(){
//   var x = document.getElementById("kukas");
//   if (x.style.display === "none"){
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function tortes(){
//   var x = document.getElementById("tortes");
//   if (x.style.display === "none"){
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function ekleri(){
//   var x = document.getElementById("ekleri");
//   if (x.style.display === "none"){
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function others(){
//   var x = document.getElementById("others");
//   if (x.style.display === "none"){
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
var divs = ["kukas", "tortes", "ekleri", "others"];
   var visibleDivId = null;
   function divVisibility(divId) {
     if(visibleDivId === divId) {
       visibleDivId = null;
     } else {
       visibleDivId = divId;
     }
     hideNonVisibleDivs();
   }
   function hideNonVisibleDivs() {
     var i, divId, div;
     for(i = 0; i < divs.length; i++) {
       divId = divs[i];
       div = document.getElementById(divId);
       if(visibleDivId === divId) {
         div.style.display = "block";
       } else {
         div.style.display = "none";
       }
     }
   }
