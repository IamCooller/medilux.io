$(document).ready(function() {
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
            $('.link').click(function(e) {
                e.preventDefault();
                $(this).find('.arrow-menu').toggleClass('active');
            });
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#accordion'), false);

    });


    $(".main__banner").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".brands-slick").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToShow: 6,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<svg width="7" class="slick-arrow slick-arrow-prev" height="11" viewBox="0 0 7 11" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M0.65491 5.19814L5.74273 0.124392C5.90943 -0.0417463 6.17932 -0.041467 6.34573 0.125251C6.51202 0.291948 6.51159 0.561984 6.34487 0.728251L1.55989 5.50002L6.34505 10.2718C6.51174 10.4381 6.51217 10.7079 6.3459 10.8746C6.26248 10.9582 6.15319 11 6.0439 11C5.93489 11 5.82603 10.9585 5.74275 10.8755L0.65491 5.80187C0.574623 5.72199 0.52957 5.61328 0.52957 5.50002C0.52957 5.38675 0.574751 5.27817 0.65491 5.19814Z" fill="#393185"/></svg>',
        nextArrow: '<svg width="7" class="slick-arrow slick-arrow-next" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M6.34509 5.19814L1.25727 0.124392C1.09057 -0.0417463 0.820684 -0.041467 0.654267 0.125251C0.487979 0.291948 0.488408 0.561984 0.655127 0.728251L5.44011 5.50002L0.654955 10.2718C0.488258 10.4381 0.487828 10.7079 0.654095 10.8746C0.737519 10.9582 0.846809 11 0.9561 11C1.06511 11 1.17397 10.9585 1.25725 10.8755L6.34509 5.80187C6.42538 5.72199 6.47043 5.61328 6.47043 5.50002C6.47043 5.38675 6.42525 5.27817 6.34509 5.19814Z" fill="#393185"/></svg>',
    });

});