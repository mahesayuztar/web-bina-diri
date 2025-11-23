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

$(function () {
    $('#board').sortable({
      items: '.tile',
      placeholder: 'tile-placeholder',
      tolerance: 'pointer'
    });
  });
  
  function checkOrder() {
    const ids = $('#board .tile').map(function () {
      return $(this).data('id');
    }).get(); 
  
    const correct = [1,2,3,4,5,6,7,8];
    const isCorrect = correct.every((v, i) => v === ids[i]);
    
    if(isCorrect){
      $('#success')[0].play();
    }
    else {
      $('#incorrect')[0].play();
    }

    // alert(
    //   (isCorrect ? '✅ BENAR\n' : '❌ BELUM TEPAT\n') +
    //   'Urutan sekarang: ' + ids.join(' ')
    // );
  }
  