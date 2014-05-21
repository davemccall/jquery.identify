// identify: return either the object's current id or assigns a unique id to the object and returns that
//           works the same as the prototypejs method of the same name.
//
//  Usage: 
//    $(".things").each(function () {
//        console.log($(this).identify());
//    });

(function ($) {
    $.fn.identify = function () {
        if (this == null) return null;
        $this = $($(this)[0]);
        var id = $this.attr("id");
        if (id != null) if (id.length > 0) return id;
        var index = window["$.identify-index"];
        if (index == null) index = 0;
        id = "anonymous-element-" + index;
        $this.attr("id", id);
        window["$.identify-index"] = (index + 1);
        return id;
    }
})(jQuery);