$(document).ready(function () {

    //cookie popup
    if (!$.cookie('cookie-info')) {
        setTimeout(function(){
            $('.cookiePopup').addClass("show");
        }, 500);
    }

    $(".cookieBtn").on("click",function () {
        $.cookie('cookie-info', true);
        $('.cookiePopup').removeClass("show");
    });

    //start animation on load
    $(".beforeanimate").removeClass("beforeanimate");

    //mobile detect
    var mobileDevice = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
        {
            $("body").addClass('mobileDevice')
            mobileDevice=true;
        }
    })(navigator.userAgent||navigator.vendor||window.opera);

    //header scroll fixed
    var lastScrollTop = 0;
    function resizeHeader() {
        $(".colorBg,.whiteBg").css({
            "padding-top": $(".header").outerHeight()
        })
    }
    resizeHeader();
    $(window).resize(function (){
        resizeHeader();
    });

    $(window).scroll(function (){
        $(".colorBg,.whiteBg").css("padding-top", $(".header").outerHeight());

        var st = window.pageYOffset || document.documentElement.scrollTop;

        if( $(window).scrollTop() > $(".header").outerHeight())
        {
            //пролистали ниже
            $("body").addClass("headerClosed");
        }
        else
        {
            $("body").removeClass("headerClosed");
        }

        if ( $(window).scrollTop() > 200 ){

            if (st < lastScrollTop){
                $("body").addClass("headerOpen");
            }
            else
            {
                $("body").removeClass("headerOpen");
            }

        }

        lastScrollTop = st <= 0 ? 0 : st;
    });

    // SVG USE FOR IE
    svg4everybody();

    // Select styling
    $("select").selectric();

    // Styling scroller on PC
    $('.scrollbar-outer').scrollbar();

    // Reviews Slider
    $(".reviewsSlider").slick({
        infinite: false,
        speed: 600,
        arrows:true,
        dots:false,
        swipe:true,
        adaptiveHeight: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:"<button type='button' class='slick-prev'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
        nextArrow:"<button type='button' class='slick-next'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1152,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //Join Sldier

    $(".joinYooforic__slider").slick({
        infinite: false,
        speed: 600,
        arrows:true,
        dots:false,
        swipe:true,
        adaptiveHeight: true,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:"<button type='button' class='slick-prev'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
        nextArrow:"<button type='button' class='slick-next'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Tablet main product list slider

    function runMainProductsTabletSlider() {
        if ($(window).width() >= 768  && $(window).width() < 1152) {
            $(".mainProducts__list").slick({
                infinite: false,
                speed: 600,
                arrows:false,
                dots:false,
                swipe:true,
                slidesToShow: 2,
                slidesToScroll: 1,
            });
            $(".mainProducts__list").slick('setPosition');
        } else {
            if($(".cardList-main").hasClass("slick-slider"))
                $('.cardList-main').slick("unslick");
        }
    }
    runMainProductsTabletSlider();
    var slidersTimer;
    $(window).resize(function() {
        clearTimeout(slidersTimer);
        slidersTimer = setTimeout(runMainProductsTabletSlider, 50);
    });


    //Open and closing menu

    if(mobileDevice===true || ($(window).outerWidth()<1152 && mobileDevice===false))
    {
        $(".menuBtn").click(function (){

            if(!$(".header__nav").hasClass("visible")){
                $(".header__nav").addClass("visible")
            }
        });
    }
    else if(mobileDevice===false) {
        console.log("не мобила");
        var timer = 0;
        $(".menuBtn").hover(function (){
            $(".header__nav").addClass("hover")

        },function (){
            clearTimeout(timer);
            timer = setTimeout(function () {
                $(".header__nav").removeClass("hover")
            }, 100);
        });

        $(".header__nav").hover(function (){
            clearTimeout(timer);
        }, function (){
            timer = setTimeout(function () {
                $(".header__nav").removeClass("hover")
            }, 100);
        });
    }

    $(".header__nav .close").click(function (){
        $(".header__nav").removeClass("visible")
    });


    /*

    Open and close oil popup selector on XXL size page catalog

     */

    $(".radioSelector__title").click(function (){
        $(this).toggleClass("open");
    });

    $("*").click(function (e){
        if($(e.target).closest(".radioSelector").length==0 && $(e.target).closest(".radioSelector__title").length==0)
        {
            $(".radioSelector__title").removeClass("open");
        }
    });

    /*

    Open and close filters

     */

    $(".catalogFilters__title").click(function (){
        $(this).toggleClass("open");
    });

    /*

    Product tabs, Account tabs

     */

    $(".productTabs__links a").click(function (){
        let index = $(this).parent().index();

        $(".productTabs__links li").removeClass("active");
        $(this).parent().addClass("active");


        $(".productTabs__content").removeClass("active")
        $(".productTabs__content:nth-child("+(index+1)+")").addClass("active");

        return false
    });

    $(".account__tabs a").click(function (){
        let index = $(this).parent().index();

        $(".account__tabs a").removeClass("active");
        $(this).addClass("active");


        $(".account__content>*").removeClass("active")
        $(".account__content>*:nth-child("+(index+1)+")").addClass("active");

        return false
    });

    /*

    Accordion

    */

    $(".accordion__title").click(function (){
        $(this).parent().toggleClass("active");
    });

    /*

    Открытие полей в полях вводу

    */

    $(".form label").on("click",function (){
       $(this).parent().addClass("open");
        $(this).parent().find("input").focus();
    });

    $(".form input").on("focus",function (){
        $(this).parent().addClass("open");
    });

    $(".form input").on("blur",function (){
        if($(this).val()==''){
            $(this).parent().removeClass("open");
        }
    });

    $("input").each(function (){
        if($(this).val()!='') $(this).parent().addClass("open");
    });



    // popup opening and closing

    $(".videoPopup").click(function (){
        $(".popup").css('z-index','150');
        $("html,body").css("overflow",'hidden');
        $("#videoPopup").show('200').css('z-index','160');
        let iframe = '<iframe src="' + "https://www.youtube.com/embed/" + $(this).attr("href").split("=")[1] + '" width="1245" height="730" frameborder="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $(".videoPopup__iframe").html(iframe);
        return false;
    });

    $(".openPopup").click(function (e) {
        $(".popup").css('z-index','150');
        $("html,body").css("overflow",'hidden');
        $("#" + $(this).data('popup')).fadeIn('200');
        // if($(".popup").is(":visible"))
        // {
        //     var lastPopup = $(".popup:visible");
        //     $("#" + $(this).data('popup')).fadeIn('200').css('z-index','16');
        //     setTimeout(function () {
        //         lastPopup.hide()
        //     },500)
        // }
        // else
        // {
        //     $("#" + $(this).data('popup')).fadeIn('200');
        // }
    });

    $(".popup__close").click(function (){
        $("html,body").css("overflow",'visible');
        $(".popup").fadeOut('200');
    });

    $("*").click(function (e) {
        if($(e.target).closest('.popup__container').length==0 && $(e.target).closest('.openPopup').length==0 && $(e.target).closest('.videoPopup').length==0)
        {
            $("html,body").css("overflow",'visible');
            $(".popup").fadeOut('200');
        }
    });

    //Product page main slider

    $(".productPage__slider").slick({
        dots:true,
        prevArrow:"<button type='button' class='slick-prev'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
        nextArrow:"<button type='button' class='slick-next'><svg width='15px' height='29px'><use xlink:href='images/sprite.svg#slider-arrow'></use></svg></button>",
    });

    //Mobile + Tablet photoslider

    function runMobilePhotoSlider() {
        if ($(window).width() < 1152) {
            $(".photoGallery__list").slick({
                infinite: false,
                speed: 600,
                arrows:false,
                dots:false,
                swipe:true,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }).slick('setPosition');
        } else {
            if($(".photoGallery__list").hasClass("slick-slider"))
                $('.photoGallery__list').slick("unslick");
        }
    }
    runMobilePhotoSlider();
    var slidersTimer;
    $(window).resize(function() {
        clearTimeout(slidersTimer);
        slidersTimer = setTimeout(runMobilePhotoSlider, 50);
    });


    $(".header__cart").click(function (){
        $(".cartPopup").addClass("show");
        return false
    });

    $(".cartPopup__close").click(function (){
        $(".cartPopup").removeClass("show");
    });

    $(".cartPopup__code .apply").click(function (){
        $(".cartPopup__code").addClass("success");
    });




});