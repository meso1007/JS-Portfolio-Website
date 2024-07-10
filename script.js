$(document).ready(function() {
    const sliderText = $('#slider-text');
    const texts = [
        'Hello!',
        'Bonjour!',
        'Hola!',
        '你好!',
        'こんにちは!',
        'Ciao!',
        '안녕하세요!',
        'Привет!',
        'Olá!',
        'Hej!',
        'مرحبا!',
        'नमस्ते!'
    ];
    let currentIndex = 0;
    let nextIndex = 1; // 次のテキストのインデックス

    const changeText = () => {
        sliderText.css('animation', 'slide-out 1s forwards'); // slide-outのアニメーションを0.5秒に短縮
        setTimeout(() => {
            sliderText.text(texts[nextIndex]);
            sliderText.css('animation', 'slide-in 1s forwards'); // slide-inのアニメーションを0.5秒に短縮
            currentIndex = nextIndex;
            nextIndex = (nextIndex + 1) % texts.length;
        }, 1000); // slide-outのアニメーション時間とslide-inのディレイを合わせる
    }
    sliderText.text(texts[currentIndex]);
    sliderText.css('animation', 'slide-in 1.5s forwards'); // 最初のテキスト表示のアニメーション時間を1.5秒に
    setInterval(() => {
        changeText();
    }, 3000);

 $('.project-item a').on('click', function(e) {
  e.preventDefault();
  var href = $(this).attr('href');
  var hash = href.split('#')[1]; // get the anchor link part of the href
  window.location.href = href.split('#')[0]; // navigate to the new page
  window.location.hash = '#' + hash; // set the anchor link on the new page
});
})
document.addEventListener('DOMContentLoaded', function () {
    var fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(function (element) {
        observeElement(element, function () {
            element.classList.add('visible');
        });
    });

    var slideElements = document.querySelectorAll('.slide-in-element');
    slideElements.forEach((element) => {
        observeElement(element, () => {
            element.classList.add('slide-in-visible');
        });
    });
});

$(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 0) {
      $("#header").removeClass("transparent").addClass("white-bg");
    } else {
      $("#header").removeClass("white-bg").addClass("transparent");
    }
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

// IntersectionObserver を使って要素を監視し、表示されたらコールバック関数を実行する
const observeElement = (element, callback) => {
    var observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    });

    observer.observe(element);
}

