function login() {
    $(document).ready(function() {
        $("#register").click(function() {
            $("#right-login").css("display", "none");
            $("#right-register").css("display", "block");
        });
        $("#register-login").click(function() {
            $("#right-login").css("display", "block");
            $("#right-register").css("display", "none");
        });
        $("#login").click(function() {
            var email = document.getElementById("emailLogin").value;
            var password = document.getElementById("passwordLogin").value;
            if (email == "" || password == "") {
                alert("All fields must be filled out");
                return false;
            } else {
                window.location.href = "./home.html";
            }
        });
        $("#register-form").click(function() {
            var email = document.getElementById("emailInput").value;
            var password = document.getElementById("passwordInput").value;
            var fname = document.getElementById("fname").value;

            if (email == "" || password == "" || fname == "") {
                alert("All fields must be filled out");
                return false;
            } else {
                window.location.href = "./login.html";
            }
        });


    });
}

function slide() {
    // Variables:
    var nItems = 0;
    var iCurrentSlide = 1;
    var iNextSlide = 2;
    var iSlideInterval = 3; // in seconds
    var looper = null;

    $(document).ready(function() {
        // Show the first slide and start the slide show:
        $('.carousel > #item1').show();
        startSlider();

        // Make the slide show stop on slide hover:
        $('.carousel > div').hover(
            function() {
                // onmouseover
                window.clearInterval(looper);
            },
            function() {
                // onmouseout
                startSlider();
            });

        $('#redirect').click(function() {
            window.location.href = "./login.html";
        });

    });


    function startSlider() {
        nItems = $('.carousel > div').length;

        looper = setInterval(function() {
            if (iNextSlide > nItems) {
                iCurrentSlide = 1;
                iNextSlide = 1;
            }

            $('.carousel > div').hide();
            $('.carousel > #item' + iNextSlide).show();

            iCurrentSlide = iNextSlide;
            iNextSlide++;
        }, iSlideInterval * 1000);
    }

    function showSlide(isPrev) {
        window.clearInterval(looper);

        var iNewSlide = 0;

        if (isPrev) {
            // Show previous slide:
            iNewSlide = --iCurrentSlide;
        } else {
            // Show next slide:
            iNewSlide = ++iCurrentSlide;
        }

        if (iNewSlide > nItems)
            iNewSlide = 1;
        else if (iNewSlide < 1)
            iNewSlide = nItems;

        $('.carousel > div').hide();
        $('.carousel > #item' + iNewSlide).show();

        iCurrentSlide = iNewSlide;
        iNextSlide = iNewSlide + 1;

        startSlider();
    }
}