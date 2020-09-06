let scroll = new SmoothScroll('a[href*="#"]', {
   speed: 1600,
   easing: "easeInOutCubic",
});
let contactPage = "../pages/contacts.html";
let projectPage = "../pages/projects.html";
let aboutPage = "../pages/about.html";
let writeMe = "mailto:lancov.alex.2@gmail.com";

let project1 = "#",
   project2 = "#",
   project3 = "#";

let behance = "https://www.behance.net/lantsov_a",
   dribbble = "https://dribbble.com/lantsov_a",
   vk = "https://vk.com/lantsov_a",
   telegram = "https://t.me/lantsov_a",
   linkedin = "https://www.linkedin.com/in/lantsova/";

$(document).ready(function () {
   //Mobile menu
   $(".mobile-menu").click(function (event) {
      $(".mobile-menu, .header__menu").toggleClass("active");
      $("body").toggleClass("lock");
   });

   //Buttons
   $(".start_project").click(function (event) {
      $(location).attr("href", contactPage);
   });
   $(".watch_projects").click(function (event) {
      $(location).attr("href", projectPage);
   });
   $("#about-more").click(function (event) {
      $(location).attr("href", aboutPage);
   });
   $("#contact-btn").click(function (event) {
      $(location).attr("href", writeMe);
   });
   $("#linkedin-button").click(function (event) {
      $(location).attr("href", linkedin);
   });

   // Projects buttons
   $("#project1").click(function (event) {
      $(location).attr("href", project1);
   });
   $("#project2").click(function (event) {
      $(location).attr("href", project2);
   });
   $("#project3").click(function (event) {
      $(location).attr("href", project3);
   });

   //Social buttons
   $("#behance").click(function (event) {
      $(location).attr("href", behance);
   });
   $("#dribbble").click(function (event) {
      $(location).attr("href", dribbble);
   });
   $("#vk").click(function (event) {
      $(location).attr("href", vk);
   });
   $("#telegram").click(function (event) {
      $(location).attr("href", telegram);
   });
   $("#linkedin").click(function (event) {
      $(location).attr("href", linkedin);
   });
});
