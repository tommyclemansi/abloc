window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
// self, and window are both aliases for the host/window. 
// parent & top will also point to the window, except when lower down in a frame hierarchy
// if (top.location != document.location) top.location = document.location;
if(top!= self) top.location.href = self.location.href
$(function(){
  $("#mynavbar").load("mynavbar.html"); 
  $("#mycarousel").load("mycarousel.html"); 
  $("#myfootertje").load("myfooter.html"); 
});