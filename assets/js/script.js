

var homebttn = $('#homebttn');
var contact = $('.contact');

var isDark = false;

homebttn.on('click', function () {
   if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    $('#githublogo').css({'filter': "none"});
    $('.dropbtn').css({'filter': "none"});
    $(this).find('i').attr("class", "fa-regular fa-sun fa-2xs"); 
    isDark = !isDark;
   
   } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' }); 
    $('#githublogo').css({'filter': "brightness(0%)", "filter":"invert(1)"});
    $('.dropbtn').css({'filter': "brightness(0%)", "filter":"invert(1)"});
    $(this).find('i').attr("class", "fa-regular fa-moon fa-2xs");
     isDark = !isDark;
    }
 });

 contact.on('click', function () {
  
  $(this)
   
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0px";
    } else {
      document.getElementById("nav").style.top = "-115px";
    }
    prevScrollpos = currentScrollPos;
  }