$(document).ready(() => {
    $("#header").addClass("transparent");


    $(window).on('load', function() {
    var hash = window.location.hash;
    
    if (hash) {
      var $targetElement = $(hash);
      
      if ($targetElement.length) {
        $('html, body').animate({
          scrollTop: $targetElement.offset().top
        }, 1000); // スクロール時間を指定（ミリ秒）
      }
    }
  });
    $(window).scroll(() => {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > 0) {
        $("#header").removeClass("transparent").addClass("white-bg");
      } else {
        $("#header").removeClass("white-bg").addClass("transparent");
      }
    });

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
  