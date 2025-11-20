function showElement(caller, target) {
    $(caller).removeClass('d-flex').addClass('d-none');
    $(target).removeClass('d-none').addClass('d-flex');
    $('audio').each(function () {
        this.pause();
        this.currentTime = 0;
    });
}

function playSound() {
    $('#sound')[0].play();
}

function playSoundSpesific(x) {
    $(x)[0].play();
}