"use strict"; window.messagebar = function (a) { let e = a("#messagebar"); !function () { let i = a("[data-message-bar-api-url]").data("message-bar-api-url") + "/shop";
    a.get(i).done(function (a) { e.html(a)}).fail(function (a) { console.log(a), e.hide() }) }() }(jQuery);
