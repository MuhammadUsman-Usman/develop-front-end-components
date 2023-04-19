
$(function() {
    $(".radio-buttons").on("click", ".form-group", function() {
        let currentFormgroup = $(this);
        let currentLabel = currentFormgroup.find("label");

        if(currentFormgroup.find(".radio-accordions").is(":hidden")) {
            $(".form-group .radio-accordions:visible").slideUp(300)
            currentLabel.next(".radio-accordions").slideDown(300);
        }
    });
})