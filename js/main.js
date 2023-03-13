(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);


// Add click event to all tablinks
$(".tablinks1").click(function() {

  // Remove active class from any other active tabs
  $(".tablinks1.active").removeClass("active");

  // Add active class to the selected tab
  $(this).addClass("active");

});

    $(document).ready(function () {
    const sections = document.querySelectorAll("div");
const navLi = document.querySelectorAll("nav .navbar div");
window.onscroll = () => {
  var current = "";

  sections.forEach((div) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
});
 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Set the date we're counting down to
var countDownDate = new Date("Mar 17, 2023").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the date we're counting down to
var countDownDate1 = new Date("Mar 24, 2023").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now1;
    
  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo2").innerHTML = days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(y);
    document.getElementById("demo2").innerHTML = "EXPIRED";
  }
}, 1000);


// Set the date we're counting down to
var countDownDate2 = new Date("Mar 31, 2023").getTime();

// Update the count down every 1 second
var z = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo3").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(z);
    document.getElementById("demo3").innerHTML = "EXPIRED";
  }
}, 1000);


// Set the date we're counting down to
var countDownDate3 = new Date("Apr 06, 2023").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;
    
  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo4").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";
    
  // If the count down is over, write some text 
  if (distance3 < 0) {
    clearInterval(x1);
    document.getElementById("demo4").innerHTML = "EXPIRED";
  }
}, 1000);



 $('.phone').keypress(function(e) {  
      var arr = [];  
      var kk = e.which;  
     
      for (i = 48; i < 58; i++)  
          arr.push(i);  
     
      if (!(arr.indexOf(kk)>=0))  
          e.preventDefault();  
  }); 

$('.navbar .nav-item').on("click",function(){
    $(".navbar-collapse").collapse('hide');
});

$('.nav .nav-item').unbind();
