<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Bina Diri Pictogram</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- 1. jQuery dulu -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- 2. jQuery UI (wajib untuk sortable) -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>

    <link rel="stylesheet" href="bootstrap\css\bootstrap.min.css">
</head>
<body>

    <div class="position-absolute start-0 end-0 p-3">
        <div id="board" class="row row-cols-4 g-2 p-3 border">

            <?php
              $angka = range(1, 8);
              shuffle($angka);
              foreach($angka as $i){
                $src = "'gambar-gambar games\mandi1_".$i.".png'";
            ?>
            <div class="col tile d-flex justify-content-center align-items-center border bg-light"
                 data-id=<?php echo $i; ?>>
              <img src=<?php echo $src; ?> class="img-fluid">
            </div>
            <?php } ?>

          </div>
          <audio id="incorrect" src="incorrect.mp3" volume="100"></audio>
          <audio id="success" src="success.mp3" volume="100"></audio>
          <div class="d-flex flex-row justify-content-between mt-3" style="width: 90vw;">
                <a href="latihan.html" class="btn-nostyle position-relative d-inline-flex align-items-center justify-content-center move-btn">
                    <img src="arrow-fat-left-fill.png"
                        alt=""
                        class="position-absolute top-0 start-0" style="width: 13vw; height: 12vh;">
                    <span class="position-relative text-white fw-bold text-uppercase" style="font-size: 1.2vw;">
                    KELUAR
                    </span>
                </a>
                <button onclick="checkOrder()" class="btn-nostyle d-flex flex-row justify-content-center align-items-center gap-3 mt-2" style="width: 90vw;">
                    <img src="play-circle-fill.png" alt="" style="width: 5vw;">
                    <b class="h1">Cek Urutan</b>
                </button>
                <button onclick="showElement('#gambar1','#gambar2')" class="btn-nostyle position-relative d-inline-flex align-items-center justify-content-center move-btn">
                    <img src="arrow-fat-right-fill.png"
                        alt=""
                        class="position-absolute top-0 start-0" style="width: 13vw; height: 12vh;">
                    <span class="position-relative text-white fw-bold text-uppercase" style="font-size: 1.2vw;">
                    LANJUT
                    </span>
                </button>
            </div>              
    </div>    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="main.js"></script>
</body>
</html>
