$(document).ready(() => {

  
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 0) {
      $("#header").removeClass("transparent").addClass("white-bg");
    } else {
      $("#header").removeClass("white-bg").addClass("transparent");
    }
    checkVisibility()
  });
  $("#header").addClass("transparent");
  
  const $elements = $('.slide-in-element');
  const checkVisibility = () => {
    $elements.each(function() {
      const $el = $(this);
      const rect = this.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        $el.addClass('slide-in-visible');
      }
    });
  };

  const largePhotos = [
    { src: "../Assets/travel/florence.jpg", caption: "Florence,Italy" },
    { src: "../Assets/travel/polamd2.jpg", caption: "Warsaw,Poland" },
    { src: "../Assets/travel/vancouver.jpg", caption: "Vancouver,Canada" },
    { src: "../Assets/travel/shibuya.jpg", caption: "Shibuya,Japan" }

  ];
  
  const smallPhotos = [
    { src: "../Assets/travel/fujisawa.jpg", caption: "Fujisawa,Kanagawa" },
    { src: "../Assets/travel/poland.jpg", caption: "Warsaw,Poland" },
    { src: "../Assets/travel/vienna.jpg", caption: "Vienna,Austria" },
    { src: "../Assets/travel/arakawa.jpg", caption: "Arakawa City,Japan" },
  ];
  
  const changePhotos = () => {  
    const randomLargePhoto = largePhotos[Math.floor(Math.random() * largePhotos.length)];
    $('.large-img').attr('src', randomLargePhoto.src);
    $('.large-caption').text(randomLargePhoto.caption);
  
    const randomSmallPhoto = smallPhotos[Math.floor(Math.random() * smallPhotos.length)];
    $('.small-img').attr('src', randomSmallPhoto.src);
    $('.small-caption').text(randomSmallPhoto.caption);
  };
  
  changePhotos();
  setInterval(changePhotos, 5000);
  
});