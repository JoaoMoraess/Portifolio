$(function(){
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    centerMode: true,
                    slidesToShow: 3
                }                
            },
            {
                breakpoint: 580,
                settings:{ 
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 380,
                settings:{
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        inifinity: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        inifinity: false,
        dots: true
    });
})