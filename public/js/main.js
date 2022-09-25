;(function () {
    "use strict"

    $(window).on("load", function () {
        $(".loader").delay(600).fadeOut("slow")
        setTimeout(function () {
            $(".cover .display-tc").addClass("fadeInUp")
        }, 800)
    })

    // Form
    const contactForm = function () {
        ;(function ($, window, document, undefined) {
            const $form = $("#contact-form")
            $form.submit(function (e) {
                // remove the error class
                $(".form-group").removeClass("has-error")
                $(".help-block").remove()
                const guestsList = []
                $(".guest-list input").each(function () {
                    guestsList.push(this.value)
                })
                // get the form data
                const formData = {
                    name: $('input[name="form-name"]').val(),
                    email: $('input[name="form-email"]').val(),
                    attending: $('.switch-field input[type="radio"]:checked').attr("id"),
                    guest: guestsList.join(", "),
                }
                // process the form
                $.ajax({
                    type: "POST",
                    url: "form.php",
                    data: formData,
                    dataType: "json",
                    encode: true,
                })
                    .done(function (data) {
                        // handle errors
                        if (!data.success) {
                            if (data.errors.name) {
                                $("#name-field").addClass("has-error")
                                $("#name-field")
                                    .find(".col-sm-6")
                                    .append('<span class="help-block">' + data.errors.name + "</span>")
                            }
                            if (data.errors.email) {
                                $("#email-field").addClass("has-error")
                                $("#email-field")
                                    .find(".col-sm-6")
                                    .append('<span class="help-block">' + data.errors.email + "</span>")
                            }
                        } else {
                            // display success message
                            $form.html('<div class="message-success">' + data.message + "</div>")
                        }
                    })
                    .fail(function (data) {
                        // for debug
                        // console.log(data);
                    })
                e.preventDefault()
            })
        })(jQuery, window, document)
    }

    // Offcanvas
    const offcanvasMenu = function () {
        $(".main").prepend('<div id="offcanvas" />')
        $(".main").prepend('<a href="#" class="js-nav-toggle nav-toggle nav-white"><i></i></a>')
        const clone1 = $(".menu-1 > ul").clone()
        $("#offcanvas").append(clone1)
        const clone2 = $(".menu-2 > ul").clone()
        $("#offcanvas").append(clone2)

        $("#offcanvas .has-dropdown").addClass("offcanvas-has-dropdown")
        $("#offcanvas").find("li").removeClass("has-dropdown")

        $(window).on("resize", function () {
            if ($("body").hasClass("offcanvas")) {
                $("body").removeClass("offcanvas")
                $(".js-nav-toggle").removeClass("active")
            }
        })
    }

    // Page scroll
    const pageScroll = function () {
        $("body").on("click touch", ".page-scroll", function (event) {
            const $anchor = $(this)
            if ($("body").hasClass("overflow offcanvas")) {
                $("body").removeClass("overflow offcanvas")
            } else {
                $("body").addClass("overflow offcanvas")
            }
            $(".js-nav-toggle").toggleClass("active")
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr("href")).offset().top,
                    },
                    1500,
                    "easeInOutExpo"
                )
            event.preventDefault()
        })
        $("nav").affix({
            offset: {
                top: $("#header").height(),
            },
        })
    }

    // Mobile menu
    const mobileMenuOutsideClick = function () {
        $(document).on("click", function (e) {
            const container = $("#offcanvas, .js-nav-toggle")
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas")
                    $(".js-nav-toggle").removeClass("active")
                }
            }
        })
    }

    // // Burgermenu
    const burgerMenu = function () {
        $("body").on("click", ".js-nav-toggle", function (event) {
            const $this = $(this)
            if ($("body").hasClass("overflow offcanvas")) {
                $("body").removeClass("overflow offcanvas")
            } else {
                $("body").addClass("overflow offcanvas")
            }
            $this.toggleClass("active")
            event.preventDefault()
        })
    }

    // Content way point
    const contentWayPoint = function () {
        let i = 0
        $(".animate-box").waypoint(
            function (direction) {
                if (direction === "down" && !$(this.element).hasClass("animated-fast")) {
                    i++
                    $(this.element).addClass("item-animate")
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            const el = $(this)
                            setTimeout(
                                function () {
                                    const effect = el.data("animate-effect")
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast")
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast")
                                    } else if (effect === "fadeInRight") {
                                        el.addClass("fadeInRight animated-fast")
                                    } else {
                                        el.addClass("fadeInUp animated-fast")
                                    }
                                    el.removeClass("item-animate")
                                },
                                k * 200,
                                "easeInOutExpo"
                            )
                        })
                    }, 100)
                }
            },
            { offset: "85%" }
        )
    }

    // Dropdown
    const dropdown = function () {
        $(".has-dropdown")
            .mouseenter(function () {
                const $this = $(this)
                $this.find(".dropdown").css("display", "block").addClass("animated-fast fadeInUpMenu")
            })
            .mouseleave(function () {
                const $this = $(this)
                $this.find(".dropdown").css("display", "none").removeClass("animated-fast fadeInUpMenu")
            })
    }

    // Testimonials
    const testimonialCarousel = function () {
        const owl = $(".owl-carousel-fullwidth")
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
        })
    }

    // Counter
    const counter = function () {
        $(".js-counter").countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals)
            },
        })
    }

    const counterWayPoint = function () {
        if ($("#counter").length > 0) {
            $("#counter").waypoint(
                function (direction) {
                    if (direction === "down" && !$(this.element).hasClass("animated")) {
                        setTimeout(counter, 400)
                        $(this.element).addClass("animated")
                    }
                },
                { offset: "90%" }
            )
        }
    }

    // Countdown
    const countdown = function () {
        const countdown = document.querySelector(".countdown")

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date())
            const seconds = Math.floor((t / 1000) % 60)
            const minutes = Math.floor((t / 1000 / 60) % 60)
            const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
            const days = Math.floor(t / (1000 * 60 * 60 * 24))
            return {
                total: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            }
        }

        function initializeClock(id, endtime) {
            const clock = document.getElementById(id)
            const daysSpan = clock.querySelector(".days")
            const hoursSpan = clock.querySelector(".hours")
            const minutesSpan = clock.querySelector(".minutes")
            const secondsSpan = clock.querySelector(".seconds")
            let newChild

            function updateClock() {
                const t = getTimeRemaining(endtime)
                const daysArr = String(t.days).split("")
                daysSpan.innerHTML = ""
                for (let i = 0; i < daysArr.length; i++) {
                    newChild = document.createElement("span")
                    newChild.innerHTML = daysArr[i]
                    daysSpan.appendChild(newChild)
                }
                const hoursArr = String(("0" + t.hours).slice(-2)).split("")
                hoursSpan.innerHTML = ""
                for (let i = 0; i < hoursArr.length; i++) {
                    newChild = document.createElement("span")
                    newChild.innerHTML = hoursArr[i]
                    hoursSpan.appendChild(newChild)
                }
                // var minuteArr = String(("0" + t.minutes).slice(-2)).split("");
                // minutesSpan.innerHTML = "";
                // for (var i = 0; i < minuteArr.length; i++) {
                //   newChild = document.createElement("span");
                //   newChild.innerHTML = minuteArr[i];
                //   minutesSpan.appendChild(newChild);
                // }
                // var secondArr = String(("0" + t.seconds).slice(-2)).split("");
                // secondsSpan.innerHTML = "";
                // for (var i = 0; i < secondArr.length; i++) {
                //   newChild = document.createElement("span");
                //   newChild.innerHTML = secondArr[i];
                //   secondsSpan.appendChild(newChild);
                // }
                if (t.total <= 0) {
                    clearInterval(timeinterval)
                }
            }
            updateClock()
            var timeinterval = setInterval(updateClock, 1000)
        }
        // set your wedding date here
        const deadline = "August 19 2023 16:00:00 GMT-0600"
        if (countdown) {
            initializeClock("timer", deadline)
        }
    }

    // Form
    function filledLabels() {
        const inputFields = $(".control-label").next()
        inputFields.each(function () {
            const singleInput = $(this)
            singleInput.on("focus blur", function (event) {
                checkVal(singleInput)
            })
        })
    }

    function checkVal(inputField) {
        if (inputField.val() === "") {
            if (event.type === "focus") {
                inputField.prev(".control-label").addClass("filled")
            } else if (event.type === "blur") {
                inputField.prev(".control-label").removeClass("filled")
            }
        }
    }

    function addGuest() {
        const addBtn = $(".add-button")
        const guestInput = $("#form-guest-name")
        const guestList = $(".guest-list")

        addBtn.on("click", function () {
            event.preventDefault()
            const guestVal = guestInput.val()
            const appendString = '<div><input class="form-control" type="text" value="' + guestVal + '"/><a href="#" class="remove_field"><i class="fa fa-trash"></i></a></div>'
            if (guestVal == "") {
                guestInput.focus()
            } else {
                guestList.append(appendString)
                guestInput.val("")
            }
        })

        $(".guest-list").on("click", ".remove_field", function (e) {
            e.preventDefault()
            $(this).parent("div").remove()
        })
    }

    const collapseEvents = function () {
        $("#accordion").on("show.bs.collapse hide.bs.collapse", function (e) {
            const elemId = $(e.target).attr("id") + "0"

            $("#accordion-img .collapse").collapse("hide")
            $("#" + elemId).collapse("toggle")
        })
    }

    const singlePost = function () {
        const hightLight = $(".post-hightlight")

        if ($("p").is(".post-hightlight")) {
            hightLight.prev().addClass("post-hightlight--before")
            hightLight.next().addClass("clearfix")
        }
    }

    const isotope = function () {
        const $container = $(".grid")

        $container.imagesLoaded(function () {
            $container.isotope({
                // options
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: ".grid-sizer",
                },
                getSortData: {
                    moments: ".moments", // text from querySelector
                    category: "[data-category]",
                    weight: function (itemElem) {
                        // function
                        const weight = $(itemElem).find(".weight").text()
                        return parseFloat(weight.replace(/[\(\)]/g, ""))
                    },
                },
            })
        })

        // filter functions
        const filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                const number = $(this).find(".number").text()
                return parseInt(number, 10) > 50
            },
            // show if name ends with -ium
            ium: function () {
                const name = $(this).find(".name").text()
                return name.match(/ium$/)
            },
        }
        // bind filter button click
        $(".filters-button-group").on("click", "button", function () {
            let filterValue = $(this).attr("data-filter")
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue
            $container.isotope({ filter: filterValue })
        })
        // change is-checked class on buttons
        $(".button-group").each(function (i, buttonGroup) {
            const $buttonGroup = $(buttonGroup)
            $buttonGroup.on("click", "button", function () {
                $buttonGroup.find(".is-checked").removeClass("is-checked")
                $(this).addClass("is-checked")
            })
        })
    }

    $(function () {
        pageScroll()
        mobileMenuOutsideClick()
        offcanvasMenu()
        burgerMenu()
        contentWayPoint()
        dropdown()
        testimonialCarousel()
        counter()
        counterWayPoint()
        countdown()
        filledLabels()
        addGuest()
        collapseEvents()
        singlePost()
        isotope()
        contactForm()
    })
})()
