$(document).ready(function() {
    $(".js-scroll-btn").on("click", function() {
        $("html,body")
            .stop()
            .animate({
                    scrollTop: $(".terms").offset().top - 60,
                },
                "slow"
            );
    });

    $(".accordion__text").on("click", function() {
        if ($(this).hasClass("accordion__text-opened")) {
            $(this).removeClass("accordion__text-opened");
            $(this).siblings(".accordion__body").slideUp(300);
        } else {
            $(".accordion__text").removeClass("accordion__text-opened");
            $(this).addClass("accordion__text-opened");
            $(".accordion__body").slideUp(300);
            $(this).siblings(".accordion__body").slideDown(300);
        }
    });
});

window.addEventListener("load", function() {
    let destination = "games";

    const tabs = document.querySelectorAll(".js-tab"),
        tabParents = document.querySelectorAll(".js-tab-parent"),
        contentWrapper = document.querySelector(".js-content"),
        gameLists = document.querySelectorAll(".js-list");

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const target = e.target,
                gotoTab = target.dataset.goto;

            tabParents.forEach((parent) => {
                parent.classList.remove("active");
            });

            target.parentNode.classList.add("active");

            contentWrapper.dataset.currentTab = gotoTab;

            gameLists.forEach((list) => {
                list.classList.remove("grid-list");
            });

            destination = "games";

            if (gotoTab !== "offline") {
                return;
            }

            gameLists.forEach((list) => {
                list.classList.add("grid-list");
            });

            destination = "form";
        });
    });
});

const swiper1 = new Swiper('.terms-boxes', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: -150,
    breakpoints: {
        // when window width is >= 320px
        280: {
            spaceBetween: 0,
        },
        360: {
            spaceBetween: -120,
        },
        370: {
            spaceBetween: -150,
        },
    },
})

const swiper2 = new Swiper('.prize-blocks', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: -150,
    breakpoints: {
        // when window width is >= 320px
        280: {
            spaceBetween: 0,
        },
        360: {
            spaceBetween: -120,
        },
        370: {
            spaceBetween: -150,
        },
    },
})