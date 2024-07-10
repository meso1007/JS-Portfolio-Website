$(document).ready(() => {
  // 初期設定としてヘッダーを透明に設定
  $("#header").addClass("transparent");

  // スクロール時のヘッダーの透明度制御
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $("#header").removeClass("transparent").addClass("white-bg");
    } else {
      $("#header").removeClass("white-bg").addClass("transparent");
    }
  });

  // ランダムな画像とキャプションの表示
  const images = [
    { src: "../Assets/travel/florence.jpg", caption: "Florence, Italy" },
    { src: "../Assets/travel/polamd2.jpg", caption: "Warsaw, Poland" },
    { src: "../Assets/travel/vancouver.jpg", caption: "Vancouver, Canada" },
    { src: "../Assets/travel/fujisawa.jpg", caption: "Fujisawa, Kanagawa" },
    { src: "../Assets/travel/poland.jpg", caption: "Warsaw, Poland" },
    { src: "../Assets/travel/vienna.jpg", caption: "Vienna, Austria" }
  ];

  const changePhotos = () => {  
    const randomPhoto = images[Math.floor(Math.random() * images.length)];
    $('.image').attr('src', randomPhoto.src);
    $('.image-caption').text(randomPhoto.caption);
  };

  changePhotos();

  setInterval(changePhotos, 5000);

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

  checkVisibility();

  $(window).scroll(checkVisibility);
});
