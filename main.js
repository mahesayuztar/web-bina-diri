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
  // --- ambil prefix dari nama file html ---
  // contoh: /whatever/games-mandi.html -> baseName = "mandi"
  const path = window.location.pathname;
  const page = path.split('/').pop() || '';          // "games-mandi.html"
  let baseName = page.replace(/\.html$/i, '');       // "games-mandi"
  baseName = baseName.replace(/^games-/i, '');       // "mandi" / "cuci-tangan"
  baseName = baseName.replace(/\-/i, '_');

  // fungsi shuffle 1..n (Fisher-Yates)
  function getShuffledIndices(n) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // untuk semua board dengan id yang diawali "board"
  $('[id^="board"]').each(function () {
    const $board = $(this);

    // cari nomor board dari id: "board1" -> 1, "board2" -> 2
    const id = $board.attr('id');              // misal "board2"
    const match = id.match(/board(\d+)/);
    const boardNumber = match ? match[1] : '1';

    const tileCount = parseInt($board.data('tiles')) || 8;
    const angka = getShuffledIndices(tileCount);

    angka.forEach(function (i) {
      const src = `gambar-gambar games/${baseName}${boardNumber}_${i}.png`;
      const tileHtml = `
        <div class="col tile d-flex justify-content-center align-items-center border bg-light"
             data-id="${i}">
          <img src="${src}" class="img-fluid" alt="">
        </div>
      `;
      $board.append(tileHtml);
    });
  });


  // 4. setelah tile jadi, baru aktifkan sortable (kalau kamu pakai)
  $('.games-board').sortable({
      items: '.tile',
      placeholder: 'tile-placeholder',
      tolerance: 'pointer',
  });
});
  
function checkOrder(x) {
  // Ambil urutan tile yang sekarang (sesuai DOM)
  const ids = $(x+" .tile").map(function () {
      return parseInt($(this).data('id'));
  }).get();

  // Tentukan jumlah tile
  const totalTiles = ids.length;

  // Buat array urutan yang benar [1..N]
  const correct = Array.from({ length: totalTiles }, (_, i) => i + 1);

  // Cek apakah sama urutannya
  const isCorrect = ids.every((v, i) => v === correct[i]);

  // Play sound sesuai hasil
  if (isCorrect) {
      $('#success')[0].play();
  } else {
      $('#incorrect')[0].play();
  }
}

  