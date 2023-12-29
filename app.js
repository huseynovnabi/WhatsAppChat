"use strict";
$(document).ready(function () {
    $("#sendMe").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputMe").val()) == "") {
                let vall = $("#inputMe").val(),
                    newH6 = $('<h6></h6>'),
                    newLi = $(`<li ${myclass}></li>`)
                $(newH6).append(vall);
                $(newLi).append(newH6);
                return newLi;
            } else {
                return
            }
        }

        $("#ulMe").append(myel("class='liMe'"));
        $("#ulYou").append(myel("class='liYou'"));
        $("#inputMe").val("");

        document.querySelector("#messageMe").scrollTo(0, document.querySelector("#messageMe").scrollHeight);
        document.querySelector("#messageYou").scrollTo(0, document.querySelector("#messageYou").scrollHeight);
    });



    $("#sendYou").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputYou").val()) == "") {
                let vall = $("#inputYou").val(),
                    newH6 = $('<h6></h6>'),
                    newLi = $(`<li ${myclass}></li>`)
                $(newH6).append(vall);
                $(newLi).append(newH6);
                return newLi;
            } else {
                return
            }
        }

        $("#ulYou").append(myel("class='liMe'"));
        $("#ulMe").append(myel("class='liYou'"));
        $("#inputYou").val("");

        document.querySelector("#messageMe").scrollTo(0, document.querySelector("#messageMe").scrollHeight);
        document.querySelector("#messageYou").scrollTo(0, document.querySelector("#messageYou").scrollHeight);
    });
});
