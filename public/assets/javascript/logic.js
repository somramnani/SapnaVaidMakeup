$(".bridals").on("click", function() {
  event.preventDefault();
  $(".photoshoots-container").css('display, "none');
  $(".bridal-container").css("display", "block");
});

$(".photoshootbutton").on("click", function() {
  event.preventDefault();

  $(".bridal-container").css("display", "none");
  $(".photoshoots-container").css("display", "block");
});

$(".commercialsbutton").on("click", function() {
  event.preventDefault();
  $(".bridal-container").css("display", "none");
  $(".photoshoots-container").css("display", "none");
  $(".commercial-container").css("display", "block");
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
});

$(document).ready(function() {
  $(".sidenav").sidenav();
});

// Get the modal
var modal = document.getElementById("myModal");
var photoshootModal = document.getElementById("photoshoot-myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg");
var modalImg = $(".modal-content");
var photoshootImg = $(".photoshoot-modal-content");

$(".myImg").click(function() {
  event.preventDefault();
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr("src", newSrc);
});
$(".photoshootimage").click(function() {
  event.preventDefault();
  photoshootModal.style.display = "block";
  var newSrc = this.src;
  photoshootImg.attr("src", newSrc);
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

$("#photoshoot-close").click(function() {
  photoshootModal.style.display = "none";
});
