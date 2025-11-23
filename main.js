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
  // 1. bikin array [1,2,3,4,5,6,7,8]
  const angka = Array.from({ length: 8 }, (_, i) => i + 1);

  // 2. shuffle (acak urutan)
  angka.sort(() => Math.random() - 0.5);  // untuk 1..8 ini sudah cukup

  const $board = $('#board');

  // 3. generate HTML tiap tile dan append ke #board
  angka.forEach(function (i) {
      const src = `gambar-gambar games/mandi1_${i}.png`; // pakai / ya, jangan \ kalau path web

      const tileHtml = `
          <div class="col tile d-flex justify-content-center align-items-center border bg-light"
               data-id="${i}">
            <img src="${src}" class="img-fluid">
          </div>
      `;

      $board.append(tileHtml);
  });

  // 4. setelah tile jadi, baru aktifkan sortable (kalau kamu pakai)
  $('#board').sortable({
      items: '.tile',
      placeholder: 'tile-placeholder',
      tolerance: 'pointer',
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
  