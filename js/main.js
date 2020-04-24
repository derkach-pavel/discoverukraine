jQuery(document).ready(function ($) {
   $("#fullpage").fullpage({
      scrollBar: true,
      navigation: true,
      responsiveWidth: 1160,
      anchors: ['firstsection', 'secondsection'],

   });
})


$(function () {



   $('.tours__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1172,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true
            }
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true
            }
         },
      ]
   });

   $('.tour-page__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      rtl: true,
   });

   $('.popup-form-btn').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
         beforeOpen: function () {
            if ($(window).width() < 700) {
               this.st.focus = false;
            } else {
               this.st.focus = '#name';
            }
         }
      }
   });

   $('.gallery__box').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function (item) {
            return item.el.attr('title') + '<small>by Ukraine</small>';
         }
      }
   });


   $('.header__burger').click(function (event) {
      $('.header__burger, .header__nav').toggleClass('active');
      $('body').toggleClass('lock');
   });




   $('.sevastopol').hover(function (event) {
      $('.sevastopol__tour').toggleClass('active');
   });
   $('.crimea').hover(function (event) {
      $('.crimea__tour').toggleClass('active');
   });
   $('.cherkasy').hover(function (event) {
      $('.cherkasy__tour').toggleClass('active');
   });
   $('.chernivtsi').hover(function (event) {
      $('.chernivtsi__tour').toggleClass('active');
   });
   $('.chernihiv').hover(function (event) {
      $('.chernihiv__tour').toggleClass('active');
   });
   $('.dnipro').hover(function (event) {
      $('.dnipro__tour').toggleClass('active');
   });
   $('.donetsk').hover(function (event) {
      $('.donetsk__tour').toggleClass('active');
   });
   $('.ivanofrankivsk').hover(function (event) {
      $('.ivanofrankivsk__tour').toggleClass('active');
   });
   $('.kharkiv').hover(function (event) {
      $('.kharkiv__tour').toggleClass('active');
   });
   $('.kherson').hover(function (event) {
      $('.kherson__tour').toggleClass('active');
   });
   $('.khmelnytskyy').hover(function (event) {
      $('.khmelnytskyy__tour').toggleClass('active');
   });
   $('.kyiv').hover(function (event) {
      $('.kyiv__tour').toggleClass('active');
   });
   $('.kyiv__obl').hover(function (event) {
      $('.kyiv__obl__tour').toggleClass('active');
   });
   $('.kropivnitskyy').hover(function (event) {
      $('.kropivnitskyy__tour').toggleClass('active');
   });
   $('.lugansk').hover(function (event) {
      $('.lugansk__tour').toggleClass('active');
   });
   $('.lviv').hover(function (event) {
      $('.lviv__tour').toggleClass('active');
   });
   $('.mykolayiv').hover(function (event) {
      $('.mykolayiv__tour').toggleClass('active');
   });
   $('.odesa').hover(function (event) {
      $('.odesa__tour').toggleClass('active');
   });
   $('.poltava').hover(function (event) {
      $('.poltava__tour').toggleClass('active');
   });
   $('.rivne').hover(function (event) {
      $('.rivne__tour').toggleClass('active');
   });
   $('.sumy').hover(function (event) {
      $('.sumy__tour').toggleClass('active');
   });
   $('.ternopil').hover(function (event) {
      $('.ternopil__tour').toggleClass('active');
   });
   $('.zacarpatia').hover(function (event) {
      $('.zacarpatia__tour').toggleClass('active');
   });
   $('.vinnytsya').hover(function (event) {
      $('.vinnytsya__tour').toggleClass('active');
   });
   $('.volyn').hover(function (event) {
      $('.volyn__tour').toggleClass('active');
   });
   $('.zaporizhzhya').hover(function (event) {
      $('.zaporizhzhya__tour').toggleClass('active');
   });
   $('.zhytomyr').hover(function (event) {
      $('.zhytomyr__tour').toggleClass('active');
   });

});

function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();


//-------------------------------------------------------------------------------WOWJS

wow = new WOW(
   {
      mobile: false,

   }
)
wow.init();

//-------------------------------------------------------------------------------WOWJS
//-------------------------------------------------------------------------------YOUTUBE
const player = new Plyr('#player', {
   muted: true,
   autoplay: true,

});
//-------------------------------------------------------------------------------YOUTUBE

var map;

function initMap() {

   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 49.027500, lng: 31.48277 },
      zoom: 5
   });
}
var marker = new google.maps.Marker({

   position: { lat: 49.027500, lng: 31.48277 },

   map: map,

   title: 'Наш маркер: Большой театр'
});
