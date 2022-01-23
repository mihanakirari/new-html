
    bubbly({
       blur:15,
       colorStart: '#194167',
       colorStop: '#112144',
       radiusFunc:() => 5 + Math.random() * 15,
       angleFunc:() => -Math.PI / 2,
       velocityFunc:() => Math.random() * 7.5,
       bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`,
       bubbles:350
     });

     $(function () {
        $(window).scroll(function () {
          $('.fade').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
              $(this).addClass('view');
            }
          });
        });
      });


      function showElementAnimation() {

        var element = document.getElementsByClassName('js-fadein');
        if(!element) return; // 要素がなかったら処理をキャンセル
        
        var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;
      
        for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
          } else if(scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
          }
        }
      }
      showElementAnimation();
      window.addEventListener('scroll', showElementAnimation);ß