$( document ).ready( function() {

  if ( $( '.products' ).length ) {
    $('.products').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.product-prev'),
      nextArrow: $('.product-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });   
  }

  if ( $( '.logos' ).length ) {
    $('.logos').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.logo-prev'),
      nextArrow: $('.logo-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });  
    
    $(".logos").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);

      var current = $(".logo-page").children(".current");
      var prev = $(".logo-page").children(".prev");
      var next = $(".logo-page").children(".next");
      prev.text("0"+currentSlide);
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text("/0"+i);
      console.log(slick)
      next.text("0"+(currentSlide+2));
    });
  }

  if ( $('.new-arrival-slick' ).length ) {
    $('.new-arrival-slick').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.new-arrival-prev'),
      nextArrow: $('.new-arrival-next'),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });   

    $(".new-arrival-slick").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);

      var current = $(".new-arrival-page").children(".current");
      var prev = $(".new-arrival-page").children(".prev");
      var next = $(".new-arrival-page").children(".next");
      prev.text("0"+currentSlide);
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text("/0"+i);
      console.log(slick)
      next.text("0"+(currentSlide+2));
  });
  }

  if ( $('.collections' ).length ) {
    $('.collections').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.collection-prev'),
      nextArrow: $('.collection-next')
    });   

    $(".collections").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);

      var current = $(".collection-page").children(".current");
      var prev = $(".collection-page").children(".prev");
      var next = $(".collection-page").children(".next");
      prev.text("0"+currentSlide);
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text("/0"+i);
      console.log(slick)
      next.text("0"+(currentSlide+2));

    })
  }

  if ( $('.portfolios' ).length ) {
    $('.portfolios').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
    });  

    $(".portfolios").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);

      var current = $(".portfolio-page").children(".current");
      var prev = $(".portfolio-page").children(".prev");
      var next = $(".portfolio-page").children(".next");
      prev.text("0"+currentSlide);
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text("/0"+i);
      console.log(slick)
      next.text("0"+(currentSlide+2));

    })
  }

  if ( $('.testimonials' ).length ) {
    $('.testimonials').slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.testimonial-prev'),
      nextArrow: $('.testimonial-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          }
        }
      ]
    });  
  }

  if ( $('.posts' ).length ) {
    $('.posts').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.post-prev'),
      nextArrow: $('.post-next'),
    });   

    $(".posts").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(currentSlide);

      var current = $(".post-page").children(".current");
      var prev = $(".post-page").children(".prev");
      var next = $(".post-page").children(".next");
      prev.text("0"+currentSlide);
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text("/0"+i);
      console.log(slick)
      next.text("0"+(currentSlide+2));

    })
  }

});