var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
      layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value 
    })
}) 

document.getElementById("design").addEventListener("click", function () {
    togglePopContainer(".pop-container");
});

document.getElementById("designs").addEventListener("click", function () {
    togglePopContainer(".popcontainer1");
});

document.querySelectorAll(".close").forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        togglePopContainer(".pop-container");
    });
});

document.querySelectorAll(".closed").forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        togglePopContainer(".popcontainer1");
    });
});

function togglePopContainer(popContainerSelector) {
    var popContainer = document.querySelector(popContainerSelector);
    if (popContainer) {
        popContainer.style.display = (popContainer.style.display === "block") ? "none" : "block";
    }
}
