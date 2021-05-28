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
        cssEase: 'linear',
        autoplaySpeed: 2000
    });

    $(".brands-slick").slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        cssEase: 'linear',
        autoplaySpeed: 0,
        prevArrow: '<svg width="7" class="slick-arrow slick-arrow-prev" height="11" viewBox="0 0 7 11" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M0.65491 5.19814L5.74273 0.124392C5.90943 -0.0417463 6.17932 -0.041467 6.34573 0.125251C6.51202 0.291948 6.51159 0.561984 6.34487 0.728251L1.55989 5.50002L6.34505 10.2718C6.51174 10.4381 6.51217 10.7079 6.3459 10.8746C6.26248 10.9582 6.15319 11 6.0439 11C5.93489 11 5.82603 10.9585 5.74275 10.8755L0.65491 5.80187C0.574623 5.72199 0.52957 5.61328 0.52957 5.50002C0.52957 5.38675 0.574751 5.27817 0.65491 5.19814Z" fill="#393185"/></svg>',
        nextArrow: '<svg width="7" class="slick-arrow slick-arrow-next" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M6.34509 5.19814L1.25727 0.124392C1.09057 -0.0417463 0.820684 -0.041467 0.654267 0.125251C0.487979 0.291948 0.488408 0.561984 0.655127 0.728251L5.44011 5.50002L0.654955 10.2718C0.488258 10.4381 0.487828 10.7079 0.654095 10.8746C0.737519 10.9582 0.846809 11 0.9561 11C1.06511 11 1.17397 10.9585 1.25725 10.8755L6.34509 5.80187C6.42538 5.72199 6.47043 5.61328 6.47043 5.50002C6.47043 5.38675 6.42525 5.27817 6.34509 5.19814Z" fill="#393185"/></svg>',
        responsive: [{
                breakpoint: 770,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });

    $('.mobile__button').click(function() {

        $('.menu').addClass('open');

        $('.menu__mobile-bg').fadeIn('fast', 'swing');
    });
    $('.menu__mobile-bg').click(function() {
        $('.menu').removeClass('open');
        $('.menu__mobile-bg').fadeOut('fast', 'swing');
    });

    $(window).resize(function() {
        if (window.innerWidth <= 770) {
            $(".specialOffers__list").slick({
                dots: true,
                infinite: true,
                arrows: false,
                cssEase: 'linear',
                autoplaySpeed: 2000,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: true,
            });
            $(".news__list").slick({
                dots: true,
                infinite: true,
                arrows: false,
                cssEase: 'linear',
                autoplaySpeed: 2000,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: true,
            });
        }

    });




    var didScroll, lastScrollTop = 0,
        delta = 5,
        navbarHeight = $(".header-top").outerHeight() / 4;

    function hasScrolled() {
        var e = $(this).scrollTop();
        Math.abs(lastScrollTop - e) <= delta || (e > lastScrollTop && e > navbarHeight ? $(".header-top").removeClass("nav-down").addClass("nav-up") : (e + $(window).height() < $(document).height() && $(".header-top").removeClass("nav-up").addClass("nav-down"), e < navbarHeight && $(".header-top").removeClass("nav-down")), lastScrollTop = e)
    }

    function setSameHeight() {
        var e, t, n, o, a = 0,
            i = 0,
            r = [],
            c = 0;
        $(".sameHeight").each(function() {
            if ((t = $(this)).css("height", "auto"), n = t.height(), c = t.offset().top, i != c) r.length = 0, i = c, a = n, t.height(a), r.push(t);
            else if (r.push(t), e = r.length, a < n)
                for (a = n, o = 0; o < e; o++) r[o].height(a);
            else t.height(a)
        })
    }

    function scrollToElementCentered(e) { $("html,body").animate({ scrollTop: e.offset().top - ($(window).height() - e.outerHeight(!0)) / 2 }, 400) }

    function getCookie(e) {
        for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
            for (var a = n[o];
                " " == a.charAt(0);) a = a.substring(1);
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return ""
    }

    function setCookie(e, t, n) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = "expires=" + o.toUTCString();
        document.cookie = e + "=" + t + ";" + a + ";path=/;"
    }

    function deleteCookie(e) { document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;" }
    $(window).scroll(function(e) { didScroll = !0 }), setInterval(function() { didScroll && (hasScrolled(), didScroll = !1) }, 250), $(hasScrolled), $(document).ready(function() { setSameHeight(), $(window).on("resize", function(e) { setSameHeight() }), $(window).on("orientationchange", function(e) { setSameHeight() }) }), $(document).ready(function() {
        document.cookie.indexOf("accept_cookies") > -1 && $("#any-cookieBar, #btnCookieBarPlaceholder").hide(), $("#any-cookieBar-close").change(function() {
            var e = new Date;
            e.setTime(e.getTime() + 31536e6), document.cookie = "accept_cookies=true; expires=" + e.toGMTString() + "; path=/; domain=.anydesk.com", $("#btnCookieBarPlaceholder").hide()
        })
    }), $(function() { $(window).scroll(function() { $(this).scrollTop() > 500 ? $("#any-backToTop").show().removeClass("fadeOutRight").addClass("fadeInRight") : $(this).scrollTop() < 500 && $("#any-backToTop").removeClass("fadeInRight").addClass("fadeOutRight") }), $("#any-backToTop").click(function() { return $("html, body").animate({ scrollTop: 0 }, 600, function() { window.location.hash = "" }), !1 }) }), $(document).ready(function() { $('a[rel="relativeanchor"]').click(function() { return $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 800), !1 }) }), document.addEventListener("DOMContentLoaded", function() {
        var e = [].slice.call(document.querySelectorAll("img.lazy")),
            t = !1,
            n = function() {
                !1 === t && (t = !0, e.forEach(function(t) {
                    if (t.getBoundingClientRect().top - 200 <= window.innerHeight && t.getBoundingClientRect().bottom >= 0 && "none" !== getComputedStyle(t).display) {
                        var o = t.dataset.imgSrc.split("width");
                        if (o) {
                            "" == o[o.length - 1] && o.pop();
                            for (var a = [], i = 0; i < o.length; i++) {-1 == (c = o[i].trim().split(" "))[0].indexOf(".webp") && a.push({ path: c[0], size: c[1] }) }
                            a = a.sort(function(e, t) { return e.size < t.size ? 1 : e.size > t.size ? -1 : 0 });
                            var r = !1;
                            for (i = 0; i < a.length; i++) {
                                var c = a[i];
                                screen.width <= c.size && (t.src = c.path, r = !0)
                            }
                            r || (t.src = t.dataset.src)
                        } else t.src = t.dataset.src;
                        t.classList.remove("lazy"), 0 === (e = e.filter(function(e) { return e !== t })).length && (document.removeEventListener("scroll", n), window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n))
                    }
                }), t = !1)
            };
        document.addEventListener("scroll", n), window.addEventListener("resize", n), window.addEventListener("orientationchange", n), n()
    }), $(".navbar-toggler").click(function(e) { "true" == $(this).attr("aria-expanded") && ($(".navbar").find(".any-arrow-dropdown-menu-mobile").hide(), $(".navbar-bg").hide()), "false" == $(this).attr("aria-expanded") && ($(".navbar").find(".any-arrow-dropdown-menu-mobile").show(), $(".navbar-bg").show()), e.preventDefault() }), $(".navbar-bg").click(function(e) { $(e.target).is(".navbar-collapse") || $(".navbar-collapse").collapse("hide"), $(".navbar").find(".any-arrow-dropdown-menu-mobile").hide(), $(this).hide() }), $(document).ready(function() { $(".card-header-accordion").click(function(e) { $(this).removeClass("initial-load") }) }), $(function() { window.setTimeout(function() { $(".any-bubbleBadge").show(), $(".any-bubbleBadge-template").show(), $(".any-bubbleBadge-newLicenses").show(), $(".any-bubbleBadge-landingPageHeader").show() }, 1e3) }), $(document).ready(function() { $("[data-href]").click(function() { return window.location.href = $(this).data("href"), !1 }), $("[data-href-tab]").click(function() { return window.open($(this).data("href-tab"), "_blank"), !1 }), $("[data-href], [data-href-tab]").addClass("cursor-pointer") }), $("#alertClose").click(function() { $("#alertMessage").slideUp(300, function() { $(this).alert("close") }) }), $(document).ready(function() { $("[data-cookie-value]").each(function() { $(this).val(getCookie($(this).data("cookie-value"))), $(this).removeAttr("data-cookie-value") }) });
});