

// modal
(function() {
    let modal = document.querySelector(".modal"),
    modal_backdrop = document.querySelector(".modal-backdrop"),
    show_modal = document.querySelector(".show-modal");

    show_modal.addEventListener("click", function(e) {
        e.stopPropagation()
        modal.classList.add("show")
        modal_backdrop.classList.add("show")
    });
    
    document.addEventListener("click", function(e) {
        e.stopPropagation()
        if(e.target.closest(".modal")) {
            console.log("modal")
            if(e.target.matches(".modal__cancel")) {
                console.log(e.target.matches(".modal__cancel")  )
                modal.classList.remove("show");
                modal_backdrop.classList.remove("show");
            }
        }
        else {
            modal.classList.remove("show");
            modal_backdrop.classList.remove("show");
        }
    })
})();



