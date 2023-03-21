// const list = [
//   'images/01.jpg',
//   'images/02.jpg',
//   'images/03.jpg',
//   'images/04.jpg',
//   'images/05.jpg',
//   'images/06.jpg',
//   'images/07.jpg',
//   'images/08.jpg',
//   'images/09.jpg',
//   'images/10.jpg',
// ];


// addEventListenerの外でlet n
// clickはアロー関数、引数渡さない
// アロー関数の中でconsole.log(n) -> nの値を出力した。OK

// addEventListenerの中でlet n
// clickはアロー関数、引数渡さない
// アロー関数の中でconsole.log(n) -> nの値を出力した。OK

// addEventListenerの中でlet n
// clickはアロー関数、引数はn
// アロー関数の中でconsole.log(n) -> 出力した
// [PointerEvent]というオブジェクト？が返された

//続きは明日


    // プルリクする
    // loadはwinddocumentではない
    // document.addEventListener('load', () => { // 中は実行されない
      console.log('a')
    window.addEventListener('DOMContentLoaded', () => {
      const list = [
      'images/01.jpg',
      'images/02.jpg',
      'images/03.jpg',
      'images/04.jpg',
      'images/05.jpg',
      'images/06.jpg',
      'images/07.jpg',
      'images/08.jpg',
      'images/09.jpg',
      'images/10.jpg',
    ];
      const img = document.getElementById('main')
      const [arrowL, arrowR] = document.getElementsByTagName('span');
      // console.log(list)
      img.src = list[imgIndex];
      arrowL.addEventListener('click', function(img, imgIndex){
        console.log(imgIndex)
        img.src = list[imgIndex++];

      })

    })