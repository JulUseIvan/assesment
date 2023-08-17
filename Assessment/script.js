$(document).ready(function() {
    var areas = $("map[name='cebu-map'] area");
    
    areas.each(function(index) {
        $(this).addClass("loc-" + (index + 1));

        var coords = $(this).attr("coords").split(",");
        var left = parseInt(coords[0]);
        var top = parseInt(coords[1]);
        
        var overlay = $("<div class='overlay'>" + "<span>" + (index + 1) + "</span>" + "</div>").css({
            left: left + "px",
            top: top + "px"
        });
        
        $(".map-content").append(overlay);
    });

    var totalAreas = areas.length;
    $(".total-address").text("There are " + totalAreas + " locations near you");

    $(".toggle-filters").addClass("hide");
    $(".filter-icon").click(function() {
        $(".toggle-filters").toggleClass("hide");
        $(".addresses").toggleClass("hide");
    });

    $(".close").click(function() {
        $(".toggle-filters").toggleClass("hide");
        $(".addresses").toggleClass("hide");
    });

    checkScreenSize();

    $(window).resize(checkScreenSize);

    function checkScreenSize() {
        var screenWidth = $(window).width();
        
        if (screenWidth <= 767) {
            $(".side-bar").addClass("active");
            $(".list-view.button").addClass("active");

            $(".list-view.button").click(function() {
                $(".list-view").addClass("active");
                $(".side-bar").addClass("active");
                $(".map-content").removeClass("active");
                $(".map-view").removeClass("active");
            });

            $(".map-view.button").click(function() {
                $(".map-view").addClass("active");
                $(".side-bar").removeClass("active");
                $(".map-content").addClass("active");
                $(".list-view").removeClass("active");
            });

        } else {
            $(".side-bar").removeClass("active");
            $(".button").removeClass("active");
            $(".map-content").removeClass("active");
        }
    }
});